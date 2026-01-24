"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { LogEntry } from "@/lib/firebase/schema";

interface LiveTerminalFeedProps {
    logs: LogEntry[];
}

export function LiveTerminalFeed({ logs }: LiveTerminalFeedProps) {
    return (
        <Card className="h-full border-t-4 border-t-slate-500 bg-slate-950 text-slate-50 shadow-md">
            <CardHeader className="pb-3 border-b border-slate-800">
                <CardTitle className="text-sm font-mono flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    MISSION CONTROL // LIVE LOGS
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <ScrollArea className="h-[300px] p-4 font-mono text-xs">
                    <div className="space-y-1">
                        {logs.length === 0 && (
                            <span className="text-slate-500 italic opacity-50">Waiting for signal...</span>
                        )}
                        {logs.map((log) => (
                            <div key={log.id} className="flex gap-2">
                                <span className="text-slate-500 shrink-0">
                                    [{new Date(log.timestamp).toLocaleTimeString()}]
                                </span>
                                <span
                                    className={
                                        log.type === "error"
                                            ? "text-red-400"
                                            : log.type === "success"
                                                ? "text-emerald-400"
                                                : "text-slate-300"
                                    }
                                >
                                    {log.type.toUpperCase()}: {log.message}
                                </span>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    );
}
