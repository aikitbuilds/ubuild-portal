
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import * as fs from "fs";
import * as path from "path";

async function sampleTimes() {
    try {
        const SHEET_ID = "1Z7q6rVFGM6zva1UOmCSQ6AoFNV2TnsMFM0ZogZMiCBE";
        const credsPath = path.resolve(__dirname, "../credentials.json");

        if (!fs.existsSync(credsPath)) {
            throw new Error(`Credentials not found at ${credsPath}`);
        }

        const creds = JSON.parse(fs.readFileSync(credsPath, "utf-8"));
        const auth = new JWT({
            email: creds.client_email,
            key: creds.private_key,
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const doc = new GoogleSpreadsheet(SHEET_ID, auth);
        await doc.loadInfo();

        const sheet = doc.sheetsByTitle["Assignments"];
        if (!sheet) {
            console.error("Assignments tab not found");
            return;
        }

        await sheet.loadCells('A1:J20');
        const rows = await sheet.getRows();

        console.log("\nSample Time Slots:");
        console.log("-------------------");
        rows.slice(0, 10).forEach((row, i) => {
            console.log(`Row ${i + 2}: "${row.get('Time Slot')}"`);
        });
        console.log("-------------------\n");

    } catch (e: any) {
        console.error("Error:", e.message);
    }
}

sampleTimes();
