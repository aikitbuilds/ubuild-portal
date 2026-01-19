// Error Simulation Script
// Run with: npx tsx scripts/sim-error.ts

import { WorkflowEngine, type PauseReason } from "../lib/workflow/engine";

async function simulateError() {
    console.log("🚀 Starting Error Simulation...\n");

    // Create a new workflow
    const workflow = new WorkflowEngine("test-project-123");

    // Subscribe to state changes
    workflow.subscribe("logger", (context) => {
        console.log(`📊 State Changed: ${context.currentState} (Stage ${context.currentStageId})`);
    });

    // Simulate progression through stages
    console.log("▶️  Starting at RESEARCH stage...");
    await sleep(1000);

    console.log("✅ RESEARCH complete, moving to ARCHITECT...");
    workflow.transition("ARCHITECT", { research: "completed" });
    await sleep(1000);

    console.log("✅ ARCHITECT complete, moving to BUILD...");
    workflow.transition("BUILD", { architecture: "designed" });
    await sleep(1000);

    // Simulate an error during BUILD stage
    console.log("\n❌ SIMULATING ERROR: Database connection failed!\n");

    const errorReason: Omit<PauseReason, "timestamp"> = {
        type: "ERROR",
        errorMessage: "ECONNREFUSED: Unable to connect to Firestore database. Connection timed out after 30000ms.",
        errorCode: "FIRESTORE_CONNECTION_ERROR",
        stageId: 3,
        retryCount: 3,
        suggestedFix: "Check your Firebase configuration in .env.local. Verify that FIREBASE_PROJECT_ID is correct and the Firestore database is enabled in your Firebase console.",
    };

    workflow.pause(errorReason);

    console.log("\n📋 Current Workflow State:");
    console.log(JSON.stringify(workflow.getContext(), null, 2));

    console.log("\n⏸️  Workflow is now PAUSED_FOR_INPUT");
    console.log("   The Critical Alert modal should now be displayed in the dashboard.");
    console.log("   User needs to provide input to resume the build.\n");

    // Simulate user providing a fix
    await sleep(2000);
    console.log("👤 Simulating user input: 'Please retry with updated credentials from .env.local'");

    const resumed = workflow.resume(
        "Please retry with updated credentials from .env.local. I have verified the project ID is correct.",
        "BUILD"
    );

    if (resumed) {
        console.log("✅ Workflow resumed successfully!");
        console.log(`   New state: ${workflow.getState()}`);
        console.log(`   Resume data:`, workflow.getContext().resumeData);
    }

    console.log("\n🏁 Error Simulation Complete!");
}

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Run simulation
simulateError().catch(console.error);
