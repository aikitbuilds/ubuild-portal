/**
 * Projects API Route
 * 
 * POST /api/agency/projects - Create a new project
 * GET /api/agency/projects/:id - Get project by ID
 */

import { NextRequest, NextResponse } from 'next/server';
import { collections } from '@/lib/firebase/admin';
import type { Project, ProjectIdea } from '@/lib/firebase/schema';
import { FieldValue } from 'firebase-admin/firestore';

interface CreateProjectRequest {
    clientId: string;
    idea: ProjectIdea;
}

export async function POST(request: NextRequest) {
    try {
        const body: CreateProjectRequest = await request.json();
        const { clientId, idea } = body;

        if (!clientId || !idea?.title || !idea?.description) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Generate project ID
        const projectId = `proj_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        const project: Omit<Project, 'createdAt' | 'updatedAt'> = {
            id: projectId,
            clientId,
            currentStage: 1,
            idea,
        };

        // Save to Firestore
        await collections.projects.doc(projectId).set({
            ...project,
            createdAt: FieldValue.serverTimestamp(),
            updatedAt: FieldValue.serverTimestamp(),
        });

        return NextResponse.json({
            success: true,
            project: { ...project, createdAt: new Date(), updatedAt: new Date() },
        });

    } catch (error) {
        console.error('Create Project Error:', error);
        return NextResponse.json(
            { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const projectId = searchParams.get('id');

        if (!projectId) {
            // Return all projects (for dashboard)
            const snapshot = await collections.projects.orderBy('createdAt', 'desc').limit(10).get();
            const projects = snapshot.docs.map(doc => doc.data());
            return NextResponse.json({ success: true, projects });
        }

        // Get specific project
        const doc = await collections.projects.doc(projectId).get();

        if (!doc.exists) {
            return NextResponse.json(
                { success: false, error: 'Project not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, project: doc.data() });

    } catch (error) {
        console.error('Get Project Error:', error);
        return NextResponse.json(
            { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
