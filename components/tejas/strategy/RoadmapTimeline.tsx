"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/lib/firebase/client";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { RoadmapPhase } from "@/lib/tejas/strategy";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

export function RoadmapTimeline() {
    const [phases, setPhases] = useState<RoadmapPhase[]>([]);
    const [expandedPhase, setExpandedPhase] = useState<string | null>(null);

    useEffect(() => {
        const q = query(collection(db, "roadmap_phases"), orderBy("startDate", "asc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            })) as RoadmapPhase[];
            setPhases(data);
        });
        return () => unsubscribe();
    }, []);

    const toggleExpand = (id: string) => {
        setExpandedPhase(expandedPhase === id ? null : id);
    };

    return (
        <div className="space-y-6">
            <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-4">Implementation Timeline</h3>
            <div className="relative">
                {/* Connecting Line (Horizontal on Desktop, Vertical on Mobile) */}
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-white/10 md:left-0 md:right-0 md:top-6 md:h-0.5 md:w-full md:bottom-auto hidden md:block" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    {phases.map((phase, index) => {
                        const isComplete = phase.status === 'completed';
                        const isActive = phase.status === 'active' || phase.status === 'planning';

                        return (
                            <Card
                                key={phase.id}
                                className={cn(
                                    "bg-[#0B1120] border-white/5 cursor-pointer hover:border-white/20 transition-all",
                                    expandedPhase === phase.id && "ring-1 ring-[#E67E22]/50"
                                )}
                                onClick={() => toggleExpand(phase.id)}
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            {isComplete ? (
                                                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/50">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                                </div>
                                            ) : (
                                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/50">
                                                    <Circle className="w-4 h-4 text-blue-500" />
                                                </div>
                                            )}
                                            <div>
                                                <h4 className="text-white font-bold text-lg">{phase.name}</h4>
                                                <p className="text-slate-400 text-xs font-mono">
                                                    {phase.startDate?.toDate ? phase.startDate.toDate().toLocaleDateString() : 'TBD'} -
                                                    {phase.targetDate?.toDate ? phase.targetDate.toDate().toLocaleDateString() : 'TBD'}
                                                </p>
                                            </div>
                                        </div>
                                        <Badge variant={isComplete ? "default" : "secondary"} className={cn(
                                            "uppercase tracking-widest text-[10px]",
                                            isComplete ? "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20" : "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
                                        )}>
                                            {phase.status}
                                        </Badge>
                                    </div>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex justify-between text-xs text-slate-500">
                                            <span>Progress</span>
                                            <span>{phase.progress}%</span>
                                        </div>
                                        <Progress value={phase.progress} className={cn("h-1.5", isComplete ? "bg-emerald-950" : "bg-blue-950")} indicatorClassName={isComplete ? "bg-emerald-500" : "bg-blue-500"} />
                                    </div>

                                    {expandedPhase === phase.id && (
                                        <div className="mt-4 pt-4 border-t border-white/5 animate-in fade-in slide-in-from-top-2">
                                            <p className="text-[10px] font-black uppercase text-slate-500 mb-2">Modules</p>
                                            <ul className="space-y-1">
                                                {phase.modules.map((mod, i) => (
                                                    <li key={i} className="text-sm text-slate-300 flex items-center gap-2">
                                                        <div className="w-1 h-1 rounded-full bg-slate-500" />
                                                        {mod}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className="flex justify-center mt-2">
                                        {expandedPhase === phase.id ?
                                            <ChevronUp className="w-4 h-4 text-slate-600" /> :
                                            <ChevronDown className="w-4 h-4 text-slate-600" />
                                        }
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
