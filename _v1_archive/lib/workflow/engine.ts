// Intelligence Orchestrator - Workflow State Machine
// Implements the 5-stage workflow with PAUSED_FOR_INPUT state

import { Timestamp } from "firebase/firestore";

// Workflow States
export type WorkflowState =
    | "RESEARCH"      // Stage 1: Perplexity research
    | "ARCHITECT"     // Stage 2: System design
    | "BUILD"         // Stage 3: Code generation
    | "OPTIMIZE"      // Stage 4: Performance tuning
    | "DEPLOY"        // Stage 5: Production deployment
    | "PAUSED_FOR_INPUT"  // Error state - waiting for user intervention
    | "COMPLETED"     // Workflow finished
    | "FAILED";       // Unrecoverable error

// Stage metadata
export interface StageConfig {
    id: number;
    name: WorkflowState;
    displayName: string;
    estimatedMinutes: number;
    agent: string;
    description: string;
}

export const STAGES: StageConfig[] = [
    { id: 1, name: "RESEARCH", displayName: "Deep Research", estimatedMinutes: 45, agent: "@perplexity", description: "Market research and validation" },
    { id: 2, name: "ARCHITECT", displayName: "Smart Architecture", estimatedMinutes: 60, agent: "@architect", description: "System design and planning" },
    { id: 3, name: "BUILD", displayName: "Core Build", estimatedMinutes: 120, agent: "@builder", description: "Code generation and implementation" },
    { id: 4, name: "OPTIMIZE", displayName: "Optimization", estimatedMinutes: 90, agent: "@improver", description: "Performance and quality improvements" },
    { id: 5, name: "DEPLOY", displayName: "Deployment", estimatedMinutes: 60, agent: "@deployer", description: "Production deployment and monitoring" },
];

// Workflow context for a project
export interface WorkflowContext {
    projectId: string;
    currentState: WorkflowState;
    currentStageId: number;
    startedAt: Timestamp;
    updatedAt: Timestamp;
    stageHistory: StageHistoryEntry[];
    pauseReason?: PauseReason;
    resumeData?: Record<string, unknown>;
}

export interface StageHistoryEntry {
    stageId: number;
    state: WorkflowState;
    startedAt: Timestamp;
    completedAt?: Timestamp;
    durationMs?: number;
    output?: Record<string, unknown>;
    error?: string;
}

export interface PauseReason {
    type: "ERROR" | "APPROVAL_REQUIRED" | "USER_INPUT_NEEDED";
    errorMessage?: string;
    errorCode?: string;
    stageId: number;
    timestamp: Timestamp;
    retryCount: number;
    suggestedFix?: string;
}

// State Transition Rules
const VALID_TRANSITIONS: Record<WorkflowState, WorkflowState[]> = {
    RESEARCH: ["ARCHITECT", "PAUSED_FOR_INPUT", "FAILED"],
    ARCHITECT: ["BUILD", "PAUSED_FOR_INPUT", "FAILED"],
    BUILD: ["OPTIMIZE", "PAUSED_FOR_INPUT", "FAILED"],
    OPTIMIZE: ["DEPLOY", "PAUSED_FOR_INPUT", "FAILED"],
    DEPLOY: ["COMPLETED", "PAUSED_FOR_INPUT", "FAILED"],
    PAUSED_FOR_INPUT: ["RESEARCH", "ARCHITECT", "BUILD", "OPTIMIZE", "DEPLOY", "FAILED"],
    COMPLETED: [],
    FAILED: [],
};

// Workflow Engine Class
export class WorkflowEngine {
    private context: WorkflowContext;
    private listeners: Map<string, (context: WorkflowContext) => void> = new Map();

    constructor(projectId: string) {
        this.context = {
            projectId,
            currentState: "RESEARCH",
            currentStageId: 1,
            startedAt: Timestamp.now(),
            updatedAt: Timestamp.now(),
            stageHistory: [],
        };
    }

    // Get current state
    getState(): WorkflowState {
        return this.context.currentState;
    }

    // Get current stage config
    getCurrentStage(): StageConfig | undefined {
        return STAGES.find(s => s.id === this.context.currentStageId);
    }

    // Get full context
    getContext(): WorkflowContext {
        return { ...this.context };
    }

    // Check if transition is valid
    canTransition(toState: WorkflowState): boolean {
        return VALID_TRANSITIONS[this.context.currentState].includes(toState);
    }

    // Transition to next state
    transition(toState: WorkflowState, output?: Record<string, unknown>): boolean {
        if (!this.canTransition(toState)) {
            console.error(`Invalid transition: ${this.context.currentState} -> ${toState}`);
            return false;
        }

        const previousState = this.context.currentState;
        const now = Timestamp.now();

        // Record history for previous state
        if (previousState !== "PAUSED_FOR_INPUT") {
            const lastEntry = this.context.stageHistory[this.context.stageHistory.length - 1];
            if (lastEntry && !lastEntry.completedAt) {
                lastEntry.completedAt = now;
                lastEntry.durationMs = now.toMillis() - lastEntry.startedAt.toMillis();
                lastEntry.output = output;
            }
        }

        // Update state
        this.context.currentState = toState;
        this.context.updatedAt = now;

        // If moving to next stage (not pause/fail)
        if (["RESEARCH", "ARCHITECT", "BUILD", "OPTIMIZE", "DEPLOY"].includes(toState)) {
            const stage = STAGES.find(s => s.name === toState);
            if (stage) {
                this.context.currentStageId = stage.id;
                this.context.stageHistory.push({
                    stageId: stage.id,
                    state: toState,
                    startedAt: now,
                });
            }
            // Clear pause reason on successful resume
            this.context.pauseReason = undefined;
        }

        // Notify listeners
        this.notifyListeners();
        return true;
    }

    // Pause workflow for user input
    pause(reason: Omit<PauseReason, "timestamp">): void {
        const pauseReason: PauseReason = {
            ...reason,
            timestamp: Timestamp.now(),
        };
        this.context.pauseReason = pauseReason;
        this.transition("PAUSED_FOR_INPUT");
    }

    // Resume from pause with user input
    resume(userInput: string, targetState?: WorkflowState): boolean {
        if (this.context.currentState !== "PAUSED_FOR_INPUT") {
            console.error("Cannot resume - workflow is not paused");
            return false;
        }

        // Store the user input for the agent to use
        this.context.resumeData = {
            userInput,
            originalError: this.context.pauseReason?.errorMessage,
            suggestedFix: this.context.pauseReason?.suggestedFix,
            resumedAt: Timestamp.now(),
        };

        // Determine which state to resume to
        const resumeState = targetState || this.getResumeState();
        return this.transition(resumeState);
    }

    // Determine which state to return to after pause
    private getResumeState(): WorkflowState {
        const pausedStageId = this.context.pauseReason?.stageId || this.context.currentStageId;
        const stage = STAGES.find(s => s.id === pausedStageId);
        return stage?.name || "BUILD";
    }

    // Subscribe to state changes
    subscribe(id: string, callback: (context: WorkflowContext) => void): void {
        this.listeners.set(id, callback);
    }

    // Unsubscribe
    unsubscribe(id: string): void {
        this.listeners.delete(id);
    }

    // Notify all listeners
    private notifyListeners(): void {
        this.listeners.forEach((callback) => {
            callback(this.getContext());
        });
    }

    // Load from Firestore data
    static fromFirestore(data: Record<string, unknown>): WorkflowEngine {
        const engine = new WorkflowEngine(data.projectId as string);
        engine.context = data as unknown as WorkflowContext;
        return engine;
    }

    // Convert to Firestore data
    toFirestore(): Record<string, unknown> {
        return { ...this.context } as Record<string, unknown>;
    }
}

// State display helpers
export function getStateColor(state: WorkflowState): string {
    switch (state) {
        case "RESEARCH":
        case "ARCHITECT":
        case "BUILD":
        case "OPTIMIZE":
        case "DEPLOY":
            return "blue"; // Pulsing blue - AI working
        case "COMPLETED":
            return "green"; // Complete
        case "PAUSED_FOR_INPUT":
            return "red"; // Flashing red - needs attention
        case "FAILED":
            return "destructive";
        default:
            return "default";
    }
}

export function getStateDisplayName(state: WorkflowState): string {
    const stage = STAGES.find(s => s.name === state);
    return stage?.displayName || state;
}

export function isActiveState(state: WorkflowState): boolean {
    return ["RESEARCH", "ARCHITECT", "BUILD", "OPTIMIZE", "DEPLOY"].includes(state);
}

export function isPausedState(state: WorkflowState): boolean {
    return state === "PAUSED_FOR_INPUT";
}

export function isTerminalState(state: WorkflowState): boolean {
    return state === "COMPLETED" || state === "FAILED";
}
