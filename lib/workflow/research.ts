// Perplexity Research Engine
// Used in Stage 1 to generate Market Viability Reports

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export interface ResearchInput {
    projectName: string;
    description: string;
    targetUsers: string;
    features: string[];
    techStack?: string;
}

export interface MarketViabilityReport {
    marketSize: {
        tam: string; // Total Addressable Market
        sam: string; // Serviceable Addressable Market
        som: string; // Serviceable Obtainable Market
        growthRate: string;
    };
    competitors: {
        name: string;
        description: string;
        marketShare?: string;
        strengths: string[];
        weaknesses: string[];
    }[];
    userPainPoints: string[];
    techStackRecommendation: {
        frontend: string[];
        backend: string[];
        database: string[];
        deployment: string[];
        reasoning: string;
    };
    validationScore: number; // 1-10
    goNoGoRecommendation: "GO" | "NO_GO" | "CONDITIONAL";
    reasoning: string;
    risks: string[];
    opportunities: string[];
}

// Generate market research using AI (simulating Perplexity-style research)
export async function generateMarketResearch(input: ResearchInput): Promise<MarketViabilityReport> {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `You are a market research analyst. Analyze this project idea and provide a comprehensive Market Viability Report.

PROJECT DETAILS:
- Name: ${input.projectName}
- Description: ${input.description}
- Target Users: ${input.targetUsers}
- Key Features: ${input.features.join(", ")}
- Preferred Tech Stack: ${input.techStack || "Not specified"}

Generate a detailed JSON report with the following structure:
{
  "marketSize": {
    "tam": "Total Addressable Market estimate",
    "sam": "Serviceable Addressable Market estimate",
    "som": "Serviceable Obtainable Market (realistic target)",
    "growthRate": "Market growth rate percentage"
  },
  "competitors": [
    {
      "name": "Competitor name",
      "description": "Brief description",
      "strengths": ["strength1", "strength2"],
      "weaknesses": ["weakness1", "weakness2"]
    }
  ],
  "userPainPoints": ["pain point 1", "pain point 2"],
  "techStackRecommendation": {
    "frontend": ["React", "Next.js"],
    "backend": ["Node.js", "Firebase"],
    "database": ["Firestore"],
    "deployment": ["Vercel"],
    "reasoning": "Why this stack is recommended"
  },
  "validationScore": 8,
  "goNoGoRecommendation": "GO",
  "reasoning": "Overall assessment of viability",
  "risks": ["risk 1", "risk 2"],
  "opportunities": ["opportunity 1", "opportunity 2"]
}

Respond ONLY with valid JSON, no additional text.`;

    try {
        const result = await model.generateContent(prompt);
        const response = result.response.text();

        // Clean the response and parse JSON
        const cleanedResponse = response
            .replace(/```json\n?/g, "")
            .replace(/```\n?/g, "")
            .trim();

        return JSON.parse(cleanedResponse) as MarketViabilityReport;
    } catch (error) {
        console.error("Research generation failed:", error);
        throw new Error("Failed to generate market research");
    }
}

// Store research results to Firestore
export async function saveResearchToFirestore(
    projectId: string,
    report: MarketViabilityReport,
    db: FirebaseFirestore.Firestore
): Promise<void> {
    const researchRef = db.collection("projects").doc(projectId).collection("research").doc("market_viability");

    await researchRef.set({
        ...report,
        generatedAt: new Date(),
        version: 1,
    });
}
