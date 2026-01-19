---
name: Regie.ai Design System
description: Design rules extracted from regie.ai to ensure a modern, high-tech AI aesthetic.
triggers:
  - use regie.ai style
  - apply regie.ai theme
---

# Design Tokens

## 🎨 Colors (Tailwind Map)
- **Primary:** `#3F8CFF` (Action Blue)
- **Gradient:** `from-[#0ADFC6] to-[#3F8CFF]` (Teal to Blue)
- **Background:** `#031324` (Deep Dark Navy)
- **Surface:** `rgba(255, 255, 255, 0.05)` (Subtle overlays with backdrop blur)
- **Text:** `#FFFFFF` (Headings & Body on dark bg), `#94A3B8` (Muted/Secondary text)

## 🔤 Typography
- **Headings:** `font-semibold`, `tracking-tight`, `text-white`
- **Body:** `text-slate-300`, `text-base`, `leading-relaxed`
- **Font Family:** `Mori` (fallback to `Inter` or `Plus Jakarta Sans`)

## 🧩 Component DNA
### Buttons
- **Shape:** Pill-shaped (`rounded-full`)
- **Primary (Action):** `bg-[#3F8CFF] hover:bg-[#3F8CFF]/90 text-white px-6 py-3 font-medium transition-transform hover:scale-105`
- **Hero Gradient:** `bg-gradient-to-r from-[#0ADFC6] to-[#3F8CFF] text-white px-8 py-4 font-semibold shadow-lg shadow-teal-500/20`
- **Secondary (Outline):** `border border-white/20 hover:bg-white/10 text-white px-6 py-3 bg-transparent`

### Cards
- **Container:** `bg-[#0B1D30]/50 backdrop-blur-md border border-white/10 rounded-[32px] p-8`
- **Shadows:** `shadow-2xl shadow-black/40`
- **Hover:** `group-hover:border-white/20 transition-colors`

### Sections
- **Hero:** Dark background `#031324` with `bg-[url('/grid-pattern.svg')]` or radial gradient globs.
