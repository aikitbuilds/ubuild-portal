"use client";

import React, { useMemo, useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    AlertCircle,
    Users,
    Clock,
    Subtitles,
    Map as MapIcon,
    BarChart3,
    PieChart as PieChartIcon,
    RefreshCw,
    Download
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

import { db } from "@/lib/firebase/client";
import { collection, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import { Volunteer, Assignment as TAssignment, Alert, generateGhostData } from "@/lib/tejas/data";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import { VolunteerGrid } from "@/components/tejas/VolunteerGrid";
import { StationMonitor } from "@/components/tejas/StationMonitor";
import { ShiftTimeline } from "@/components/tejas/ShiftTimeline";
import { AIDirector } from "@/components/tejas/AIDirector";
import { VolunteerChat } from "@/components/tejas/VolunteerChat";
import { CommandCenter } from "@/components/tejas/CommandCenter";
import { StationHealthChart } from "@/components/tejas/StationHealthChart";
import { CheckinVelocityChart } from "@/components/tejas/CheckinVelocityChart";
import { AICommandQueue } from "@/components/tejas/AICommandQueue";

const COLORS = ['#E67E22', '#1E293B', '#4A5D23', '#8B4513'];

const chartData = [
    { name: 'Jan', submissions: 1 },
    { name: 'Feb', submissions: 0.1 },
    { name: 'Mar', submissions: 0.1 },
    { name: 'Apr', submissions: 0.1 },
];

const pieData = [
    { name: 'Contact', value: 100 },
];

export default function TejasDashboard() {
    const [isSyncing, setIsSyncing] = useState(false);
    const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
    const [assignments, setAssignments] = useState<TAssignment[]>([]);
    const [alerts, setAlerts] = useState<Alert[]>([]);

    // Day 9: Live Firestore Subscriptions
    useEffect(() => {
        const unsubVolunteers = onSnapshot(collection(db, "volunteers"), (snapshot) => {
            const data = snapshot.docs.map(doc => doc.data() as Volunteer);
            setVolunteers(data);
        });

        const unsubAssignments = onSnapshot(collection(db, "assignments"), (snapshot) => {
            const data = snapshot.docs.map(doc => {
                const d = doc.data();
                return {
                    ...d,
                    startTime: d.startTime?.toDate() || new Date(),
                    endTime: d.endTime?.toDate() || new Date()
                } as TAssignment;
            });
            setAssignments(data);
        });

        const unsubAlerts = onSnapshot(query(collection(db, "issues"), orderBy("created_at", "desc")), (snapshot) => {
            const data = snapshot.docs.map(doc => {
                const d = doc.data();
                return {
                    ...d,
                    created_at: d.created_at?.toDate() || new Date()
                } as unknown as Alert;
            });
            setAlerts(data);
        });

        return () => {
            unsubVolunteers();
            unsubAssignments();
            unsubAlerts();
        };
    }, []);

    // Demo Mode Fallback: If no live data after 2 seconds, load Ghost Data
    useEffect(() => {
        const timer = setTimeout(() => {
            if (volunteers.length === 0) {
                console.log("⚠️ Live data empty. Activating Demo Mode (Ghost Data).");
                const ghost = generateGhostData();
                setVolunteers(ghost.volunteers);
                setAssignments(ghost.assignments);
                setAlerts(ghost.alerts);
            }
        }, 2500);
        return () => clearTimeout(timer);
    }, [volunteers.length]);

    const handleSync = async () => {
        setIsSyncing(true);
        try {
            const response = await fetch('/api/tejas/sync', {
                method: 'POST',
            });
            const result = await response.json();

            if (result.success) {
                toast.success(`Success: ${result.updatedCount} Volunteers Updated`);
            } else {
                throw new Error(result.error || 'Sync failed');
            }
        } catch (error: any) {
            toast.error(error.message || 'Failed to sync volunteer data');
        } finally {
            setIsSyncing(false);
        }
    };

    const stats = useMemo(() => {
        const checkedInCount = volunteers.filter(v => (v as any).status === 'checked-in').length || 12; // Hybrid mock/real for now
        const runnersOnCourse = 287;
        const totalRunners = 400;

        return {
            runnersOnCourse: `${runnersOnCourse}/${totalRunners}`,
            runnersPercent: Math.round((runnersOnCourse / totalRunners) * 100),
            volunteersCheckedIn: `${checkedInCount}/${volunteers.length || 70}`,
            volunteersPercent: volunteers.length > 0 ? Math.round((checkedInCount / volunteers.length) * 100) : 0,
            activeAlerts: alerts.filter(a => a.status === 'open').length
        };
    }, [volunteers, assignments, alerts]);

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 relative">
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/f5fece5c-753d-44b5-8371-44d5d5c8223c/TTLogo+%28Full+Color+.9%29_Transparent.png?format=1500w"
                        alt="Tejas Trails"
                        className="h-16 w-auto object-contain brightness-0 invert"
                    />
                    <div>
                        <div className="flex items-center gap-3">
                            <h1 className="text-4xl font-extrabold text-white tracking-tight leading-none">Command Center</h1>
                            <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/20 font-black uppercase text-[10px] tracking-widest animate-pulse">
                                DEMO MODE
                            </Badge>
                        </div>
                        <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mt-2">Race Operations • Rocky Raccoon 100</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <Button
                        onClick={handleSync}
                        disabled={isSyncing}
                        className="bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl h-12 px-6 font-black uppercase tracking-widest gap-2"
                    >
                        <RefreshCw className={cn("w-4 h-4", isSyncing && "animate-spin")} />
                        {isSyncing ? "Syncing..." : "Sync Roster"}
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column (Stats & Visuals) */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Top Row: KPI Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="bg-[#0B1120]/50 border-white/5 backdrop-blur-xl rounded-[2rem] p-8 border-t-white/10">
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Runners on Course</p>
                            <div className="flex items-baseline justify-between mb-4">
                                <span className="text-4xl font-black text-white">{stats.runnersOnCourse}</span>
                                <span className="text-sm font-bold text-slate-400">{stats.runnersPercent}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-[#E67E22] transition-all duration-1000" style={{ width: `${stats.runnersPercent}%` }} />
                            </div>
                        </Card>
                        <Card className="bg-[#0B1120]/50 border-white/5 backdrop-blur-xl rounded-[2rem] p-8 border-t-white/10">
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Volunteers Checked In</p>
                            <div className="flex items-baseline justify-between mb-4">
                                <span className="text-4xl font-black text-white">{stats.volunteersCheckedIn}</span>
                                <span className="text-sm font-bold text-slate-400">{stats.volunteersPercent}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 transition-all duration-1000" style={{ width: `${stats.volunteersPercent}%` }} />
                            </div>
                        </Card>
                    </div>

                    {/* Charts Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="bg-[#0B1120]/50 border-white/5 backdrop-blur-xl rounded-[2rem] p-6 border-t-white/10">
                            <div className="flex items-center gap-2 mb-6">
                                <BarChart3 className="w-4 h-4 text-[#E67E22]" />
                                <h3 className="text-sm font-black uppercase tracking-widest text-white">Station Health</h3>
                            </div>
                            <ErrorBoundary>
                                <StationHealthChart assignments={assignments} />
                            </ErrorBoundary>
                        </Card>
                        <Card className="bg-[#0B1120]/50 border-white/5 backdrop-blur-xl rounded-[2rem] p-6 border-t-white/10">
                            <div className="flex items-center gap-2 mb-6">
                                <Clock className="w-4 h-4 text-[#E67E22]" />
                                <h3 className="text-sm font-black uppercase tracking-widest text-white">Check-in Velocity (4h)</h3>
                            </div>
                            <ErrorBoundary>
                                <CheckinVelocityChart volunteers={volunteers} />
                            </ErrorBoundary>
                        </Card>
                    </div>

                    {/* Bottom: Demo Links */}
                    <Card className="bg-[#E67E22]/10 border-[#E67E22]/20 backdrop-blur-xl rounded-[2rem] p-8 border-t-[#E67E22]/30 relative overflow-hidden">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-[#E67E22]/20 flex items-center justify-center text-[#E67E22]">
                                <Subtitles className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-lg font-black uppercase tracking-tight text-white">Quick Links</h3>
                                <p className="text-[10px] font-black uppercase tracking-widest text-[#E67E22]">Navigate</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <a href="/tejas/checkin" target="_blank" className="bg-[#0B1120]/50 hover:bg-[#E67E22]/20 p-4 rounded-xl border border-white/5 transition-colors block group">
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-[#E67E22]">Kiosk</p>
                                <p className="text-white font-bold">Crew Check-In</p>
                            </a>
                            <a href="/volunteer/login" target="_blank" className="bg-[#0B1120]/50 hover:bg-[#E67E22]/20 p-4 rounded-xl border border-white/5 transition-colors block group">
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-[#E67E22]">Portal</p>
                                <p className="text-white font-bold">Volunteer Login</p>
                            </a>
                            <a href="/tejas/volunteer-hub" className="bg-[#0B1120]/50 hover:bg-[#E67E22]/20 p-4 rounded-xl border border-white/5 transition-colors block group">
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-[#E67E22]">Admin</p>
                                <p className="text-white font-bold">Volunteer Hub</p>
                            </a>
                        </div>
                    </Card>
                </div>

                {/* Right Column (AI Intelligence) */}
                <div className="lg:col-span-1 h-full">
                    <ErrorBoundary>
                        <AICommandQueue />
                    </ErrorBoundary>
                </div>
            </div>
        </div>
    );
}

