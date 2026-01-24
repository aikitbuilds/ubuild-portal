import { getSheet } from '../lib/google-sheets';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function analyzeStructure() {
    console.log('🔍 Deep Analyzing Sheet Structure...');
    const doc = await getSheet();
    if (!doc) {
        console.error("No doc found");
        return;
    }
    const sheet = doc.sheetsByIndex[0];
    await sheet.loadCells('A1:J500');

    console.log('--- Sample Rows (130-150) ---');
    for (let r = 130; r < 150; r++) {
        const role = (sheet.getCell(r, 1).formattedValue || '').trim();
        const name = (sheet.getCell(r, 2).formattedValue || '').trim(); // Column C
        const time = (sheet.getCell(r, 6).formattedValue || '').trim(); // Column G
        if (role || name || time) {
            console.log(`Row ${r}: Role=[${role}], Name=[${name}], Time=[${time}]`);
        }
    }

    console.log('\n--- Searching for Open Slots patterns ---');
    let openSlots = 0;
    for (let r = 10; r < 500; r++) {
        const role = (sheet.getCell(r, 1).formattedValue || '').trim();
        const name = (sheet.getCell(r, 2).formattedValue || '').trim();
        const time = (sheet.getCell(r, 6).formattedValue || '').trim();

        // Heuristic: It's a slot if it has a Time.
        if (time && time.length > 3) {
            // It's OPEN if Name is empty or generic
            const isGenericName = name.toLowerCase().includes('volunteer') || name === '';

            if (isGenericName) {
                console.log(`Found Potential Open Slot at Row ${r}: Role=[${role}], Time=[${time}], Name=[${name}]`);
                openSlots++;
            }
        }
    }
    console.log(`Total Potential Open Slots: ${openSlots}`);
}

analyzeStructure();
