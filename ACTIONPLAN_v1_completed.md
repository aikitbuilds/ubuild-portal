# Action Plan: Version 2 - Production Implementation (Live Data & AI)
Core Objective: "Production Implementation: Live Data & AI Integration."
Status: **ACTIVE**

## Key Goals
1.  **Live Data Migration**: Switch from `generateGhostData` to `useFirestoreCollection` for Volunteers, Assignments, and Check-ins.
2.  **AI Integration**: Implement `intelligence-agent.ts` to process real-time Firestore triggers (Cloud Functions) for risk analysis and smart alerts.
3.  **Access Control**: Secure the application with proper Firestore Rules and RBAC (Admin vs Volunteer).

## Immediate Tasks
- [ ] **Infrastructure**: Switch environment to `USE_MOCK_DATA = false` and ensure fail-safe DB connections.
- [ ] **Data Schema**: Enforce strict Typescript interfaces for `volunteers` and `check_ins` (removing "loose" fields).
- [ ] **AI Pipeline**: Deploy Cloud Functions to listen to database writes and trigger the AI Agent.

## Progress
- [x] v1-mvp-demo Archived.
- [ ] Version 2 Initialized.
