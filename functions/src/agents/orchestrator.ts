/**
 * Orchestrator Agent - Routes requests to the appropriate agents.
 * Acts as the central coordinator for the agent swarm.
 */

import { salesAgent, SalesAgentInput, SalesAgentOutput } from "./sales-agent";
import { qualificationAgent, LeadData, QualificationResult } from "./qualification-agent";

export type AgentType = "sales" | "qualification" | "research" | "builder";

export interface OrchestratorInput {
    type: AgentType;
    payload: any;
}

export interface OrchestratorOutput {
    agent: AgentType;
    result: any;
    processingTime: number;
}

export class Orchestrator {
    private startTime: number = 0;

    async route(input: OrchestratorInput): Promise<OrchestratorOutput> {
        this.startTime = Date.now();

        let result: any;

        switch (input.type) {
            case "sales":
                result = await this.handleSales(input.payload as SalesAgentInput);
                break;
            case "qualification":
                result = await this.handleQualification(input.payload as LeadData);
                break;
            case "research":
                result = { message: "Research agent routed - handled by performResearch function" };
                break;
            case "builder":
                result = { message: "Builder agent routed - handled by build pipeline" };
                break;
            default:
                throw new Error(`Unknown agent type: ${input.type}`);
        }

        return {
            agent: input.type,
            result,
            processingTime: Date.now() - this.startTime,
        };
    }

    private async handleSales(input: SalesAgentInput): Promise<SalesAgentOutput> {
        return salesAgent.process(input);
    }

    private async handleQualification(input: LeadData): Promise<QualificationResult> {
        return qualificationAgent.qualify(input);
    }
}

export const orchestrator = new Orchestrator();
