import { getSheet } from '../lib/google-sheets';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function inspectFullWidth() {
    console.log('🔍 Inspecting Rows 145-160 Full Width...');
    const doc = await getSheet();
    if (!doc) {
        console.error("No doc found");
        return;
    }
    const sheet = doc.sheetsByIndex[0];
    await sheet.loadCells('A145:K160');

    // Headers are in Row 1 (Index 0), let's assume loose adherence
    // We want to see columns A(0) through H(7)

    for (let r = 145; r <= 160; r++) {
        const rowData = [];
        for (let c = 0; c < 8; c++) {
            let val = sheet.getCell(r, c).formattedValue;
            if (val === null) val = 'null';
            rowData.push(`[${c}]=${val}`);
        }
        console.log(`Row ${r + 1}: ${rowData.join(', ')}`);
    }
}

inspectFullWidth();
