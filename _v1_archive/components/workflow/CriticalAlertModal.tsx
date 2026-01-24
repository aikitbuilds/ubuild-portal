"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, RefreshCw, X } from "lucide-react";
import type { PauseReason } from "@/lib/workflow/engine";

interface CriticalAlertModalProps {
    isOpen: boolean;
    onClose: () => void;
    pauseReason: PauseReason | null;
    onSubmitFix: (userInput: string) => void;
    isSubmitting?: boolean;
}

export function CriticalAlertModal({
    isOpen,
    onClose,
    pauseReason,
    onSubmitFix,
    isSubmitting = false,
}: CriticalAlertModalProps) {
    const [userInput, setUserInput] = useState("");

    const handleSubmit = () => {
        if (userInput.trim()) {
            onSubmitFix(userInput);
            setUserInput("");
        }
    };

    if (!pauseReason) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-lg bg-slate-900 border-red-500/50">
                <DialogHeader>
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-red-500/20 animate-pulse">
                            <AlertTriangle className="h-6 w-6 text-red-500" />
                        </div>
                        <div>
                            <DialogTitle className="text-xl text-white">
                                Critical Alert - Action Required
                            </DialogTitle>
                            <DialogDescription className="text-slate-400">
                                Stage {pauseReason.stageId} has encountered an issue
                            </DialogDescription>
                        </div>
                    </div>
                </DialogHeader>

                <div className="space-y-4 py-4">
                    {/* Error Type Badge */}
                    <Badge
                        variant="outline"
                        className="bg-red-500/10 text-red-400 border-red-500/30"
                    >
                        {pauseReason.type.replace(/_/g, " ")}
                    </Badge>

                    {/* Error Message */}
                    <div className="p-4 rounded-lg bg-slate-800 border border-slate-700">
                        <p className="text-sm font-medium text-slate-300 mb-2">Error Message:</p>
                        <code className="text-sm text-red-400 font-mono block whitespace-pre-wrap">
                            {pauseReason.errorMessage || "Unknown error occurred"}
                        </code>
                        {pauseReason.errorCode && (
                            <p className="text-xs text-slate-500 mt-2">
                                Error Code: {pauseReason.errorCode}
                            </p>
                        )}
                    </div>

                    {/* Suggested Fix */}
                    {pauseReason.suggestedFix && (
                        <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                            <p className="text-sm font-medium text-primary mb-2">Suggested Fix:</p>
                            <p className="text-sm text-slate-300">{pauseReason.suggestedFix}</p>
                        </div>
                    )}

                    {/* Retry Count */}
                    {pauseReason.retryCount > 0 && (
                        <p className="text-xs text-slate-500">
                            Automatic retries attempted: {pauseReason.retryCount}
                        </p>
                    )}

                    {/* User Input */}
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-slate-300">
                            How should the Agent fix this?
                        </p>
                        <Textarea
                            placeholder="Describe how the agent should approach fixing this issue..."
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            className="min-h-[100px] bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                        />
                        <p className="text-xs text-slate-500">
                            Your input will be passed to the AI agent along with the error details.
                        </p>
                    </div>
                </div>

                <DialogFooter className="flex gap-2">
                    <Button
                        variant="outline"
                        onClick={onClose}
                        className="border-slate-700 text-slate-300"
                    >
                        <X className="h-4 w-4 mr-2" />
                        Cancel Build
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        disabled={!userInput.trim() || isSubmitting}
                        className="bg-primary hover:bg-primary/90"
                    >
                        <RefreshCw className={`h-4 w-4 mr-2 ${isSubmitting ? "animate-spin" : ""}`} />
                        {isSubmitting ? "Resuming..." : "Resume Build"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
