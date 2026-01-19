"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, Terminal, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

type Message = {
    role: "user" | "agent";
    content: string;
};

export function BuildCoPilot({ projectId, currentStage }: { projectId: string, currentStage: string | number }) {
    const [messages, setMessages] = useState<Message[]>([
        { role: "agent", content: `System Online. I am analyzing Project: ${projectId}. How can I assist with Stage ${currentStage}?` }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = input;
        setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
        setInput("");
        setIsLoading(true);

        try {
            const res = await fetch("/api/agency/chat/private", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: userMsg,
                    projectId,
                    currentStage
                }),
            });
            const data = await res.json();

            if (data.response) {
                setMessages((prev) => [...prev, { role: "agent", content: data.response }]);
            } else {
                setMessages((prev) => [...prev, { role: "agent", content: "Error: Protocol Failure." }]);
            }
        } catch (err) {
            setMessages((prev) => [...prev, { role: "agent", content: "Connection Lost." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="h-[400px] flex flex-col border-slate-300 dark:border-slate-700 shadow-md">
            <CardHeader className="py-3 px-4 border-b bg-slate-50/50">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Terminal className="h-4 w-4 text-emerald-600" />
                        <CardTitle className="text-sm font-mono font-bold text-slate-700">Build Co-Pilot</CardTitle>
                    </div>
                    <Badge variant="outline" className="text-[10px] bg-emerald-50 text-emerald-700 border-emerald-200">
                        Active: @architect
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="flex-1 p-0 overflow-hidden relative bg-slate-950">
                {/* Terminal Effect Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]"></div>

                <ScrollArea className="h-full p-4 font-mono text-xs">
                    <div className="space-y-4">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "flex flex-col gap-1 max-w-[90%]",
                                    msg.role === "user" ? "ml-auto items-end" : "items-start"
                                )}
                            >
                                <span className="text-[10px] uppercase opacity-50 text-slate-400">
                                    {msg.role === "user" ? "USER" : "SYSTEM"}
                                </span>
                                <div
                                    className={cn(
                                        "px-3 py-2 rounded-sm border",
                                        msg.role === "user"
                                            ? "bg-slate-800 border-slate-700 text-slate-200"
                                            : "bg-emerald-950/30 border-emerald-900/50 text-emerald-400"
                                    )}
                                >
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex items-center gap-2 text-emerald-500 animate-pulse">
                                <AlertCircle className="h-3 w-3" />
                                <span>Processing Directive...</span>
                            </div>
                        )}
                    </div>
                </ScrollArea>
            </CardContent>
            <div className="p-2 bg-slate-50 border-t">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSend();
                    }}
                    className="flex items-center gap-2"
                >
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="h-8 text-xs font-mono border-slate-300 focus-visible:ring-emerald-500"
                        placeholder="Input command..."
                        disabled={isLoading}
                    />
                    <Button type="submit" size="icon" className="h-8 w-8 bg-slate-900 hover:bg-slate-800" disabled={isLoading}>
                        <Send className="h-3 w-3" />
                    </Button>
                </form>
            </div>
        </Card>
    );
}
