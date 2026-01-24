'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { getVolunteersClient, SheetVolunteer } from "@/lib/tejas/api";
import { Loader2, Info, Calendar as CalendarIcon, Clock, Users, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Configuration
const START_TIME = new Date("2025-02-01T04:00:00"); // Sat 4 AM
const END_TIME = new Date("2025-02-02T12:00:00");   // Sun 12 PM
const TOTAL_HOURS = 32;

interface StationRow {
    name: string;
    volunteers: SheetVolunteer[];
    coverage: number[]; // Array of counts per hour
}

function parseTime(str: string): Date | null {
    if (!str) return null;
    try {
        const clean = str.replace(/\u2013|\u2014/g, "-").toUpperCase().trim();
        const SAT = new Date("2025-02-01T00:00:00");
        const SUN = new Date("2025-02-02T00:00:00");

        let base = SAT;
        if (clean.includes('SUN')) base = SUN;
        if (clean.includes('SAT')) base = SAT;

        const milMatch = clean.match(/(\d{2})(\d{2})/);
        const standardMatch = clean.match(/(\d+)(?::(\d+))?\s*(AM|PM)/i);

        let hours = 0;
        let minutes = 0;

        if (milMatch) {
            hours = parseInt(milMatch[1]);
            minutes = parseInt(milMatch[2]);
        } else if (standardMatch) {
            let [_, h, m, period] = standardMatch;
            hours = parseInt(h);
            minutes = m ? parseInt(m) : 0;
            if (period === "PM" && hours !== 12) hours += 12;
            if (period === "AM" && hours === 12) hours = 0;
        }

        const d = new Date(base);
        d.setHours(hours, minutes, 0, 0);
        return d;
    } catch (e) { return null; }
}

function getCoverageArray(volunteers: SheetVolunteer[]): number[] {
    const coverage = new Array(TOTAL_HOURS).fill(0);
    volunteers.forEach(vol => {
        if (!vol.shiftTime) return;
        try {
            const parts = vol.shiftTime.replace(/\u2013|\u2014/g, "-").split("-").map(s => s.trim());
            if (parts.length !== 2) return;
            const start = parseTime(parts[0]);
            let end = parseTime(parts[1]);
            if (!start || !end) return;
            if (end < start) end.setDate(end.getDate() + 1);

            let startIndex = Math.floor((start.getTime() - START_TIME.getTime()) / (1000 * 60 * 60));
            let endIndex = Math.ceil((end.getTime() - START_TIME.getTime()) / (1000 * 60 * 60));
            startIndex = Math.max(0, startIndex);
            endIndex = Math.min(TOTAL_HOURS, endIndex);
            for (let i = startIndex; i < endIndex; i++) coverage[i]++;
        } catch (e) { }
    });
    return coverage;
}

export function TimeSlotTab() {
    const [loading, setLoading] = useState(true);
    const [stations, setStations] = useState<StationRow[]>([]);

    useEffect(() => {
        async function load() {
            setLoading(true);
            const res = await getVolunteersClient();
            if (res.success && res.data) {
                const rowsMap = new Map<string, SheetVolunteer[]>();

                res.data.forEach(row => {
                    // Skip station headers
                    if (row.isHeader) return;

                    const stationName = row.childStation || "General Support";
                    if (!rowsMap.has(stationName)) rowsMap.set(stationName, []);
                    rowsMap.get(stationName)!.push(row);
                });

                const list: StationRow[] = Array.from(rowsMap.entries()).map(([name, vols]) => ({
                    name,
                    volunteers: vols,
                    coverage: getCoverageArray(vols)
                }));

                // Sort stations alphabetically
                list.sort((a, b) => a.name.localeCompare(b.name));

                setStations(list);
            }
            setLoading(false);
        }
        load();
    }, []);

    const renderTimeHeaders = () => {
        try {
            const headers = [];
            for (let i = 0; i < TOTAL_HOURS; i += 2) {
                const time = new Date(START_TIME.getTime() + i * 3600000);
                const label = time.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true }).replace(":00 ", "");
                headers.push(
                    <div key={i} className="absolute text-[9px] text-slate-500 font-bold -translate-x-1/2 flex flex-col items-center gap-1" style={{ left: `${(i / TOTAL_HOURS) * 100}%` }}>
                        <span className="font-mono text-slate-400">{label}</span>
                        <div className="w-[1px] h-3 bg-slate-800"></div>
                    </div>
                );
            }
            return headers;
        } catch (e) {
            console.error("Error rendering time headers:", e);
            return null;
        }
    };

    if (loading) return (
        <div className="h-64 flex flex-col items-center justify-center gap-5">
            <Loader2 className="h-8 w-8 animate-spin text-amber-500" />
            <p className="text-[10px] font-black text-amber-500/50 uppercase tracking-widest animate-pulse">Calculating Coverage Heatmap...</p>
        </div>
    );

    console.log("TimeSlotTab Rendering with", stations.length, "stations");

    return (
        <div className="border border-slate-800 rounded-xl bg-slate-900 shadow-xl overflow-hidden flex flex-col h-[calc(100vh-280px)] animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="p-6 border-b border-slate-800 bg-slate-900/50 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <div className="w-1.5 h-6 bg-amber-500 rounded-full shadow-[0_0_8px_#f59e0b]"></div>
                    <div>
                        <h3 className="font-black text-white tracking-tight text-xl uppercase leading-none">Ops Timeline</h3>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Live coverage heatmap across the race window</p>
                    </div>
                </div>
                <div className="flex gap-4 p-2 bg-slate-950 rounded-lg border border-slate-800 shadow-inner">
                    <div className="flex items-center gap-2 px-2">
                        <div className="w-2.5 h-2.5 rounded bg-red-900/50 border border-red-500/30"></div>
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">Gap (0)</span>
                    </div>
                    <div className="flex items-center gap-2 px-2">
                        <div className="w-2.5 h-2.5 rounded bg-amber-500/20 border border-amber-500/30"></div>
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">Under (1)</span>
                    </div>
                    <div className="flex items-center gap-2 px-2">
                        <div className="w-2.5 h-2.5 rounded bg-emerald-500 border border-emerald-500/50 shadow-[0_0_5px_#10b981]"></div>
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">Optimal (2+)</span>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-auto p-8 custom-scrollbar bg-slate-950/30">
                <div className="min-w-[1200px] mb-20">
                    {/* Time Scale Header */}
                    <div className="h-14 relative border-b border-slate-800/50 mb-8 w-full pl-[280px]">
                        {renderTimeHeaders()}
                    </div>

                    {/* Station Rows */}
                    <div className="space-y-2">
                        {stations.map((station, idx) => (
                            <div key={idx} className="flex items-center h-10 group hover:bg-slate-800/30 transition-colors rounded-lg px-2">
                                <div className="w-[280px] pr-8 text-right flex flex-col justify-center">
                                    <span className="text-xs font-bold text-slate-400 truncate uppercase tracking-tight group-hover:text-amber-400 transition-colors font-mono">
                                        {station.name}
                                    </span>
                                </div>
                                <div className="flex-1 h-6 bg-slate-900 rounded-md border border-slate-800 relative flex overflow-hidden p-[1px] shadow-inner">
                                    {station.coverage.map((count, hourIdx) => {
                                        let segmentBg = "bg-transparent";
                                        let segmentBorder = "border-transparent";

                                        if (count === 0) {
                                            segmentBg = "bg-red-900/10";
                                            segmentBorder = "border-red-900/20";
                                        } else if (count === 1) {
                                            segmentBg = "bg-amber-500/30";
                                            segmentBorder = "border-amber-500/40";
                                        } else {
                                            segmentBg = "bg-emerald-500";
                                            segmentBorder = "border-emerald-400/50";
                                        }

                                        return (
                                            <TooltipProvider key={hourIdx}>
                                                <Tooltip delayDuration={0}>
                                                    <TooltipTrigger asChild>
                                                        <div
                                                            className={cn(
                                                                "h-full cursor-help transition-all first:rounded-l-sm last:rounded-r-sm border-r-[1px] border-slate-950/20",
                                                                segmentBg,
                                                                segmentBorder,
                                                                count >= 2 ? "hover:brightness-125 shadow-[0_0_5px_rgba(245,158,11,0.2)]" : "hover:bg-slate-700"
                                                            )}
                                                            style={{ width: `${100 / TOTAL_HOURS}%` }}
                                                        />
                                                    </TooltipTrigger>
                                                    <TooltipContent side="top" className="bg-slate-900 border border-slate-700 text-white p-4 rounded-xl shadow-2xl">
                                                        <div className="space-y-3">
                                                            <div className="flex items-center justify-between gap-6">
                                                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Time Vector</span>
                                                                <span className="text-[10px] font-mono font-bold text-amber-500">H_{hourIdx}</span>
                                                            </div>
                                                            <div className="flex items-center gap-3">
                                                                <Users className="h-5 w-5 text-amber-500" />
                                                                <p className="text-xl font-black">{count} Personnel</p>
                                                            </div>
                                                            <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                                                                <div className={cn("h-full transition-all duration-500", count === 0 ? "w-0" : count === 1 ? "bg-amber-500/50 w-1/2" : "bg-amber-500 w-full")}></div>
                                                            </div>
                                                        </div>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="px-8 py-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b] animate-pulse"></div>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Live Data: Active</span>
                </div>
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <CalendarIcon className="h-3 w-3 text-amber-700" />
                        <span className="text-[10px] font-bold text-slate-500">FEB 01-02</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3 text-amber-700" />
                        <span className="text-[10px] font-bold text-slate-500 font-mono">32H WINDOW</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
