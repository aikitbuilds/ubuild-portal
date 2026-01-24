import { NextRequest, NextResponse } from 'next/server';
import { Ticket } from '@/lib/tejas/data';

// Note: In production, these would be written to Firestore tejas_tickets
// For this restoration, we use the original triage logic

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { volunteerId, station, category, severity, message, voiceUrl } = body;

        if (!volunteerId || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        console.log(`🤖 AI Director: Triaging report from ${volunteerId} at ${station}...`);

        // Simulated AI Logic (In production, call Anthropic Claude API)
        let aiPriority = 50;
        let aiSummary = "Processing report...";
        let suggestedAction = "Awaiting manual review.";

        // Basic heuristic for simulation
        if (severity === 'emergency' || category === 'medical') {
            aiPriority = 95;
            aiSummary = `Urgent ${category} alert at ${station}. Potential critical risk detected.`;
            suggestedAction = "IMMEDIATE DISPATCH: Send medical support and coordinate with local EMS.";
        } else if (severity === 'high' || category === 'staffing') {
            aiPriority = 80;
            aiSummary = `High priority ${category} issue reported. Coverage gap likely.`;
            suggestedAction = "REASSIGNMENT: Look for available experts at nearby stations to cover gaps.";
        } else if (category === 'gear') {
            aiPriority = 60;
            aiSummary = `Resupply request for ${station}.`;
            suggestedAction = "LOGISTICS: Add to next supply run within 2 hours.";
        } else {
            aiPriority = 30;
            aiSummary = `Routine ${category} update.`;
            suggestedAction = "MONITOR: No immediate intervention required.";
        }

        const newTicket: Ticket = {
            id: `t-${Date.now()}`,
            volunteer_id: volunteerId,
            station: station || 'Unknown',
            category: category as any,
            severity: severity as any,
            message,
            voice_url: voiceUrl,
            ai_summary: aiSummary,
            ai_priority: aiPriority,
            suggested_action: suggestedAction,
            status: 'triaged',
            created_at: new Date()
        };

        // TODO: In a real app, save to Firestore:
        // await addDoc(collection(db, 'tejas_tickets'), newTicket);

        console.log("✅ Report Triaged Successfully:", newTicket.id);

        return NextResponse.json(newTicket);
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
