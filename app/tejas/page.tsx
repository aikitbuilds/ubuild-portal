"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth/context";
import {
    LayoutDashboard,
    UserCheck,
    ArrowRight,
    ShieldCheck,
    Network,
    Zap,
    Brain,
    MessageSquare,
    CheckCircle2,
    Users,
    FileText,
    ExternalLink,
    ChevronRight,
    Search
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

export default function TejasOSHub() {
    const { signInWithGoogle, signInAsDemo, user } = useAuth();
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState<"google" | "demo" | null>(null);
    const [activePersona, setActivePersona] = React.useState(0);

    const handleAction = async (action: () => Promise<void>, type: "google" | "demo") => {
        setIsLoading(type);
        try {
            await action();
        } catch (error: any) {
            toast.error("Access Denied", {
                description: error.message || "Please contact Dave for authorization."
            });
        } finally {
            setIsLoading(null);
        }
    };

    const personas = [
        {
            title: "The Volunteer",
            need: "I want to check in instantly and track my credits.",
            solution: "Mobile Check-in & Personal Ledger",
            icon: <UserCheck className="w-6 h-6 text-[#FF8C00]" />,
            details: "Eliminate paper rosters. Volunteers use their own devices for instant check-in, reducing queue times by 80%."
        },
        {
            title: "The Racer",
            need: "I want live tracking and interactive maps.",
            solution: "Athlete Dashboard & Digital Maps",
            icon: <Users className="w-6 h-6 text-[#FF8C00]" />,
            details: "Real-time position updates and mobile-optimized interactive course maps directly in the palm of their hand."
        },
        {
            title: "The Vendor",
            need: "I want to see my ROI and logistics.",
            solution: "Partner Portal & Impression Tracking",
            icon: <Network className="w-6 h-6 text-[#FF8C00]" />,
            details: "Data-backed proof of sponsorship impact, tracking impressions and engagement minutes at every aid station."
        }
    ];

    const modules = [
        {
            title: "Real-Time Ops",
            desc: "Live tracking of 70+ volunteers and station health.",
            icon: <Zap className="w-5 h-5 text-[#FF8C00]" />
        },
        {
            title: "Intelligence Layer",
            desc: "Predictive algorithms for no-shows and supply gaps.",
            icon: <Brain className="w-5 h-5 text-[#FF8C00]" />
        },
        {
            title: "Communication Hub",
            desc: "Centralized alerts for crews and staff.",
            icon: <MessageSquare className="w-5 h-5 text-[#FF8C00]" />
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white selection:bg-[#FF8C00]/30 selection:text-white pb-20 overflow-x-hidden font-sans">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#FF8C0015_0%,_transparent_50%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Navbar */}
            <nav className="relative z-50 px-6 py-8 flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex items-center gap-4">
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/f5fece5c-753d-44b5-8371-44d5d5c8223c/TTLogo+%28Full+Color+.9%29_Transparent.png?format=1500w"
                        alt="Tejas Trails"
                        className="h-10 w-auto"
                    />
                    <div className="h-6 w-px bg-white/10 hidden md:block" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF8C00] hidden md:block">Operations Console</span>
                </div>
                <div className="flex items-center gap-6">
                    <Link href="#docs" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Documentation</Link>
                    <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        System Online
                    </div>
                </div>
            </nav>

            {/* 1. Hero Section */}
            <section className="relative z-20 pt-20 pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-[#FF8C00]" />
                        TejasOS Version 2.0 Now in Production Beta
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight leading-[0.85] max-w-4xl mx-auto">
                        Race Operations <br /> <span className="text-[#FF8C00]">Intelligence.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
                        Unified command for Volunteers, Logistics, and Race Data.
                        Built for the toughest trails in Texas.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                        <Button
                            onClick={() => handleAction(signInWithGoogle, "google")}
                            className="h-16 px-8 bg-[#FF8C00] hover:bg-[#E67E00] text-black font-black text-lg uppercase tracking-tight rounded-2xl group shadow-[0_0_30px_-5px_#FF8C0050]"
                            disabled={!!isLoading}
                        >
                            Admin Command Center
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            onClick={() => router.push("/tejas/checkin")}
                            variant="outline"
                            className="h-16 px-8 border-white/20 hover:bg-white/5 text-white font-black text-lg uppercase tracking-tight rounded-2xl"
                        >
                            Volunteer Mobile Check-In
                        </Button>
                    </div>
                </motion.div>
            </section>

            {/* 2. System Map */}
            <section className="relative z-20 py-32 px-6 bg-slate-900/50 border-y border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-black uppercase tracking-tight">The "What's Inside" <br />System Map</h2>
                            <p className="text-slate-400 font-medium leading-relaxed">
                                TejasOS is an integrated ecosystem designed to eliminate the reliance on tribal knowledge and fragmented spreadsheets.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {modules.map((mod, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 10 }}
                                    className="p-6 rounded-3xl bg-white/5 border border-white/10 flex gap-4 items-start"
                                >
                                    <div className="p-3 rounded-2xl bg-[#FF8C00]/10 border border-[#FF8C00]/20">
                                        {mod.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-black uppercase tracking-tight text-lg">{mod.title}</h3>
                                        <p className="text-sm text-slate-400 font-medium">{mod.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="relative aspect-auto bg-slate-800 rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl group">
                            <img
                                src="/images/tejas/tejasOS-ecosystem-overview.png"
                                alt="Ecosystem Overview"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200";
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                            <div className="absolute bottom-10 left-10 space-y-2">
                                <div className="text-[10px] font-black uppercase tracking-widest text-[#FF8C00]">System Architecture</div>
                                <div className="text-2xl font-black uppercase tracking-tight">Ecosystem Topology v2.0</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. User Stories & Personas */}
            <section className="relative z-20 py-32 px-6 max-w-7xl mx-auto">
                <div className="text-center space-y-4 mb-20">
                    <h2 className="text-5xl font-black uppercase tracking-tight">Designed for the Field</h2>
                    <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
                        TejasOS solves the unique pain points of race weekend for every participant.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {personas.map((p, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className={`p-10 rounded-[2.5rem] border transition-all duration-500 ${activePersona === i
                                    ? "bg-white/10 border-[#FF8C00] shadow-[0_30px_60px_-12px_#FF8C0020]"
                                    : "bg-white/5 border-white/10"
                                }`}
                            onMouseEnter={() => setActivePersona(i)}
                        >
                            <div className="space-y-8">
                                <div className="flex items-center justify-between">
                                    <div className="p-4 rounded-3xl bg-white/5 border border-white/10">
                                        {p.icon}
                                    </div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Core Persona {i + 1}</div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black uppercase tracking-tight">{p.title}</h3>
                                    <div className="p-4 rounded-2xl bg-white/5 italic text-sm text-slate-300 font-medium border-l-2 border-[#FF8C00]">
                                        "{p.need}"
                                    </div>
                                    <p className="text-sm text-slate-400 font-medium leading-relaxed">
                                        <strong className="text-white block mb-1">Solution: {p.solution}</strong>
                                        {p.details}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 4. Documentation Center */}
            <section id="docs" className="relative z-20 py-32 px-6 bg-[#FF8C00] text-black">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4 text-black">
                            <h2 className="text-5xl font-black uppercase tracking-tight">How-To Hub</h2>
                            <p className="text-black/80 font-black text-xl leading-relaxed uppercase tracking-tight">
                                Get started with the TejasOS platform. Everything you need for deployment and Field OPS.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            {[
                                { title: "Volunteer Testing Guide", path: "/tejas/docs/volunteer", type: "Guide" },
                                { title: "Google Sheets Sync Setup", path: "/tejas/docs/setup", type: "Admin" },
                                { title: "Race Day Protocols", path: "#", type: "PDF" }
                            ].map((doc, i) => (
                                <Link
                                    key={i}
                                    href={doc.path}
                                    className="p-6 bg-black rounded-3xl flex items-center justify-between group hover:translate-x-4 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-[#FF8C00] transition-colors">
                                            <FileText className={`w-5 h-5 ${i === 2 ? "text-slate-500" : "text-white"} group-hover:text-black`} />
                                        </div>
                                        <div>
                                            <span className="text-xs font-black uppercase tracking-widest text-[#FF8C00]">{doc.type}</span>
                                            <h4 className="text-white font-black uppercase tracking-tight group-hover:text-white transition-colors">{doc.title}</h4>
                                        </div>
                                    </div>
                                    <ChevronRight className="w-6 h-6 text-white/20 group-hover:text-white transition-colors" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="p-12 rounded-[3rem] bg-black text-white relative overflow-hidden group">
                        <div className="relative z-10 space-y-6">
                            <div className="w-12 h-12 rounded-2xl bg-[#FF8C00] flex items-center justify-center">
                                <ShieldCheck className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-3xl font-black uppercase tracking-tight">Administrative Readiness</h3>
                            <p className="text-slate-400 font-medium">
                                Before opening the Command Center, ensure all environmental keys and service accounts are validated according to the Setup Guide.
                            </p>
                            <Button className="w-full h-14 bg-white hover:bg-slate-100 text-black font-black uppercase tracking-tight rounded-2xl">
                                System Status: Operational
                            </Button>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF8C00]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    </div>
                </div>
            </section>

            {/* 5. Impact Metrics */}
            <section className="relative z-20 pt-40 px-6 max-w-7xl mx-auto">
                <div className="bg-slate-900 border border-white/5 rounded-[4rem] p-12 md:p-24 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <Zap className="w-64 h-64 text-[#FF8C00]" />
                    </div>

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                        {[
                            { val: "0%", sub: "Volunteer No-Shows", desc: "Digital verification replaces manual trust." },
                            { val: "90%", sub: "Faster Response", desc: "Instant triage of station requirements." },
                            { val: "100%", sub: "Data Accountability", desc: "Every check-in and alert timestamped." }
                        ].map((stat, i) => (
                            <div key={i} className="space-y-4">
                                <div className="text-7xl font-black text-[#FF8C00] tracking-tighter">{stat.val}</div>
                                <div className="text-xl font-black uppercase tracking-tight text-white">{stat.sub}</div>
                                <p className="text-slate-500 font-medium">{stat.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="relative z-10 mt-20 pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-6">
                            <div className="text-left">
                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-1">Target Outcomes</div>
                                <div className="text-2xl font-black uppercase tracking-tight">Projected Operational Impact</div>
                            </div>
                        </div>
                        <Button
                            variant="link"
                            className="text-[#FF8C00] font-black uppercase tracking-widest text-xs group"
                        >
                            View Efficiency Report
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative z-20 py-40 px-6 text-center space-y-8">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Ready to Command?</h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                        onClick={() => handleAction(signInWithGoogle, "google")}
                        className="h-16 px-12 bg-white hover:bg-slate-100 text-black font-black text-lg uppercase tracking-tight rounded-2xl"
                    >
                        Enter Admin Console
                    </Button>
                    <Link href="https://ubuild.pro" className="text-slate-500 hover:text-[#FF8C00] font-bold uppercase tracking-widest text-xs">
                        Developed by uBuild.pro
                    </Link>
                </div>
            </section>

        </div>
    );
}
