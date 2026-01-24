import { db } from "@/lib/firebase/client";
import { writeBatch, doc, Timestamp } from "firebase/firestore";
import { generateGhostData } from "./data"; // V1 Logic
import { volunteersRef, assignmentsRef } from "./db"; // V2 Refs
import { calculateRiskScore } from "./intelligence";
import { Volunteer, Assignment } from "./schema";

export async function seedV2ProductionDatabase() {
    console.log("Starting V2 Hydration...");
    const { volunteers: v1Volunteers, assignments: v1Assignments } = generateGhostData();
    const batch = writeBatch(db);
    let count = 0;

    // 1. Map Volunteers
    v1Volunteers.forEach(v1 => {
        // Convert history strings (V1 had ["Race Name"]) to Reliability strings for V2 demo
        // We'll mimic reliability history based on reliability score
        const reliabilityHistory: string[] = [];
        if (v1.reliabilityScore > 90) reliabilityHistory.push("On Time", "On Time");
        else if (v1.reliabilityScore < 70) reliabilityHistory.push("Late", "No Show");
        else reliabilityHistory.push("On Time");

        // Map to V2
        const v2: Volunteer = {
            id: v1.id,
            firstName: v1.firstName,
            lastName: v1.lastName,
            email: v1.email,
            phone: v1.phone,
            photoUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${v1.firstName}`,
            credits: 0, // Init
            distanceFromVenue: v1.distanceFromVenue,
            roles: v1.experience_level === 'expert' ? ['Captain'] : ['General'],
            aiMetrics: {
                riskScore: 0, // Will calc below
                reliabilityHistory: reliabilityHistory
            }
        };

        // Calculate AI Risk
        v2.aiMetrics!.riskScore = calculateRiskScore(v2, v1.reliabilityScore);

        const ref = doc(volunteersRef, v2.id);
        batch.set(ref, v2);
        count++;
    });

    // 2. Map Assignments
    v1Assignments.forEach(a1 => {
        const v2Assignment: Assignment = {
            id: a1.id,
            volunteerId: a1.volunteerId,
            raceId: "tejas-500-2026", // Hardcoded for MVP
            stationId: a1.station,
            shiftStart: Timestamp.fromDate(a1.startTime),
            shiftEnd: Timestamp.fromDate(a1.endTime),
            status: a1.status === 'active' ? 'checkedIn' : (a1.status as any) || 'confirmed'
        };

        const ref = doc(assignmentsRef, v2Assignment.id);
        batch.set(ref, v2Assignment);
        count++;
    });

    // Commit
    await batch.commit();
    console.log(`V2 Hydration Complete. Wrote ${count} documents.`);
    return count;
}
