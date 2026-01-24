"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import type { SimulatedProject } from "@/lib/simulation/agency-data";

interface ProjectsTableProps {
    projects: SimulatedProject[];
}

const stageBadgeVariants: Record<number, string> = {
    1: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    2: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    3: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    4: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    5: "bg-slate-500/10 text-slate-600 border-slate-500/20",
};

const statusStyles: Record<string, string> = {
    building: "text-emerald-500",
    paused: "text-amber-500",
    complete: "text-slate-400",
    error: "text-red-500",
};

export function ProjectsTable({ projects }: ProjectsTableProps) {
    const sortedProjects = [...projects].sort((a, b) =>
        b.lastActionTime.getTime() - a.lastActionTime.getTime()
    ).slice(0, 15);

    const formatTime = (date: Date) => {
        const mins = Math.round((Date.now() - date.getTime()) / 60000);
        if (mins < 60) return `${mins}m ago`;
        return `${Math.round(mins / 60)}h ago`;
    };

    return (
        <Card className="lg:col-span-1">
            <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">Active Projects</CardTitle>
                    <Badge variant="secondary" className="text-xs">{projects.length} Total</Badge>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <ScrollArea className="h-[280px]">
                    <div className="divide-y divide-border">
                        {sortedProjects.map((project) => (
                            <Link
                                key={project.id}
                                href={`/project?id=${project.id}`}
                                className="block px-4 py-3 hover:bg-muted/50 transition-colors"
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <span className="font-medium text-sm truncate max-w-[120px]">{project.name}</span>
                                    <Badge
                                        variant="outline"
                                        className={`text-[10px] px-1.5 py-0 ${stageBadgeVariants[project.stage]}`}
                                    >
                                        {project.stageName}
                                    </Badge>
                                </div>
                                <div className="flex items-center justify-between text-xs text-muted-foreground">
                                    <span className="truncate max-w-[100px]">{project.clientName}</span>
                                    <span className={statusStyles[project.status]}>
                                        {project.status === "building" ? "● Building" : project.status}
                                    </span>
                                </div>
                                <p className="text-[10px] text-muted-foreground mt-1 truncate">
                                    {project.lastAction} • {formatTime(project.lastActionTime)}
                                </p>
                            </Link>
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    );
}
