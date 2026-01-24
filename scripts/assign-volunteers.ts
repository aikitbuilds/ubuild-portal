import { getSheet } from '../lib/google-sheets';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function assignVolunteers() {
    console.log('🤖 Running Auto-Assignment (Rule-Based)...');
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

        // Shifted Format Check
        const isShifted = colB && colC && (colC.includes('FRI') || colC.includes('SAT') || colC.includes('SUN') || colC.match(/\d/));

        if (isShifted) {
            // It's a valid slot line. Is it empty?
            if (!colD || colD.toLowerCase() === 'open' || colD.toLowerCase().includes('volunteer')) {
                openSlots.push({ r, role: colB, time: colC });
            }
        }
    }
    console.log(`📉 Found ${openSlots.length} Open Slots.`);

    // 2. Gather Supply (Unassigned Volunteers)
    const availableVolunteers = [];
    for (let r = 264; r < 500; r++) {
        const firstName = (sheet.getCell(r, 4).formattedValue || '').trim(); // Col E
        const lastName = (sheet.getCell(r, 5).formattedValue || '').trim();  // Col F
        const email = (sheet.getCell(r, 6).formattedValue || '').trim();     // Col G

        if (firstName && email) {
            // Check if this person is already assigned? (Simple check: Just take them for now)
            // Ideally we'd scan the assignment board for their name, but for this "Ghost Writer" pass 
            // we will assume the pool is the source of truth for Unassigned.
            availableVolunteers.push({ r, name: `${firstName} ${lastName}`, email });
        }
    }
    console.log(`🙋 Found ${availableVolunteers.length} Available Volunteers.`);

    // 3. Match & Assign
    console.log('\n--- Proposed Assignments (Dry Run) ---');
    const assignmentsToMake = Math.min(openSlots.length, availableVolunteers.length);

    for (let i = 0; i < assignmentsToMake; i++) {
        const slot = openSlots[i];
        const vol = availableVolunteers[i];
        console.log(`[ ] Assign ${vol.name} -> ${slot.role} (${slot.time}) [Row ${slot.r + 1}]`);

        // WRITE ACTION (Commented out for safety until verified)
        // sheet.getCell(slot.r, 3).value = vol.name; 
        // sheet.getCell(slot.r, 3).textFormat = { bold: true, foregroundColor: { red: 0, green: 0, blue: 1 } }; // Blue for AI?
    }

    if (assignmentsToMake === 0) {
        console.log('No assignments possible (either no slots or no volunteers).');
    } else {
        console.log(`\nReady to assign ${assignmentsToMake} volunteers.`);
        console.log('To execute, uncomment the write lines in the script.');
    }

    // await sheet.saveUpdatedCells();
}

assignVolunteers();
