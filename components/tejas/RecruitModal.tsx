
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { SheetVolunteer } from "@/lib/tejas/api";
import { suggestVolunteersForShift } from "@/lib/tejas/race-logic";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserCheck, Sparkles } from "lucide-react";

interface RecruitModalProps {
    isOpen: boolean;
    onClose: () => void;
    targetShift: Partial<SheetVolunteer>;
    allVolunteers: SheetVolunteer[];
    onInvite: (volunteerId: string) => void;
}

export function RecruitModal({ isOpen, onClose, targetShift, allVolunteers, onInvite }: RecruitModalProps) {
    const candidates = React.useMemo(() => {
        if (!isOpen || !targetShift.shiftTime) return [];
        return suggestVolunteersForShift(
            targetShift.shiftTime,
            targetShift.startTime,
            targetShift.endTime,
            allVolunteers
        );
    }, [isOpen, targetShift, allVolunteers]);

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-2xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                        <Sparkles className="h-6 w-6 text-emerald-500" />
                        Smart Recruiter
                    </DialogTitle>
                    <DialogDescription className="text-slate-400 font-medium">
                        Finding best matches for <span className="text-white font-bold">{targetShift.childStation}</span> • {targetShift.shiftTime}
                    </DialogDescription>
                </DialogHeader>

                <div className="mt-4">
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4">Top Available Candidates</h4>
                    <ScrollArea className="h-[300px] border border-slate-800 rounded-xl bg-slate-950/50 p-4">
                        <div className="space-y-3">
                            {candidates.length === 0 ? (
                                <div className="text-center py-10 text-slate-500">
                                    No available candidates found without conflicts.
                                </div>
                            ) : (
                                candidates.map((c, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/50 transition-colors group">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                                                <span className="font-black text-slate-400">{c.volunteer.firstName?.[0]}</span>
                                            </div>
                                            <div>
                                                <div className="font-bold text-white uppercase tracking-tight">
                                                    {c.volunteer.firstName} {c.volunteer.lastName}
                                                </div>
                                                <div className="text-[10px] font-mono text-emerald-500 flex items-center gap-2">
                                                    <UserCheck className="h-3 w-3" />
                                                    {c.matchReason}
                                                </div>
                                            </div>
                                        </div>
                                        <Button
                                            size="sm"
                                            onClick={() => onInvite(c.volunteer.volunteerId || "")}
                                            className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-white border border-emerald-500/20 font-bold uppercase tracking-wide text-xs transition-all"
                                        >
                                            Assign
                                        </Button>
                                    </div>
                                ))
                            )}
                        </div>
                    </ScrollArea>
                </div>
            </DialogContent>
        </Dialog>
    );
}
