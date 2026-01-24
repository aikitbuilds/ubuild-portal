import Image from "next/image";
import { Mountain, Quote } from "lucide-react";

export function UltraCredibility() {
    return (
        <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Visual: Gritty Legs */}
                    <div className="w-full lg:w-1/2 relative h-[600px] rounded-2xl overflow-hidden group">
                        <Image
                            src="/assets/images/trail_runner_gritty.png"
                            alt="Muddy trail runner legs"
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-8 left-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/20 text-xs font-mono text-[#E67E22] mb-4">
                                <Mountain className="w-3 h-3" />
                                <span>ELEVATION: 24,000 FT</span>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2 relative space-y-8">
                        <Quote className="w-16 h-16 text-[#E67E22]/20 absolute -top-10 -left-10" />

                        <h2 className="font-montserrat text-4xl md:text-6xl font-bold leading-[0.9] uppercase">
                            Code Written by Legs That Have Run <span className="text-[#E67E22]">100 Miles</span>.
                        </h2>

                        <div className="space-y-6 font-mono text-gray-400 text-lg leading-relaxed">
                            <p>
                                We aren't Silicon Valley consultants guessing what endurance means. <span className="text-white font-bold">We are ultra runners.</span>
                            </p>
                            <p>
                                We know what it's like to be at Mile 80 with a stomach issue, a dead headlamp, and a missing drop bag. We know that the only way out is <span className="text-[#E67E22] italic">through</span>.
                            </p>
                            <p>
                                We built this software with the same grit required to buckle at Leadville or UTMB. No DNF. No excuses.
                            </p>
                        </div>

                        <div className="pt-8 border-t border-white/10 flex items-center gap-4">
                            <div className="flex -space-x-4">
                                {/* Mock avatars could go here, or just stats */}
                            </div>
                            <div className="font-mono text-sm text-[#E67E22]">
                                 // FOUNDER STATUS: ACTIVE RECOVERY
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
