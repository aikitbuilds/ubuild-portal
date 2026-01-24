"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
    size?: "sm" | "md" | "lg" | "xl";
    variant?: "full" | "icon";
    className?: string;
}

const sizes = {
    sm: { width: 100, height: 30 }, // Approx ratio
    md: { width: 140, height: 42 },
    lg: { width: 180, height: 54 },
    xl: { width: 320, height: 96 },
};

export function Logo({ size = "md", variant = "full", className }: LogoProps) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { width, height } = sizes[size];

    return (
        <div className={cn("flex items-center gap-2", className)}>
            <div className="relative">
                <Image
                    src="/assets/images/ubuild_logo.png"
                    alt="uBuild Logo"
                    width={width}
                    height={height}
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    );
}

// Animated version - For now using the static logo as the complex SVG animation 
// cannot be applied to a single PNG image.
export function LogoAnimated({ size = "lg", className }: Omit<LogoProps, "variant">) {
    const { width, height } = sizes[size];

    return (
        <div className={cn("flex items-center gap-3", className)}>
            <div className="relative animate-in fade-in duration-700">
                <Image
                    src="/assets/images/ubuild_logo.png"
                    alt="uBuild Logo"
                    width={width}
                    height={height}
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    );
}
