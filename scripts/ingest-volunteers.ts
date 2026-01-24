/**
 * Intelligent Volunteer Ingestion Script
 *
 * Usage: npx tsx scripts/ingest-volunteers.ts <path-to-csv> [--dry-run]
 *
 * 1. Parses CSV export from Google Sheets.
 * 2. Uses Gemini AI to analyze preferences/availability and suggest assignments.
 * 3. Detects conflicts.
 * 4. Writes to Firestore (or logs if dry-run).
 */

import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Volunteer, Assignment, detectConflicts } from '../lib/tejas/data';
import { collections } from '../lib/firebase/admin';

// Load env
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const DRY_RUN = process.argv.includes('--dry-run');

if (!GEMINI_API_KEY) {
    console.error('❌ GEMINI_API_KEY not found in .env.local');
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

interface CsvRecord {
    Name: string;
    Email: string;
    Phone: string;
    Availability: string;
    Preferences: string;
    'Current Assignment': string;
}

export async function ingestVolunteers(csvPath: string) {
    console.log(`🚀 Starting Intelligent Ingestion from: ${csvPath}`);
    if (DRY_RUN) console.log('⚠️  DRY RUN MODE: No changes will be written to DB.');

    if (!fs.existsSync(csvPath)) {
        console.error(`❌ File not found: ${csvPath}`);
        return;
    }

    const fileContent = fs.readFileSync(csvPath, 'utf-8');
    const records = parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true
    }) as CsvRecord[];

    const volunteers: Volunteer[] = [];
    const assignments: Assignment[] = [];

    console.log(`📋 Found ${records.length} records. Processing...`);

    for (let i = 0; i < records.length; i++) {
        const record = records[i];
        const id = `v-ingest-${i + 1}`;
        const nameParts = record.Name.split(' ');
        const firstName = nameParts[0];
        const lastName = nameParts.slice(1).join(' ') || '';

        // 1. Create Volunteer Object
        const volunteer: Volunteer = {
            id,
            firstName,
            lastName,
            name: record.Name,
            email: record.Email || `volunteer${i}@example.com`, // Mock if empty
            phone: record.Phone || '555-0000',
            reliabilityScore: 90, // Default start
            experience_level: 'intermediate',
            history: [],
            distanceFromVenue: 10
        };
        volunteers.push(volunteer);

        // 2. Handle Assignments & AI Suggestions
        const hasExistingAssignment = !!record['Current Assignment'];

        if (hasExistingAssignment) {
            // Parse existing assignment (simple logic for now, assuming "Station - Role")
            const parts = record['Current Assignment'].split('-');
            const station = parts[0]?.trim() || 'Unknown';
            const role = parts[1]?.trim() || 'General';

            assignments.push({
                id: `a-${id}`,
                volunteerId: id,
                station,
                role,
                startTime: new Date('2026-02-06T08:00:00'), // Placeholder
                endTime: new Date('2026-02-06T16:00:00'),   // Placeholder
                status: 'confirmed'
            });
        } else {
            // Call LLM for suggestion
            console.log(`🤖 Analyzing for ${record.Name}...`);
            const suggestion = await getAiSuggestion(record.Preferences, record.Availability);

            assignments.push({
                id: `a-${id}`,
                volunteerId: id,
                station: suggestion.suggested_station,
                role: suggestion.suggested_role,
                startTime: new Date('2026-02-06T08:00:00'), // Placeholder
                endTime: new Date('2026-02-06T16:00:00'),   // Placeholder
                status: 'suggested',
                suggested_station: suggestion.suggested_station,
                reasoning: suggestion.reasoning
            });
        }
    }

    // 3. Conflict Detection
    console.log('⚔️  Running Conflict Detection...');
    const conflicts = detectConflicts(assignments);
    if (conflicts.length > 0) {
        console.log(`⚠️  Found ${conflicts.length} conflicts.`);
        conflicts.forEach(c => console.log(`   - ${c.message}`));
    } else {
        console.log('✅ No conflicts detected.');
    }

    // 4. Write to Firestore
    if (!DRY_RUN) {
        console.log('💾 Writing to Firestore...');
        const batch = collections.volunteers.firestore.batch();

        volunteers.forEach(v => {
            const ref = collections.volunteers.doc(v.id);
            batch.set(ref, v);
        });

        assignments.forEach(a => {
            const ref = collections.assignments.doc(a.id);
            batch.set(ref, a); // In real app, might separate 'suggestions' collection
        });

        await batch.commit();
        console.log(`✅ Successfully wrote ${volunteers.length} volunteers and ${assignments.length} assignments.`);
    } else {
        console.log('🛑 Dry run complete. Skipping DB write.');
        // console.log(JSON.stringify(assignments, null, 2));
    }
}

async function getAiSuggestion(preferences: string, availability: string) {
    const prompt = `
    You are an expert Race Director for the Rocky 100 which has stations: 
    Start/Finish, Aid Station 1, Aid Station 2, Packet Pickup, Course Marking.

    Volunteer Preferences: "${preferences}"
    Volunteer Availability: "${availability}"

    Rules:
    - IF note says 'watch grandson/family', ASSIGN to 'Start/Finish' or 'Aid Station 1'.
    - IF note says 'hurt knee' or 'injury', ASSIGN to 'Packet Pickup' or 'Seated Role'.
    - IF note says 'want to work with [Name]', FLAG as 'Pairing Request: [Name]'.
    - Default to 'Aid Station 2' if no specific preference.

    Return a JSON object ONLY:
    { "suggested_station": "Station Name", "suggested_role": "Role Name", "reasoning": "Why you chose this" }
    `;

    try {
        const result = await model.generateContent(prompt);
        const text = result.response.text();
        // Simple cleanup for JSON parsing
        const cleaned = text.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(cleaned);
    } catch (e) {
        console.error('AI Error:', e);
        return { suggested_station: 'Unassigned', suggested_role: 'Pending', reasoning: 'AI Error' };
    }
}

// CLI Execution
if (require.main === module) {
    const csvFile = process.argv[2];
    if (csvFile) {
        ingestVolunteers(path.resolve(process.cwd(), csvFile)).catch(console.error);
    } else {
        console.log('Usage: npx tsx scripts/ingest-volunteers.ts <data.csv>');
    }
}
