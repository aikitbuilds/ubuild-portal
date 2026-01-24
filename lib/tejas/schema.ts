import { Timestamp, GeoPoint } from "firebase/firestore";

// --- VOLUNTEER ---
export interface Volunteer {
    id: string; // Document ID (Auth UID)
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    photoUrl?: string;

    // Ops Data
    credits: number;
    distanceFromVenue?: number; // Added for AI Risk Logic
    roles: string[]; // e.g. "Captain", "Medical", "Sweeper"

    // AI Intelligence Layer
    aiMetrics?: {
        riskScore: number; // 0-100 (High score = high reliability risk)
        reliabilityHistory: string[]; // e.g. ["On Time", "Late", "No Show"]
    };
}

// --- ASSIGNMENT ---
export interface Assignment {
    id: string; // Document ID
    volunteerId: string;
    raceId: string;
    stationId: string;

    // Timing
    shiftStart: Timestamp;
    shiftEnd: Timestamp;

    // Status Tracking
    status: 'pending' | 'confirmed' | 'checkedIn' | 'completed' | 'noShow' | 'late';
}

// --- CHECK-IN ---
export interface CheckIn {
    id: string;
    volunteerId: string;
    assignmentId: string;
    timestamp: Timestamp;
    location: GeoPoint;

    // Verification Method
    method: 'qr_scan' | 'manual_override' | 'gps_verify';
}

// --- TICKET (Issue Reporting) ---
// New for V2: Formalizing chaos management
export interface SupportTicket {
    id: string;
    reporterId: string; // Volunteer UID who reported it
    raceId: string;

    // Categorization
    category: 'Medical' | 'Supply' | 'Logistics' | 'Tech' | 'Other';
    status: 'New' | 'Triaging' | 'Resolved';

    // Content
    description: string;
    audioUrl?: string; // Voice note URL

    // AI Enrichment
    aiPriorityScore?: number; // 1-10
    aiSuggestedAction?: string; // e.g. "Dispatch Medical Unit 4"

    createdAt: Timestamp;
}

// --- ALERT (Command Center Feed) ---
export interface CommandAlert {
    id: string;
    severity: 'critical' | 'warning' | 'info';
    message: string;
    status: 'active' | 'acknowledged';
    targetAudience: string[]; // e.g. ["Dave", "Brooke", "All Captains"]
    createdAt: Timestamp;
}
