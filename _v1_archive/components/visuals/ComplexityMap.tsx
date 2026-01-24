"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ComplexityMapProps {
    className?: string;
}

export function ComplexityMap({ className }: ComplexityMapProps) {
    return (
        <div className={cn("grid md:grid-cols-2 gap-8", className)}>
            {/* Chaos Side - Traditional Development */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative p-6 rounded-xl bg-slate-800/50 border border-red-500/30"
            >
                <h3 className="text-lg font-semibold text-red-400 mb-4 flex items-center gap-2">
                    <span className="text-2xl">⚠️</span> Traditional Development
                </h3>

                {/* Chaos SVG */}
                <svg
                    viewBox="0 0 200 150"
                    className="w-full h-auto"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Messy, chaotic lines */}
                    <motion.path
                        d="M20 20 Q60 80 40 120 T80 90 Q120 40 100 100 T140 60"
                        stroke="#ef4444"
                        strokeWidth="2"
                        fill="none"
                        strokeOpacity="0.6"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                    />
                    <motion.path
                        d="M30 120 Q90 30 60 80 T120 40 Q180 100 150 60"
                        stroke="#f97316"
                        strokeWidth="2"
                        fill="none"
                        strokeOpacity="0.5"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.4 }}
                    />
                    <motion.path
                        d="M180 20 Q100 100 140 40 T60 110 Q20 60 80 30"
                        stroke="#fbbf24"
                        strokeWidth="2"
                        fill="none"
                        strokeOpacity="0.5"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.6 }}
                    />
                    <motion.path
                        d="M10 80 Q50 20 90 90 T150 30 Q180 80 160 120"
                        stroke="#dc2626"
                        strokeWidth="2"
                        fill="none"
                        strokeOpacity="0.4"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                    />

                    {/* Scattered nodes */}
                    {[
                        { x: 30, y: 40 },
                        { x: 80, y: 100 },
                        { x: 120, y: 30 },
                        { x: 60, y: 70 },
                        { x: 150, y: 80 },
                        { x: 100, y: 120 },
                        { x: 170, y: 50 },
                    ].map((pos, i) => (
                        <motion.circle
                            key={i}
                            cx={pos.x}
                            cy={pos.y}
                            r="6"
                            fill="#ef4444"
                            fillOpacity="0.6"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                        />
                    ))}
                </svg>

                <ul className="mt-4 space-y-2 text-sm text-slate-400">
                    <li className="flex items-center gap-2">
                        <span className="text-red-400">✗</span> Multiple vendors to manage
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-red-400">✗</span> Disconnected tools
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-red-400">✗</span> Manual coordination
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-red-400">✗</span> 3-6 month timelines
                    </li>
                </ul>
            </motion.div>

            {/* Order Side - uBuild */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative p-6 rounded-xl bg-slate-800/50 border border-primary/30"
            >
                <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                    <span className="text-2xl">✨</span> uBuild Intelligence
                </h3>

                {/* Order SVG */}
                <svg
                    viewBox="0 0 200 150"
                    className="w-full h-auto"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Gradient definition */}
                    <defs>
                        <linearGradient id="teal-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
                            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.8" />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Clean, straight lines connecting nodes */}
                    <motion.path
                        d="M30 75 L60 75 L90 45 L130 45 L170 75"
                        stroke="url(#teal-glow)"
                        strokeWidth="3"
                        fill="none"
                        filter="url(#glow)"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    />
                    <motion.path
                        d="M30 75 L60 75 L90 105 L130 105 L170 75"
                        stroke="url(#teal-glow)"
                        strokeWidth="3"
                        fill="none"
                        filter="url(#glow)"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    />
                    <motion.path
                        d="M60 75 L90 75 L130 75 L170 75"
                        stroke="url(#teal-glow)"
                        strokeWidth="3"
                        fill="none"
                        filter="url(#glow)"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    />

                    {/* Clean nodes with glow */}
                    {[
                        { x: 30, y: 75, label: "Idea" },
                        { x: 60, y: 75, label: "" },
                        { x: 90, y: 45, label: "" },
                        { x: 90, y: 75, label: "" },
                        { x: 90, y: 105, label: "" },
                        { x: 130, y: 45, label: "" },
                        { x: 130, y: 75, label: "" },
                        { x: 130, y: 105, label: "" },
                        { x: 170, y: 75, label: "MVP" },
                    ].map((pos, i) => (
                        <motion.g key={i}>
                            <motion.circle
                                cx={pos.x}
                                cy={pos.y}
                                r="8"
                                fill="#14b8a6"
                                filter="url(#glow)"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.3, delay: 1 + i * 0.08 }}
                            />
                            {pos.label && (
                                <motion.text
                                    x={pos.x}
                                    y={pos.y + 25}
                                    textAnchor="middle"
                                    fill="#14b8a6"
                                    fontSize="10"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 1.5 }}
                                >
                                    {pos.label}
                                </motion.text>
                            )}
                        </motion.g>
                    ))}
                </svg>

                <ul className="mt-4 space-y-2 text-sm text-slate-400">
                    <li className="flex items-center gap-2">
                        <span className="text-primary">✓</span> Single unified system
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-primary">✓</span> 6 coordinated AI agents
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-primary">✓</span> Automated orchestration
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-primary">✓</span> 4-week deployment
                    </li>
                </ul>
            </motion.div>
        </div>
    );
}
