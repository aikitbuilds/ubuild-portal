'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Clock, User, ShieldCheck, Truck, HeartPulse, Store, Timer, Users } from "lucide-react";

interface LeadMember {
    role: string;
    name: string;
    email?: string;
    phone?: string;
    availability?: string;
}

interface Department {
    name: string;
    icon: React.ReactNode;
    color: string;
    members: LeadMember[];
}

const commandData: Department[] = [
    {
        name: "Race Direction",
        icon: <ShieldCheck className="h-5 w-5" />,
        color: "text-emerald-500",
        members: [
            { role: "R.D.", name: "Dave Smithey", email: "Dave@tejastrails.com", phone: "615-606-8717", availability: "Tuesday - Sunday" },
            { role: "ASS'T RD / VOLS", name: "Brooke Berg", email: "Brooke@tejastrails.com", phone: "(641) 797-9235", availability: "Tuesday - Sunday" }
        ]
    },
    {
        name: "Logistics Team",
        icon: <Truck className="h-5 w-5" />,
        color: "text-blue-500",
        members: [
            { role: "LOGISTICS", name: "Chad Lasater", email: "chadlasater@yahoo.com", phone: "(281) 798-8367", availability: "Tuesday - Sunday" },
            { role: "LOGISTICS", name: "Jason Hanley", email: "jason@wildsensegoods.com", phone: "409-728-1099", availability: "Monday - Sunday" },
            { role: "LOGISTICS", name: "Walker Nikolaus", email: "nikolausw@georgetownisd.org", phone: "(325) 428-7766", availability: "Friday late - Sunday afternoon" },
            { role: "LOGISTICS", name: "Jonathan Thomas", email: "Jonathan.D.Thomas@outlook.com", phone: "(806) 717-3053", availability: "Friday late - Sunday afternoon" }
        ]
    },
    {
        name: "Operations & Admin",
        icon: <Users className="h-5 w-5" />,
        color: "text-amber-500",
        members: [
            { role: "VOLUNTEERS", name: "Brooke Berge", email: "dave@tejastrails.com" },
            { role: "PPU", name: "Andria Marsh", email: "brooke@tejastrails.com" },
            { role: "STORE", name: "Zoe Smithey", email: "geddyhamblen@gmail.com" },
            { role: "RACE HUB CAPT'N", name: "John Frey" }
        ]
    },
    {
        name: "Safety & Medical",
        icon: <HeartPulse className="h-5 w-5" />,
        color: "text-red-500",
        members: [
            { role: "MEDICAL (Lead)", name: "Janelle Uroff", email: "janelle.uroff@gmail.com" },
            { role: "MEDICAL", name: "Becky Spaulding" }
        ]
    },
    {
        name: "Technical Ops",
        icon: <Timer className="h-5 w-5" />,
        color: "text-slate-400",
        members: [
            { role: "TIMING", name: "Kyle Wilkie" }
        ]
    }
];

export function CommandStructure() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-700">
            {commandData.map((dept, idx) => (
                <Card key={idx} className="bg-slate-900 border-slate-800 overflow-hidden shadow-2xl hover:border-slate-700 transition-all">
                    <CardHeader className="border-b border-slate-800 bg-slate-950/50 flex flex-row items-center gap-3">
                        <div className={`${dept.color} p-2 bg-slate-900 rounded-lg border border-slate-800 shadow-inner`}>
                            {dept.icon}
                        </div>
                        <CardTitle className="text-lg font-black uppercase tracking-widest text-white">
                            {dept.name}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y divide-slate-800">
                            {dept.members.map((member, midx) => (
                                <div key={midx} className="p-5 space-y-3 hover:bg-slate-800/30 transition-colors">
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="space-y-1">
                                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">
                                                {member.role}
                                            </div>
                                            <div className="text-base font-bold text-slate-100 flex items-center gap-2">
                                                <User className="h-3 w-3 text-emerald-500" />
                                                {member.name}
                                            </div>
                                        </div>
                                        {member.availability && (
                                            <Badge variant="outline" className="text-[9px] border-emerald-500/20 text-emerald-500 bg-emerald-500/5 font-bold shrink-0 uppercase tracking-tighter">
                                                {member.availability}
                                            </Badge>
                                        )}
                                    </div>

                                    <div className="flex flex-wrap gap-4 pt-1">
                                        {member.email && (
                                            <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-xs text-slate-400 hover:text-emerald-400 transition-colors font-mono font-medium">
                                                <Mail className="h-3 w-3" />
                                                {member.email}
                                            </a>
                                        )}
                                        {member.phone && (
                                            <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-xs text-slate-400 hover:text-emerald-400 transition-colors font-mono font-medium">
                                                <Phone className="h-3 w-3" />
                                                {member.phone}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
