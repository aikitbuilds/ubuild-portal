import { getSheet } from '../lib/google-sheets';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function verifyIndentation() {
    console.log('🔍 Verifying Data Indentation (Col A vs Col B)...');
    const doc = await getSheet();
    if (!doc) { return; }
    const sheet = doc.sheetsByIndex[0];
    await sheet.loadCells('A1:C200');

    let colAHasData = 0;
    let colBHasData = 0;
    let indentedRows = 0;

    console.log('--- Sample Rows ---');
    [3, 132, 133, 149, 150].forEach(r => {
        const a = (sheet.getCell(r, 0).formattedValue || '').trim();
        const b = (sheet.getCell(r, 1).formattedValue || '').trim();
        const c = (sheet.getCell(r, 2).formattedValue || '').trim();
        console.log(`Row ${r + 1}: A=[${a}], B=[${b}], C=[${c}]`);
    });

    for (let r = 10; r < 200; r++) {
        const a = sheet.getCell(r, 0).formattedValue;
        const b = sheet.getCell(r, 1).formattedValue;
        if (a) colAHasData++;
        if (b) colBHasData++;
        if (!a && b) indentedRows++;
    }

    console.log(`\nStats (Rows 11-200):`);
    console.log(`- Col A Has Data: ${colAHasData}`);
    console.log(`- Col B Has Data: ${colBHasData}`);
    console.log(`- Indented Rows (Empty A, Filled B): ${indentedRows}`);
}

verifyIndentation();
