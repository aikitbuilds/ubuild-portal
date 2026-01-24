"use client";

import { useState } from "react";
import { SheetVolunteer } from "@/lib/google-sheets";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { LayoutGrid, List, Search } from "lucide-react";
import { StationCard } from "./StationCard";
import { OpsStats } from "./OpsStats";
import { MirrorRowActions } from "./MirrorRowActions";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface DashboardClientProps {
    hierarchy: Record<string, Record<string, SheetVolunteer[]>>;
    sortedParents: string[];
    uniqueCount: number;
    totalShifts: number;
    conflictCount: number;
    checkedInCount: number;
    allVolunteers: SheetVolunteer[]; // Generic master list
}

export function DashboardClient({
    hierarchy,
    sortedParents,
    uniqueCount,
    totalShifts,
    conflictCount,
    checkedInCount,
    allVolunteers
}: DashboardClientProps) {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [searchQuery, setSearchQuery] = useState("");

    // Filter master list
    const filteredVolunteers = allVolunteers.filter(v => {
        const search = searchQuery.toLowerCase();
        return (
            v.firstName.toLowerCase().includes(search) ||
            v.lastName.toLowerCase().includes(search) ||
            v.role.toLowerCase().includes(search) ||
            v.email.toLowerCase().includes(search)
        );
    });

    return (
        <div className="space-y-6">
            {/* Unassigned Explanation Banner */}
            <div className="bg-blue-900/20 border border-blue-900/50 rounded-lg p-3 flex items-start gap-3">
                <div className="text-blue-400 mt-0.5">ℹ️</div>
                <div className="text-sm text-slate-300">
                    <strong>What is "Unassigned"?</strong>
                    <p className="text-slate-400 mt-1">
                        These are volunteers from the "General Pool" (Supply) who have not been matched to a specific station yet.
                        They are your available bench.
                    </p>
                </div>
            </div>

            {/* Top Controls */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-900 p-4 rounded-xl border border-slate-800 shadow-sm">

                <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">View Mode:</span>
                    <div className="flex items-center gap-1 bg-slate-950 rounded-lg border border-slate-800 p-1">
                        <Button
                            size="sm"
                            variant={viewMode === 'grid' ? 'default' : 'ghost'}
                            className={cn("gap-2", viewMode === 'grid' ? "bg-blue-600 text-white hover:bg-blue-700" : "text-slate-400 hover:text-white hover:bg-slate-800")}
                            onClick={() => setViewMode('grid')}
                        >
                            <LayoutGrid className="h-4 w-4" />
                            Station Cards
                        </Button>
                        <Button
                            size="sm"
                            variant={viewMode === 'list' ? 'default' : 'ghost'}
                            className={cn("gap-2", viewMode === 'list' ? "bg-blue-600 text-white hover:bg-blue-700" : "text-slate-400 hover:text-white hover:bg-slate-800")}
                            onClick={() => setViewMode('list')}
                        >
                            <List className="h-4 w-4" />
                            Master List
                        </Button>
                    </div>
                </div>

                {viewMode === 'list' && (
                    <div className="relative w-full md:w-72">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-500" />
                        <Input
                            placeholder="Find volunteer..."
                            className="pl-8 bg-slate-950 border-slate-800 text-slate-200 placeholder:text-slate-600"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                )}
            </div>

            {/* View Content */}
            {viewMode === 'grid' ? (
                <div className="space-y-12">
                    {sortedParents.map(parentName => (
                        <div key={parentName} className="space-y-4">
                            <div className="flex items-center gap-3 border-l-4 border-blue-600 pl-4 py-1">
                                <h2 className="text-xl font-black tracking-tight text-white uppercase italic">
                                    {parentName}
                                </h2>
                                <Badge variant="outline" className="border-slate-800 text-slate-500 font-mono">
                                    {Object.keys(hierarchy[parentName]).length} STATIONS
                                </Badge>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {Object.entries(hierarchy[parentName]).map(([childName, volunteers]) => (
                                    <StationCard
                                        key={childName}
                                        title={childName}
                                        volunteers={volunteers}
                                        totalSlots={5} // Placeholder
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="rounded-md border border-slate-800 bg-slate-900 overflow-hidden">
                    <Table>
                        <TableHeader className="bg-slate-950">
                            <TableRow className="border-slate-800 hover:bg-slate-950">
                                <TableHead className="text-slate-400">Name</TableHead>
                                <TableHead className="text-slate-400">Role</TableHead>
                                <TableHead className="text-slate-400">Shift</TableHead>
                                <TableHead className="text-slate-400">Status</TableHead>
                                <TableHead className="text-right text-slate-400">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredVolunteers.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="h-24 text-center text-slate-500">
                                        No volunteers found.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredVolunteers.map((vol) => (
                                    <TableRow key={vol.rowNumber} className="border-slate-800 hover:bg-slate-800/50">
                                        <TableCell>
                                            <div className="font-medium text-slate-200">{vol.firstName} {vol.lastName}</div>
                                            {/* Hide generic/placeholder emails from display if needed, but show real ones */}
                                            {vol.email && !vol.email.includes("Tejas") && (
                                                <div className="text-xs text-slate-500">{vol.email}</div>
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className="border-slate-700 text-slate-300">{vol.role}</Badge>
                                        </TableCell>
                                        <TableCell className="text-sm font-mono text-slate-500">
                                            {vol.shiftTime}
                                        </TableCell>
                                        <TableCell>
                                            {vol.status ? (
                                                <Badge variant={vol.status.includes('Check') ? 'default' : 'secondary'} className={vol.status.includes('Check') ? "bg-green-900 text-green-300 hover:bg-green-800" : "bg-slate-800 text-slate-400"}>
                                                    {vol.status}
                                                </Badge>
                                            ) : (
                                                <span className="text-xs text-slate-600">-</span>
                                            )}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end">
                                                <MirrorRowActions
                                                    rowNumber={vol.rowNumber}
                                                    volunteerName={vol.firstName}
                                                    status={vol.status}
                                                    compact={true}
                                                />
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            )}
        </div>
    );
}
