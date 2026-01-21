import { Volunteer, Assignment } from "./data";

export type ScenarioType = "normal" | "rain" | "high_no_show" | "night_fatigue";

export interface OperationalDirective {
    id: string;
    type: "critical" | "warning" | "info" | "success";
    message: string;
    station?: string;
    timestamp: Date;
}

export interface IntelligenceReport {
    score: number; // 0-100
    status: "optimal" | "stressed" | "critical";
    directives: OperationalDirective[];
    stationMetrics: Record<string, {
        coverage: number;
        risk: "low" | "medium" | "high";
        notes: string;
    }>;
}

export const SCENARIOS: Record<ScenarioType, {
    name: string;
    description: string;
    impact: string;
}> = {
    normal: {
        name: "Optimal Conditions",
        description: "Clear skies, mild temps, standard staffing roster.",
        impact: "No external risk modifiers applied."
    },
    rain: {
        name: "Heavy Rain / Storm",
        description: "Atmospheric river event expected. Mud levels high.",
        impact: "Increased risk for remote stations (AS1, AS2). Lowered runner pace simulation."
    },
    high_no_show: {
        name: "Volunteer Shortage",
        description: "Unexpected drop in volunteer check-ins (simulated 25% drop).",
        impact: "Critical coverage gaps in non-expert roles."
    },
    night_fatigue: {
        name: "Night Operations (12 AM - 5 AM)",
        description: "Extended darkness and falling temperatures.",
        impact: "High risk for safety monitoring and navigation errors."
    }
};

export function analyzeOperationalIntelligence(
    volunteers: Volunteer[],
    assignments: Assignment[],
    scenario: ScenarioType
): IntelligenceReport {
    const directives: OperationalDirective[] = [];
    const stationMetrics: Record<string, any> = {};
    let totalScore = 85; // Base score

    // 1. Group assignments by station
    const stationAssignments: Record<string, Assignment[]> = {};
    assignments.forEach(a => {
        if (!stationAssignments[a.station]) stationAssignments[a.station] = [];
        stationAssignments[a.station].push(a);
    });

    // 2. Analyze per station
    Object.entries(stationAssignments).forEach(([station, aList]) => {
        let coverage = 0;
        let expertCount = 0;

        aList.forEach(a => {
            let assignedCount = 1;

            // Scenario Impact: No-Show
            if (scenario === "high_no_show") {
                if (Math.random() < 0.3) assignedCount = 0; // Simulate 30% drop randomly since we can't do fractional volunteers easily here
            }

            coverage += assignedCount;

            // Check expertise
            if (assignedCount > 0) {
                const vol = volunteers.find(v => v.id === a.volunteerId);
                if (vol?.experience_level === "expert") expertCount++;
            }
        });

        const reqCount = 5; // Simplified requirement per station
        const coveragePct = Math.min((coverage / reqCount) * 100, 100);

        let risk: "low" | "medium" | "high" = "low";
        let notes = "Staffing adequate.";

        if (coveragePct < 50) {
            risk = "high";
            notes = "CRITICAL GAP: Station cannot operate safely.";
            directives.push({
                id: `dir-${station}-staff`,
                type: "critical",
                message: `${station} is severely understaffed. Urgent redirection required.`,
                station,
                timestamp: new Date()
            });
            totalScore -= 15;
        } else if (coveragePct < 80) {
            risk = "medium";
            notes = "Minimal coverage. Expert supervision required.";
            totalScore -= 5;
        }

        // Scenario Impact: Rain
        if (scenario === "rain" && (station.includes("AS") || station.includes("Overnight"))) {
            risk = risk === "low" ? "medium" : "high";
            notes += " WEATHER ADVISORY: Potential access issues due to flooding.";
            directives.push({
                id: `weather-${station}`,
                type: "warning",
                message: `${station} access road at risk of flooding. Prep EVAC plan.`,
                station,
                timestamp: new Date()
            });
            totalScore -= 10;
        }

        // Night Fatigue
        if (scenario === "night_fatigue") {
            const nightAssignments = aList.filter(a => {
                const hour = a.startTime.getHours();
                return hour >= 0 && hour <= 5;
            });
            if (nightAssignments.length > 0) {
                risk = "high";
                notes += " FATIGUE ALERT: Night shift monitor active.";
                directives.push({
                    id: `fatigue-${station}`,
                    type: "info",
                    message: `Monitor ${station} night crew for signs of exhaustion.`,
                    station,
                    timestamp: new Date()
                });
            }
        }

        stationMetrics[station] = {
            coverage: coveragePct,
            risk,
            notes
        };
    });

    // Global directives
    if (scenario === "rain") {
        directives.push({
            id: "global-rain",
            type: "warning",
            message: "Atmospheric river event confirmed. Distribute ponchos to all field crews.",
            timestamp: new Date()
        });
    }

    if (totalScore < 60) {
        directives.push({
            id: "global-shutdown",
            type: "critical",
            message: "Ops Score < 60%. Consult Race Director on course shortening options.",
            timestamp: new Date()
        });
    }

    return {
        score: Math.max(totalScore, 0),
        status: totalScore > 80 ? "optimal" : totalScore > 50 ? "stressed" : "critical",
        directives,
        stationMetrics
    };
}
/**
 * Day 9 AI Intelligence: Predictive No-Show Model
 * Risk = Base (18%) + Reliability (<70: +30%) + Distance (>30mi: +10%) - Expert Crew (-5%)
 */
export function calculateVolunteerRisk(volunteer: Volunteer): number {
    let risk = 18; // 18% base

    // Reliability Factor
    if (volunteer.reliabilityScore < 70) risk += 30;
    if (volunteer.reliabilityScore > 90) risk -= 10;

    // Distance Factor
    if (volunteer.distanceFromVenue > 30) risk += 10;

    // Expertise Factor
    if (volunteer.experience_level === 'expert') risk -= 5;

    return Math.max(0, Math.min(100, risk));
}
