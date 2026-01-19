# uBuild Visual Design Strategy

## Design Philosophy
This document defines the strict visual language for uBuild, following the **Antigravity Design Protocol**.

---

## 1. Color Palette Rationale

### Primary: Teal-500 (`#14b8a6`)
**Why Teal?**
- **Growth & Precision**: Teal represents sustainable growth and engineering precision—core values of the uBuild framework.
- **Market Differentiation**: Distinctly separates uBuild from the generic "AI Purple" used by low-effort GPT wrappers and ChatGPT clones.
- **Trust Signal**: Teal conveys technical competence without the coldness of pure blue or the alarm of red.

### Background: Slate-950 (`#020617`)
**Why Deep Slate?**
- **Enterprise Authority**: Dark backgrounds signal "serious software"—the aesthetic of Bloomberg terminals and DevOps dashboards.
- **Contrast Optimization**: Maximum readability for data-heavy interfaces; Teal accents pop without competing with content.
- **Reduced Eye Strain**: Dev teams working extended hours appreciate low-luminance UIs.

### Accent: Cyan-400 (`#22d3ee`)
**Usage**: Gradients, hover states, and emphasis. Creates depth without breaking the Teal-first hierarchy.

---

## 2. Typography Strategy

### Geist Sans (Headings & UI)
- Clean, geometric sans-serif
- Weight 600-700 for hierarchy
- Tracking: Tight (-0.02em) for density

### Geist Mono (Data & Code)
**Why Monospace for Data?**
- Emphasizes the "Code-as-Infrastructure" nature of uBuild
- Numbers, metrics, and technical specs instantly read as authoritative
- Reinforces that this is a **development framework**, not a template marketplace

---

## 3. Form Factor: "Glass-over-Terminal" Aesthetic

### Core Principles
| Element | Specification | Rationale |
|---------|---------------|-----------|
| Borders | 1px solid Slate-700 | Subtle definition without visual noise |
| Backgrounds | Slate-900 with 80-95% opacity | Glass-like layering over dark terminals |
| Corners | Sharp (4-8px radius max) | Enterprise software feels; no "friendly bubbles" |
| Shadows | None or minimal (0 2px 4px) | Flat design with depth from layering |
| Gradients | Max 5% opacity | Subtle shimmer, never "neon" |

### Anti-Patterns (What We Avoid)
- ❌ Neon glow effects (cheap "80s retro" look)
- ❌ Heavy drop shadows (dated skeuomorphism)  
- ❌ Rounded corners > 12px (childish, non-enterprise)
- ❌ Multi-color gradients (distracting, unprofessional)
- ❌ Animated backgrounds (performance drain, accessibility issue)

---

## 4. Visual Component Standards

### The 5 Hero Visuals

| Component | Purpose | Key Feature |
|-----------|---------|-------------|
| **AgentSwarm** | Hero section | Central node with 6 satellites, data packets animated |
| **PipelineFlow** | How It Works | Technical schematic, white lines on dark |
| **ComplexityMap** | Problem/Solution | Split comparison, chaos vs order |
| **RoiChart** | Portfolio | Data visualization with verified metrics |
| **TechStack** | Features | Bento grid with hover effects |

### Animation Guidelines
- **Duration**: 200-400ms for micro-interactions
- **Easing**: `ease-out` for entrances, `ease-in-out` for continuous
- **Purpose**: Every animation must communicate information (loading, connection, completion)
- **Framer Motion**: Required for complex orchestrated animations

---

## 5. Responsive Strategy

### Mobile-First Breakpoints
- **Base (0-640px)**: Vertical stacking, simplified animations
- **SM (640px+)**: Two-column where applicable
- **MD (768px+)**: Full horizontal layouts
- **LG (1024px+)**: Maximum visual complexity

### Performance Rules
- SVG-only for scalable graphics (no raster images in visuals)
- Lazy-load complex animations below the fold
- `will-change` hints for smooth GPU acceleration

---

*Document Version: 1.0*  
*Last Updated: January 2026*  
*Approved By: Antigravity Design Protocol*
