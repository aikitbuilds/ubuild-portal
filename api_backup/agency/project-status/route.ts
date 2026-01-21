/**
 * Project Status API
 * 
 * Fetches the current stage and status of a project for the Auto-Pilot system.
 * This endpoint is used by the client-side AutoPilotButton to determine
 * what stage to execute next.
 */

import { NextRequest, NextResponse } from "next/server";
import { collections } from "@/lib/firebase/admin";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const projectId = searchParams.get("projectId");

    // For dashboard overview, return mock data if no specific project
    if (!projectId || projectId === "agency-overview") {
        return NextResponse.json({
            id: "agency-overview",
            currentStage: 1,
            status: "ready" as const,
            idea: "Agency Dashboard Overview",
            stageName: "Research",
            lastOutput: null,
        });
    }

    try {
        const doc = await collections.projects.doc(projectId).get();

        if (!doc.exists) {
            return NextResponse.json(
                { error: `Project ${projectId} not found` },
                { status: 404 }
            );
        }

        const data = doc.data();
        const currentStage = data?.currentStage || 1;

        const stageNames: Record<number, string> = {
            1: "Research",
            2: "Architecture",
            3: "Build",
            4: "Optimize",
            5: "Deploy",
            6: "Completed",
        };

        return NextResponse.json({
            id: doc.id,
            currentStage,
            status: data?.status || "pending",
            idea: data?.idea || "",
            stageName: stageNames[currentStage] || "Unknown",
            lastOutput: data?.lastOutput || null,
            createdAt: data?.createdAt?.toDate?.()?.toISOString() || null,
            updatedAt: data?.updatedAt?.toDate?.()?.toISOString() || null,
        });
    } catch (error) {
        console.error("Failed to fetch project status:", error);
        return NextResponse.json(
            { error: "Failed to fetch project status" },
            { status: 500 }
        );
    }
}
