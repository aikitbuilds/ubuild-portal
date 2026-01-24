"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Network,
    Database,
    ArrowRight,
    ScanLine,
    Cpu,
    BellRing,
    FileText,
    Video,
    Siren
} from "lucide-react";
import { motion } from "framer-motion";

export default function TrainingPage() {
    return (
        <div className="space-y-12 animate-in fade-in duration-700 pb-20">
            {/* Header */}
            <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#E67E22]/10 flex items-center justify-center text-[#E67E22] border border-[#E67E22]/20">
                    <Network className="w-8 h-8" />
                </div>
                <div>
                    <h1 className="text-4xl font-extrabold text-white tracking-tight leading-none">System Architecture & Training</h1>
                    <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mt-2">TejasOS • Knowledge Base</p>
                </div>
            </div>

            {/* Section 1: The Blueprint */}
            <section className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight">How TejasOS Connects Your Data</h2>
                        <p className="text-slate-400 text-sm mt-1">The central nervous system connecting Volunteer Signups (uCrew), Race Registration (RunSignup), and Timing Data (EDS).</p>
                    </div>
                    <Badge variant="outline" className="border-emerald-500/20 text-emerald-500 uppercase tracking-widest text-[10px] font-black px-3 py-1 bg-emerald-500/5">
                        Live Infrastructure
                    </Badge>
                </div>

                <Card className="bg-[#0B1120]/50 border-white/5 backdrop-blur-xl rounded-[2rem] overflow-hidden border-t-white/10 shadow-2xl">
                    <CardContent className="p-0 relative">
                        {/* Placeholder for architecture image - User will replace this file */}
                        <div className="aspect-[16/9] w-full bg-[#0B1120] relative flex items-center justify-center group">
                            <img
                                src="/images/tejas/tejasOS-platform-architecture.png"
                                alt="TejasOS Platform Architecture"
                                className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            {/* Fallback if image missing */}
                            <div className="hidden absolute inset-0 flex flex-col items-center justify-center text-slate-500">
                                <Network className="w-16 h-16 mb-4 opacity-20" />
                                <p className="text-sm font-mono uppercase tracking-widest">Architecture Diagram Placeholder</p>
                                <p className="text-xs opacity-50 mt-2">/images/tejas/tejasOS-platform-architecture.png</p>
                            </div>
                        </div>
                    </CardContent>
                    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/5 bg-white/[0.02]">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-[#E67E22] font-black uppercase text-[10px] tracking-widest">
                                <Database className="w-3 h-3" /> Single Database
                            </div>
                            <p className="text-sm text-slate-400 font-medium loading-relaxed">
                                No more copying between spreadsheets. All apps read from one Firestore DB.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-emerald-500 font-black uppercase text-[10px] tracking-widest">
                                <Clock className="w-3 h-3" /> Real-Time Sync
                            </div>
                            <p className="text-sm text-slate-400 font-medium loading-relaxed">
                                When a volunteer checks in, the dashboard updates instantly. No refresh needed.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-blue-500 font-black uppercase text-[10px] tracking-widest">
                                <Cpu className="w-3 h-3" /> API Ready
                            </div>
                            <p className="text-sm text-slate-400 font-medium loading-relaxed">
                                Ready to plug into Kyle's timing system via secure API endpoints.
                            </p>
                        </div>
                    </div>
                </Card>
            </section>

            {/* Section 2: Data Flow Logic */}
            <section className="space-y-6">
                <div>
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight">The Data Journey</h2>
                    <p className="text-slate-400 text-sm mt-1">From scan to dashboard: How information travels through the system.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Visual Flow */}
                    <Card className="bg-[#0B1120]/50 border-white/5 backdrop-blur-xl rounded-[2rem] p-8 border-t-white/10 h-full flex items-center justify-center">
                        <div className="w-full aspect-video bg-black/20 rounded-xl flex items-center justify-center relative overflow-hidden">
                            <img
                                src="/images/tejas/tejasOS-data-flow.png"
                                alt="TejasOS Data Flow"
                                className="w-full h-full object-contain p-4"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            <div className="hidden flex flex-col items-center justify-center text-slate-500">
                                <Activity className="w-12 h-12 mb-4 opacity-20" />
                                <p className="text-xs font-mono uppercase tracking-widest">Data Flow Diagram Placeholder</p>
                            </div>
                        </div>
                    </Card>

                    {/* Steps */}
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white/5 border border-white/5 rounded-2xl p-6 flex items-center gap-6"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                                <ScanLine className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-white font-black uppercase text-sm tracking-wide">1. Input</h3>
                                <p className="text-slate-400 text-sm mt-1">Volunteer scans QR Code at Kiosk or Runner registers online.</p>
                            </div>
                        </motion.div>

                        <div className="flex justify-center -my-2 relative z-10">
                            <ArrowRight className="w-6 h-6 text-slate-600 rotate-90 lg:rotate-90" />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 border border-white/5 rounded-2xl p-6 flex items-center gap-6"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#E67E22]/10 flex items-center justify-center text-[#E67E22] shrink-0">
                                <Cpu className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-white font-black uppercase text-sm tracking-wide">2. Process</h3>
                                <p className="text-slate-400 text-sm mt-1">Cloud Functions & AI calculate Risk Scores, check overlap constraints, and validate data.</p>
                            </div>
                        </motion.div>

                        <div className="flex justify-center -my-2 relative z-10">
                            <ArrowRight className="w-6 h-6 text-slate-600 rotate-90 lg:rotate-90" />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/5 border border-white/5 rounded-2xl p-6 flex items-center gap-6"
                        >
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                                <BellRing className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-white font-black uppercase text-sm tracking-wide">3. Output</h3>
                                <p className="text-slate-400 text-sm mt-1">Dashboard Alerts trigger, Logistics Notifications sent to mobile devices.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 3: Training Resources */}
            <section className="space-y-6">
                <div>
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight">Training Modules</h2>
                    <p className="text-slate-400 text-sm mt-1">Critical guides for the race operations team.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-[#0B1120]/50 border-white/5 backdrop-blur-xl rounded-[2rem] p-6 border-t-white/10 hover:border-[#E67E22]/50 transition-colors group cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-400 mb-4 group-hover:bg-[#E67E22] group-hover:text-white transition-colors">
                            <FileText className="w-6 h-6" />
                        </div>
                        <h3 className="text-white font-black uppercase text-sm tracking-wide mb-2">Mobile Check-In Guide</h3>
                        <p className="text-slate-500 text-xs mb-4 line-clamp-2">Step-by-step PDF guide for using the mobile kiosk at packet pickup.</p>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#E67E22] group-hover:underline">Download PDF &rarr;</span>
                    </Card>

                    <Card className="bg-[#0B1120]/50 border-white/5 backdrop-blur-xl rounded-[2rem] p-6 border-t-white/10 hover:border-[#E67E22]/50 transition-colors group cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-400 mb-4 group-hover:bg-[#E67E22] group-hover:text-white transition-colors">
                            <Video className="w-6 h-6" />
                        </div>
                        <h3 className="text-white font-black uppercase text-sm tracking-wide mb-2">Admin Command Center</h3>
                        <p className="text-slate-500 text-xs mb-4 line-clamp-2">Video walkthrough of the dashboard features, filters, and alert resolution.</p>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#E67E22] group-hover:underline">Watch Video &rarr;</span>
                    </Card>

                    <Card className="bg-[#0B1120]/50 border-white/5 backdrop-blur-xl rounded-[2rem] p-6 border-t-white/10 hover:border-[#E67E22]/50 transition-colors group cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-400 mb-4 group-hover:bg-[#E67E22] group-hover:text-white transition-colors">
                            <Siren className="w-6 h-6" />
                        </div>
                        <h3 className="text-white font-black uppercase text-sm tracking-wide mb-2">Emergency Protocols</h3>
                        <p className="text-slate-500 text-xs mb-4 line-clamp-2">Standard Operating Procedures (SOP) for medical and severe weather events.</p>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#E67E22] group-hover:underline">Read SOP &rarr;</span>
                    </Card>
                </div>
            </section>
        </div>
    );
}

function Clock({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    )
}

function Activity({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
    )
}
