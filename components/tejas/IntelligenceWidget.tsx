"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Mic, Send, X, Sparkles, ChevronRight, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { functions } from "@/lib/firebase/client";
import { httpsCallable } from "firebase/functions";

// Message Type
interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    options?: (string | { label: string; action: string })[]; // Support both legacy and rich chips
    timestamp: Date;
}

export function IntelligenceWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'welcome',
            role: 'assistant',
            content: "Ops Intelligence unit is online. I've detected staffing gaps in Sector 2 and a potential conflict in the Roster. Would you like me to suggest an optimization?",
            options: [
                { label: "Check Risk Levels", action: "risk" },
                { label: "Resolve Gaps", action: "gaps" },
                { label: "Check-In Helper", action: "checkin" }
            ],
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState("");
    const [isListening, setIsListening] = useState(false);
    const [isThinking, setIsThinking] = useState(false);

    // Voice Recognition Refs
    const recognitionRef = useRef<any>(null);

    // Auto-scroll
    const scrollRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isThinking]);

    // Initialize Speech Recognition
    useEffect(() => {
        if (typeof window !== "undefined") {
            const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
            if (SpeechRecognition) {
                const recognition = new SpeechRecognition();
                recognition.continuous = false;
                recognition.interimResults = false;
                recognition.lang = "en-US";

                recognition.onstart = () => setIsListening(true);
                recognition.onend = () => setIsListening(false);
                recognition.onresult = (event: any) => {
                    const transcript = event.results[0][0].transcript;
                    setInput(transcript);
                    // Auto-send on voice end? Optional. Let's let them review first or auto-submit.
                    // For "Race Mode", auto-submit is faster.
                    handleSendMessage(transcript);
                };

                recognitionRef.current = recognition;
            }
        }
    }, []);

    const toggleListening = () => {
        if (!recognitionRef.current) {
            toast.error("Voice input not supported in this browser.");
            return;
        }
        if (isListening) {
            recognitionRef.current.stop();
        } else {
            recognitionRef.current.start();
        }
    };

    const handleSendMessage = async (text: string = input) => {
        if (!text.trim()) return;

        // 1. Add User Message
        const userMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: text,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsThinking(true);

        try {
            // 2. Call Cloud Function
            const askTejas = httpsCallable(functions, 'askTejas');
            const result = await askTejas({ message: text });
            const data = result.data as any;

            // 3. Add Agent Response
            const agentMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: data.message,
                options: data.options,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, agentMsg]);

            // 4. TTS ("Race Mode")
            if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(data.message);
                window.speechSynthesis.speak(utterance);
            }

        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, {
                id: Date.now().toString(),
                role: 'assistant',
                content: "Communication Link Unstable. Please retry.",
                timestamp: new Date()
            }]);
        } finally {
            setIsThinking(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 font-sans">
            {/* Chat Window */}
            {isOpen && (
                <Card className="w-[380px] h-[600px] flex flex-col shadow-2xl border-white/10 bg-[#0B1120]/95 backdrop-blur-xl animate-in slide-in-from-bottom-10 fade-in duration-300 rounded-[2rem] overflow-hidden">
                    {/* Header */}
                    <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                                <Bot className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-black text-white text-sm uppercase tracking-wider">Tejas Intelligence</h3>
                                <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    Online • V2.0
                                </p>
                            </div>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white rounded-full hover:bg-white/10">
                            <X className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* Messages */}
                    <ScrollArea className="flex-1 p-4 space-y-4">
                        <div className="flex flex-col gap-4">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={cn(
                                        "max-w-[85%] rounded-2xl p-4 text-sm font-medium leading-relaxed relative",
                                        msg.role === 'user'
                                            ? "bg-white text-[#0B1120] self-end rounded-br-none ml-8 shadow-lg"
                                            : "bg-white/10 text-white self-start rounded-bl-none border border-white/5 mr-8"
                                    )}
                                >
                                    {msg.content}

                                    {/* Action Chips */}
                                    {msg.role === 'assistant' && msg.options && msg.options.length > 0 && (
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {msg.options.map((opt, i) => {
                                                const label = typeof opt === 'string' ? opt : opt.label;
                                                const action = typeof opt === 'string' ? opt : opt.action;
                                                return (
                                                    <button
                                                        key={i}
                                                        onClick={() => handleSendMessage(label)} // Action can be handled here or by re-sending
                                                        className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest py-1.5 px-3 rounded-lg transition-colors border border-emerald-500/20 flex items-center gap-1 group"
                                                    >
                                                        {label}
                                                        <ChevronRight className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            ))}
                            {isThinking && (
                                <div className="self-start bg-white/5 rounded-2xl p-4 rounded-bl-none flex items-center gap-2">
                                    <Activity className="w-4 h-4 text-emerald-500 animate-spin" />
                                    <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest animate-pulse">Processing...</span>
                                </div>
                            )}
                            <div ref={scrollRef} />
                        </div>
                    </ScrollArea>

                    {/* Input Area */}
                    <div className="p-4 bg-white/5 border-t border-white/10">
                        <div className="relative flex items-center gap-2">
                            <Button
                                size="icon"
                                variant={isListening ? "destructive" : "secondary"}
                                onClick={toggleListening}
                                className={cn(
                                    "rounded-xl transition-all duration-300",
                                    isListening && "animate-pulse ring-2 ring-red-500 ring-offset-2 ring-offset-[#0B1120]"
                                )}
                            >
                                <Mic className={cn("w-5 h-5", isListening ? "text-white" : "")} />
                            </Button>

                            <Input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                                placeholder="Ask Ops..."
                                className="bg-[#0B1120] border-white/10 text-white placeholder:text-slate-500 rounded-xl pr-10 focus-visible:ring-emerald-500/50 h-10"
                            />

                            <Button
                                size="sm"
                                onClick={() => handleSendMessage()}
                                className="absolute right-1 top-1 h-8 w-8 rounded-lg bg-emerald-500 text-black hover:bg-emerald-400 p-0"
                            >
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </Card>
            )}

            {/* FAB Trigger */}
            {!isOpen && (
                <Button
                    onClick={() => setIsOpen(true)}
                    className="h-16 w-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center gap-0.5 border-4 border-[#0B1120] relative group"
                >
                    <div className="absolute -top-1 -right-1 flex h-5 w-5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 text-[10px] font-black text-white items-center justify-center border-2 border-[#0B1120]">2</span>
                    </div>
                    <Bot className="w-7 h-7 text-white group-hover:animate-bounce" />
                </Button>
            )}
        </div>
    );
}
