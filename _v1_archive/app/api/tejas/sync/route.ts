import { NextResponse } from 'next/server';
import { syncVolunteersFromSheet } from '@/lib/tejas/sync-volunteers';

export async function POST(request: Request) {
    try {
        // Simple authentication check (optional but recommended)
        const { searchParams } = new URL(request.url);
        const secret = searchParams.get('secret');

        // In a real app, use a more secure session check
        // For MVP, we check for a simple secret if provided in .env
        const adminSecret = process.env.SYNC_SECRET;
        if (adminSecret && secret !== adminSecret) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const result = await syncVolunteersFromSheet();

        return NextResponse.json(result);
    } catch (error: any) {
        console.error('API Sync Error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to sync volunteer data' },
            { status: 500 }
        );
    }
}
