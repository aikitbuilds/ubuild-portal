import Image from "next/image";
import {
    Zap,
    LayoutDashboard,
    Brain,
    Compass,
    MessageSquareQuote,
    Activity
} from "lucide-react";

const AGENTS = [
    {
        name: "The Pacer",
        role: "Sales Agent",
        description: "Keeps your leads moving forward, 24/7. Never gets tired. Never misses a split.",
        icon: Zap,
    },
    {
        name: "The Crew Chief",
        role: "Orchestrator",
        description: "Manages the chaos. Directs traffic, ensures nothing gets dropped, keeps the whole team moving.",
        icon: LayoutDashboard,
    },
    {
        name: "Course Nav",
        role: "Intelligence",
        description: "Analyzes the data (weather, terrain, donor trends) to keep you on the marked trail.",
        icon: Compass,
    },
    {
        name: "The Sherpa",
        role: "Coach Agent",
        description: "Carries the mental load. Onboards new users (or runners) with patience and precision.",
        icon: Activity, // Using Activity as a proxy for 'Sherpa/Support' or Backpack if available (not standard Lucide)
    },
    {
        name: "Aid Station",
        role: "Support Bot",
        description: "Refuels your users with instant answers. No waiting for a drop bag that isn't there.",
        icon: MessageSquareQuote,
    },
    {
        name: "Race Logic",
        role: "Backend Ops",
        description: "The hidden engine. Processes payments, waivers, and data while you sleep.",
        icon: Brain,
    }
];

export function UltraAgents() {
    return (
        <section id="agents" className="py-24 bg-[#0D1217] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-[#E67E22] font-mono text-sm tracking-widest uppercase">The Digital Crew</span>
                    <h2 className="font-montserrat text-3xl md:text-5xl font-bold mt-2">
                        Meet Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E67E22] to-orange-400">Support Team</span>
                    </h2>
                    <p className="font-mono text-gray-400 mt-4 max-w-2xl mx-auto">
                        Six specialized agents working in perfect sync to ensure you never DNF on your business goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    {AGENTS.map((agent) => (
                        <div key={agent.name} className="bg-[#2C3E50]/20 border border-white/5 p-6 rounded-xl hover:border-[#E67E22]/50 transition-all group">
                            <div className="w-12 h-12 bg-[#2C3E50]/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#E67E22] transition-colors">
                                <agent.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-montserrat text-xl font-bold text-white mb-1">{agent.name}</h3>
                            <p className="text-xs text-[#E67E22] font-mono mb-3 uppercase tracking-wider">{agent.role}</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {agent.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Dashboard Preview Section */}
                <div className="relative rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-[#E67E22]/10 mix-blend-overlay pointer-events-none"></div>
                    <Image
                        src="/assets/images/dashboard_preview.png"
                        alt="uBuild Command Center"
                        width={1200}
                        height={800}
                        className="w-full h-auto object-cover opacity-90"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#0a0a0a] to-transparent h-32"></div>
                    <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12">
                        <h3 className="font-montserrat text-2xl md:text-4xl font-bold text-white mb-2">Command Center V2.0</h3>
                        <p className="text-[#E67E22] font-mono">&gt; REAL-TIME RACE OPERATIONS</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
