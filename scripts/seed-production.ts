import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { db } from "../lib/firebase/client"; // Adjust import if running via ts-node might need admin SDK
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { generateGhostData } from "../lib/tejas/data";

async function seedProduction() {
    console.log(`🌱 Starting Production Seed for Tejas V2...`);
    console.log(`🎯 Target Project ID: ${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}`);

    // 1. Generate Ghost Data (V1 Data)
    const { volunteers, assignments, alerts } = generateGhostData();

    console.log(`📦 Prepared: ${volunteers.length} Volunteers, ${assignments.length} Assignments, ${alerts.length} Alerts.`);

    // 2. Write to Firestore
    // Volunteers
    for (const v of volunteers) {
        await setDoc(doc(db, "volunteers", v.id), v);
        process.stdout.write(".");
    }
    console.log("\n✅ Volunteers Seeded.");

    // Assignments
    for (const a of assignments) {
        await setDoc(doc(db, "assignments", a.id), {
            ...a,
            startTime: a.startTime, // Firestore SDK handles Date objects
            endTime: a.endTime
        });
        process.stdout.write(".");
    }
    console.log("\n✅ Assignments Seeded.");

    // Alerts
    for (const al of alerts) {
        await setDoc(doc(db, "alerts", al.id), {
            ...al,
            created_at: al.created_at
        });
    }
    console.log("\n✅ Alerts Seeded.");

    console.log("🎉 Production Seed Complete!");
}

// Check if running directly
if (require.main === module) {
    seedProduction().catch(console.error);
}

export { seedProduction };
