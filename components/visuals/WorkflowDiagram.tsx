"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Workflow } from "lucide-react";

// Initialize Mermaid with dark theme
mermaid.initialize({
    startOnLoad: false,
    theme: "dark",
    themeVariables: {
        primaryColor: "#14b8a6",
        primaryTextColor: "#ffffff",
        primaryBorderColor: "#0d9488",
        lineColor: "#334155",
        secondaryColor: "#1e293b",
        tertiaryColor: "#0f172a",
        background: "#020617",
        mainBkg: "#0f172a",
        textColor: "#cbd5e1",
        fontSize: "14px",
    },
    flowchart: {
        curve: "basis",
        padding: 20,
    },
});

const workflowDefinition = `
flowchart TB
    subgraph INPUT["📝 Project Intake"]
        A[Client Idea Form] --> B[Project Created]
    end

    subgraph S1["Stage 1: Research"]
        B --> C[Perplexity AI]
        C --> D[Market Analysis]
        C --> E[Competitor Research]
        C --> F[Tech Validation]
        D & E & F --> G[Viability Report]
    end

    subgraph S2["Stage 2: Architecture"]
        G --> H["@architect Agent"]
        H --> I[System Design]
        H --> J[Database Schema]
        H --> K[API Specs]
        H --> L[Component Tree]
        I & J & K & L --> M[Blueprint Approved]
    end

    subgraph S3["Stage 3: Build"]
        M --> N["Parallel Agent Execution"]
        N --> O["@frontend"]
        N --> P["@backend"]
        N --> Q["@database"]
        N --> R["@tester"]
        O & P & Q --> S[Code Generated]
        R --> T[Tests Passing]
    end

    subgraph S4["Stage 4: Optimization"]
        S & T --> U["@improver Agent"]
        U --> V[Performance Tuning]
        U --> W[SEO Optimization]
        U --> X[Security Audit]
        V & W & X --> Y[Quality Verified]
    end

    subgraph S5["Stage 5: Deploy"]
        Y --> Z["@deployer Agent"]
        Z --> AA[Production Build]
        Z --> AB[Cloud Deployment]
        Z --> AC[Monitoring Setup]
        AA & AB & AC --> AD[🚀 Live MVP]
    end

    subgraph PM["Project Management"]
        AD --> AE[Portal Dashboard]
        AE --> AF[Issue Tracker]
        AE --> AG[Feature Requests]
        AE --> AH[Analytics]
    end

    style INPUT fill:#1e293b,stroke:#334155
    style S1 fill:#0f172a,stroke:#14b8a6
    style S2 fill:#0f172a,stroke:#14b8a6
    style S3 fill:#0f172a,stroke:#14b8a6
    style S4 fill:#0f172a,stroke:#14b8a6
    style S5 fill:#0f172a,stroke:#14b8a6
    style PM fill:#1e293b,stroke:#334155
`;

interface WorkflowDiagramProps {
    className?: string;
    showCard?: boolean;
}

export function WorkflowDiagram({ className, showCard = true }: WorkflowDiagramProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [rendered, setRendered] = useState(false);

    useEffect(() => {
        if (containerRef.current && !rendered) {
            mermaid.render("workflow-diagram", workflowDefinition).then(({ svg }) => {
                if (containerRef.current) {
                    containerRef.current.innerHTML = svg;
                    setRendered(true);
                }
            });
        }
    }, [rendered]);

    const content = (
        <div
            ref={containerRef}
            className={`w-full overflow-x-auto ${className || ""}`}
            style={{ minHeight: "600px" }}
        />
    );

    if (!showCard) return content;

    return (
        <Card className="bg-slate-900 border-slate-700">
            <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-white flex items-center gap-2">
                        <Workflow className="h-5 w-5 text-primary" />
                        uBuild 5-Stage Workflow
                    </CardTitle>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                        Automated
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="p-4">
                {content}
            </CardContent>
        </Card>
    );
}

// Simplified version for landing page
export function WorkflowDiagramSimple({ className }: { className?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [rendered, setRendered] = useState(false);

    const simpleDefinition = `
flowchart LR
    A["💡 Idea"] --> B["🔬 Research"]
    B --> C["📐 Design"]
    C --> D["🏗️ Build"]
    D --> E["⚡ Optimize"]
    E --> F["🚀 Deploy"]
    
    style A fill:#14b8a6,stroke:#0d9488,color:#fff
    style B fill:#0f172a,stroke:#14b8a6,color:#fff
    style C fill:#0f172a,stroke:#14b8a6,color:#fff
    style D fill:#0f172a,stroke:#14b8a6,color:#fff
    style E fill:#0f172a,stroke:#14b8a6,color:#fff
    style F fill:#14b8a6,stroke:#0d9488,color:#fff
  `;

    useEffect(() => {
        if (containerRef.current && !rendered) {
            mermaid.render("workflow-simple", simpleDefinition).then(({ svg }) => {
                if (containerRef.current) {
                    containerRef.current.innerHTML = svg;
                    setRendered(true);
                }
            });
        }
    }, [rendered]);

    return (
        <div
            ref={containerRef}
            className={`w-full ${className || ""}`}
        />
    );
}
