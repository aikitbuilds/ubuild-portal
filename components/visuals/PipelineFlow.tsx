"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Search, Layers, Hammer, Zap, Rocket } from "lucide-react";

interface PipelineFlowProps {
    className?: string;
}

// The 5 stages from IDEA_TO_MVP_WORKFLOW_v2.md
const stages = [
    { id: 1, name: "Research", icon: Search, description: "Market & Tech Validation" },
    { id: 2, name: "Architect", icon: Layers, description: "System Design & Schema" },
    { id: 3, name: "Build", icon: Hammer, description: "Parallel Agent Execution" },
    { id: 4, name: "Optimize", icon: Zap, description: "Performance & Security" },
    { id: 5, name: "Deploy", icon: Rocket, description: "Production & Monitoring" },
];

export function PipelineFlow({ className }: PipelineFlowProps) {
    const [mounted, setMounted] = useState(false);
    const [activeStage, setActiveStage] = useState(0);

    useEffect(() => {
        setMounted(true);

        // Animate through stages
        const interval = setInterval(() => {
            setActiveStage((prev) => (prev + 1) % 6);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={cn("w-full", className)}>
            {/* Desktop: Horizontal Pipeline */}
            <div className="hidden md:block relative">
                <svg
                    viewBox="0 0 1000 200"
                    className="w-full h-auto"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        {/* Glow filter */}
                        <filter id="stage-glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>

                        {/* Arrow marker */}
                        <marker
                            id="arrow"
                            markerWidth="10"
                            markerHeight="10"
                            refX="9"
                            refY="3"
                            orient="auto"
                            markerUnits="strokeWidth"
                        >
                            <path d="M0,0 L0,6 L9,3 z" fill="#334155" />
                        </marker>
                    </defs>

                    {/* Pipeline backbone */}
                    <motion.line
                        x1="50"
                        y1="100"
                        x2="950"
                        y2="100"
                        stroke="#1e293b"
                        strokeWidth="8"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: mounted ? 1 : 0 }}
                        transition={{ duration: 1 }}
                    />

                    {/* Progress fill */}
                    <motion.line
                        x1="50"
                        y1="100"
                        x2="950"
                        y2="100"
                        stroke="url(#progress-gradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: activeStage / 5 }}
                        transition={{ duration: 0.5 }}
                    />

                    {/* Gradient for progress */}
                    <defs>
                        <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#14b8a6" />
                            <stop offset="100%" stopColor="#22d3ee" />
                        </linearGradient>
                    </defs>

                    {/* Stage nodes */}
                    {stages.map((stage, i) => {
                        const x = 100 + i * 200;
                        const isActive = activeStage >= stage.id;
                        const isCurrent = activeStage === stage.id;

                        return (
                            <motion.g
                                key={stage.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                                transition={{ duration: 0.4, delay: 0.1 * i }}
                            >
                                {/* Connector arrow */}
                                {i < stages.length - 1 && (
                                    <line
                                        x1={x + 40}
                                        y1={100}
                                        x2={x + 160}
                                        y2={100}
                                        stroke="#334155"
                                        strokeWidth="2"
                                        markerEnd="url(#arrow)"
                                    />
                                )}

                                {/* Outer ring (pulsing if current) */}
                                {isCurrent && (
                                    <motion.circle
                                        cx={x}
                                        cy={100}
                                        r="45"
                                        fill="none"
                                        stroke="#14b8a6"
                                        strokeWidth="2"
                                        strokeOpacity="0.5"
                                        animate={{ r: [45, 55, 45] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    />
                                )}

                                {/* Main node */}
                                <circle
                                    cx={x}
                                    cy={100}
                                    r="36"
                                    fill={isActive ? "#0f172a" : "#0f172a"}
                                    stroke={isActive ? "#14b8a6" : "#334155"}
                                    strokeWidth="2"
                                    filter={isActive ? "url(#stage-glow)" : undefined}
                                />

                                {/* Inner circle */}
                                <circle
                                    cx={x}
                                    cy={100}
                                    r="28"
                                    fill={isActive ? "#14b8a6" : "#1e293b"}
                                    fillOpacity={isActive ? 0.2 : 1}
                                />

                                {/* Stage number */}
                                <text
                                    x={x}
                                    y={106}
                                    textAnchor="middle"
                                    fill={isActive ? "#14b8a6" : "#64748b"}
                                    fontSize="16"
                                    fontWeight="bold"
                                    fontFamily="var(--font-geist-mono)"
                                >
                                    {stage.id}
                                </text>

                                {/* Stage name */}
                                <text
                                    x={x}
                                    y={160}
                                    textAnchor="middle"
                                    fill={isActive ? "#fff" : "#94a3b8"}
                                    fontSize="13"
                                    fontWeight="600"
                                >
                                    {stage.name}
                                </text>

                                {/* Description */}
                                <text
                                    x={x}
                                    y={178}
                                    textAnchor="middle"
                                    fill="#64748b"
                                    fontSize="10"
                                >
                                    {stage.description}
                                </text>
                            </motion.g>
                        );
                    })}
                </svg>
            </div>

            {/* Mobile: Vertical Pipeline */}
            <div className="md:hidden space-y-4">
                {stages.map((stage, i) => {
                    const isActive = activeStage >= stage.id;
                    const isCurrent = activeStage === stage.id;
                    const Icon = stage.icon;

                    return (
                        <motion.div
                            key={stage.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : -20 }}
                            transition={{ duration: 0.4, delay: 0.1 * i }}
                            className="flex items-start gap-4"
                        >
                            {/* Timeline */}
                            <div className="flex flex-col items-center">
                                <div
                                    className={cn(
                                        "w-12 h-12 rounded-lg flex items-center justify-center border-2 transition-colors",
                                        isActive
                                            ? "border-primary bg-primary/10"
                                            : "border-slate-700 bg-slate-800",
                                        isCurrent && "animate-pulse"
                                    )}
                                >
                                    <Icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-slate-500")} />
                                </div>
                                {i < stages.length - 1 && (
                                    <div className={cn(
                                        "w-0.5 h-8 mt-2",
                                        isActive ? "bg-primary" : "bg-slate-700"
                                    )} />
                                )}
                            </div>

                            {/* Content */}
                            <div className="pt-1">
                                <p className={cn(
                                    "font-semibold",
                                    isActive ? "text-white" : "text-slate-400"
                                )}>
                                    Stage {stage.id}: {stage.name}
                                </p>
                                <p className="text-sm text-slate-500">{stage.description}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Caption */}
            <p className="text-center text-sm text-slate-500 mt-6">
                Fully automated 4-6 hour pipeline from idea to production
            </p>
        </div>
    );
}
