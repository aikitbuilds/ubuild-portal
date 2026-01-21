import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(request: Request) {
    try {
        const { message } = await request.json();

        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const systemPrompt = `You are the uBuild Sales Agent. Your goal is to explain our 5-stage automated development framework (Research, Architecture, Build, Optimization, Deployment). Encourage users to click 'Start Build' or 'Login'. Keep answers under 50 words. Be professional, futuristic, and helpful.`;

        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: systemPrompt }],
                },
                {
                    role: "model",
                    parts: [{ text: "Understood. I am the uBuild Sales Agent. How can I assist you today?" }],
                },
            ],
        });

        const result = await chat.sendMessage(message);
        const response = result.response.text();

        return NextResponse.json({ response });
    } catch (error) {
        console.error("Sales Agent Error:", error);
        return NextResponse.json({ error: "Agent connection failed." }, { status: 500 });
    }
}
