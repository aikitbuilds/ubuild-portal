"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    MapPin,
    UserCheck,
    Settings,
    ChevronLeft,
    ArrowLeft,
    Users,
    AlertCircle
} from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";

const menuItems = [
    { icon: LayoutDashboard, label: "Command Center", href: "/tejas/dashboard" },
    { icon: Users, label: "Volunteer Hub", href: "/tejas/volunteer-hub" },
    { icon: UserCheck, label: "Mobile Check-In", href: "/tejas/checkin" },
];

export function TejasSidebar() {
    const pathname = usePathname();

    return (
        <div className="w-64 bg-[#0B1120] border-r border-white/5 flex flex-col h-full fixed left-0 top-0 z-50">
            <div className="p-6">
                <div className="flex items-center gap-3 mb-10">
                    <div className="bg-white/10 p-2 rounded-xl">
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/f5fece5c-753d-44b5-8371-44d5d5c8223c/TTLogo+%28Full+Color+.9%29_Transparent.png?format=1500w"
                            alt="Tejas Trails"
                            className="h-8 w-auto object-contain"
                        />
                    </div>
                    <div>
                        <h2 className="text-white font-black text-sm tracking-tight uppercase">Admin Portal</h2>
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Tejas Trails Ops</p>
                    </div>
                </div>

                <nav className="space-y-1">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-all group border border-transparent",
                                pathname === item.href
                                    ? "bg-[#1E293B] text-[#E67E22] shadow-xl shadow-black/20 border-[#E67E22]/20 ring-1 ring-[#E67E22]/10"
                                    : "text-slate-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <item.icon className={cn(
                                "w-5 h-5 transition-colors",
                                pathname === item.href ? "text-[#E67E22]" : "text-slate-500 group-hover:text-white"
                            )} />
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>

            <div className="mt-auto p-6 space-y-4">
                {/* <Link
                    href="/dashboard"
                    className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg text-sm font-bold transition-all"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Dashboard
                </Link> */}

                <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E67E22] to-[#D35400] flex items-center justify-center font-black text-white text-xs">
                        MC
                    </div>
                    <div>
                        <p className="text-white text-xs font-bold leading-none">Cong Michael</p>
                        <p className="text-slate-500 text-[10px] uppercase font-bold mt-1">Administrator</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
