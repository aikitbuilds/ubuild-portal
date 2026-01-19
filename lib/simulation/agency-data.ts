// Agency Simulation Engine
// Generates mock data for 20 clients and 40 projects across 5 stages

export interface SimulatedClient {
    id: string;
    name: string;
    industry: string;
    mrr: number;
    joinedDate: Date;
}

export interface SimulatedProject {
    id: string;
    name: string;
    clientId: string;
    clientName: string;
    stage: number;
    stageName: string;
    status: "building" | "paused" | "complete" | "error";
    lastAction: string;
    lastActionTime: Date;
    tasksCompleted: number;
    totalTasks: number;
}

export interface AgencyMetrics {
    totalClients: number;
    totalProjects: number;
    activeBuilds: number;
    criticalIssues: number;
    totalMRR: number;
    systemHealth: number;
}

export interface VelocityDataPoint {
    date: string;
    actions: number;
}

export interface IssueSeverity {
    severity: string;
    count: number;
    fill: string;
    [key: string]: string | number;
}

const CLIENT_NAMES = [
    "Acme SaaS", "FinTech Flow", "HealthSync Pro", "EduLearn AI", "RetailEdge",
    "LogiTrack", "HomeNest", "FoodieHub", "TravelMate", "FitLife Pro",
    "MediaStream", "SecureVault", "GreenEnergy", "AutoDrive", "PetCare Plus",
    "StyleBox", "WorkFlow AI", "GameForge", "MusicMix", "CloudNine"
];

const INDUSTRIES = [
    "SaaS", "FinTech", "HealthTech", "EdTech", "Retail",
    "Logistics", "PropTech", "FoodTech", "Travel", "Fitness",
    "Media", "Security", "Energy", "Automotive", "PetTech",
    "Fashion", "Productivity", "Gaming", "Entertainment", "Cloud"
];

const PROJECT_PREFIXES = ["Portal", "Dashboard", "App", "Platform", "System", "Hub", "Engine", "Suite"];

const STAGE_NAMES = ["Research", "Architecture", "Building", "Optimization", "Deployed"];

const LAST_ACTIONS = [
    "Schema migration complete",
    "API endpoint created",
    "Component library updated",
    "Database seeded",
    "Auth flow implemented",
    "Tests passing",
    "Build optimization",
    "Security audit",
    "Performance tuning",
    "Deploy initiated"
];

function randomDate(daysAgo: number): Date {
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * daysAgo));
    return date;
}

function randomMinutesAgo(): Date {
    const date = new Date();
    date.setMinutes(date.getMinutes() - Math.floor(Math.random() * 120));
    return date;
}

export function generateClients(count: number = 20): SimulatedClient[] {
    return Array.from({ length: count }, (_, i) => ({
        id: `client_${i + 1}`,
        name: CLIENT_NAMES[i] || `Client ${i + 1}`,
        industry: INDUSTRIES[i] || "Technology",
        mrr: Math.floor(Math.random() * 5000) + 500,
        joinedDate: randomDate(365),
    }));
}

export function generateProjects(clients: SimulatedClient[], count: number = 40): SimulatedProject[] {
    // Distribution: 5 Research, 10 Architecture, 15 Building, 5 Optimization, 5 Deployed
    const stageDistribution = [5, 10, 15, 5, 5];
    const projects: SimulatedProject[] = [];
    let projectIndex = 0;

    stageDistribution.forEach((stageCount, stageIndex) => {
        for (let i = 0; i < stageCount; i++) {
            const client = clients[projectIndex % clients.length];
            const prefix = PROJECT_PREFIXES[Math.floor(Math.random() * PROJECT_PREFIXES.length)];
            const stage = stageIndex + 1;

            let status: SimulatedProject["status"] = "building";
            if (stage === 5) status = "complete";
            else if (Math.random() < 0.1) status = "paused";
            else if (Math.random() < 0.05) status = "error";

            const totalTasks = 20 + Math.floor(Math.random() * 30);
            const stageProgress = stage / 5;
            const tasksCompleted = Math.floor(totalTasks * stageProgress * (0.7 + Math.random() * 0.3));

            projects.push({
                id: `proj_${projectIndex + 1}`,
                name: `${client.name.split(" ")[0]} ${prefix}`,
                clientId: client.id,
                clientName: client.name,
                stage,
                stageName: STAGE_NAMES[stageIndex],
                status,
                lastAction: LAST_ACTIONS[Math.floor(Math.random() * LAST_ACTIONS.length)],
                lastActionTime: randomMinutesAgo(),
                tasksCompleted,
                totalTasks,
            });
            projectIndex++;
        }
    });

    return projects;
}

export function generateVelocityData(days: number = 30): VelocityDataPoint[] {
    const data: VelocityDataPoint[] = [];
    const baseActions = 50;

    for (let i = days - 1; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dayOfWeek = date.getDay();
        const weekendFactor = dayOfWeek === 0 || dayOfWeek === 6 ? 0.3 : 1;
        const trendFactor = 1 + (days - i) * 0.02; // Increasing trend
        const randomFactor = 0.7 + Math.random() * 0.6;

        data.push({
            date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
            actions: Math.floor(baseActions * weekendFactor * trendFactor * randomFactor),
        });
    }

    return data;
}

export function generateIssueSeverity(): IssueSeverity[] {
    return [
        { severity: "Critical", count: 3, fill: "hsl(0, 84%, 60%)" },
        { severity: "High", count: 8, fill: "hsl(25, 95%, 53%)" },
        { severity: "Medium", count: 15, fill: "hsl(48, 96%, 53%)" },
        { severity: "Low", count: 24, fill: "hsl(142, 76%, 36%)" },
    ];
}

export function generateAgencyMetrics(clients: SimulatedClient[], projects: SimulatedProject[]): AgencyMetrics {
    const activeBuilds = projects.filter(p => p.status === "building" && p.stage === 3).length;
    const criticalIssues = 3; // From issue severity
    const totalMRR = clients.reduce((sum, c) => sum + c.mrr, 0);
    const issueTotal = 50;
    const systemHealth = Math.round(((issueTotal - criticalIssues * 5) / issueTotal) * 100);

    return {
        totalClients: clients.length,
        totalProjects: projects.length,
        activeBuilds,
        criticalIssues,
        totalMRR,
        systemHealth: Math.min(systemHealth, 97),
    };
}

// Main hook for consuming simulation data
export function useAgencyData(useDemoData: boolean = true) {
    if (!useDemoData) {
        // Return empty/placeholder for Firebase integration
        return {
            clients: [],
            projects: [],
            metrics: { totalClients: 0, totalProjects: 0, activeBuilds: 0, criticalIssues: 0, totalMRR: 0, systemHealth: 0 },
            velocityData: [],
            issueSeverity: [],
            pipelineData: [],
        };
    }

    const clients = generateClients(20);
    const projects = generateProjects(clients, 40);
    const metrics = generateAgencyMetrics(clients, projects);
    const velocityData = generateVelocityData(30);
    const issueSeverity = generateIssueSeverity();

    // Pipeline data for funnel/bar chart
    const pipelineData = STAGE_NAMES.map((name, i) => ({
        stage: name,
        count: projects.filter(p => p.stage === i + 1).length,
        fill: `hsl(${173 - i * 20}, 80%, ${40 + i * 5}%)`,
    }));

    return {
        clients,
        projects,
        metrics,
        velocityData,
        issueSeverity,
        pipelineData,
    };
}
