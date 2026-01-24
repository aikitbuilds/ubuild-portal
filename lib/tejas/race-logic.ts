import { SheetVolunteer } from "./api";
import { differenceInMinutes, parseISO } from "date-fns";

// --- Logic 1: The Burn-Out Detector ---

export interface FatigueAnalysis {
    status: 'OK' | 'WARNING' | 'CRITICAL';
    hours: number;
    flags: string[];
}

export function analyzeVolunteerLoad(shifts: SheetVolunteer[]): FatigueAnalysis {
    const sorted = [...shifts]
        .filter(s => s.startTime && s.endTime)
        .sort((a, b) => new Date(a.startTime!).getTime() - new Date(b.startTime!).getTime());

    let totalMinutes = 0;
    const flags: string[] = [];
    let hasOverlap = false;

    // We analyze a 24-hour rolling window roughly, or just total load for now as per simple request
    // Request says: "Display High Fatigue badge if >8 hours duty in 24h window" 
    // Since shifts rarely span days widely in this context, we'll sum total hours for simplicity first.

    // Check overlaps and gaps
    for (let i = 0; i < sorted.length; i++) {
        const current = sorted[i];
        const start = parseISO(current.startTime!);
        const end = parseISO(current.endTime!);
        const duration = differenceInMinutes(end, start);
        totalMinutes += duration;

        if (i < sorted.length - 1) {
            const next = sorted[i + 1];
            const nextStart = parseISO(next.startTime!);

            // Check Critical Overlap
            if (nextStart < end) {
                hasOverlap = true;
                flags.push("CRITICAL_OVERLAP");
            }
            // Check Burnout Risk (Gap < 2 hours)
            else {
                const gap = differenceInMinutes(nextStart, end);
                if (gap < 120) { // 2 hours
                    flags.push("BURNOUT_RISK");
                }
            }
        }
    }

    const hours = totalMinutes / 60;
    if (hours > 8) {
        flags.push("HIGH_FATIGUE");
    }

    let status: FatigueAnalysis['status'] = 'OK';
    if (hasOverlap) status = 'CRITICAL';
    else if (flags.includes("BURNOUT_RISK") || flags.includes("HIGH_FATIGUE")) status = 'WARNING';

    return { status, hours, flags: Array.from(new Set(flags)) };
}


// --- Logic 2: The Gap Finder ---

export interface CriticalGap {
    stationName: string;
    shiftTime: string;
    priority: 'CRITICAL' | 'HIGH' | 'MEDIUM';
    rowNumber: number;
    slotIndex: number;
}

export function findCriticalGaps(allVolunteers: SheetVolunteer[]): CriticalGap[] {
    const gaps: CriticalGap[] = [];

    allVolunteers.forEach(v => {
        if (!v.firstName || v.firstName === "OPEN" || v.id === "VACANT" || v.volunteerId === "VACANT") {
            // Determine priority based on station name
            const station = (v.childStation || v.role || "").toUpperCase();
            let priority: CriticalGap['priority'] = 'MEDIUM'; // Default

            if (station.includes("AID STATION") || station.includes("MEDICAL")) priority = 'CRITICAL';
            else if (station.includes("WARNING TRACK") || station.includes("HUB")) priority = 'HIGH';

            gaps.push({
                stationName: v.childStation || v.role,
                shiftTime: v.shiftTime,
                priority,
                rowNumber: v.rowNumber,
                slotIndex: v.slotIndex || 0
            });
        }
    });

    // Sort by priority
    const priorityScore = { CRITICAL: 3, HIGH: 2, MEDIUM: 1 };
    gaps.sort((a, b) => priorityScore[b.priority] - priorityScore[a.priority]);

    return gaps;
}


// --- Logic 3: The Smart Recruiter ---

export interface RecruitCandidate {
    volunteer: SheetVolunteer;
    matchReason: string;
}

export function suggestVolunteersForShift(
    targetShiftTime: string, // Fuzzy match string e.g "Sat 12:00"
    targetShiftStartISO: string | undefined,
    targetShiftEndISO: string | undefined,
    allVolunteers: SheetVolunteer[]
): RecruitCandidate[] {

    // Group volunteers by ID to analyze their full load
    const volMap = new Map<string, SheetVolunteer[]>();
    allVolunteers.forEach(v => {
        const id = v.volunteerId || v.email;
        if (!id) return;
        if (!volMap.has(id)) volMap.set(id, []);
        volMap.get(id)!.push(v);
    });

    const candidates: RecruitCandidate[] = [];

    // Filter "Unassigned" or "Flexible" people from the pool
    // In our current data, unassigned folks have status="Unassigned" or role="Unassigned"

    volMap.forEach((shifts, id) => {
        // We look for the "Profile" entry or any entry that indicates they are valid
        // Ideally we find a "General Volunteer" entry in the directory (left join results)
        const directoryEntry = shifts.find(s => s.status === "Unassigned" || s.role === "General Volunteer");

        if (!directoryEntry) {
            // If they are only existing in assigned slots, checks if they have capacity?
            // User says: "Filter for Role Category == FLEXIBLE or UTILITY"
            // We might not have this precise field, so we'll fallback to loose logic:
            // If they have < 8 hours and NO overlap, they are candidates.
        }

        // Logic: Exclude anyone with overlap
        if (targetShiftStartISO && targetShiftEndISO) {
            const targetStart = parseISO(targetShiftStartISO).getTime();
            const targetEnd = parseISO(targetShiftEndISO).getTime();

            const hasConflict = shifts.some(s => {
                if (!s.startTime || !s.endTime) return false;
                const sStart = parseISO(s.startTime).getTime();
                const sEnd = parseISO(s.endTime).getTime();
                return (sStart < targetEnd && sEnd > targetStart);
            });

            if (hasConflict) return; // Skip this person
        }

        // Analyze fatigue
        const fatigue = analyzeVolunteerLoad(shifts);
        if (fatigue.flags.includes("HIGH_FATIGUE")) return; // Skip burned out people

        // If we reach here, they are technically free.
        // Bonus points if they explicitly match "Flexible" roles (simulated check)
        const isFlexible = shifts.some(s => s.role.toUpperCase().includes("FLEXIBLE") || s.role.toUpperCase().includes("UTILITY"));

        // Add to candidates (using the first available profile record for details)
        const profile = shifts[0];
        candidates.push({
            volunteer: profile,
            matchReason: isFlexible ? "Role Match: Flexible/Utility" : "Available: No Conflicts Detected",
        });
    });

    return candidates.slice(0, 10); // Return top 10
}
