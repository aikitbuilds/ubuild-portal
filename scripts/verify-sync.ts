import dotenv from 'dotenv';
import path from 'path';
// Load env before imports
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

import { syncVolunteersFromSheet } from '../lib/tejas/sync-volunteers';
import { collections } from '../lib/firebase/admin';

async function verify() {
    console.log("🌀 Starting Verification Sync...");
    try {
        const result = await syncVolunteersFromSheet();
        console.log("✅ Sync Result:", result);

        const volunteerSnapshot = await collections.volunteers.get();
        console.log(`📊 Firestore Volunteers: ${volunteerSnapshot.size}`);

        const assignmentSnapshot = await collections.assignments.get();
        console.log(`📊 Firestore Assignments: ${assignmentSnapshot.size}`);

        const alertSnapshot = await collections.issues.get();
        console.log(`📊 Firestore Alerts/Issues: ${alertSnapshot.size}`);

        if (volunteerSnapshot.size > 0) {
            console.log("🚀 VERIFICATION SUCCESSFUL: Live data pipeline is active.");
        } else {
            console.warn("⚠️ VERIFICATION WARNING: No volunteers found after sync. Check Google Sheet content.");
        }
    } catch (error) {
        console.error("❌ Verification Failed:", error);
    }
    process.exit(0);
}

verify();
