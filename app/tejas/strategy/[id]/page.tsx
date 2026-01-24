import React from "react";
import Link from "next/link";
import { StrategyImageViewer } from "@/components/tejas/StrategyImageViewer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const STRATEGY_IMAGES = {
    "volunteer-journey": {
        title: "Volunteer Journey",
        src: "/images/tejas/volunteer-journey.png",
        description: "The complete volunteer lifecycle."
    },
    "vendor-journey": {
        title: "Vendor / Partner Ecosystem",
        src: "/images/tejas/vendor-journey.png",
        description: "Integration touchpoints for external partners."
    },
    "racer-journey": {
        title: "Athlete / Racer Journey",
        src: "/images/tejas/racer-journey.png",
        description: "The runner's experience from registration to the finish line dashboard."
    },
    "system-architecture": {
        title: "System Architecture",
        src: "/images/tejas/tejasOS-platform-architecture.png",
        description: "High-level platform components and integration points."
    },
    "data-flow": {
        title: "Data Flow Diagram",
        src: "/images/tejas/tejasOS-data-flow.png",
        description: "Data movement between Firestore, Next.js, and external services."
    }
};

export async function generateStaticParams() {
    return Object.keys(STRATEGY_IMAGES).map((id) => ({
        id: id,
    }));
}

export default async function StrategyDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const data = STRATEGY_IMAGES[id as keyof typeof STRATEGY_IMAGES];

    if (!data) {
        return (
            <div className="min-h-screen bg-[#050810] flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-black mb-4">404</h1>
                    <p className="text-slate-400">Strategy map not found.</p>
                    <Link href="/tejas/strategy">
                        <Button variant="link" className="mt-4 text-[#E67E22]">
                            Return to Strategy Room
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="h-screen w-screen bg-[#050810] overflow-hidden flex flex-col">
            {/* Header / Nav */}
            <div className="h-16 border-b border-white/5 bg-[#0B1120] flex items-center px-6 justify-between shrink-0 relative z-20 shadow-xl">
                <div className="flex items-center gap-4">
                    <Link href="/tejas/strategy">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-xl hover:bg-white/5 text-slate-400 hover:text-white"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-lg font-black text-white uppercase tracking-tight flex items-center gap-3">
                            {data.title}
                            <span className="text-[10px] font-bold bg-[#E67E22]/20 text-[#E67E22] px-2 py-0.5 rounded-full border border-[#E67E22]/30 uppercase tracking-widest">
                                Strategy Map
                            </span>
                        </h1>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest hidden md:block">
                        {data.description}
                    </span>
                </div>
            </div>

            {/* Main Content - Full Screen Viewer */}
            <div className="flex-1 relative overflow-hidden bg-[#050810]">
                <StrategyImageViewer
                    imageId={id}
                    title={data.title}
                    src={data.src}
                    isFullPage={true}
                />
            </div>
        </div>
    );
}
