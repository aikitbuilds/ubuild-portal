
import { httpsCallable } from "firebase/functions";
import { functions } from "@/lib/firebase/client";

/**
 * Generic wrapper for calling Firebase Cloud Functions
 * Replaces the specific Next.js API route handlers.
 */
export async function callFunction<T = any>(name: string, data: any = {}): Promise<T> {
    try {
        const functionRef = httpsCallable(functions, name);
        const result = await functionRef(data);
        return result.data as T;
    } catch (error) {
        console.error(`Error calling function ${name}:`, error);
        throw error;
    }
}

/**
 * Specific typed wrappers for known functions
 */

export interface ResearchResponse {
    refined: {
        objective: string;
        features: string[];
        successMetrics: string[];
        suggestedStack: string;
    };
    source: "perplexity" | "fallback";
}

export async function performResearch(query: string): Promise<ResearchResponse> {
    return callFunction<ResearchResponse>("performResearch", { query });
}
