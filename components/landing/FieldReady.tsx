import Image from "next/image";
import { CheckCircle2, WifiOff, Battery, ShieldCheck } from "lucide-react";

export function FieldReady() {
    return (
        <section className="w-full py-24 bg-[#0a0a0a] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image Column */}
                    <div className="w-full lg:w-3/5 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                            <div className="absolute inset-0 bg-[#E67E22]/10 mix-blend-overlay z-10 pointer-events-none" />
                            <Image
                                src="/assets/images/aid_station_tablet.png"
                                alt="Rugged tablet at muddy aid station"
                                width={1200}
                                height={900}
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Overlay Badge */}
                            <div className="absolute bottom-6 left-6 z-20 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-4">
                                <div className="p-2 bg-[#E67E22]/20 rounded-lg">
                                    <WifiOff className="w-6 h-6 text-[#E67E22]" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-mono uppercase">Connectivity</p>
                                    <p className="text-white font-bold">OFFLINE MODE ACTIVE</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="w-full lg:w-2/5 space-y-8">
                        <div>
                            <span className="text-[#E67E22] font-mono text-sm tracking-widest uppercase mb-2 block">Built for the Elements</span>
                            <h2 className="font-montserrat text-3xl md:text-5xl font-bold text-white mb-6 uppercase leading-tight">
                                Field Tested. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E67E22] to-orange-400">Race Ready.</span>
                            </h2>
                            <p className="font-mono text-gray-400 text-lg">
                                Your operations shouldn't stop just because the wifi does. uBuild is designed for the remote, muddy, chaotic reality of race day.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-[#E67E22]/30 transition-colors">
                                <Battery className="w-6 h-6 text-[#E67E22] mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-white mb-1">Low Power Architecture</h4>
                                    <p className="text-sm text-gray-400">Run your entire ops dashboard on minimal battery for 30+ hours.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-[#E67E22]/30 transition-colors">
                                <ShieldCheck className="w-6 h-6 text-[#E67E22] mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-white mb-1">Fail-Safe Sync</h4>
                                    <p className="text-sm text-gray-400">Local-first data storage syncs automatically when signal returns. No lost times.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <p className="font-mono text-xs text-gray-500">
                                // TRUSTED BY RACES WHERE DNF IS NOT AN OPTION
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
