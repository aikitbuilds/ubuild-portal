"use client";

import { STAGES, type WorkflowState, getStateColor, isActiveState, isPausedState } from "@/lib/workflow/engine";
import { cn } from "@/lib/utils";
import { CheckCircle, Circle, AlertCircle, Loader2 } from "lucide-react";

interface StageVisualizerProps {
    currentStageId: number;
    currentState: WorkflowState;
    completedStages: number[];
}

export function StageVisualizer({
    currentStageId,
    currentState,
    completedStages = []
}: StageVisualizerProps) {

    const getStageStatus = (stageId: number) => {
        if (completedStages.includes(stageId)) return "completed";
        if (stageId === currentStageId) {
            if (isPausedState(currentState)) return "paused";
            if (isActiveState(currentState)) return "active";
        }
        return "pending";
    };

    const getStageIcon = (status: string, stageId: number) => {
        switch (status) {
            case "completed":
                return <CheckCircle className="h-6 w-6 text-emerald-500" />;
            case "active":
                return (
                    <div className="relative">
                        <Circle className="h-6 w-6 text-blue-500" />
                        <Loader2 className="h-4 w-4 text-blue-500 absolute top-1 left-1 animate-spin" />
                    </div>
                );
            case "paused":
                return (
                    <div className="animate-pulse">
                        <AlertCircle className="h-6 w-6 text-red-500" />
                    </div>
                );
            default:
                return <Circle className="h-6 w-6 text-slate-600" />;
        }
    };

    const getLineColor = (stageId: number) => {
        if (completedStages.includes(stageId)) return "bg-emerald-500";
        if (stageId === currentStageId) {
            if (isPausedState(currentState)) return "bg-red-500 animate-pulse";
            return "bg-blue-500";
        }
        return "bg-slate-700";
    };

    return (
        <div className="w-full py-4">
            {/* Mobile: Vertical */}
            <div className="md:hidden space-y-4">
                {STAGES.map((stage, index) => {
                    const status = getStageStatus(stage.id);
                    return (
                        <div key={stage.id} className="flex items-start gap-4">
                            <div className="flex flex-col items-center">
                                <div className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center border-2",
                                    status === "completed" && "border-emerald-500 bg-emerald-500/10",
                                    status === "active" && "border-blue-500 bg-blue-500/10",
                                    status === "paused" && "border-red-500 bg-red-500/10",
                                    status === "pending" && "border-slate-700 bg-slate-800",
                                )}>
                                    {getStageIcon(status, stage.id)}
                                </div>
                                {index < STAGES.length - 1 && (
                                    <div className={cn("w-0.5 h-12 mt-2", getLineColor(stage.id))} />
                                )}
                            </div>
                            <div>
                                <p className={cn(
                                    "font-semibold",
                                    status === "completed" && "text-emerald-500",
                                    status === "active" && "text-blue-400",
                                    status === "paused" && "text-red-400",
                                    status === "pending" && "text-slate-500",
                                )}>
                                    Stage {stage.id}: {stage.displayName}
                                </p>
                                <p className="text-xs text-slate-500">{stage.description}</p>
                                <p className="text-xs text-slate-600">{stage.estimatedMinutes} min</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Desktop: Horizontal */}
            <div className="hidden md:block">
                <div className="flex items-center justify-between relative">
                    {/* Progress Line Background */}
                    <div className="absolute left-0 right-0 top-5 h-0.5 bg-slate-700 -z-10" />

                    {STAGES.map((stage, index) => {
                        const status = getStageStatus(stage.id);
                        return (
                            <div key={stage.id} className="flex flex-col items-center flex-1">
                                {/* Node */}
                                <div className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center border-2 z-10",
                                    status === "completed" && "border-emerald-500 bg-emerald-500/10",
                                    status === "active" && "border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/30",
                                    status === "paused" && "border-red-500 bg-red-500/10 shadow-lg shadow-red-500/30",
                                    status === "pending" && "border-slate-700 bg-slate-800",
                                )}>
                                    {getStageIcon(status, stage.id)}
                                </div>

                                {/* Label */}
                                <p className={cn(
                                    "mt-3 text-sm font-semibold text-center",
                                    status === "completed" && "text-emerald-500",
                                    status === "active" && "text-blue-400",
                                    status === "paused" && "text-red-400",
                                    status === "pending" && "text-slate-500",
                                )}>
                                    {stage.displayName}
                                </p>
                                <p className="text-[10px] text-slate-600 text-center mt-1">
                                    {stage.estimatedMinutes} min
                                </p>

                                {/* Progress Line Segment */}
                                {index < STAGES.length - 1 && (
                                    <div className={cn(
                                        "absolute h-0.5 top-5 -z-5",
                                        getLineColor(stage.id),
                                    )} style={{
                                        left: `${(index + 0.5) * (100 / STAGES.length)}%`,
                                        width: `${100 / STAGES.length}%`,
                                    }} />
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Status Legend */}
                <div className="flex items-center justify-center gap-6 mt-6 text-xs">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-slate-400">AI Working</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-emerald-500" />
                        <span className="text-slate-400">Complete</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-slate-400">Needs Input</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
