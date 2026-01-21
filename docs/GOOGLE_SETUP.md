# Google Sheets Sync Setup Guide

This guide explains how to configure the TejasOS Volunteer Sync logic using a Google Service Account.

## 1. Create a Google Service Account
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Select your project (or create a new one).
3. Navigate to **IAM & Admin > Service Accounts**.
4. Click **Create Service Account**.
5. Give it a name (e.g., `tejasos-sync`) and click **Create and Continue**.
6. (Optional) Grant the role `Editor` to the service account.
7. Click **Done**.

## 2. Generate a JSON Key
1. In the Service Accounts list, click on the email of the account you just created.
2. Go to the **Keys** tab.
3. Click **Add Key > Create New Key**.
4. Select **JSON** and click **Create**.
5. A JSON file will be downloaded. **Do not share this file publicly.**

## 3. Configure the Environment
Open your `.env.local` file and paste the values from the JSON key:

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL="your-service-account-email@..."
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

> [!IMPORTANT]
> Ensure the private key includes the `\n` characters and is wrapped in quotes.

## 4. Prepare the Google Sheet
1. Open the Google Sheet you want to sync.
2. Click **Share** in the top right.
3. Paste the **Service Account Email** and give it **Viewer** (or Editor) access.
4. Copy the **Sheet ID** from the URL:
   `https://docs.google.com/spreadsheets/d/[SHEET_ID_IS_HERE]/edit`
5. Add it to your `.env.local`:
   `GOOGLE_SHEET_ID="your_sheet_id"`

## 5. Column Headers
The script expects the following headers in the first row of the first sheet:
- `Name`
- `Email`
- `Phone`
- `Station`
- `Role` or `Assignment`
- `Shift` or `Shift Time`
- `Written Instructions`
- `Voice Instruction URL` or `Voice URL`

## 6. Trigger Sync
Once configured, go to the Admin Dashboard and click **Sync Roster**.
