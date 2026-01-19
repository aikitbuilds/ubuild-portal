"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

export interface FeedItem {
    agent: string;
    action: string;
    time: string;
    type: "system" | "waiting" | "success" | "error" | "active";
}

interface LiveBuildFeedProps {
    items?: FeedItem[];
}

const defaultFeedData: FeedItem[] = [
    { agent: "@agency-orchestrator", action: "System Initialized", time: "Just now", type: "system" },
    { agent: "@market-researcher", action: "Waiting for intake...", time: "Just now", type: "waiting" },
];

export function LiveBuildFeed({ items }: LiveBuildFeedProps) {
    const feedData = items || defaultFeedData;

    const getBadgeVariant = (type: FeedItem["type"]) => {
        switch (type) {
            case "success": return "default";
            case "error": return "destructive";
            case "system": return "secondary";
            case "active": return "default";
            default: return "outline";
        }
    };

    return (
        <Card className="col-span-1 md:col-span-1 lg:col-span-2 h-full">
            <CardHeader>
                <CardTitle>Live Agency Feed</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[300px] w-full pr-4">
                    <div className="space-y-4">
                        {feedData.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0"
                            >
                                <div className="flex flex-col gap-1">
                                    <span className={`font-semibold text-sm ${item.type === "active" ? "animate-pulse" : ""}`}>
                                        {item.agent}
                                    </span>
                                    <span className="text-xs text-muted-foreground">{item.action}</span>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    <span className="text-xs text-muted-foreground">{item.time}</span>
                                    <Badge
                                        variant={getBadgeVariant(item.type)}
                                        className="text-[10px] h-5"
                                    >
                                        {item.type}
                                    </Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    );
}
