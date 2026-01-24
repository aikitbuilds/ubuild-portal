import { getSheet } from '../lib/google-sheets';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function assignVolunteersSmart() {
    console.log('🧠 Running AI Assignment (Availability Matching)...');
    const doc = await getSheet();
    if (!doc) { return; }
    const sheet = doc.sheetsByIndex[0];
    await sheet.loadCells('A1:J1000');

    // 1. Gather Demand (Open Slots)
    const openSlots = [];
    for (let r = 10; r < 250; r++) {
        const colB = (sheet.getCell(r, 1).formattedValue || '').trim(); // Role
        const colC = (sheet.getCell(r, 2).formattedValue || '').trim(); // Time
        const colD = (sheet.getCell(r, 3).formattedValue || '').trim(); // Name (Slot)

        const isShifted = colB && colC && (colC.includes('FRI') || colC.includes('SAT') || colC.includes('SUN') || colC.match(/\d/));

        if (isShifted) {
            if (!colD || colD.toLowerCase() === 'open' || colD.toLowerCase().includes('volunteer')) {
                let day = 'ANY';
                if (colC.toUpperCase().includes('FRI')) day = 'FRI';
                if (colC.toUpperCase().includes('SAT')) day = 'SAT';
                if (colC.toUpperCase().includes('SUN')) day = 'SUN';
                openSlots.push({ r, role: colB, time: colC, day });
            }
        }
    }
    console.log(`📉 Found ${openSlots.length} Open Slots.`);

    // 2. Gather Supply (Unassigned Volunteers)
    const volunteers = [];
    for (let r = 264; r < 500; r++) {
        const firstName = (sheet.getCell(r, 4).formattedValue || '').trim(); // Col E
        const lastName = (sheet.getCell(r, 5).formattedValue || '').trim();  // Col F
        const email = (sheet.getCell(r, 6).formattedValue || '').trim();     // Col G
        const notes = (sheet.getCell(r, 9).formattedValue || '').trim();     // Col J (Availability?)

        if (firstName && email) {
            let prefDay = 'ANY';
            if (notes.toUpperCase().includes('FRI')) prefDay = 'FRI';
            if (notes.toUpperCase().includes('SAT')) prefDay = 'SAT';
            if (notes.toUpperCase().includes('SUN')) prefDay = 'SUN';

            volunteers.push({ r, name: `${firstName} ${lastName}`, email, prefDay });
        }
    }
    console.log(`🙋 Found ${volunteers.length} Available Volunteers.`);

    // 3. Match Logic
    const assignments = [];
    const unassignedVols = [...volunteers];

    // Helper to find and remove a valid volunteer
    const pickVol = (targetDay) => {
        const idx = unassignedVols.findIndex(v => v.prefDay === targetDay);
        if (idx >= 0) return unassignedVols.splice(idx, 1)[0];
        const anyIdx = unassignedVols.findIndex(v => v.prefDay === 'ANY');
        if (anyIdx >= 0) return unassignedVols.splice(anyIdx, 1)[0];
        // If desperate, take anyone
        if (unassignedVols.length > 0) return unassignedVols.pop();
        return null;
    };

    openSlots.forEach(slot => {
        const vol = pickVol(slot.day);
        if (vol) {
            assignments.push({ slot, vol });
        }
    });

    console.log(`\n✅ Generated ${assignments.length} Assignments.`);

    // 4. Execute Write
    for (const a of assignments) {
        const cell = sheet.getCell(a.slot.r, 3); // Col D
        cell.value = a.vol.name;
        cell.textFormat = { foregroundColor: { red: 0, green: 0, blue: 1 }, bold: true }; // Blue for AI
        console.log(`   + Assigned ${a.vol.name} (${a.vol.prefDay}) to ${a.slot.role} (${a.slot.day})`);
    }

    if (assignments.length > 0) {
        console.log('💾 Saving to Google Sheet...');
        await sheet.saveUpdatedCells();
        console.log('🎉 Done!');
    }
}

assignVolunteersSmart();
