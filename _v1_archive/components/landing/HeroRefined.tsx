"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState, useEffect } from "react";

// Glitch Text Component
const GlitchText = ({ text }: { text: string }) => {
    return (
        <span className="relative inline-block group">
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -ml-0.5 text-red-500 opacity-0 group-hover:opacity-100 animate-pulse">{text}</span>
            <span className="absolute top-0 left-0 ml-0.5 text-cyan-500 opacity-0 group-hover:opacity-100 animate-pulse delay-75">{text}</span>
        </span>
    );
};

// Typing Effect Component
const Typewriter = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = 0;
        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                setDisplayedText((prev) => text.slice(0, index + 1));
                index++;
                if (index === text.length) clearInterval(interval);
            }, 50);
            return () => clearInterval(interval);
        }, delay * 1000); // convert delay to ms

        return () => clearTimeout(timeout);
    }, [text, delay]);

    return <span className="font-mono text-teal-400">{displayedText}<span className="animate-pulse">_</span></span>;
};

export function HeroRefined() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-20">

            {/* 1. Cyber-Grid Background */}
            <div className="absolute inset-0 z-0 perspective-1000">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
                <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

                {/* Animated Beams */}
                <motion.div
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-teal-500/50 to-transparent"
                />
                <motion.div
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent"
                />
            </div>

            {/* 2. Content Layer */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-mono uppercase tracking-widest">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                        </span>
                        System Online: 6 Agents Ready
                    </div>
                </motion.div>

                <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-tight">
                    BUILD AI APPS<br />
                    <span className="text-teal-400 relative">
                        & WORKFLOWS
                    </span>
                </h1>

                <div className="h-16 md:h-12 mb-8 flex items-center justify-center">
                    <p className="text-lg md:text-xl text-slate-400 font-mono">
                        <span className="text-slate-600 mr-2">{">"}</span>
                        <Typewriter text="Save time and money by building agentic automation with uBuild." delay={0.5} />
                    </p>
                </div>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                >
                    <Link href="/start">
                        <Button className="h-16 px-10 text-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold tracking-wide uppercase clip-path-polygon hover:scale-105 transition-all shadow-[0_0_40px_rgba(20,184,166,0.5)]">
                            Start Building Now
                        </Button>
                    </Link>
                    <Link href="#demo">
                        <span className="text-sm font-mono text-slate-500 hover:text-teal-400 cursor-pointer underline decoration-slate-700 underline-offset-4 transition-colors">
                // VIEW_SYS_LOGS (DEMO)
                        </span>
                    </Link>
                </motion.div>

                {/* 3. Visual: Realistic Human & AI Interface */}
                <motion.div
                    className="mt-20 w-full max-w-5xl"
                    initial={{ opacity: 0, rotateX: 20, z: -100 }}
                    animate={{ opacity: 1, rotateX: 0, z: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <div className="relative rounded-2xl border border-slate-800 shadow-2xl overflow-hidden group">
                        {/* Subtle Glow effect (Reduced for realism) */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl" />

                        <div className="relative bg-slate-950 aspect-video overflow-hidden">
                            <img
                                src="/hero-human-ai.png"
                                alt="AI Sales Director Dashboard"
                                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000"
                            />

                            {/* Floating Interface Elements (Clean Glass Style) */}
                            <div className="absolute bottom-6 left-6 z-20">
                                <div className="bg-slate-950/70 backdrop-blur-md border border-slate-700/50 p-4 rounded-lg shadow-lg">
                                    <div className="flex items-center gap-3 mb-1">
                                        <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                                        <span className="text-xs text-teal-200 font-mono tracking-wider">LIVE REVENUE FEED</span>
                                    </div>
                                    <div className="text-2xl font-bold text-white">$142,050</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
