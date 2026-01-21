import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";
import { qualificationAgent } from "./agents";

admin.initializeApp();

// ============================================================================
// 1. AI RESEARCH AGENT (Callable Function)
// ============================================================================
// Frontend calls this directly via httpsCallable. Calls Perplexity API securely.

export const performResearch = functions.https.onCall(async (data, context) => {
    const query = data.query;
    if (!query) {
        throw new functions.https.HttpsError("invalid-argument", "The function must be called with a 'query' argument.");
    }

    const PERPLEXITY_API_KEY = process.env.PERPLEXITY_API_KEY || functions.config().perplexity?.key;

    if (!PERPLEXITY_API_KEY) {
        console.warn("Perplexity API key not configured. Using fallback response.");
        // Fallback: Return a structured response without API call
        return {
            refined: {
                objective: `Analyze and build a solution for: "${query.substring(0, 100)}..."`,
                features: [
                    "User Authentication System",
                    "Core Business Logic",
                    "Dashboard Analytics",
                    "Mobile-Responsive UI"
                ],
                successMetrics: ["User adoption > 100 in first month", "Page load < 2s"],
                suggestedStack: "Next.js + Firebase + Shadcn UI"
            },
            source: "fallback"
        };
    }

    try {
        // REAL Perplexity API Call
        const response = await fetch("https://api.perplexity.ai/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${PERPLEXITY_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "llama-3.1-sonar-small-128k-online",
                messages: [
                    {
                        role: "system",
                        content: `You are a technical architect AI for uBuild, an agentic software agency.
Analyze the user's project idea and return a JSON object with:
- objective: A clear 1-2 sentence description of what we're building
- features: An array of 4-6 key features to implement
- successMetrics: An array of 2-3 measurable success criteria
- suggestedStack: The recommended tech stack as a string

Return ONLY valid JSON, no markdown or explanation.`
                    },
                    {
                        role: "user",
                        content: query
                    }
                ],
                temperature: 0.2,
                max_tokens: 1000
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Perplexity API Error:", errorText);
            throw new functions.https.HttpsError("internal", "AI research service unavailable.");
        }

        const result = await response.json();
        const aiContent = result.choices?.[0]?.message?.content || "";

        // Parse the JSON response from Perplexity
        let refined;
        try {
            // Try to extract JSON from the response (might be wrapped in markdown)
            const jsonMatch = aiContent.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                refined = JSON.parse(jsonMatch[0]);
            } else {
                throw new Error("No JSON found in response");
            }
        } catch (parseError) {
            console.error("Failed to parse AI response:", aiContent);
            // Return a structured fallback based on the raw response
            refined = {
                objective: aiContent.substring(0, 200),
                features: ["Feature analysis pending", "Manual review required"],
                successMetrics: ["To be determined"],
                suggestedStack: "Next.js + Firebase"
            };
        }

        return { refined, source: "perplexity" };

    } catch (error) {
        console.error("Research API Error:", error);
        throw new functions.https.HttpsError("internal", "Failed to perform research.");
    }
});

// ============================================================================
// 2. EMAIL NOTIFICATION SYSTEM (Firestore Trigger)
// ============================================================================
// Listens for new docs in 'submissions' collection and sends email.

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
        const { userEmail, projectId, aiAnalysis } = submission;

        const email = userEmail || "unknown@example.com";
        const subject = `uBuild Submission Received: ${projectId}`;
        const summary = JSON.stringify(aiAnalysis, null, 2);

        const mailOptions = {
            from: '"uBuild Agency" <noreply@ubuild.pro>',
            to: email,
            subject: subject,
            text: `We received your project request!\n\nSummary:\n${summary}\n\nOur agents are getting to work.`,
            html: `<h1>Transmission Received</h1><p>We received your project request for <strong>${projectId}</strong>.</p><pre>${summary}</pre><p>Our agents are getting to work.</p>`
        };

        try {
            await mailTransport.sendMail(mailOptions);
            console.log(`Email sent to ${email}`);
            return snap.ref.set({ emailStatus: "sent" }, { merge: true });
        } catch (error) {
            console.error("Email sending failed:", error);
            return snap.ref.set({ emailStatus: "failed", emailError: String(error) }, { merge: true });
        }
    });

// ============================================================================
// 3. LEAD QUALIFICATION TRIGGER (Firestore Trigger)
// ============================================================================
// Listens for new docs in 'leads' collection, scores them, and updates status.

export const onLeadCreated = functions.firestore
    .document("leads/{leadId}")
    .onCreate(async (snap, context) => {
        const leadData = snap.data();
        const leadId = context.params.leadId;

        console.log(`New lead received: ${leadId}`);

        try {
            // 1. Qualify the lead using the QualificationAgent
            const qualificationResult = await qualificationAgent.qualify({
                email: leadData.email || "",
                intent: leadData.intent || "unknown",
                description: leadData.description || "",
                hasVoiceMemo: leadData.hasVoiceMemo || false
            });

            console.log(`Lead ${leadId} scored: ${qualificationResult.score} (${qualificationResult.tier})`);

            // 2. Update the lead document with qualification data
            await snap.ref.update({
                qualificationScore: qualificationResult.score,
                qualificationTier: qualificationResult.tier,
                qualificationReasoning: qualificationResult.reasoning,
                nextAction: qualificationResult.nextAction,
                status: "qualified",
                qualifiedAt: admin.firestore.FieldValue.serverTimestamp()
            });

            // 3. Send welcome email for hot leads
            if (qualificationResult.tier === "hot") {
                const welcomeEmail = {
                    from: '"uBuild Team" <noreply@ubuild.pro>',
                    to: leadData.email,
                    subject: "Welcome to uBuild - Let's Build Something Amazing!",
                    html: `
                        <h1>🚀 Welcome to uBuild!</h1>
                        <p>Thanks for your interest in building with AI. We've reviewed your submission and we're excited about your project!</p>
                        <p><strong>Your Idea:</strong> ${leadData.description?.substring(0, 200) || "No description provided"}...</p>
                        <p>One of our architects will reach out within 24 hours to discuss next steps.</p>
                        <p>In the meantime, feel free to reply to this email with any questions.</p>
                        <br/>
                        <p>— The uBuild Team</p>
                    `
                };

                try {
                    await mailTransport.sendMail(welcomeEmail);
                    console.log(`Welcome email sent to hot lead: ${leadData.email}`);
                    await snap.ref.update({ welcomeEmailSent: true });
                } catch (emailError) {
                    console.error("Welcome email failed:", emailError);
                    await snap.ref.update({ welcomeEmailSent: false, emailError: String(emailError) });
                }
            }

            return { success: true, leadId, score: qualificationResult.score };

        } catch (error) {
            console.error(`Failed to qualify lead ${leadId}:`, error);
            await snap.ref.update({
                status: "qualification_failed",
                error: String(error)
            });
            return { success: false, error: String(error) };
        }
    });
