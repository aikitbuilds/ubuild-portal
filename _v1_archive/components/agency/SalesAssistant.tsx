"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, MessageSquare, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
    role: "user" | "agent";
    content: string;
};

export function SalesAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "agent", content: "Hi! I'm the uBuild Sales Agent. Ask me about our 5-Stage Construction Engine!" }
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
            const res = await fetch("/api/agency/chat/public", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMsg }),
            });
            const data = await res.json();

            if (data.response) {
                setMessages((prev) => [...prev, { role: "agent", content: data.response }]);
            } else {
                setMessages((prev) => [...prev, { role: "agent", content: "I encountered an error. Please try again." }]);
            }
        } catch (err) {
            setMessages((prev) => [...prev, { role: "agent", content: "Connection failed." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Floating Toggle Button */}
            {!isOpen && (
                <Button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg border-2 border-white z-50 animate-bounce"
                >
                    <MessageSquare className="h-6 w-6" />
                </Button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <Card className="fixed bottom-6 right-6 w-80 sm:w-96 shadow-xl border-primary z-50 animate-in slide-in-from-bottom-10 fade-in duration-300">
                    <CardHeader className="bg-primary text-primary-foreground p-4 rounded-t-lg flex flex-row items-center justify-between space-y-0">
                        <div className="flex items-center gap-2">
                            <div className="bg-white/20 p-1.5 rounded-full">
                                <Bot className="h-4 w-4" />
                            </div>
                            <div>
                                <CardTitle className="text-sm font-bold">uBuild Sales Agent</CardTitle>
                                <p className="text-[10px] opacity-80">Online • AI Powered</p>
                            </div>
                        </div>
                        <Button variant="ghost" size="icon" className="h-6 w-6 text-white hover:bg-white/20" onClick={() => setIsOpen(false)}>
                            <X className="h-4 w-4" />
                        </Button>
                    </CardHeader>
                    <CardContent className="p-0">
                        <ScrollArea className="h-72 p-4">
                            <div className="space-y-4">
                                {messages.map((msg, i) => (
                                    <div
                                        key={i}
                                        className={cn(
                                            "flex w-max max-w-[80%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                                            msg.role === "user"
                                                ? "ml-auto bg-primary text-primary-foreground"
                                                : "bg-muted"
                                        )}
                                    >
                                        {msg.content}
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="bg-muted w-max rounded-lg px-3 py-2 text-xs italic text-muted-foreground animate-pulse">
                                        Typing...
                                    </div>
                                )}
                            </div>
                        </ScrollArea>
                    </CardContent>
                    <CardFooter className="p-3 border-t">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSend();
                            }}
                            className="flex w-full items-center space-x-2"
                        >
                            <Input
                                placeholder="Ask about pricing..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1 h-9 text-xs"
                            />
                            <Button type="submit" size="sm" className="h-9 px-3" disabled={isLoading}>
                                Send
                            </Button>
                        </form>
                    </CardFooter>
                </Card>
            )}
        </>
    );
}
