"use client";

import React from "react";
import { Assignment, MOCK_STATIONS } from "@/lib/tejas/data";
import { cn } from "@/lib/utils";

interface ShiftTimelineProps {
    assignments: Assignment[];
    isDark?: boolean;
}

export function ShiftTimeline({ assignments, isDark }: ShiftTimelineProps) {
    // Timeline range: Friday 8am to Sunday 12pm
    const startLimit = new Date('2026-02-06T08:00:00');
    const endLimit = new Date('2026-02-08T12:00:00');
    const totalHours = (endLimit.getTime() - startLimit.getTime()) / (1000 * 60 * 60);

    const hours = Array.from({ length: Math.ceil(totalHours) }, (_, i) => {
        const d = new Date(startLimit);
        d.setHours(d.getHours() + i);
        return d;
    });

    const getPosition = (date: Date) => {
        const diff = (date.getTime() - startLimit.getTime()) / (1000 * 60 * 60);
        return (diff / totalHours) * 100;
    };

    return (
        <div className={cn(
            "rounded-2xl border overflow-hidden transition-all",
            isDark ? "bg-white/5 border-white/5 shadow-2xl" : "bg-white border-[#8B4513]/10 shadow-sm"
        )}>
            <div className="overflow-x-auto">
                <div className="min-w-[1200px] relative pb-8">
                    {/* Header Hooks */}
                    <div className={cn(
                        "flex border-b sticky top-0 z-10 backdrop-blur-md",
                        isDark ? "bg-[#0B1120]/80 border-white/5" : "bg-[#FDFCF8] border-[#8B4513]/10"
                    )}>
                        <div className={cn(
                            "w-[180px] shrink-0 p-4 font-black text-[10px] uppercase tracking-widest border-r",
                            isDark ? "text-slate-500 border-white/5" : "text-[#8B4513] border-[#8B4513]/10"
                        )}>
                            Station
                        </div>
                        <div className="flex-1 flex overflow-hidden">
                            {hours.map((h, i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        "w-[60px] shrink-0 text-[10px] font-bold text-center py-4 border-r",
                                        isDark ? "border-white/[0.03] text-slate-600" : "border-[#8B4513]/5 text-muted-foreground"
                                    )}
                                >
                                    {h.getHours() === 0 ? (
                                        <span className={cn("font-black", isDark ? "text-[#E67E22]" : "text-[#4A5D23]")}>{h.toLocaleDateString(undefined, { weekday: 'short' })}</span>
                                    ) : (
                                        h.toLocaleTimeString([], { hour: '2-digit' }).split(' ')[0]
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Rows */}
                    <div className="relative">
                        {/* Hour Lines */}
                        <div className="absolute inset-0 flex ml-[180px] pointer-events-none">
                            {hours.map((_, i) => (
                                <div key={i} className={cn("w-[60px] shrink-0 border-r h-full", isDark ? "border-white/[0.02]" : "border-[#8B4513]/5")} />
                            ))}
                        </div>

                        {MOCK_STATIONS.map((station) => {
                            const stationAssignments = assignments.filter(s => s.station === station);

                            return (
                                <div key={station} className={cn(
                                    "flex border-b min-h-[60px] relative group transition-colors",
                                    isDark ? "border-white/[0.03] hover:bg-white/[0.02]" : "border-[#8B4513]/5 hover:bg-[#FDFCF8]"
                                )}>
                                    <div className={cn(
                                        "w-[180px] shrink-0 p-4 text-[11px] font-bold border-r flex items-center shadow-inner",
                                        isDark ? "text-white border-white/5 bg-white/[0.01]" : "text-[#2C1810] border-[#8B4513]/10 bg-[#FDFCF8]/50"
                                    )}>
                                        {station}
                                    </div>
                                    <div className="flex-1 relative py-3 h-[60px]">
                                        {stationAssignments.map((s) => {
                                            const left = getPosition(s.startTime);
                                            const width = getPosition(s.endTime) - left;
                                            // Simplified status logic for individual assignments
                                            const isConfirmed = s.status === 'confirmed' || s.status === 'active';

                                            return (
                                                <div
                                                    key={s.id}
                                                    title={`${station}: ${s.role} - ${s.status}`}
                                                    className={cn(
                                                        "absolute h-8 rounded-lg shadow-lg border flex items-center px-2 transition-all hover:scale-105 active:scale-95 z-20",
                                                        isConfirmed ? (isDark ? "bg-[#4A5D23]/90 text-white border-[#4A5D23]/50" : "bg-[#4A5D23]/90 text-white border-[#4A5D23]") :
                                                            (isDark ? "bg-[#E67E22]/20 text-[#E67E22] border-[#E67E22]/30" : "bg-amber-50 text-amber-700 border-amber-200")
                                                    )}
                                                    style={{ left: `${left}%`, width: `${width}%` }}
                                                >
                                                    <span className="text-[10px] font-black truncate">
                                                        {s.role}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
