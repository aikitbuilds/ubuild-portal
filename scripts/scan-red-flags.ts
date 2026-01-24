import { fetchVolunteers } from '../lib/google-sheets';
import { getVolunteerSuggestion } from '../lib/ai/ghost-writer';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function scanRedFlags() {
    console.log('🕵️ Scanning Live Roster for Red Flags...\n');

    try {
        const volunteers = await fetchVolunteers();
        console.log(`📊 Found ${volunteers.length} volunteer records.\n`);

        const conflicts: any[] = [];
        const suggestions: any[] = [];

        // 1. Conflict Detection (Simple overlap check)
        // Heuristic: If email appears twice and times overlap
        const emailMap: Record<string, typeof volunteers[0][]> = {};
        volunteers.forEach(v => {
            if (v.email) {
                if (!emailMap[v.email]) emailMap[v.email] = [];
                emailMap[v.email].push(v);
            }
        });

        Object.values(emailMap).forEach(shifs => {
            if (shifs.length > 1) {
                // Potential overlap? Need robust time parsing
                // For now, note multiple shifts
                conflicts.push({
                    name: `${shifs[0].firstName} ${shifs[0].lastName}`,
                    shifts: shifs.map(s => s.shiftTime)
                });
            }
        });

        // 2. AI Suggestions (Pick 5 random unassigned with notes)
        const candidates = volunteers.filter(v => !v.role && v.notes && v.notes.length > 10).slice(0, 5);

        console.log(`✨ Running AI "Ghost Writer" on ${candidates.length} candidates...\n`);

        for (const v of candidates) {
            const suggestion = await getVolunteerSuggestion(`${v.firstName} ${v.lastName}`, v.notes, v.role);
            if (suggestion) {
                suggestions.push({
                    name: `${v.firstName} ${v.lastName}`,
                    notes: v.notes,
                    suggestion: suggestion
                });
            }
        }

        // --- REPORT ---
        console.log('--- RED FLAG REPORT ---');
        console.log(`⚠️ Multiple Shifts Detected: ${conflicts.length}`);
        conflicts.slice(0, 3).forEach(c => {
            console.log(`   - ${c.name}: ${c.shifts.join(' | ')}`);
        });

        console.log(`\n🤖 AI Assignment Suggestions:`);
        suggestions.forEach(s => {
            console.log(`   - ${s.name}: "${s.notes.substring(0, 40)}..."`);
            console.log(`     🎯 Suggested: ${s.suggestion.suggested_station} | ${s.suggestion.suggested_role}`);
            console.log(`     💡 Why: ${s.suggestion.reasoning}\n`);
        });

    } catch (e: any) {
        console.error('Scan Error:', e.message);
    }
}

scanRedFlags();
