"use client";

import React, { useState, useMemo } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, AlertTriangle, ChevronRight, ChevronDown } from "lucide-react";
import { Volunteer, Assignment, detectConflicts } from "@/lib/tejas/data";
import { cn } from "@/lib/utils";

interface VolunteerGridProps {
    volunteers: Volunteer[];
    assignments: Assignment[];
    isDark?: boolean;
}

export function VolunteerGrid({ volunteers, assignments, isDark }: VolunteerGridProps) {
    const [search, setSearch] = useState("");
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const alerts = useMemo(() => detectConflicts(assignments), [assignments]);

    const filteredVolunteers = useMemo(() => {
        return volunteers.filter(v =>
            v.name.toLowerCase().includes(search.toLowerCase()) ||
            v.email.toLowerCase().includes(search.toLowerCase())
        );
    }, [volunteers, search]);

    const getVolunteerStatus = (vId: string) => {
        const vAlerts = alerts.filter(a => a.volunteerId === vId);
        if (vAlerts.length > 0) return "conflict";

        const vAssignments = assignments.filter(a => a.volunteerId === vId);
        if (vAssignments.length === 0) return "unassigned";

        return "assigned";
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                        placeholder="Search volunteers by name or email..."
                        className={cn(
                            "pl-10 h-10",
                            isDark ? "bg-white/5 border-white/10 text-white" : "border-[#8B4513]/20"
                        )}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className={cn(
                "rounded-lg border overflow-hidden",
                isDark ? "border-white/5 bg-transparent" : "border-[#8B4513]/10 bg-white"
            )}>
                <Table>
                    <TableHeader className={isDark ? "bg-white/5" : "bg-[#4A5D23]/5"}>
                        <TableRow className={isDark ? "border-white/5 hover:bg-transparent" : "border-[#8B4513]/10"}>
                            <TableHead className="w-[40px]"></TableHead>
                            <TableHead className={cn("font-black text-[10px] uppercase tracking-widest", isDark ? "text-slate-500" : "text-[#8B4513]")}>Name</TableHead>
                            <TableHead className={cn("font-black text-[10px] uppercase tracking-widest", isDark ? "text-slate-500" : "text-[#8B4513]")}>Station</TableHead>
                            <TableHead className={cn("font-black text-[10px] uppercase tracking-widest text-center", isDark ? "text-slate-500" : "text-[#8B4513]")}>Status</TableHead>
                            <TableHead className={cn("font-black text-[10px] uppercase tracking-widest", isDark ? "text-slate-500" : "text-[#8B4513]")}>Reliability</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredVolunteers.map((v) => {
                            const status = getVolunteerStatus(v.id);
                            const isExpanded = expandedId === v.id;
                            const vAssigns = assignments.filter(a => a.volunteerId === v.id);

                            return (
                                <React.Fragment key={v.id}>
                                    <TableRow
                                        className={cn(
                                            "cursor-pointer transition-colors border-white/5",
                                            isDark ? "hover:bg-white/5" : "hover:bg-[#FDFCF8]",
                                            status === "conflict" ? (isDark ? "bg-red-500/10" : "bg-red-50/50") : ""
                                        )}
                                        onClick={() => setExpandedId(isExpanded ? null : v.id)}
                                    >
                                        <TableCell>
                                            {isExpanded ?
                                                <ChevronDown className={cn("w-4 h-4", isDark ? "text-[#E67E22]" : "text-[#8B4513]")} /> :
                                                <ChevronRight className="w-4 h-4 text-slate-600" />
                                            }
                                        </TableCell>
                                        <TableCell className={cn("font-bold text-sm", isDark ? "text-white" : "text-[#2C1810]")}>
                                            <div className="flex items-center gap-2">
                                                {v.name}
                                                {status === "conflict" && (
                                                    <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                                                )}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-[11px] text-slate-500">
                                            {vAssigns.length > 0 ? vAssigns[0].station : "None"}
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <Badge
                                                variant={status === "conflict" ? "destructive" : "outline"}
                                                className={cn(
                                                    "text-[9px] font-black uppercase tracking-widest h-5",
                                                    status === "assigned" && (isDark ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : "bg-[#4A5D23] text-white"),
                                                    status === "unassigned" && (isDark ? "border-white/10 text-slate-500" : "")
                                                )}
                                            >
                                                {status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden w-12">
                                                    <div
                                                        className={cn(
                                                            "h-full rounded-full",
                                                            v.reliabilityScore > 90 ? "bg-emerald-500" : v.reliabilityScore > 75 ? "bg-[#E67E22]" : "bg-red-500"
                                                        )}
                                                        style={{ width: `${v.reliabilityScore}%` }}
                                                    />
                                                </div>
                                                <span className="text-[10px] font-bold text-slate-500">{v.reliabilityScore}%</span>
                                            </div>
                                        </TableCell>
                                    </TableRow>

                                    {isExpanded && (
                                        <TableRow className={cn("border-t-0", isDark ? "bg-white/[0.02]" : "bg-[#FDFCF8]/50")}>
                                            <TableCell colSpan={5} className="p-0">
                                                <div className={cn(
                                                    "p-6 border-l-2 ml-[19px] space-y-4",
                                                    isDark ? "border-white/10" : "border-[#4A5D23]"
                                                )}>
                                                    <div className="flex justify-between items-center">
                                                        <h4 className={cn("text-[10px] font-black uppercase tracking-widest", isDark ? "text-[#E67E22]" : "text-[#8B4513]")}>Assignment Details</h4>
                                                        <div className="flex gap-4">
                                                            <div className="text-[10px] font-bold text-slate-500">
                                                                Phone: <span className="text-white">{v.phone}</span>
                                                            </div>
                                                            <div className="text-[10px] font-bold text-slate-500">
                                                                Exp: <span className="text-white capitalize">{v.experience_level}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                        {vAssigns.map(a => (
                                                            <div key={a.id} className={cn(
                                                                "p-4 rounded-xl border relative overflow-hidden",
                                                                isDark ? "bg-white/5 border-white/5" : "bg-white border-[#8B4513]/10 shadow-sm"
                                                            )}>
                                                                <div className="flex justify-between items-start">
                                                                    <div>
                                                                        <p className={cn("font-bold text-xs", isDark ? "text-slate-200" : "text-[#4A5D23]")}>{a.station}</p>
                                                                        <p className="text-[10px] text-slate-500 mt-1">
                                                                            {a.startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {a.endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                                        </p>
                                                                    </div>
                                                                    <Badge className="bg-white/10 text-white text-[8px]">{a.role}</Badge>
                                                                </div>
                                                                {alerts.some(al => al.volunteerId === v.id && al.type === 'conflict') && (
                                                                    <div className="mt-3 bg-red-500/10 border border-red-500/20 p-2 rounded-lg">
                                                                        <p className="text-[9px] font-bold text-red-500 uppercase tracking-widest flex items-center gap-1">
                                                                            <AlertTriangle className="w-3 h-3" /> Conflict Detected
                                                                        </p>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
