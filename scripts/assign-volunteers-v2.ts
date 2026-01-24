import { getSheet } from '../lib/google-sheets';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

// Helper to check for overlap
function isTimeOverlap(t1, t2) {
    if (t1 === t2) return true;
    // Crude check: if strictly Day overlap (e.g. FRI vs FRI) assuming full commitment unless specific hours parsed
    // For this version, let's allow different days, but block same day unless hours are distinct?
    // User said "volunteers can be used multiple times a day".
    // So we need distinct hour parsing.

    const day1 = t1.match(/(FRI|SAT|SUN)/i)?.[0];
    const day2 = t2.match(/(FRI|SAT|SUN)/i)?.[0];

    if (day1 !== day2) return false; // Different days = No overlap

    // Same day. Check hours.
    // Format examples: "FRI 1500-1900", "SAT 0730-1200"
    const parseHours = (t) => {
        const m = t.match(/(\d{4})\s*-\s*(\d{4})/);
        if (m) return { start: parseInt(m[1]), end: parseInt(m[2]) };
        return null;
    };

    const h1 = parseHours(t1);
    const h2 = parseHours(t2);

    if (h1 && h2) {
        // Overlap if (Start1 < End2) and (Start2 < End1)
        return (h1.start < h2.end && h2.start < h1.end);
    }

    // If we can't parse hours but day matches, assume overlap to be safe
    return true;
}

async function assignVolunteersV2() {
    console.log('🧠 Running AI Assignment V2 (Multi-Shift + Cong Logic)...');
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
            // Treat specific names as taken, "Volunteer" or empty as open.
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
    // We treat anyone in the list as available to be picked, even if picked before (for multi-shift).
    const volunteers = [];
    for (let r = 264; r < 500; r++) {
        const firstName = (sheet.getCell(r, 4).formattedValue || '').trim();
        const lastName = (sheet.getCell(r, 5).formattedValue || '').trim();
        const email = (sheet.getCell(r, 6).formattedValue || '').trim();
        const notes = (sheet.getCell(r, 9).formattedValue || '').trim();

        if (firstName) {
            let prefDay = 'ANY';
            if (notes.toUpperCase().includes('FRI')) prefDay = 'FRI';
            if (notes.toUpperCase().includes('SAT')) prefDay = 'SAT';
            if (notes.toUpperCase().includes('SUN')) prefDay = 'SUN';
            if (notes.toLowerCase().includes('available friday, saturday, sunday')) prefDay = 'ALL';

            const name = `${firstName} ${lastName}`;
            const isCong = name.toLowerCase().includes('cong') && name.toLowerCase().includes('tran');

            volunteers.push({
                r, name, email, prefDay, notes, isCong,
                assignedShifts: [] // Track times to prevent overlap
            });
        }
    }
    console.log(`🙋 Found ${volunteers.length} Available Volunteers.`);

    const assignments = [];

    // --- LOGIC A: Cong Override (Packet Pickup 3pm) ---
    // Specifically look for a "Packet Pick" role around 1500 (3pm) on Friday
    const cong = volunteers.find(v => v.isCong);
    if (cong) {
        console.log('🎯 Processing Cong overrides...');
        const ppSlot = openSlots.find(s =>
            s.role.toLowerCase().includes('packet') &&
            s.time.includes('1500') &&
            s.day === 'FRI'
        );

        if (ppSlot) {
            assignments.push({ slot: ppSlot, vol: cong, reason: "Specific Request: 3pm Packet Pickup" });
            cong.assignedShifts.push(ppSlot.time);
            // Remove from openSlots so acts effectively as "taken"
            const idx = openSlots.indexOf(ppSlot);
            if (idx > -1) openSlots.splice(idx, 1);
            console.log('   -> Assigned Cong to Packet Pick Up (FRI 1500)');
        }
    }

    // --- LOGIC B: Standard Fill with Multi-Shift ---
    // Sort slots by Day to distribute? Or just iterate.

    openSlots.forEach(slot => {
        // Filter suitable candidates
        const candidates = volunteers.filter(v => {
            // Day availability
            const dayOk = (v.prefDay === 'ALL' || v.prefDay === 'ANY' || v.prefDay === slot.day);
            if (!dayOk) return false;

            // Conflict Check
            const hasConflict = v.assignedShifts.some(assignedTime => isTimeOverlap(assignedTime, slot.time));
            if (hasConflict) return false;

            // Limit shifts? User said "volunteers can be used multiple times". 
            // Let's soft cap at 3 to prevent burnout unless it's Cong (Max out).
            if (v.assignedShifts.length >= 3 && !v.isCong) return false;
            if (v.assignedShifts.length >= 50 && v.isCong) return false; // Cong limit high

            return true;
        });

        // Pick one. Prioritize Cong for "Fallback"? 
        // Logic: if Cong is candidate, maybe pick him if he's not busy? 
        // User said "use me as fallback". So prioritize others first? 
        // "Maximize my volunteer out... use me as fallback for UNASSIGNED stations". 
        // This implies: Fill fully with others, then if slot remains, use Cong.

        // Let's Sort Candidates: 
        // 1. Fewest assignments so far (spread the load)
        // 2. Cong (Fallback, so he is last resort? Or Maximize? "Maximize" conflicts with "Fallback" sometimes. 
        //    "Maximize" usually means "Give me everything I can fit". "Fallback" means "Only if no one else".
        //    Given "Maximize... with as much different stations", I should prioritize him if helpful.
        //    Let's interpret as: "Give me a lot of shifts".

        if (candidates.length > 0) {
            // Sort by shifts assigned (ascending) to balance load? 
            // BUT ensure Cong gets many.

            // Let's shuffle for randomness then sort by count
            candidates.sort((a, b) => a.assignedShifts.length - b.assignedShifts.length);

            // If Cong needs to be "Maximized", maybe we don't put him last. 
            // Let's just pick the first one that fits.
            // Wait, if we want to maximize Cong, we should pick him OFTEN.
            // Let's specifically push Cong to front if he is available and slot is "interesting" or just empty?
            // "Use me as fallback" implies he fills the holes.
            // So: Try to pick NON-Cong people first. If none, pick Cong.

            let chosen = candidates.find(v => !v.isCong); // Try non-Cong first
            let reason = "Matched availability";

            if (!chosen && candidates.includes(cong)) {
                chosen = cong; // Use Cong as fallback
                reason = "Fallback: Requested to fill unassigned stations";
            } else if (!chosen) {
                // No one fits?
                chosen = candidates[0]; // Anyone?
            }

            // Override: If user said "Max my volunteer out", maybe we SHOULD pick him even if others exist?
            // But he said "Fallback for unassigned". I will stick to Fallback logic = Fill gaps.
            // BUT ensuring he gets *some* extra is good.

            // Let's stick to: Try others. If none, Cong. 
            // AND ensure Cong gets distinct stations? (Handled by different slots).

            if (chosen) {
                assignments.push({ slot, vol: chosen, reason });
                chosen.assignedShifts.push(slot.time);
                // Don't remove volunteer, they can go again!
            }
        }
    });

    console.log(`\n✅ Generated ${assignments.length} Assignments.`);
    if (cong) console.log(`   -> Cong Total Shifts: ${cong.assignedShifts.length}`);

    // 4. Execution
    for (const a of assignments) {
        // Name Cell (Col 3 / D)
        const cellName = sheet.getCell(a.slot.r, 3);
        cellName.value = a.vol.name;
        cellName.textFormat = { foregroundColor: { red: 0, green: 0, blue: 1 }, bold: true };

        // Note Cell (Col 7 / H) - Reasoning
        // Careful not to overwrite existing notes? Append?
        // Sheet has "Notes" in Col H (Index 7).
        const cellNotes = sheet.getCell(a.slot.r, 7);
        const existing = (cellNotes.formattedValue || '');
        if (!existing.includes('AI:')) {
            cellNotes.value = `${existing} [AI: ${a.reason}]`;
            cellNotes.textFormat = { fontSize: 8 }; // Small text for notes
        }
    }

    if (assignments.length > 0) {
        console.log('💾 Saving to Google Sheet...');
        await sheet.saveUpdatedCells();
    }
}

assignVolunteersV2();
