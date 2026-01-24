"use client";

import React, { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Filter, Download } from "lucide-react";
import { generateGhostData } from "@/lib/tejas/data";
import { VolunteerGrid } from "@/components/tejas/VolunteerGrid";
import { Button } from "@/components/ui/button";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import { AddVolunteerModal } from "@/components/tejas/AddVolunteerModal";

function VolunteerHubContent() {
    const { volunteers, assignments, alerts } = useMemo(() => generateGhostData(), []);

    const conflictCount = alerts.filter(a => a.type === 'conflict').length;

    return (
        <div className="space-y-10 animate-in fade-in duration-700">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/f5fece5c-753d-44b5-8371-44d5d5c8223c/TTLogo+%28Full+Color+.9%29_Transparent.png?format=1500w"
                        alt="Tejas Trails"
                        className="h-16 w-auto object-contain brightness-0 invert"
                    />
                    <div>
                        <h1 className="text-4xl font-extrabold text-white tracking-tight leading-none">Volunteer Hub</h1>
                        <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mt-2">Roster Management • RR100</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Button
                        variant="outline"
                        onClick={() => {
                            // Quick CSV Export Logic
                            const headers = ["Name", "Email", "Phone", "Status", "Reliability"];
                            const rows = volunteers.map(v => [
                                v.name,
                                v.email,
                                v.phone,
                                (v as any).status || "unknown",
                                v.reliabilityScore
                            ]);
                            const csvContent = "data:text/csv;charset=utf-8,"
                                + headers.join(",") + "\n"
                                + rows.map(e => e.join(",")).join("\n");
                            const encodedUri = encodeURI(csvContent);
                            const link = document.createElement("a");
                            link.setAttribute("href", encodedUri);
                            link.setAttribute("download", "tejas_volunteers.csv");
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}
                        className="border-white/10 hover:bg-white/5 text-white text-[10px] font-black uppercase tracking-widest px-6 h-12 rounded-2xl"
                    >
                        <Download className="w-4 h-4 mr-2" /> Export CSV
                    </Button>
                    <AddVolunteerModal />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-[#0B1120]/50 border-white/5 backdrop-blur-xl rounded-[2rem] p-8 border-t-white/10">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Total Roster</p>
                    <div className="flex items-baseline gap-4">
                        <span className="text-4xl font-black text-white">{volunteers.length}</span>
                        <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">Active</Badge>
                    </div>
                </Card>

                <Card className="bg-[#0B1120]/50 border-white/5 backdrop-blur-xl rounded-[2rem] p-8 border-t-white/10">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4 text-amber-500">Conflicts Detected</p>
                    <div className="flex items-baseline gap-4">
                        <span className="text-4xl font-black text-amber-500">{conflictCount}</span>
                        {conflictCount > 0 && <span className="text-[10px] font-bold text-slate-500 uppercase">Attention Required</span>}
                    </div>
                </Card>

                <Card className="bg-[#0B1120]/50 border-white/5 backdrop-blur-xl rounded-[2rem] p-8 border-t-white/10">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Avg Reliability</p>
                    <div className="flex items-baseline gap-4">
                        <span className="text-4xl font-black text-white">88%</span>
                        <span className="text-[10px] font-bold text-emerald-500 uppercase">High Performance</span>
                    </div>
                </Card>
            </div>

            <Card className="bg-[#0B1120]/50 border-white/5 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border-t-white/10 shadow-2xl">
                <CardHeader className="p-8 border-b border-white/5 flex flex-row items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#E67E22]/10 flex items-center justify-center text-[#E67E22]">
                            <Users className="w-5 h-5" />
                        </div>
                        <CardTitle className="text-xl font-black uppercase tracking-tight text-white">Volunteer Roster</CardTitle>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="text-slate-500 hover:text-white text-[10px] font-black uppercase tracking-widest">
                            <Filter className="w-3 h-3 mr-2" /> All Stations
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="p-8">
                    <VolunteerGrid volunteers={volunteers} assignments={assignments} isDark />
                </CardContent>
            </Card>
        </div>
    );
}

export default function VolunteerHub() {
    return (
        <ErrorBoundary>
            <VolunteerHubContent />
        </ErrorBoundary>
    );
}
