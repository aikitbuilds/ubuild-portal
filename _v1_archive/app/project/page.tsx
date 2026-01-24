"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { db } from "@/lib/firebase/client"; // Use client SDK
import { doc, onSnapshot, collection, query, where, orderBy, type DocumentData } from "firebase/firestore";
import { BuildProgressWidget } from "@/components/agency-dashboard/BuildProgressWidget";
import { LiveTerminalFeed } from "@/components/agency-dashboard/LiveTerminalFeed";
import { ActiveIssuesTracker } from "@/components/agency-dashboard/ActiveIssuesTracker";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import type { LogEntry, Issue, BuildTask } from "@/lib/firebase/schema";

export default function ProjectMissionControl() {
    return (
        <React.Suspense fallback={<div className="p-8">Loading Mission Control...</div>}>
            <ProjectMissionControlContent />
        </React.Suspense>
    );
}

function ProjectMissionControlContent() {
    const searchParams = useSearchParams();
    const projectId = searchParams.get("id");

    // Early return or loading state if ID is missing
    if (!projectId) return <div className="p-8">Invalid Project ID</div>;

    const [projectStatus, setProjectStatus] = React.useState<string>("loading");
    const [tasks, setTasks] = React.useState<BuildTask[]>([]);
    const [logs, setLogs] = React.useState<LogEntry[]>([]);
    const [issues, setIssues] = React.useState<Issue[]>([]);
    const [isFixing, setIsFixing] = React.useState<string | null>(null);
    const [isBuilding, setIsBuilding] = React.useState(false);

    // Firestore Subscriptions
    React.useEffect(() => {
        if (!projectId) return;

        // 1. Project Status
        const unsubProject = onSnapshot(doc(db, "projects", projectId), (doc) => {
            if (doc.exists()) {
                const data = doc.data();
                setProjectStatus(data.status || "PLANNING");
            }
        });

        // 2. Build Tasks
        const qTasks = query(collection(db, "build_tasks"), where("projectId", "==", projectId));
        const unsubTasks = onSnapshot(qTasks, (snapshot) => {
            const newTasks = snapshot.docs.map(d => ({ id: d.id, ...d.data() } as BuildTask));
            setTasks(newTasks);
        });

        // 3. Logs (Ordered by time)
        const qLogs = query(collection(db, "logs"), where("projectId", "==", projectId), orderBy("timestamp", "desc"));
        const unsubLogs = onSnapshot(qLogs, (snapshot) => {
            const newLogs = snapshot.docs.map(d => {
                const data = d.data();
                return {
                    id: d.id,
                    ...data,
                    timestamp: data.timestamp?.toDate() || new Date()
                } as LogEntry;
            });
            setLogs(newLogs);
        });

        // 4. Issues
        const qIssues = query(collection(db, "issues"), where("projectId", "==", projectId), where("status", "==", "open"));
        const unsubIssues = onSnapshot(qIssues, (snapshot) => {
            const newIssues = snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Issue));
            setIssues(newIssues);
        });

        return () => {
            unsubProject();
            unsubTasks();
            unsubLogs();
            unsubIssues();
        };
    }, [projectId]);

    const handleStartBuild = async () => {
        setIsBuilding(true);
        try {
            const { triggerBuildSequence } = await import("@/lib/agency/client-ops");
            await triggerBuildSequence(projectId);
        } catch (err) {
            console.error("Failed to start build", err);
        } finally {
            setIsBuilding(false);
        }
    };

    const handleAutoFix = async (issueId: string, description: string) => {
        setIsFixing(issueId);
        try {
            const { triggerAutoFix } = await import("@/lib/agency/client-ops");
            await triggerAutoFix(issueId, description, projectId);
        } catch (err) {
            console.error("Auto-fix failed", err);
        } finally {
            setIsFixing(null);
        }
    };

    const completedTasks = tasks.filter(t => t.status === 'done').length;

    return (
        <main className="min-h-screen bg-slate-50 p-6 flex flex-col gap-6 font-sans text-slate-900">
            <header className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-800">Mission Control // Project: {projectId}</h1>
                    <p className="text-slate-500 text-sm">Status: <span className="font-semibold text-primary uppercase">{projectStatus}</span></p>
                </div>
                {projectStatus !== 'BUILDING' && tasks.length === 0 && (
                    <Button
                        onClick={handleStartBuild}
                        disabled={isBuilding}
                        className="bg-primary hover:bg-teal-700 text-white"
                    >
                        {isBuilding ? "Initializing Swarm..." : <><Play className="mr-2 h-4 w-4" /> Start Build Sequence</>}
                    </Button>
                )}
            </header>

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
                {/* Left Column: Progress & Issues */}
                <div className="flex flex-col gap-6 lg:col-span-1 h-full">
                    <BuildProgressWidget completedTasks={completedTasks} totalTasks={tasks.length} />
                    <div className="flex-1 min-h-0">
                        <ActiveIssuesTracker
                            issues={issues}
                            onAutoFix={handleAutoFix}
                            isFixing={isFixing}
                        />
                    </div>
                </div>

                {/* Right Column: Terminal Feed */}
                <div className="lg:col-span-2 h-full">
                    <LiveTerminalFeed logs={logs} />
                </div>
            </section>
        </main>
    );
}
