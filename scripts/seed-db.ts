
import dotenv from 'dotenv';
import path from 'path';

// Load env before imports
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

import { collections, db } from '../lib/firebase/admin';
import { generateGhostData, generateMockTickets } from '../lib/tejas/data';

async function seedDatabase() {
    console.log("🌱 Starting Database Seeding...");

    // 1. Generate Data
    const { volunteers, assignments, alerts } = generateGhostData();
    const tickets = generateMockTickets();

    console.log(`📦 Generated Payload:`);
    console.log(`   - ${volunteers.length} Volunteers`);
    console.log(`   - ${assignments.length} Assignments`);
    console.log(`   - ${alerts.length} Alerts`);
    console.log(`   - ${tickets.length} Tickets`);

    try {
        const batch = db.batch();
        let opCount = 0;

        // Volunteers
        for (const v of volunteers) {
            const ref = collections.volunteers.doc(v.id);
            batch.set(ref, v, { merge: true });
            opCount++;
        }

        // Assignments
        for (const a of assignments) {
            const ref = collections.assignments.doc(a.id);
            batch.set(ref, {
                ...a,
                // Ensure dates are Firestore compatible (Admin SDK handles Date objects)
            }, { merge: true });
            opCount++;
        }

        // Alerts
        for (const a of alerts) {
            const ref = collections.issues.doc(a.id);
            batch.set(ref, a, { merge: true });
            opCount++;
        }

        // Tickets (if separate collection, assuming 'tickets' exists or reusing issues/alerts pattern)
        // Note: collections.issues is mapped to 'issues' collection. 
        // If tickets are meant to be in 'tickets', we need that ref. 
        // Checks admin.ts... usually generic. Let's assume 'tickets' collection for now or check admin.ts?
        // Let's check admin.ts first? No, let's just use db.collection('tickets').
        for (const t of tickets) {
            const ref = db.collection('tickets').doc(t.id);
            batch.set(ref, t, { merge: true });
            opCount++;
        }

        console.log(`💾 Committing ${opCount} operations to Firestore...`);
        await batch.commit();

        console.log("✅ Database Seeded Successfully!");
        console.log("   Ready for 'simulate-race-day.ts' or App usage.");

    } catch (error) {
        console.error("❌ Seeding Failed:", error);
    }
}

seedDatabase();
