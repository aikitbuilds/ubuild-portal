"use client";

import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    AlertTriangle,
    Zap,
    MessageSquare,
    CheckCircle2,
    Clock,
    ShieldAlert,
    TrendingUp,
    Check
} from "lucide-react";
import { Ticket } from "@/lib/tejas/data";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface CommandCenterProps {
    tickets: Ticket[];
}

export function CommandCenter({ tickets: initialTickets }: CommandCenterProps) {
    const [tickets, setTickets] = useState<Ticket[]>(initialTickets);

    const sortedTickets = useMemo(() => {
        return [...tickets].sort((a, b) => b.ai_priority - a.ai_priority);
    }, [tickets]);

    const handleResolve = (ticketId: string) => {
        setTickets(prev => prev.map(t =>
            t.id === ticketId ? { ...t, status: 'resolved' as const } : t
        ));
    };

    return (
        <Card className="bg-[#0B1120]/50 border-white/5 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border-t-white/10 shadow-2xl h-full flex flex-col">
            <CardHeader className="p-8 border-b border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#E67E22]/20 flex items-center justify-center text-[#E67E22]">
                            <ShieldAlert className="w-6 h-6" />
                        </div>
                        <div>
                            <CardTitle className="text-2xl font-black uppercase tracking-tight text-white">Command Center</CardTitle>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">AI Triage • Active Response</p>
                        </div>
                    </div>
                    <Badge variant="outline" className="bg-[#E67E22]/10 text-[#E67E22] border-[#E67E22]/20 font-black uppercase text-[10px] tracking-widest px-3 py-1">
                        {tickets.filter(t => t.status !== 'resolved').length} Critical
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="p-0 flex-1 overflow-y-auto custom-scrollbar">
                <div className="divide-y divide-white/5">
                    <AnimatePresence initial={false}>
                        {sortedTickets.map((ticket, index) => (
                            <motion.div
                                key={ticket.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ delay: index * 0.1 }}
                                className={cn(
                                    "p-6 hover:bg-white/[0.02] transition-colors group",
                                    ticket.status === 'resolved' && "opacity-50 grayscale"
                                )}
                            >
                                <div className="space-y-4">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className={cn(
                                                "w-2 h-2 rounded-full",
                                                ticket.severity === 'emergency' ? "bg-red-500 animate-pulse shadow-lg shadow-red-500/50" :
                                                    ticket.severity === 'high' ? "bg-amber-500" :
                                                        "bg-blue-500"
                                            )} />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                                {ticket.station} • {ticket.category}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="text-[10px] font-black text-[#E67E22] bg-[#E67E22]/10 px-2 py-0.5 rounded-full border border-[#E67E22]/20">
                                                AI Priority: {ticket.ai_priority}
                                            </div>
                                            <span className="text-[10px] font-bold text-slate-500 flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                Just now
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-sm font-bold text-white line-clamp-2 leading-relaxed">
                                            {ticket.message}
                                        </p>
                                        <div className="bg-white/5 border border-white/5 rounded-2xl p-4 space-y-2">
                                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#E67E22]">
                                                <Zap className="w-3 h-3" /> AI Analysis
                                            </div>
                                            <p className="text-xs text-slate-300 font-medium">
                                                {ticket.ai_summary}
                                            </p>
                                            <div className="pt-2 flex items-center gap-2">
                                                <TrendingUp className="w-3 h-3 text-emerald-500" />
                                                <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
                                                    Action: {ticket.suggested_action}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 pt-2">
                                        {ticket.status !== 'resolved' ? (
                                            <>
                                                <Button
                                                    size="sm"
                                                    className="flex-1 bg-[#E67E22] hover:bg-[#D35400] text-white rounded-xl text-[10px] font-black uppercase tracking-widest h-10 shadow-lg shadow-[#E67E22]/20"
                                                    onClick={() => handleResolve(ticket.id)}
                                                >
                                                    <CheckCircle2 className="w-3.5 h-3.5 mr-2" />
                                                    Approve & Deploy
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="w-10 h-10 border-white/10 hover:bg-white/5 rounded-xl text-slate-400 p-0"
                                                >
                                                    <MessageSquare className="w-4 h-4" />
                                                </Button>
                                            </>
                                        ) : (
                                            <div className="flex items-center gap-2 text-emerald-500 font-black uppercase text-[10px] tracking-widest bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/20 w-full justify-center">
                                                <Check className="w-4 h-4" /> Resolved
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </CardContent>
            <div className="p-6 bg-white/[0.02] border-t border-white/5">
                <Button variant="ghost" className="w-full text-slate-500 hover:text-white text-[10px] font-black uppercase tracking-widest">
                    View Archive
                </Button>
            </div>
        </Card>
    );
}
