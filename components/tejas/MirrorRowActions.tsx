"use client";

import React, { useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Wand2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface MirrorRowActionsProps {
    rowNumber: number;
    volunteerName: string;
    hasSuggestion?: boolean;
    suggestedRole?: string;
    status?: string;
    compact?: boolean;
}

const FUNCTION_URL = "https://us-central1-sps-leadscleandb.cloudfunctions.net/updateVolunteerAssignment";

export function MirrorRowActions({
    rowNumber,
    volunteerName,
    hasSuggestion,
    suggestedRole,
    status,
    compact = false
}: MirrorRowActionsProps) {
    const [isPending, startTransition] = useTransition();
    const [isAiPending, startAiTransition] = useTransition();

    const callFunction = async (payload: any) => {
        const response = await fetch(FUNCTION_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        return response.json();
    };

    const handleCheckIn = () => {
        startTransition(async () => {
            try {
                const res = await callFunction({ rowNumber, status: "Checked In" });
                if (res.success) {
                    toast.success(`Check-In confirmed for ${volunteerName}`);
                } else {
                    toast.error(`Check-In failed: ${res.error}`);
                }
            } catch (e: any) {
                toast.error(`Error: ${e.message}`);
            }
        });
    };

    const handleApproveAi = () => {
        if (!suggestedRole) return;
        startAiTransition(async () => {
            try {
                const res = await callFunction({
                    rowNumber,
                    role: suggestedRole,
                    status: "Assigned via AI"
                });
                if (res.success) {
                    toast.success(`AI Suggestion Applied: ${volunteerName} -> ${suggestedRole}`);
                } else {
                    toast.error(`AI Action failed: ${res.error}`);
                }
            } catch (e: any) {
                toast.error(`Error: ${e.message}`);
            }
        });
    };

    const isCheckedIn = status?.toLowerCase().includes('check');
    const isAssigned = status?.toLowerCase().includes('assign');

    if (isCheckedIn) {
        if (compact) {
            return (
                <div className="flex justify-end">
                    <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded border border-green-200">
                        Here
                    </span>
                </div>
            );
        }
        return (
            <div className="flex items-center gap-1 text-green-700 bg-green-50 px-2 py-1 rounded border border-green-200 w-fit">
                <CheckCircle2 className="w-3 h-3" />
                <span className="text-xs font-medium">Checked In</span>
            </div>
        );
    }

    if (compact) {
        return (
            <Button
                size="sm"
                variant="outline"
                className="h-6 text-[10px] px-2 bg-green-50 hover:bg-green-100 hover:text-green-700 border-green-200"
                onClick={handleCheckIn}
                disabled={isPending}
            >
                {isPending ? "..." : "Check In"}
            </Button>
        );
    }

    return (
        <div className="flex flex-col gap-2">
            {!isCheckedIn && (
                <Button
                    size="sm"
                    variant="ghost"
                    className="h-8 gap-2 justify-start hover:bg-green-500/10 hover:text-green-600 px-2"
                    onClick={handleCheckIn}
                    disabled={isPending || isAiPending}
                >
                    {isPending ? <Loader2 className="h-3 w-3 animate-spin" /> : <CheckCircle2 className="h-4 w-4" />}
                    Check In
                </Button>
            )}

            {hasSuggestion && !isAssigned && !isCheckedIn && (
                <Button
                    size="sm"
                    variant="outline"
                    className="h-8 gap-2 justify-start border-amber-500/50 text-amber-600 hover:bg-amber-500/10 px-2"
                    onClick={handleApproveAi}
                    disabled={isPending || isAiPending}
                >
                    {isAiPending ? <Loader2 className="h-3 w-3 animate-spin" /> : <Wand2 className="h-3 w-3" />}
                    Approve AI
                </Button>
            )}

            {(isCheckedIn || isAssigned) && (
                <span className="text-[10px] text-muted-foreground italic px-2">Action Recorded</span>
            )}
        </div>
    );
}
