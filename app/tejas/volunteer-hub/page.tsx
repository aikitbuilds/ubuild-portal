'use client';

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VolunteerTab } from "@/components/tejas/VolunteerTab";
import { TimeSlotTab } from "@/components/tejas/TimeSlotTab";
import { StationTab } from "@/components/tejas/StationTab"; // Sector Intelligence
import { CommandStructure } from "@/components/tejas/CommandStructure"; // Organizational Structure
import { Shield, Users, Clock, LayoutGrid, CheckCircle2, Activity, Zap, ChevronRight, Info, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ErrorBoundary } from "@/components/ui/error-boundary";

import { getVolunteersClient, SheetVolunteer } from "@/lib/tejas/api";

export default function VolunteerHubPage() {
    const [activeTab, setActiveTab] = React.useState("stations");
    const [volCount, setVolCount] = React.useState(0);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        async function load() {
            const res = await getVolunteersClient();
            if (res.success && res.data) {
                // Better unique count (Name + Index or Email)
                const uniqueIds = new Set();
                res.data.forEach((v, i) => {
                    if (v.isHeader || (!v.firstName && !v.email)) return;
                    const id = v.volunteerId || v.email || `${v.firstName}-${v.lastName}-${i}`;
                    uniqueIds.add(id);
                });
                setVolCount(uniqueIds.size || 193);
            }
            setLoading(false);
        }
        load();
    }, []);

    console.log("VolunteerHubPage Rendering...");

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            <ErrorBoundary>
                {/* High-Contrast "Command" Header Block */}
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-emerald-500/10 to-transparent pointer-events-none"></div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 gap-6">
                        <div className="flex items-center gap-6">
                            <div className="bg-slate-950 p-3 rounded-2xl border border-emerald-500/20 shadow-inner">
                                <Shield className="h-8 w-8 text-emerald-500" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-black tracking-tight font-sans uppercase text-white flex items-center gap-4">
                                    TEJAS VOLUNTEER HUB
                                    <span className="bg-emerald-500/10 text-emerald-400 text-[10px] px-2 py-1 rounded-full font-bold tracking-widest border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]">2.0</span>
                                </h1>
                                <p className="text-[11px] text-slate-500 font-mono uppercase tracking-[0.3em] font-bold mt-1">
                                    Rocky Raccoon 100 • Sector: Hunstville • Volunteer Hub
                                </p>
                            </div>
                        </div>

                        {/* Live Status Telemetry */}
                        <div className="flex items-center gap-8 bg-slate-950/50 px-6 py-3 rounded-2xl border border-slate-800">
                            <div className="text-right space-y-0.5">
                                <div className="text-[9px] font-black font-mono text-slate-500 uppercase tracking-widest">Global Status</div>
                                <div className="flex items-center gap-2 justify-end">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    <span className="text-xs font-black text-emerald-400 shadow-emerald-500/20">ONLINE</span>
                                </div>
                            </div>
                            <div className="w-px h-8 bg-slate-800"></div>
                            <div className="text-right space-y-0.5">
                                <div className="text-[9px] font-black font-mono text-slate-500 uppercase tracking-widest">System Sync</div>
                                <div className="text-xs font-black font-sans text-slate-200 flex items-center justify-end gap-1.5">
                                    <Activity className="h-3 w-3 text-slate-500" />
                                    <span>ACTIVE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Top Metrics / Charts Rail */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 h-[350px]">
                        <div className="h-full w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-emerald-500/5 to-transparent pointer-events-none"></div>
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <Activity className="h-6 w-6 text-emerald-500" />
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        Recruitment Velocity
                                        <Info className="h-4 w-4 text-slate-600 hover:text-emerald-500 cursor-help" />
                                    </h3>
                                </div>
                                <div className="flex items-end gap-4 mb-2">
                                    <span className="text-5xl font-black text-white tracking-tighter">{loading ? "..." : volCount}</span>
                                    <span className="text-sm font-bold text-emerald-500 mb-1.5">+12 this week</span>
                                </div>
                                <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.2em] font-black">Total Unique Personnel Tracked</p>
                            </div>

                            <div className="flex items-end gap-2 h-32 mt-8 opacity-50">
                                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((h, i) => (
                                    <div key={i} className="flex-1 bg-emerald-500 rounded-t-sm" style={{ height: `${h}%`, opacity: i > 6 ? 1 : 0.3 }}></div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Critical Alerts Panel */}
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between h-[350px]">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <Activity className="h-6 w-6 text-amber-500" />
                                <h3 className="text-xl font-bold text-white">Critical Alerts</h3>
                            </div>
                            <div className="space-y-4">
                                <button
                                    onClick={() => setActiveTab("volunteers")}
                                    className="w-full text-left bg-red-500/10 border border-red-500/20 p-5 rounded-2xl hover:bg-red-500/20 transition-all group"
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="text-red-400 font-black text-sm uppercase tracking-wide flex items-center gap-2">
                                            <AlertTriangle className="h-4 w-4" /> Conflict Detected
                                        </div>
                                        <Badge variant="outline" className="text-[10px] border-red-500/30 text-white bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.4)]">NEW</Badge>
                                    </div>
                                    <div className="text-xs text-red-300/70 mt-2 font-mono leading-relaxed flex items-center justify-between">
                                        <span>Show overlaps in Volunteer Roster</span>
                                        <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </button>
                                <button
                                    onClick={() => setActiveTab("stations")}
                                    className="w-full text-left bg-amber-500/10 border border-amber-500/20 p-5 rounded-2xl hover:bg-amber-500/20 transition-all group"
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="text-amber-400 font-black text-sm uppercase tracking-wide flex items-center gap-2">
                                            <Users className="h-4 w-4" /> Station Gap: Aid Station 2
                                        </div>
                                    </div>
                                    <div className="text-xs text-amber-300/70 mt-2 font-mono leading-relaxed flex items-center justify-between">
                                        <span>Deploy reserve in Sector Intel</span>
                                        <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-start items-center bg-slate-900 border border-slate-800 rounded-2xl p-2 shadow-xl">
                            <TabsList className="bg-transparent h-auto p-0 flex gap-1 w-full md:w-auto">
                                <TabsTrigger
                                    value="command"
                                    className="flex-1 md:flex-none px-6 py-3.5 h-auto rounded-xl font-black uppercase text-[11px] tracking-[0.2em] text-slate-500 data-[state=active]:bg-violet-500 data-[state=active]:text-white data-[state=active]:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all flex items-center gap-3 hover:text-slate-300 hover:bg-white/5"
                                >
                                    <Zap className="h-4 w-4" /> Command
                                </TabsTrigger>
                                <TabsTrigger
                                    value="stations"
                                    className="flex-1 md:flex-none px-6 py-3.5 h-auto rounded-xl font-black uppercase text-[11px] tracking-[0.2em] text-slate-500 data-[state=active]:bg-emerald-500 data-[state=active]:text-black data-[state=active]:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all flex items-center gap-3 hover:text-slate-300 hover:bg-white/5"
                                >
                                    <LayoutGrid className="h-4 w-4" /> Intel
                                </TabsTrigger>
                                <TabsTrigger
                                    value="volunteers"
                                    className="flex-1 md:flex-none px-6 py-3.5 h-auto rounded-xl font-black uppercase text-[11px] tracking-[0.2em] text-slate-500 data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all flex items-center gap-3 hover:text-slate-300 hover:bg-white/5"
                                >
                                    <Users className="h-4 w-4" /> Roster
                                </TabsTrigger>
                                <TabsTrigger
                                    value="timeline"
                                    className="flex-1 md:flex-none px-6 py-3.5 h-auto rounded-xl font-black uppercase text-[11px] tracking-[0.2em] text-slate-500 data-[state=active]:bg-amber-500 data-[state=active]:text-black data-[state=active]:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all flex items-center gap-3 hover:text-slate-300 hover:bg-white/5"
                                >
                                    <Clock className="h-4 w-4" /> Timeline
                                </TabsTrigger>
                            </TabsList>
                        </div>
                    </div>

                    <TabsContent value="command" className="focus-visible:outline-none animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-6">
                        <div className="bg-slate-900/50 border border-slate-800/50 p-6 rounded-2xl flex items-center gap-4">
                            <div className="p-2 bg-violet-500/10 rounded-lg"><Zap className="h-5 w-5 text-violet-500" /></div>
                            <div>
                                <h4 className="text-sm font-black text-white uppercase tracking-wider">Operational Command</h4>
                                <p className="text-xs text-slate-500 font-medium">Chain of command and direct contact roster for department leads and supervisors.</p>
                            </div>
                        </div>
                        <ErrorBoundary>
                            <CommandStructure />
                        </ErrorBoundary>
                    </TabsContent>

                    <TabsContent value="stations" className="focus-visible:outline-none animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-6">
                        <div className="bg-slate-900/50 border border-slate-800/50 p-6 rounded-2xl flex items-center gap-4">
                            <div className="p-2 bg-emerald-500/10 rounded-lg"><LayoutGrid className="h-5 w-5 text-emerald-500" /></div>
                            <div>
                                <h4 className="text-sm font-black text-white uppercase tracking-wider">Sector Intelligence</h4>
                                <p className="text-xs text-slate-500 font-medium">Live status and manning levels for all aid stations, logisitcs hubs, and course sectors.</p>
                            </div>
                        </div>
                        <ErrorBoundary>
                            <StationTab />
                        </ErrorBoundary>
                    </TabsContent>

                    <TabsContent value="volunteers" className="focus-visible:outline-none animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-6">
                        <div className="bg-slate-900/50 border border-slate-800/50 p-6 rounded-2xl flex items-center gap-4">
                            <div className="p-2 bg-blue-500/10 rounded-lg"><Users className="h-5 w-5 text-blue-500" /></div>
                            <div>
                                <h4 className="text-sm font-black text-white uppercase tracking-wider">Volunteer Roster</h4>
                                <p className="text-xs text-slate-500 font-medium">Master personnel manifest with profile details, shift assignments, and conflict detection.</p>
                            </div>
                        </div>
                        <ErrorBoundary>
                            <VolunteerTab />
                        </ErrorBoundary>
                    </TabsContent>

                    <TabsContent value="timeline" className="focus-visible:outline-none animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-6">
                        <div className="bg-slate-900/50 border border-slate-800/50 p-6 rounded-2xl flex items-center gap-4">
                            <div className="p-2 bg-amber-500/10 rounded-lg"><Clock className="h-5 w-5 text-amber-500" /></div>
                            <div>
                                <h4 className="text-sm font-black text-white uppercase tracking-wider">Ops Timeline</h4>
                                <p className="text-xs text-slate-500 font-medium">Heatmap analysis of volunteer coverage across the entire race window (Sat AM - Sun PM).</p>
                            </div>
                        </div>
                        <ErrorBoundary>
                            <TimeSlotTab />
                        </ErrorBoundary>
                    </TabsContent>
                </Tabs>
            </ErrorBoundary>
        </div>
    );
}
