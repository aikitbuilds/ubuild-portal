"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
    size?: "sm" | "md" | "lg" | "xl";
    variant?: "full" | "icon";
    className?: string;
}

const sizes = {
    sm: { icon: 24, text: "text-lg" },
    md: { icon: 32, text: "text-xl" },
    lg: { icon: 48, text: "text-2xl" },
    xl: { icon: 64, text: "text-3xl" },
};

export function Logo({ size = "md", variant = "full", className }: LogoProps) {
    const { icon, text } = sizes[size];

    return (
        <div className={cn("flex items-center gap-2", className)}>
            {/* SVG Logo: Geometric "U" from 3 building blocks */}
            <svg
                width={icon}
                height={icon}
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
            >
                {/* Block 1: Left pillar (Idea) */}
                <rect
                    x="6"
                    y="8"
                    width="12"
                    height="24"
                    rx="2"
                    fill="url(#teal-gradient)"
                    className="opacity-90"
                />

                {/* Block 2: Right pillar (Build) */}
                <rect
                    x="30"
                    y="8"
                    width="12"
                    height="24"
                    rx="2"
                    fill="url(#teal-gradient)"
                    className="opacity-90"
                />

                {/* Block 3: Bottom connector (Scale) */}
                <rect
                    x="6"
                    y="28"
                    width="36"
                    height="12"
                    rx="2"
                    fill="url(#cyan-gradient)"
                />

                {/* Gradient definitions */}
                <defs>
                    <linearGradient id="teal-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#14b8a6" />
                        <stop offset="100%" stopColor="#0d9488" />
                    </linearGradient>
                    <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0d9488" />
                        <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Wordmark */}
            {variant === "full" && (
                <span className={cn("font-bold text-white tracking-tight", text)}>
                    uBuild
                </span>
            )}
        </div>
    );
}

// Animated version for hero sections
export function LogoAnimated({ size = "lg", className }: Omit<LogoProps, "variant">) {
    const { icon, text } = sizes[size];

    return (
        <div className={cn("flex items-center gap-3", className)}>
            <svg
                width={icon}
                height={icon}
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
            >
                {/* Block 1: Left pillar - Animate up */}
                <rect
                    x="6"
                    y="8"
                    width="12"
                    height="24"
                    rx="2"
                    fill="url(#teal-gradient-anim)"
                    className="animate-pulse"
                    style={{ animationDelay: "0ms" }}
                />

                {/* Block 2: Right pillar - Animate up delayed */}
                <rect
                    x="30"
                    y="8"
                    width="12"
                    height="24"
                    rx="2"
                    fill="url(#teal-gradient-anim)"
                    className="animate-pulse"
                    style={{ animationDelay: "150ms" }}
                />

                {/* Block 3: Bottom connector - Animate last */}
                <rect
                    x="6"
                    y="28"
                    width="36"
                    height="12"
                    rx="2"
                    fill="url(#cyan-gradient-anim)"
                    className="animate-pulse"
                    style={{ animationDelay: "300ms" }}
                />

                <defs>
                    <linearGradient id="teal-gradient-anim" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#14b8a6" />
                        <stop offset="100%" stopColor="#0d9488" />
                    </linearGradient>
                    <linearGradient id="cyan-gradient-anim" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0d9488" />
                        <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="flex flex-col">
                <span className={cn("font-bold text-white tracking-tight leading-none", text)}>
                    uBuild
                </span>
                <span className="text-xs text-slate-400 tracking-widest uppercase">
                    Agentic AI Agency
                </span>
            </div>
        </div>
    );
}
