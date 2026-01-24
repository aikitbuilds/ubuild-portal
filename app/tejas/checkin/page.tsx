'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { getVolunteersClient, updateAssignmentClient, SheetVolunteer } from "@/lib/tejas/api";
import { Loader2, CheckCircle2, ChevronRight, User, Calendar, FileText, AlertTriangle, Search, Info, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import { getHierarchy } from "@/lib/tejas/hierarchy";

// Step Enum
enum Step {
    LOADING = 0,
    IDENTITY = 1,
    DETAILS = 2,
    SUCCESS = 3
}

/**
 * Helper to check if a string looks like a station name (from our analysis script findings)
 */
// Helper removed: isStationName (unused)
// Helper removed: parseTime (unused)
// Helper removed: hasOverlap (unused)

const getSlotColor = (timeStr: string) => {
    if (!timeStr) return "text-slate-500";
    const s = timeStr.toUpperCase();

    // Day detection
    let dayColor = "text-slate-400";
    if (s.includes("FRI")) dayColor = "text-blue-400";
    if (s.includes("SAT")) dayColor = "text-amber-400";
    if (s.includes("SUN")) dayColor = "text-emerald-400";

    const hourMatch = s.match(/(\d{1,2}):/);
    if (!hourMatch) return dayColor;

    const pm = s.includes("PM");
    const am = s.includes("AM");

    let hour = parseInt(hourMatch[1]);
    if (pm && hour !== 12) hour += 12;
    if (am && hour === 12) hour = 0;

    // Overnight shifts (late night/early morning) get a specific vibe
    if (hour >= 22 || hour < 4) return "text-violet-400";

    return dayColor;
};

export default function MobileCheckInPage() {
    const [step, setStep] = useState<Step>(Step.LOADING);
    const [volunteers, setVolunteers] = useState<SheetVolunteer[]>([]);
    const [search, setSearch] = useState("");
    const [selectedVol, setSelectedVol] = useState<SheetVolunteer | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    // Load Data
    useEffect(() => {
        async function load() {
            const res = await getVolunteersClient();
            if (res.success && res.data) {
                // Filter out vacant slots for the check-in UI
                const validVolunteers = res.data.filter(v =>
                    v.firstName &&
                    v.firstName !== "OPEN" &&
                    v.firstName !== "VACANT" &&
                    v.role !== "STATION_HEADER"
                );
                setVolunteers(validVolunteers);
                setStep(Step.IDENTITY);
            } else {
                setError("Failed to load roster. Check connection.");
            }
        }
        load();
    }, []);

    // Filter Logic: Group by Name to detect conflicts
    const results = useMemo(() => {
        if (search.length < 2) return [];
        const q = search.toLowerCase();

        // Group by full name
        const groups = new Map<string, SheetVolunteer[]>();
        volunteers.forEach(v => {
            const first = (v.firstName || "").toLowerCase();
            const last = (v.lastName || "").toLowerCase();
            const email = (v.email || "").toLowerCase();

            // Split into words to support searching by last name (e.g., "Tran" matches "Cong Michael Tran")
            const words = [...first.split(/\s+/), ...last.split(/\s+/)].filter(Boolean);
            const matchesWord = words.some(word => word.startsWith(q));
            const matchesEmail = email.startsWith(q) || email.includes(` ${q}`);

            if (matchesWord || matchesEmail) {
                const displayName = `${v.firstName || "Anonymous"} ${v.lastName || "Personnel"}`.trim();
                if (!groups.has(displayName)) groups.set(displayName, []);
                groups.get(displayName)!.push(v);
            }
        });

        return Array.from(groups.entries()).map(([name, shifts]) => {
            // Detailed overlap check within the group
            const conflictingIds = new Set<string>(); // Use composite ID row-slot

            interface TimeSlot {
                id: string;
                start: Date;
                end: Date;
            }

            const times: TimeSlot[] = shifts
                .map(s => {
                    if (!s.startTime || !s.endTime) return null;
                    return {
                        id: `${s.rowNumber}-${s.slotIndex}`,
                        start: new Date(s.startTime),
                        end: new Date(s.endTime)
                    };
                })
                .filter((t): t is TimeSlot => t !== null);

            for (let i = 0; i < times.length; i++) {
                for (let j = i + 1; j < times.length; j++) {
                    const ti = times[i];
                    const tj = times[j];
                    if (ti.start < tj.end && tj.start < ti.end) {
                        conflictingIds.add(ti.id);
                        conflictingIds.add(tj.id);
                    }
                }
            }

            return {
                name,
                shifts: shifts.map(s => ({
                    ...s,
                    isConflicting: conflictingIds.has(`${s.rowNumber}-${s.slotIndex}`)
                })),
                hasConflict: conflictingIds.size > 0
            };
        }).slice(0, 10);
    }, [volunteers, search]);

    const handleSelect = (vol: SheetVolunteer) => {
        setSelectedVol(vol);
        setStep(Step.DETAILS);
    };

    const handleStatusUpdate = async (status: string) => {
        if (!selectedVol) return;
        setIsSubmitting(true);
        // Pass slotIndex to ensure we update the correct cell
        const res = await updateAssignmentClient(selectedVol.rowNumber, status, selectedVol.slotIndex);
        if (res.success) {
            setStep(Step.SUCCESS);
        } else {
            setError("Update failed. Try again.");
        }
        setIsSubmitting(false);
    };

    if (step === Step.LOADING) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6">
                <Loader2 className="h-10 w-10 animate-spin text-emerald-500 mb-4" />
                <h2 className="text-lg font-bold text-white tracking-tight uppercase">Syncing Roster...</h2>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans pb-12">
            {/* Minimal Header */}
            <header className="bg-slate-900 border-b border-slate-800 p-4 sticky top-0 z-50">
                <div className="flex items-center justify-between max-w-md mx-auto">
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/f5fece5c-753d-44b5-8371-44d5d5c8223c/TTLogo+%28Full+Color+.9%29_Transparent.png?format=1500w"
                        alt="Tejas Trails"
                        className="h-8 w-auto brightness-0 invert"
                    />
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"></div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">OP_UNIT_LIVE</span>
                    </div>
                </div>
            </header>

            <main className="max-w-md mx-auto p-5 pt-8 space-y-8">

                {/* STEP 1: IDENTITY */}
                {step === Step.IDENTITY && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black text-white tracking-tight">WHO ARE YOU?</h2>
                            <p className="text-slate-400 font-medium">Search for your name to begin check-in.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="relative group">
                                <Search className="absolute left-4 top-4 h-5 w-5 text-slate-500 group-focus-within:text-emerald-500 transition-colors" />
                                <Input
                                    className="pl-12 h-14 text-lg bg-slate-900 border-slate-800 rounded-xl shadow-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-white placeholder:text-slate-600"
                                    placeholder="Type your name..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    autoFocus
                                />
                            </div>

                            <div className="space-y-3">
                                {results.map(group => (
                                    <div key={group.name} className="space-y-2">
                                        <div className="flex items-center justify-between px-2 mb-4 mt-2">
                                            <span className="text-2xl font-black text-white uppercase tracking-tighter shadow-black drop-shadow-lg">{group.name}</span>
                                            {group.hasConflict && (
                                                <Badge className="bg-red-900/50 text-red-500 border border-red-500/50 text-[9px] font-black uppercase shadow-[0_0_10px_rgba(239,68,68,0.2)]">Conflict Detected</Badge>
                                            )}
                                        </div>
                                        <p className="px-2 text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-2">Volunteer Shifts</p>
                                        {group.shifts.map(shift => (
                                            <button
                                                key={`${shift.rowNumber}-${shift.slotIndex}`} // KEY UPDATED
                                                onClick={() => handleSelect(shift)}
                                                className={cn(
                                                    "w-full bg-slate-900 p-4 rounded-xl border border-slate-800 shadow-sm flex items-center gap-4 transition-all active:scale-[0.98]",
                                                    (shift as any).isConflicting ? "border-red-500/50 bg-red-950/20" : "hover:border-emerald-500/50 hover:bg-slate-800"
                                                )}
                                            >
                                                <div className="h-10 w-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                                                    <span className="text-xs font-black text-slate-500">
                                                        {shift.firstName ? shift.firstName[0].toUpperCase() : "V"}
                                                        {shift.lastName ? shift.lastName[0].toUpperCase() : ""}
                                                    </span>
                                                </div>
                                                <div className="flex-1 text-left min-w-0">
                                                    <div className="flex justify-between items-start gap-2">
                                                        <div className="min-w-0">
                                                            <span className="font-black text-white text-base leading-tight uppercase truncate block">{shift.role}</span>
                                                            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">{shift.parentCategory} &rsaquo; {shift.childStation}</span>
                                                        </div>
                                                        <ChevronRight className="h-4 w-4 text-slate-600 shrink-0 mt-0.5" />
                                                    </div>
                                                    <div className="flex items-center gap-3 mt-1 opacity-80">
                                                        <div className={cn("flex items-center gap-1.5 text-[10px] font-black uppercase font-mono tracking-tight", getSlotColor(shift.shiftTime))}>
                                                            <Clock className="h-3 w-3" />
                                                            {shift.shiftTime}
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                ))}
                                {search.length > 2 && results.length === 0 && (
                                    <div className="text-center p-12 bg-slate-900/50 border-2 border-dashed border-slate-800 rounded-xl space-y-3">
                                        <Info className="h-8 w-8 text-slate-600 mx-auto" />
                                        <p className="text-sm font-bold text-slate-500 uppercase">No Roster Match</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* STEP 2: DETAILS & CONFIRM */}
                {step === Step.DETAILS && selectedVol && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                        <button
                            onClick={() => setStep(Step.IDENTITY)}
                            className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-emerald-500 flex items-center gap-1 transition-colors"
                        >
                            &larr; Back to Search
                        </button>

                        <div className="space-y-2">
                            <h2 className="text-3xl font-black text-white tracking-tight">CONFIRM SESSION</h2>
                            <p className="text-slate-400 font-medium">Review your assignment for {selectedVol.firstName}.</p>
                        </div>

                        {/* CLEAR READABLE CARD - FIXED UI */}
                        <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-8 space-y-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-[0.03]">
                                <FileText className="h-32 w-32 text-white" />
                            </div>

                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                            <div className="space-y-6 relative z-10">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500">Assigned Post</label>
                                    <p className="text-3xl font-black text-white leading-[1.1] uppercase shadow-emerald-500/10 dropshadow-lg">{selectedVol.role}</p>
                                </div>

                                <div className="space-y-4 pt-4 border-t border-slate-800">
                                    <div className="flex gap-4 items-center">
                                        <div className="h-12 w-12 bg-slate-950 rounded-xl flex items-center justify-center text-emerald-500 border border-slate-800 shadow-inner">
                                            <Calendar className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <label className="text-[9px] font-black uppercase tracking-widest text-slate-500">Shift Window</label>
                                            <p className={cn("text-base font-black font-mono uppercase", getSlotColor(selectedVol.shiftTime))}>{selectedVol.shiftTime}</p>
                                        </div>
                                    </div>

                                    {selectedVol.notes && (
                                        <div className="bg-slate-950/50 border border-slate-800 p-4 rounded-xl flex gap-3">
                                            <Info className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                                            <p className="text-sm text-slate-300 font-medium italic">"{selectedVol.notes}"</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Link href="#" className="w-full h-14 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl flex items-center justify-center gap-3 px-6 transition-all group border border-slate-800">
                                <FileText className="h-5 w-5 text-slate-600 group-hover:text-slate-400" />
                                <span className="text-xs font-black uppercase tracking-widest">View Station Docs</span>
                            </Link>

                            <div className="grid grid-cols-2 gap-4">
                                <Button
                                    onClick={() => handleStatusUpdate("Checked In")}
                                    disabled={isSubmitting}
                                    className="h-20 text-lg font-black bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all active:scale-[0.98] uppercase tracking-[0.05em] border border-emerald-500/50 flex flex-col items-center justify-center gap-1"
                                >
                                    {isSubmitting ? (
                                        <Loader2 className="h-6 w-6 animate-spin" />
                                    ) : (
                                        <>
                                            <Clock className="h-6 w-6 mb-1" />
                                            Shift In
                                        </>
                                    )}
                                </Button>

                                <Button
                                    onClick={() => handleStatusUpdate("Checked Out")}
                                    disabled={isSubmitting}
                                    className="h-20 text-lg font-black bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-2xl shadow-lg transition-all active:scale-[0.98] uppercase tracking-[0.05em] border border-slate-700 flex flex-col items-center justify-center gap-1"
                                >
                                    {isSubmitting ? (
                                        <Loader2 className="h-6 w-6 animate-spin" />
                                    ) : (
                                        <>
                                            <CheckCircle2 className="h-6 w-6 mb-1" />
                                            Shift Out
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>
                    </div>
                )}

                {/* STEP 3: SUCCESS */}
                {step === Step.SUCCESS && (
                    <div className="space-y-6 animate-in zoom-in-95 duration-500 py-6">
                        {/* HEADER STATUS */}
                        <div className="text-center space-y-4">
                            <div className="relative mx-auto h-24 w-24">
                                <div className="absolute inset-0 bg-emerald-500/20 rounded-full animate-ping"></div>
                                <div className="relative h-24 w-24 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-[0_0_40px_rgba(16,185,129,0.5)]">
                                    <CheckCircle2 className="h-12 w-12" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-3xl font-black text-white tracking-tighter uppercase leading-none">Status: <span className="text-emerald-500">Active</span></h2>
                                <p className="text-slate-400 text-sm font-medium mt-1">Shift Started • {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                            </div>
                        </div>

                        {/* LEADERSHIP CONTACTS */}
                        <div className="grid gap-4">
                            {/* 1. Station Lead */}
                            {(() => {
                                // Find a lead in the same station
                                const stationLeads = volunteers.filter(v =>
                                    v.childStation === selectedVol?.childStation &&
                                    (v.role?.toLowerCase().includes('captain') || v.role?.toLowerCase().includes('lead')) &&
                                    v.volunteerId !== selectedVol?.volunteerId // exclude self
                                );
                                const lead = stationLeads[0];

                                if (lead) {
                                    return (
                                        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-center justify-between shadow-lg">
                                            <div>
                                                <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-1">Station Commander</p>
                                                <p className="text-lg font-bold text-white leading-none">{lead.firstName} {lead.lastName}</p>
                                            </div>
                                            <div className="flex gap-2">
                                                {lead.phone && (
                                                    <>
                                                        <a href={`sms:${lead.phone}`} className="h-10 w-10 bg-slate-800 rounded-xl flex items-center justify-center text-white hover:bg-emerald-500 transition-colors">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                                        </a>
                                                        <a href={`tel:${lead.phone}`} className="h-10 w-10 bg-slate-800 rounded-xl flex items-center justify-center text-white hover:bg-emerald-500 transition-colors">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                                        </a>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    );
                                }
                                return (
                                    <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl flex items-center gap-3">
                                        <Info className="h-5 w-5 text-slate-500" />
                                        <p className="text-sm text-slate-500 font-medium italic">No Specific Station Commander Assigned</p>
                                    </div>
                                );
                            })()}

                            {/* 2. HQ / Brooke */}
                            {(() => {
                                // Find Brooke or Race Director
                                const brooke = volunteers.find(v => v.firstName?.toLowerCase().includes('brooke') || v.role?.toLowerCase().includes('race director'));

                                return (
                                    <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-center justify-between shadow-lg">
                                        <div>
                                            <p className="text-[10px] font-black uppercase text-amber-500 tracking-widest mb-1">Mission Control</p>
                                            <p className="text-lg font-bold text-white leading-none">{brooke ? `${brooke.firstName} ${brooke.lastName}` : "Direct Line"}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            {brooke?.phone ? (
                                                <a href={`sms:${brooke.phone}`} className="h-10 w-10 bg-slate-800 rounded-xl flex items-center justify-center text-white hover:bg-amber-500 transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                                </a>
                                            ) : (
                                                <Button size="sm" variant="ghost" className="h-10 w-10 p-0 bg-slate-800 rounded-xl hover:bg-amber-500 text-white">
                                                    <AlertTriangle className="h-5 w-5" />
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                );
                            })()}
                        </div>

                        {/* ACTION DECK */}
                        <div className="bg-slate-950 p-6 rounded-3xl border border-slate-900 space-y-4">
                            <h3 className="text-xs font-black uppercase text-slate-600 tracking-widest text-center">Duty Controls</h3>
                            <Button
                                onClick={() => {
                                    // Shift Out Logic (simulated transition for now, call API in real flow)
                                    handleStatusUpdate("Checked Out");
                                }}
                                disabled={isSubmitting}
                                className="w-full h-16 text-lg font-black bg-slate-800 hover:bg-red-900/50 hover:text-red-500 text-slate-400 rounded-xl shadow-lg transition-all border border-slate-700 hover:border-red-500/30 flex items-center justify-center gap-3"
                            >
                                {isSubmitting ? <Loader2 className="animate-spin" /> : <Clock className="h-5 w-5" />}
                                END SHIFT
                            </Button>
                            <p className="text-[10px] text-center text-slate-600 max-w-[200px] mx-auto leading-tight">
                                Only end your shift when you have been relieved or released by your Commander.
                            </p>
                        </div>
                    </div>
                )}

                {/* STEP 4: COMPLETED (Previously Success for Check In, now for Check Out) */}
                {step === Step.SUCCESS && !selectedVol?.status?.includes('In') && (
                    <div className="text-center space-y-10 animate-in zoom-in-95 duration-500 py-12">
                        <div className="relative mx-auto h-32 w-32">
                            <div className="relative h-32 w-32 bg-slate-800 rounded-full flex items-center justify-center text-slate-500 shadow-xl">
                                <CheckCircle2 className="h-16 w-16" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-4xl font-black text-white tracking-tighter uppercase leading-[0.9]">SHIFT<br /><span className="text-slate-500">COMPLETE</span></h2>
                            <p className="text-slate-400 font-medium text-lg">Thank you for your service!</p>
                        </div>
                        <button
                            onClick={() => {
                                setStep(Step.IDENTITY);
                                setSearch("");
                                setSelectedVol(null);
                            }}
                            className="text-xs font-black uppercase tracking-widest text-emerald-500 hover:text-white transition-colors"
                        >
                            Start New Shift
                        </button>
                    </div>

                )}

            </main>
        </div>
    );
}
