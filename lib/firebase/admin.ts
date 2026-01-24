/**
 * Firebase Admin SDK Initialization
 * 
 * This module initializes the Firebase Admin SDK for server-side operations.
 * Used by API routes to interact with Firestore.
 */

import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';


// Explicitly load .env.local before checking process.env for credentials
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

import { initializeApp, getApps, cert, type ServiceAccount } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
const serviceAccount: ServiceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

// Initialize Firebase Admin (singleton pattern)
function initializeFirebaseAdmin() {
    if (getApps().length === 0) {
        // Try environment variables first
        if (serviceAccount.projectId && serviceAccount.clientEmail && serviceAccount.privateKey) {
            initializeApp({
                credential: cert(serviceAccount),
            });
        }
        // Fallback to local JSON file if available (specifically for Tejas migration)
        else {
            const jsonPath = path.resolve(process.cwd(), '../tejasOS/sps-leadscleandb-c242af7a873b.json');
            if (fs.existsSync(jsonPath)) {
                initializeApp({
                    credential: cert(jsonPath),
                });
            } else {
                console.warn('⚠️ No Firebase Admin credentials found (env or JSON). Firestore operations will fail.');
                // We still attempt to getFirestore, which might fail later
            }
        }
    }
    return getFirestore();
}


// Export the Firestore instance
export const db = initializeFirebaseAdmin();

// Collection references for type safety
export const collections = {
    projects: db.collection('projects'),
    agencyLogs: db.collection('agency_logs'),
    researchReports: db.collection('research_reports'),
    blueprints: db.collection('blueprints'),
    // New Phase 3 Collections
    buildTasks: db.collection('build_tasks'),
    issues: db.collection('issues'),
    logs: db.collection('logs'),
    volunteers: db.collection('volunteers'),
    assignments: db.collection('assignments'),
};
