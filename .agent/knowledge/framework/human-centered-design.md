---
description: Human-Centered Design Framework for UI/UX Implementation
---

# Human-Centered Design Skill

This skill defines the strict design rules for all UI/UX work in the uBuild framework. These rules take priority over abstract visual preferences.

---

## Core Principle

**People connect with people, not graphics.**

Every design decision must prioritize human elements—real faces, authentic imagery, and relatable scenarios—over abstract 3D art, illustrations, or stock graphics.

---

## Rule 1: Real Faces Policy

### Requirement
**Always use images showing real human faces in Hero sections.**

### Implementation
- Hero sections MUST feature photography of real people
- Faces should be visible and not obscured by text boxes
- Subject should ideally look towards the content (creates visual flow)
- Avoid: Abstract 3D art, generic illustrations, faceless silhouettes

### Example Pattern
```tsx
<section className="relative min-h-screen">
  {/* Background: Human-focused photography */}
  <Image 
    src="/images/hero-person.jpg"
    alt="Professional using uBuild"
    fill
    className="object-cover"
    priority
  />
  
  {/* Overlay: Glass Card for text */}
  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-transparent">
    <div className="glass-card p-8">
      <h1>Headline Here</h1>
    </div>
  </div>
</section>
```

---

## Rule 2: Mobile First Design

### Requirement
**All designs must render perfectly on 375px width (iPhone SE).**

### Implementation Checklist
- [ ] Test all components at 375px viewport width
- [ ] Touch targets minimum 44x44px
- [ ] Text readable without zooming (min 16px body)
- [ ] Single column layouts on mobile
- [ ] Horizontal scroll strictly prohibited

### Breakpoint Strategy
```
375px  - iPhone SE (design target)
390px  - iPhone 14
428px  - iPhone 14 Pro Max
768px  - Tablet
1024px - Desktop
1440px - Large desktop
```

---

## Rule 3: Visual Hierarchy with Overlays

### Requirement
**Text overlays must use opacity/blur to ensure readability over complex photography.**

### Glass Card Pattern
```css
/* Standard Glass Card */
.glass-card {
  background: rgba(2, 6, 23, 0.8);  /* slate-950/80 */
  backdrop-filter: blur(12px);
  border: 1px solid rgba(51, 65, 85, 0.5);  /* slate-700/50 */
  border-radius: 12px;
  padding: 2rem;
}

/* Alternative: Gradient Overlay */
.gradient-overlay {
  background: linear-gradient(
    to right,
    rgba(2, 6, 23, 0.95) 0%,
    rgba(2, 6, 23, 0.7) 50%,
    transparent 100%
  );
}
```

### Tailwind Implementation
```tsx
<div className="bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-xl p-8">
  <h1 className="text-white">High Contrast Headline</h1>
  <p className="text-slate-100">Readable body text</p>
</div>
```

---

## Rule 4: Typography Contrast

### Requirement
Ensure WCAG AA compliance (4.5:1 contrast ratio minimum).

### Approved Text Colors on Dark Overlays
| Element | Color | Tailwind Class |
|---------|-------|----------------|
| Headlines | White | `text-white` |
| Body | Light Slate | `text-slate-100` or `text-slate-200` |
| Secondary | Medium Slate | `text-slate-300` |
| Muted | Slate | `text-slate-400` |

### Never Use
- Pure gray text on images without overlay
- Colored text on busy backgrounds
- Text shadows as the only legibility solution

---

## Rule 5: Face-Forward Layout

### Requirement
When using human photography, ensure faces remain visible.

### Layout Patterns

**Pattern A: Split Layout**
```
┌─────────────────────────────────────┐
│  ┌──────────┐                       │
│  │ Text Box │        [Face →]       │
│  │ with CTA │                       │
│  └──────────┘                       │
└─────────────────────────────────────┘
```

**Pattern B: Gradient Overlay**
```
┌─────────────────────────────────────┐
│ ████████░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ████████ Text ░░░░░░░░░░ [Face] ░░ │
│ ████████░░░░░░░░░░░░░░░░░░░░░░░░░░ │
└─────────────────────────────────────┘
  (Dark)  (Gradient)      (Clear)
```

---

## Implementation Checklist

When creating or updating Hero sections:

- [ ] Background uses real human photography
- [ ] Face is visible and not covered
- [ ] Text container uses glass card or gradient overlay
- [ ] Text colors are white/light slate
- [ ] Layout tested at 375px mobile width
- [ ] Touch targets meet 44px minimum
- [ ] Follows Teal-500/Slate-950 palette

---

## Integration with Brand

This skill works alongside the uBuild Brand Book:
- **Palette**: Teal-500 (#14b8a6), Slate-950 (#020617)
- **Typography**: Geist Sans / Geist Mono
- **Corners**: Sharp (4-8px radius)

Human imagery ADDS to the brand—it doesn't replace the technical aesthetic.

---

*Skill Version: 1.0*
*Priority: HIGH - Consult before all UI tasks*
