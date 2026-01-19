// Code Generation Engine (Gemini Integration)
// Uses Antigravity system prompt to generate code for Stage 3

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export interface ArchitectureSpec {
    projectName: string;
    description: string;
    components: ComponentSpec[];
    apiEndpoints: APIEndpointSpec[];
    databaseSchema: DatabaseSchema;
    techStack: {
        frontend: string[];
        backend: string[];
        database: string[];
    };
}

export interface ComponentSpec {
    name: string;
    type: "page" | "component" | "layout" | "hook" | "utility";
    description: string;
    props?: Record<string, string>;
    dependencies?: string[];
}

export interface APIEndpointSpec {
    path: string;
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    description: string;
    requestBody?: Record<string, string>;
    response?: Record<string, string>;
}

export interface DatabaseSchema {
    collections: {
        name: string;
        fields: { name: string; type: string; required: boolean }[];
    }[];
}

export interface GeneratedCode {
    filename: string;
    content: string;
    type: "tsx" | "ts" | "css" | "json" | "md";
    path: string;
}

// System prompt for code generation (Antigravity-style)
const SYSTEM_PROMPT = `You are an expert software engineer working within the Antigravity framework. 
You generate production-quality, TypeScript code using:
- Next.js 16 / App Router
- React 19
- Tailwind CSS v4
- Shadcn UI components
- Firebase/Firestore

Design Protocol:
- Dark Mode aesthetic: Slate-950 background, Teal-500 accents
- No neon gradients or heavy shadows
- Professional, enterprise-grade UI

Code Standards:
- Use "use client" directive for client components
- Implement proper error handling
- Add TypeScript types for all props and functions
- Use Shadcn components from @/components/ui/*
- Follow file naming conventions (lowercase-kebab-case)

Generate complete, working code that can be directly saved to files.`;

// Generate a single component
export async function generateComponent(
    componentSpec: ComponentSpec,
    context: { projectName: string; existingComponents: string[] }
): Promise<GeneratedCode> {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `${SYSTEM_PROMPT}

Generate a React component based on this specification:

Component: ${componentSpec.name}
Type: ${componentSpec.type}
Description: ${componentSpec.description}
Props: ${JSON.stringify(componentSpec.props || {})}

Project Context:
- Project: ${context.projectName}
- Existing Components: ${context.existingComponents.join(", ")}

Generate ONLY the component code. No explanations. Include all necessary imports.`;

    try {
        const result = await model.generateContent(prompt);
        const code = result.response.text()
            .replace(/```tsx?\n?/g, "")
            .replace(/```\n?/g, "")
            .trim();

        const filename = componentSpec.name.replace(/([A-Z])/g, "-$1").toLowerCase().slice(1) + ".tsx";
        const path = componentSpec.type === "page"
            ? `app/${filename.replace(".tsx", "")}/page.tsx`
            : `components/${filename}`;

        return {
            filename,
            content: code,
            type: "tsx",
            path,
        };
    } catch (error) {
        console.error("Component generation failed:", error);
        throw new Error(`Failed to generate component: ${componentSpec.name}`);
    }
}

// Generate API route
export async function generateAPIRoute(
    endpointSpec: APIEndpointSpec,
    context: { databaseSchema: DatabaseSchema }
): Promise<GeneratedCode> {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `${SYSTEM_PROMPT}

Generate a Next.js API route based on this specification:

Endpoint: ${endpointSpec.path}
Method: ${endpointSpec.method}
Description: ${endpointSpec.description}
Request Body: ${JSON.stringify(endpointSpec.requestBody || {})}
Expected Response: ${JSON.stringify(endpointSpec.response || {})}

Database Schema:
${JSON.stringify(context.databaseSchema, null, 2)}

Generate ONLY the route.ts file code. Use Firebase Admin SDK for database operations.
Include proper error handling and input validation.`;

    try {
        const result = await model.generateContent(prompt);
        const code = result.response.text()
            .replace(/```tsx?\n?/g, "")
            .replace(/```\n?/g, "")
            .trim();

        const pathParts = endpointSpec.path.split("/").filter(Boolean);
        const filename = "route.ts";
        const path = `app/api/${pathParts.join("/")}/route.ts`;

        return {
            filename,
            content: code,
            type: "ts",
            path,
        };
    } catch (error) {
        console.error("API route generation failed:", error);
        throw new Error(`Failed to generate API route: ${endpointSpec.path}`);
    }
}

// Generate full codebase from architecture spec
export async function generateCode(spec: ArchitectureSpec): Promise<GeneratedCode[]> {
    const generatedFiles: GeneratedCode[] = [];
    const existingComponents: string[] = [];

    // Generate components
    for (const component of spec.components) {
        try {
            const generated = await generateComponent(component, {
                projectName: spec.projectName,
                existingComponents,
            });
            generatedFiles.push(generated);
            existingComponents.push(component.name);
        } catch (error) {
            console.error(`Failed to generate ${component.name}:`, error);
            // Continue with other components
        }
    }

    // Generate API routes
    for (const endpoint of spec.apiEndpoints) {
        try {
            const generated = await generateAPIRoute(endpoint, {
                databaseSchema: spec.databaseSchema,
            });
            generatedFiles.push(generated);
        } catch (error) {
            console.error(`Failed to generate ${endpoint.path}:`, error);
        }
    }

    return generatedFiles;
}

// Retry generation with user feedback (for error recovery)
export async function retryWithFeedback(
    originalCode: GeneratedCode,
    error: string,
    userFeedback: string
): Promise<GeneratedCode> {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `${SYSTEM_PROMPT}

The following code had an error. Fix it based on the error message and user feedback.

ORIGINAL CODE:
${originalCode.content}

ERROR MESSAGE:
${error}

USER FEEDBACK:
${userFeedback}

Generate the FIXED code only. No explanations.`;

    try {
        const result = await model.generateContent(prompt);
        const fixedCode = result.response.text()
            .replace(/```tsx?\n?/g, "")
            .replace(/```\n?/g, "")
            .trim();

        return {
            ...originalCode,
            content: fixedCode,
        };
    } catch (err) {
        console.error("Retry generation failed:", err);
        throw new Error("Failed to fix code with user feedback");
    }
}
