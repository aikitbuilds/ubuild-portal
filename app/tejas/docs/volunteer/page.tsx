"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft, FileText, CheckCircle2, AlertTriangle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VolunteerTestingGuidePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans pb-20">
            <nav className="p-8 sticky top-0 bg-slate-950/80 backdrop-blur-md z-50 border-b border-white/5">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <Link href="/tejas" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs font-bold uppercase tracking-widest">Back to Hub</span>
                    </Link>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF8C00]">Field Guide v1.0</div>
                </div>
            </nav>

            <article className="max-w-3xl mx-auto px-6 pt-20 space-y-12">
                <header className="space-y-4">
                    <div className="p-3 w-fit rounded-2xl bg-[#FF8C00]/10 border border-[#FF8C00]/20">
                        <FileText className="w-8 h-8 text-[#FF8C00]" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white">Volunteer Field <br />Testing Guide</h1>
                    <p className="text-xl text-slate-400 font-medium leading-relaxed">
                        Rocky Raccoon 100 Pilot Program (Jan 24-25). Thank you for helping us stress-test the new digital check-in system.
                    </p>
                </header>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-tight text-white flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs">1</div>
                        Quick Access
                    </h2>
                    <div className="p-8 rounded-[2rem] bg-slate-900 border border-white/10 space-y-6">
                        <p className="text-slate-400 font-medium">To begin testing, navigate to the following URL on your mobile device:</p>
                        <div className="p-4 bg-black rounded-xl border border-emerald-500/30 text-emerald-400 font-mono text-sm break-all">
                            https://tejas.ubuild.pro/tejas/checkin
                        </div>
                        <div className="p-6 bg-[#FF8C00]/5 border border-[#FF8C00]/20 rounded-2xl flex gap-4">
                            <Info className="w-6 h-6 text-[#FF8C00] shrink-0" />
                            <p className="text-sm text-slate-300 italic">
                                Note: You may also scan the QR code located at the Volunteer Lead station.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-tight text-white flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs">2</div>
                        Test Script
                    </h2>
                    <div className="space-y-4">
                        {[
                            { step: "Search", desc: "Type your full name into the search bar.", expect: "Your name should appear within 1-2 seconds." },
                            { step: "Verify", desc: "Click on your name.", expect: "Your station (e.g., Dam Nation) and role should be displayed correctly." },
                            { step: "Check-In", desc: 'Tap the "Confirm & Check In" button.', expect: 'A "Successfully checked in" toast message should appear.' }
                        ].map((s, i) => (
                            <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-[#FF8C00]" />
                                    <span className="font-black uppercase tracking-tight text-white">{s.step}</span>
                                </div>
                                <p className="text-slate-400 text-sm">{s.desc}</p>
                                <div className="text-[10px] font-black uppercase tracking-widest text-[#FF8C00]">Expected Result: {s.expect}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black uppercase tracking-tight text-white flex items-center gap-3">
                        <AlertTriangle className="w-6 h-6 text-[#FF8C00]" />
                        Stress Test (The "Break-it" List)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Double Tapping repeatedly",
                            "Search while walking away (Bad Signal)",
                            "Rapidly entering/leaving name search",
                            "Checking in again after success"
                        ].map((t, i) => (
                            <div key={i} className="p-6 bg-red-500/5 border border-red-500/10 rounded-2xl text-slate-400 text-sm font-medium">
                                • {t}
                            </div>
                        ))}
                    </div>
                </section>

                <footer className="pt-20 border-t border-white/5 text-center space-y-6">
                    <h3 className="text-xl font-black uppercase tracking-tight">Need Help?</h3>
                    <p className="text-slate-500 text-sm max-w-sm mx-auto">Contact Race Ops immediately or find your nearest Lead Volunteer if you experience any network errors.</p>
                    <Button onClick={() => router.push("/tejas/checkin")} className="bg-[#FF8C00] hover:bg-[#E67E00] text-black font-black uppercase rounded-xl h-14 px-8">
                        Launch Check-In Portal Now
                    </Button>
                </footer>
            </article>
        </div>
    );
}
