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
- [ ] Step 1: Implement "Report Issue" UI in Volunteer Dashboard.
- [ ] Step 2: Create `tejas_tickets` Firestore schema and mock data.
- [ ] Step 3: Implement `/api/tejas/report-issue` route.
- [ ] Step 4: Build `<CommandCenter />` component.
- [ ] Step 5: Integrate Command Center into Admin Dashboard.
- [ ] Step 6: Update `USERSTORY.md` and `ubuild-deploy.md`.

## Checkpoints
- [ ] Volunteer can submit a report.
- [ ] Admin sees the report with AI analysis.
- [ ] Admin can close/resolve the ticket.

## Change Log
- 2026-01-21: Initialized Phase 10 action plan.
