import { fetchVolunteers } from '../lib/google-sheets';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function checkDuplicates() {
    console.log('🔍 Checking for Duplicates...');
    const volunteers = await fetchVolunteers();

    const nameCounts: Record<string, any[]> = {};

    volunteers.forEach(v => {
        // Normalize name
        const name = `${v.firstName} ${v.lastName}`.trim().toLowerCase();
        if (name.length < 3) return;

        if (!nameCounts[name]) nameCounts[name] = [];
        nameCounts[name].push({
            r: v.rowNumber,
            role: v.role,
            email: v.email,
            status: v.status
        });
    });

    console.log(`\n--- Duplicate Names Report ---`);
    let duplicates = 0;
    Object.keys(nameCounts).forEach(name => {
        const entries = nameCounts[name];
        if (entries.length > 1) {
            duplicates++;
            console.log(`\n👤 ${name} (${entries.length} entries):`);
            entries.forEach(e => {
                console.log(`   - Row ${e.r}: [${e.role || 'Unassigned'}] ${e.status || ''}`);
            });
        }
    });

    console.log(`\nTotal Duplicates Groups: ${duplicates}`);
}

checkDuplicates();
