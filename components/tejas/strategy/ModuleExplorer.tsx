"use client";

import React, { useState } from "react";
import { TEJAS_MODULES, ROI_SUMMARY, TejasModule } from "@/lib/tejas/strategy-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { CheckCircle2, Circle, Lock, ArrowRight, Zap, Clock, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function ModuleExplorer() {
    const [selectedModule, setSelectedModule] = useState<TejasModule | null>(null);

    const phases = [1, 2, 3];

    const getPhaseColor = (phase: number) => {
        if (phase === 1) return "emerald";
        if (phase === 2) return "blue";
        return "slate";
    };

    const getPhaseStatus = (phase: number) => {
        if (phase === 1) return "Live & Stable";
        if (phase === 2) return "In Development";
        return "Future / Planned";
    };

    return (
        <div className="space-y-8">
            {/* ROI Summary Widget */}
            <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/20 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/40">
                        <TrendingUp className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-black text-white uppercase tracking-tight">Total Ecosystem Opportunity</h3>
                        <p className="text-slate-300 text-sm">Projected impact of full Phase 2 rollout</p>
                    </div>
                </div>
                <div className="flex gap-8">
                    <div className="text-center">
                        <p className="text-3xl font-black text-white">{ROI_SUMMARY.hoursSaved}</p>
                        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Hours Saved/Race</p>
                    </div>
                    <div className="w-px h-12 bg-white/10" />
                    <div className="text-center">
                        <p className="text-3xl font-black text-emerald-400">${(ROI_SUMMARY.revenuePotential / 1000).toFixed(0)}k</p>
                        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Revenue Potential</p>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {phases.map((phase) => (
                    <div key={phase} className="space-y-4">
                        <div className="flex items-center justify-between border-b border-white/5 pb-2">
                            <h4 className={cn("text-sm font-black uppercase tracking-widest", `text-${getPhaseColor(phase)}-500`)}>
                                Phase {phase}
                            </h4>
                            <span className="text-[10px] text-slate-500 uppercase font-bold">{getPhaseStatus(phase)}</span>
                        </div>

                        <div className="space-y-3">
                            {TEJAS_MODULES.filter(m => m.phase === phase).map((module) => (
                                <Sheet key={module.id}>
                                    <SheetTrigger asChild>
                                        <Card
                                            className={cn(
                                                "bg-[#0B1120] border-white/5 cursor-pointer transition-all hover:scale-[1.02] group",
                                                phase === 2 && "hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/20"
                                            )}
                                        >
                                            <CardContent className="p-4 flex items-start justify-between gap-3">
                                                <div>
                                                    <h5 className="font-bold text-slate-200 group-hover:text-white transition-colors text-sm mb-1">{module.name}</h5>
                                                    <p className="text-xs text-slate-500 line-clamp-1">{module.description}</p>

                                                    {phase === 2 && (
                                                        <Badge variant="secondary" className="mt-3 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 text-[10px] uppercase tracking-wide">
                                                            High ROI
                                                        </Badge>
                                                    )}
                                                </div>
                                                {phase === 1 && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />}
                                                {phase === 2 && <Circle className="w-4 h-4 text-blue-500 shrink-0" />}
                                                {phase === 3 && <Lock className="w-4 h-4 text-slate-700 shrink-0" />}
                                            </CardContent>
                                        </Card>
                                    </SheetTrigger>
                                    <SheetContent className="bg-[#050810] border-l border-white/10 text-slate-200 sm:max-w-md w-full">
                                        <SheetHeader className="mb-6">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Badge variant="outline" className={cn("text-xs uppercase tracking-wider",
                                                    phase === 2 ? "bg-blue-500/10 text-blue-500 border-blue-500/20" : "bg-slate-500/10 text-slate-500 border-slate-500/20"
                                                )}>
                                                    {module.category} Module
                                                </Badge>
                                                <span className="text-xs text-slate-500 uppercase font-bold">Phase {phase}</span>
                                            </div>
                                            <SheetTitle className="text-2xl font-black text-white uppercase tracking-tight">{module.name}</SheetTitle>
                                            <SheetDescription>
                                                {module.description}
                                            </SheetDescription>
                                        </SheetHeader>

                                        <div className="space-y-8">
                                            {/* Pain vs Fix */}
                                            <div className="grid gap-4">
                                                <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-4">
                                                    <h4 className="text-xs font-bold text-red-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                                        <Clock className="w-3 h-3" /> Current Pain
                                                    </h4>
                                                    <p className="text-sm text-slate-400">{module.painPoint}</p>
                                                </div>
                                                <div className="flex justify-center">
                                                    <ArrowRight className="w-5 h-5 text-slate-600 rotate-90" />
                                                </div>
                                                <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4">
                                                    <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                                        <Zap className="w-3 h-3" /> The Fix
                                                    </h4>
                                                    <p className="text-sm text-slate-400">{module.fix}</p>
                                                </div>
                                            </div>

                                            {/* ROI & Effort */}
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="bg-[#0B1120] rounded-xl p-4 border border-white/5">
                                                    <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Impact Goal</p>
                                                    <p className="text-sm font-bold text-blue-400">{module.roiImpact}</p>
                                                </div>
                                                <div className="bg-[#0B1120] rounded-xl p-4 border border-white/5">
                                                    <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Est. Effort</p>
                                                    <p className="text-sm font-bold text-white">{module.effortEstimate}</p>
                                                </div>
                                            </div>

                                            {/* Action */}
                                            {phase === 2 && (
                                                <div className="pt-4 border-t border-white/10">
                                                    <Button className="w-full bg-[#E67E22] hover:bg-[#D35400] text-white font-bold">
                                                        Prioritize This Module
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    </SheetContent>
                                </Sheet>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
