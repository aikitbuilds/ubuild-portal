# Tejas Trails Website Audit Report

## 1. Site Topology
The Tejas Trails digital ecosystem (tejastrails.com) is built primarily on Squarespace but relies heavily on external static files and disconnected third-party services for critical functionality.

### Core Architecture
- **Marketing/Content (Root):** `tejastrails.com` (Squarespace)
- **Event Pages:** Individual pages for each race (e.g., `/bandera`, `/rocky100`).
- **Store:** `/store` (Merchandise, Race Swag).
- **Volunteer:** `/volunteer` (Static content, email-based workflow).

### Key Verticals
- **Registration:** External (RunSignup/EventDataSolutions - inferring from "reg" URLs).
- **Results:** External/Legacy (`edsresults.com`).
- **Logistics:** Static PDFs (Maps, Waivers, Race Docs).

---

## 2. The "Silo" Audit
We identified significant "data silos" where users are forced off-platform or into static files that tejasOS cannot easily index or interact with.

### 🔴 Critical Disconnected Systems
| System Type | Findings | Impact |
| :--- | :--- | :--- |
| **Race Results** | `http://edsresults.com` (HTTP only) | Historical data is not searchable; SEO value is lost to external domain. insecurity warning for users. |
| **Maps & Docs** | `tejastrails.com/s/*.pdf` (30+ PDF files found) | Mobile users must download large files. Maps are not interactive. Hard to update real-time. |
| **Waivers** | `/s/RPR-Waiver-102021.pdf` | PDFs must be printed/signed manually or are just informational, preventing digital tracking. |
| **Crew Maps** | Google Drive Links | Disconnected from the main site; relies on persistent Google permissions. |
| **Lodging** | `bookingbyhalo.com` | Third-party handoff for high-value user intent (staying on-site). |

### 📂 Statis File examples (The "PDF Graveyard")
*   `/s/map_HillCountry.pdf`
*   `/s/RPR_waiver_mod.pdf`
*   `/s/Race-Doc-Bandera.pdf`
*   `/s/HOKA-Bandera-AS-Chart-dfj8.pdf` (Aid Station data locked in PDF)

---

## 3. Volunteer UX Analysis
The current volunteer experience is high-friction and manual, relying on intrinsic motivation rather than a smooth digital user journey.

### Current Workflow (Friction Points)
1.  **Discovery:** User lands on `/volunteer`.
2.  **Information Overload:** Confronted with complex credit math ("6-11 hours = 50% off...").
3.  **Dead End:** Primary Call-to-Action is usually "Email this address" (`registration@eventdatasolutions.com`).
4.  **No Feedback:** No way to see shifts, current roster, or verify hours without emailing a human.

### UX Score: D+
*   **Accessibility:** Low (Text-heavy, complex rules).
*   **Instant Gratification:** None (Cannot sign up instantly).
*   **Transparency:** Zero (Cannot see if I have credits).

---

## 4. Key Opportunities for tejasOS
Based on this audit, here are the top 3 high-impact opportunities to unify the ecosystem:

### 1. The "Live" Volunteer Portal (High ROI)
**Opportunity:** Replace the static `/volunteer` page and email workflow with the **Tejas Volunteer Portal** (Prototype built).
**Value:**
*   Self-service cleanup of the "Credit Math" confusion.
*   Real-time rosters replace the "Who is coming?" uncertainty.
*   **Action:** Deploy the Single-File Portal to replace the email CTA.

### 2. Digital Aid Station Charts (Operational Efficiency)
**Opportunity:** Convert the "PDF Aid Station Charts" (e.g., `/s/HOKA-Bandera-AS-Chart-dfj8.pdf`) into a dynamic data model.
**Value:**
*   Runners can filter by "Drop Bags" or "Cutoffs" on their phone.
*   Crews get Google Maps navigation links directly to access points.
*   **Action:** Ingest PDF data into the tejasOS `Stations` database.

### 3. Unified Results History (SEO & Engagement)
**Opportunity:** Scrape `edsresults.com` and host historical results natively on `tejastrails.com` (via tejasOS embed).
**Value:**
*   Massive SEO boost (thousands of runner names).
*   Runners claiming their "Athlete Profile" creates sticky users.
*   **Action:** Write a scraper for EDS Results to populate the `Athletes` database.
