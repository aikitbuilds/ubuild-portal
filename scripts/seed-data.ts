import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

import { collections, db } from '../lib/firebase/admin';

async function seedData() {
    console.log("🌱 Seeding test data...");

    const batch = db.batch();

    // 1. Seed 75 volunteers
    const volunteers = [];
    for (let i = 1; i <= 75; i++) {
        const id = `test-vol-${Math.random().toString(36).substr(2, 9)}`;
        const vol = {
            id,
            name: `Test Volunteer ${i}`,
            firstName: `Test`,
            lastName: `Volunteer ${i}`,
            email: `test${i}@example.com`,
            phone: `555-01${i.toString().padStart(2, '0')}`,
            reliabilityScore: 80 + Math.floor(Math.random() * 20),
            experience_level: 'intermediate',
            distanceFromVenue: 10 + Math.floor(Math.random() * 50),
            status: 'pending'
        };
        const ref = collections.volunteers.doc(vol.id);
        batch.set(ref, vol);
        volunteers.push(vol);
    }

    // 2. Seed assignments for them
    const stations = ['Dam Nation', 'Hells Canyon', 'Far Side', 'Lone Star'];
    for (const vol of volunteers) {
        const assignmentId = `asg-${vol.id}-dam`;
        const asg = {
            id: assignmentId,
            volunteerId: vol.id,
            station: stations[Math.floor(Math.random() * stations.length)],
            role: 'Aid Station Crew',
            status: 'confirmed',
            startTime: new Date(),
            endTime: new Date(Date.now() + 8 * 60 * 60 * 1000)
        };
        const ref = collections.assignments.doc(assignmentId);
        batch.set(ref, asg);
    }

    await batch.commit();
    console.log("✅ Seed complete! 75 Volunteers and Assignments created.");
}

seedData();
