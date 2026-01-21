"use client";

import { motion } from "framer-motion";
import { Bot, LineChart, Mail, MessageSquare, Shield, Sparkles } from "lucide-react";

const features = [
    {
        title: "Sales Agent",
        desc: "Handles inbound chats & books meetings 24/7.",
        icon: MessageSquare,
        color: "from-blue-500 to-cyan-500",
        className: "md:col-span-2",
    },
    {
        title: "Lead Scoring",
        desc: "AI ranks leads by conversion probability.",
        icon: LineChart,
        color: "from-purple-500 to-pink-500",
        className: "md:col-span-1",
    },
    {
        title: "Content Gen",
        desc: "Creates LinkedIn posts & blogs on autopilot.",
        icon: Sparkles,
        color: "from-amber-400 to-orange-500",
        className: "md:col-span-1",
    },
    {
        title: "Email Pro",
        desc: "Drafts hyper-personalized outreach sequences.",
        icon: Mail,
        color: "from-emerald-400 to-teal-500",
        className: "md:col-span-2",
    },
    {
        title: "Intelligence",
        desc: "Deep research on prospects before you talk.",
        icon: Bot,
        color: "from-indigo-500 to-violet-500",
        className: "md:col-span-1",
    },
    {
        title: "Security Shield",
        desc: "Enterprise-grade data protection & compliance.",
        icon: Shield,
        color: "from-slate-500 to-slate-400",
        className: "md:col-span-2", // Full width on mobile, 2 cols on desktop if we had 3 cols
    },
];

export function BentoGrid() {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 opacity-50 z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Your <span className="text-gradient">Automated C-Suite</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Replace your expensive agency with a coordinated swarm of 6 specialized AI agents.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative group bg-slate-900/50 border border-slate-800 hover:border-slate-600 rounded-3xl p-8 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${feature.className}`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                                </div>

                                <div className="flex items-center text-sm font-medium text-slate-500 group-hover:text-white transition-colors">
                                    Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { ArrowRight } from "lucide-react"; // Import here to avoid conflict above
