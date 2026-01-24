
import { getVolunteersClient } from '../lib/tejas/api';
import { StationCategory, getStationCategory } from '../lib/station-config';

// MOCKING DOM DEPENDENCIES for Node execution
// The original StationTab logic uses these. We replicate them here.

interface SheetVolunteer {
    rowNumber: number;
    role: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    shiftTime: string;
    notes: string;
    status: string;
    isHeader: boolean;
}

interface StationData {
    name: string;
    volunteers: SheetVolunteer[];
    totalSlots: number;
    category: StationCategory;
}

const API_URL = "https://us-central1-sps-leadscleandb.cloudfunctions.net/getVolunteers";

async function runDebug() {
    console.log("🔍 Fetching live volunteer roster for debugging...");
    const res = await fetch(API_URL);
    const json = await res.json();

    if (!json.success || !Array.isArray(json.data)) {
        console.error("❌ API Response invalid");
        return;
    }

    const data = json.data as SheetVolunteer[];
    console.log(`✅ Loaded ${data.length} records.`);

    // --- LOGIC FROM StationTab.tsx ---
    const list: StationData[] = [];
    let currentStation = "General Pool";
    let currentVols: SheetVolunteer[] = [];

    // Helper to check if a string looks like a station name
    const isStationName = (str: string) => {
        if (!str) return false;
        const s = str.toLowerCase();
        return s.includes("station") || s.includes("crossing") || s.includes("pickup") ||
            s.includes("setup") || s.includes("hq") || s.includes("headquarter") ||
            s.includes("start") || s.includes("finish") || s.includes("sweep") ||
            s.includes("medical") || s.includes("marking");
    };

    data.forEach((row, index) => {
        let newStationName = null;

        // DEBUG: Log specific rows to see what's happening
        if (index > 50 && index < 60) {
            // console.log(`Row ${index}:`, row);
        }

        if (row.isHeader) {
            newStationName = row.role === "STATION_HEADER" ? "Ops Segment" : row.role;
        } else if (row.role && (row.role.length < 3 || row.role === "STATION_HEADER") && isStationName(row.firstName)) {
            // Detected a column-shifted header row
            newStationName = row.firstName;
        }

        if (newStationName) {
            // Push previous station
            if (currentVols.length > 0 || (currentStation !== "General Pool" && currentStation !== "Ops Segment")) {
                list.push({
                    name: currentStation,
                    volunteers: currentVols,
                    totalSlots: Math.max(currentVols.length + 1, 5),
                    category: getStationCategory(currentStation)
                });
            }
            currentStation = newStationName;
            currentVols = [];
        } else {
            // It's a volunteer (or an empty line)
            if (row.firstName && !isStationName(row.firstName)) {
                currentVols.push(row);
            } else {
                // console.log(`⚠️ Dropped Row ${index}: ${row.firstName} (Thought it was a station?)`);
            }
        }
    });

    // Push final station
    if (currentVols.length > 0) {
        list.push({
            name: currentStation,
            volunteers: currentVols,
            totalSlots: Math.max(currentVols.length + 1, 5),
            category: getStationCategory(currentStation)
        });
    }
    // --------------------------------

    console.log(`\n📊 Analysis Results:`);
    console.log(`Total Stations Found: ${list.length}`);

    // Check for empty stations
    const emptyStations = list.filter(s => s.volunteers.length === 0);
    console.log(`Empty Stations: ${emptyStations.length}`);

    // Check specific station "Aid Station 2" mentioned in screenshot
    const aidStation2 = list.find(s => s.name.includes("Aid Station 2") || s.name.includes("Nature Center"));


    // DEBUG: Look for UTILITY rows specifically
    console.log("\n--- UTILITY ROW ANALYSIS ---");
    data.forEach((r, i) => {
        if ((r.firstName && r.firstName.toUpperCase().includes("UTILITY")) || (r.role && r.role.toUpperCase().includes("UTILITY"))) {
            console.log(`Row ${i} [UTILITY]:`, {
                role: r.role,
                first: r.firstName,
                last: r.lastName,
                isHeader: r.isHeader
            });
            // Log prev/next to see context
            if (i > 0) console.log(`  Prev Row ${i - 1}:`, data[i - 1].firstName || data[i - 1].role);
        }
    });


    // Log first 5 stations with volunteer counts
    console.log("\n--- Sample Stations ---");
    list.slice(0, 10).forEach(s => {
        console.log(`[${s.category}] ${s.name}: ${s.volunteers.length} vols`);
    });

}

runDebug();
