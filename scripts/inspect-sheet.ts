
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import * as fs from "fs";
import * as path from "path";

async function inspectSheet() {
    try {
        const SHEET_ID = "1Z7q6rVFGM6zva1UOmCSQ6AoFNV2TnsMFM0ZogZMiCBE";
        const credsPath = path.resolve(process.cwd(), "functions/credentials.json");

        if (!fs.existsSync(credsPath)) {
            console.error(`Credentials NOT found at ${credsPath}`);
            return;
        }

        const creds = JSON.parse(fs.readFileSync(credsPath, "utf-8"));
        const auth = new JWT({
            email: creds.client_email,
            key: creds.private_key,
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const doc = new GoogleSpreadsheet(SHEET_ID, auth);
        await doc.loadInfo();

        const assignSheet = doc.sheetsByTitle["Rocky-100-Station-Assignments"];
        if (assignSheet) {
            console.log(`\nSampling 'Rocky-100-Station-Assignments' tab...`);
            await assignSheet.loadCells('A1:L10');
            const rows = await assignSheet.getRows();

            if (rows.length > 0) {
                // Convert to plain object to avoid TS index signature errors
                const sampleRow = rows[0].toObject();
                const headers = Object.keys(sampleRow);
                console.log("Detected Headers (Assignments):", headers);

                console.log("First 3 Rows Data:");
                rows.slice(0, 3).forEach((r, i) => {
                    console.log(`Row ${i + 2}:`, r.toObject());
                });
            } else {
                console.log("Assignments tab is empty.");
            }
        }

        const dirSheet = doc.sheetsByTitle["Rocky-100-Volunteer-Team-Directory"];
        if (dirSheet) {
            console.log(`\nFound Directory tab: ${dirSheet.title}`);
            await dirSheet.loadCells('A1:L5');
            const rows = await dirSheet.getRows();
            if (rows.length > 0) {
                const sampleRow = rows[0].toObject();
                console.log("Detected Headers (Directory):", Object.keys(sampleRow));
            }
        }

    } catch (e: any) {
        console.error("Error:", e.message);
    }
}

inspectSheet();
