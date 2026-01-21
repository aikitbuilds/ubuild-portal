"use client";

import React, { useState, useMemo, useEffect } from "react";
import { db } from "@/lib/firebase/client";
import { collection, onSnapshot, query, where, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";
import { Volunteer, Assignment } from "@/lib/tejas/data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, CheckCircle2, MapPin, Clock, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { useDebounce } from "@/hooks/use-debounce";
import { ErrorBoundary } from "@/components/ui/error-boundary";

function MobileCheckInContent() {
    const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
    const [assignments, setAssignments] = useState<Assignment[]>([]);
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 300);
    const [selectedVolunteer, setSelectedVolunteer] = useState<Volunteer | null>(null);
    const [checkedIn, setCheckedIn] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Day 10: Live Firestore Subscriptions
    useEffect(() => {
        console.log("Check-In Page v2.0 Loaded - Direct Firebase Mode");
        const unsubVolunteers = onSnapshot(collection(db, "volunteers"), (snapshot) => {
            const data = snapshot.docs.map(doc => doc.data() as Volunteer);
            setVolunteers(data);
        });

        const unsubAssignments = onSnapshot(collection(db, "assignments"), (snapshot) => {
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as Assignment));
            setAssignments(data);
        });

        return () => {
            unsubVolunteers();
            unsubAssignments();
        };
    }, []);

    const filteredVolunteers = useMemo(() => {
        if (debouncedSearch.length < 2) return [];
        return volunteers.filter(v =>
            v.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            v.phone.includes(debouncedSearch)
        ).slice(0, 5);
    }, [volunteers, debouncedSearch]);

    const volunteerAssignments = useMemo(() => {
        if (!selectedVolunteer) return [];
        return assignments.filter(a => a.volunteerId === selectedVolunteer.id);
    }, [selectedVolunteer, assignments]);

    const handleCheckIn = async () => {
        if (!selectedVolunteer || volunteerAssignments.length === 0) return;

        setIsSubmitting(true);
        try {
            const assignment = volunteerAssignments[0]; // For MVP, check in to first assignment

            // Client-side Check-In Logic
            // 1. Create Check-In Record
            const checkInRef = await addDoc(collection(db, "checkins"), {
                volunteerId: selectedVolunteer.id,
                assignmentId: assignment.id,
                timestamp: new Date(),
                location: { lat: 0, lng: 0 }
            });

            // 2. Update Assignment Status
            const assignmentRef = doc(db, "assignments", assignment.id);
            await updateDoc(assignmentRef, {
                status: 'active',
                actualCheckIn: new Date()
            });

            // 3. Update Volunteer Status (if needed for tracking)
            const volunteerRef = doc(db, "volunteers", selectedVolunteer.id);
            await updateDoc(volunteerRef, {
                status: 'checked-in',
                lastActive: new Date()
            });

            setCheckedIn(true);
            toast.success(`Successfully checked in ${selectedVolunteer.name}!`);
            setTimeout(() => {
                setSelectedVolunteer(null);
                setSearch("");
                setCheckedIn(false);
            }, 2000);

        } catch (error: any) {
            console.error("Check-in failed:", error);
            toast.error(error.message || "Failed to check in. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0B1120] p-6 flex flex-col items-center">
            {/* Logo Section */}
            <div className="mt-8 mb-12 text-center">
                <img
                    src="https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/f5fece5c-753d-44b5-8371-44d5d5c8223c/TTLogo+%28Full+Color+.9%29_Transparent.png?format=1500w"
                    alt="Tejas Trails"
                    className="h-12 w-auto object-contain mx-auto mb-4"
                />
                <h1 className="text-2xl font-black text-white uppercase tracking-tighter">Crew Check-In v2.0</h1>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Rocky Raccoon 100 • Ops (Direct Mode)</p>
            </div>

            <div className="w-full max-w-md space-y-6">
                {!selectedVolunteer ? (
                    <div className="space-y-4">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                            <Input
                                placeholder="Enter your full name..."
                                className="h-16 pl-12 bg-white/5 border-white/10 text-lg rounded-2xl text-white placeholder:text-slate-600 focus:border-[#E67E22]/50"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        <AnimatePresence>
                            {filteredVolunteers.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="space-y-2"
                                >
                                    {filteredVolunteers.map(v => (
                                        <button
                                            key={v.id}
                                            onClick={() => setSelectedVolunteer(v)}
                                            className="w-full p-6 bg-white/5 border border-white/5 rounded-2xl text-left hover:bg-white/10 transition-colors flex items-center justify-between group"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-[#E67E22]/20 flex items-center justify-center text-[#E67E22]">
                                                    <User className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-white uppercase text-sm tracking-tight">{v.name}</p>
                                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{v.phone}</p>
                                                </div>
                                            </div>
                                            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#E67E22] group-hover:border-[#E67E22] transition-colors">
                                                <CheckCircle2 className="w-4 h-4 text-white opacity-0 group-hover:opacity-100" />
                                            </div>
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="space-y-6"
                    >
                        <Card className="bg-[#0B1120] border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <CardContent className="p-8 space-y-8">
                                <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-[#E67E22]/10 flex items-center justify-center text-[#E67E22]">
                                        <User className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-[#E67E22]">Confirm Identity</p>
                                        <h2 className="text-2xl font-black text-white uppercase tracking-tight">{selectedVolunteer.name}</h2>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {volunteerAssignments.map(a => (
                                        <div key={a.id} className="bg-white/5 border border-white/5 rounded-2xl p-6 space-y-4 relative overflow-hidden group">
                                            <div className="absolute right-0 top-0 p-4 opacity-5">
                                                <MapPin className="w-12 h-12" />
                                            </div>
                                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
                                                <MapPin className="w-3 h-3 text-[#E67E22]" /> Station
                                            </div>
                                            <p className="text-xl font-black text-white uppercase">{a.station}</p>

                                            <div className="grid grid-cols-2 gap-4 pt-2">
                                                <div className="space-y-1">
                                                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-500">Shift Time</div>
                                                    <div className="text-xs font-bold text-slate-300 flex items-center gap-2">
                                                        <Clock className="w-3 h-3" /> 8:00 AM - 4:00 PM
                                                    </div>
                                                </div>
                                                <div className="space-y-1">
                                                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-500">Role</div>
                                                    <div className="text-xs font-bold text-white uppercase bg-white/5 px-2 py-0.5 rounded-full border border-white/5 inline-block">
                                                        {a.role}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-3">
                                    <Button
                                        onClick={handleCheckIn}
                                        disabled={checkedIn || isSubmitting}
                                        className="h-16 bg-[#E67E22] hover:bg-[#D35400] text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-[#E67E22]/20"
                                    >
                                        {isSubmitting ? "Syncing..." : checkedIn ? "Success!" : "Confirm & Check In"}
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        onClick={() => setSelectedVolunteer(null)}
                                        className="h-12 text-slate-500 hover:text-white font-black uppercase tracking-widest text-[10px]"
                                    >
                                        Not me? Go Back
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                )}
            </div>

            {/* Support Footer */}
            <div className="mt-auto mb-8 text-center px-8">
                <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest leading-relaxed">
                    Experiencing issues? Find a Lead Volunteer <br /> or contact Race Ops at 555-0100
                </p>
            </div>
        </div>
    );
}

export default function MobileCheckIn() {
    return (
        <ErrorBoundary>
            <MobileCheckInContent />
        </ErrorBoundary>
    );
}
