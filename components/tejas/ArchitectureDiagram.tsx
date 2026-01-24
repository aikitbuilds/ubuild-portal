"use client";

import React, { useEffect } from "react";
import mermaid from "mermaid";

export function ArchitectureDiagram() {
    useEffect(() => {
        mermaid.initialize({
            startOnLoad: true,
            theme: "dark",
            securityLevel: "loose",
            fontFamily: "var(--font-sans)",
            themeVariables: {
                primaryColor: "#0B1120",
                primaryTextColor: "#E2E8F0",
                primaryBorderColor: "#334155",
                lineColor: "#64748B",
                secondaryColor: "#0F172A",
                tertiaryColor: "#1E293B",
            },
        });
        mermaid.contentLoaded();
    }, []);

    const diagram = `
graph TD
    %% Nodes
    User(("Dave & Brooke<br/>(Race Directors)"))
    Sheet[("Master Volunteer<br/>Google Sheet<br/>(Source of Truth)")]
    Sync{{"Sync Engine<br/>(Next.js API)"}}
    AI[/"AI Director<br/>(Gemini Ghost Writer)"/]
    App["Tejas OS<br/>Mirror Dashboard"]
    Mobile["Volunteer App<br/>(Mobile Check-in)"]

    %% Styles
    classDef person fill:#0F172A,stroke:#E67E22,stroke-width:2px,color:#fff;
    classDef db fill:#0B1120,stroke:#22C55E,stroke-width:2px,color:#fff;
    classDef logic fill:#1E293B,stroke:#3B82F6,stroke-width:2px,color:#fff;
    classDef ai fill:#2A0A3B,stroke:#A855F7,stroke-width:2px,color:#d8b4fe;
    classDef app fill:#0F172A,stroke:#64748B,stroke-width:2px,color:#fff;

    class User person;
    class Sheet db;
    class Sync logic;
    class AI ai;
    class App,Mobile app;

    %% Relationships
    User -- "Manual Updates" --> Sheet
    Sheet <==>|Real-time Sync| Sync
    
    Sync -- "Raw Notes" --> AI
    AI -- "Suggested Assignments" --> Sync
    
    Sync -- "Live Data" --> App
    Sync -- "Check-in Status" --> Mobile
    
    App -.->|"Admin Actions"| Sync
    Mobile -.->|"Self Check-in"| Sync
    
    subgraph "Hybrid AI Operating System"
        direction TB
        Sync
        AI
    end
    `;

    return (
        <div className="w-full flex justify-center p-8 bg-[#020617] rounded-xl border border-white/5">
            <div className="mermaid">
                {diagram}
            </div>
        </div>
    );
}
