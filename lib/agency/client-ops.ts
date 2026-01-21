
import { db, functions } from "@/lib/firebase/client";
import { collection, addDoc, doc, updateDoc, serverTimestamp, Timestamp } from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
import { BuildTask, AgencyLog } from "@/lib/firebase/schema";

// --- Mock AI Refinement ---

export interface RefinedBrief {
    objective: string;
    features: string[];
    successMetrics: string[];
    suggestedStack: string;
}

export async function refineRequirements(input: string): Promise<RefinedBrief> {
    try {
        const performResearch = httpsCallable(functions, 'performResearch');
        const result = await performResearch({ query: input });
        return (result.data as any).refined as RefinedBrief;
    } catch (error) {
        console.error("Research Cloud Function failed:", error);
        throw error;
    }
}

// --- Submission ---

export interface SubmissionPayload {
    userId: string;
    userEmail: string;
    projectId?: string;
    intentType: string;
    rawInput: string;
    aiAnalysis: RefinedBrief | null;
}

export async function submitProjectRequest(payload: SubmissionPayload) {
    try {
        const docRef = await addDoc(collection(db, "submissions"), {
            ...payload,
            projectId: payload.projectId || "new_project",
            status: "pending",
            createdAt: serverTimestamp(),
        });
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error("Submission error:", error);
        throw error;
    }
}

// --- Public Lead Submission (Smart Onboarding) ---

export interface PublicLeadPayload {
    email: string;
    intent: string;
    description: string;
    hasVoiceMemo: boolean;
    timestamp: any; // ServerTimestamp
}

export async function submitPublicLead(payload: Omit<PublicLeadPayload, 'timestamp'>) {
    try {
        const docRef = await addDoc(collection(db, "leads"), {
            ...payload,
            status: "new",
            source: "smart_onboarding_wizard",
            createdAt: serverTimestamp(),
        });
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error("Lead submission error:", error);
        throw error;
    }
}

// --- Build Trigger ---

const INITIAL_BUILD_TASKS = [
    { component: 'Authentication System', agent: '@backend-specialist' },
    { component: 'Navigation Bar', agent: '@frontend-specialist' },
    { component: 'User Profile Page', agent: '@frontend-specialist' },
    { component: 'Database Schema Migration', agent: '@database-architect' },
    { component: 'API Rate Limiter', agent: '@backend-specialist' },
];

export async function triggerBuildSequence(projectId: string) {
    try {
        // 1. Create Build Tasks
        const batchPromises = INITIAL_BUILD_TASKS.map(async (task) => {
            const buildTask: Omit<BuildTask, 'id'> = {
                projectId,
                status: 'pending',
                componentName: task.component,
                assignedAgent: task.agent,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            // Note: client SDK doesn't support batch adds in the same way as admin, 
            // but parallel addDoc is fine for this scale.
            return addDoc(collection(db, "build_tasks"), {
                ...buildTask,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
            });
        });

        await Promise.all(batchPromises);

        // 2. Log Activation
        await addDoc(collection(db, "logs"), {
            projectId,
            message: 'Agent swarm activated. Construction started.',
            type: 'info',
            timestamp: serverTimestamp(),
        });

        // 3. Update Project Status
        await updateDoc(doc(db, "projects", projectId), {
            currentStage: 3,
            status: 'BUILDING',
            updatedAt: serverTimestamp(),
        });

        // 4. Log detailed Agency Log
        const agencyLog: Omit<AgencyLog, 'id'> = {
            projectId,
            agentName: '@agency-orchestrator',
            stage: 3,
            input: { action: 'initiate_build' },
            output: { tasksCreated: INITIAL_BUILD_TASKS.length },
            timestamp: new Date(), // Client SDK types might prefer Date or Timestamp
            success: true,
        };

        // Ensure timestamp compatibility if needed, but Date usually works with addDoc
        await addDoc(collection(db, "agency_logs"), {
            ...agencyLog,
            timestamp: serverTimestamp(),
        });

        return { success: true, tasksCreated: INITIAL_BUILD_TASKS.length };

    } catch (error) {
        console.error("Build trigger error:", error);
        throw error;
    }
}

// --- Debug/Auto-Fix ---

export async function triggerAutoFix(issueId: string, description: string, projectId: string) {
    try {
        // 1. Log the attempt
        await addDoc(collection(db, "logs"), {
            projectId,
            message: `Auto-fix initiated for issue: ${issueId}`,
            type: 'warning',
            timestamp: serverTimestamp(),
        });

        // 2. Simulate "Fixing" delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        // 3. Resolve the issue (optimistic)
        await updateDoc(doc(db, "issues", issueId), {
            status: 'resolved',
            resolution: 'Auto-corrected by Self-Healing Agent',
            resolvedAt: serverTimestamp()
        });

        // 4. Log success
        await addDoc(collection(db, "logs"), {
            projectId,
            message: `Issue ${issueId} resolved successfully.`,
            type: 'success',
            timestamp: serverTimestamp(),
        });

        return { success: true };

    } catch (error) {
        console.error("Auto-fix error:", error);
        throw error;
    }
}
