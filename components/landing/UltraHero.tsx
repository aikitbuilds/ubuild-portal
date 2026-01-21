import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";

export function UltraHero() {
    return (
        <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/images/hero_ultra.png"
                    alt="Ultra runner at 3AM"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                <div className="absolute inset-0 bg-[#2C3E50]/30 mix-blend-overlay" />
            </div>

            {/* Minimalist Overlay */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mr-auto">

                    {/* Content */}
                    <div className="relative z-10 space-y-6">
                        {/* Terminal Label - Kept minimal */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/20 text-xs font-mono text-[#E67E22] mb-4">
                            <Terminal className="w-3 h-3" />
                            <span>SYS.STATUS: ONLINE // MILE 80</span>
                        </div>

                        <h1 className="font-montserrat text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9] drop-shadow-2xl">
                            The Operating System <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">For Ultra Racing.</span>
                        </h1>

                        <p className="font-mono text-xl md:text-2xl text-gray-100 max-w-xl leading-relaxed font-semibold drop-shadow-md">
                            AI-first software built by <span className="text-[#E67E22]">ultra athletes</span>.
                            We handle operations, analytics, and logistics so you can focus on the race experience.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-4">
                            <a href="https://ucrew.pro/races/rocky-raccoon-100" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="bg-[#E67E22] hover:bg-[#D35400] text-white border-0 font-bold uppercase tracking-wider px-10 h-16 text-xl w-full sm:w-auto shadow-lg hover:shadow-[#E67E22]/50 transition-all">
                                    Featured Race: Rocky Raccoon 100
                                </Button>
                            </a>
                            <Link href="https://ucrew.pro/demo">
                                <Button variant="outline" size="lg" className="border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono uppercase tracking-wider h-16 w-full sm:w-auto group text-lg backdrop-blur-sm">
                                    Request Operations Demo
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>

                        {/* HUD Footer Data - Minimal & Floating */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-12 font-mono text-sm text-gray-400">
                            <div className="border-l-2 border-[#E67E22] pl-4">
                                <span className="block text-gray-400 mb-1 text-xs tracking-wider uppercase">ELEVATION</span>
                                <span className="text-white text-2xl md:text-3xl font-bold">12,400 FT</span>
                            </div>
                            <div className="border-l-2 border-white/20 pl-4">
                                <span className="block text-gray-400 mb-1 text-xs tracking-wider uppercase">PACE</span>
                                <span className="text-white text-2xl md:text-3xl font-bold">OPTIMIZED</span>
                            </div>
                            <div className="border-l-2 border-white/20 pl-4">
                                <span className="block text-gray-400 mb-1 text-xs tracking-wider uppercase">CREW</span>
                                <span className="text-[#E67E22] text-2xl md:text-3xl font-bold">AI ACTIVE</span>
                            </div>
                            <div className="border-l-2 border-white/20 pl-4">
                                <span className="block text-gray-400 mb-1 text-xs tracking-wider uppercase">BATTERY</span>
                                <span className="text-white text-2xl md:text-3xl font-bold text-green-400">100%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

