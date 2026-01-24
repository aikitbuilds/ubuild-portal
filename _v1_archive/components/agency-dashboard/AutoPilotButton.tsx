"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Play,
    Pause,
    CheckCircle,
    AlertTriangle,
    Loader2,
    Zap,
    Brain
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AutoPilotButtonProps {
    projectId: string;
    currentStage: number;
    status: "pending" | "ready" | "processing" | "paused" | "completed" | "failed";
    onStageComplete?: (stage: number) => void;
    className?: string;
}

const stageNames = ["", "Research", "Architecture", "Build", "Optimize", "Deploy", "Completed"];

export function AutoPilotButton({
    projectId,
    currentStage,
    status,
    onStageComplete,
    className,
}: AutoPilotButtonProps) {
    const [isExecuting, setIsExecuting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [lastResult, setLastResult] = useState<string | null>(null);

    const handleExecute = async () => {
        setIsExecuting(true);
        setError(null);
        setLastResult(null);

        try {
            const response = await fetch("/api/agency/auto-pilot", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    projectId,
                    action: "execute",
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Execution failed");
            }

            setLastResult(`Stage ${data.stage} (${data.stageName}) queued`);
            onStageComplete?.(data.stage);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Unknown error");
        } finally {
            setIsExecuting(false);
        }
    };

    const isDisabled =
        isExecuting ||
        status === "processing" ||
        status === "completed" ||
        currentStage >= 6;

    const getStatusIcon = () => {
        if (isExecuting || status === "processing") {
            return <Loader2 className="w-4 h-4 animate-spin" />;
        }
        if (status === "completed") {
            return <CheckCircle className="w-4 h-4 text-emerald-500" />;
        }
        if (status === "paused" || status === "failed") {
            return <AlertTriangle className="w-4 h-4 text-amber-500" />;
        }
        return <Brain className="w-4 h-4" />;
    };

    const getButtonLabel = () => {
        if (isExecuting || status === "processing") {
            return `Executing Stage ${currentStage}...`;
        }
        if (status === "completed") {
            return "MVP Complete";
        }
        if (status === "paused") {
            return "Resume Auto-Pilot";
        }
        if (currentStage >= 6) {
            return "All Stages Complete";
        }
        return `Execute Stage ${currentStage}: ${stageNames[currentStage]}`;
    };

    return (
        <div className={cn("space-y-3", className)}>
            {/* Main Button */}
            <motion.div
                whileHover={{ scale: isDisabled ? 1 : 1.02 }}
                whileTap={{ scale: isDisabled ? 1 : 0.98 }}
            >
                <Button
                    size="lg"
                    onClick={handleExecute}
                    disabled={isDisabled}
                    className={cn(
                        "w-full h-14 text-lg font-semibold transition-all",
                        status === "completed"
                            ? "bg-emerald-600 hover:bg-emerald-700"
                            : "bg-gradient-to-r from-primary to-cyan-500 hover:shadow-lg hover:shadow-primary/30"
                    )}
                >
                    {getStatusIcon()}
                    <span className="ml-2">{getButtonLabel()}</span>
                    {!isDisabled && currentStage < 6 && (
                        <Zap className="ml-2 w-4 h-4" />
                    )}
                </Button>
            </motion.div>

            {/* Status Badge */}
            <div className="flex items-center justify-between text-sm">
                <Badge
                    variant="outline"
                    className={cn(
                        status === "ready" && "bg-emerald-500/10 text-emerald-500 border-emerald-500/30",
                        status === "processing" && "bg-blue-500/10 text-blue-500 border-blue-500/30 animate-pulse",
                        status === "paused" && "bg-amber-500/10 text-amber-500 border-amber-500/30",
                        status === "completed" && "bg-emerald-500/10 text-emerald-500 border-emerald-500/30",
                        status === "failed" && "bg-red-500/10 text-red-500 border-red-500/30",
                    )}
                >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                </Badge>
                <span className="text-slate-500">
                    Stage {currentStage} of 5
                </span>
            </div>

            {/* Result/Error Messages */}
            {error && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
                >
                    <AlertTriangle className="inline w-4 h-4 mr-2" />
                    {error}
                </motion.div>
            )}

            {lastResult && !error && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm"
                >
                    <CheckCircle className="inline w-4 h-4 mr-2" />
                    {lastResult}
                </motion.div>
            )}

            {/* Info Text */}
            <p className="text-xs text-slate-500 text-center">
                Auto-Pilot reads knowledge base and executes agents automatically
            </p>
        </div>
    );
}
