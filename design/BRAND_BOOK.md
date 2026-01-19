# uBuild Brand Book

## Overview
The uBuild visual identity reflects our core values: **Precision**, **Automation**, and **Professional Excellence**.

---

## Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| **Teal-500** | `#14b8a6` | Primary accent, CTAs, links, highlights |
| **Teal-600** | `#0d9488` | Hover states, emphasis |
| **Cyan-400** | `#22d3ee` | Gradients, secondary accent |

### Background Colors
| Name | Hex | Usage |
|------|-----|-------|
| **Slate-950** | `#020617` | Primary background (Dark Mode) |
| **Slate-900** | `#0f172a` | Card backgrounds, elevated surfaces |
| **Slate-800** | `#1e293b` | Secondary surfaces, borders |
| **Slate-700** | `#334155` | Borders, dividers |

### Text Colors
| Name | Hex | Usage |
|------|-----|-------|
| **White** | `#ffffff` | Headings, primary text |
| **Slate-300** | `#cbd5e1` | Body text, descriptions |
| **Slate-400** | `#94a3b8` | Secondary text, labels |
| **Slate-500** | `#64748b` | Muted text, placeholders |

### Status Colors
| Name | Hex | Usage |
|------|-----|-------|
| **Emerald-500** | `#10b981` | Success, complete |
| **Amber-500** | `#f59e0b` | Warning, pending |
| **Red-500** | `#ef4444` | Error, critical |
| **Blue-500** | `#3b82f6` | Info, active |

---

## Typography

### Font Families
- **Geist Sans**: Headings, UI text, buttons
- **Geist Mono**: Code, data, technical content

### Scale
| Level | Size | Weight | Usage |
|-------|------|--------|-------|
| H1 | 48-72px | Bold (700) | Page titles, hero |
| H2 | 36-48px | Bold (700) | Section headers |
| H3 | 24-30px | Semibold (600) | Card titles |
| H4 | 18-20px | Semibold (600) | Subsections |
| Body | 14-16px | Regular (400) | Paragraphs |
| Small | 12-13px | Regular (400) | Labels, captions |
| Code | 13-14px | Regular (400) | Technical text |

---

## Voice & Tone

### Principles
1. **Professional** — Speak with authority and expertise
2. **No-Fluff** — Direct, actionable, no filler words
3. **Confident** — State facts, show results, no hedging
4. **Technical** — Embrace complexity, don't oversimplify

### Do's
- Use active voice: "uBuild generates..." not "It can be generated..."
- Lead with results: "10x more leads" not "Improved lead generation"
- Be specific: "4-week deployment" not "Fast deployment"

### Don'ts
- Avoid buzzwords without substance
- No exclamation marks in headlines
- Never use "AI magic" or similar vague terms

---

## Logo Usage

### Primary Logo
- Geometric "U" constructed from 3 building blocks
- Represents: Idea → Build → Scale

### Clear Space
- Minimum padding: 1x logo height on all sides

### Minimum Size
- Digital: 32px height
- Print: 0.5" height

### Color Variants
- **Primary**: Teal-500 on Slate-950
- **Monochrome**: White on dark, Slate-900 on light

---

## Component Styling

### Buttons
```css
/* Primary */
background: linear-gradient(to-right, #14b8a6, #22d3ee);
color: white;
border-radius: 8px;
padding: 12px 24px;

/* Secondary */
background: transparent;
border: 1px solid #334155;
color: white;
```

### Cards
```css
background: #0f172a;
border: 1px solid #334155;
border-radius: 12px;
padding: 24px;
```

### Inputs
```css
background: #1e293b;
border: 1px solid #334155;
color: white;
border-radius: 8px;
```

---

## Iconography

### Style
- Use **Lucide Icons** (consistent with Shadcn UI)
- Stroke width: 2px
- Size: 16-24px for inline, 32-48px for feature icons

### Color
- Default: `text-slate-400`
- Active: `text-teal-500`
- Interactive: `text-white` on hover

---

## Animation

### Principles
- Subtle, purposeful motion
- 200-300ms duration for micro-interactions
- Use `ease-out` for entrances, `ease-in` for exits

### Approved Effects
- Fade in on scroll
- Scale on hover (max 1.05)
- Gradient shimmer for loading states

### Forbidden
- Bouncing animations
- Spinning elements (except loaders)
- Parallax effects

---

*Last Updated: January 2026*
