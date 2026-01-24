import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load env
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function verifySheetAccess() {
    console.log('🔍 Verifying Google Sheet Access...');

    const credsPath = path.resolve(process.cwd(), 'credentials.json');
    if (!fs.existsSync(credsPath)) {
        console.error('❌ credentials.json NOT FOUND in project root.');
        process.exit(1);
    }

    const sheetId = process.env.GOOGLE_SHEET_ID;
    if (!sheetId) {
        console.error('❌ GOOGLE_SHEET_ID missing in .env.local');
        process.exit(1);
    }

    console.log(`PAGE: Using Sheet ID: ${sheetId}`);
    console.log('🔑 Authenticating...');

    try {
        const creds = JSON.parse(fs.readFileSync(credsPath, 'utf-8'));
        const serviceAccountAuth = new JWT({
            email: creds.client_email,
            key: creds.private_key,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);
        await doc.loadInfo(); // This tests read access

        console.log(`✅ SUCCESS! Connected to Sheet: "${doc.title}"`);
        console.log(`   - Sheets Count: ${doc.sheetCount}`);

        const sheet = doc.sheetsByIndex[0];
        console.log(`   - First Sheet: "${sheet.title}" (${sheet.rowCount} rows)`);

        // Test Write Access (optional, maybe just read first)
        // console.log('📝 Testing Write Access...');
        // await sheet.loadCells('A1');
        // console.log('✅ Write Access Verified (Cell load successful)');

    } catch (error: any) {
        console.error('❌ CONNECTION FAILED:');
        console.error(error.message);
        if (error.response) {
            console.error('   API Response:', error.response.data);
        }
        process.exit(1);
    }
}

verifySheetAccess();
