/**
 * Auto-Pilot API Route
 * 
 * Triggers the next stage of the automated MVP pipeline.
 */

import { NextRequest, NextResponse } from "next/server";
import {
    executeNextStage,
    advanceStage,
    pauseWorkflow,
    Stage,
    StageNames
} from "@/lib/agency/auto-pilot";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { projectId, action, output, reason } = body;

        if (!projectId) {
            return NextResponse.json(
                { error: "projectId is required" },
                { status: 400 }
            );
        }

        switch (action) {
            case "execute":
                // Execute the next stage
                const result = await executeNextStage(projectId);

                if (!result.success) {
                    return NextResponse.json(
                        {
                            error: result.error,
                            stage: result.stage,
                        },
                        { status: 500 }
                    );
                }

                return NextResponse.json({
                    success: true,
                    stage: result.stage,
                    stageName: StageNames[result.stage],
                    message: `Stage ${result.stage} (${StageNames[result.stage]}) queued for execution`,
                    prompt: result.prompt,
                });

            case "advance":
                // Mark current stage complete and advance
                if (!output) {
                    return NextResponse.json(
                        { error: "output is required for advance action" },
                        { status: 400 }
                    );
                }

                const advanceResult = await advanceStage(projectId, output);

                return NextResponse.json({
                    success: true,
                    nextStage: advanceResult.nextStage,
                    stageName: StageNames[advanceResult.nextStage],
                    message: `Advanced to Stage ${advanceResult.nextStage}`,
                });

            case "pause":
                // Pause the workflow
                await pauseWorkflow(projectId, reason || "User requested pause");

                return NextResponse.json({
                    success: true,
                    message: "Workflow paused",
                });

            default:
                // Default: execute next stage
                const defaultResult = await executeNextStage(projectId);

                return NextResponse.json({
                    success: defaultResult.success,
                    stage: defaultResult.stage,
                    stageName: StageNames[defaultResult.stage],
                    error: defaultResult.error,
                });
        }
    } catch (error) {
        console.error("Auto-pilot error:", error);

        return NextResponse.json(
            {
                error: error instanceof Error ? error.message : "Auto-pilot execution failed",
            },
            { status: 500 }
        );
    }
}

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const projectId = searchParams.get("projectId");

    if (!projectId) {
        return NextResponse.json(
            { error: "projectId query parameter is required" },
            { status: 400 }
        );
    }

    try {
        // Return the current auto-pilot status for a project
        const { getProjectStatus } = await import("@/lib/agency/auto-pilot");
        const status = await getProjectStatus(projectId);

        return NextResponse.json({
            success: true,
            project: {
                id: status.id,
                currentStage: status.currentStage,
                stageName: StageNames[status.currentStage as Stage],
                status: status.status,
                idea: status.idea,
            },
        });
    } catch (error) {
        return NextResponse.json(
            {
                error: error instanceof Error ? error.message : "Failed to get status",
            },
            { status: 500 }
        );
    }
}
