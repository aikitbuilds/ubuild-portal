/**
 * Auto-Fix API Route (Debugger)
 * 
 * POST /api/agency/debug
 * 
 * Analyzes an issue description using Gemini and returns a suggested fix.
 */

import { NextRequest, NextResponse } from 'next/server';
import { collections } from '@/lib/firebase/admin';
import { analyzeError } from '@/lib/agency/debugger';
import { FieldValue } from 'firebase-admin/firestore';

export async function POST(request: NextRequest) {
    try {
        const { issueId, description, projectId } = await request.json();

        if (!issueId || !description) {
            return NextResponse.json({ success: false, error: 'Missing issue details' }, { status: 400 });
        }

        // Call the Debugger Agent (Gemini)
        const suggestedFix = await analyzeError(description);

        // Update the issue with the suggested fix
        await collections.issues.doc(issueId).update({
            suggestedFix,
            updatedAt: FieldValue.serverTimestamp(),
        });

        // Log the fix attempt
        if (projectId) {
            await collections.logs.add({
                projectId,
                message: `Auto-Fix deployed for issue: ${issueId}`,
                type: 'warning', // Warning color often good for fixes/alerts
                timestamp: FieldValue.serverTimestamp(),
            });
        }

        return NextResponse.json({ success: true, suggestedFix });

    } catch (error) {
        console.error('Auto-Fix API Error:', error);
        return NextResponse.json({ success: false, error: 'Failed to generate fix' }, { status: 500 });
    }
}
