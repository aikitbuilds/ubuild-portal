/**
 * Firestore Schema Definitions
 * 
 * TypeScript interfaces for all Firestore collections used by the uBuild Agency.
 */

// ============================================
// PROJECTS COLLECTION
// Tracks the overall state of a client's build
// ============================================
export interface ProjectIdea {
    title: string;
    description: string;
    targetAudience: string;
    techPreferences?: string;
}

export type ProjectStatus = 'PLANNING' | 'RESEARCHING' | 'ARCHITECTING' | 'BUILDING' | 'OPTIMIZING' | 'COMPLETED';

export interface Project {
    id: string;
    clientId: string;
    currentStage: 1 | 2 | 3 | 4 | 5;
    status?: ProjectStatus; // Extended for Phase 3
    idea: ProjectIdea;
    createdAt: Date;
    updatedAt: Date;
}

// ============================================
// AGENCY_LOGS COLLECTION
// Raw JSON outputs from agents for debugging
// ============================================
export interface AgencyLog {
    id: string;
    projectId: string;
    agentName: string;
    stage: number;
    input: Record<string, unknown>;
    output: Record<string, unknown>;
    timestamp: Date;
    success: boolean;
    errorMessage?: string;
}

// ============================================
// LOGS COLLECTION (Real-time Feed)
// System event logs for dashboard display
// ============================================
export interface LogEntry {
    id: string;
    projectId: string;
    timestamp: Date;
    message: string;
    type: 'info' | 'error' | 'success' | 'warning';
}

// ============================================
// RESEARCH_REPORTS COLLECTION (Stage 1 Output)
// Market research and viability analysis
// ============================================
export interface ResearchReport {
    id: string;
    projectId: string;
    viabilityScore: number; // 1-10
    competitors: string[];
    techStack: string[];
    marketSummary: string;
    createdAt: Date;
}

// ============================================
// BLUEPRINTS COLLECTION (Stage 2 Output)
// Architecture and design specifications
// ============================================
export interface Blueprint {
    id: string;
    projectId: string;
    architectureDiagram: string; // Mermaid syntax
    dbSchema: string;
    apiEndpoints: ApiEndpoint[];
    createdAt: Date;
}

export interface ApiEndpoint {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    path: string;
    description: string;
}

// ============================================
// BUILD_TASKS COLLECTION (Stage 3)
// Individual construction tasks
// ============================================
export type TaskStatus = 'pending' | 'in-progress' | 'done' | 'failed';

export interface BuildTask {
    id: string;
    projectId: string;
    status: TaskStatus;
    componentName: string;
    assignedAgent: string; // e.g., @frontend-specialist
    createdAt: Date;
    updatedAt: Date;
}

// ============================================
// ISSUES COLLECTION (Stage 3 Debugging)
// Tracking bugs and auto-fixes
// ============================================
export type IssueSeverity = 'critical' | 'high' | 'medium' | 'low';
export type IssueStatus = 'open' | 'resolved';

export interface Issue {
    id: string;
    projectId: string;
    severity: IssueSeverity;
    description: string;
    suggestedFix?: string; // Populated by AI Debugger
    status: IssueStatus;
    createdAt: Date;
}

// ============================================
// API Request/Response Types
// ============================================
export interface ResearchRequest {
    projectId: string;
    idea: string;
    audience: string;
}

export interface ResearchResponse {
    success: boolean;
    report?: ResearchReport;
    error?: string;
}

export interface BuildRequest {
    projectId: string;
    architectureId?: string;
}

export interface BuildResponse {
    success: boolean;
    tasksCreated: number;
    error?: string;
}

// Gemini API response structure (parsed JSON)
export interface PerplexityResearchResult {
    score: number;
    competitors: string[];
    techStack: string[];
    summary: string;
}
