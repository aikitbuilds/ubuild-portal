import { getSheet } from '../lib/google-sheets';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function updateCong() {
    console.log('🔧 Updating "Cong Michael Tran"...');
    const doc = await getSheet();
    if (!doc) { return; }
    const sheet = doc.sheetsByIndex[0];
    await sheet.loadCells('A260:J500'); // Load Supply area

    let found = false;
    for (let r = 260; r < 500; r++) {
        const firstName = (sheet.getCell(r, 4).formattedValue || '').trim();
        const lastName = (sheet.getCell(r, 5).formattedValue || '').trim();

        if (firstName.includes('Cong') && lastName.includes('Tran')) {
            found = true;
            console.log(`Found Cong at Row ${r + 1}. Updating...`);

            // Update Notes (Col J / Index 9)
            const notesCell = sheet.getCell(r, 9);
            notesCell.value = "Available Friday, Saturday, Sunday. Maximize stations. fallback for unassigned. Prefer Packet Pickup 3pm.";

            // Save
            await sheet.saveUpdatedCells();
            console.log('✅ Updated Notes.');
            break;
        }
    }

    if (!found) console.log('❌ Could not find Cong Michael Tran.');
}

updateCong();
