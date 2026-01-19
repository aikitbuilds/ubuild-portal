# 🔧 IMPLEMENTATION GUIDE
## Building the Idea→MVP System (Complete Technical Setup)

**Version**: 2.0  
**Status**: Production-Ready  
**Deployment Time**: 2-3 hours (one-time setup)  

---

## PART 1: SYSTEM ARCHITECTURE

### Tech Stack Overview

```
FRONTEND TIER:
├─ Framework: Next.js 14 (React)
├─ UI Components: shadcn/ui
├─ Styling: Tailwind CSS
├─ State Management: Zustand
├─ Real-time: WebSockets (for build progress)
└─ Hosting: Vercel

BACKEND TIER:
├─ API: Next.js API Routes
├─ Database: Supabase (PostgreSQL)
├─ Authentication: NextAuth.js (Google OAuth)
├─ File Storage: Supabase Storage
├─ Queues: Bull/Redis (for workflows)
└─ Hosting: Vercel (serverless)

INTEGRATION TIER:
├─ Perplexity API (research)
├─ Antigravity Kit 2.0 (agents)
├─ Stripe (payments - future)
├─ Slack (notifications)
└─ SendGrid (email)

MONITORING TIER:
├─ Error tracking: Sentry
├─ Analytics: PostHog
├─ Logs: Vercel logs + custom
├─ Uptime: Uptime Robot
└─ Performance: Vercel Analytics
```

### Project Structure

```
idea-to-mvp/
├─ apps/
│  ├─ web/
│  │  ├─ pages/
│  │  │  ├─ api/
│  │  │  │  ├─ auth/
│  │  │  │  │  └─ [...nextauth].ts (Google OAuth)
│  │  │  │  ├─ ideas/
│  │  │  │  │  ├─ index.ts (Create idea)
│  │  │  │  │  ├─ [id].ts (Get idea)
│  │  │  │  │  └─ [id]/stage.ts (Update stage)
│  │  │  │  ├─ perplexity/
│  │  │  │  │  └─ research.ts (Research endpoint)
│  │  │  │  ├─ antigravity/
│  │  │  │  │  └─ build.ts (Trigger build)
│  │  │  │  └─ webhook/
│  │  │  │     ├─ antigravity.ts (Build updates)
│  │  │  │     └─ perplexity.ts (Research updates)
│  │  │  ├─ index.tsx (Landing page)
│  │  │  ├─ submit-idea.tsx (Idea form)
│  │  │  └─ portal/
│  │  │     ├─ [projectId]/index.tsx (Dashboard)
│  │  │     ├─ [projectId]/architecture.tsx
│  │  │     ├─ [projectId]/tasks.tsx
│  │  │     ├─ [projectId]/issues.tsx
│  │  │     └─ [projectId]/deployments.tsx
│  │  ├─ components/
│  │  │  ├─ IdeaForm.tsx
│  │  │  ├─ StageProgress.tsx
│  │  │  ├─ Dashboard.tsx
│  │  │  └─ ArchitectureViewer.tsx
│  │  ├─ lib/
│  │  │  ├─ supabase.ts
│  │  │  ├─ perplexity.ts
│  │  │  ├─ antigravity.ts
│  │  │  └─ workflows.ts
│  │  └─ hooks/
│  │     ├─ useProject.ts
│  │     └─ useStageProgress.ts
│  │
│  └─ workers/ (Background jobs)
│     ├─ stageTrigger.ts (Stage orchestration)
│     ├─ researchProcessor.ts
│     ├─ buildMonitor.ts
│     └─ deploymentHandler.ts
│
└─ packages/
   ├─ shared-types/ (TypeScript types)
   └─ ui-components/ (shadcn/ui setup)
```

---

## PART 2: DATABASE SCHEMA

### Supabase Tables

```sql
-- Projects table
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  current_stage INTEGER DEFAULT 1, -- 1-5
  status VARCHAR(50) DEFAULT 'active',
  research_data JSONB,
  architecture_data JSONB,
  build_output JSONB,
  config JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  deployed_urls JSONB,
  metrics JSONB,
  INDEX idx_user_id (user_id),
  INDEX idx_status (status)
);

-- Project collaborators
CREATE TABLE project_collaborators (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role VARCHAR(50) DEFAULT 'viewer', -- viewer, editor, admin
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(project_id, user_id)
);

-- Build stages (1 record per project)
CREATE TABLE build_stages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  stage_number INTEGER NOT NULL,
  status VARCHAR(50), -- pending, in_progress, complete, error
  started_at TIMESTAMP,
  completed_at TIMESTAMP,
  duration_minutes INTEGER,
  output JSONB,
  error_message TEXT,
  retry_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(project_id, stage_number)
);

-- Issues/bugs tracker
CREATE TABLE issues (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  severity VARCHAR(50), -- critical, high, medium, low
  status VARCHAR(50) DEFAULT 'open', -- open, fixing, fixed, closed
  feature VARCHAR(255),
  assigned_to VARCHAR(50), -- agent name or user
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  resolved_at TIMESTAMP,
  resolution_notes TEXT,
  INDEX idx_project_status (project_id, status)
);

-- Feature requests
CREATE TABLE feature_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  submitted_by VARCHAR(255),
  votes INTEGER DEFAULT 1,
  status VARCHAR(50) DEFAULT 'new',
  priority VARCHAR(50),
  estimated_effort_hours INTEGER,
  created_at TIMESTAMP DEFAULT NOW(),
  INDEX idx_project_status (project_id, status)
);

-- Deployment logs
CREATE TABLE deployments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  version VARCHAR(50),
  environment VARCHAR(50), -- staging, production
  status VARCHAR(50), -- pending, in_progress, success, failed
  deployed_by VARCHAR(255),
  deployed_at TIMESTAMP,
  urls JSONB,
  error_log TEXT,
  rollback_available BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Analytics/metrics
CREATE TABLE project_metrics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  metric_name VARCHAR(255),
  metric_value JSONB,
  recorded_at TIMESTAMP DEFAULT NOW(),
  INDEX idx_project_metric (project_id, metric_name)
);

-- Users profile extension
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email VARCHAR(255) NOT NULL UNIQUE,
  full_name VARCHAR(255),
  avatar_url TEXT,
  perplexity_api_key VARCHAR(255),
  antigravity_api_key VARCHAR(255),
  credits_available INTEGER DEFAULT 0,
  subscription_tier VARCHAR(50) DEFAULT 'free',
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## PART 3: API ENDPOINTS

### Idea Management

```typescript
// POST /api/ideas - Create new project
{
  body: {
    name: string;
    description: string;
    targetUsers: string;
    keyFeatures: string[];
    successMetrics: string[];
    techStack: {
      frontend: string;
      backend: string;
      database: string;
      hosting: string;
    };
  }
  response: {
    id: string;
    status: "created";
    stage: 1;
    portalUrl: string;
  }
}

// GET /api/ideas/:id - Get project details
{
  response: {
    id: string;
    name: string;
    description: string;
    currentStage: 1-5;
    status: string;
    researchData: object;
    architectureData: object;
    buildOutput: object;
    deployedUrls: object;
    metrics: object;
    createdAt: string;
  }
}

// PATCH /api/ideas/:id/stage - Update stage status
{
  body: {
    stage: number;
    status: "pending" | "in_progress" | "complete" | "error";
    output?: object;
    errorMessage?: string;
  }
  response: {
    stage: number;
    status: string;
    updatedAt: string;
  }
}
```

### Research & Analysis

```typescript
// POST /api/perplexity/research - Trigger research
{
  body: {
    projectId: string;
    projectName: string;
    description: string;
    targetUsers: string;
  }
  response: {
    jobId: string;
    status: "queued";
    estimatedTime: number; // minutes
  }
}

// POST /api/webhook/perplexity - Receive research results
{
  body: {
    jobId: string;
    projectId: string;
    findings: {
      marketSize: object;
      competitors: object[];
      techRecommendations: object;
      validation: object;
      businessViability: object;
    };
    completedAt: string;
  }
}
```

### Build & Architecture

```typescript
// POST /api/antigravity/build - Trigger build
{
  body: {
    projectId: string;
    stage: number;
    buildConfig: object;
  }
  response: {
    buildId: string;
    status: "starting";
    estimatedTime: number;
  }
}

// POST /api/webhook/antigravity - Receive build updates
{
  body: {
    buildId: string;
    projectId: string;
    stage: number;
    progress: {
      percentComplete: number;
      currentTask: string;
      tasksCompleted: number;
      totalTasks: number;
    };
    issues?: Array<{
      title: string;
      severity: string;
      status: string;
    }>;
    metrics?: {
      codeQuality: number;
      testCoverage: number;
      performance: number;
    };
  }
}
```

### Issues & Features

```typescript
// POST /api/issues - Create issue
{
  body: {
    projectId: string;
    title: string;
    description: string;
    severity: "critical" | "high" | "medium" | "low";
    feature: string;
  }
  response: { id: string; status: "open"; }
}

// GET /api/issues/:projectId - Get issues
{
  response: Array<{
    id: string;
    title: string;
    severity: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  }>
}

// POST /api/feature-requests - Request feature
{
  body: {
    projectId: string;
    title: string;
    description: string;
    useCase: string;
  }
  response: { id: string; votes: 1; }
}
```

---

## PART 4: WORKFLOW ORCHESTRATION

### Stage Progression Logic

```typescript
// workflows.ts
export const stageWorkflow = {
  1: {
    name: "Research",
    duration: 45,
    actions: [
      "captureIdea",
      "triggerPerplexityResearch",
      "waitForResearch",
      "displayFindings",
      "waitForApproval"
    ],
    onComplete: () => moveToStage(2)
  },
  
  2: {
    name: "Architecture",
    duration: 60,
    actions: [
      "triggerArchitectureAgents",
      "generateArchitectureDiagram",
      "generateDatabaseSchema",
      "generateComponentTree",
      "generateAPISpec",
      "waitForApproval"
    ],
    onComplete: () => moveToStage(3)
  },
  
  3: {
    name: "Build",
    duration: 120,
    parallel: true,
    actions: [
      "buildBackend",
      "buildFrontend",
      "buildDatabase",
      "setupAuthentication"
    ],
    monitoring: {
      interval: 30000, // 30 seconds
      metrics: ["progress", "errors", "tests"]
    },
    onComplete: () => moveToStage(4)
  },
  
  4: {
    name: "Optimization",
    duration: 90,
    actions: [
      "optimizePerformance",
      "improveAccessibility",
      "enhanceSecurity",
      "optimizeForMobile"
    ],
    onComplete: () => moveToStage(5)
  },
  
  5: {
    name: "Deploy",
    duration: 60,
    actions: [
      "buildProduction",
      "deployLanding",
      "deployApp",
      "deployPortal",
      "setupMonitoring",
      "enableAnalytics"
    ],
    onComplete: () => markAsLive()
  }
};

// Recovery system
export const handleStageFailure = async (projectId, stage, error) => {
  const project = await getProject(projectId);
  
  // Store failure info
  await logStageError(projectId, stage, error);
  
  // Notify user
  await sendNotification(project.userId, {
    title: `Stage ${stage} Paused`,
    message: `Error: ${error.message}`,
    nextSteps: [
      "Check error details in portal",
      "Fix issue if needed",
      "Click Resume to retry"
    ]
  });
  
  // Mark as paused (not failed)
  await updateProjectStage(projectId, {
    status: "paused",
    pausedReason: error.message,
    retryCount: project.retryCount + 1
  });
};
```

---

## PART 5: DEPLOYMENT CONFIGURATION

### Environment Variables (.env.local)

```bash
# Database
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Authentication
NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# External APIs
PERPLEXITY_API_KEY=your-perplexity-key
ANTIGRAVITY_API_KEY=your-antigravity-key
SENDGRID_API_KEY=your-sendgrid-key
SLACK_WEBHOOK_URL=your-slack-webhook

# Monitoring
SENTRY_DSN=your-sentry-dsn
POSTHOG_API_KEY=your-posthog-key

# Feature flags
NEXT_PUBLIC_ENABLE_RESEARCH=true
NEXT_PUBLIC_ENABLE_BUILD=true
NEXT_PUBLIC_ENABLE_DEPLOY=true
```

### Vercel Deployment Configuration (vercel.json)

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "env": {
    "NEXT_PUBLIC_SUPABASE_URL": "@supabase_url",
    "NEXT_PUBLIC_SUPABASE_ANON_KEY": "@supabase_key",
    "SUPABASE_SERVICE_ROLE_KEY": "@supabase_service_key",
    "NEXTAUTH_SECRET": "@nextauth_secret",
    "GOOGLE_CLIENT_ID": "@google_client_id",
    "GOOGLE_CLIENT_SECRET": "@google_client_secret",
    "PERPLEXITY_API_KEY": "@perplexity_key",
    "ANTIGRAVITY_API_KEY": "@antigravity_key",
    "SENDGRID_API_KEY": "@sendgrid_key"
  },
  "git": {
    "deploymentEnabled": true
  },
  "redirects": [
    {
      "source": "/docs",
      "destination": "https://docs.idea-to-mvp.com",
      "permanent": false
    }
  ],
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "/api/:path*"
    }
  ],
  "functions": {
    "api/**/*.ts": {
      "memory": 512,
      "maxDuration": 60
    }
  }
}
```

---

## PART 6: MONITORING & OBSERVABILITY

### Error Tracking (Sentry Integration)

```typescript
// lib/sentry.ts
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV,
  integrations: [
    new Sentry.Replay({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

// Error boundary in components
export function withErrorBoundary(Component: any) {
  return (props: any) => (
    <Sentry.ErrorBoundary fallback={<ErrorFallback />}>
      <Component {...props} />
    </Sentry.ErrorBoundary>
  );
}
```

### Analytics (PostHog)

```typescript
// lib/analytics.ts
import posthog from 'posthog-js';

export const trackEvent = (eventName: string, properties?: any) => {
  posthog.capture(eventName, {
    ...properties,
    timestamp: new Date().toISOString(),
  });
};

// Usage
trackEvent('idea_created', {
  projectName: 'Solar Calculator',
  features: 5,
  techStack: 'nextjs'
});
```

### Logging Strategy

```typescript
// lib/logger.ts
export const logStageProgress = async (
  projectId: string,
  stage: number,
  progress: {
    percentComplete: number;
    currentTask: string;
    taskCount: number;
  }
) => {
  // Store in database
  await supabase
    .from('stage_logs')
    .insert({
      project_id: projectId,
      stage,
      ...progress,
      created_at: new Date().toISOString(),
    });
  
  // Send to analytics
  trackEvent('stage_progress', { projectId, stage, ...progress });
  
  // Update real-time websocket
  await broadcastToPortal(projectId, {
    type: 'progress_update',
    payload: progress
  });
};
```

---

## PART 7: INTEGRATION WITH PERPLEXITY API

### Research Trigger

```typescript
// lib/perplexity.ts
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

export const triggerResearch = async (projectDetails: {
  name: string;
  description: string;
  targetUsers: string;
  features: string[];
}) => {
  const prompt = `
Research this business idea and provide:
1. Market size and growth rate
2. Competitor analysis (3-5 competitors)
3. Technology recommendations
4. User validation
5. Business viability score (1-10)

Project: ${projectDetails.name}
Description: ${projectDetails.description}
Target Users: ${projectDetails.targetUsers}
Key Features: ${projectDetails.features.join(', ')}

Provide detailed, actionable findings.
Format as JSON with sections: marketResearch, competitors, techRecommendations, validation, businessScore
  `;

  const response = await client.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 2000,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return JSON.parse(response.content[0].type === 'text' ? response.content[0].text : '{}');
};
```

---

## PART 8: INTEGRATION WITH ANTIGRAVITY KIT 2.0

### Build Orchestration

```typescript
// lib/antigravity.ts
import axios from 'axios';

const ANTIGRAVITY_BASE = 'https://antigravity.api/v1';

export const triggerAntigravityBuild = async (
  projectId: string,
  stage: number,
  config: BuildConfig
) => {
  const payload = {
    project_id: projectId,
    stage,
    config: {
      ...config,
      agents: getAgentsForStage(stage),
      integrations: getIntegrationsForProject(projectId),
    }
  };

  const response = await axios.post(
    `${ANTIGRAVITY_BASE}/build`,
    payload,
    {
      headers: {
        'Authorization': `Bearer ${process.env.ANTIGRAVITY_API_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );

  return response.data;
};

const getAgentsForStage = (stage: number) => {
  const agentMap = {
    2: ['architect', 'database', 'frontend', 'backend'],
    3: ['builder', 'tester', 'analyzer', 'monitor'],
    4: ['improver', 'monitor', 'security', 'performance'],
    5: ['deployer', 'monitor', 'notifier']
  };
  
  return agentMap[stage] || [];
};
```

---

## PART 9: SETUP INSTRUCTIONS

### Prerequisites

```bash
# Node.js 18+ required
node --version

# npm or yarn
npm --version

# Git
git --version
```

### Quick Start (5 minutes)

```bash
# 1. Clone repository
git clone https://github.com/yourusername/idea-to-mvp.git
cd idea-to-mvp

# 2. Install dependencies
npm install

# 3. Setup environment
cp .env.example .env.local
# Fill in your API keys (Supabase, Perplexity, Antigravity, etc)

# 4. Setup Supabase
npx supabase link --project-ref your-project-id
npx supabase migration up

# 5. Run development server
npm run dev

# 6. Open in browser
# Visit http://localhost:3000
```

### Production Deployment (15 minutes)

```bash
# 1. Push to GitHub
git push origin main

# 2. Connect to Vercel
# Visit vercel.com
# Click "New Project"
# Import from GitHub
# Select this repository

# 3. Add environment variables
# In Vercel dashboard:
# Settings → Environment Variables
# Add all variables from .env.local

# 4. Deploy
# Click "Deploy"
# Vercel automatically builds and deploys

# 5. Setup custom domain
# In Vercel:
# Settings → Domains
# Add your domain

# 6. Configure webhooks
# Antigravity: https://your-domain.com/api/webhook/antigravity
# Perplexity: https://your-domain.com/api/webhook/perplexity
```

---

## PART 10: MONITORING YOUR DEPLOYMENT

### Health Checks

```typescript
// pages/api/health.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const checks = {
    database: await checkDatabase(),
    perplexity: await checkPerplexity(),
    antigravity: await checkAntigravity(),
    auth: await checkAuth(),
  };

  const allHealthy = Object.values(checks).every(c => c.status === 'ok');

  return NextResponse.json(
    { status: allHealthy ? 'healthy' : 'degraded', checks },
    { status: allHealthy ? 200 : 503 }
  );
}

const checkDatabase = async () => {
  try {
    const result = await supabase.from('projects').select('count');
    return { status: 'ok', responseTime: 'Xms' };
  } catch (e) {
    return { status: 'error', error: e.message };
  }
};
```

### Uptime Monitoring

```
Service: Uptime Robot
Check: https://your-domain.com/api/health
Interval: 5 minutes
Alert: Email if down >5 minutes
```

---

## NEXT STEPS

1. **Complete the setup** using Quick Start (5 min)
2. **Test the system** with a sample idea
3. **Configure integrations** (Perplexity, Antigravity)
4. **Deploy to production** (15 min)
5. **Monitor and iterate** (ongoing)

---

**System is ready to deploy. Follow the Quick Start section to begin.** 🚀

