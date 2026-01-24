"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AgentSwarmProps {
    className?: string;
}

// The 6 agents from ubuild-deploy.md
const agents = [
    { id: "sales", label: "Sales", icon: "💬", angle: 0, color: "#14b8a6" },
    { id: "qual", label: "Qualifier", icon: "🎯", angle: 60, color: "#22d3ee" },
    { id: "content", label: "Content", icon: "✍️", angle: 120, color: "#14b8a6" },
    { id: "email", label: "Email", icon: "📧", angle: 180, color: "#22d3ee" },
    { id: "intel", label: "Intel", icon: "🔍", angle: 240, color: "#14b8a6" },
    { id: "coach", label: "Coach", icon: "🎓", angle: 300, color: "#22d3ee" },
];

export function AgentSwarm({ className }: AgentSwarmProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const centerX = 200;
    const centerY = 200;
    const radius = 140;

    // Calculate satellite positions
    const getPosition = (angle: number) => {
        const rad = (angle - 90) * (Math.PI / 180);
        return {
            x: centerX + radius * Math.cos(rad),
            y: centerY + radius * Math.sin(rad),
        };
    };

    return (
        <div className={cn("relative w-full max-w-lg mx-auto", className)}>
            <svg
                viewBox="0 0 400 400"
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Definitions */}
                <defs>
                    {/* Glow filter */}
                    <filter id="glow-center" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    {/* Subtle glow for satellites */}
                    <filter id="glow-satellite" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    {/* Gradient for center orb */}
                    <radialGradient id="center-gradient" cx="50%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#5eead4" />
                        <stop offset="50%" stopColor="#14b8a6" />
                        <stop offset="100%" stopColor="#0d9488" />
                    </radialGradient>

                    {/* Data packet gradient */}
                    <linearGradient id="packet-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#14b8a6" stopOpacity="0" />
                        <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
                        <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* Connection lines from satellites to center */}
                {agents.map((agent) => {
                    const pos = getPosition(agent.angle);
                    return (
                        <motion.line
                            key={`line-${agent.id}`}
                            x1={pos.x}
                            y1={pos.y}
                            x2={centerX}
                            y2={centerY}
                            stroke="#334155"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: mounted ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        />
                    );
                })}

                {/* Animated data packets traveling to center */}
                {mounted && agents.map((agent, i) => {
                    const pos = getPosition(agent.angle);
                    return (
                        <motion.circle
                            key={`packet-${agent.id}`}
                            r="4"
                            fill={agent.color}
                            filter="url(#glow-satellite)"
                            initial={{ cx: pos.x, cy: pos.y }}
                            animate={{
                                cx: [pos.x, centerX],
                                cy: [pos.y, centerY],
                            }}
                            transition={{
                                duration: 2,
                                delay: i * 0.3,
                                repeat: Infinity,
                                repeatDelay: 1,
                                ease: "easeInOut",
                            }}
                        />
                    );
                })}

                {/* Satellite nodes */}
                {agents.map((agent, i) => {
                    const pos = getPosition(agent.angle);
                    return (
                        <motion.g
                            key={agent.id}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: mounted ? 1 : 0, opacity: mounted ? 1 : 0 }}
                            transition={{ duration: 0.4, delay: 0.1 * i }}
                        >
                            {/* Outer ring */}
                            <circle
                                cx={pos.x}
                                cy={pos.y}
                                r="32"
                                fill="#0f172a"
                                stroke="#334155"
                                strokeWidth="1"
                            />
                            {/* Inner glow ring */}
                            <circle
                                cx={pos.x}
                                cy={pos.y}
                                r="28"
                                fill="none"
                                stroke={agent.color}
                                strokeWidth="1"
                                strokeOpacity="0.5"
                            />
                            {/* Icon */}
                            <text
                                x={pos.x}
                                y={pos.y - 2}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontSize="18"
                            >
                                {agent.icon}
                            </text>
                            {/* Label */}
                            <text
                                x={pos.x}
                                y={pos.y + 50}
                                textAnchor="middle"
                                fill="#94a3b8"
                                fontSize="11"
                                fontFamily="var(--font-geist-mono)"
                            >
                                {agent.label}
                            </text>
                        </motion.g>
                    );
                })}

                {/* Center orchestrator node */}
                <motion.g
                    initial={{ scale: 0 }}
                    animate={{ scale: mounted ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    {/* Pulsing outer ring */}
                    <motion.circle
                        cx={centerX}
                        cy={centerY}
                        r="55"
                        fill="none"
                        stroke="#14b8a6"
                        strokeWidth="2"
                        strokeOpacity="0.3"
                        animate={{ r: [55, 65, 55] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Main orb */}
                    <circle
                        cx={centerX}
                        cy={centerY}
                        r="45"
                        fill="url(#center-gradient)"
                        filter="url(#glow-center)"
                    />

                    {/* Inner highlight */}
                    <circle
                        cx={centerX - 10}
                        cy={centerY - 12}
                        r="12"
                        fill="#5eead4"
                        fillOpacity="0.4"
                    />

                    {/* Center icon */}
                    <text
                        x={centerX}
                        y={centerY + 4}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="24"
                        fill="#fff"
                    >
                        🧠
                    </text>
                </motion.g>

                {/* Center label */}
                <motion.text
                    x={centerX}
                    y={centerY + 75}
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="14"
                    fontWeight="600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: mounted ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    The Orchestrator
                </motion.text>
            </svg>

            {/* Caption */}
            <p className="text-center text-sm text-slate-500 mt-4">
                6 AI agents working in perfect coordination
            </p>
        </div>
    );
}
