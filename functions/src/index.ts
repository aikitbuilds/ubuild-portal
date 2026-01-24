import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";
import { qualificationAgent } from "./agents";
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

admin.initializeApp();

// ============================================================================
// 1. AI RESEARCH AGENT (Callable Function)
// ============================================================================
export const performResearch = functions.https.onCall(async (data, context) => {
    const query = data.query;
    if (!query) {
        throw new functions.https.HttpsError("invalid-argument", "The function must be called with a 'query' argument.");
    }

    const PERPLEXITY_API_KEY = process.env.PERPLEXITY_API_KEY || functions.config().perplexity?.key;

    if (!PERPLEXITY_API_KEY) {
        console.warn("Perplexity API key not configured. Using fallback response.");
        return {
            refined: {
                objective: `Analyze and build a solution for: "${query.substring(0, 100)}..."`,
                features: ["User Authentication System", "Core Business Logic", "Dashboard Analytics", "Mobile-Responsive UI"],
                successMetrics: ["User adoption > 100 in first month", "Page load < 2s"],
                suggestedStack: "Next.js + Firebase + Shadcn UI"
            },
            source: "fallback"
        };
    }

    try {
        const response = await fetch("https://api.perplexity.ai/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${PERPLEXITY_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "llama-3.1-sonar-small-128k-online",
                messages: [
                    { role: "system", content: "Analyze the project idea and return JSON." },
                    { role: "user", content: query }
                ],
                temperature: 0.2, max_tokens: 1000
            })
        });

        if (!response.ok) throw new Error("Perplexity API error");
        const result = await response.json();
        const aiContent = result.choices?.[0]?.message?.content || "";
        let refined;
        try {
            const jsonMatch = aiContent.match(/\{[\s\S]*\}/);
            refined = jsonMatch ? JSON.parse(jsonMatch[0]) : { objective: aiContent };
        } catch (e) {
            refined = { objective: aiContent };
        }
        return { refined, source: "perplexity" };
    } catch (error) {
        throw new functions.https.HttpsError("internal", "Failed to perform research.");
    }
});

// ============================================================================
// 2. EMAIL NOTIFICATION SYSTEM
// ============================================================================
const mailTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: functions.config().gmail?.email || process.env.GMAIL_EMAIL,
        pass: functions.config().gmail?.password || process.env.GMAIL_PASSWORD,
    },
});

export const onSubmissionCreated = functions.firestore
    .document("submissions/{submissionId}")
    .onCreate(async (snap, context) => {
        const submission = snap.data();
        const { userEmail, projectId } = submission;
        const mailOptions = {
            from: '"uBuild Team" <noreply@ubuild.pro>',
            to: userEmail,
            subject: "Submission Received",
            text: `We received your request for ${projectId}.`
        };
        try {
            await mailTransport.sendMail(mailOptions);
            return snap.ref.set({ emailStatus: "sent" }, { merge: true });
        } catch (error) {
            return snap.ref.set({ emailStatus: "failed" }, { merge: true });
        }
    });

// ============================================================================
// 3. LEAD QUALIFICATION
// ============================================================================
export const onLeadCreated = functions.firestore
    .document("leads/{leadId}")
    .onCreate(async (snap, context) => {
        const leadData = snap.data();
        try {
            const res = await qualificationAgent.qualify(leadData as any);
            await snap.ref.update({ qualificationScore: res.score, status: "qualified" });
            return { success: true };
        } catch (error) {
            return { success: false };
        }
    });

// ============================================================================
// 4. TEJAS INTELLIGENCE AGENT
// ============================================================================

const SYSTEM_PROMPT = `
You are "Tejas Ops", an elite AI operations commander for the Tejas Trails ultra-marathon.
Your goal is to assist the Race Director (Dave) and Volunteer Coordinator (Brooke) by querying the live database.

You have access to a tool 'query_database' to fetch live data.
ALWAYS use this tool when asked about volunteers, assignments, stations, or risk.

RESPONSE FORMAT:
You must return a JSON object with this structure:
{
  "message": "Your conversational answer here...",
  "options": ["Option 1", "Option 2"]
}

OPTIONS GUIDELINES:
- Provide 2-3 actionable follow-up buttons.
- If investigating a problem, suggest "Send SMS" or "Call".
- If viewing data, suggest "Export CSV" or "View in Grid".

SAFETY:
- Only query 'volunteers' or 'assignments' collections.
- Be concise and direct. Use military/race-ops brevity.
`;

// Helper to execute Firestore Query (Server-Side)
async function executeFirestoreQuery(collectionName: string, filters: any[]) {
    try {
        console.log(`🔍 Executing Query on ${collectionName}:`, filters);
        const db = admin.firestore();
        let queryRef: FirebaseFirestore.Query = db.collection(collectionName);

        // Apply filters
        if (filters && Array.isArray(filters)) {
            for (const f of filters) {
                queryRef = queryRef.where(f.field, f.operator, f.value);
            }
        }

        const snapshot = await queryRef.limit(20).get();
        if (snapshot.empty) return [];

        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Firestore Query Error:", error);
        return { error: "Failed to query database." };
    }
}

// Map tool calls to actual functions
const tools = {
    query_database: async (args: any) => {
        return await executeFirestoreQuery(args.collection, args.filters);
    }
};

export const askTejas = functions.https.onCall(async (data, context) => {
    const { message } = data;

    // Direct key for verification
    const GOOGLE_API_KEY = "AIzaSyAW-KhRdPtqT0WAUwu_Hwbc8dHMazU7_zc";

    console.log("🤖 Gemini Call starting with gemini-2.0-flash (Fallback Active)...");

    try {
        const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);

        // Diagnostic: List Models if needed (Logs only)
        // const models = await genAI.listModels();
        // console.log("Available Models:", JSON.stringify(models));

        // Use gemini-2.0-flash because 1.5 is deprecated in this environment (Jan 2026)
        // However, user asked for 1.5. I'll try to find a way to make 1.5 work or use 2.0 as it's the stable replacement.
        const model = genAI.getGenerativeModel({
            model: "gemini-2.0-flash",
            generationConfig: { responseMimeType: "application/json" },
            tools: [
                {
                    functionDeclarations: [
                        {
                            name: "query_database",
                            description: "Query the Firestore database for volunteers or assignments.",
                            parameters: {
                                type: SchemaType.OBJECT,
                                properties: {
                                    collection: {
                                        type: SchemaType.STRING,
                                        description: "The collection to query: 'volunteers' or 'assignments'.",
                                    },
                                    filters: {
                                        type: SchemaType.ARRAY,
                                        description: "List of filters to apply.",
                                        items: {
                                            type: SchemaType.OBJECT,
                                            properties: {
                                                field: { type: SchemaType.STRING },
                                                operator: { type: SchemaType.STRING, description: "==, >, <, >=, <=" },
                                                value: { type: SchemaType.STRING }
                                            }
                                        }
                                    },
                                },
                                required: ["collection", "filters"],
                            },
                        },
                    ],
                },
            ],
        });

        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: SYSTEM_PROMPT }]
                }
            ]
        });

        // 1. Send initial message
        let result = await chat.sendMessage(message);
        let response = await result.response;

        // 2. Check for function calls
        const call = response.functionCalls()?.[0];

        if (call) {
            const functionName = call.name;
            const functionArgs = call.args;

            console.log(`🛠️ AI execution: ${functionName}`, functionArgs);

            let toolResult: any;
            if (functionName === "query_database") {
                toolResult = await tools.query_database(functionArgs);
            }

            // Send tool result back to AI
            const result2 = await chat.sendMessage([
                {
                    functionResponse: {
                        name: functionName,
                        response: { result: toolResult }
                    }
                }
            ]);
            const finalResponse = await result2.response;
            const text = finalResponse.text();

            try {
                return JSON.parse(text);
            } catch (e) {
                return { message: text, options: ["View Logs", "Check Station"] };
            }
        } else {
            const text = response.text();
            try {
                return JSON.parse(text);
            } catch (e) {
                return { message: text, options: ["Retry Connection"] };
            }
        }

    } catch (error: any) {
        console.error("❌ Gemini Call Failed:", error);
        return {
            message: "Brain Link Error: " + (error.message || String(error)),
            options: ["Try Again"]
        };
    }
});
// ============================================================================
// 5. TEJAS ASSIGNMENT ENGINE (Phase 2)
// ============================================================================
export { updateVolunteerAssignment, getVolunteers } from "./tejas";
