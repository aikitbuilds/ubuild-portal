"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    FileCode,
    Rocket,
    Settings,
    Bot,
    Hammer,
    ChevronsUpDown,
    PlusCircle,
    FolderDot,
    Mic
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const sidebarItems = [
    {
        title: "Mission Control",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "New Submission",
        href: "/dashboard/submission",
        icon: Mic,
    },
    {
        title: "Blueprints (Stage 2)",
        href: "/dashboard/blueprints",
        icon: FileCode,
    },
    {
        title: "Construction (Stage 3)",
        href: "/dashboard/build",
        icon: Hammer,
    },
    {
        title: "Prototype",
        href: "/dashboard/prototype",
        icon: Rocket,
    },
    {
        title: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
    },
];

export function Sidebar() {
    const pathname = usePathname();
    const [activeProject, setActiveProject] = React.useState("uBuild Framework");

    return (
        <div className="flex flex-col h-full border-r bg-card w-64">
            {/* Project Switcher */}
            <div className="p-4 border-b">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-full justify-between h-12 px-3 border-dashed hover:border-primary">
                            <div className="flex items-center gap-2 text-left">
                                <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center text-primary">
                                    <Bot className="h-4 w-4" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-semibold leading-none truncate w-[100px]">{activeProject}</span>
                                    <span className="text-[10px] text-muted-foreground">Active Workspace</span>
                                </div>
                            </div>
                            <ChevronsUpDown className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="start">
                        <DropdownMenuLabel>Active Projects</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => setActiveProject("uBuild Framework")}>
                            <Bot className="mr-2 h-4 w-4" /> uBuild Framework
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setActiveProject("Demo Client A")}>
                            <FolderDot className="mr-2 h-4 w-4" /> Demo Client A
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link href="/dashboard/new" className="cursor-pointer text-primary font-medium">
                                <PlusCircle className="mr-2 h-4 w-4" /> New Project
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="flex-1 py-6 px-4 space-y-2">
                <div className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Menu
                </div>
                {sidebarItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800",
                            pathname === item.href
                                ? "bg-slate-100 text-primary font-bold dark:bg-slate-800"
                                : "text-slate-500"
                        )}
                    >
                        <item.icon className="h-4 w-4" />
                        {item.title}
                    </Link>
                ))}
            </div>

            <div className="p-4 border-t bg-muted/30">
                <div className="flex items-center justify-between mb-3">
                    <div className="rounded-md bg-muted p-3 flex-1 mr-2">
                        <p className="text-xs font-medium mb-1">Status: Online</p>
                        <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>Agent Swarm Active</span>
                        </div>
                    </div>
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
}
