"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { TejasSidebar } from "@/components/tejas/TejasSidebar";
import { Search, Bell, Clock } from "lucide-react";

export default function TejasLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isMobileCheckIn = pathname?.includes("/tejas/checkin");

    if (isMobileCheckIn) {
        return (
            <div className="min-h-screen bg-[#0B1120] text-slate-200">
                {children}
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0B1120] text-slate-200 flex">
            <TejasSidebar />

            <div className="flex-1 ml-64 flex flex-col">
                {/* Top Navbar */}
                <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-[#0B1120]/80 backdrop-blur-md sticky top-0 z-40">
                    <div className="relative w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                            type="text"
                            placeholder="Search volunteers, races, crew, gear..."
                            className="w-full h-11 bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 text-sm focus:outline-none focus:border-[#E67E22]/50 transition-colors"
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-500 tracking-widest bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                            <Clock className="w-3 h-3 text-[#E67E22]" />
                            Updated: Jan 21, 2026: 7:02 AM
                        </div>
                        <button className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                            <Bell className="w-5 h-5 text-slate-400" />
                            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#E67E22] rounded-full ring-2 ring-[#0B1120]" />
                        </button>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="flex-1 p-8">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
