"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, ArrowRight } from "lucide-react";

export default function VolunteerLogin() {
    const [identifier, setIdentifier] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, verify against Firestore
        // For the MVP, we'll store the identifier in localStorage and redirect
        if (identifier) {
            localStorage.setItem("volunteer_id", identifier);
            router.push("/volunteer/dashboard");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <Card className="w-full bg-white/5 border-white/10 backdrop-blur-xl rounded-[2.5rem] overflow-hidden shadow-2xl border-t-white/20">
                <CardHeader className="text-center pt-10 pb-6">
                    <div className="flex justify-center mb-6">
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/55a8251be4b08d94f1f6db9d/f5fece5c-753d-44b5-8371-44d5d5c8223c/TTLogo+%28Full+Color+.9%29_Transparent.png?format=1500w"
                            alt="Tejas Trails"
                            className="h-20 w-auto brightness-0 invert"
                        />
                    </div>
                    <CardTitle className="text-2xl font-black text-white uppercase tracking-tighter">Volunteer Portal</CardTitle>
                    <CardDescription className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mt-2">Rocky Raccoon 100 • Jan 2026</CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="identifier" className="text-[10px] font-black uppercase tracking-widest text-[#E67E22] ml-1">Email or Phone Number</Label>
                            <Input
                                id="identifier"
                                placeholder="name@example.com"
                                value={identifier}
                                onChange={(e) => setIdentifier(e.target.value)}
                                className="h-14 bg-white/5 border-white/10 rounded-2xl text-white font-bold"
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full h-14 bg-[#E67E22] hover:bg-[#D35400] text-white rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-[#E67E22]/20 group">
                            Access Assignments
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </form>

                    <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
                        <Sparkles className="w-3 h-3 text-[#E67E22]" />
                        Mission Ready v2.0
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
