import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { getHierarchy, isStationName, isMetadataRow } from './tejas/hierarchy';

// Define the interface based on our understanding of the columns
export interface SheetVolunteer {
    rowNumber: number; // 1-based index for updates
    role: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    shiftTime: string;
    notes: string;
    status: string; // "Checked In", "Assigned", etc. (Inferred or new col)
    startTime?: Date;
    endTime?: Date;
    parentCategory?: string;
    childStation?: string;
    isHeader?: boolean;
}

const MOCK_CSV_PATH = path.resolve(process.cwd(), '../tejasOS/Copy of Rocky 100 Vols for Cong - Rocky 100 2026.csv');

export async function getSheet() {
    const credsPath = path.resolve(process.cwd(), 'credentials.json');
    if (!fs.existsSync(credsPath)) {
        return null;
    }

    try {
        const creds = JSON.parse(fs.readFileSync(credsPath, 'utf-8'));
        const serviceAccountAuth = new JWT({
            email: creds.client_email,
            key: creds.private_key,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const SHEET_ID = process.env.GOOGLE_SHEET_ID;
        if (!SHEET_ID) return null;

        const doc = new GoogleSpreadsheet(SHEET_ID, serviceAccountAuth);
        await doc.loadInfo();
        return doc;
    } catch (e) {
        return null;
    }
}

export async function fetchVolunteers(): Promise<SheetVolunteer[]> {
    const doc = await getSheet();

    if (!doc) {
        return fetchMockVolunteers();
    }

    try {
        const sheet = doc.sheetsByIndex[0];

        // Headers are on Row 2. Data starts on Row 3.
        // Loading first 1500 rows.
        await sheet.loadCells('A1:J1530');

        const volunteers: SheetVolunteer[] = [];
        const scanLimit = Math.min(sheet.rowCount, 1500);
        let currentStation = "";

        for (let r = 2; r < scanLimit; r++) {
            const role = (sheet.getCell(r, 1).formattedValue || '').trim();
            const rawName = (sheet.getCell(r, 2).formattedValue || '').trim();
            const lastName = (sheet.getCell(r, 3).formattedValue || '').trim();
            const email = (sheet.getCell(r, 4).formattedValue || '').trim();
            const phone = (sheet.getCell(r, 5).formattedValue || '').trim();

            // --- STATION TRACKING ---
            const nameIsStation = isStationName(rawName);
            const roleIsStation = isStationName(role);

            // ONLY update currentStation if it's a REAL station header (keywords match)
            if (nameIsStation) {
                currentStation = rawName;
            } else if (roleIsStation) {
                currentStation = role;
            }

            const shiftTime = (sheet.getCell(r, 6).formattedValue || '').trim();
            const notes = (sheet.getCell(r, 7).formattedValue || '').trim();
            const status = (sheet.getCell(r, 9).formattedValue || '').trim();

            const hasContact = !!(email || phone);
            const isNumberedSlot = !!(role && !isNaN(Number(role)));
            const hasRole = !!(role && role.length > 2);

            // Skip headers and metadata rows (schedule fragments) if they have no contact info
            const nameIsMetadata = isMetadataRow(rawName);
            const roleIsMetadata = isMetadataRow(role);

            if ((nameIsMetadata || roleIsMetadata) && !hasContact) continue;

            if (!hasContact && !hasRole && !isNumberedSlot) continue;

            const effectiveRole = (role && isNaN(Number(role))) ? role : (currentStation || role);

            const { start, end } = parseShiftTime(shiftTime);
            const { parent, child } = getHierarchy(effectiveRole, rawName, lastName);

            volunteers.push({
                rowNumber: r + 1,
                role,
                firstName: rawName,
                lastName,
                email,
                phone,
                shiftTime,
                notes,
                status,
                startTime: start,
                endTime: end,
                parentCategory: parent,
                childStation: child,
                isHeader: (nameIsMetadata || roleIsMetadata) && !hasContact
            });
        }

        return volunteers;
    } catch (e: any) {
        console.error('Fetch Failed:', e.message);
        return fetchMockVolunteers();
    }
}

function fetchMockVolunteers(): SheetVolunteer[] {
    if (!fs.existsSync(MOCK_CSV_PATH)) return [];

    const content = fs.readFileSync(MOCK_CSV_PATH, 'utf-8');
    const records = parse(content, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
        from_line: 2
    });

    let currentStation = "";
    return records.map((r: any, idx: number) => {
        const role = (r['Role'] || '').trim();
        const firstName = (r['First Name'] || '').trim();
        const lastName = (r['Last Name'] || '').trim();
        const email = (r['Email'] || '').trim();
        const phone = (r['Phone'] || '').trim();

        const isMetadata = isMetadataRow(firstName) || isMetadataRow(role);
        const hasContact = !!(email || phone);

        if (isMetadata && !hasContact) return null;

        const effectiveRole = (role && isNaN(Number(role))) ? role : (currentStation || role);

        const timeString = r['Dates/Time'] || '';
        const { start, end } = parseShiftTime(timeString);
        const { parent, child } = getHierarchy(effectiveRole, firstName, lastName);
        return {
            rowNumber: idx + 3,
            role: r['Role'] || role,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            shiftTime: timeString,
            notes: r['Notes/Lodging'],
            status: '',
            startTime: start,
            endTime: end,
            parentCategory: parent,
            childStation: child,
            isHeader: isMetadata && !hasContact
        };
    }).filter((v: any) => v && (v.email || v.phone || !isMetadataRow(v.firstName)));
}

export async function updateVolunteerStatus(rowNumber: number, newStatus: string) {
    const doc = await getSheet();
    if (!doc) return;
    const sheet = doc.sheetsByIndex[0];
    await sheet.loadCells(`J${rowNumber}`);
    const cell = sheet.getCell(rowNumber - 1, 9);
    cell.value = newStatus;
    await sheet.saveUpdatedCells();
}

/** 
 * Actionable Intelligence: Updates Row Data
 */
export async function assignVolunteer(rowNumber: number, role: string, station?: string) {
    const doc = await getSheet();
    if (!doc) return;

    const sheet = doc.sheetsByIndex[0];
    // Role = Col B (Index 1). 
    // If we want to update the "Notes" or a hidden Col for the AI's final decision.
    await sheet.loadCells(`B${rowNumber}`);
    const roleCell = sheet.getCell(rowNumber - 1, 1);
    roleCell.value = role;
    await sheet.saveUpdatedCells();
}

function parseShiftTime(timeStr: string): { start?: Date, end?: Date } {
    if (!timeStr) return {};
    try {
        const lower = timeStr.toLowerCase();
        const baseYear = 2026;
        const baseMonth = 1;
        let day = 6;
        if (lower.includes('sat')) day = 7;
        if (lower.includes('sun')) day = 8;
        const start = new Date(baseYear, baseMonth, day, 8, 0, 0);
        return { start, end: start };
    } catch (e) {
        return {};
    }
}
