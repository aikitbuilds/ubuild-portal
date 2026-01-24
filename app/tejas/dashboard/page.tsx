'use client';

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VolunteerTab } from "@/components/tejas/VolunteerTab";
import { TimeSlotTab } from "@/components/tejas/TimeSlotTab";
import { StationTab } from "@/components/tejas/StationTab";
import { RoiChart } from "@/components/visuals/RoiChart";
import { Shield, Users, Clock, LayoutGrid, CheckCircle2, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/20">
            {/* High-Contrast "Command" Header */}
            <header className="bg-slate-900 border-b border-slate-800 px-8 py-5 sticky top-0 z-50 shadow-2xl shadow-black/20">
                <div className="flex justify-between items-center max-w-[1800px] mx-auto">
                    <div className="flex items-center gap-6">
                        <div className="bg-emerald-900/20 p-2 rounded-xl border border-emerald-500/20">
                            <Shield className="h-7 w-7 text-emerald-500" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-black tracking-tight font-sans uppercase text-white flex items-center gap-3">
                                TEJAS COMMAND
                                <span className="bg-emerald-500/10 text-emerald-400 text-[10px] px-2 py-1 rounded-full font-bold tracking-widest border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]">LIVE OPS</span>
                            </h1>
                            <p className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.3em] font-bold mt-0.5">
                                Rocky Raccoon 100 • Sector: Hunstville
                            </p>
                        </div>
                    </div>

                    {/* Live Status Telemetry */}
                    <div className="hidden lg:flex items-center gap-10 border-l border-slate-800 pl-10">
                        <div className="text-right space-y-1">
                            <div className="text-[9px] font-black font-mono text-slate-500 uppercase tracking-widest">Global Status</div>
                            <div className="flex items-center gap-2 justify-end">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                </span>
                                <span className="text-sm font-black text-emerald-400 shadow-emerald-500/20">ONLINE</span>
                            </div>
                        </div>
                        <div className="text-right border-l border-slate-800 pl-10 space-y-1">
                            <div className="text-[10px] font-black font-mono text-slate-500 uppercase tracking-widest">System Sync</div>
                            <div className="text-sm font-black font-sans text-slate-200 flex items-center gap-1.5 justify-end">
                                <Activity className="h-4 w-4 text-slate-500" />
                                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-[1800px] mx-auto p-6 space-y-8">

                {/* Top Metrics / Charts Rail */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        {/* Re-integrated Chart */}
                        <RoiChart className="h-full" />
                    </div>
                    {/* Placeholder for Quick Stats or Map */}
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Activity className="h-5 w-5 text-amber-500" />
                                <h3 className="text-lg font-bold text-white">Critical Alerts</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                                    <div className="flex justify-between items-start">
                                        <div className="text-red-400 font-bold text-sm">Conflict Detected</div>
                                        <Badge variant="outline" className="text-[10px] border-red-500/30 text-red-500">NEW</Badge>
                                    </div>
                                    <div className="text-xs text-red-300/70 mt-1 font-mono">
                                        Multiple volunteers flagged for simultaneous shifts.
                                    </div>
                                </div>
                                <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-lg">
                                    <div className="text-amber-400 font-bold text-sm">Station Gap: Aid Station 2</div>
                                    <div className="text-xs text-amber-300/70 mt-1 font-mono">
                                        Shift 2 (14:00 - 18:00) is understaffed.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Tabs defaultValue="volunteers" className="space-y-8">
                    <div className="flex justify-start border-b border-slate-800 pb-0">
                        <TabsList className="bg-transparent h-auto p-0 flex gap-8">
                            <TabsTrigger
                                value="volunteers"
                                className="px-0 py-4 h-auto border-b-2 border-transparent data-[state=active]:border-emerald-500 data-[state=active]:bg-transparent rounded-none font-bold uppercase text-[12px] tracking-widest text-slate-500 data-[state=active]:text-white transition-all flex items-center gap-3 hover:text-slate-300"
                            >
                                <Users className="h-4 w-4" /> Personnel
                            </TabsTrigger>
                            <TabsTrigger
                                value="timeline"
                                className="px-0 py-4 h-auto border-b-2 border-transparent data-[state=active]:border-emerald-500 data-[state=active]:bg-transparent rounded-none font-bold uppercase text-[12px] tracking-widest text-slate-500 data-[state=active]:text-white transition-all flex items-center gap-3 hover:text-slate-300"
                            >
                                <Clock className="h-4 w-4" /> Timeline
                            </TabsTrigger>
                            <TabsTrigger
                                value="stations"
                                className="px-0 py-4 h-auto border-b-2 border-transparent data-[state=active]:border-emerald-500 data-[state=active]:bg-transparent rounded-none font-bold uppercase text-[12px] tracking-widest text-slate-500 data-[state=active]:text-white transition-all flex items-center gap-3 hover:text-slate-300"
                            >
                                <LayoutGrid className="h-4 w-4" /> Stations
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="volunteers" className="focus-visible:outline-none animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <VolunteerTab />
                    </TabsContent>

                    <TabsContent value="timeline" className="focus-visible:outline-none animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <TimeSlotTab />
                    </TabsContent>

                    <TabsContent value="stations" className="focus-visible:outline-none animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <StationTab />
                    </TabsContent>
                </Tabs>
            </main>

            {/* Operational Footer Bar */}
            <footer className="fixed bottom-0 left-0 right-0 h-8 bg-slate-900 border-t border-slate-800 flex items-center justify-between px-6 text-[10px] font-bold font-mono text-slate-500 z-50 uppercase tracking-widest">
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Command Link: Secure
                </div>
                <div className="flex gap-6">
                    <span className="text-slate-600">Huntsville SP</span>
                    <span className="text-slate-700">|</span>
                    <span className="text-slate-600">Tejas v2.4.1</span>
                </div>
            </footer>
        </div>
    );
}
