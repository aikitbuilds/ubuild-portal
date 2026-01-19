// Scribe Agent - Live Documentation Engine
// Auto-generates documentation after each stage completion

import { GoogleGenerativeAI } from "@google/generative-ai";
import type { MarketViabilityReport } from "@/lib/workflow/research";
import type { ArchitectureSpec, GeneratedCode } from "@/lib/workflow/codegen";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export interface DocumentationBundle {
    architecture: string;
    apiDocs: string;
    changelog: string;
    readme: string;
}

// Generate ARCHITECTURE.md after Stage 2
export async function generateArchitectureDoc(
    projectName: string,
    spec: ArchitectureSpec,
    research?: MarketViabilityReport
): Promise<string> {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `Generate a professional ARCHITECTURE.md file for:
  
Project: ${projectName}
Description: ${spec.description}

Tech Stack:
- Frontend: ${spec.techStack.frontend.join(", ")}
- Backend: ${spec.techStack.backend.join(", ")}
- Database: ${spec.techStack.database.join(", ")}

Components: ${spec.components.map(c => c.name).join(", ")}
API Endpoints: ${spec.apiEndpoints.map(e => `${e.method} ${e.path}`).join(", ")}

Database Collections:
${spec.databaseSchema.collections.map(c => `- ${c.name}: ${c.fields.map(f => f.name).join(", ")}`).join("\n")}

Generate a well-structured ARCHITECTURE.md with:
- System Overview with ASCII diagram
- Component Architecture
- Database Schema
- API Endpoints table
- Data Flow description
- Security considerations

Use markdown formatting. Be professional and concise.`;

    try {
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch {
        return `# ${projectName} Architecture\n\n*Documentation generation failed. Please update manually.*`;
    }
}

// Generate API_DOCS.md after Stage 3
export async function generateAPIDoc(
    projectName: string,
    endpoints: ArchitectureSpec["apiEndpoints"]
): Promise<string> {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `Generate a professional API_DOCS.md for:

Project: ${projectName}

Endpoints:
${endpoints.map(e => `
- ${e.method} ${e.path}
  Description: ${e.description}
  Request: ${JSON.stringify(e.requestBody || {})}
  Response: ${JSON.stringify(e.response || {})}
`).join("\n")}

Generate well-structured API documentation with:
- Overview
- Authentication section
- Endpoints table with methods, paths, descriptions
- Request/Response examples for each endpoint
- Error codes table
- Rate limiting info

Use markdown formatting with code blocks for examples.`;

    try {
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch {
        return `# ${projectName} API Documentation\n\n*Documentation generation failed.*`;
    }
}

// Generate/Update CHANGELOG.md (real-time)
export function generateChangelogEntry(
    stageId: number,
    stageName: string,
    changes: string[],
    version: string = "0.1.0"
): string {
    const date = new Date().toISOString().split("T")[0];

    return `
## [${version}] - ${date}

### Stage ${stageId}: ${stageName}

${changes.map(c => `- ${c}`).join("\n")}
`;
}

// Append to existing changelog
export function appendToChangelog(
    existingChangelog: string,
    newEntry: string
): string {
    if (!existingChangelog || existingChangelog.trim() === "") {
        return `# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

${newEntry}`;
    }

    // Insert new entry after the header
    const headerEnd = existingChangelog.indexOf("## [");
    if (headerEnd === -1) {
        return existingChangelog + "\n" + newEntry;
    }

    return (
        existingChangelog.slice(0, headerEnd) +
        newEntry +
        "\n" +
        existingChangelog.slice(headerEnd)
    );
}

// Generate complete documentation bundle
export async function generateDocumentationBundle(
    projectName: string,
    spec: ArchitectureSpec,
    generatedFiles: GeneratedCode[],
    research?: MarketViabilityReport
): Promise<DocumentationBundle> {
    const architecture = await generateArchitectureDoc(projectName, spec, research);
    const apiDocs = await generateAPIDoc(projectName, spec.apiEndpoints);

    const changelog = generateChangelogEntry(3, "Core Build", [
        `Generated ${spec.components.length} components`,
        `Created ${spec.apiEndpoints.length} API endpoints`,
        `Set up ${spec.databaseSchema.collections.length} database collections`,
        `Generated ${generatedFiles.length} source files`,
    ]);

    const readme = `# ${projectName}

${spec.description}

## Tech Stack

- **Frontend**: ${spec.techStack.frontend.join(", ")}
- **Backend**: ${spec.techStack.backend.join(", ")}
- **Database**: ${spec.techStack.database.join(", ")}

## Documentation

- [Architecture](./ARCHITECTURE.md)
- [API Documentation](./API_DOCS.md)
- [Changelog](./CHANGELOG.md)

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

## Generated Files

${generatedFiles.map(f => `- \`${f.path}\``).join("\n")}

---

*Generated by uBuild Scribe Agent*
`;

    return {
        architecture,
        apiDocs,
        changelog,
        readme,
    };
}

// Save documentation to Firestore
export async function saveDocumentation(
    projectId: string,
    docs: DocumentationBundle,
    db: FirebaseFirestore.Firestore
): Promise<void> {
    const docsRef = db.collection("projects").doc(projectId).collection("documentation");

    await Promise.all([
        docsRef.doc("ARCHITECTURE").set({ content: docs.architecture, updatedAt: new Date() }),
        docsRef.doc("API_DOCS").set({ content: docs.apiDocs, updatedAt: new Date() }),
        docsRef.doc("CHANGELOG").set({ content: docs.changelog, updatedAt: new Date() }),
        docsRef.doc("README").set({ content: docs.readme, updatedAt: new Date() }),
    ]);
}
