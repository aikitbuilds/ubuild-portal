import { NextRequest, NextResponse } from "next/server";
import { db, collections } from "@/lib/firebase/admin";
import { sendAdminAlert, sendUserConfirmation } from "@/lib/email/notifier";
import { Timestamp } from "firebase-admin/firestore";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get("userId");

        if (!userId) {
            return NextResponse.json({ error: "Missing userId" }, { status: 400 });
        }

        const snapshot = await db.collection("submissions")
            .where("userId", "==", userId)
            .orderBy("createdAt", "desc")
            .get();

        const submissions = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate()?.toISOString()
        }));

        return NextResponse.json({ submissions });
    } catch (error) {
        console.error("Fetch submissions error:", error);
        return NextResponse.json({ error: "Failed to fetch submissions" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const { userId, userEmail, projectId, intentType, rawInput, aiAnalysis } = await req.json();

        if (!userId || !rawInput) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // 1. Save to Firestore
        const submissionRef = await db.collection("submissions").add({
            userId,
            userEmail,
            projectId: projectId || "new_project",
            intentType,
            rawInput,
            aiAnalysis,
            status: "pending",
            createdAt: Timestamp.now(),
        });

        // 2. Send Emails (Non-blocking)
        const summary = JSON.stringify(aiAnalysis, null, 2);
        Promise.all([
            sendAdminAlert(projectId || "New Project", userEmail || "Anonymous", summary),
            userEmail ? sendUserConfirmation(userEmail, summary) : Promise.resolve()
        ]).catch(console.error);

        return NextResponse.json({
            success: true,
            id: submissionRef.id
        });

    } catch (error) {
        console.error("Submission error:", error);
        return NextResponse.json({ error: "Failed to submit request" }, { status: 500 });
    }
}
