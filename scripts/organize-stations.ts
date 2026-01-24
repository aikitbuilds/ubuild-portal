
import { getVolunteersClient } from '../lib/tejas/api';

const API_URL = "https://us-central1-sps-leadscleandb.cloudfunctions.net/getVolunteers";

async function analyzeStations() {
    console.log("🔍 Fetching live volunteer roster...");
    try {
        const res = await fetch(API_URL);
        const json = await res.json();

        if (!json.success || !Array.isArray(json.data)) {
            console.error("❌ API Response invalid:", json);
            return;
        }

        const data = json.data;
        console.log(`✅ Loaded ${data.length} records.`);

        // Strategy: 
        // 1. Check 'firstName' for station-like names (containing "Station", "Crossing", "Pickup", "Setup", "HQ", "Start", "Finish")
        // 2. Also check 'role' if it helps.

        const candidates = new Set<string>();
        const peopleNames = new Set<string>();

        const STATION_KEYWORDS = [
            "Station", "Crossing", "Pickup", "Setup", "HQ", "Headquarters", "Start", "Finish", "Sweep", "Course", "Marking", "Medical", "Radio", "Parking", "Check-In", "Drop Bag", "Kitchen", "Clean Up", "Registration", "Awards", "Timing"
        ];

        data.forEach((r: any) => {
            const val = r.firstName?.trim();
            if (!val) return;

            // Heuristic: If it contains a keyword, it's a station.
            if (STATION_KEYWORDS.some(k => val.toLowerCase().includes(k.toLowerCase()))) {
                candidates.add(val);
            } else if (val.length < 30 && val.includes(" ")) {
                // Might be a person name if not a station
                peopleNames.add(val);
            } else {
                // Short strings or single words might be roles like "Medic" or "Sweeper"
                if (val.length > 2) candidates.add(val);
            }
        });

        const sortedStations = Array.from(candidates).sort();

        console.log(`\nFound ${sortedStations.length} distinct Station/Role candidates in 'firstName'.`);
        console.log(sortedStations);

        // Analyze 'role' column just in case
        const roleCandidates = new Set<string>();
        data.forEach((r: any) => {
            const val = r.role?.trim();
            if (!val) return;
            if (val.length > 3 && isNaN(Number(val))) {
                roleCandidates.add(val);
            }
        });

        console.log(`\nFound ${roleCandidates.size} distinct text values in 'role'.`);
        console.log(Array.from(roleCandidates).sort());


    } catch (e) {
        console.error("❌ Script Error:", e);
    }
}

analyzeStations();
