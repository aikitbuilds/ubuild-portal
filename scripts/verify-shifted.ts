import { getSheet } from '../lib/google-sheets';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function verifyShiftedFormat() {
    console.log('🔍 Verifying Shifted Format (Role=B, Time=C, Name=D?)...');
    const doc = await getSheet();
    if (!doc) { return; }
    const sheet = doc.sheetsByIndex[0];
    await sheet.loadCells('A1:J500');

    let formatBCount = 0;
    let formatBWithName = 0;

    for (let r = 10; r < 500; r++) {
        const colB = (sheet.getCell(r, 1).formattedValue || '').trim(); // Role
        const colC = (sheet.getCell(r, 2).formattedValue || '').trim(); // Time?
        const colD = (sheet.getCell(r, 3).formattedValue || '').trim(); // Name?
        const colG = (sheet.getCell(r, 6).formattedValue || '').trim(); // Time (Format A)

        const isFormatA = colG.match(/\d+/) || colG.match(/(FRI|SAT|SUN)/i);
        const isFormatB = !isFormatA && (colC.match(/\d+/) || colC.match(/(FRI|SAT|SUN)/i));

        if (isFormatB && colB) {
            formatBCount++;
            if (colD) {
                formatBWithName++;
                console.log(`Found Filled Shifted Slot at Row ${r + 1}: Role=[${colB}], Time=[${colC}], Name=[${colD}]`);
            }
        }
    }
    console.log(`\nStats:`);
    console.log(`Format B Rows Found: ${formatBCount}`);
    console.log(`Format B Rows with Name (Col D): ${formatBWithName}`);
}

verifyShiftedFormat();
