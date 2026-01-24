'use client';

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { SheetVolunteer } from "@/lib/tejas/api";
import { User, Clock, CheckCircle2, MoreHorizontal, UserPlus } from "lucide-react";
import { RecruitModal } from "@/components/tejas/RecruitModal";
import { Button } from "@/components/ui/button";

interface StationCardProps {
    title: string;
    volunteers: SheetVolunteer[];
    totalSlots?: number;
    allVolunteers: SheetVolunteer[]; // Added for global context lookups in recruiter
}

// Helper for timeslot color coding
const getSlotColor = (timeStr: string) => {
    if (!timeStr) return "bg-slate-800 text-slate-400";
    const s = timeStr.toUpperCase();

    // Pattern Matching
    const isSat = s.includes("SAT");
    const isSun = s.includes("SUN");

    // Extract first hour
    const hourMatch = s.match(/(\d{1,2}):/);
    const pm = s.includes("PM");
    const am = s.includes("AM");

    let hour = hourMatch ? parseInt(hourMatch[1]) : 12;
    if (pm && hour !== 12) hour += 12;
    if (am && hour === 12) hour = 0;

    // Morning: 04:00 - 10:59
    if (hour >= 4 && hour < 11) return "bg-sky-500/10 text-sky-400 border-sky-500/20";
    // Mid-Day / Afternoon: 11:00 - 16:59
    if (hour >= 11 && hour < 17) return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    // Evening: 17:00 - 21:59
    if (hour >= 17 && hour < 22) return "bg-amber-500/10 text-amber-400 border-amber-500/20";
    // Overnight: 22:00 - 03:59
    return "bg-violet-500/10 text-violet-400 border-violet-500/20";
};

export function StationCard({ title, volunteers, totalSlots, allVolunteers }: StationCardProps) {
    const filledCount = volunteers.filter(v =>
        v.firstName && v.firstName !== "OPEN" && v.firstName !== "VACANT" && v.id !== "VACANT"
    ).length;
    const total = totalSlots || 5;

    const [recruitShift, setRecruitShift] = useState<Partial<SheetVolunteer> | null>(null);

    // Traffic Light Logic - Dark Mode
    let statusBg = "bg-slate-900";
    let statusBorder = "border-slate-800";
    let accentColor = "bg-slate-700";
    let statusText = "PENDING";
    let statusTextColor = "text-slate-500";
    let ringColor = "ring-slate-800";

    if (filledCount >= total && filledCount > 0) {
        statusBg = "bg-emerald-900/10";
        statusBorder = "border-emerald-500/20";
        accentColor = "bg-emerald-500";
        statusText = "SECURED";
        statusTextColor = "text-emerald-500";
        ringColor = "ring-emerald-500/30";
    } else if (filledCount > 0) {
        statusBg = "bg-amber-900/10";
        statusBorder = "border-amber-500/20";
        accentColor = "bg-amber-500";
        statusText = "LIMITED";
        statusTextColor = "text-amber-500";
        ringColor = "ring-amber-500/30";
    } else {
        statusBg = "bg-red-900/10";
        statusBorder = "border-red-500/20";
        accentColor = "bg-red-500";
        statusText = "CRITICAL";
        statusTextColor = "text-red-500";
        ringColor = "ring-red-500/30";
    }

    const handleInvite = (vid: string) => {
        console.log(`Sending invite to volunteer ${vid} for ${recruitShift?.childStation} shift.`);
        // Integrate actual invite logic or toast notification here
        setRecruitShift(null); // Close modal
    };

    return (
        <>
            <Card className={cn(
                "h-full flex flex-col transition-all duration-300 border-none shadow-lg ring-1 hover:shadow-2xl hover:scale-[1.02] rounded-[1.5rem] overflow-hidden group relative",
                statusBg,
                ringColor
            )}>
                <CardHeader className={cn(
                    "py-5 px-6 border-b flex flex-row items-center justify-between space-y-0",
                    statusBorder
                )}>
                    <div className="space-y-1">
                        <CardTitle className={cn("text-lg font-black uppercase tracking-tighter leading-tight", statusTextColor)}>
                            {title}
                        </CardTitle>
                        <div className="flex items-center gap-2">
                            <div className={cn("w-2 h-2 rounded-full animate-pulse shadow-[0_0_8px_currentColor]", accentColor)}></div>
                            <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">{statusText}</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-1">Coverage</p>
                        <Badge variant="outline" className={cn("text-[10px] font-black font-mono border-slate-700 bg-slate-950", statusTextColor)}>
                            {filledCount}<span className="text-slate-600 mx-1">/</span>{total}
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent className="p-0 flex-1 overflow-y-auto custom-scrollbar bg-slate-950/20">
                    {volunteers.length === 0 ? (
                        <div className="p-10 text-center space-y-4">
                            <div className="h-10 w-10 bg-slate-900 rounded-xl flex items-center justify-center mx-auto shadow-inner border border-slate-800 text-slate-700">
                                <User className="h-5 w-5" />
                            </div>
                            <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.2em] italic">
                                Zero Assignments
                            </p>
                        </div>
                    ) : (
                        <ul className="divide-y divide-slate-800/50">
                            {volunteers.map((vol) => {
                                const isCheckedIn = vol.status?.toLowerCase().includes('check');
                                const isVacant = vol.firstName === "OPEN" || vol.firstName === "VACANT" || vol.id === "VACANT";

                                return (
                                    <li key={vol.rowNumber + "-" + vol.slotIndex} className={cn(
                                        "p-4 hover:bg-slate-800/50 transition-all flex items-center gap-3 group/item",
                                        isCheckedIn ? "bg-emerald-500/5" : "bg-transparent",
                                        isVacant ? "bg-red-500/5" : ""
                                    )}>
                                        <div className={cn(
                                            "h-10 w-10 rounded-lg border flex items-center justify-center transition-all shadow-sm",
                                            isCheckedIn ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-500" :
                                                isVacant ? "bg-red-500/10 border-red-500/20 text-red-500 border-dashed" :
                                                    "bg-slate-900 border-slate-800 text-slate-600"
                                        )}>
                                            {isVacant ? <UserPlus className="h-5 w-5" /> : <User className="h-5 w-5" />}
                                        </div>
                                        <div className="flex-1 overflow-hidden">
                                            <div className="flex justify-between items-center">
                                                <p className={cn(
                                                    "font-bold text-sm truncate uppercase tracking-tight transition-colors",
                                                    isVacant ? "text-red-400" : "text-slate-200 group-hover/item:text-white"
                                                )}>
                                                    {isVacant ? "OPEN SLOT" : `${vol.firstName} ${vol.lastName}`}
                                                </p>
                                                {isVacant ? (
                                                    <Button
                                                        size="sm"
                                                        variant="ghost"
                                                        className="h-6 px-2 text-[10px] font-black uppercase tracking-widest text-red-500 hover:text-white hover:bg-red-500"
                                                        onClick={() => setRecruitShift(vol)}
                                                    >
                                                        Recruit
                                                    </Button>
                                                ) : (
                                                    <button className="text-slate-600 hover:text-emerald-500 p-1 opacity-0 group-hover/item:opacity-100 transition-opacity">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </button>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-3 mt-1 opacity-90">
                                                <div className={cn(
                                                    "flex items-center gap-1.5 px-2 py-0.5 rounded border text-[10px] font-black font-mono tracking-tight shadow-sm transition-colors",
                                                    getSlotColor(vol.shiftTime)
                                                )}>
                                                    <Clock className="h-3 w-3" />
                                                    {vol.shiftTime}
                                                </div>
                                                {isCheckedIn && (
                                                    <div className="flex items-center gap-1 text-[9px] font-black text-emerald-500 uppercase tracking-widest">
                                                        <CheckCircle2 className="h-3 w-3" />
                                                        Active
                                                    </div>
                                                )}
                                                {isVacant && (
                                                    <div className="text-[9px] font-black text-red-500 uppercase tracking-widest animate-pulse">
                                                        Needs Attention
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </CardContent>

                {/* Action Bar */}
                <div className="p-3 border-t border-slate-800 bg-slate-900/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-0 left-0 right-0">
                    <button className="w-full h-8 bg-slate-950 border border-slate-700 rounded-lg text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all">
                        Station Config
                    </button>
                </div>
            </Card>

            <RecruitModal
                isOpen={!!recruitShift}
                onClose={() => setRecruitShift(null)}
                targetShift={recruitShift || {}}
                allVolunteers={allVolunteers}
                onInvite={handleInvite}
            />
        </>
    );
}


