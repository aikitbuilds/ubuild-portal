
import * as functions from "firebase-functions";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import * as cors from "cors";
import * as fs from "fs";
import * as path from "path";
import { getHierarchy } from "./hierarchy";

const corsHandler = cors({ origin: true });

// Helper to parse "Sat" "10:00" -> ISO String
function parseDateTime(dayStr: string, timeStr: string): string | undefined {
    if (!dayStr || !timeStr) return undefined;

    // Hardcoded Race Weekend 2026
    // Friday: Feb 6, 2026
    // Saturday: Feb 7, 2026
    // Sunday: Feb 8, 2026
    const baseDate = new Date("2026-02-07T00:00:00-06:00"); // Start with Sat as baseline

    const d = dayStr.toLowerCase();
    if (d.includes("fri")) baseDate.setDate(6);
    else if (d.includes("sat")) baseDate.setDate(7);
    else if (d.includes("sun")) baseDate.setDate(8);
    else if (d.includes("mon")) baseDate.setDate(9);

    const [hours, minutes] = timeStr.split(':').map(Number);
    if (isNaN(hours) || isNaN(minutes)) return undefined;

    baseDate.setHours(hours, minutes, 0, 0);
    return baseDate.toISOString();
}

export const updateVolunteerAssignment = functions.https.onRequest(async (req, res) => {
    return corsHandler(req, res, async () => {
        if (req.method !== "POST") {
            res.status(405).send("Method Not Allowed");
            return;
        }

        const { rowNumber, newStatus, slotIndex } = req.body;

        if (!rowNumber || !newStatus || !slotIndex) {
            res.status(400).send("rowNumber, newStatus, and slotIndex are required");
            return;
        }

        try {
            const SHEET_ID = "1Z7q6rVFGM6zva1UOmCSQ6AoFNV2TnsMFM0ZogZMiCBE";
            const credsPath = path.resolve(__dirname, "../credentials.json");

            if (!fs.existsSync(credsPath)) {
                throw new Error("Credentials file not found at " + credsPath);
            }

            const creds = JSON.parse(fs.readFileSync(credsPath, "utf-8"));

            const auth = new JWT({
                email: creds.client_email,
                key: creds.private_key,
                scopes: ["https://www.googleapis.com/auth/spreadsheets"],
            });

            const doc = new GoogleSpreadsheet(SHEET_ID, auth);
            await doc.loadInfo();

            const sheet = doc.sheetsByTitle["Rocky-100-Station-Assignments"];
            if (!sheet) throw new Error("Could not find 'Rocky-100-Station-Assignments'");

            // Load the specific row using 1-based index logic
            // In getVolunteers, rIndex starts at 2 (Row 2 in Sheet)
            // google-spreadsheet: getRows() gets data rows.
            // If we want random access by index without loading all, strictly we load cells.
            // But let's verify if we can just load the specific row range.

            // Simpler approach compatible with getRow pattern: Use row index logic 
            // rowNumber 2 means the first data row (index 0 in rows array if header is row 1)
            const arrayIndex = rowNumber - 2;

            // We need to fetch specific rows. Loading all might be heavy if sheet grows, 
            // but for <1000 rows it's fast enough and safer for consistency.
            const rows = await sheet.getRows();

            if (arrayIndex < 0 || arrayIndex >= rows.length) {
                throw new Error(`Row ${rowNumber} out of bounds`);
            }

            const row = rows[arrayIndex];

            // Construct the column header for status
            // "Vol 1 Status", "Vol 2 Status", etc.
            const statusHeader = `Vol ${slotIndex} Status`;

            // Check if column exists/is accessible
            // Note: row.get() creates a safe access
            row.set(statusHeader, newStatus);
            await row.save();

            res.status(200).json({ success: true, message: `Updated ${statusHeader} for Row ${rowNumber} to ${newStatus}` });

        } catch (error: any) {
            console.error("Assignment Error:", error);
            res.status(500).json({ success: false, error: error.message });
        }
    });
});

export const getVolunteers = functions.https.onRequest(async (req, res) => {
    return corsHandler(req, res, async () => {
        try {
            const SHEET_ID = "1Z7q6rVFGM6zva1UOmCSQ6AoFNV2TnsMFM0ZogZMiCBE";
            // Use path.resolve explicitly for robustness
            const credsPath = path.resolve(__dirname, "../credentials.json");

            if (!fs.existsSync(credsPath)) {
                throw new Error("Credentials file not found at " + credsPath);
            }

            const creds = JSON.parse(fs.readFileSync(credsPath, "utf-8"));
            const auth = new JWT({
                email: creds.client_email,
                key: creds.private_key,
                scopes: ["https://www.googleapis.com/auth/spreadsheets"],
            });

            const doc = new GoogleSpreadsheet(SHEET_ID, auth);
            await doc.loadInfo();

            // 1. Fetch Directory ("Rocky-100-Volunteer-Team-Directory")
            const directorySheet = doc.sheetsByTitle["Rocky-100-Volunteer-Team-Directory"];
            if (!directorySheet) throw new Error("Missing Directory tab 'Rocky-100-Volunteer-Team-Directory'");

            await directorySheet.loadCells('A1:M1000');
            const dirRows = await directorySheet.getRows();

            // Map: Volunteer ID -> Profile
            const volunteerMap = new Map<string, any>();
            dirRows.forEach(row => {
                const vid = row.get("Volunteer ID");
                if (!vid) return;

                volunteerMap.set(vid, {
                    firstName: row.get("First Name") || "",
                    lastName: row.get("Last Name") || "",
                    email: row.get("Email") || "",
                    phone: row.get("Phone") || "",
                    id: vid,
                    role: row.get("Primary Role")
                });
            });

            // 2. Fetch Assignments ("Rocky-100-Station-Assignments")
            const assignSheet = doc.sheetsByTitle["Rocky-100-Station-Assignments"];
            if (!assignSheet) throw new Error("Missing Assignments tab 'Rocky-100-Station-Assignments'");

            await assignSheet.loadCells('A1:Z200');
            const assignRows = await assignSheet.getRows();

            const volunteers: any[] = [];
            // Track assigned IDs to find unassigned volunteers later
            const assignedIds = new Set<string>();

            // GoogleSpreadsheet rows are 0-indexed relative to the data range (ignoring header)
            // But for rowNumber (human), header is row 1. Data starts row 2.
            let rIndex = 2;

            assignRows.forEach(row => {
                const station = row.get("Station Name") || "Unassigned";
                // const category = row.get("Station Category"); 
                const day = row.get("Day") || "";
                const timeStart = row.get("Time Slot Start") || "";
                const timeEnd = row.get("Time Slot End") || "";

                // Construct Time Strings
                const startISO = parseDateTime(day, timeStart);
                let endISO = parseDateTime(day, timeEnd);

                // Handle overnight shift by checking if end < start (simple logic)
                if (startISO && endISO && new Date(endISO) <= new Date(startISO)) {
                    const e = new Date(endISO);
                    e.setDate(e.getDate() + 1);
                    endISO = e.toISOString();
                }

                const shiftString = `${day} ${timeStart} - ${timeEnd}`;

                // Process Slots 1-4 (Checking up to 6 cols to be safe)
                for (let i = 1; i <= 6; i++) {
                    // Try exact headers seen in inspection: "Volunteer X ID"
                    let vid = "";
                    try {
                        vid = row.get(`Volunteer ${i} ID`);
                    } catch (e) {
                        // Key might not exist if headers imply less columns
                        continue;
                    }
                    if (!vid) continue; // No ID in this slot

                    const isVacant = vid === "VACANT" || vid === "OPEN";
                    let profile: any = { firstName: "OPEN", lastName: "SLOT", email: "", phone: "", id: "VACANT" };
                    let status = "OPEN";

                    if (!isVacant) {
                        if (volunteerMap.has(vid)) {
                            profile = volunteerMap.get(vid);
                            assignedIds.add(vid); // Mark as assigned
                            // Check row status like "Vol 1 Status" matches the slot
                            let rowStatus = "";
                            try { rowStatus = row.get(`Vol ${i} Status`); } catch (e) { }
                            status = rowStatus || "CONFIRMED";
                        } else {
                            // ID exists but missing in directory
                            profile = { firstName: "Unknown", lastName: `(${vid})`, email: "", phone: "", id: vid };
                            status = "Unknown ID";
                        }
                    }

                    // Hierarchy (Frontend still mostly uses this, but station config overrides visual)
                    const { parent, child } = getHierarchy(station, profile.firstName, profile.lastName);

                    volunteers.push({
                        rowNumber: rIndex, // Used for update reference
                        slotIndex: i, // CRITICAL: Added slot index for update targeting
                        role: profile.role || station,
                        firstName: profile.firstName,
                        lastName: profile.lastName,
                        email: profile.email,
                        phone: profile.phone,
                        shiftTime: shiftString,
                        startTime: startISO,
                        endTime: endISO,
                        notes: row.get("Notes") || "",
                        status: status,
                        parentCategory: parent,
                        childStation: child || station,
                        isHeader: false,
                        volunteerId: isVacant ? null : vid
                    });
                }
                rIndex++;
            });

            // 3. Append Unassigned Volunteers (Left Join / Catch-all)
            // Iterate directory map, if not in assignedIds, add as "Unassigned"
            volunteerMap.forEach((profile, vid) => {
                if (!assignedIds.has(vid)) {
                    volunteers.push({
                        rowNumber: -1, // Virtual Row
                        slotIndex: 0,
                        role: profile.role || "General Volunteer", // Use directory role or default
                        firstName: profile.firstName,
                        lastName: profile.lastName,
                        email: profile.email,
                        phone: profile.phone,
                        shiftTime: "No Active Assignment",
                        startTime: undefined,
                        endTime: undefined,
                        notes: "Listed in Directory but not assigned to a station.",
                        status: "Unassigned",
                        parentCategory: "Unassigned",
                        childStation: "Pool",
                        isHeader: false,
                        volunteerId: vid
                    });
                }
            });

            console.log(`Relational Sync Complete. Returned ${volunteers.length} records.`);
            res.status(200).json({ success: true, data: volunteers });

        } catch (error: any) {
            console.error("Relational Fetch Error:", error);
            res.status(500).json({ success: false, error: error.message });
        }
    });
});
