import { NextResponse } from 'next/server';
import { collections, db } from '@/lib/firebase/admin';
import { CheckIn } from '@/lib/tejas/data';

/**
 * API Endpoint for Volunteer Check-In
 * POST /api/tejas/checkin
 */
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { volunteerId, assignmentId, location } = body;

        if (!volunteerId || !assignmentId) {
            return NextResponse.json({ error: 'Missing volunteerId or assignmentId' }, { status: 400 });
        }

        const checkInId = `ci-${volunteerId}-${Date.now()}`;
        const checkInData: CheckIn = {
            id: checkInId,
            volunteerId,
            assignmentId,
            timestamp: new Date(),
            location
        };

        // Batch update: 
        // 1. Create CheckIn record
        // 2. Update Assignment status to 'active'
        // 3. (Optional) Record in a unified audit log
        const batch = db.batch();

        const checkInRef = db.collection('checkins').doc(checkInId);
        batch.set(checkInRef, checkInData);

        const assignmentRef = collections.assignments.doc(assignmentId);
        batch.update(assignmentRef, { status: 'active' });

        await batch.commit();

        console.log(`✅ Volunteer ${volunteerId} checked in for assignment ${assignmentId}`);

        return NextResponse.json({ success: true, checkInId });
    } catch (error: any) {
        console.error('Check-in API Error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to process check-in' },
            { status: 500 }
        );
    }
}
