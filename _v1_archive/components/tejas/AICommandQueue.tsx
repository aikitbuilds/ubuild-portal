"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, CloudRain, Droplets, MapPin, UserX, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface AIAlert {
    id: string;
    type: 'weather' | 'logistics' | 'personnel';
    severity: 'red' | 'yellow';
    message: string;
    recommendation: string;
    location: string;
    timestamp: string;
}

export function AICommandQueue() {
    const [alerts, setAlerts] = useState<AIAlert[]>([
        {
            id: 'a1',
            type: 'weather',
            severity: 'yellow',
            message: "Heavy rain predicted at 2:00 PM for Aid Station 4 (Loop 2).",
            recommendation: "Deploy extra canopy & dry socks.",
            location: "Aid Station 4",
            timestamp: "Now"
        },
        {
            id: 'a2',
            type: 'logistics',
            severity: 'yellow',
            message: "Water supplies projecting low at Headquarters by 4:30 PM based on current consumption.",
            recommendation: "Dispatch supply truck.",
            location: "Headquarters",
            timestamp: "5m ago"
        },
        {
            id: 'a3',
            type: 'personnel',
            severity: 'red',
            message: "Volunteer 'Sarah J.' has not checked in (15 min late). Risk Score: 85%.",
            recommendation: "Activate Backup List.",
            location: "Gate (AS2)",
            timestamp: "15m ago"
        }
    ]);

    const handleApprove = (id: string) => {
        setAlerts(alerts.filter(a => a.id !== id));
    };

    return (
        <Card className="bg-[#0B1120]/50 border-white/5 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border-t-white/10 shadow-2xl h-full flex flex-col">
            <div className="p-8 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                        <AlertCircle className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-black uppercase tracking-tight text-white">AI Command Queue</h3>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Intelligent Triage</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Badge variant="outline" className="bg-purple-500/10 text-purple-500 border-purple-500/20 text-[8px] font-black">AI ACTIVE</Badge>
                </div>
            </div>
            <CardContent className="p-0 flex-1 overflow-y-auto max-h-[600px] custom-scrollbar">
                {alerts.length === 0 ? (
                    <div className="p-12 text-center text-slate-500 flex flex-col items-center">
                        <CheckCircle2 className="w-12 h-12 mb-4 opacity-20" />
                        <p className="font-bold">All clear.</p>
                        <p className="text-xs">No critical anomalies detected.</p>
                    </div>
                ) : (
                    <div className="divide-y divide-white/5">
                        {alerts.map((alert) => (
                            <div key={alert.id} className="p-6 hover:bg-white/[0.02] transition-colors group">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="space-y-3 flex-1">
                                        <div className="flex items-center gap-2">
                                            <div className={cn(
                                                "w-2 h-2 rounded-full animate-pulse",
                                                alert.severity === 'red' ? "bg-red-500" : "bg-amber-500"
                                            )} />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-1">
                                                {alert.type === 'weather' && <CloudRain className="w-3 h-3" />}
                                                {alert.type === 'logistics' && <Droplets className="w-3 h-3" />}
                                                {alert.type === 'personnel' && <UserX className="w-3 h-3" />}
                                                {alert.location} • {alert.timestamp}
                                            </span>
                                        </div>
                                        <p className="text-sm font-bold text-white line-clamp-2 leading-relaxed">
                                            {alert.message}
                                        </p>
                                        <div className="bg-purple-500/5 border border-purple-500/10 rounded-2xl p-4 space-y-2">
                                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-purple-400">
                                                <MapPin className="w-3 h-3" /> Recommendation
                                            </div>
                                            <p className="text-xs text-slate-300 font-medium">
                                                {alert.recommendation}
                                            </p>
                                        </div>
                                    </div>
                                    <Button
                                        onClick={() => handleApprove(alert.id)}
                                        className="bg-white/5 hover:bg-emerald-500 hover:text-white text-slate-400 rounded-xl text-[10px] font-black uppercase tracking-widest h-10 px-4 transition-colors"
                                    >
                                        Resolve
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
