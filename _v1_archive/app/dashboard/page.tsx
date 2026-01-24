"use client";

import { useState, useEffect } from "react";
import { PipelineOverview } from "@/components/analytics/PipelineOverview";
import { VelocityChart } from "@/components/analytics/VelocityChart";
import { SystemHealth } from "@/components/analytics/SystemHealth";
import { ProjectsTable } from "@/components/analytics/ProjectsTable";
import { BuildCoPilot } from "@/components/agency/BuildCoPilot";
import { AutoPilotButton } from "@/components/agency-dashboard/AutoPilotButton";
import { useAgencyData } from "@/lib/simulation/agency-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Brain } from "lucide-react";

interface ProjectStatus {
    id: string;
    currentStage: number;
    status: "pending" | "ready" | "processing" | "paused" | "completed" | "failed";
    stageName: string;
}

export default function DashboardHome() {
    const { metrics, pipelineData, velocityData, issueSeverity, projects } = useAgencyData(true);
    const [projectStatus, setProjectStatus] = useState<ProjectStatus>({
        id: "agency-overview",
        currentStage: 1,
        status: "ready",
        stageName: "Research",
    });

    // Fetch project status on mount
    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const res = await fetch("/api/agency/project-status?projectId=agency-overview");
                if (res.ok) {
                    const data = await res.json();
                    setProjectStatus(data);
                }
            } catch (error) {
                console.error("Failed to fetch project status:", error);
            }
        };

        fetchStatus();
    }, []);

    const handleStageComplete = (stage: number) => {
        setProjectStatus((prev) => ({
            ...prev,
            currentStage: stage + 1,
            status: "ready",
        }));
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <header className="flex items-center justify-between pb-4 border-b">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Agency Command Center</h1>
                    <p className="text-muted-foreground text-sm mt-1">
                        Real-time overview of {metrics.totalClients} clients and {metrics.totalProjects} active projects.
                    </p>
                </div>
                <Badge variant="outline" className="gap-1.5 py-1.5 px-3 bg-emerald-500/10 text-emerald-600 border-emerald-500/30">
                    <Activity className="h-3 w-3" />
                    <span className="text-xs font-medium">Demo Mode</span>
                </Badge>
            </header>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Row 1: Auto-Pilot Control Card + Pipeline Overview */}
                <Card className="bg-slate-950/50 border-slate-800">
                    <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <Brain className="h-5 w-5 text-cyan-400" />
                            System Brain
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <AutoPilotButton
                            projectId={projectStatus.id}
                            currentStage={projectStatus.currentStage}
                            status={projectStatus.status}
                            onStageComplete={handleStageComplete}
                        />
                    </CardContent>
                </Card>
                <div className="lg:col-span-2">
                    <PipelineOverview
                        data={pipelineData}
                        totalMRR={metrics.totalMRR}
                        activeBuilds={metrics.activeBuilds}
                        criticalIssues={metrics.criticalIssues}
                    />
                </div>

                {/* Row 2: Velocity Chart (Wide) + Co-Pilot (Narrow) */}
                <VelocityChart data={velocityData} />
                <BuildCoPilot projectId="agency-overview" currentStage="All" />

                {/* Row 3: System Health (Narrow) + Projects Table (Wide) */}
                <SystemHealth data={issueSeverity} healthPercent={metrics.systemHealth} />
                <div className="lg:col-span-2">
                    <ProjectsTable projects={projects} />
                </div>
            </div>
        </div>
    );
}
