"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft, FileCode, ShieldCheck, Key, Table as TableIcon, RefreshCw } from "lucide-react";

export default function GoogleSetupGuidePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans pb-20">
            <nav className="p-8 sticky top-0 bg-slate-950/80 backdrop-blur-md z-50 border-b border-white/5">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <Link href="/tejas" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs font-bold uppercase tracking-widest">Back to Hub</span>
                    </Link>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF8C00]">Admin Protocol v1.0</div>
                </div>
            </nav>

            <article className="max-w-3xl mx-auto px-6 pt-20 space-y-12">
                <header className="space-y-4">
                    <div className="p-3 w-fit rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                        <ShieldCheck className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white">Google Sheets <br />Sync Setup</h1>
                    <p className="text-xl text-slate-400 font-medium leading-relaxed">
                        Follow this guide to securely connect TejasOS to your race rosters stored in Google Sheets.
                    </p>
                </header>

                {[
                    {
                        title: "1. Create Service Account",
                        icon: <FileCode className="w-5 h-5 text-[#FF8C00]" />,
                        steps: [
                            "Go to the Google Cloud Console.",
                            "Navigate to IAM & Admin > Service Accounts.",
                            "Create a new account (e.g., tejasos-sync).",
                            "Grant the role 'Editor' (optional but recommended)."
                        ]
                    },
                    {
                        title: "2. Generate JSON Key",
                        icon: <Key className="w-5 h-5 text-[#FF8C00]" />,
                        steps: [
                            "Click on your new service account email.",
                            "Go to the Keys tab.",
                            "Add Key > Create New Key > JSON.",
                            "Securely download and save the generated file."
                        ]
                    },
                    {
                        title: "3. Configure Environment",
                        icon: <ShieldCheck className="w-5 h-5 text-[#FF8C00]" />,
                        content: (
                            <div className="p-6 bg-black rounded-2xl space-y-4 border border-white/5">
                                <p className="text-sm text-slate-400 font-medium">Add these to your .env.local:</p>
                                <div className="font-mono text-[10px] text-emerald-400 leading-relaxed bg-white/5 p-4 rounded-xl">
                                    GOOGLE_SERVICE_ACCOUNT_EMAIL="your-email@..."<br />
                                    GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n"
                                </div>
                            </div>
                        )
                    },
                    {
                        title: "4. Share the Sheet",
                        icon: <TableIcon className="w-5 h-5 text-[#FF8C00]" />,
                        steps: [
                            "Open your Google Sheet.",
                            "Share it with your Service Account Email as 'Viewer'.",
                            "Copy the Sheet ID from the URL."
                        ]
                    },
                    {
                        title: "5. Integration Sync",
                        icon: <RefreshCw className="w-5 h-5 text-[#FF8C00]" />,
                        steps: [
                            "Ensure column headers match required format (Name, Email, Phone, etc.).",
                            "Navigate to the Admin Dashboard.",
                            "Click 'Sync Roster' to initiate ingestion."
                        ]
                    }
                ].map((section, idx) => (
                    <section key={idx} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                                {section.icon}
                            </div>
                            <h2 className="text-2xl font-black uppercase tracking-tight text-white">{section.title}</h2>
                        </div>

                        {section.steps && (
                            <ul className="space-y-4">
                                {section.steps.map((step, i) => (
                                    <li key={i} className="flex gap-4 text-slate-400 font-medium">
                                        <span className="text-[#FF8C00] font-black">•</span>
                                        {step}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {section.content}
                    </section>
                ))}

                <footer className="py-10 text-center">
                    <p className="text-slate-500 text-xs uppercase tracking-widest font-black">Admin Access Required for Setup</p>
                </footer>
            </article>
        </div>
    );
}
