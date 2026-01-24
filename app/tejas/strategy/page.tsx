"use client";

import React from "react";
import Link from "next/link";
import { seedStrategyData } from "@/lib/tejas/strategy";
import { RoadmapTimeline } from "@/components/tejas/strategy/RoadmapTimeline";
import { BlockerTracker } from "@/components/tejas/strategy/BlockerTracker";
import { ModuleExplorer } from "@/components/tejas/strategy/ModuleExplorer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Users,
    Store,
    Trophy,
    ArrowRight,
    Map,
    Calendar,
    Network,
    BarChart3,
    AlertCircle
} from "lucide-react";
import { ArchitectureDiagram } from "@/components/tejas/ArchitectureDiagram";

export default function TejasStrategyPage() {
    React.useEffect(() => {
        seedStrategyData();
    }, []);

    return (
        <div className="space-y-6 pb-20">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-white uppercase tracking-tight">Strategy Room</h1>
                    <p className="text-slate-400 mt-1 max-w-2xl text-sm">
                        Single source of truth for TejasOS planning, architecture, and metrics.
                    </p>
                </div>
                <div className="text-right">
                    <span className="text-[10px] font-black text-[#E67E22] uppercase tracking-widest bg-[#E67E22]/10 px-3 py-1 rounded-full border border-[#E67E22]/20">
                        Phase 2: Execution
                    </span>
                </div>
            </div>

            <Accordion type="single" collapsible defaultValue="roadmap" className="w-full space-y-4">

                {/* SECTION 1: ROADMAP */}
                <AccordionItem value="roadmap" className="border border-white/5 bg-[#0B1120] rounded-2xl px-6">
                    <AccordionTrigger className="hover:no-underline py-6 group">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                                <Calendar className="w-5 h-5 text-blue-400" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-lg font-bold text-white uppercase tracking-tight">Roadmap & Priorities</h3>
                                <p className="text-xs text-slate-400 font-medium">Phase 1 Launch: Feb 6 • Next Milestone: Real Data Pilot</p>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-8 space-y-8">
                        <Alert className="bg-[#1E293B]/50 border-blue-500/20 text-blue-200">
                            <AlertCircle className="h-4 w-4 text-blue-500" />
                            <AlertTitle className="text-xs font-bold uppercase tracking-wide">Dynamic Data v2.0</AlertTitle>
                            <AlertDescription className="text-xs text-slate-400">
                                This roadmap is now driven by live Firestore data. Updates appear in real-time.
                            </AlertDescription>
                        </Alert>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <RoadmapTimeline />
                            </div>
                            <div className="lg:col-span-1">
                                <BlockerTracker />
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* SECTION 2: ARCHITECTURE */}
                <AccordionItem value="architecture" className="border border-white/5 bg-[#0B1120] rounded-2xl px-6">
                    <AccordionTrigger className="hover:no-underline py-6 group">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                                <Network className="w-5 h-5 text-purple-400" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-lg font-bold text-white uppercase tracking-tight">System Architecture</h3>
                                <p className="text-xs text-slate-400 font-medium">Platform Data Flow & Integration Points</p>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Link href="/tejas/strategy/system-architecture" className="group space-y-3 block">
                                <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest group-hover:text-[#E67E22] transition-colors">Platform Architecture</h4>
                                <div className="relative rounded-xl overflow-hidden border border-white/5 bg-black/20 aspect-video group-hover:border-[#E67E22]/30 transition-all">
                                    <img
                                        src="/images/tejas/tejasOS-platform-architecture.png"
                                        alt="Platform Architecture"
                                        className="w-full h-full object-contain p-4 opacity-90 group-hover:opacity-100 transition-opacity"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-sm">
                                        <Button size="sm" variant="secondary" className="font-bold">
                                            Open Interactive Map
                                        </Button>
                                    </div>
                                </div>
                            </Link>

                            <div className="group space-y-3 block col-span-1 md:col-span-2">
                                <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest transition-colors">Hybrid AI Architecture (Live Logic)</h4>
                                <ArchitectureDiagram />
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* SECTION 3: JOURNEY MAPS (Existing Viewers) */}
                <AccordionItem value="journeys" className="border border-white/5 bg-[#0B1120] rounded-2xl px-6">
                    <AccordionTrigger className="hover:no-underline py-6 group">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors">
                                <Map className="w-5 h-5 text-orange-400" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-lg font-bold text-white uppercase tracking-tight">User Journey Maps</h3>
                                <p className="text-xs text-slate-400 font-medium">Interactive Flows: Volunteer, Vendor, Racer</p>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Link href="/tejas/strategy/volunteer-journey" className="group">
                                <Card className="bg-slate-900 border-white/5 group-hover:border-orange-500/30 transition-all">
                                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Users className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white uppercase tracking-tight">Volunteer</h4>
                                            <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">Recruitment to Clock-Out</p>
                                        </div>
                                        <Button size="sm" variant="secondary" className="w-full text-xs font-bold bg-white/5 text-slate-300 group-hover:bg-[#E67E22] group-hover:text-black">
                                            Open Map <ArrowRight className="w-3 h-3 ml-2" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Link>

                            <Link href="/tejas/strategy/vendor-journey" className="group">
                                <Card className="bg-slate-900 border-white/5 group-hover:border-orange-500/30 transition-all">
                                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                        <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Store className="w-6 h-6 text-purple-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white uppercase tracking-tight">Vendor</h4>
                                            <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">Sponsorship & Logistics</p>
                                        </div>
                                        <Button size="sm" variant="secondary" className="w-full text-xs font-bold bg-white/5 text-slate-300 group-hover:bg-[#E67E22] group-hover:text-black">
                                            Open Map <ArrowRight className="w-3 h-3 ml-2" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Link>

                            <Link href="/tejas/strategy/racer-journey" className="group">
                                <Card className="bg-slate-900 border-white/5 group-hover:border-orange-500/30 transition-all">
                                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                        <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Trophy className="w-6 h-6 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white uppercase tracking-tight">Racer</h4>
                                            <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">Registration to Results</p>
                                        </div>
                                        <Button size="sm" variant="secondary" className="w-full text-xs font-bold bg-white/5 text-slate-300 group-hover:bg-[#E67E22] group-hover:text-black">
                                            Open Map <ArrowRight className="w-3 h-3 ml-2" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Link>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {/* SECTION 4: METRICS */}
                <AccordionItem value="metrics" className="border border-white/5 bg-[#0B1120] rounded-2xl px-6">
                    <AccordionTrigger className="hover:no-underline py-6 group">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                                <BarChart3 className="w-5 h-5 text-emerald-400" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-lg font-bold text-white uppercase tracking-tight">Success Metrics</h3>
                                <p className="text-xs text-slate-400 font-medium">Targets: 0% No-Shows, 90% Mobile Adoption</p>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                        <div className="relative rounded-xl overflow-hidden border border-white/5 bg-black/20">
                            <img
                                src="/images/tejas/tejasOS-metrics-dashboard.png"
                                alt="Success Metrics"
                                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </AccordionContent>
                </AccordionItem>



                {/* SECTION 5: FUTURE OPPORTUNITIES */}
                <AccordionItem value="opportunities" className="border border-white/5 bg-[#0B1120] rounded-2xl px-6">
                    <AccordionTrigger className="hover:no-underline py-6 group">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors">
                                <Trophy className="w-5 h-5 text-orange-400" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-lg font-bold text-white uppercase tracking-tight">Future Opportunities & ROI</h3>
                                <p className="text-xs text-slate-400 font-medium">Module Explorer: Phase 2, 3 & 4</p>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-8">
                        <ModuleExplorer />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div >
    );
}
