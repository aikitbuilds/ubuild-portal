import { Volunteer, Assignment } from "./schema";

// Heuristic weights
const BASE_RISK = 10;
const HISTORY_PENALTY_NOSHOW = 30;
const HISTORY_PENALTY_LATE = 10;
const DISTANCE_THRESHOLD_MILES = 25;
const DISTANCE_PENALTY = 15;

/**
 * Client-side calculation of Volunteer Risk Score.
 * This should eventually move to a Cloud Function triggered on write.
 * 
 * Logic:
 * Start with Base Risk.
 * + Penalty for "No Show" in history.
 * + Penalty for "Late" in history.
 * + Penalty if distance > 25 miles.
 * + Reduction (Reliability Bonus) if history has "On Time" (simulated via 100 - reliabilityScore if available, or implied).
 * 
 * Since V2 schema stores `reliabilityHistory` strings, we parse them.
 * We also accept an optional `v1ReliabilityScore` for migration compatibility if history is empty.
 */
export function calculateRiskScore(volunteer: Volunteer, v1ReliabilityScore?: number): number {
    let score = BASE_RISK;

    // 1. History Analysis
    const history = volunteer.aiMetrics?.reliabilityHistory || [];

    if (history.includes("No Show")) score += HISTORY_PENALTY_NOSHOW;
    if (history.includes("Late")) score += HISTORY_PENALTY_LATE;

    // 2. Distance Factor
    if (volunteer.distanceFromVenue && volunteer.distanceFromVenue > DISTANCE_THRESHOLD_MILES) {
        score += DISTANCE_PENALTY;
    }

    // 3. Reliability Modifier (Migration Helper or Derived)
    // If we have a V1 numeric score, use it: (100 - score) / 2 is the added risk.
    // e.g. Score 60 -> Risk +20. Score 100 -> Risk +0.
    if (v1ReliabilityScore !== undefined) {
        if (v1ReliabilityScore < 80) {
            score += (80 - v1ReliabilityScore);
        } else if (v1ReliabilityScore > 95) {
            score -= 5; // Bonus for super reliable
        }
    } else {
        // Estimate from history?
        const onTimeCount = history.filter(h => h === "On Time").length;
        if (onTimeCount > 2) score -= 10;
    }

    // Clamp 0-100
    return Math.max(0, Math.min(100, score));
}
