"use client";

import React, { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Sparkles,
    AlertTriangle,
    CheckCircle2,
    TrendingUp,
    Info,
    CloudRain,
    Moon,
    Users,
    Zap,
    LayoutDashboard
} from "lucide-react";
import { Assignment, Volunteer } from "@/lib/tejas/data";
import {
    analyzeOperationalIntelligence,
    SCENARIOS,
    ScenarioType,
    OperationalDirective
} from "@/lib/tejas/intelligence";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AIDirectorProps {
    assignments: Assignment[];
    volunteers: Volunteer[];
}

export function AIDirector({ assignments, volunteers }: AIDirectorProps) {
    const [scenario, setScenario] = useState<ScenarioType>("normal");

    const report = useMemo(() => {
        return analyzeOperationalIntelligence(volunteers, assignments, scenario);
    }, [assignments, volunteers, scenario]);

    const activeScenario = SCENARIOS[scenario];

    return (
        <Card className="bg-gradient-to-br from-[#0B1120] to-[#1E293B] border-white/10 rounded-[2rem] overflow-hidden shadow-2xl relative">
            <CardHeader className="p-6 border-b border-white/5 bg-white/5 space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-[#E67E22] fill-[#E67E22]" />
                        <CardTitle className="text-xs font-black uppercase tracking-widest text-white">AI Intel Director</CardTitle>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full animate-pulse ${report.status === 'optimal' ? 'bg-emerald-500' :
                            report.status === 'stressed' ? 'bg-amber-500' : 'bg-red-500'
                            }`} />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Live Simulation</span>
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase tracking-widest text-[#E67E22]">Active Scenario</label>
                    <Select value={scenario} onValueChange={(val) => setScenario(val as ScenarioType)}>
                        <SelectTrigger className="h-12 bg-white/5 border-white/10 text-white font-bold text-xs rounded-xl">
                            <SelectValue placeholder="Select Scenario" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0B1120] border-white/10 text-white">
                            <SelectItem value="normal">Optimal Conditions</SelectItem>
                            <SelectItem value="rain">Heavy Rain / Flood Risk</SelectItem>
                            <SelectItem value="high_no_show">Vol. No-Show Crisis</SelectItem>
                            <SelectItem value="night_fatigue">Midnight Fatigue Protocol</SelectItem>
                        </SelectContent>
                    </Select>
                    <p className="text-[10px] text-slate-500 italic mt-2">{activeScenario.impact}</p>
                </div>
            </CardHeader>

            <CardContent className="p-6 space-y-6">
                {/* Ops Score Hub */}
                <div className="bg-white/5 border border-white/5 p-5 rounded-2xl space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Operational Readiness</p>
                            <h3 className="text-3xl font-black text-white">{report.score}%</h3>
                        </div>
                        <div className={`p-3 rounded-xl ${report.score > 80 ? 'bg-emerald-500/10 text-emerald-500' :
                            report.score > 50 ? 'bg-amber-500/10 text-amber-500' : 'bg-red-500/10 text-red-500'
                            }`}>
                            {report.score > 80 ? <CheckCircle2 className="w-6 h-6" /> : <AlertTriangle className="w-6 h-6" />}
                        </div>
                    </div>
                    <Progress value={report.score} className="h-2 bg-white/5" />
                </div>

                {/* Intelligence Feed */}
                <div className="space-y-3">
                    <h4 className="text-[9px] font-black text-slate-500 uppercase tracking-widest px-1">Proactive Directives</h4>
                    <div className="space-y-2 max-h-[300px] overflow-y-auto no-scrollbar pr-1">
                        {report.directives.map((directive) => (
                            <div key={directive.id} className={`p-4 rounded-xl border flex gap-4 transition-all animate-in slide-in-from-right-4 ${directive.type === 'critical' ? 'bg-red-500/10 border-red-500/20 text-red-100' :
                                directive.type === 'warning' ? 'bg-amber-500/10 border-amber-500/20 text-amber-100' :
                                    'bg-blue-500/10 border-blue-500/20 text-blue-100'
                                }`}>
                                <div className="mt-0.5">
                                    {directive.type === 'critical' ? <AlertTriangle className="w-4 h-4 text-red-500" /> :
                                        directive.type === 'warning' ? <CloudRain className="w-4 h-4 text-amber-500" /> :
                                            <Info className="w-4 h-4 text-blue-500" />}
                                </div>
                                <div>
                                    <p className="text-xs font-bold leading-relaxed">{directive.message}</p>
                                    <div className="flex items-center gap-2 mt-2 opacity-60">
                                        <TrendingUp className="w-3 h-3" />
                                        <p className="text-[9px] font-black uppercase tracking-widest">Action Recommended</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {report.directives.length === 0 && (
                            <div className="py-10 text-center space-y-2">
                                <LayoutDashboard className="w-8 h-8 text-slate-700 mx-auto" />
                                <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Awaiting Anomalies</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="pt-4 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-[#E67E22] border-t border-white/5 mt-4">
                    <div className="flex items-center gap-2">
                        <Sparkles className="w-3 h-3" />
                        <span>Core Intelligence v4.0</span>
                    </div>
                    <span className="text-slate-500">Live Engine</span>
                </div>
            </CardContent>
        </Card>
    );
}
