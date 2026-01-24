import { getSheet } from '../lib/google-sheets';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function findRyan() {
    console.log('🔍 Searching for "Ryan"...');
    const doc = await getSheet();
    if (!doc) { return; }
    const sheet = doc.sheetsByIndex[0];
    await sheet.loadCells('A130:H140');

    // Scan Row 133 explicitly (Index 132 for 0-based? No, sheet usually 0-based row access matches Excel 1-based minus 1. 133 in UI = 132 in API)
    // My previous scripts used loop r=130..150.
    // Let's scan all columns in 130-140.

    for (let r = 130; r < 140; r++) {
        for (let c = 0; c < 8; c++) {
            const val = (sheet.getCell(r, c).formattedValue || '').trim();
            if (val.includes('Ryan')) {
                console.log(`FOUND RYAN at Row ${r + 1}, Col Index ${c} (Letter ${String.fromCharCode(65 + c)}): [${val}]`);
            }
        }
    }
}

findRyan();
