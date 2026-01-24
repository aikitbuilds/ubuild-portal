# Subdomain Setup Guide: `tejas.ubuild.pro`

Follow these steps to configure the production environment for Version 2.

## 1. Firebase Hosting Setup (Console)
1.  Go to the [Firebase Console](https://console.firebase.google.com/).
2.  Navigate to **Hosting**.
3.  Click **"Add another site"** (usually at the bottom of the dashboard).
4.  Enter the Site ID: `tejas-app` (or `tejas-ubuild` if taken).
    *   *Note: If you choose a different ID, update `firebase.json` target accordingly.*

## 2. Link Local Target (Terminal)
Run this command in your VS Code terminal to link the `tejas-app` target in `firebase.json` to the site you just created:

```bash
firebase target:apply hosting tejas-app <YOUR_SITE_ID_FROM_STEP_1>
```

## 3. Cloudflare DNS Configuration
1.  Log in to Cloudflare.
2.  Select the `ubuild.pro` zone.
3.  Add a **CNAME** record:
    *   **Name**: `tejas`
    *   **Target**: `tejas-app.web.app` (or whatever the Firebase default domain is for your new site).
    *   **Proxy Status**: Proxied (Orange Cloud) is usually fine, but Firebase handles SSL too.

## 4. Google Auth Whitelist (GCP Console)
1.  Go to the [Google Cloud Console > Credentials](https://console.cloud.google.com/apis/credentials).
2.  Select the **OAuth 2.0 Client ID** used for your project.
3.  Add the new URI to **Authorized JavaScript origins**:
    *   `https://tejas.ubuild.pro`
4.  Add the new URI to **Authorized redirect URIs**:
    *   `https://tejas.ubuild.pro/__/auth/handler`

## 5. Deploy Verification
Once linked, deploy the specific target:

```bash
firebase deploy --only hosting:tejas-app
```
