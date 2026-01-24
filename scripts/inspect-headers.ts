import { getSheet } from '../lib/google-sheets';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function inspectHeaders() {
    console.log('🔍 Inspecting Sheet Headers & Inconsistencies...');
    const doc = await getSheet();
    if (!doc) {
        console.error("No doc found");
        return;
    }
    const sheet = doc.sheetsByIndex[0];
    await sheet.loadCells('A1:J200');

    console.log('\n--- Headers (Rows 1-3) ---');
    for (let r = 0; r < 3; r++) {
        const row = [];
        for (let c = 0; c < 10; c++) {
            row.push(sheet.getCell(r, c).formattedValue);
        }
        console.log(`Row ${r + 1}: ${JSON.stringify(row)}`);
    }

    console.log('\n--- Inconsistency Check (Rows 145-155) ---');
    for (let r = 144; r < 155; r++) {
        const colB = sheet.getCell(r, 1).formattedValue; // Role?
        const colC = sheet.getCell(r, 2).formattedValue; // Name? Time?
        const colD = sheet.getCell(r, 3).formattedValue; // Email?
        const colF = sheet.getCell(r, 5).formattedValue;
        const colG = sheet.getCell(r, 6).formattedValue; // Time?

        console.log(`Row ${r + 1}: B=[${colB}], C=[${colC}], D=[${colD}], F=[${colF}], G=[${colG}]`);
    }
}

inspectHeaders();
