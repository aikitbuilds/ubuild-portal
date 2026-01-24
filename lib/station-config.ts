

export type StationCategory = 'race_hub' | 'aid_stations' | 'safety' | 'logistics' | 'leadership' | 'specialty' | 'support' | 'uncategorized';

export interface StationGroup {
    id: StationCategory;
    label: string;
    color: string; // Tailwind color class stub (e.g. "blue", "emerald")
    roles: string[]; // The raw role strings that belong here
}

export const STATION_GROUPS: Record<StationCategory, StationGroup> = {
    race_hub: {
        id: 'race_hub',
        label: "Race Hub",
        color: "violet",
        roles: [
            "Packet Pickup",
            "Start Line",
            "Finish Line",
            "Setup",
            "Teardown",
            "Registration",
            "General Ops",
            "Check-In"
        ]
    },
    aid_stations: {
        id: 'aid_stations',
        label: "Aid Stations",
        color: "emerald",
        roles: [
            "Dam Nation",
            "Gate",
            "Nature Center",
            "Tyler's",
            "Aid Station",
            "Headquarters", // Sometimes mapped here, but ideally Race Hub
            "Lodge"
        ]
    },
    safety: {
        id: 'safety',
        label: "Medical & Safety",
        color: "red",
        roles: [
            "MEDICAL",
            "Road Crossing",
            "Marshall",
            "Radio",
            "Ham"
        ]
    },
    logistics: {
        id: 'logistics',
        label: "Logistics & Admin",
        color: "blue",
        roles: [
            "Parking",
            "Drop Bag",
            "Sweep",
            "Clean",
            "Dumpster"
        ]
    },
    leadership: {
        id: 'leadership',
        label: "Leadership",
        color: "purple",
        roles: [
            "R.D.",
            "Race Director",
            "Captain",
            "Coordinator"
        ]
    },
    specialty: {
        id: 'specialty',
        label: "Specialty",
        color: "cyan",
        roles: [
            "Timing",
            "Results",
            "Utility",
            "Float"
        ]
    },
    // KEEPING 'support' for backward compatibility defaults, but mapped to 'race_hub' usually
    support: {
        id: 'support',
        label: "Course Support",
        color: "amber",
        roles: []
    },
    uncategorized: {
        id: 'uncategorized',
        label: "Unassigned / Other",
        color: "slate",
        roles: []
    }
};

/**
 * Normalizes a raw station name string and determines its category.
 */
export function getStationCategory(rawName: string): StationCategory {
    if (!rawName) return 'uncategorized';
    const lower = rawName.trim().toLowerCase();

    // Safety First
    if (STATION_GROUPS.safety.roles.some(r => lower.includes(r.toLowerCase()))) return 'safety';

    // Aid Stations (Specific names take precedence over generic "Course" terms)
    if (STATION_GROUPS.aid_stations.roles.some(r => lower.includes(r.toLowerCase()))) return 'aid_stations';
    // Catch-all for "Aid Station" if not caught above
    if (lower.includes("aid station")) return 'aid_stations';

    // Logistics
    if (STATION_GROUPS.logistics.roles.some(r => lower.includes(r.toLowerCase()))) return 'logistics';

    // Support
    if (STATION_GROUPS.support.roles.some(r => lower.includes(r.toLowerCase()))) return 'support';


    return 'uncategorized';
}

export const CATEGORY_ORDER: StationCategory[] = ['safety', 'aid_stations', 'support', 'logistics', 'uncategorized'];
