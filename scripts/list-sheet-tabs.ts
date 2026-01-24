
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import * as fs from "fs";
import * as path from "path";

async function listTabs() {
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

        console.log(`\nAccessed Sheet: "${doc.title}"`);
        console.log(`-----------------------------------`);
        doc.sheetsByIndex.forEach((sheet, i) => {
            console.log(`Index: ${i} | Title: "${sheet.title}" | RowCount: ${sheet.rowCount}`);
        });
        console.log(`-----------------------------------\n`);

    } catch (e: any) {
        console.error("Error listing tabs:", e.message);
    }
}

listTabs();
