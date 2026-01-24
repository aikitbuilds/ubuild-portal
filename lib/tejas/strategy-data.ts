export interface TejasModule {
    id: string;
    name: string;
    phase: 1 | 2 | 3 | 4;
    category: 'Core' | 'Admin' | 'Racer' | 'Vendor';
    status: 'Live' | 'Planned' | 'Blocked';
    roiImpact: string;
    description: string;
    painPoint: string;
    fix: string;
    effortEstimate: string; // e.g. "40 hours"
}

export const TEJAS_MODULES: TejasModule[] = [
    // Phase 1 (Live)
    {
        id: "volunteer-portal",
        name: "Volunteer Portal",
        phase: 1,
        category: "Core",
        status: "Live",
        roiImpact: "Reduced admin time by 15hrs/race",
        description: "Self-service shifts and digital waivers.",
        painPoint: "Manual spreadsheets and paper waivers.",
        fix: "Unified digital portal with automated check-in.",
        effortEstimate: "Completed"
    },
    {
        id: "check-in-kiosk",
        name: "Check-In Kiosk",
        phase: 1,
        category: "Admin",
        status: "Live",
        roiImpact: "Zero queues at packet pickup",
        description: "iPad-based check-in for volunteers.",
        painPoint: "Long lines and manual name lookups.",
        fix: "QR scan and instant assignment.",
        effortEstimate: "Completed"
    },

    // Phase 2 (Racer Operations) - The Opportunity
    {
        id: "racer-ops",
        name: "Racer Operations",
        phase: 2,
        category: "Racer",
        status: "Planned",
        roiImpact: "Safety + Fan Engagement",
        description: "Live tracking & DNF prediction.",
        painPoint: "No visibility into runner location between aid stations.",
        fix: "Predictive AI based on pace and timing mats.",
        effortEstimate: "60 hours"
    },
    {
        id: "sponsor-portal",
        name: "Sponsor Portal",
        phase: 2,
        category: "Vendor",
        status: "Planned",
        roiImpact: "+20% Renewal Rate",
        description: "ROI Dashboard for vendors.",
        painPoint: "Sponsors ask 'how many people saw me?'",
        fix: "Automated engagement metrics dashboard.",
        effortEstimate: "40 hours"
    },
    {
        id: "real-time-sync",
        name: "Real-Time Sync",
        phase: 2,
        category: "Core",
        status: "Planned",
        roiImpact: "Automates results",
        description: "API integration with Kyle's timing.",
        painPoint: "Manual CSV exports from timing software.",
        fix: "Direct push/pull API integration.",
        effortEstimate: "25 hours"
    },

    // Phase 3 (Vendor/Future)
    {
        id: "inventory-mgmt",
        name: "Smart Inventory",
        phase: 3,
        category: "Admin",
        status: "Blocked",
        roiImpact: "Reduces waste by 15%",
        description: "Track aid station supplies in real-time.",
        painPoint: "Over/under ordering supplies.",
        fix: "Digital inventory tracking per station.",
        effortEstimate: "80 hours"
    }
];

export const ROI_SUMMARY = {
    hoursSaved: 78,
    revenuePotential: 50000
};
