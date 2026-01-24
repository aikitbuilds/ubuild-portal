import { getSheet } from '../lib/google-sheets';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function mapSupply() {
    console.log('🔍 Mapping Supply Rows 264-270...');
    const doc = await getSheet();
    if (!doc) { return; }
    const sheet = doc.sheetsByIndex[0];
    await sheet.loadCells('A260:J280');

    for (let r = 264; r < 275; r++) {
        const row = [];
        for (let c = 0; c < 10; c++) {
            let val = sheet.getCell(r, c).formattedValue;
            if (val === null) val = 'n';
            // Truncate long emails
            if (val.length > 15) val = val.substring(0, 15) + '...';
            row.push(`[${c}]=${val}`);
        }
        console.log(`Row ${r + 1}: ${row.join(', ')}`);
    }
}

mapSupply();
