/**
 * Qualification Agent - Scores leads based on intent, budget, and readiness.
 * Runs server-side in Cloud Functions.
 */

export interface LeadData {
    email: string;
    intent: string;
    description: string;
    hasVoiceMemo?: boolean;
}

export interface QualificationResult {
    score: number;          // 0-100
    tier: "hot" | "warm" | "cold";
    reasoning: string;
    nextAction: string;
}

export class QualificationAgent {
    /**
     * Score a lead based on their submission data.
     * In production, this would use an LLM for more nuanced scoring.
     */
    async qualify(lead: LeadData): Promise<QualificationResult> {
        let score = 50; // Base score
        const factors: string[] = [];

        // Intent scoring
        if (lead.intent === "new_app") {
            score += 25;
            factors.push("+25: High-value project intent (New App)");
        } else if (lead.intent === "automation") {
            score += 20;
            factors.push("+20: Business automation interest");
        } else if (lead.intent === "consulting") {
            score += 10;
            factors.push("+10: Consulting inquiry");
        }

        // Description quality scoring
        const descLength = lead.description?.length || 0;
        if (descLength > 200) {
            score += 15;
            factors.push("+15: Detailed description provided");
        } else if (descLength > 50) {
            score += 5;
            factors.push("+5: Basic description provided");
        } else {
            score -= 10;
            factors.push("-10: Minimal description");
        }

        // Engagement signals
        if (lead.hasVoiceMemo) {
            score += 10;
            factors.push("+10: Voice memo recorded (high engagement)");
        }

        // Email domain scoring (simple heuristic)
        const emailDomain = lead.email.split("@")[1] || "";
        if (emailDomain.includes("gmail") || emailDomain.includes("yahoo") || emailDomain.includes("hotmail")) {
            // Personal email - neutral
        } else if (emailDomain.length > 0) {
            score += 10;
            factors.push("+10: Business email domain");
        }

        // Cap score
        score = Math.min(100, Math.max(0, score));

        // Determine tier
        let tier: "hot" | "warm" | "cold";
        let nextAction: string;

        if (score >= 75) {
            tier = "hot";
            nextAction = "immediate_outreach";
        } else if (score >= 50) {
            tier = "warm";
            nextAction = "nurture_sequence";
        } else {
            tier = "cold";
            nextAction = "add_to_newsletter";
        }

        return {
            score,
            tier,
            reasoning: factors.join("; "),
            nextAction,
        };
    }
}

export const qualificationAgent = new QualificationAgent();
