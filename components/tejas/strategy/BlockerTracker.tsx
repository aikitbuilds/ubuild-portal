"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/lib/firebase/client";
import { collection, onSnapshot, query, orderBy, doc, updateDoc } from "firebase/firestore";
import { ProjectBlocker } from "@/lib/tejas/strategy";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export function BlockerTracker() {
    const [blockers, setBlockers] = useState<ProjectBlocker[]>([]);

    useEffect(() => {
        // Only show non-resolved blockers at the top? Or all? User said "Resolved: Green (moved to bottom or hidden)"
        // Let's order by severity first (Critical top), then status.
        const q = query(collection(db, "project_blockers"), orderBy("severity", "asc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            })) as ProjectBlocker[];

            // Sort client-side to handle complex sorting (Critical first, then Unresolved)
            data.sort((a, b) => {
                // 1. Unresolved first
                if (a.status === 'resolved' && b.status !== 'resolved') return 1;
                if (a.status !== 'resolved' && b.status === 'resolved') return -1;

                // 2. Criticality
                const severityScore = { critical: 0, high: 1, low: 2 };
                return severityScore[a.severity] - severityScore[b.severity];
            });

            setBlockers(data);
        });
        return () => unsubscribe();
    }, []);

    const markResolved = async (id: string) => {
        try {
            await updateDoc(doc(db, "project_blockers", id), {
                status: 'resolved'
            });
            toast.success("Blocker marked as resolved.");
        } catch (error) {
            toast.error("Failed to update blocker status.");
            console.error(error);
        }
    };

    const getSeverityColor = (severity: string) => {
        switch (severity) {
            case 'critical': return "bg-red-500/10 text-red-500 border-red-500/20";
            case 'high': return "bg-amber-500/10 text-amber-500 border-amber-500/20";
            case 'low': return "bg-blue-500/10 text-blue-500 border-blue-500/20";
            default: return "bg-slate-500/10 text-slate-500 border-slate-500/20";
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest">Active Blockers & Risks</h3>
                <Badge variant="outline" className="text-xs border-white/10 text-slate-400">
                    {blockers.filter(b => b.status !== 'resolved').length} Open Issues
                </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {blockers.map((blocker) => {
                    const isResolved = blocker.status === 'resolved';
                    return (
                        <Card
                            key={blocker.id}
                            className={cn(
                                "bg-[#0B1120] border-white/5 transition-all",
                                blocker.severity === 'critical' && !isResolved && "border-red-500/30 bg-red-500/5"
                            )}
                        >
                            <CardHeader className="pb-2 pt-4 px-4 flex flex-row items-center justify-between space-y-0">
                                <Badge variant="outline" className={cn("uppercase text-[10px] tracking-wider", getSeverityColor(blocker.severity))}>
                                    {blocker.severity}
                                </Badge>
                                <div className="text-xs font-mono text-slate-500">
                                    Owner: <span className="text-white">{blocker.owner}</span>
                                </div>
                            </CardHeader>
                            <CardContent className="px-4 pb-4">
                                <h4 className={cn("font-bold text-sm mb-2", isResolved && "text-slate-500 line-through")}>
                                    {blocker.title}
                                </h4>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    {blocker.notes}
                                </p>
                            </CardContent>
                            <CardFooter className="px-4 pb-4 pt-0">
                                {!isResolved ? (
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        className="w-full text-xs h-8 bg-white/5 hover:bg-emerald-500/10 hover:text-emerald-500"
                                        onClick={() => markResolved(blocker.id)}
                                    >
                                        <CheckCircle className="w-3 h-3 mr-2" />
                                        Mark Resolved
                                    </Button>
                                ) : (
                                    <div className="w-full text-center text-xs text-emerald-500 font-bold py-1 bg-emerald-500/10 rounded-md border border-emerald-500/20 flex items-center justify-center gap-2">
                                        <CheckCircle className="w-3 h-3" /> Resolved
                                    </div>
                                )}
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
