export type ParentCategory =
    | 'RACE HUB'
    | 'AID STATIONS'
    | 'COURSE SAFETY'
    | 'LOGISTICS'
    | 'SPECIALTY'
    | 'LEADERSHIP'
    | 'UNASSIGNED';

export type ChildStation = string;

interface HierarchyResult {
    parent: ParentCategory;
    child: ChildStation;
}

const STATION_KEYWORDS = [
    "station", "crossing", "pickup", "pick up", "pick-up", "setup",
    "hq", "headquarter", "headquarters", "start", "finish", "sweep",
    "medical", "marking", "marshall", "marshal", "roving", "split",
    "parking", "bridge", "road 40", "entrance road", "dumpster",
    "ops segment", "tejas trails", "radio", "ham", "timing", "results",
    "utility", "flexible", "float", "tyler", "gate", "nature ctr", "nature center",
    "dam nation", "damnation", "ppu", "registration", "lodge", "hub",
    "check-in", "check in", "ppu", "packet", "infrastructure", "teardown",
    "first aid", "emt", "r.d.", "race director", "clean", "flagging", "course support",
    "awards", "chips", "medals", "roamers", "gate worker", "sweeping", "marker", "cleaning",
    "drop bag", "delivery"
];

/**
 * Detects if a string is a REAL station header (not just a time fragment).
 */
export function isStationName(str: string): boolean {
    if (!str) return false;
    const s = str.slice(0, 100).toLowerCase();
    return STATION_KEYWORDS.some(k => s.includes(k));
}

/**
 * Detects if a string is ANY kind of metadata row (station name OR schedule fragment).
 */
export function isMetadataRow(str: string): boolean {
    if (!str) return false;
    if (isStationName(str)) return true;

    const s = str.slice(0, 100).toLowerCase();
    const hasTime = /\d{1,2}:\d{2}/.test(s) || (/\d{4}/.test(s) && s.length < 15);
    const hasDay = /sat|sun|fri/.test(s);

    // Safety: If it's a short string (typical metadata/time fragment)
    return (hasTime || hasDay) && s.length < 30;
}

/**
 * Maps a volunteer role/station string to our hierarchical system.
 * Based on the Rocky 100 Volunteer Station Categorization System document.
 */
export function getHierarchy(role: string, firstName: string = "", lastName: string = ""): HierarchyResult {
    const r = (role || "").toLowerCase();
    const f = (firstName || "").toLowerCase();

    // 6. LEADERSHIP (Highest priority to avoid mis-categorization)
    if (r.includes("r.d.") || r.includes("race director") || r.includes("ass't rd")) {
        return { parent: 'LEADERSHIP', child: 'Race Director' };
    }
    if (r.includes("logistics coordinator")) {
        return { parent: 'LEADERSHIP', child: 'Logistics Coordinator' };
    }
    if (r.includes("captain") || r.includes("lead")) {
        return { parent: 'LEADERSHIP', child: 'Aid Station Captains' };
    }

    // 5. SPECIALTY
    if (r.includes("medical") || r.includes("first aid") || r.includes("emt")) {
        return { parent: 'SPECIALTY', child: 'Medical Support' };
    }
    if (r.includes("timing") || r.includes("results")) {
        return { parent: 'SPECIALTY', child: 'Timing & Results' };
    }
    if (r.includes("radio") || r.includes("ham")) {
        return { parent: 'SPECIALTY', child: 'Radio/Communications' };
    }
    if (r.includes("utility") || r.includes("flexible") || r.includes("float")) {
        return { parent: 'SPECIALTY', child: 'Utility Player' };
    }

    // 2. AID STATIONS
    if (r.includes("tyler")) {
        return { parent: 'AID STATIONS', child: "Tyler's Aid Station" };
    }
    if (r.includes("gate")) {
        return { parent: 'AID STATIONS', child: 'Gate Aid Station' };
    }
    if (r.includes("nature center aid") || r.includes("nature ctr aid")) {
        return { parent: 'AID STATIONS', child: 'Nature Center Aid Station' };
    }
    if (r.includes("dam nation") || r.includes("damnation")) {
        return { parent: 'AID STATIONS', child: 'Dam Nation Aid Station' };
    }
    if (r.includes("aid station")) {
        // Generic Aid Station catch-all
        let child = role;
        if (r.includes("nature ctr") || r.includes("nature center")) child = "Nature Center Aid Station";
        return { parent: 'AID STATIONS', child };
    }

    // 3. COURSE SAFETY
    if (r.includes("road crossing") || r.includes("crossing") || r.includes("road 40") || r.includes("entrance road") || r.includes("bridge")) {
        let child = 'Road Crossings';
        if (r.includes("nature ctr") || r.includes("nature center")) child = "Nature Ctr Road Crossing";
        if (r.includes("dam nation") || r.includes("damnation")) child = "Dam Nation Road Crossing";
        return { parent: 'COURSE SAFETY', child };
    }
    if (r.includes("marshall") || r.includes("marshal")) {
        return { parent: 'COURSE SAFETY', child: 'Course Marshaling' };
    }

    // 4. LOGISTICS
    if (r.includes("marking") || r.includes("flagging")) {
        return { parent: 'LOGISTICS', child: 'Course Marking & Setup' };
    }
    if (r.includes("parking")) {
        return { parent: 'LOGISTICS', child: 'Parking Management' };
    }
    if (r.includes("drop bag")) {
        return { parent: 'LOGISTICS', child: 'Drop Bag Delivery' };
    }
    if (r.includes("sweep") || r.includes("clean") || r.includes("dumpster")) {
        return { parent: 'LOGISTICS', child: 'Course Sweeping' };
    }

    // 1. RACE HUB
    if (r.includes("ppu") || r.includes("packet pick up") || r.includes("pickup") || f.includes("packet")) {
        return { parent: 'RACE HUB', child: 'Packet Pickup' };
    }
    if (r.includes("start line") || r.includes("start gate")) {
        return { parent: 'RACE HUB', child: 'Start Line Management' };
    }
    if (r.includes("finish line") || r.includes("award") || r.includes("medal")) {
        return { parent: 'RACE HUB', child: 'Finish Line' };
    }
    if (r.includes("setup") || r.includes("teardown") || r.includes("infrastructure")) {
        return { parent: 'RACE HUB', child: 'Setup/Teardown' };
    }
    if (r.includes("hub") || r.includes("lodge") || r.includes("general ops") || r.includes("check-in") || r.includes("registration")) {
        return { parent: 'RACE HUB', child: 'General Operations' };
    }

    // Defaults for unassigned or vague roles
    if (r === "" || r === "unassigned" || r === "general pool" || r.includes("volunteer")) {
        return { parent: 'UNASSIGNED', child: 'General Pool' };
    }

    return { parent: 'RACE HUB', child: role || 'General Support' };
}
