"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Users, AlertCircle, CheckCircle2 } from "lucide-react";
import { Assignment, Volunteer } from "@/lib/tejas/data";
import { cn } from "@/lib/utils";

interface StationMonitorProps {
    assignments: Assignment[];
    volunteers: Volunteer[];
    isDark?: boolean;
}

export function StationMonitor({ assignments, volunteers, isDark }: StationMonitorProps) {
    // Group assignments by station
    const stationStats = React.useMemo(() => {
        const stats: Record<string, { total: number; filled: number; critical: boolean }> = {};

        // Simplified logic for MVP: 5 slots per station
        const SLOTS_PER_STATION = 5;

        assignments.forEach(a => {
            if (!stats[a.station]) {
                stats[a.station] = { total: SLOTS_PER_STATION, filled: 0, critical: false };
            }
            stats[a.station].filled += 1;
        });

        Object.keys(stats).forEach(s => {
            if (stats[s].filled < 3) stats[s].critical = true;
        });

        return stats;
    }, [assignments]);

    return (
        <div className={cn("grid gap-4", isDark ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2")}>
            {Object.entries(stationStats).map(([station, data]) => {
                const percentage = Math.round((data.filled / data.total) * 100);
                const isCritical = data.critical || percentage < 50;

                return (
                    <Card key={station} className={cn(
                        "relative overflow-hidden group transition-all rounded-2xl",
                        isDark ? "bg-white/5 border-white/5" : "border-[#8B4513]/10 shadow-sm hover:border-[#4A5D23]/30"
                    )}>
                        <CardHeader className="pb-2 space-y-0">
                            <div className="flex justify-between items-start">
                                <CardTitle className={cn(
                                    "text-[10px] font-black uppercase tracking-widest flex items-center gap-2",
                                    isDark ? "text-slate-400" : "text-[#8B4513]"
                                )}>
                                    <MapPin className={cn("w-3 h-3", isDark ? "text-[#E67E22]" : "text-[#4A5D23]")} />
                                    {station}
                                </CardTitle>
                                {percentage === 100 ? (
                                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                                ) : isCritical ? (
                                    <AlertCircle className="w-3 h-3 text-red-500 animate-pulse" />
                                ) : (
                                    <Users className="w-3 h-3 text-amber-500" />
                                )}
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between items-end">
                                <div className="space-y-1">
                                    <p className={cn("text-2xl font-black", isDark ? "text-white" : "text-[#2C1810]")}>
                                        {data.filled} <span className="text-xs font-normal text-slate-500">/ {data.total}</span>
                                    </p>
                                </div>
                                <Badge
                                    variant="outline"
                                    className={cn(
                                        "text-[9px] font-black uppercase h-5",
                                        percentage === 100 ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" :
                                            isCritical ? "bg-red-500/10 text-red-500 border-red-500/20" :
                                                "bg-amber-500/10 text-amber-500 border-amber-500/20"
                                    )}
                                >
                                    {percentage}%
                                </Badge>
                            </div>

                            <div className="space-y-1.5">
                                <Progress
                                    value={percentage}
                                    className={cn("h-1", isDark ? "bg-white/5" : "bg-[#4A5D23]/10")}
                                />
                                <div className="flex justify-between text-[8px] font-black text-slate-500 uppercase tracking-widest">
                                    <span>Coverage</span>
                                    <span className={isCritical ? "text-red-500" : ""}>
                                        {data.total - data.filled} LEFT
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}
