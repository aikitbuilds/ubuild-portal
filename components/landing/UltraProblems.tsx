import Image from "next/image";
import { AlertTriangle, TrendingUp, Users } from "lucide-react";

export function UltraProblems() {
    return (
        <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-24 text-center">
                    <h2 className="font-montserrat text-4xl md:text-6xl font-bold uppercase tracking-wide mb-6">
                        The <span className="text-[#E67E22]">Admin Bonk</span>
                    </h2>
                    <p className="font-mono text-gray-400 text-lg max-w-3xl mx-auto">
                        You didn't sign up for spreadsheets. You signed up for suffering. Don't let logistics become the wall.
                    </p>
                </div>

                <div className="space-y-32">
                    {/* Feature 1: Race Directors (Text Left, Visual Right) */}
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center gap-3 text-[#E67E22] mb-2">
                                <AlertTriangle className="w-8 h-8" />
                                <span className="font-mono uppercase tracking-widest text-sm">For Race Directors</span>
                            </div>
                            <h3 className="font-montserrat text-3xl md:text-5xl font-bold uppercase leading-tight">
                                Stop DNF-ing on <br /><span className="text-gray-500">Paperwork.</span>
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed font-mono">
                                You started this race to build a community, not to wrestle with spreadsheets at 2 AM.
                                Manage permits, waivers, and volunteer assignments on autopilot.
                            </p>
                        </div>
                        <div className="flex-1 relative w-full h-[400px] bg-neutral-900/50 rounded-2xl border border-white/10 overflow-hidden group hover:border-[#E67E22]/50 transition-colors">
                            {/* Placeholder or specific chart for RDs */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Image
                                    src="/assets/images/course_map.png"
                                    alt="Course Map Data"
                                    fill
                                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur border border-white/20 px-4 py-2 rounded-lg text-xs font-mono text-[#E67E22]">
                                &gt; PERMITS: APPROVED
                            </div>
                        </div>
                    </div>

                    {/* Feature 2: Athletes (Visual Left, Text Right) */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center gap-3 text-[#E67E22] mb-2">
                                <TrendingUp className="w-8 h-8" />
                                <span className="font-mono uppercase tracking-widest text-sm">For Athletes</span>
                            </div>
                            <h3 className="font-montserrat text-3xl md:text-5xl font-bold uppercase leading-tight">
                                Training is <br /><span className="text-gray-500">Hard Enough.</span>
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed font-mono">
                                Don't let logistics become the wall. Let AI handle your crew coordination, fundraising, and travel so you can focus on the stride.
                            </p>
                        </div>
                        <div className="flex-1 relative w-full h-[400px] bg-neutral-900/50 rounded-2xl border border-white/10 overflow-hidden group hover:border-[#E67E22]/50 transition-colors">
                            <Image
                                src="/assets/images/pain_cave.png"
                                alt="Athlete in the Pain Cave"
                                fill
                                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                            />
                            <div className="absolute top-6 right-6 bg-black/80 backdrop-blur border border-white/20 px-4 py-2 rounded-lg text-xs font-mono text-white">
                                &gt; CREW: READY
                            </div>
                        </div>
                    </div>

                    {/* Feature 3: Sponsors (Text Left, Visual Right) */}
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center gap-3 text-[#E67E22] mb-2">
                                <Users className="w-8 h-8" />
                                <span className="font-mono uppercase tracking-widest text-sm">For Sponsors</span>
                            </div>
                            <h3 className="font-montserrat text-3xl md:text-5xl font-bold uppercase leading-tight">
                                Real Connection, <br /><span className="text-gray-500">Not Just Logos.</span>
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed font-mono">
                                Stop shouting into the void. Connect authentically with athletes who bleed for the sport and the communities that support them.
                            </p>
                        </div>
                        <div className="flex-1 relative w-full h-[400px] bg-neutral-900/50 rounded-2xl border border-white/10 overflow-hidden group hover:border-[#E67E22]/50 transition-colors">
                            <Image
                                src="/assets/images/community_bonfire.png"
                                alt="Community Bonfire Connection"
                                fill
                                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
