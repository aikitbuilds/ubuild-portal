/**
 * Auto-Pilot Engine
 * 
 * The "System Brain" that orchestrates the 5-stage pipeline
 * by reading knowledge base files and generating dynamic prompts.
 */

import { readFileSync } from "fs";
import { join } from "path";
import { db, collections } from "@/lib/firebase/admin";
import { Timestamp } from "firebase-admin/firestore";

// Stage definitions from IDEA_TO_MVP_WORKFLOW_v2.md
export enum Stage {
    RESEARCH = 1,
    ARCHITECT = 2,
    BUILD = 3,
    OPTIMIZE = 4,
    DEPLOY = 5,
    COMPLETED = 6,
}

export const StageNames: Record<Stage, string> = {
    [Stage.RESEARCH]: "Research",
    [Stage.ARCHITECT]: "Architecture",
    [Stage.BUILD]: "Build",
    [Stage.OPTIMIZE]: "Optimize",
    [Stage.DEPLOY]: "Deploy",
    [Stage.COMPLETED]: "Completed",
};

export const StageAgents: Record<Stage, string> = {
    [Stage.RESEARCH]: "@researcher",
    [Stage.ARCHITECT]: "@architect",
    [Stage.BUILD]: "@builder",
    [Stage.OPTIMIZE]: "@improver",
    [Stage.DEPLOY]: "@deployer",
    [Stage.COMPLETED]: "none",
};

// Knowledge base location
const KNOWLEDGE_PATH = join(process.cwd(), ".agent", "knowledge", "framework");

/**
 * Read a knowledge file from the framework folder
 */
export function readKnowledgeFile(filename: string): string {
    try {
        const filePath = join(KNOWLEDGE_PATH, filename);
        return readFileSync(filePath, "utf-8");
    } catch (error) {
        console.error(`Failed to read knowledge file: ${filename}`, error);
        return "";
    }
}

/**
 * Extract stage-specific requirements from IDEA_TO_MVP_WORKFLOW_v2.md
 */
export function getStageRequirements(stage: Stage): string {
    const workflow = readKnowledgeFile("IDEA_TO_MVP_WORKFLOW_v2.md");

    // Parse the workflow file for stage-specific sections
    const stageMarkers: Record<Stage, string[]> = {
        [Stage.RESEARCH]: ["Stage 1", "RESEARCH", "Intelligence Gathering"],
        [Stage.ARCHITECT]: ["Stage 2", "ARCHITECT", "Blueprint"],
        [Stage.BUILD]: ["Stage 3", "BUILD", "Construction"],
        [Stage.OPTIMIZE]: ["Stage 4", "OPTIMIZE", "Polish"],
        [Stage.DEPLOY]: ["Stage 5", "DEPLOY", "Launch"],
        [Stage.COMPLETED]: [],
    };

    const markers = stageMarkers[stage];
    if (!markers.length) return "";

    // Simple extraction: find section between stage markers
    let content = "";
    const lines = workflow.split("\n");
    let capturing = false;
    let nextStage = stage + 1;

    for (const line of lines) {
        const isStart = markers.some((m) => line.toLowerCase().includes(m.toLowerCase()));
        const isEnd = nextStage <= Stage.DEPLOY &&
            stageMarkers[nextStage as Stage]?.some((m) => line.toLowerCase().includes(m.toLowerCase()));

        if (isStart) capturing = true;
        if (isEnd && capturing) break;
        if (capturing) content += line + "\n";
    }

    return content.trim() || `Requirements for Stage ${stage} (${StageNames[stage]})`;
}

/**
 * Query Firebase for project status
 */
export async function getProjectStatus(projectId: string) {
    const doc = await collections.projects.doc(projectId).get();

    if (!doc.exists) {
        throw new Error(`Project ${projectId} not found`);
    }

    const data = doc.data();
    return {
        id: doc.id,
        currentStage: (data?.currentStage as Stage) || Stage.RESEARCH,
        status: data?.status || "pending",
        idea: data?.idea || "",
        lastOutput: data?.lastOutput || null,
        createdAt: data?.createdAt,
        updatedAt: data?.updatedAt,
    };
}

/**
 * Generate a dynamic prompt for the current stage
 */
export function generateStagePrompt(
    stage: Stage,
    projectData: { idea: string; lastOutput?: unknown }
): string {
    const agent = StageAgents[stage];
    const requirements = getStageRequirements(stage);

    const prompts: Record<Stage, string> = {
        [Stage.RESEARCH]: `
Act as ${agent} within the uBuild System.

## Task
Conduct comprehensive market research for the following idea:
"${projectData.idea}"

## Requirements from Knowledge Base
${requirements}

## Required Outputs
1. Competitor Analysis (top 5 competitors)
2. Market Size Estimation
3. Technology Stack Recommendations
4. User Pain Points
5. Viability Score (1-10)

## Instructions
- Use Perplexity MCP for real-time research
- Return structured JSON
- DO NOT hallucinate data - if MCP fails, report the error
- Save results to Firebase projects/{id}/research
`,

        [Stage.ARCHITECT]: `
Act as ${agent} within the uBuild System.

## Task
Design the system architecture based on Stage 1 research.

## Input (Previous Stage Output)
${JSON.stringify(projectData.lastOutput, null, 2)}

## Requirements from Knowledge Base
${requirements}

## Required Outputs
1. System Architecture Diagram (Mermaid)
2. Database Schema (TypeScript interfaces)
3. API Endpoint Specifications
4. Component Tree
5. Technology Decisions

## Instructions
- Read research from Firestore
- Use Gemini AI for design generation
- Save to Firebase projects/{id}/architecture
`,

        [Stage.BUILD]: `
Act as ${agent} within the uBuild System.

## Task
Generate the MVP codebase based on Stage 2 architecture.

## Input (Previous Stage Output)
${JSON.stringify(projectData.lastOutput, null, 2)}

## Requirements from Knowledge Base
${requirements}

## Required Outputs
1. Generated React components
2. API routes
3. Database models
4. Test files

## Instructions
- Execute @frontend, @backend, @database agents in parallel
- Run @tester agent for validation
- Auto-fix errors (max 3 attempts)
- If errors persist, PAUSE and alert user
- Save to Firebase projects/{id}/build
`,

        [Stage.OPTIMIZE]: `
Act as ${agent} within the uBuild System.

## Task
Optimize the generated codebase for production.

## Input (Previous Stage Output)
${JSON.stringify(projectData.lastOutput, null, 2)}

## Requirements from Knowledge Base
${requirements}

## Required Outputs
1. Performance optimizations
2. SEO improvements
3. Accessibility fixes
4. Security audit results

## Instructions
- Analyze code from Stage 3
- Apply optimizations
- Run Lighthouse audit
- Save to Firebase projects/{id}/optimizations
`,

        [Stage.DEPLOY]: `
Act as ${agent} within the uBuild System.

## Task
Deploy the MVP to production.

## Input (Previous Stage Output)
${JSON.stringify(projectData.lastOutput, null, 2)}

## Requirements from Knowledge Base
${requirements}

## Required Outputs
1. Production build
2. Live deployment URL
3. Monitoring setup
4. Documentation

## Instructions
- Build production bundle
- Deploy via Cloud Run MCP or Vercel
- Configure monitoring
- Return live URLs
- Save to Firebase projects/{id}/deployment
`,

        [Stage.COMPLETED]: "Project completed. No further actions required.",
    };

    return prompts[stage];
}

/**
 * Execute the next stage of the auto-pilot workflow
 */
export async function executeNextStage(projectId: string): Promise<{
    success: boolean;
    stage: Stage;
    prompt: string;
    error?: string;
}> {
    try {
        // 1. Get current project status
        const project = await getProjectStatus(projectId);

        if (project.currentStage >= Stage.COMPLETED) {
            return {
                success: true,
                stage: Stage.COMPLETED,
                prompt: "Project already completed",
            };
        }

        // 2. Generate the prompt for current stage
        const prompt = generateStagePrompt(project.currentStage, {
            idea: project.idea,
            lastOutput: project.lastOutput,
        });

        // 3. Log to agent queue for processing
        await db.collection("agent_queue").add({
            projectId,
            stage: project.currentStage,
            stageName: StageNames[project.currentStage],
            agent: StageAgents[project.currentStage],
            prompt,
            status: "pending",
            createdAt: Timestamp.now(),
        });

        // 4. Update project status
        await collections.projects.doc(projectId).update({
            status: "processing",
            updatedAt: Timestamp.now(),
        });

        return {
            success: true,
            stage: project.currentStage,
            prompt,
        };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";

        // Log the error
        await db.collection("issues").add({
            projectId,
            type: "auto-pilot-error",
            message: errorMessage,
            createdAt: Timestamp.now(),
        });

        return {
            success: false,
            stage: Stage.RESEARCH,
            prompt: "",
            error: errorMessage,
        };
    }
}

/**
 * Mark stage as complete and advance to next
 */
export async function advanceStage(
    projectId: string,
    output: unknown
): Promise<{ success: boolean; nextStage: Stage }> {
    const project = await getProjectStatus(projectId);
    const nextStage = Math.min(project.currentStage + 1, Stage.COMPLETED) as Stage;

    await collections.projects.doc(projectId).update({
        currentStage: nextStage,
        lastOutput: output,
        status: nextStage === Stage.COMPLETED ? "completed" : "ready",
        updatedAt: Timestamp.now(),
    });

    return {
        success: true,
        nextStage,
    };
}

/**
 * Pause workflow due to error
 */
export async function pauseWorkflow(
    projectId: string,
    reason: string
): Promise<void> {
    await collections.projects.doc(projectId).update({
        status: "paused",
        pauseReason: reason,
        updatedAt: Timestamp.now(),
    });

    await db.collection("issues").add({
        projectId,
        type: "workflow-paused",
        message: reason,
        requiresUserInput: true,
        createdAt: Timestamp.now(),
    });
}
