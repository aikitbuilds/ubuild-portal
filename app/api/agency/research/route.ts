/**
 * Research Engine API Route (Stage 1) - Dual Mode: Gemini + Perplexity MCP
 * 
 * POST /api/agency/research
 * 
 * Uses Perplexity MCP for real-time research when available,
 * falls back to Gemini for analysis.
 */

import { NextRequest, NextResponse } from 'next/server';
import { collections, db } from '@/lib/firebase/admin';
import type {
    ResearchRequest,
    ResearchReport,
    PerplexityResearchResult as ResearchResult,
    AgencyLog
} from '@/lib/firebase/schema';
import { FieldValue, Timestamp } from 'firebase-admin/firestore';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { pauseWorkflow } from '@/lib/agency/auto-pilot';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// System prompt for the Research Agent
const RESEARCH_AGENT_PROMPT = `You are a Venture Capital Market Research Analyst for a software development agency.
Your task is to analyze startup/product ideas and provide actionable market intelligence.

IMPORTANT: You MUST respond with ONLY valid JSON. No markdown, no explanations, just pure JSON.

The JSON must have this exact structure:
{
  "score": <number 1-10 representing market viability>,
  "competitors": ["competitor1", "competitor2", "competitor3"],
  "techStack": ["technology1", "technology2", "technology3"],
  "summary": "<2-3 sentence market analysis>",
  "marketSize": "<estimated TAM>",
  "userPainPoints": ["pain1", "pain2", "pain3"]
}`;

// Flag for MCP availability (set by environment or runtime check)
const MCP_PERPLEXITY_AVAILABLE = process.env.PERPLEXITY_API_KEY ? true : false;

/**
 * Call Perplexity MCP for real-time research
 * This is a placeholder - in production, this would use the actual MCP tool
 */
async function callPerplexityMCP(idea: string, audience: string): Promise<ResearchResult | null> {
    // In production: This would call mcp_perplexity-ask_perplexity_ask
    // For now, we return null to indicate MCP is not available
    // The actual MCP integration happens at the agent level, not in API routes

    if (!MCP_PERPLEXITY_AVAILABLE) {
        console.log('[Research] Perplexity MCP not configured - using Gemini fallback');
        return null;
    }

    // MCP calls are handled by the Antigravity agent, not direct API calls
    // This route serves as a backup when MCP is unavailable
    return null;
}

export async function POST(request: NextRequest) {
    try {
        // Parse request body
        const body = await request.json();
        const { projectId, idea, audience } = body as ResearchRequest;
        const useMCP = body.useMCP ?? true;

        if (!projectId || !idea) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields: projectId, idea' },
                { status: 400 }
            );
        }

        if (!GEMINI_API_KEY) {
            return NextResponse.json(
                { success: false, error: 'Gemini API key not configured' },
                { status: 500 }
            );
        }

        let researchResult: ResearchResult | null = null;
        let researchSource: 'perplexity-mcp' | 'gemini' = 'gemini';

        // Step 1: Try Perplexity MCP if requested and available
        if (useMCP) {
            researchResult = await callPerplexityMCP(idea, audience || '');
            if (researchResult) {
                researchSource = 'perplexity-mcp';
            }
        }

        // Step 2: Fall back to Gemini if MCP unavailable
        if (!researchResult) {
            const userQuery = `Analyze this software product idea for market viability:

IDEA: ${idea}
TARGET AUDIENCE: ${audience || 'General consumers'}

Provide your analysis as a JSON object with score (1-10), competitors (list of 3-5), techStack (recommended technologies), summary (2-3 sentences), marketSize, and userPainPoints (list of 3).`;

            // Initialize Gemini
            const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

            try {
                const result = await model.generateContent([
                    RESEARCH_AGENT_PROMPT,
                    userQuery
                ]);
                const response = await result.response;
                const rawContent = response.text();

                // Parse the JSON response
                let jsonString = rawContent;
                const jsonMatch = rawContent.match(/```(?:json)?\s*([\s\S]*?)```/);
                if (jsonMatch) {
                    jsonString = jsonMatch[1].trim();
                }
                researchResult = JSON.parse(jsonString);
            } catch (aiError) {
                console.error('[Research] AI call failed:', aiError);

                // Pause workflow and alert user - DO NOT hallucinate data
                await pauseWorkflow(projectId, 'Research API failed - requires user intervention');

                return NextResponse.json(
                    {
                        success: false,
                        error: 'Research failed - workflow paused',
                        requiresIntervention: true,
                    },
                    { status: 500 }
                );
            }
        }

        if (!researchResult) {
            await pauseWorkflow(projectId, 'Failed to generate research - no valid response');
            return NextResponse.json(
                { success: false, error: 'Research generation failed' },
                { status: 500 }
            );
        }

        // Create the research report document
        const reportId = `report_${projectId}_${Date.now()}`;
        const report: Omit<ResearchReport, 'id'> = {
            projectId,
            viabilityScore: researchResult.score,
            competitors: researchResult.competitors,
            techStack: researchResult.techStack || [],
            marketSummary: researchResult.summary,
            createdAt: new Date(),
        };

        // Save raw JSON to Firestore for Stage 2 consumption
        await collections.researchReports.doc(reportId).set({
            id: reportId,
            ...report,
            rawResult: researchResult, // Store raw for downstream agents
            source: researchSource,
            createdAt: FieldValue.serverTimestamp(),
        });

        // Also save to projects/{id}/research subcollection for easy access
        await db
            .collection('projects')
            .doc(projectId)
            .collection('research')
            .doc('latest')
            .set({
                ...researchResult,
                reportId,
                source: researchSource,
                createdAt: Timestamp.now(),
            });

        // Log the agent action
        const logEntry: Omit<AgencyLog, 'id'> = {
            projectId,
            agentName: '@researcher',
            stage: 1,
            input: { idea, audience, useMCP },
            output: researchResult as unknown as Record<string, unknown>,
            timestamp: new Date(),
            success: true,
        };
        await collections.agencyLogs.add({
            ...logEntry,
            timestamp: FieldValue.serverTimestamp(),
        });

        // Update project with lastOutput for auto-pilot consumption
        await collections.projects.doc(projectId).update({
            currentStage: 2,
            lastOutput: researchResult,
            status: 'ready',
            updatedAt: FieldValue.serverTimestamp(),
        });

        return NextResponse.json({
            success: true,
            report: { id: reportId, ...report },
            source: researchSource,
            mcpNote: researchSource === 'gemini'
                ? 'Perplexity MCP not available - used Gemini for research'
                : 'Used Perplexity MCP for real-time research',
        });

    } catch (error) {
        console.error('Research Engine Error:', error);

        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error occurred'
            },
            { status: 500 }
        );
    }
}
