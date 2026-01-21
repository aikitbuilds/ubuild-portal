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
        <div className="space-y-10 animate-in fade-in duration-700">
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
                    <Button
                        className="bg-[#E67E22] hover:bg-[#D35400] text-white rounded-2xl h-12 px-6 font-black uppercase tracking-widest gap-2 shadow-xl shadow-[#E67E22]/20"
                    >
                        <Download className="w-4 h-4" />
                        Export
                    </Button>
                </div>
            </div>

            {/* Top Row: Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-[#0B1120]/50 border-white/5 backdrop-blur-xl rounded-[2rem] p-8 border-t-white/10 group">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Runners on Course</p>
                    <div className="flex items-baseline justify-between mb-4">
                        <span className="text-4xl font-black text-white">{stats.runnersOnCourse}</span>
                        <span className="text-sm font-bold text-slate-400">{stats.runnersPercent}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-[#E67E22] transition-all duration-1000"
                            style={{ width: `${stats.runnersPercent}%` }}
                        />
                    </div>
                </Card>

                <Card className="bg-[#0B1120]/50 border-white/5 backdrop-blur-xl rounded-[2rem] p-8 border-t-white/10 group">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Volunteers Checked In</p>
                    <div className="flex items-baseline justify-between mb-4">
                        <span className="text-4xl font-black text-white">{stats.volunteersCheckedIn}</span>
                        <span className="text-sm font-bold text-slate-400">{stats.volunteersPercent}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-emerald-500 transition-all duration-1000"
                            style={{ width: `${stats.volunteersPercent}%` }}
                        />
                    </div>
                </Card>

                <Card className="bg-[#0B1120]/50 border-white/5 backdrop-blur-xl rounded-[2rem] p-8 border-t-white/10 group overflow-hidden relative">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-red-500/10 blur-3xl rounded-full" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4 font-bold">Active Alerts</p>
                    <div className="flex items-baseline gap-4 mb-4">
                        <span className="text-4xl font-black text-white">{stats.activeAlerts}</span>
                        {stats.activeAlerts > 0 && (
                            <Badge className="bg-red-500 text-white animate-pulse">Critical</Badge>
                        )}
                    </div>
                    <p className="text-[10px] font-bold text-red-500/80 uppercase tracking-widest">Requiring Immediate Triage</p>
                </Card>
            </div>

            {/* Main Panel: Alert Queue */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <Card className="bg-[#0B1120]/50 border-white/5 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border-t-white/10 shadow-2xl h-full flex flex-col">
                        <div className="p-8 border-b border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                                    <AlertCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black uppercase tracking-tight text-white">Alert Queue</h3>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Sorted by Severity</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20 text-[8px] font-black">RED</Badge>
                                <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20 text-[8px] font-black">YELLOW</Badge>
                            </div>
                        </div>
                        <CardContent className="p-0 flex-1 overflow-y-auto max-h-[600px] custom-scrollbar">
                            <ErrorBoundary>
                                <div className="divide-y divide-white/5">
                                    {alerts.sort((a, b) => {
                                        const scores = { red: 3, yellow: 2, green: 1 };
                                        return scores[b.severity] - scores[a.severity];
                                    }).map((alert) => (

                                        <div key={alert.id} className="p-6 hover:bg-white/[0.02] transition-colors group">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="space-y-3 flex-1">
                                                    <div className="flex items-center gap-2">
                                                        <div className={cn(
                                                            "w-2 h-2 rounded-full animate-pulse",
                                                            alert.severity === 'red' ? "bg-red-500" : "bg-amber-500"
                                                        )} />
                                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                                                            {alert.type} • {alert.station || 'Global'}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm font-bold text-white line-clamp-2 leading-relaxed">
                                                        {alert.message}
                                                    </p>
                                                    {alert.ai_recommendation && (
                                                        <div className="bg-white/5 border border-white/5 rounded-2xl p-4 space-y-2">
                                                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#E67E22]">
                                                                <MapIcon className="w-3 h-3" /> AI Recommendation
                                                            </div>
                                                            <p className="text-xs text-slate-300 font-medium">
                                                                {alert.ai_recommendation}
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                                <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white rounded-xl text-[10px] font-black uppercase tracking-widest h-10 px-6">
                                                    Approve Action
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ErrorBoundary>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    {/* Demo Access Card */}
                    <Card className="bg-[#E67E22]/10 border-[#E67E22]/20 backdrop-blur-xl rounded-[2rem] p-8 border-t-[#E67E22]/30 relative overflow-hidden group">
                        <div className="absolute -right-4 -top-4 w-32 h-32 bg-[#E67E22]/20 blur-3xl rounded-full pointer-events-none" />
                        <div className="relative">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-[#E67E22]/20 flex items-center justify-center text-[#E67E22]">
                                    <Subtitles className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-black uppercase tracking-tight text-white">Demo Access</h3>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-[#E67E22]">Live Credentials</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-[#0B1120]/50 rounded-xl p-4 border border-white/5 space-y-2">
                                    <div className="flex items-center justify-between">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Crew Check-In</p>
                                        <Badge className="bg-[#E67E22] text-white text-[9px] hover:bg-[#D35400]">Kiosk Mode</Badge>
                                    </div>
                                    <a href="/tejas/checkin" target="_blank" className="text-sm font-bold text-white hover:underline block truncate">
                                        /tejas/checkin
                                    </a>
                                    <div className="flex items-center gap-2 text-[10px] text-slate-400">
                                        <Users className="w-3 h-3" /> Search: <span className="text-white font-mono">Michael Cong</span>
                                    </div>
                                </div>

                                <div className="bg-[#0B1120]/50 rounded-xl p-4 border border-white/5 space-y-2">
                                    <div className="flex items-center justify-between">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Volunteer Portal</p>
                                        <Badge className="bg-emerald-500 text-white text-[9px] hover:bg-emerald-600">Self-Service</Badge>
                                    </div>
                                    <a href="/volunteer/login" target="_blank" className="text-sm font-bold text-white hover:underline block truncate">
                                        /volunteer/login
                                    </a>
                                    <div className="flex items-center gap-2 text-[10px] text-slate-400">
                                        <Users className="w-3 h-3" /> Login: <span className="text-white font-mono">michael.cong@example.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card className="bg-[#0B1120]/50 border-white/5 backdrop-blur-xl rounded-[2rem] p-8 border-t-white/10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                                <Users className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-black uppercase tracking-tight text-white">Shift Real-time</h3>
                        </div>
                        <ErrorBoundary>
                            <StationMonitor assignments={assignments} volunteers={volunteers} isDark />
                        </ErrorBoundary>
                    </Card>
                </div>
            </div>
        </div>
    );
}

