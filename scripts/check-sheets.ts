import { getSheet } from '../lib/google-sheets';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function checkSheetsAndVolunteers() {
    console.log('🔍 Checking Sheets & "Volunteer" Role...');
    const doc = await getSheet();
    if (!doc) { return; }

    console.log(`\n--- Sheets Found: ${doc.sheetCount} ---`);
    doc.sheetsByIndex.forEach((s, i) => console.log(`[${i}] ${s.title} (Rows: ${s.rowCount})`));

    const sheet = doc.sheetsByIndex[0];
    await sheet.loadCells('A1:J1000');

    let volunteerRoleCount = 0;
    let volunteerRoleNames = [];

    for (let r = 0; r < 500; r++) {
        const colA = (sheet.getCell(r, 0).formattedValue || '').trim(); // Role?
        const colB = (sheet.getCell(r, 1).formattedValue || '').trim(); // Role per Header?

        // Check if Role is "Volunteer"
        if (colA.toLowerCase() === 'volunteer' || colB.toLowerCase() === 'volunteer') {
            const nameC = (sheet.getCell(r, 2).formattedValue || '').trim();
            const nameB = (sheet.getCell(r, 1).formattedValue || '').trim(); // If Role is A, maybe Name is B?

            volunteerRoleCount++;
            if (volunteerRoleNames.length < 5) {
                volunteerRoleNames.push(`Row ${r + 1}: A=[${colA}], B=[${colB}], NameC=[${nameC}]`);
            }
        }
    }

    console.log(`\nRows with 'Volunteer' as Role: ${volunteerRoleCount}`);
    volunteerRoleNames.forEach(n => console.log(n));
}

checkSheetsAndVolunteers();
