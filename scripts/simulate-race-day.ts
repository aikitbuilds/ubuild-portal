import dotenv from 'dotenv';
import path from 'path';
// Load env before imports
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

import { collections } from '../lib/firebase/admin';

async function simulateRaceDay() {
    const args = process.argv.slice(2);
    const dryRun = args.includes('--dry-run');
    const concurrency = 70;
    const windowSeconds = 60;

    console.log(`🚀 Starting Race Day Simulation...`);
    console.log(`Mode: ${dryRun ? 'DRY RUN (No Firestore writes)' : 'LIVE TEST'}`);

    try {
        // 1. Fetch volunteers
        const volSnapshot = await collections.volunteers.get();
        const allVolunteers = volSnapshot.docs.map(d => ({ id: d.id, ...d.data() }));

        if (allVolunteers.length === 0) {
            console.error("❌ No volunteers found in Firestore. Run sync first.");
            return;
        }

        // 2. Fetch assignments
        const asgSnapshot = await collections.assignments.get();
        const allAssignments = asgSnapshot.docs.map(d => ({ id: d.id, ...d.data() } as any));

        // 3. Selection
        const targetCount = Math.min(concurrency, allVolunteers.length);
        const selectedVolunteers = allVolunteers.slice(0, targetCount);

        console.log(`📦 Simulating ${targetCount} check-ins...`);

        const startTime = Date.now();
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

        // 4. Fire concurrent requests
        const tasks = selectedVolunteers.map(async (vol: any) => {
            const assignment = allAssignments.find(a => a.volunteerId === vol.id);
            if (!assignment) return null;

            // Wait a random jitter within the window
            const jitter = Math.random() * (windowSeconds * 1000);
            await new Promise(resolve => setTimeout(resolve, jitter));

            if (dryRun) {
                return { success: true, volunteerId: vol.id, latency: 20 };
            }

            const startRequest = Date.now();
            try {
                const response = await fetch(`${baseUrl}/api/tejas/checkin`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        volunteerId: vol.id,
                        assignmentId: assignment.id,
                        location: { lat: 29.7604, lng: -95.3698 }
                    }),
                });

                const data: any = await response.json();
                return {
                    success: data.success,
                    volunteerId: vol.id,
                    latency: Date.now() - startRequest
                };
            } catch (err: any) {
                return {
                    success: false,
                    volunteerId: vol.id,
                    error: err.message,
                    latency: Date.now() - startRequest
                };
            }
        });

        const results = await Promise.all(tasks);
        const filteredResults = results.filter(r => r !== null);
        const successful = filteredResults.filter(r => r?.success).length;
        const failed = filteredResults.filter(r => r && !r.success).length;
        const latencies = filteredResults.filter(r => r?.latency).map(r => r!.latency);
        const avgLatency = latencies.length > 0 ? latencies.reduce((a, b) => a + b, 0) / latencies.length : 0;

        console.log("\n--- Simulation Results ---");
        console.log(`Total Attempts: ${targetCount}`);
        console.log(`Processed: ${filteredResults.length}`);
        console.log(`Success Rate: ${((successful / filteredResults.length) * 100).toFixed(1)}%`);
        console.log(`Failed: ${failed}`);
        console.log(`Avg Latency: ${avgLatency.toFixed(2)}ms`);
        console.log(`Total Simulation Time: ${((Date.now() - startTime) / 1000).toFixed(1)}s`);

    } catch (error) {
        console.error("❌ Simulation Failed:", error);
    }
}

simulateRaceDay();
