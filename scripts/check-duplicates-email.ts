import { fetchVolunteers } from '../lib/google-sheets';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function checkDuplicatesByEmail() {
    console.log('🔍 Checking for Duplicates by EMAIL...');
    const volunteers = await fetchVolunteers();

    const emailCounts: Record<string, any[]> = {};

    volunteers.forEach(v => {
        if (!v.email) return;
        const email = v.email.toLowerCase().trim();

        if (!emailCounts[email]) emailCounts[email] = [];
        emailCounts[email].push({
            r: v.rowNumber,
            role: v.role,
            name: `${v.firstName} ${v.lastName}`,
            status: v.status
        });
    });

    console.log(`\n--- Duplicate Emails Report ---`);
    let duplicates = 0;
    Object.keys(emailCounts).forEach(email => {
        const entries = emailCounts[email];
        if (entries.length > 1) {
            duplicates++;
            console.log(`\n📧 ${email} (${entries.length} entries):`);
            entries.forEach(e => {
                console.log(`   - Row ${e.r}: Name=[${e.name}], Role=[${e.role || 'Unassigned'}]`);
            });
        }
    });

    console.log(`\nTotal Duplicates Groups: ${duplicates}`);
}

checkDuplicatesByEmail();
