'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { getVolunteersClient, SheetVolunteer } from "@/lib/tejas/api";
import { Loader2, Search, User, Mail, Phone, Clock, MapPin, AlertCircle, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

import { analyzeVolunteerLoad } from "@/lib/tejas/race-logic";

interface VolunteerProfile {
    id: string;
    name: string;
    email: string;
    phone: string;
    shifts: SheetVolunteer[];
    hasConflict: boolean;
    isFatigued: boolean;
    hours: number;
}

export function VolunteerTab() {
    const [loading, setLoading] = useState(true);
    const [profiles, setProfiles] = useState<VolunteerProfile[]>([]);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function load() {
            setLoading(true);
            const res = await getVolunteersClient();
            if (res.success && res.data) {
                const profileMap = new Map<string, VolunteerProfile>();

                res.data.forEach(row => {
                    if (row.isHeader) return;
                    const firstName = row.firstName || "Assigned";
                    const lastName = row.lastName || "Personnel";
                    const name = `${firstName} ${lastName}`.trim();
                    if (!name || name === "Anonymous Personnel") return;

                    const id = row.volunteerId || row.email || `${name}-${row.rowNumber}`;
                    if (!profileMap.has(id)) {
                        profileMap.set(id, {
                            id,
                            name: name,
                            email: row.email,
                            phone: row.phone,
                            shifts: [],
                            hasConflict: false,
                            isFatigued: false,
                            hours: 0
                        });
                    }
                    const profile = profileMap.get(id)!;
                    profile.shifts.push({ ...row, firstName, lastName, role: row.role || row.childStation || "Volunteer" });
                });

                const list = Array.from(profileMap.values()).map(p => {
                    const analysis = analyzeVolunteerLoad(p.shifts);
                    return {
                        ...p,
                        hasConflict: analysis.status === 'CRITICAL' || analysis.flags.includes('CRITICAL_OVERLAP'),
                        isFatigued: analysis.flags.includes('HIGH_FATIGUE'),
                        hours: Math.round(analysis.hours * 10) / 10
                    };
                });

                list.sort((a, b) => {
                    if (a.hasConflict && !b.hasConflict) return -1;
                    if (!a.hasConflict && b.hasConflict) return 1;
                    return a.name.localeCompare(b.name);
                });
                setProfiles(list);
            }
            setLoading(false);
        }
        load();
    }, []);

    const filtered = useMemo(() => {
        const q = search.toLowerCase();
        return profiles.filter(p =>
            p.name.toLowerCase().includes(q) ||
            (p.email && p.email.toLowerCase().includes(q)) ||
            p.shifts.some(s => (s.role || '').toLowerCase().includes(q))
        );
    }, [profiles, search]);

    const selectedProfile = useMemo(() => profiles.find(p => p.id === selectedId), [profiles, selectedId]);

    if (loading) return (
        <div className="h-64 flex flex-col items-center justify-center gap-5">
            <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
            <p className="text-[10px] font-black text-blue-500/50 uppercase tracking-widest animate-pulse">Syncing Personnel Manifest...</p>
        </div>
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-280px)]">
            <div className="md:col-span-1 border border-slate-800 rounded-xl overflow-hidden flex flex-col bg-slate-900 shadow-xl">
                <div className="p-6 border-b border-slate-800 space-y-4 bg-slate-900/50">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-1 h-5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]"></div>
                            <h3 className="font-bold text-slate-100 tracking-tight text-sm uppercase">Active Volunteers</h3>
                        </div>
                        <Badge variant="outline" className="font-mono text-[10px] bg-slate-800 border-slate-700 text-slate-400">
                            {profiles.length} TOTAL
                        </Badge>
                    </div>
                    <div className="relative group">
                        <Search className="absolute left-3 top-3 h-4.5 w-4.5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                        <Input
                            placeholder="Find volunteer..."
                            className="pl-10 bg-slate-950 border-slate-800 text-slate-200 placeholder:text-slate-600 focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 rounded-lg h-10 text-sm"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                <ScrollArea className="flex-1 bg-slate-950/30">
                    <div className="divide-y divide-slate-800/50">
                        {filtered.map((profile) => (
                            <button
                                key={profile.id}
                                onClick={() => setSelectedId(profile.id)}
                                className={cn(
                                    "w-full p-5 text-left transition-all hover:bg-slate-800/40 relative group",
                                    selectedId === profile.id ? "bg-slate-800/60" : ""
                                )}
                            >
                                <div className="flex items-center justify-between mb-1.5">
                                    <span className={cn(
                                        "text-xs font-bold transition-colors uppercase tracking-tight",
                                        selectedId === profile.id ? "text-blue-400" : "text-slate-200 group-hover:text-blue-300"
                                    )}>
                                        {profile.name}
                                    </span>
                                    <div className="flex gap-2">
                                        {profile.isFatigued && (
                                            <AlertCircle className="h-3 w-3 text-amber-500" />
                                        )}
                                        {profile.hasConflict && (
                                            <AlertCircle className="h-3 w-3 text-red-500" />
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                    <span>{profile.shifts.length} {profile.shifts.length === 1 ? 'SHIFT' : 'SHIFTS'}</span>
                                    {selectedId === profile.id && <ChevronRight className="h-3 w-3 text-blue-500" />}
                                </div>
                                {selectedId === profile.id && (
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 shadow-[0_0_8px_#3b82f6]"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </ScrollArea>
            </div>

            <div className="md:col-span-2 border border-slate-800 rounded-xl bg-slate-900 shadow-xl overflow-hidden flex flex-col relative">
                {selectedProfile ? (
                    <>
                        <div className="p-8 border-b border-slate-800 bg-slate-950/50">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-14 w-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shadow-inner">
                                            <User className="h-7 w-7 text-blue-500" />
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-black text-white tracking-tighter uppercase leading-none">{selectedProfile.name}</h2>
                                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-2 flex items-center gap-2">
                                                ID_HASH: <span className="font-mono text-slate-400">{selectedProfile.id.slice(0, 8)}...</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {selectedProfile.isFatigued && (
                                        <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/20 font-black text-[10px] uppercase tracking-widest">
                                            High Fatigue: {selectedProfile.hours}h On Duty
                                        </Badge>
                                    )}
                                    {selectedProfile.email && (
                                        <Badge variant="outline" className="bg-slate-950 border-slate-800 text-slate-400 p-2 px-4 rounded-xl flex items-center gap-2 font-mono text-xs hover:text-blue-400 transition-colors cursor-pointer">
                                            <Mail className="h-3 w-3" />
                                            {selectedProfile.email}
                                        </Badge>
                                    )}
                                    {selectedProfile.phone && (
                                        <Badge variant="outline" className="bg-slate-950 border-slate-800 text-slate-400 p-2 px-4 rounded-xl flex items-center gap-2 font-mono text-xs hover:text-blue-400 transition-colors cursor-pointer">
                                            <Phone className="h-3 w-3" />
                                            {selectedProfile.phone}
                                        </Badge>
                                    )}
                                </div>
                            </div>
                        </div>

                        <ScrollArea className="flex-1 p-8 bg-slate-950/20">
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <Clock className="h-4 w-4 text-blue-500" />
                                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Duty Schedule • {selectedProfile.hours} Hours Total</h4>
                                </div>

                                {selectedProfile.hasConflict && (
                                    <Card className="bg-red-500/5 border-red-500/20 mb-8 rounded-2xl overflow-hidden">
                                        <CardContent className="p-4 flex items-center gap-4">
                                            <div className="p-2 bg-red-500/20 rounded-lg">
                                                <AlertCircle className="h-5 w-5 text-red-500" />
                                            </div>
                                            <div>
                                                <p className="text-red-500 font-black text-xs uppercase tracking-widest">Schedule Conflict Detected</p>
                                                <p className="text-red-500/70 text-[10px] font-bold uppercase tracking-tight">Overlap found in shift time vectors</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )}

                                <div className="space-y-4">
                                    {selectedProfile.shifts.map((shift, idx) => (
                                        <Card key={idx} className="bg-slate-900 border-slate-800 shadow-lg hover:border-slate-700 transition-all rounded-2xl overflow-hidden group">
                                            <CardContent className="p-6">
                                                <div className="flex justify-between items-start gap-6">
                                                    <div className="space-y-4 flex-1">
                                                        <div className="flex items-center gap-3">
                                                            <MapPin className="h-4 w-4 text-blue-500/50" />
                                                            <span className="text-sm font-black text-white uppercase tracking-tight group-hover:text-blue-400 transition-colors">
                                                                {shift.childStation || "Unassigned Sector"}
                                                            </span>
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-8 pl-7">
                                                            <div>
                                                                <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1.5">Role Vector</p>
                                                                <p className="text-xs font-bold text-slate-300 uppercase">{shift.role}</p>
                                                            </div>
                                                            <div>
                                                                <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1.5">Temporal Assignment</p>
                                                                <p className="text-xs font-mono font-bold text-blue-400">{shift.shiftTime}</p>
                                                            </div>
                                                        </div>
                                                        {shift.notes && (
                                                            <div className="mt-4 p-4 bg-slate-950 rounded-xl border border-slate-800/50">
                                                                <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-2">Comms / Notes</p>
                                                                <p className="text-xs text-slate-400 font-medium italic">{shift.notes}</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 font-black text-[9px] uppercase tracking-tighter py-1 px-3">
                                                        ROW_{shift.rowNumber}
                                                    </Badge>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </ScrollArea>
                    </>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center p-12 text-center space-y-6">
                        <div className="h-24 w-24 bg-slate-950 rounded-[2.5rem] border border-slate-800 flex items-center justify-center shadow-inner group">
                            <User className="h-10 w-10 text-slate-800 group-hover:text-slate-600 transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-black text-slate-500 uppercase tracking-widest">Neutral State</h3>
                            <p className="text-slate-600 font-bold text-xs uppercase tracking-[0.15em] max-w-xs leading-relaxed">Select a terminal from the manifest to view active duty details</p>
                        </div>
                    </div>
                )}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/5 blur-[120px] pointer-events-none -z-10"></div>
            </div>
        </div>
    );
}
