"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, BookOpen, History, Code } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface DocsViewerProps {
    projectId: string;
}

// Mock documentation (in production, fetch from Firestore)
const mockDocs = {
    architecture: `# System Architecture

## Overview
This application follows a modern Next.js architecture with Firebase backend.

\`\`\`
┌─────────────────────────────────────────┐
│           Next.js Frontend              │
├─────────────────────────────────────────┤
│  ├─ App Router (Pages)                  │
│  ├─ React Server Components             │
│  └─ Client Components (Interactivity)   │
└──────────────────┬──────────────────────┘
                   │
┌──────────────────▼──────────────────────┐
│            API Routes                   │
│  ├─ /api/agency/*                       │
│  └─ /api/payments/*                     │
└──────────────────┬──────────────────────┘
                   │
┌──────────────────▼──────────────────────┐
│           Firebase Backend              │
│  ├─ Firestore (Database)                │
│  ├─ Authentication (Google)             │
│  └─ Cloud Functions (Webhooks)          │
└─────────────────────────────────────────┘
\`\`\`

## Database Collections
- \`projects\` - Project metadata and workflow state
- \`issues\` - Bug tracking and error logs
- \`invoices\` - Payment invoices
- \`documentation\` - Auto-generated docs

*Last updated: ${new Date().toLocaleDateString()}*
`,
    apiDocs: `# API Documentation

## Authentication
All API routes require authentication via Firebase Auth.

## Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/agency/research | Trigger AI research |
| POST | /api/agency/build | Start build process |
| GET | /api/agency/projects | List projects |
| POST | /api/payments/create | Create invoice |
| POST | /api/payments/webhook | Handle payment events |

## Example Request

\`\`\`typescript
const response = await fetch('/api/agency/research', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    projectId: 'abc123',
    projectName: 'My Project',
    description: 'Project description'
  })
});
\`\`\`
`,
    changelog: `# Changelog

## [0.2.0] - ${new Date().toISOString().split("T")[0]}

### Added
- Self-Correcting Intelligence Engine
- Workflow State Machine with 5 stages
- Critical Alert Modal for error handling
- Scribe Agent for auto-documentation
- Stage Visualizer component

### Changed
- Updated Landing Page with 13 sections
- Enhanced Dashboard with Payment tracking

## [0.1.0] - 2026-01-18

### Added
- Initial project setup
- Firebase integration
- Shadcn UI components
- Dashboard scaffolding
`,
    readme: `# uBuild - Agentic AI Software Agency

Transform your idea into a production-ready MVP in 5 automated stages.

## Features
- 🔬 AI-powered market research
- 📐 Automated architecture design
- 🏗️ Code generation with Gemini
- 🔧 Self-correcting build process
- 📊 Real-time progress tracking

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

## Documentation
- Architecture: System design overview
- API Docs: Endpoint specifications
- Changelog: Version history

*Built with uBuild Intelligence Engine*
`,
};

export function DocsViewer({ projectId }: DocsViewerProps) {
    const [activeTab, setActiveTab] = useState("readme");
    const [docs, setDocs] = useState(mockDocs);

    // In production: fetch from Firestore
    // useEffect(() => {
    //   fetchDocs(projectId).then(setDocs);
    // }, [projectId]);

    const tabs = [
        { id: "readme", label: "README", icon: BookOpen, content: docs.readme },
        { id: "architecture", label: "Architecture", icon: Code, content: docs.architecture },
        { id: "api", label: "API Docs", icon: FileText, content: docs.apiDocs },
        { id: "changelog", label: "Changelog", icon: History, content: docs.changelog },
    ];

    return (
        <Card className="h-full bg-slate-900 border-slate-700">
            <CardHeader className="pb-3 border-b border-slate-700">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-white flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        Live Documentation
                    </CardTitle>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                        Auto-Generated
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
                    <TabsList className="w-full justify-start rounded-none border-b border-slate-700 bg-slate-800/50 p-0 h-auto">
                        {tabs.map((tab) => (
                            <TabsTrigger
                                key={tab.id}
                                value={tab.id}
                                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3"
                            >
                                <tab.icon className="h-4 w-4 mr-2" />
                                {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {tabs.map((tab) => (
                        <TabsContent key={tab.id} value={tab.id} className="m-0">
                            <ScrollArea className="h-[500px] p-6">
                                <article className="prose prose-invert prose-sm max-w-none prose-headings:text-white prose-p:text-slate-300 prose-code:text-primary prose-pre:bg-slate-800 prose-pre:border prose-pre:border-slate-700">
                                    <ReactMarkdown>{tab.content}</ReactMarkdown>
                                </article>
                            </ScrollArea>
                        </TabsContent>
                    ))}
                </Tabs>
            </CardContent>
        </Card>
    );
}
