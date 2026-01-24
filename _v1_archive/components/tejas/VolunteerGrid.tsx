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
import { Search, AlertTriangle, ChevronRight, ChevronDown, ArrowUpDown } from "lucide-react";
import { Volunteer, Assignment, detectConflicts } from "@/lib/tejas/data";
import { cn } from "@/lib/utils";

interface VolunteerGridProps {
    volunteers: Volunteer[];
    assignments: Assignment[];
    isDark?: boolean;
}

type SortConfig = {
    key: 'name' | 'station' | 'status' | 'reliability';
    direction: 'asc' | 'desc';
};

export function VolunteerGrid({ volunteers, assignments, isDark }: VolunteerGridProps) {
    const [search, setSearch] = useState("");
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'name', direction: 'asc' });

    const alerts = useMemo(() => detectConflicts(assignments), [assignments]);

    const getVolunteerStatus = (v: Volunteer) => {
        // 1. Check for Critical Alerts (Red)
        const vAlerts = alerts.filter(a => a.volunteerId === v.id && a.severity === 'red');
        if (vAlerts.length > 0) return "No Show";

        // 2. Check explicitly set status (if available in Firestore data)
        const status = (v as any).status;
        if (status === 'checked-in') return "Checked In";

        // 3. Check assignment timing
        const assignment = assignments.find(a => a.volunteerId === v.id);
        if (assignment) {
            const now = new Date(); // Simulating "Now" as race time if needed, but using real time for demo
            // Logic: If shift starts in < 1 hour and not checked in -> Pending
            // If shift started > 15 mins ago and not checked in -> Late (No Show risk)

            // For Demo: Randomly assign statuses if not set, to show traffic lights
            // We'll use the ID hash to be deterministic
            const hash = v.id.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
            if (hash % 5 === 0) return "Checked In";
            if (hash % 7 === 0) return "No Show";
            return "Pending";
        }

        return "Pending";
    };

    const sortedVolunteers = useMemo(() => {
        let sorted = [...volunteers];

        // Filter first
        if (search) {
            sorted = sorted.filter(v =>
                v.name.toLowerCase().includes(search.toLowerCase()) ||
                v.email.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Sort
        sorted.sort((a, b) => {
            const aStatus = getVolunteerStatus(a);
            const bStatus = getVolunteerStatus(b);
            const aAssign = assignments.find(as => as.volunteerId === a.id);
            const bAssign = assignments.find(as => as.volunteerId === b.id);
            const aStation = aAssign?.station || "Z_Unassigned";
            const bStation = bAssign?.station || "Z_Unassigned";

            let comparison = 0;
            switch (sortConfig.key) {
                case 'name':
                    comparison = a.lastName.localeCompare(b.lastName);
                    break;
                case 'station':
                    comparison = aStation.localeCompare(bStation);
                    break;
                case 'status':
                    comparison = aStatus.localeCompare(bStatus);
                    break;
                case 'reliability':
                    comparison = b.reliabilityScore - a.reliabilityScore;
                    break;
            }
            return sortConfig.direction === 'asc' ? comparison : -comparison;
        });

        return sorted;
    }, [volunteers, assignments, search, sortConfig]);

    const toggleSort = (key: SortConfig['key']) => {
        setSortConfig(current => ({
            key,
            direction: current.key === key && current.direction === 'asc' ? 'desc' : 'asc'
        }));
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
                            <TableHead
                                className={cn("cursor-pointer hover:text-white transition-colors font-black text-[10px] uppercase tracking-widest", isDark ? "text-slate-500" : "text-[#8B4513]")}
                                onClick={() => toggleSort('name')}
                            >
                                <div className="flex items-center gap-1">Name <ArrowUpDown className="w-3 h-3" /></div>
                            </TableHead>
                            <TableHead
                                className={cn("cursor-pointer hover:text-white transition-colors font-black text-[10px] uppercase tracking-widest", isDark ? "text-slate-500" : "text-[#8B4513]")}
                                onClick={() => toggleSort('station')}
                            >
                                <div className="flex items-center gap-1">Station <ArrowUpDown className="w-3 h-3" /></div>
                            </TableHead>
                            <TableHead
                                className={cn("cursor-pointer hover:text-white transition-colors font-black text-[10px] uppercase tracking-widest text-center", isDark ? "text-slate-500" : "text-[#8B4513]")}
                                onClick={() => toggleSort('status')}
                            >
                                <div className="flex items-center gap-1 justify-center">Status <ArrowUpDown className="w-3 h-3" /></div>
                            </TableHead>
                            <TableHead
                                className={cn("cursor-pointer hover:text-white transition-colors font-black text-[10px] uppercase tracking-widest", isDark ? "text-slate-500" : "text-[#8B4513]")}
                                onClick={() => toggleSort('reliability')}
                            >
                                <div className="flex items-center gap-1">Reliability <ArrowUpDown className="w-3 h-3" /></div>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {sortedVolunteers.map((v) => {
                            const status = getVolunteerStatus(v);
                            const isExpanded = expandedId === v.id;
                            const vAssigns = assignments.filter(a => a.volunteerId === v.id);

                            return (
                                <React.Fragment key={v.id}>
                                    <TableRow
                                        className={cn(
                                            "cursor-pointer transition-colors border-white/5",
                                            isDark ? "hover:bg-white/5" : "hover:bg-[#FDFCF8]",
                                            status === "No Show" ? (isDark ? "bg-red-500/10" : "bg-red-50/50") : ""
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
                                                {status === "No Show" && (
                                                    <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                                                )}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-[11px] text-slate-500">
                                            {vAssigns.length > 0 ? vAssigns[0].station : "None"}
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <Badge
                                                variant={status === "No Show" ? "destructive" : "outline"}
                                                className={cn(
                                                    "text-[9px] font-black uppercase tracking-widest h-5",
                                                    status === "Checked In" && (isDark ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : "bg-[#4A5D23] text-white"),
                                                    status === "Pending" && (isDark ? "bg-amber-500/10 text-amber-500 border-amber-500/20" : "bg-amber-100 text-amber-800"),
                                                    status === "No Show" && "bg-red-500/10 text-red-500 border-red-500/20"
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
