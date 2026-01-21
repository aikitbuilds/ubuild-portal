/**
 * Agency Build Execution API (Stage 3)
 * 
 * POST /api/agency/build
 * 
 * Triggers the construction phase:
 * 1. Validates project state.
 * 2. Generates build tasks.
 * 3. Updates project status to 'BUILDING'.
 * 4. Logs the activation of the agent swarm.
 */

import { NextRequest, NextResponse } from 'next/server';
import { collections } from '@/lib/firebase/admin';
import { FieldValue } from 'firebase-admin/firestore';
import type { BuildTask, AgencyLog } from '@/lib/firebase/schema';

// Dummy tasks to simulate a build plan
const INITIAL_BUILD_TASKS = [
    { component: 'Authentication System', agent: '@backend-specialist' },
    { component: 'Navigation Bar', agent: '@frontend-specialist' },
    { component: 'User Profile Page', agent: '@frontend-specialist' },
    { component: 'Database Schema Migration', agent: '@database-architect' },
    { component: 'API Rate Limiter', agent: '@backend-specialist' },
];

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { projectId } = body;

        if (!projectId) {
            return NextResponse.json(
                { success: false, error: 'Missing projectId' },
                { status: 400 }
            );
        }

        // 1. Create Build Tasks
        const taskPromises = INITIAL_BUILD_TASKS.map(async (task) => {
            const buildTask: Omit<BuildTask, 'id'> = {
                projectId,
                status: 'pending',
                componentName: task.component,
                assignedAgent: task.agent,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            return collections.buildTasks.add({
                ...buildTask,
                createdAt: FieldValue.serverTimestamp(),
                updatedAt: FieldValue.serverTimestamp(),
            });
        });

        await Promise.all(taskPromises);

        // 2. Log Activation
        await collections.logs.add({
            projectId,
            message: 'Agent swarm activated. Construction started.',
            type: 'info',
            timestamp: FieldValue.serverTimestamp(),
        });

        // 3. Update Project Status
        await collections.projects.doc(projectId).update({
            currentStage: 3,
            status: 'BUILDING',
            updatedAt: FieldValue.serverTimestamp(),
        });

        // 4. Log detailed Agency Log
        const agencyLog: Omit<AgencyLog, 'id'> = {
            projectId,
            agentName: '@agency-orchestrator',
            stage: 3,
            input: { action: 'initiate_build' },
            output: { tasksCreated: INITIAL_BUILD_TASKS.length },
            timestamp: new Date(),
            success: true,
        };
        await collections.agencyLogs.add({
            ...agencyLog,
            timestamp: FieldValue.serverTimestamp(),
        });

        return NextResponse.json({
            success: true,
            data: {
                message: 'Build initialized',
                tasksCreated: INITIAL_BUILD_TASKS.length
            }
        });

    } catch (error) {
        console.error('Build API Error:', error);
        return NextResponse.json(
            { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
