import { getSheet } from '../lib/google-sheets';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function inspectVolunteerPool() {
    console.log('🔍 Inspecting Rows 260-280 (Potential Volunteer Pool)...');
    const doc = await getSheet();
    if (!doc) { return; }
    const sheet = doc.sheetsByIndex[0];
    await sheet.loadCells('A260:H280');

    for (let r = 260; r < 280; r++) {
        const row = [];
        for (let c = 0; c < 8; c++) {
            row.push(`[${c}]=${sheet.getCell(r, c).formattedValue}`);
        }
        console.log(`Row ${r + 1}: ${row.join(', ')}`);
    }
}

inspectVolunteerPool();
