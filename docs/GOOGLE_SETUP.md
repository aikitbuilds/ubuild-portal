# How to Create `credentials.json` for Google Sheets

To allow the "Smart Mirror" to read/write to your Google Sheet, you need to create a **Service Account** and download its key.

## Step 1: Create a Service Account
1.  Go to the [Google Cloud Console](https://console.cloud.google.com/).
2.  Select your project: **sps-leadscleandb** (or create a new one).
3.  Search for **"Google Sheets API"** in the top bar and click **Enable**.
4.  Go to **APIs & Services > Credentials**.
5.  Click **+ CREATE CREDENTIALS** -> **Service Account**.
    *   **Name**: `tejas-mirror-bot` (or similar).
    *   **Access**: "Owner" or "Editor" (optional but easiest for dev).
    *   Click **Done**.

## Step 2: Generate the Key (JSON)
1.  In the "Service Accounts" list, click on the **Email address** of the account you just created (e.g., `tejas-mirror-bot@...`).
2.  Click the **KEYS** tab (top menu).
3.  Click **ADD KEY** -> **Create new key**.
4.  Select **JSON** and click **CREATE**.
5.  A file will download to your computer.

## Step 3: Install the Key
1.  **Rename** the downloaded file to `credentials.json`.
2.  **Move** it to the root folder of this project:
    `c:\Users\aikit\Documents\Active Projects\ubuild\ubuild-portal\credentials.json`

## Step 4: Share the Sheet (CRITICAL)
1.  Open the `credentials.json` file in a text editor.
2.  Find the `"client_email"` field (e.g., `tejas-mirror-bot@sps-leadscleandb.iam.gserviceaccount.com`).
3.  Copy that email address.
4.  Go to your **Google Sheet** (Rocky 100 Vols).
5.  Click **Share** (top right).
6.  Paste the email address and give it **Editor** access.
7.  Click **Send** (uncheck "Notify people" if you want).

✅ **Done!** The Smart Mirror will now automatically connect.
