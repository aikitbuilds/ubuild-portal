"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    MapPin,
    Clock,
    User,
    BookOpen,
    Volume2,
    CheckCircle2,
    ArrowLeft,
    ArrowRight,
    LogOut,
    Sparkles,
    AlertTriangle,
    Mic,
    Send
} from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function VolunteerDashboard() {
    const router = useRouter();
    const [isCheckedIn, setIsCheckedIn] = useState(false);
    const [identifier, setIdentifier] = useState<string | null>(null);
    const [isReporting, setIsReporting] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [reportData, setReportData] = useState({
        category: "general",
        severity: "low",
        message: ""
    });

    useEffect(() => {
        const storedId = localStorage.getItem("volunteer_id");
        if (!storedId) {
            router.push("/volunteer/login");
        } else {
            setIdentifier(storedId);
        }
    }, [router]);

    // Mock Volunteer Data (In real app, fetch from Firestore)
    const volunteer = useMemo(() => ({
        name: "Michael Cong",
        email: identifier,
        assignment: "Lead Crew Member",
        station: "Packet Pickup",
        shift_time: "Friday 8am - 4pm",
        written_instructions: "Check in volunteers, hand out packets, ensure waivers are signed. Coordinate with the timing team for bib distribution.",
        voice_instruction_url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    }), [identifier]);

    const handleReportSubmit = async () => {
        if (!reportData.message) {
            toast.error("Please provide details about the issue.");
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch("/api/tejas/report-issue", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    volunteerId: identifier,
                    station: volunteer.station,
                    ...reportData
                })
            });

            if (!response.ok) throw new Error("API responded with error");

            const result = await response.json();
            console.log("Report Triaged:", result);

            toast.success("Issue reported! AI Director has triaged it.");
            setIsReporting(false);
            setReportData({ category: "general", severity: "low", message: "" });
        } catch (error) {
            toast.error("Failed to submit report. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!identifier) return null;

    return (
        <div className="space-y-6 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/f5fece5c-753d-44b5-8371-44d5d5c8223c/TTLogo+%28Full+Color+.9%29_Transparent.png?format=1500w"
                        alt="Tejas Trails"
                        className="h-8 w-auto brightness-0 invert"
                    />
                    <div className="h-4 w-px bg-white/10" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#E67E22]">Crew Hub</span>
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => { localStorage.removeItem("volunteer_id"); router.push("/volunteer/login"); }}
                    className="text-slate-500 hover:text-white"
                >
                    <LogOut className="w-4 h-4" />
                </Button>
            </div>

            <div className="space-y-2">
                <h1 className="text-3xl font-black text-white tracking-tight leading-none">Welcome, {volunteer.name.split(' ')[0]}</h1>
                <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Mission: Rocky Raccoon 100</p>
            </div>

            {/* Assignment Card */}
            <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/10 rounded-[2rem] overflow-hidden shadow-2xl border-t-white/20">
                <CardHeader className="p-6 border-b border-white/5 space-y-4">
                    <div className="flex items-center justify-between">
                        <Badge variant="outline" className="bg-[#E67E22]/10 text-[#E67E22] border-[#E67E22]/20 font-black uppercase text-[10px] tracking-widest px-3 py-1">MY ASSIGNMENT</Badge>
                        {isCheckedIn && (
                            <Badge className="bg-emerald-500 text-white font-black uppercase text-[10px] tracking-widest px-3 py-1 border-0 shadow-lg shadow-emerald-500/20">
                                <CheckCircle2 className="w-3 h-3 mr-1.5" /> Checked In
                            </Badge>
                        )}
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#E67E22]">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 leading-none mb-1">Station</p>
                                <p className="text-lg font-bold text-white">{volunteer.station}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#E67E22]">
                                <Clock className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 leading-none mb-1">Time Slot</p>
                                <p className="text-lg font-bold text-white">{volunteer.shift_time}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#E67E22]">
                                <User className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 leading-none mb-1">Role</p>
                                <p className="text-lg font-bold text-white">{volunteer.assignment}</p>
                            </div>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="p-6 space-y-8">
                    {/* Written Instructions */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-[#E67E22]" />
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Written Instructions</h3>
                        </div>
                        <div className="bg-white/5 border border-white/5 p-5 rounded-2xl">
                            <p className="text-sm font-medium leading-relaxed text-slate-300 italic">
                                "{volunteer.written_instructions}"
                            </p>
                        </div>
                    </div>

                    {/* Voice Briefing */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Volume2 className="w-4 h-4 text-[#E67E22]" />
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Voice Briefing</h3>
                        </div>
                        <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                            <audio controls className="w-full h-10 filter invert opacity-80 decoration-none">
                                <source src={volunteer.voice_instruction_url} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </div>

                    {!isCheckedIn && (
                        <Button
                            onClick={() => setIsCheckedIn(true)}
                            className="w-full h-16 bg-[#E67E22] hover:bg-[#D35400] text-white rounded-2xl font-black uppercase tracking-widest shadow-2xl shadow-[#E67E22]/30 active:scale-95 transition-all text-lg"
                        >
                            Confirm Check-In
                            <ArrowRight className="ml-2 w-6 h-6" />
                        </Button>
                    )}
                </CardContent>
            </Card>

            <div className="pt-8 flex flex-col items-center justify-center gap-4">
                <Dialog open={isReporting} onOpenChange={setIsReporting}>
                    <DialogTrigger asChild>
                        <Button
                            variant="outline"
                            className="bg-red-500/10 border-red-500/20 text-red-500 hover:bg-red-500/20 rounded-2xl h-12 px-8 font-black uppercase tracking-widest"
                        >
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            Report Issue
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#0B1120] border-white/10 text-white rounded-[2rem] max-w-[90vw]">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-black uppercase tracking-tight">Report Incident</DialogTitle>
                            <DialogDescription className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                                AI Director will triage this immediately
                            </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-6 py-4">
                            <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-[#E67E22] ml-1">Category</Label>
                                <Select
                                    value={reportData.category}
                                    onValueChange={(v) => setReportData({ ...reportData, category: v })}
                                >
                                    <SelectTrigger className="bg-white/5 border-white/10 h-12 rounded-xl">
                                        <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#1E293B] border-white/10 text-white">
                                        <SelectItem value="medical">Medical / Health</SelectItem>
                                        <SelectItem value="gear">Gear / Supplies</SelectItem>
                                        <SelectItem value="staffing">Staffing / No-show</SelectItem>
                                        <SelectItem value="weather">Weather Alert</SelectItem>
                                        <SelectItem value="other">General / Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-[#E67E22] ml-1">Severity</Label>
                                <Select
                                    value={reportData.severity}
                                    onValueChange={(v) => setReportData({ ...reportData, severity: v })}
                                >
                                    <SelectTrigger className="bg-white/5 border-white/10 h-12 rounded-xl">
                                        <SelectValue placeholder="Select severity" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#1E293B] border-white/10 text-white">
                                        <SelectItem value="low">Low (Routine)</SelectItem>
                                        <SelectItem value="medium">Medium (Requires Action)</SelectItem>
                                        <SelectItem value="high">High (Immediate Response)</SelectItem>
                                        <SelectItem value="emergency">EMERGENCY</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-[#E67E22] ml-1">Details</Label>
                                <div className="relative">
                                    <Textarea
                                        placeholder="Describe what's happening..."
                                        className="bg-white/5 border-white/10 rounded-2xl min-h-[120px] pt-4 pb-12"
                                        value={reportData.message}
                                        onChange={(e) => setReportData({ ...reportData, message: e.target.value })}
                                    />
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute bottom-2 right-2 text-slate-500 hover:text-[#E67E22]"
                                        onClick={() => toast.info("Voice reporting coming soon!")}
                                    >
                                        <Mic className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <DialogFooter className="sm:justify-start">
                            <Button
                                onClick={handleReportSubmit}
                                disabled={isSubmitting}
                                className="w-full h-14 bg-[#E67E22] hover:bg-[#D35400] text-white rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-[#E67E22]/20"
                            >
                                {isSubmitting ? "Transmitting..." : (
                                    <>
                                        Submit to HQ
                                        <Send className="ml-2 w-4 h-4" />
                                    </>
                                )}
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                <div className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
                    <Sparkles className="w-3 h-3 text-white/20" />
                    Official Crew Interface
                </div>
            </div>
        </div>
    );
}
