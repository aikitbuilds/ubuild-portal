"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Mic,
    MicOff,
    Send,
    Sparkles,
    CheckCircle,
    ArrowRight,
    RefreshCw,
    Edit3,
    Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { SubmissionHistory } from "@/components/agency-dashboard/SubmissionHistory";

// Types for the Refined Brief
interface RefinedBrief {
    objective: string;
    features: string[];
    successMetrics: string[];
    suggestedStack: string;
}

export default function SmartSubmissionPage() {
    // State
    const [step, setStep] = useState(1);
    const [intent, setIntent] = useState<"new" | "update" | "pivot">("new");
    const [rawInput, setRawInput] = useState("");
    const [isListening, setIsListening] = useState(false);
    const [isRefining, setIsRefining] = useState(false);
    const [refinedBrief, setRefinedBrief] = useState<RefinedBrief | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    // Speech Recognition Ref
    const recognitionRef = useRef<any>(null);

    // Initialize Speech Recognition
    useEffect(() => {
        if (typeof window !== "undefined" && (window as any).webkitSpeechRecognition) {
            const SpeechRecognition = (window as any).webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = "en-US";

            recognition.onresult = (event: any) => {
                let finalTranscript = "";
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        finalTranscript += event.results[i][0].transcript;
                    }
                }
                if (finalTranscript) {
                    setRawInput((prev) => prev + " " + finalTranscript);
                }
            };

            recognitionRef.current = recognition;
        }
    }, []);

    const toggleListening = () => {
        if (!recognitionRef.current) {
            toast.error("Not Supported", {
                description: "Voice input is not supported in this browser.",
            });
            return;
        }

        if (isListening) {
            recognitionRef.current.stop();
            setIsListening(false);
        } else {
            recognitionRef.current.start();
            setIsListening(true);
        }
    };

    const handleRefine = async () => {
        if (!rawInput.trim()) return;
        setIsRefining(true);

        try {
            // Client-side simulation
            const { refineRequirements } = await import("@/lib/agency/client-ops");
            const refined = await refineRequirements(rawInput);

            setRefinedBrief(refined);
            setStep(3);
        } catch (error) {
            console.error(error);
            toast.error("Error", { description: "Failed to refine input." });
        } finally {
            setIsRefining(false);
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            // Mock submission for now (replace with actual user ID from Auth context)
            const submissionPayload = {
                userId: "mock-user-id",
                userEmail: "demo@ubuild.pro",
                projectId: "new_project_123", // Should be generated or selected
                intentType: intent,
                rawInput,
                aiAnalysis: refinedBrief,
            };

            const { submitProjectRequest } = await import("@/lib/agency/client-ops");
            await submitProjectRequest(submissionPayload);

            setIsComplete(true);
            toast.success("Success", { description: "Request submitted successfully!" });
        } catch (error) {
            console.error(error);
            toast.error("Error", { description: "Failed to submit request." });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Render Steps
    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                    Build with Voice
                </h1>
                <p className="text-muted-foreground">
                    Describe your vision, and our AI agents will handle the rest.
                </p>
            </div>

            {/* Step Indicator */}
            <div className="flex justify-center gap-2 mb-8">
                {[1, 2, 3].map((s) => (
                    <motion.div
                        key={s}
                        initial={false}
                        animate={{
                            backgroundColor: s <= step ? "#14b8a6" : "#334155",
                            scale: s === step ? 1.1 : 1,
                        }}
                        className="w-3 h-3 rounded-full"
                    />
                ))}
            </div>

            <AnimatePresence mode="wait">
                {isComplete ? (
                    <motion.div
                        key="complete"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center space-y-6 py-12"
                    >
                        <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
                            <CheckCircle className="w-10 h-10 text-emerald-500" />
                        </div>
                        <h2 className="text-2xl font-semibold">Transmission Received</h2>
                        <p className="text-slate-400 max-w-md mx-auto">
                            Our architecture agents are now analyzing your request. You'll receive an email confirmation shortly.
                        </p>
                        <Button onClick={() => window.location.href = "/dashboard"} variant="outline">
                            Return to Dashboard
                        </Button>
                    </motion.div>
                ) : (
                    <Card className="bg-slate-950/50 border-slate-800 backdrop-blur-sm overflow-hidden relative">
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -z-10" />

                        <CardContent className="p-8">
                            {/* STEP 1: INTENT */}
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="space-y-6"
                                >
                                    <h2 className="text-xl font-semibold flex items-center gap-2">
                                        <Lightbulb className="w-5 h-5 text-yellow-400" />
                                        What's your goal today?
                                    </h2>

                                    <RadioGroup value={intent} onValueChange={(v: any) => setIntent(v)} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div onClick={() => setIntent("new")} className={cn("cursor-pointer border-2 rounded-xl p-4 transition-all hover:bg-slate-900", intent === "new" ? "border-teal-500 bg-teal-500/5" : "border-slate-800")}>
                                            <div className="font-semibold text-lg mb-1">New Project</div>
                                            <p className="text-sm text-slate-400">Launch a brand new idea from scratch.</p>
                                        </div>
                                        <div onClick={() => setIntent("update")} className={cn("cursor-pointer border-2 rounded-xl p-4 transition-all hover:bg-slate-900", intent === "update" ? "border-teal-500 bg-teal-500/5" : "border-slate-800")}>
                                            <div className="font-semibold text-lg mb-1">Update Feature</div>
                                            <p className="text-sm text-slate-400">Add or modify features on an existing project.</p>
                                        </div>
                                        <div onClick={() => setIntent("pivot")} className={cn("cursor-pointer border-2 rounded-xl p-4 transition-all hover:bg-slate-900", intent === "pivot" ? "border-teal-500 bg-teal-500/5" : "border-slate-800")}>
                                            <div className="font-semibold text-lg mb-1">Pivot Strategy</div>
                                            <p className="text-sm text-slate-400">Change the direction or core logic.</p>
                                        </div>
                                    </RadioGroup>

                                    <div className="flex justify-end pt-4">
                                        <Button size="lg" onClick={() => setStep(2)}>
                                            Next Step <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 2: INPUT */}
                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="space-y-6"
                                >
                                    <h2 className="text-xl font-semibold flex items-center gap-2">
                                        <Edit3 className="w-5 h-5 text-teal-400" />
                                        Tell us about it
                                    </h2>
                                    <p className="text-slate-400 text-sm">
                                        Press the microphone and speak naturally, or type your request below.
                                    </p>

                                    <div className="relative">
                                        <Textarea
                                            value={rawInput}
                                            onChange={(e) => setRawInput(e.target.value)}
                                            placeholder="Example: I want to build a fitness app for dog owners that tracks walks and gamifies the experience with daily challenges..."
                                            className="min-h-[200px] text-lg p-6 pr-16 bg-slate-900/50 border-slate-700 resize-none focus:ring-teal-500/50"
                                        />
                                        <Button
                                            size="icon"
                                            className={cn(
                                                "absolute top-4 right-4 w-12 h-12 rounded-full transition-all shadow-lg hover:scale-105",
                                                isListening ? "bg-red-500 hover:bg-red-600 animate-pulse" : "bg-teal-500 hover:bg-teal-600"
                                            )}
                                            onClick={toggleListening}
                                        >
                                            {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                                        </Button>
                                    </div>

                                    <div className="flex justify-between items-center pt-4">
                                        <Button variant="ghost" onClick={() => setStep(1)}>Back</Button>
                                        <Button
                                            size="lg"
                                            onClick={handleRefine}
                                            disabled={!rawInput.trim() || isRefining}
                                            className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:shadow-lg hover:shadow-cyan-500/20"
                                        >
                                            {isRefining ? (
                                                <RefreshCw className="w-4 h-4 animate-spin mr-2" />
                                            ) : (
                                                <Sparkles className="w-4 h-4 mr-2" />
                                            )}
                                            {isRefining ? "Analyzing..." : "Analyze Request"}
                                        </Button>
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 3: REVIEW */}
                            {step === 3 && refinedBrief && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Left: Raw Input */}
                                        <div className="space-y-4 opacity-70">
                                            <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">What you said</h3>
                                            <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 text-sm italic">
                                                "{rawInput}"
                                            </div>
                                        </div>

                                        {/* Right: AI Output */}
                                        <div className="space-y-4">
                                            <h3 className="text-sm font-medium uppercase tracking-wider text-teal-400">What we heard</h3>
                                            <div className="space-y-4">
                                                <div className="p-4 rounded-lg bg-teal-950/30 border border-teal-900/50 space-y-2">
                                                    <div className="flex items-start gap-2">
                                                        <Badge variant="outline" className="mt-1 border-teal-500/30 text-teal-400">Objective</Badge>
                                                        <p className="text-sm">{refinedBrief.objective}</p>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <span className="text-xs text-slate-400 uppercase">Key Features</span>
                                                    <div className="grid grid-cols-1 gap-2">
                                                        {refinedBrief.features.map((f, i) => (
                                                            <div key={i} className="flex items-center gap-2 text-sm bg-slate-900/50 p-2 rounded border border-slate-800">
                                                                <CheckCircle className="w-3 h-3 text-teal-500" />
                                                                {f}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-800">
                                                    <span>Stack: {refinedBrief.suggestedStack}</span>
                                                    <span>{refinedBrief.successMetrics.length} KPI(s) identified</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center pt-8 border-t border-slate-800">
                                        <Button variant="ghost" onClick={() => setStep(2)}>Back to Edit</Button>
                                        <Button
                                            size="lg"
                                            onClick={handleSubmit}
                                            disabled={isSubmitting}
                                            className="bg-emerald-600 hover:bg-emerald-700 min-w-[200px]"
                                        >
                                            {isSubmitting ? (
                                                <RefreshCw className="w-4 h-4 animate-spin mr-2" />
                                            ) : (
                                                <Send className="w-4 h-4 mr-2" />
                                            )}
                                            Confirm & Submit
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </CardContent>
                    </Card>
                )}
            </AnimatePresence>

            {/* History Section */}
            <div className="pt-8">
                <SubmissionHistory userId="mock-user-id" />
            </div>
        </div>
    );
}
