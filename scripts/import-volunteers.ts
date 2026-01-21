import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { Volunteer, Assignment } from '../lib/tejas/data';

/**
 * tejasOS Volunteer Importer
 * Handles Dave's CSV structure: Name, Email, Phone, Station, Role
 */
export async function importVolunteers(csvPath: string) {
    console.log(`🚀 Starting tejasOS Volunteer Import from: ${csvPath}`);

    if (!fs.existsSync(csvPath)) {
        console.error(`❌ File not found: ${csvPath}`);
        return;
    }

    const fileContent = fs.readFileSync(csvPath, 'utf-8');
    const records = parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true
    });

    const volunteers: Volunteer[] = [];
    const assignments: Assignment[] = [];

    records.forEach((record: any, index: number) => {
        const id = `v-${index + 1}`;
        const nameParts = record.Name.split(' ');
        const firstName = nameParts[0];
        const lastName = nameParts.slice(1).join(' ') || 'Unknown';

        const volunteer: Volunteer = {
            id,
            firstName,
            lastName,
            name: record.Name,
            email: record.Email,
            phone: record.Phone,
            reliabilityScore: 85, // Default for new imports
            experience_level: 'intermediate',
            history: [],
            distanceFromVenue: 10 // Default
        };

        const assignment: Assignment = {
            id: `a-${index + 1}`,
            volunteerId: id,
            station: record.Station,
            role: record.Role,
            startTime: new Date('2026-02-06T08:00:00'), // Default kickoff
            endTime: new Date('2026-02-06T16:00:00'),
            status: 'confirmed'
        };

        volunteers.push(volunteer);
        assignments.push(assignment);
    });

    console.log(`✅ Successfully processed ${volunteers.length} volunteers.`);

    // In a real execution, we would call Firebase Admin SDK here.
    // For now, we output the counts.
    return { volunteers, assignments };
}

// CLI Execution Support
if (require.main === module) {
    const csvFile = process.argv[2];
    if (csvFile) {
        importVolunteers(path.resolve(process.cwd(), csvFile)).then(() => {
            console.log('🏁 Import completed.');
        });
    } else {
        console.log('Usage: npx ts-node scripts/import-volunteers.ts <data.csv>');
    }
}
