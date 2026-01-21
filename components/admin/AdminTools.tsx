
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { seedDatabase } from "@/lib/simulation/seed-data";
import { Loader2, Database } from "lucide-react";

export function AdminTools() {
    const [seeding, setSeeding] = useState(false);
    const [message, setMessage] = useState("");

    const handleSeed = async () => {
        setSeeding(true);
        setMessage("");
        try {
            await seedDatabase();
            setMessage("Database seeded successfully!");
        } catch (error) {
            console.error(error);
            setMessage("Failed to seed database.");
        } finally {
            setSeeding(false);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <div className="bg-slate-900 border border-slate-700 p-4 rounded-lg shadow-xl text-white">
                <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                    <Database className="w-4 h-4 text-[#E67E22]" />
                    Dev Tools
                </h4>
                <div className="flex flex-col gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handleSeed}
                        disabled={seeding}
                        className="bg-slate-800 text-xs border-slate-700 hover:bg-slate-700"
                    >
                        {seeding ? (
                            <>
                                <Loader2 className="w-3 h-3 mr-2 animate-spin" />
                                Seeding...
                            </>
                        ) : (
                            "Seed Ultra Data"
                        )}
                    </Button>
                    {message && (
                        <span className={`text-[10px] ${message.includes("Failed") ? "text-red-400" : "text-emerald-400"}`}>
                            {message}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
