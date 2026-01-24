import Image from "next/image";
import { Activity, Heart, Database, Share2 } from "lucide-react";

export function EcosystemHub() {
    return (
        <section className="py-24 bg-[#0D1217] border-y border-white/5 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-[#E67E22]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[#E67E22] font-mono text-sm tracking-widest uppercase mb-2 block">The Unified Platform</span>
                    <h2 className="font-montserrat text-3xl md:text-5xl font-bold text-white mb-6">
                        One OS for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E67E22] to-orange-400">Entire Race World</span>
                    </h2>
                    <p className="font-mono text-gray-400 max-w-2xl mx-auto text-lg">
                        uBuild isn't just a dashboard. It's the central nervous system connecting your operations to the community and charitable impact.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Diagram Column */}
                    <div className="relative">
                        <div className="relative aspect-square max-w-lg mx-auto">
                            {/* Glow behind image */}
                            <div className="absolute inset-0 bg-[#E67E22]/20 blur-3xl rounded-full" />
                            <Image
                                src="/assets/images/ubuild_ecosystem.png"
                                alt="uBuild Ecosystem Diagram"
                                fill
                                className="object-contain relative z-10"
                            />
                        </div>
                    </div>

                    {/* Features Column */}
                    <div className="space-y-8">
                        {/* uCrew Node */}
                        <div className="flex gap-4 p-6 bg-white/5 rounded-xl border border-white/5 hover:border-[#E67E22]/30 transition-colors group">
                            <div className="mt-1">
                                <Activity className="w-8 h-8 text-[#E67E22] group-hover:scale-110 transition-transform" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Connected Community (uCrew)</h3>
                                <p className="text-gray-400 font-mono text-sm">
                                    Sync volunteer shifts and pacer duties directly to the runner's community profile. No more spreadhseets for aid station captains.
                                </p>
                            </div>
                        </div>

                        {/* uGive Node */}
                        <div className="flex gap-4 p-6 bg-white/5 rounded-xl border border-white/5 hover:border-[#E67E22]/30 transition-colors group">
                            <div className="mt-1">
                                <Heart className="w-8 h-8 text-[#E67E22] group-hover:scale-110 transition-transform" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Impact Integration (uGive)</h3>
                                <p className="text-gray-400 font-mono text-sm">
                                    Automate bib transfers to charity donations. Every mile run powers a greater cause, tracked in real-time.
                                </p>
                            </div>
                        </div>

                        {/* Data Node */}
                        <div className="flex gap-4 p-6 bg-white/5 rounded-xl border border-white/5 hover:border-[#E67E22]/30 transition-colors group">
                            <div className="mt-1">
                                <Database className="w-8 h-8 text-[#E67E22] group-hover:scale-110 transition-transform" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Hard Data (GPS Sync)</h3>
                                <p className="text-gray-400 font-mono text-sm">
                                    Direct API integrations with Strava & Garmin. We validate "verified finishes" automatically—no manual result uploading.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
