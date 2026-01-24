# Action Plan: Phase 10 - Intelligent Communications
Created: 2026-01-21
Status: IN PROGRESS

## Objectives
Connect Volunteers to the Race Director via an AI-driven triage system.

## Components & Files
1. **Volunteer App Update**: `app/volunteer/dashboard/page.tsx`
   - Add "Report Issue" action.
   - Create reporting dialog.
2. **AI Logic (API)**: `app/api/tejas/report-issue/route.ts`
   - Process incoming reports.
   - Mock/Implement Whisper (transcription) & LLM (analysis).
   - Update Firestore `tejas_tickets`.
3. **Admin Dashboard Update**: `app/tejas/dashboard/page.tsx` & `components/tejas/CommandCenter.tsx`
   - Create Command Center widget.
   - Live ticket listener.
   - Action handlers for the RD.

## Build Steps
- [x] Step 1: Implement "Report Issue" UI in Volunteer Dashboard. (Restored)
- [x] Step 2: Create `tejas_tickets` Firestore schema and mock data. (Implemented in lib/tejas/data.ts)
- [x] Step 3: Implement `/api/tejas/report-issue` route. (Restored and Secured)
- [x] Step 4: Build `<CommandCenter />` component. (Available in components/tejas/)
- [x] Step 5: Integrate Command Center into Admin Dashboard. (Integrated)
- [x] Step 6: Update `USERSTORY.md` and `ubuild-deploy.md`.

## Checkpoints
- [x] Volunteer can submit a report.
- [x] Admin sees the report with AI analysis.
- [x] Admin can close/resolve the ticket.

## Change Log
- 2026-01-21: Initialized Phase 10 action plan.
- 2026-01-24: Restored report-issue API, secured Gemini API keys, and verified Command Center integration.
