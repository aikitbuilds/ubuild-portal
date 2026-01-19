import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
// Mock database access for demo
// In real app, import { db } from "@/lib/firebase/admin"
// In real app, import { db } from "@/lib/firebase/admin"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(request: Request) {
    try {
        const { message, projectId, currentStage } = await request.json();

        if (!projectId) {
            return NextResponse.json({ error: "Project ID required." }, { status: 403 });
        }

        // 1. Retrieve Project Context (Mocking for now as database connection might be complex in this file without full setup)
        // In production: const projectDoc = await db.collection("projects").doc(projectId).get();
        const projectContext = `Project ID: ${projectId}. Current Stage: ${currentStage || 1}.`;

        // 2. Construct Prompt
        const systemPrompt = `You are the uBuild Co-Pilot. The user is a client building a software project. 
    Context: ${projectContext}.
    Your goal is to assist with technical questions, explain the current stage, and debug issues.
    If the user reports a bug, suggest a fix.`;

        // 3. Call AI
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const chat = model.startChat({
            history: [
                { role: "user", parts: [{ text: systemPrompt }] }
            ]
        });

        const result = await chat.sendMessage(message);
        const response = result.response.text();

        // 4. Persistence (Mock)
        // await db.collection("project_chats").add({ ... });

        return NextResponse.json({ response });

    } catch (error) {
        console.error("Co-Pilot Error:", error);
        return NextResponse.json({ error: "Agent connection failed." }, { status: 500 });
    }
}
