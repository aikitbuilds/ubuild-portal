import { db } from "@/lib/firebase/client";
import { collection, doc, writeBatch, Timestamp, getDocs } from "firebase/firestore";

export interface RoadmapPhase {
    id: string;
    name: string;
    startDate: Timestamp;
    targetDate: Timestamp;
    progress: number; // 0-100
    status: 'planning' | 'active' | 'completed';
    modules: string[];
}

export interface ProjectBlocker {
    id: string;
    title: string;
    owner: string;
    status: 'investigating' | 'blocked' | 'resolved';
    severity: 'critical' | 'high' | 'low';
    notes: string;
    createdAt: Timestamp;
}

export const SEED_PHASES: RoadmapPhase[] = [
    {
        id: "phase-1",
        name: "Phase 1: Volunteer Portal",
        startDate: Timestamp.fromDate(new Date("2024-01-01")), // Approximate start
        targetDate: Timestamp.fromDate(new Date("2024-02-06")),
        progress: 100,
        status: 'completed',
        modules: ["Volunteer Dashboard", "Shift Scheduling", "Check-In Kiosk", "Admin Sidebar"]
    },
    {
        id: "phase-2",
        name: "Phase 2: Racer Operations",
        startDate: Timestamp.fromDate(new Date("2025-02-09")),
        targetDate: Timestamp.fromDate(new Date("2025-03-01")),
        progress: 0,
        status: 'planning', // Or 'active' depending on interpretation, user said "0% Complete" so likely planning/just started.
        modules: ["Bib Assignment", "Live Tracking", "Interactive Maps", "Results Integration"]
    }
];

export const SEED_BLOCKERS: ProjectBlocker[] = [
    {
        id: "blocker-1",
        title: "Kyle Timing API Interface",
        owner: "Dave",
        status: 'investigating',
        severity: 'critical',
        notes: "Need documentation on the pull-mode API for race times.",
        createdAt: Timestamp.now()
    },
    {
        id: "blocker-2",
        title: "Legal Review (Liability)",
        owner: "Brooke",
        status: 'blocked',
        severity: 'critical',
        notes: "Waiver integration with RunSignup needs final approval.",
        createdAt: Timestamp.now()
    }
];

export async function seedStrategyData() {
    try {
        // Check if data exists to avoid overwriting
        const phasesSnap = await getDocs(collection(db, "roadmap_phases"));
        if (!phasesSnap.empty) {
            console.log("Strategy data already seeded.");
            return;
        }

        console.log("Seeding Strategy Data...");
        const batch = writeBatch(db);

        SEED_PHASES.forEach(phase => {
            const ref = doc(db, "roadmap_phases", phase.id);
            batch.set(ref, phase);
        });

        SEED_BLOCKERS.forEach(blocker => {
            const ref = doc(db, "project_blockers", blocker.id);
            batch.set(ref, blocker);
        });

        await batch.commit();
        console.log("Strategy Data Seeded Successfully.");
    } catch (error) {
        console.error("Error seeding strategy data:", error);
    }
}
