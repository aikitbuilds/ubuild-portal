"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, User } from "lucide-react";
import { Volunteer } from "@/lib/tejas/data";
import { cn } from "@/lib/utils";

interface VolunteerChatProps {
    volunteer: Volunteer;
    isAdmin?: boolean;
}

export function VolunteerChat({ volunteer, isAdmin }: VolunteerChatProps) {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        { id: 1, sender: "Brook H. (RD)", content: `Welcome to the team, ${volunteer.name}! Let us know if you have any questions about your station assignment.`, timestamp: "09:00 AM", isSystem: true },
        { id: 2, sender: volunteer.name, content: "Thanks Brook! Looking forward to helping out at AS1.", timestamp: "09:05 AM", isMe: !isAdmin }
    ]);

    const handleSend = () => {
        if (!message.trim()) return;

        const newMessage = {
            id: Date.now(),
            sender: isAdmin ? "Brook H. (RD)" : volunteer.name,
            content: message,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isMe: true
        };

        setMessages([...messages, newMessage]);
        setMessage("");
    };

    return (
        <Card className="bg-white/5 border-white/10 rounded-2xl flex flex-col h-[500px] overflow-hidden">
            <CardHeader className="p-4 border-b border-white/10 bg-white/5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#E67E22] flex items-center justify-center font-black text-white shadow-lg shadow-[#E67E22]/20">
                            {isAdmin ? volunteer.name[0] : "B"}
                        </div>
                        <div>
                            <CardTitle className="text-sm font-black text-white">{isAdmin ? volunteer.name : "Brook H. (RD)"}</CardTitle>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{isAdmin ? "Volunteer" : "Race Director"}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Live Comms</span>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="flex-1 overflow-y-auto p-6 space-y-6">
                {messages.map((msg) => (
                    <div key={msg.id} className={cn(
                        "flex flex-col max-w-[80%]",
                        msg.isMe ? "ml-auto items-end" : "items-start"
                    )}>
                        <div className={cn(
                            "p-4 rounded-2xl text-sm font-medium leading-relaxed shadow-sm",
                            msg.isMe
                                ? "bg-[#E67E22] text-white rounded-tr-none shadow-[#E67E22]/20"
                                : "bg-white/10 text-slate-200 rounded-tl-none border border-white/5"
                        )}>
                            {msg.content}
                        </div>
                        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-2">{msg.timestamp}</p>
                    </div>
                ))}
            </CardContent>

            <div className="p-4 bg-white/5 border-t border-white/10 flex gap-2">
                <Input
                    placeholder="Send message to Command..."
                    className="bg-white/5 border-white/10 text-white focus-visible:ring-[#E67E22] h-12 rounded-xl"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <Button
                    className="bg-[#E67E22] hover:bg-[#D35400] h-12 w-12 rounded-xl shadow-lg shadow-[#E67E22]/20 p-0"
                    onClick={handleSend}
                >
                    <Send className="w-5 h-5" />
                </Button>
            </div>
        </Card>
    );
}
