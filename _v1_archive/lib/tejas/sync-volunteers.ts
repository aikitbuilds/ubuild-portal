import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { collections } from '../firebase/admin';
import { Volunteer, Assignment, Alert, detectConflicts } from './data';
import { calculateVolunteerRisk } from './intelligence';

/**
 * Syncs volunteer data from a Google Sheet to Firestore.
 * Authenticates using a Service Account and upserts rows based on Email.
 */
export async function syncVolunteersFromSheet() {
    const sheetId = process.env.GOOGLE_SHEET_ID;
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (!sheetId || !clientEmail || !privateKey) {
        console.error("❌ Missing Google credentials in environment variables.");
        throw new Error("Missing Google credentials. Check GOOGLE_SHEET_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL, and GOOGLE_PRIVATE_KEY.");
    }

    try {
        const serviceAccountAuth = new JWT({
            email: clientEmail,
            key: privateKey,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);
        await doc.loadInfo();

        const sheet = doc.sheetsByIndex[0]; // Assume first sheet
        const rows = await sheet.getRows();

        console.log(`🚀 Starting sync for ${rows.length} rows from Google Sheet...`);

        let updatedCount = 0;
        const allAssignments: Assignment[] = [];

        for (const row of rows) {
            const rowData = row.toObject();
            const email = (rowData['Email'] || '').trim().toLowerCase();

            if (!email) continue;

            const name = rowData['Name'] || '';
            const nameParts = name.split(' ');
            const firstName = nameParts[0] || '';
            const lastName = nameParts.slice(1).join(' ') || '';

            // 1. Map Volunteer Data
            const volunteer: Volunteer = {
                id: email,
                firstName,
                lastName,
                name,
                email,
                phone: rowData['Phone'] || '',
                reliabilityScore: parseInt(rowData['Reliability'] || '85'),
                experience_level: (rowData['Experience'] || 'intermediate').toLowerCase() as any,
                history: [],
                distanceFromVenue: parseInt(rowData['Distance'] || '0'),
                written_instructions: rowData['Written Instructions'] || '',
                voice_instruction_url: rowData['Voice Instruction URL'] || rowData['Voice URL'] || '',
            };

            // Day 9: Calculate AI Risk Score
            const riskScore = calculateVolunteerRisk(volunteer);
            volunteer.riskScore = riskScore;

            // Upsert Volunteer to Firestore
            await collections.volunteers.doc(email).set(volunteer, { merge: true });

            // 2. Map Assignment Data
            const station = rowData['Station'];
            const role = rowData['Role'] || rowData['Assignment'] || 'Crew';
            const shiftTime = rowData['Shift'] || rowData['Shift Time'] || '';

            if (station) {
                const assignmentId = `asg-${email}-${station.replace(/[^a-zA-Z0-9]/g, '-')}`;
                const assignment: Assignment = {
                    id: assignmentId,
                    volunteerId: email,
                    station,
                    role,
                    shift_time: shiftTime,
                    status: 'confirmed',
                    // Default dates if not provided
                    startTime: new Date(),
                    endTime: new Date(Date.now() + 8 * 60 * 60 * 1000)
                };

                await collections.assignments.doc(assignmentId).set(assignment, { merge: true });
                allAssignments.push(assignment);

                // Day 9 Alert: High No-Show Risk
                if (riskScore > 70) {
                    const alertId = `alert-risk-${email}`;
                    const riskAlert: Alert = {
                        id: alertId,
                        type: 'no-show',
                        severity: 'red',
                        status: 'open',
                        volunteerId: email,
                        station,
                        message: `Critical no-show risk detected for ${name} (${riskScore}%).`,
                        ai_recommendation: "Activate backup or contact immediately.",
                        created_at: new Date(),
                        risk_score: riskScore
                    };
                    await collections.issues.doc(alertId).set(riskAlert, { merge: true });
                }
            }

            updatedCount++;
        }

        // Day 9: Conflict Detection
        console.log("🔍 Scanning for assignment conflicts...");
        const conflicts = detectConflicts(allAssignments);
        for (const conflict of conflicts) {
            await collections.issues.doc(conflict.id).set(conflict, { merge: true });
        }

        console.log(`✅ Sync complete! ${updatedCount} records processed. ${conflicts.length} conflicts detected.`);
        return { success: true, updatedCount, conflictCount: conflicts.length };

    } catch (error: any) {
        console.error("❌ Google Sheets Sync Error:", error.message);
        throw error;
    }
}
