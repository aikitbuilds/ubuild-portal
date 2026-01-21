"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    Mail,
    Mic,
    MicOff,
    CheckCircle,
    Sparkles,
    Rocket,
    Cpu,
    MessageSquare,
    Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { submitPublicLead } from "@/lib/agency/client-ops";

type Step = 1 | 2 | 3 | 4;

export function SmartStartWizard() {
    // State
    const [step, setStep] = useState<Step>(1);
    const [email, setEmail] = useState("");
    const [intent, setIntent] = useState<string | null>(null);
    const [description, setDescription] = useState("");
    const [isListening, setIsListening] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Voice
    const recognitionRef = useRef<any>(null);

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
                    setDescription((prev) => prev + " " + finalTranscript);
                }
            };
            recognitionRef.current = recognition;
        }
    }, []);

    const toggleListening = () => {
        if (!recognitionRef.current) {
            toast.error("Not Supported", { description: "Voice input not supported in this browser." });
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

    const handleNext = () => {
        if (step === 1 && !email) return toast.error("Please enter your email");
        if (step === 2 && !intent) return toast.error("Please select an option");
        setStep((prev) => (prev + 1) as Step);
    };

    const handleSubmit = async () => {
        if (!description.trim()) return toast.error("Please describe your idea");

        setIsSubmitting(true);
        try {
            await submitPublicLead({
                email,
                intent: intent || "unknown",
                description,
                hasVoiceMemo: false // simplified for now
            });
            setStep(4);
            toast.success("Received!", { description: "We'll be in touch shortly." });
        } catch (error) {
            console.error(error);
            toast.error("Error", { description: "Failed to submit. Please try again." });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Animation Variants
    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 50 : -50,
            opacity: 0
        })
    };

    return (
        <div className="w-full max-w-2xl mx-auto perspective-1000">
            <div className="mb-8 flex justify-center gap-3">
                {[1, 2, 3, 4].map((s) => (
                    <motion.div
                        key={s}
                        animate={{
                            backgroundColor: s <= step ? "#14b8a6" : "#1e293b",
                            width: s === step ? 32 : 12,
                        }}
                        className="h-3 rounded-full transition-all duration-500"
                    />
                ))}
            </div>

            <Card className="bg-slate-950/80 backdrop-blur-xl border-slate-800 shadow-2xl overflow-hidden min-h-[400px] flex flex-col relative">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -z-10 animate-pulse" />

                <CardContent className="p-8 flex-1 flex flex-col justify-center">
                    <AnimatePresence mode="wait" custom={step}>
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                custom={1}
                                className="space-y-6"
                            >
                                <div className="text-center space-y-2">
                                    <h2 className="text-3xl font-bold text-white">Let's Connect</h2>
                                    <p className="text-slate-400">Where should we send your blueprint?</p>
                                </div>
                                <div className="relative max-w-sm mx-auto">
                                    <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-500" />
                                    <Input
                                        type="email"
                                        placeholder="founder@startup.com"
                                        className="pl-10 h-12 bg-slate-900 border-slate-700 focus:ring-teal-500 text-lg"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && handleNext()}
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <Button onClick={handleNext} className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-8 py-6 text-lg rounded-full shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] transition-all">
                                        Start <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                custom={1}
                                className="space-y-6"
                            >
                                <div className="text-center space-y-2">
                                    <h2 className="text-2xl font-bold text-white">What are you building?</h2>
                                    <p className="text-slate-400">Select the path that fits best.</p>
                                </div>
                                <div className="grid gap-4">
                                    {[
                                        { id: "new_app", icon: Rocket, title: "New AI App", desc: "I have an idea for a SAAS or tool." },
                                        { id: "automation", icon: Cpu, title: "Automate Workflow", desc: "I want to save time in my business." },
                                        { id: "consulting", icon: MessageSquare, title: "Consulting / Other", desc: "I need to talk to an expert." }
                                    ].map((opt) => (
                                        <div
                                            key={opt.id}
                                            onClick={() => setIntent(opt.id)}
                                            className={cn(
                                                "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all hover:scale-[1.02]",
                                                intent === opt.id
                                                    ? "border-teal-500 bg-teal-500/10 shadow-[0_0_15px_rgba(20,184,166,0.2)]"
                                                    : "border-slate-800 bg-slate-900/50 hover:border-slate-600"
                                            )}
                                        >
                                            <div className={cn("p-3 rounded-full", intent === opt.id ? "bg-teal-500 text-slate-950" : "bg-slate-800 text-slate-400")}>
                                                <opt.icon className="w-6 h-6" />
                                            </div>
                                            <div className="text-left">
                                                <div className={cn("font-bold text-lg", intent === opt.id ? "text-teal-400" : "text-white")}>{opt.title}</div>
                                                <div className="text-sm text-slate-400">{opt.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between pt-4">
                                    <Button variant="ghost" onClick={() => setStep(1)}>Back</Button>
                                    <Button onClick={handleNext} disabled={!intent} className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold">
                                        Next Step
                                    </Button>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                custom={1}
                                className="space-y-6"
                            >
                                <div className="text-center space-y-2">
                                    <h2 className="text-2xl font-bold text-white">Tell us everything</h2>
                                    <p className="text-slate-400">Speak naturally or type. We'll structure it.</p>
                                </div>

                                <div className="relative">
                                    <Textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="I want to build a..."
                                        className="min-h-[200px] bg-slate-900/50 border-slate-700 text-lg p-4 focus:ring-teal-500 resize-none"
                                    />
                                    <Button
                                        size="icon"
                                        className={cn(
                                            "absolute bottom-4 right-4 w-12 h-12 rounded-full shadow-lg transition-all hover:scale-110",
                                            isListening ? "bg-red-500 animate-pulse" : "bg-teal-500 hover:bg-teal-400"
                                        )}
                                        onClick={toggleListening}
                                    >
                                        {isListening ? <MicOff className="w-5 h-5 text-white" /> : <Mic className="w-5 h-5 text-slate-950" />}
                                    </Button>
                                </div>

                                <div className="flex justify-between pt-4">
                                    <Button variant="ghost" onClick={() => setStep(2)}>Back</Button>
                                    <Button
                                        onClick={handleSubmit}
                                        disabled={isSubmitting || !description.trim()}
                                        className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-lg px-8 py-6 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all"
                                    >
                                        {isSubmitting ? <Loader2 className="animate-spin w-5 h-5" /> : "Submit Vision"}
                                    </Button>
                                </div>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-center space-y-8 py-8"
                            >
                                <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                                    <CheckCircle className="w-12 h-12 text-emerald-500" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-2">Received!</h2>
                                    <p className="text-slate-400 text-lg">We've added you to the priority list.</p>
                                    <p className="text-slate-500 text-sm mt-4">One of our architects will review your "{intent === 'new_app' ? 'New App' : 'Idea'}" shortly.</p>
                                </div>
                                <Button onClick={() => window.location.href = "/"} variant="outline" className="border-slate-700 hover:bg-slate-800">
                                    Return Home
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </CardContent>
            </Card>
        </div>
    );
}
