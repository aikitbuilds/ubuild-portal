import { fetchVolunteers } from '../lib/google-sheets';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function debugCount() {
    console.log('🔍 Auditing Volunteer Row Detection...');
    try {
        const volunteers = await fetchVolunteers();
        console.log(`📊 Current System Count: ${volunteers.length}`);

        console.log('\nSample Rows Found (Indices 2-25):');
        volunteers.slice(0, 25).forEach(v => {
            console.log(`- Row ${v.rowNumber}: [${v.firstName} ${v.lastName}] Role: [${v.role}] Notes: [${v.notes.substring(0, 20)}...]`);
        });

    } catch (e: any) {
        console.error('Audit Error:', e.message);
    }
}

debugCount();
