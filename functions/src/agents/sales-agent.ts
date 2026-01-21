/**
 * Sales Agent - Handles customer-facing queries using AI context.
 * Runs server-side in Cloud Functions.
 */

export interface SalesAgentInput {
    query: string;
    context?: string;
    history?: string[];
}

export interface SalesAgentOutput {
    response: string;
    confidence: number;
    suggestedActions: string[];
}

export class SalesAgent {
    private systemPrompt = `You are a helpful AI sales assistant for uBuild, an agentic AI software agency.
Your role is to:
1. Answer questions about our services (AI app development, workflow automation, consulting).
2. Qualify leads by understanding their needs.
3. Guide users toward starting a project with us.

Be professional, helpful, and concise. Focus on value and outcomes.`;

    async process(input: SalesAgentInput): Promise<SalesAgentOutput> {
        // This is the core logic - in production, this would call an LLM
        const query = input.query.toLowerCase();

        // Simple intent detection (would be replaced by LLM in production)
        let response = "";
        let confidence = 0.8;
        const suggestedActions: string[] = [];

        if (query.includes("price") || query.includes("cost")) {
            response = "Our projects typically range from $5,000 for simple automations to $50,000+ for full AI applications. Would you like to schedule a call to discuss your specific needs?";
            suggestedActions.push("schedule_call", "view_pricing");
        } else if (query.includes("how long") || query.includes("timeline")) {
            response = "Most projects take 2-8 weeks depending on complexity. Simple automations can be done in days, while full applications may take longer. What are you looking to build?";
            suggestedActions.push("start_project", "view_portfolio");
        } else if (query.includes("what") || query.includes("services")) {
            response = "uBuild specializes in: 1) Custom AI Applications, 2) Workflow Automation, 3) AI Integration Consulting. Our AI agents handle 80% of the development work, allowing us to deliver faster and at lower cost.";
            suggestedActions.push("start_project", "learn_more");
        } else {
            response = "I'd be happy to help! Could you tell me more about what you're looking to build? Whether it's an AI application, workflow automation, or something else - we're here to help.";
            confidence = 0.6;
            suggestedActions.push("describe_project");
        }

        return { response, confidence, suggestedActions };
    }

    getSystemPrompt(): string {
        return this.systemPrompt;
    }
}

export const salesAgent = new SalesAgent();
