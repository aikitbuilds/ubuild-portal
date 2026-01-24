/**
 * Agency Debugger Utility
 * 
 * Powered by Google Gemini (Integration requested as alternative to Perplexity)
 * Analyzes error messages and suggests code fixes.
 */

import { GoogleGenerativeAI } from '@google/generative-ai';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export async function analyzeError(errorMessage: string): Promise<string> {
    if (!GEMINI_API_KEY) {
        console.error('Debugger Error: GEMINI_API_KEY is missing.');
        return 'Analysis unavailable: AI Intelligence not configured.';
    }

    try {
        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
        // Use gemini-2.0-flash as validated
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt = `You are a Senior React Developer and Debugging Specialist.
Fix this error: "${errorMessage}"

Return ONLY the suggested code fix or a brief 1-sentence explanation if code isn't applicable. 
Do not include markdown formatting or "Here is the fix:". JUST THE CODE/SOLUTION.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text().trim();

    } catch (error) {
        console.error('Debugger AI Error:', error);
        return 'Analysis failed: AI service temporarily unavailable.';
    }
}
