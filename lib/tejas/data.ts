export interface Volunteer {
    id: string;
    firstName: string;
    lastName: string;
    name: string; // for convenience
    email: string;
    phone: string;
    reliabilityScore: number; // 0-100
    experience_level: 'novice' | 'intermediate' | 'expert';
    history: string[];
    distanceFromVenue: number; // in miles
    written_instructions?: string;
    voice_instruction_url?: string;
    riskScore?: number;
}

export interface Assignment {
    id: string;
    volunteerId: string;
    station: string;
    startTime: Date;
    endTime: Date;
    role: string;
    shift_time?: string;
    status: 'pending' | 'confirmed' | 'active' | 'completed';
    backupVolunteerId?: string;
}

export interface CheckIn {
    id: string;
    volunteerId: string;
    assignmentId: string;
    timestamp: Date;
    location?: {
        lat: number;
        lng: number;
    };
}

export interface Alert {
    id: string;
    type: 'no-show' | 'conflict' | 'medical' | 'gear' | 'weather';
    severity: 'red' | 'yellow' | 'green';
    status: 'open' | 'triaged' | 'resolved';
    message: string;
    volunteerId?: string;
    station?: string;
    ai_recommendation?: string;
    created_at: Date;
    risk_score?: number;
}

export interface Ticket {
    id: string;
    volunteer_id: string;
    volunteer_name?: string;
    station: string;
    category: 'medical' | 'gear' | 'staffing' | 'weather' | 'other';
    severity: 'low' | 'medium' | 'high' | 'emergency';
    message: string;
    voice_url?: string;
    ai_summary?: string;
    ai_priority: number; // 0-100
    suggested_action?: string;
    status: 'open' | 'triaged' | 'resolved' | 'dismissed';
    created_at: Date;
}

/**
 * AI Logic: No-Show Prediction
 * Risk = Base Rate (18%) + Reliability Score + Distance
 */
export function predictNoShow(volunteer: Volunteer, assignment: Assignment): number {
    let risk = 18; // 18% base

    // Reliability Factor
    if (volunteer.reliabilityScore < 70) risk += 30;
    if (volunteer.reliabilityScore > 90) risk -= 10;

    // Distance Factor
    if (volunteer.distanceFromVenue > 30) risk += 10;

    // Time Proximity (if within 1 hour and not checked in)
    const now = new Date();
    const timeToStart = (assignment.startTime.getTime() - now.getTime()) / (1000 * 60);
    if (timeToStart < 60 && timeToStart > 0) risk += 15;

    return Math.max(0, Math.min(100, risk));
}

/**
 * Detects overlapping shifts for a volunteer.
 */
export function detectConflicts(assignments: Assignment[]): Alert[] {
    const alerts: Alert[] = [];
    const volunteerAssignments: Record<string, Assignment[]> = {};

    assignments.forEach(a => {
        if (!volunteerAssignments[a.volunteerId]) volunteerAssignments[a.volunteerId] = [];
        volunteerAssignments[a.volunteerId].push(a);
    });

    Object.keys(volunteerAssignments).forEach(vId => {
        const vAs = volunteerAssignments[vId];
        for (let i = 0; i < vAs.length; i++) {
            for (let j = i + 1; j < vAs.length; j++) {
                const a1 = vAs[i];
                const a2 = vAs[j];

                if (a1.startTime < a2.endTime && a1.endTime > a2.startTime) {
                    alerts.push({
                        id: `conflict-${vId}-${a1.id}-${a2.id}`,
                        type: 'conflict',
                        severity: 'yellow',
                        status: 'open',
                        volunteerId: vId,
                        message: `Overlap detected for volunteer ${vId} at ${a1.station} and ${a2.station}`,
                        ai_recommendation: `Swap ${vId} from ${a1.station} to avoid conflict.`,
                        created_at: new Date()
                    });
                }
            }
        }
    });

    return alerts;
}

export const MOCK_STATIONS = [
    "Packet Pickup",
    "Dam Nation (AS1)",
    "Gate (AS2)",
    "Overnight Loop",
    "Course Marking",
    "Start/Finish"
];

export function generateGhostData() {
    const volunteers: Volunteer[] = [];
    const assignments: Assignment[] = [];
    const alerts: Alert[] = [];

    // Lead Volunteer: Michael Cong
    const michael: Volunteer = {
        id: 'v-michael-cong',
        firstName: 'Michael',
        lastName: 'Cong',
        name: 'Michael Cong',
        email: 'michael.cong@example.com',
        phone: '555-0199',
        reliabilityScore: 95,
        experience_level: 'expert',
        history: ['Rocky Raccoon 2024'],
        distanceFromVenue: 12
    };
    // Stakeholder 1: Dave Smithey
    const dave: Volunteer = {
        id: 'v-dave-smithey',
        firstName: 'Dave',
        lastName: 'Smithey',
        name: 'Dave Smithey',
        email: 'dave@tejastrails.com', // Demo email
        phone: '555-DAVE',
        reliabilityScore: 100,
        experience_level: 'expert',
        history: ['All Races Ever'],
        distanceFromVenue: 0,
        riskScore: 0
    };
    // Stakeholder 2: Brooke Berg
    const brooke: Volunteer = {
        id: 'v-brooke-berg',
        firstName: 'Brooke',
        lastName: 'Berg',
        name: 'Brooke Berg',
        email: 'brooke@tejastrails.com',
        phone: '555-BRKE',
        reliabilityScore: 100,
        experience_level: 'expert',
        history: ['Logistics Queen'],
        distanceFromVenue: 0,
        riskScore: 0
    };

    // Add stakeholders FIRST so they appear at top of lists
    volunteers.push(dave, brooke, michael);

    // 69 more volunteers
    for (let i = 1; i <= 69; i++) {
        const exp = i % 3 === 0 ? 'expert' : i % 2 === 0 ? 'intermediate' : 'novice';
        const reliability = 60 + Math.floor(Math.random() * 40);
        volunteers.push({
            id: `v-${i}`,
            firstName: `Volunteer`,
            lastName: `${i}`,
            name: `Volunteer ${i}`,
            email: `v${i}@example.com`,
            phone: `555-01${i.toString().padStart(2, '0')}`,
            reliabilityScore: reliability,
            experience_level: exp as any,
            history: [],
            distanceFromVenue: Math.floor(Math.random() * 60)
        });
    }

    const baseDate = new Date('2026-02-06T08:00:00');

    volunteers.forEach((v, idx) => {
        const stationIdx = idx % MOCK_STATIONS.length;
        const start = new Date(baseDate);
        start.setHours(start.getHours() + (Math.floor(idx / 6) * 8));
        const end = new Date(start);
        end.setHours(end.getHours() + 8);

        assignments.push({
            id: `a-${idx}`,
            volunteerId: v.id,
            station: MOCK_STATIONS[stationIdx],
            startTime: start,
            endTime: end,
            role: idx % 10 === 0 ? 'Captain' : 'Crew',
            status: 'confirmed'
        });
    });

    // Create some intentional conflicts
    const conflictVol = volunteers[1];
    assignments.push({
        id: `a-conflict-1`,
        volunteerId: conflictVol.id,
        station: "Gate (AS2)",
        startTime: assignments[1].startTime,
        endTime: assignments[1].endTime,
        role: 'Crew',
        status: 'confirmed'
    });

    // Dave Smithey Assignment: Friday Packet Pickup
    assignments.push({
        id: 'a-dave-1',
        volunteerId: 'v-dave-smithey',
        station: 'Packet Pickup',
        startTime: new Date('2026-02-06T12:00:00'), // Friday 12pm
        endTime: new Date('2026-02-06T18:00:00'),   // Friday 6pm
        role: 'General Manager',
        status: 'confirmed'
    });

    // Brooke Berg Assignment: Aid Station 1
    assignments.push({
        id: 'a-brooke-1',
        volunteerId: 'v-brooke-berg',
        station: 'Dam Nation (AS1)',
        startTime: new Date('2026-02-06T14:00:00'), // Friday 2pm
        endTime: new Date('2026-02-06T22:00:00'),   // Friday 10pm
        role: 'Logistics Manager',
        status: 'confirmed'
    });

    // Run AI conflict detection
    const conflictAlerts = detectConflicts(assignments);
    alerts.push(...conflictAlerts);

    // High risk no-show alert
    const riskyVol = volunteers.find(v => v.reliabilityScore < 70);
    if (riskyVol) {
        const riskyAs = assignments.find(a => a.volunteerId === riskyVol.id);
        if (riskyAs) {
            alerts.push({
                id: `alert-noshow-${riskyVol.id}`,
                type: 'no-show',
                severity: 'red',
                status: 'open',
                volunteerId: riskyVol.id,
                risk_score: 82,
                message: `Critical no-show risk detected for ${riskyVol.name} at ${riskyAs.station}`,
                ai_recommendation: "Activate backup volunteer 'Sarah Kingston' immediately.",
                created_at: new Date()
            });
        }
    }

    return { volunteers, assignments, alerts };
}

export function generateMockTickets(): Ticket[] {
    return [
        {
            id: 't-1',
            volunteer_id: 'v-1',
            volunteer_name: 'Volunteer 1',
            station: 'Dam Nation (AS1)',
            category: 'gear',
            severity: 'medium',
            message: 'We are running low on water jugs. Have about 10 left. Expecting a big rush in 2 hours.',
            ai_summary: 'Supply shortage at AS1 within 2 hours.',
            ai_priority: 65,
            suggested_action: 'Dispatch supply truck with 50 water jugs to AS1.',
            status: 'triaged',
            created_at: new Date()
        },
        {
            id: 't-2',
            volunteer_id: 'v-michael-cong',
            volunteer_name: 'Michael Cong',
            station: 'Packet Pickup',
            category: 'staffing',
            severity: 'high',
            message: 'Three volunteers for the night shift just texted saying they can\'t make it.',
            ai_summary: 'Critical staffing gap for night shift at Packet Pickup.',
            ai_priority: 85,
            suggested_action: 'Request floaters or reassign expert crew from Over-Night Loop.',
            status: 'triaged',
            created_at: new Date(Date.now() - 1000 * 60 * 15) // 15 mins ago
        },
        {
            id: 't-3',
            volunteer_id: 'v-5',
            volunteer_name: 'Volunteer 5',
            station: 'Gate (AS2)',
            category: 'medical',
            severity: 'emergency',
            message: 'Runner #452 came in with severe dehydration. Vomiting, dizzy. We need medic assistance.',
            ai_summary: 'Emergency medical situation at AS2. Runner #452.',
            ai_priority: 98,
            suggested_action: 'Alert Medical Lead immediately. Dispatch emergency transport to AS2.',
            status: 'triaged',
            created_at: new Date(Date.now() - 1000 * 60 * 5) // 5 mins ago
        }
    ];
}
