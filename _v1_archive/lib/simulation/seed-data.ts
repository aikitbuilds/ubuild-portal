
import { collection, doc, writeBatch, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase/client";

// MOCK DATA

const ATHLETES = [
    {
        id: "ath_001",
        name: "Sarah V.",
        status: "active",
        readinessScore: 92,
        currentPace: "8:45/mi",
        targetPace: "8:30/mi",
        bonkRisk: "low",
        location: "Mile 42 - Devil's Thumb",
        lastCheckIn: "10 mins ago",
        avatar: "/assets/avatars/athlete1.jpg" // Placeholder
    },
    {
        id: "ath_002",
        name: "Marcus R.",
        status: "active",
        readinessScore: 78,
        currentPace: "12:10/mi",
        targetPace: "10:00/mi",
        bonkRisk: "high",
        location: "Mile 68 - Bear Creek",
        lastCheckIn: "2 mins ago",
        avatar: "/assets/avatars/athlete2.jpg"
    },
    {
        id: "ath_003",
        name: "Elena G.",
        status: "active",
        readinessScore: 88,
        currentPace: "9:15/mi",
        targetPace: "9:15/mi",
        bonkRisk: "low",
        location: "Mile 45 - Engineer Pass",
        lastCheckIn: "5 mins ago",
        avatar: "/assets/avatars/athlete3.jpg"
    },
    {
        id: "ath_004",
        name: "David K.",
        status: "warning",
        readinessScore: 65,
        currentPace: "DNS",
        targetPace: "9:00/mi",
        bonkRisk: "critical",
        location: "Mile 30 - Grouse Gulch",
        lastCheckIn: "45 mins ago",
        avatar: "/assets/avatars/athlete4.jpg"
    },
    {
        id: "ath_005",
        name: "Jasmine T.",
        status: "finished",
        readinessScore: 95,
        currentPace: "Finished",
        targetPace: "9:30/mi",
        bonkRisk: "none",
        location: "Finish Line",
        lastCheckIn: "1 hour ago",
        avatar: "/assets/avatars/athlete5.jpg"
    }
];

const RACES = [
    {
        id: "race_ultra_100",
        name: "Leadville 100",
        date: "2026-08-15",
        location: "Leadville, CO",
        distance: "100 miles",
        elevationGain: "18,000 ft",
        status: "live",
        participants: 5,
        aidStations: [
            { name: "May Queen", mile: 13.5, status: "open" },
            { name: "Outward Bound", mile: 23.5, status: "open" },
            { name: "Twin Lakes", mile: 37.9, status: "busy" },
            { name: "Hope Pass", mile: 43.5, status: "open" },
            { name: "Winfield", mile: 50.0, status: "open" }
        ]
    }
];

export async function seedDatabase() {
    const batch = writeBatch(db);

    // Seed Athletes
    ATHLETES.forEach(athlete => {
        const ref = doc(collection(db, "athletes"), athlete.id);
        batch.set(ref, {
            ...athlete,
            updatedAt: Timestamp.now()
        });
    });

    // Seed Races
    RACES.forEach(race => {
        const ref = doc(collection(db, "races"), race.id);
        batch.set(ref, {
            ...race,
            updatedAt: Timestamp.now()
        });
    });

    // Seed User Roles (for demo)
    // We'll assume the current user is an Admin/Director for now
    // But we create a 'demo_director'
    const directorRef = doc(collection(db, "user_roles"), "demo_director");
    batch.set(directorRef, {
        role: "director",
        permissions: ["all"]
    });

    await batch.commit();
    console.log("Database seeded successfully!");
}
