'use client';

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { StationCard } from "@/components/tejas/StationCard";
import { getVolunteersClient, SheetVolunteer } from "@/lib/tejas/api";
import { Loader2, Plus, LayoutGrid, Activity, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { getStationCategory, StationCategory } from "@/lib/station-config";

interface StationData {
    name: string;
    volunteers: SheetVolunteer[];
    totalSlots: number;
    category: StationCategory;
}

export function StationTab() {
    const [loading, setLoading] = useState(true);
    const [stations, setStations] = useState<StationData[]>([]);
    const [allVolunteers, setAllVolunteers] = useState<SheetVolunteer[]>([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function load() {
            setLoading(true);
            const res = await getVolunteersClient();
            if (res.success && res.data) {
                setAllVolunteers(res.data);
                const stationMap = new Map<string, SheetVolunteer[]>();

                res.data.forEach(row => {
                    // Skip rows marked as headers (metadata)
                    if (row.isHeader) return;

                    const stationName = row.childStation || "General Support";
                    if (!stationMap.has(stationName)) {
                        stationMap.set(stationName, []);
                    }
                    stationMap.get(stationName)!.push(row);
                });

                const mapCategory = (backendCat?: string): StationCategory => {
                    const normalized = (backendCat || '').toUpperCase();
                    switch (normalized) {
                        case 'RACE HUB': return 'race_hub';
                        case 'AID STATIONS': return 'aid_stations';
                        case 'COURSE SAFETY': return 'safety';
                        case 'LOGISTICS': return 'logistics';
                        case 'LEADERSHIP': return 'leadership';
                        case 'SPECIALTY': return 'specialty';
                        default: return 'uncategorized';
                    }
                };

                const list: StationData[] = Array.from(stationMap.entries())
                    .map(([name, volunteers]) => {
                        const representative = volunteers[0];
                        return {
                            name,
                            volunteers,
                            totalSlots: Math.max(volunteers.length, 5),
                            category: mapCategory(representative.parentCategory)
                        };
                    })
                    .filter(s => {
                        const isUncategorized = s.category === 'uncategorized' ||
                            s.name === 'General Support' ||
                            s.name === 'Uncategorized';
                        return !isUncategorized;
                    });

                // Sort stations alphabetically
                list.sort((a, b) => a.name.localeCompare(b.name));

                setStations(list);
            }
            setLoading(false);
        }
        load();
    }, []);

    console.log("StationTab Rendering with", stations.length, "stations");

    const filtered = stations.filter(s =>
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.volunteers.some(v => (v.firstName + " " + v.lastName).toLowerCase().includes(search.toLowerCase()))
    );

    const getCategoryBadge = (cat: StationCategory) => {
        switch (cat) {
            case 'safety': return <span className="text-[9px] font-black uppercase tracking-widest bg-red-500/20 text-red-500 px-2 py-0.5 rounded border border-red-500/30">Medical & Safety</span>;
            case 'aid_stations': return <span className="text-[9px] font-black uppercase tracking-widest bg-emerald-500/20 text-emerald-500 px-2 py-0.5 rounded border border-emerald-500/30">Aid Station</span>;
            case 'logistics': return <span className="text-[9px] font-black uppercase tracking-widest bg-blue-500/20 text-blue-500 px-2 py-0.5 rounded border border-blue-500/30">Logistics</span>;
            case 'race_hub': return <span className="text-[9px] font-black uppercase tracking-widest bg-violet-500/20 text-violet-500 px-2 py-0.5 rounded border border-violet-500/30">Race Hub</span>;
            case 'leadership': return <span className="text-[9px] font-black uppercase tracking-widest bg-purple-500/20 text-purple-500 px-2 py-0.5 rounded border border-purple-500/30">Leadership</span>;
            case 'specialty': return <span className="text-[9px] font-black uppercase tracking-widest bg-cyan-500/20 text-cyan-500 px-2 py-0.5 rounded border border-cyan-500/30">Specialty</span>;
            case 'support': return <span className="text-[9px] font-black uppercase tracking-widest bg-amber-500/20 text-emerald-500 px-2 py-0.5 rounded border border-emerald-500/30">Course Support</span>;
            default: return <span className="text-[9px] font-black uppercase tracking-widest bg-slate-500/20 text-slate-500 px-2 py-0.5 rounded border border-slate-500/30">Uncategorized</span>;
        }
    };

    if (loading) return (
        <div className="h-64 flex flex-col items-center justify-center gap-5">
            <Loader2 className="h-8 w-8 animate-spin text-emerald-500" />
            <p className="text-[10px] font-black text-emerald-500/50 uppercase tracking-widest animate-pulse">Mapping Support Sectors...</p>
        </div>
    );

    const hasResults = filtered.length > 0;

    return (
        <div className="space-y-8 animate-in fade-in duration-600">
            {/* Control Center Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl gap-6">
                <div className="flex items-center gap-6">
                    <div className="h-12 w-12 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 shadow-inner">
                        <LayoutGrid className="h-6 w-6 text-emerald-500" />
                    </div>
                    <div>
                        <h3 className="font-black text-white font-sans text-xl uppercase tracking-tight">Active Sectors</h3>
                        <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">
                            {filtered.length} Posts Online
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="relative group flex-1 md:flex-none md:min-w-[280px]">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500 group-focus-within:text-emerald-500 transition-colors" />
                        <Input
                            placeholder="Find sector or personnel..."
                            className="pl-9 h-10 bg-slate-950 border-slate-800 rounded-lg focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 font-bold text-sm text-slate-200 placeholder:text-slate-600"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-24">
                {filtered.map((station, idx) => (
                    <div key={idx} className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-500 relative" style={{ animationDelay: `${idx * 20}ms` }}>
                        <div className="absolute -top-3 left-4 z-10">
                            {getCategoryBadge(station.category)}
                        </div>
                        <StationCard
                            title={station.name}
                            volunteers={station.volunteers}
                            totalSlots={station.totalSlots}
                            allVolunteers={allVolunteers}
                        />
                    </div>
                ))}

                {!hasResults && (
                    <div className="col-span-full py-32 text-center bg-slate-900 border-2 border-dashed border-slate-800 rounded-[2rem] space-y-4 opacity-50">
                        <div className="h-20 w-20 bg-slate-950 rounded-[2rem] flex items-center justify-center mx-auto border border-slate-800">
                            <Activity className="h-10 w-10 text-slate-700" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-xl font-black text-slate-500 uppercase tracking-widest">No Sector Found</h3>
                            <p className="text-slate-600 font-bold text-xs uppercase tracking-widest">Adjust filters to re-establish sector view</p>
                        </div>
                    </div>
                )}
            </div>
            <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-emerald-500/5 blur-[150px] pointer-events-none -z-10"></div>
        </div>
    );
}
