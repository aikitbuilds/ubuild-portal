"use client";

import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    MapPin,
    Phone,
    UserCheck,
    Video,
    Search,
    ChevronLeft,
    CheckCircle,
    MessageSquare,
    PlayCircle,
    Info,
    Mic,
    MoreHorizontal
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { generateGhostData, Volunteer, Assignment } from "@/lib/tejas/data";
import { VolunteerChat } from "@/components/tejas/VolunteerChat";
import { Badge } from "@/components/ui/badge";

export default function TejasVolunteerApp() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeVolunteer, setActiveVolunteer] = useState<Volunteer | null>(null);
    const [isSearching, setIsSearching] = useState(false);
    const [activeTab, setActiveTab] = useState("assignment");
    const [isCheckedIn, setIsCheckedIn] = useState(false);

    const { volunteers, assignments } = useMemo(() => generateGhostData(), []);

    const handleSearch = () => {
        setIsSearching(true);
        setTimeout(() => {
            const found = volunteers.find(v =>
                v.email.toLowerCase() === searchQuery.toLowerCase() ||
                v.phone === searchQuery ||
                v.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setActiveVolunteer(found || null);
            setIsSearching(false);
            if (!found) alert("Volunteer not found. Use your registered name or email.");
        }, 800);
    };

    const volunteerAssignments = useMemo(() => {
        if (!activeVolunteer) return [];
        return assignments.filter(a => a.volunteerId === activeVolunteer.id);
    }, [activeVolunteer, assignments]);

    if (!activeVolunteer) {
        return (
            <div className="min-h-screen bg-[#0B1120] flex items-center justify-center p-6 text-slate-200">
                <div className="max-w-md w-full space-y-8 text-center">
                    <div className="space-y-4">
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/f5fece5c-753d-44b5-8371-44d5d5c8223c/TTLogo+%28Full+Color+.9%29_Transparent.png?format=1500w"
                            className="h-20 w-auto mx-auto brightness-0 invert"
                            alt="Tejas Trails"
                        />
                        <h1 className="text-3xl font-black uppercase tracking-tight text-white">Volunteer Ops</h1>
                        <p className="text-slate-500 font-medium tracking-tight">Access your mission briefings</p>
                    </div>

                    <Card className="bg-white/5 border-white/10 shadow-2xl overflow-hidden rounded-[2rem]">
                        <CardContent className="pt-8 space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E67E22] block text-left px-2">Identity Verification</label>
                                <Input
                                    placeholder="Enter Name or Email"
                                    className="h-16 bg-white/5 border-2 border-white/5 text-white focus-visible:ring-[#E67E22] rounded-2xl text-lg pl-4"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                />
                            </div>
                            <Button
                                className="w-full h-18 text-xl font-black bg-[#E67E22] hover:bg-[#D35400] text-white shadow-2xl shadow-[#E67E22]/20 rounded-2xl border-b-4 border-b-[#C0392B] active:border-b-0 active:translate-y-1 transition-all"
                                onClick={handleSearch}
                                disabled={isSearching || !searchQuery}
                            >
                                {isSearching ? "DEPLOYING DATA..." : "LAUNCH HUB"}
                            </Button>
                        </CardContent>
                    </Card>

                    <p className="text-[9px] text-slate-600 font-black uppercase tracking-widest">Secured by Tejas Trails • Alpha v1.1</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0B1120] text-slate-200 pb-32">
            <header className="p-6 flex items-center justify-between border-b border-white/5 sticky top-0 bg-[#0B1120]/80 backdrop-blur-xl z-50">
                <div className="flex items-center gap-3">
                    <img src="https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/f5fece5c-753d-44b5-8371-44d5d5c8223c/TTLogo+%28Full+Color+.9%29_Transparent.png?format=1500w" className="h-6 w-auto brightness-0 invert" alt="Tejas" />
                    <div className="h-4 w-px bg-white/20" />
                    <div>
                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">Crew Active</p>
                        <p className="text-xs font-black text-white">{activeVolunteer.name}</p>
                    </div>
                </div>
                {isCheckedIn && (
                    <Badge className="bg-emerald-500/10 text-emerald-500 border-none font-black text-[9px] uppercase tracking-widest px-3 py-1">
                        Checked In
                    </Badge>
                )}
                {!isCheckedIn && (
                    <Button variant="ghost" className="text-slate-500 hover:text-white h-8" onClick={() => setActiveVolunteer(null)}>
                        Logout
                    </Button>
                )}
            </header>

            <main className="p-5 max-w-2xl mx-auto space-y-8">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8 text-center">
                    <TabsList className="bg-white/5 border border-white/10 w-full p-1.5 h-16 rounded-[1.25rem] sticky top-20 z-40 backdrop-blur-md">
                        <TabsTrigger value="assignment" className="flex-1 data-[state=active]:bg-[#E67E22] data-[state=active]:text-white h-full rounded-xl font-black text-[10px] uppercase tracking-widest gap-2">
                            Mission
                        </TabsTrigger>
                        <TabsTrigger value="intel" className="flex-1 data-[state=active]:bg-[#E67E22] data-[state=active]:text-white h-full rounded-xl font-black text-[10px] uppercase tracking-widest gap-2">
                            Intel
                        </TabsTrigger>
                        <TabsTrigger value="chat" className="flex-1 data-[state=active]:bg-[#E67E22] data-[state=active]:text-white h-full rounded-xl font-black text-[10px] uppercase tracking-widest gap-2">
                            Comms
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="assignment" className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                        {volunteerAssignments.slice(0, 1).map((assignment) => (
                            <Card key={assignment.id} className="bg-white/5 border-white/10 rounded-[2.5rem] overflow-hidden border-t-[12px] border-t-[#E67E22] shadow-2xl">
                                <CardContent className="pt-10 p-6 space-y-10">
                                    <div className="space-y-2">
                                        <p className="text-[11px] font-black text-[#E67E22] uppercase tracking-[0.3em]">Current Deployment</p>
                                        <h2 className="text-5xl font-black text-white tracking-tighter">{assignment.station}</h2>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-white/5 p-5 rounded-[1.5rem] border border-white/5">
                                            <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">Timebox</p>
                                            <p className="text-sm font-black text-white">
                                                {assignment.startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {assignment.endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </p>
                                        </div>
                                        <div className="bg-white/5 p-5 rounded-[1.5rem] border border-white/5">
                                            <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">Ops Date</p>
                                            <p className="text-sm font-black text-white">
                                                {assignment.startTime.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-[#E67E22]/10 border border-[#E67E22]/20 p-6 rounded-[2rem] space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-[#E67E22] rounded-2xl flex items-center justify-center font-black text-white text-xl shadow-lg">B</div>
                                            <div className="text-left">
                                                <p className="text-sm font-black text-white">Brook H.</p>
                                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Ops Command Lead</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <Button className="w-full bg-[#E67E22] text-white font-black text-xs h-16 rounded-[1.25rem] shadow-xl shadow-[#E67E22]/20 border-b-4 border-b-[#C0392B] active:border-b-0 active:translate-y-1" onClick={() => setActiveTab("chat")}>
                                                MESSAGE COMMAND
                                            </Button>
                                            <Button variant="ghost" className="w-full text-slate-400 font-black text-[10px] tracking-widest uppercase hover:text-white" onClick={() => window.location.href = "tel:5121234567"}>
                                                <Phone className="w-4 h-4 mr-2" /> CALL LEAD DIRECT
                                            </Button>
                                        </div>
                                    </div>

                                    {!isCheckedIn && (
                                        <Button
                                            className="w-full h-20 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-2xl rounded-[1.5rem] shadow-2xl shadow-emerald-500/20 border-b-8 border-b-emerald-800 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-3"
                                            onClick={() => setIsCheckedIn(true)}
                                        >
                                            <UserCheck className="w-8 h-8" />
                                            CHECK IN NOW
                                        </Button>
                                    )}
                                    {isCheckedIn && (
                                        <div className="p-6 bg-emerald-500/10 border-2 border-emerald-500/30 rounded-3xl flex items-center justify-center gap-4 text-emerald-500 font-black">
                                            <CheckCircle className="w-8 h-8" />
                                            <p className="text-xl uppercase tracking-tighter">MISSION ACTIVE</p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </TabsContent>

                    <TabsContent value="intel" className="space-y-6">
                        <h3 className="text-xl font-black text-white uppercase tracking-tighter border-l-4 border-[#E67E22] pl-4 text-left">Mission Briefings</h3>

                        <div className="grid gap-4">
                            <Card className="bg-white/5 border-white/10 rounded-[1.5rem] p-6 group cursor-pointer hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20 text-blue-500 shadow-xl shadow-blue-500/10">
                                        <Video className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <p className="text-base font-black text-white leading-tight">Station Guide: {volunteerAssignments[0]?.station}</p>
                                        <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">Video Component • 3.2 MB</p>
                                    </div>
                                    <PlayCircle className="w-8 h-8 text-slate-600 group-hover:text-blue-500 transition-all" />
                                </div>
                            </Card>

                            <Card className="bg-white/5 border-white/10 rounded-[1.5rem] p-6 group cursor-pointer hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 text-emerald-500 shadow-xl shadow-emerald-500/10">
                                        <Mic className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <p className="text-base font-black text-white leading-tight">Director's Field Note</p>
                                        <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">Audio Logistics • Just Now</p>
                                    </div>
                                    <PlayCircle className="w-8 h-8 text-slate-600 group-hover:text-emerald-500 transition-all" />
                                </div>
                            </Card>

                            <Card className="bg-white/5 border-white/10 rounded-[1.5rem] overflow-hidden">
                                <div className="p-6 border-b border-white/5 bg-white/5 flex items-center gap-4">
                                    <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20 text-amber-500">
                                        <Info className="w-5 h-5" />
                                    </div>
                                    <p className="text-sm font-black text-white uppercase tracking-widest">Protocol Check</p>
                                </div>
                                <div className="p-6 text-slate-400 text-sm leading-relaxed space-y-4 font-bold text-left">
                                    <div className="flex gap-4">
                                        <span className="text-[#E67E22]">01</span>
                                        <p>Confirm bib numbers for every inbound and outbound runner.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-[#E67E22]">02</span>
                                        <p>Prioritize hydration refill. Ensure electrolyte mix is consistent.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-[#E67E22]">03</span>
                                        <p>Keep the medical standby alerted if any runner seems incoherent.</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="chat" className="space-y-6">
                        <VolunteerChat volunteer={activeVolunteer} />
                    </TabsContent>
                </Tabs>
            </main>

            {/* Sticky Action Navigation for One-Handed Use */}
            {!isCheckedIn && activeTab !== "chat" && (
                <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full px-6 flex justify-center z-[100] animate-in slide-in-from-bottom-10 duration-700">
                    <Button
                        className="w-20 h-20 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_20px_50px_rgba(16,185,129,0.4)] border-4 border-[#0B1120] flex items-center justify-center p-0"
                        onClick={() => setIsCheckedIn(true)}
                    >
                        <UserCheck className="w-8 h-8" />
                    </Button>
                </div>
            )}
        </div>
    );
}
