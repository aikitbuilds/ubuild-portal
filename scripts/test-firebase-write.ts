/**
 * Firebase Write Test Script
 * 
 * Usage: npx tsx scripts/test-firebase-write.ts
 * 
 * Verifies that the Admin SDK can successfully write to the new Phase 3 collections.
 */

import path from 'path';
import dotenv from 'dotenv';
// Explicitly load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

import { collections } from '../lib/firebase/admin';
import { FieldValue } from 'firebase-admin/firestore';

async function testFirebaseWrite() {
    console.log('🔥 Testing Firebase Firestore writes for Phase 3...\n');

    try {
        const projectId = 'test-project-schema-v2';

        // 1. Write to build_tasks
        console.log('Writing to [build_tasks]...');
        await collections.buildTasks.add({
            projectId,
            status: 'pending',
            componentName: 'Test Component',
            assignedAgent: '@test-agent',
            createdAt: FieldValue.serverTimestamp(),
            updatedAt: FieldValue.serverTimestamp(),
        });
        console.log('✅ build_tasks write successful');

        // 2. Write to issues
        console.log('Writing to [issues]...');
        await collections.issues.add({
            projectId,
            severity: 'low',
            description: 'Test issue from verification script',
            status: 'open',
            createdAt: FieldValue.serverTimestamp(),
        });
        console.log('✅ issues write successful');

        // 3. Write to logs
        console.log('Writing to [logs]...');
        await collections.logs.add({
            projectId,
            message: 'Schema verification test run',
            type: 'info',
            timestamp: FieldValue.serverTimestamp(),
        });
        console.log('✅ logs write successful');

        console.log('\n✅ All schema writes verified successfully.');
        process.exit(0);

    } catch (error) {
        console.error('❌ Firebase Write Error:', error);
        process.exit(1);
    }
}

testFirebaseWrite();
