"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface VideoShowcaseProps {
    className?: string;
    videoUrl?: string;
}

export function VideoShowcase({ className, videoUrl }: VideoShowcaseProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn("relative mx-auto max-w-4xl", className)}
        >
            {/* Macbook Frame */}
            <div className="relative">
                {/* Top bar (camera notch) */}
                <div className="bg-slate-700 rounded-t-xl px-4 py-2 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-slate-500" />
                </div>

                {/* Screen */}
                <div className="bg-slate-900 border-x-8 border-b-8 border-slate-700 rounded-b-xl overflow-hidden">
                    <div className="relative aspect-video">
                        {/* Video Container */}
                        {isPlaying && videoUrl ? (
                            <video
                                src={videoUrl}
                                autoPlay
                                muted={isMuted}
                                loop
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            /* Placeholder with animated gradient */
                            <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
                                {/* Animated lines representing code/workflow */}
                                <div className="absolute inset-0 opacity-20">
                                    {[...Array(8)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent w-full"
                                            style={{ top: `${12 + i * 12}%` }}
                                            initial={{ x: "-100%" }}
                                            animate={{ x: "100%" }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                delay: i * 0.3,
                                                ease: "linear",
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Mock terminal output */}
                                <div className="absolute inset-6 p-4 rounded-lg bg-slate-950/80 border border-slate-700 font-mono text-xs">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                        <span className="ml-2 text-slate-500">uBuild Terminal</span>
                                    </div>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ staggerChildren: 0.5 }}
                                        className="space-y-2 text-slate-400"
                                    >
                                        <p><span className="text-primary">→</span> Initializing Research Engine...</p>
                                        <p><span className="text-primary">→</span> Market Analysis: <span className="text-emerald-400">Complete</span></p>
                                        <p><span className="text-primary">→</span> Architecture Design: <span className="text-emerald-400">Complete</span></p>
                                        <p><span className="text-primary">→</span> Deploying 6 AI Agents...</p>
                                        <p><span className="text-amber-400 animate-pulse">→</span> Building MVP: <span className="text-amber-400">47%</span></p>
                                    </motion.div>
                                </div>

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40">
                                    <Button
                                        size="lg"
                                        onClick={() => setIsPlaying(true)}
                                        className="group h-20 w-20 rounded-full bg-primary/90 hover:bg-primary hover:scale-110 transition-all shadow-lg shadow-primary/30"
                                    >
                                        <Play className="h-8 w-8 text-white fill-white ml-1" />
                                    </Button>
                                </div>
                            </div>
                        )}

                        {/* Overlay Text */}
                        {!isPlaying && (
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-lg font-semibold text-white mb-1">
                                    Watch: How an Idea becomes an MVP in 4 hours
                                </p>
                                <p className="text-sm text-slate-400">
                                    See the complete workflow from research to deployment
                                </p>
                            </div>
                        )}

                        {/* Video Controls */}
                        {isPlaying && (
                            <div className="absolute bottom-4 right-4">
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => setIsMuted(!isMuted)}
                                    className="bg-slate-900/60 hover:bg-slate-900"
                                >
                                    {isMuted ? (
                                        <VolumeX className="h-4 w-4 text-white" />
                                    ) : (
                                        <Volume2 className="h-4 w-4 text-white" />
                                    )}
                                </Button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Stand */}
                <div className="mx-auto w-24 h-4 bg-gradient-to-b from-slate-600 to-slate-700 rounded-b-xl" />
                <div className="mx-auto w-40 h-2 bg-slate-700 rounded-full -mt-1" />
            </div>

            {/* Caption */}
            <p className="text-center text-sm text-slate-500 mt-6">
                Click play to see uBuild in action
            </p>
        </motion.div>
    );
}
