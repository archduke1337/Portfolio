# Anti-Gravity Portfolio - 4K Design Specifications & Mockup Guide

## Table of Contents
1. [Desktop 4K Specifications](#desktop-4k-specifications)
2. [Mobile Design Specifications](#mobile-design-specifications)
3. [Design Tokens & Measurements](#design-tokens--measurements)
4. [Component Layouts](#component-layouts)
5. [Responsive Breakpoints](#responsive-breakpoints)
6. [Accessibility Specifications](#accessibility-specifications)

---

## Desktop 4K Specifications

### Canvas: 3840 x 2160px @ 60fps

#### HERO SECTION (Full viewport)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│            ✦ COSMIC BACKGROUND GRADIENTS                        │
│         Radial cyan glow (top-left)                              │
│         Radial magenta glow (bottom-right)                       │
│         Particle system: 500+ floating stars                     │
│                                                                   │
│                    GAURAV                                         │
│        [Character-by-character animation]                        │
│        [Cursor tracking gravitational effect]                    │
│        [Text shadow: multi-layer cyan/magenta glow]              │
│                                                                   │
│            Developer Explorer                                     │
│        [Ethereal subtitle, letter-spacing: 0.15em]               │
│                                                                   │
│          Navigating the void of web innovation                   │
│                                                                   │
│            [Explore Projects] [Get In Touch]                     │
│        [Glassmorphism buttons, 200px wide x 60px tall]          │
│                                                                   │
│                                ↓                                  │
│                          [Scroll Indicator]                      │
│                      [Pulsing dot with glow]                     │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘

MEASUREMENTS (4K - 3840x2160):
- Hero Title Size: 144px (Orbitron 900)
- Subtitle Size: 32px (Exo 2 400)
- Body Text: 20px (Exo 2 400)
- Button Width: 220px
- Button Height: 60px
- Padding: 40px sides, 60px top/bottom
- Glow radius: 400-600px for gradient circles
- Particle size: 2-4px
```

#### FLOATING ORB SECTION (Skill Display)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│  SKILLS                                                          │
│  [Orbitron 72px, letter-spacing 0.08em]                          │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                                                            │  │
│  │     [Orb]        [Orb]        [Orb]                      │  │
│  │   React   TypeScript     Next.js                        │  │
│  │   Cyan     Magenta        Violet                         │  │
│  │   ø 120px                                                │  │
│  │                                                            │  │
│  │     [Orb]        [Orb]        [Orb]                      │  │
│  │   Node.js   Python       TailwindCSS                     │  │
│  │  Lime     Violet         Cyan                            │  │
│  │                                                            │  │
│  │     [Orb]        [Orb]                                   │  │
│  │   WebGL   Three.js                                       │  │
│  │  Magenta   Cyan                                          │  │
│  │                                                            │  │
│  │  [Draggable with constellation lines on clustering]      │  │
│  │  [Hover: scale 1.15x, glow intensity +0.5]             │  │
│  │                                                            │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘

MEASUREMENTS (4K):
- Orb Size (ø): 120px
- Orb Spacing: 200px (center-to-center)
- Grid Layout: 3 columns x 2-3 rows
- Label Font: 14px Exo 2 600
- Label Distance Below: 50px
- Glow Ring: 4px border, 20px blur
- Canvas resolution per orb: 1024x1024px (scalable)
```

#### PROJECT CARDS SECTION (Tumbling Cards)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│  PROJECTS                                                        │
│  [Orbitron 72px, tracking 0.08em]                               │
│                                                                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐           │
│  │              │  │              │  │              │           │
│  │   [3D Box]   │  │   [3D Box]   │  │   [3D Box]   │           │
│  │              │  │              │  │              │           │
│  │ PROJECT      │  │ PROJECT      │  │ PROJECT      │           │
│  │ TITLE        │  │ TITLE        │  │ TITLE        │           │
│  │ (Orbitron)   │  │ (Orbitron)   │  │ (Orbitron)   │           │
│  │              │  │              │  │              │           │
│  │ Description  │  │ Description  │  │ Description  │           │
│  │ text with    │  │ text with    │  │ text with    │           │
│  │ overflow     │  │ overflow     │  │ overflow     │           │
│  │ clipping     │  │ clipping     │  │ clipping     │           │
│  │              │  │              │  │              │           │
│  │ [Tags] [+1]  │  │ [Tags] [+2]  │  │ [Tags]       │           │
│  │              │  │              │  │              │           │
│  │ [View More]  │  │ [View More]  │  │ [View More]  │           │
│  │              │  │              │  │              │           │
│  └──────────────┘  └──────────────┘  └──────────────┘           │
│  [Tumbling @8s]     [Tumbling @8.5s] [Tumbling @9s]            │
│  [Hover: elevation] [Black hole warp] [Glow enhancement]        │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘

MEASUREMENTS (4K):
- Card Width: 380px
- Card Height: 480px
- Card Border Radius: 24px
- Card Spacing: 40px (gap)
- Grid Columns: 3
- Image Placeholder Height: 200px
- Title Font: 28px Orbitron 400
- Description Font: 16px Exo 2 400
- Button Width: 280px, Height: 50px
- Tag Font: 12px Exo 2 600
```

#### COMMS ARRAY (Contact Form)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│  COMMS ARRAY                                                     │
│  [Orbitron 72px, tracking 0.1em, glow: 30px cyan]               │
│  Initialize transmission protocols                               │
│  [Exo 2 20px, color: rgba(255,255,255,0.7)]                     │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                                                            │  │
│  │  OPERATOR CALLSIGN                                       │  │
│  │  [Input field, 100% width, 50px height]                 │  │
│  │  ┌──────────────────────────────────────────────────┐  │  │
│  │  │ Enter your name                                  │  │  │
│  │  └──────────────────────────────────────────────────┘  │  │
│  │                                                            │  │
│  │  TRANSMISSION ENDPOINT                                   │  │
│  │  [Input field with email icon, 100% width, 50px]        │  │
│  │  ┌─────────────────────────────────────────────────────┐ │  │
│  │  │ 📧 your@email.com                                  │ │  │
│  │  └─────────────────────────────────────────────────────┘ │  │
│  │                                                            │  │
│  │  MESSAGE PAYLOAD                                         │  │
│  │  [Textarea, 100% width, 200px height]                   │  │
│  │  ┌──────────────────────────────────────────────────┐  │  │
│  │  │ Your message here...                             │  │  │
│  │  │                                                  │  │  │
│  │  │                                                  │  │  │
│  │  └──────────────────────────────────────────────────┘  │  │
│  │                                                            │  │
│  │  ┌──────────────────────────────────────────────────┐  │  │
│  │  │  📡 TRANSMIT                                     │  │  │
│  │  │     [Signal wave ripple animation on hover]     │  │  │
│  │  └──────────────────────────────────────────────────┘  │  │
│  │                                                            │  │
│  │  ──────────────────────────────────────────────────     │  │
│  │                                                            │  │
│  │  📧 Email               💬 Discord         24/7 Response │  │
│  │  gauravramyadav@        @archduke                        │  │
│  │  gmail.com                                              │  │
│  │                                                            │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘

MEASUREMENTS (4K):
- Container Max-Width: 1000px
- Panel Width: 100% of container
- Input Height: 50px
- Textarea Height: 200px
- Button Height: 60px, Width: 100%
- Label Font: 14px Exo 2 600, color: #00ffff
- Input Font: 16px Exo 2 400, color: #ffffff
- Padding (container): 80px
- Border Radius: 24px (panel)
- Focus Glow: 40px blur, 0.4 opacity cyan
```

---

## Mobile Design Specifications

### Canvas: 1080 x 1920px @ 60fps (Portrait)

#### HERO SECTION (Full viewport)

```
┌──────────────────────────┐
│                          │
│ [Particle system: 200+]  │
│                          │
│                          │
│         GAURAV           │
│   [72px Orbitron 900]    │
│   [Character animation]  │
│   [Glow: 0 0 20px cyan]  │
│                          │
│  Developer               │
│  Explorer                │
│   [20px Exo 2]           │
│   [Tracking 0.1em]       │
│                          │
│ Navigating the void      │
│ of web innovation        │
│   [16px Exo 2 300]       │
│                          │
│   [Explore]              │
│   [Projects]             │
│   [Contact]              │
│  [100% width, 48px tall] │
│                          │
│  [Stack vertically on    │
│   mobile, 12px gap]      │
│                          │
│         ↓                │
│   [Scroll Indicator]     │
│                          │
└──────────────────────────┘

SPECIFICATIONS:
- Viewport: 1080px wide x 1920px tall
- Safe area: 20px sides (1040px content width)
- Hero Title: 72px (scaled down for mobile)
- Subtitle: 20px
- Body: 16px
- Buttons: Full width - 40px, stacked vertically
- Button Height: 48px
- Glow intensity: 60% of desktop (performance)
```

#### FLOATING ORB SECTION (Mobile)

```
┌──────────────────────────┐
│  SKILLS                  │
│  [48px Orbitron 700]     │
│                          │
│  ┌──────┐                │
│  │ Orb  │  React         │
│  │ø80px │  [12px label]  │
│  └──────┘                │
│                          │
│  ┌──────┐                │
│  │ Orb  │  TypeScript    │
│  │ø80px │  [12px label]  │
│  └──────┘                │
│                          │
│  ┌──────┐                │
│  │ Orb  │  Next.js       │
│  │ø80px │  [12px label]  │
│  └──────┘                │
│                          │
│  [Vertical scroll list]  │
│  [Dragging enabled]      │
│  [Simplified physics]    │
│                          │
└──────────────────────────┘

SPECIFICATIONS:
- Orb Size: 80px (down from 120px)
- Single Column Layout
- Spacing: 80px between orbs
- Canvas per orb: 512x512px (reduced)
- Label: 12px below orb
- Padding: 20px sides
```

#### PROJECT CARDS (Mobile)

```
┌──────────────────────────┐
│  PROJECTS                │
│                          │
│  ┌──────────────────┐    │
│  │   [3D Wireframe] │    │
│  │                  │    │
│  │  PROJECT TITLE   │    │
│  │                  │    │
│  │ Short            │    │
│  │ description      │    │
│  │ text...          │    │
│  │                  │    │
│  │ [Tags] [+1]      │    │
│  │                  │    │
│  │ [View More]      │    │
│  │                  │    │
│  └──────────────────┘    │
│  [Full width - 40px]     │
│  [Tumble duration: 10s]  │
│  [Slower for performance]│
│                          │
│  ┌──────────────────┐    │
│  │   [Next card]    │    │
│  │                  │    │
│  └──────────────────┘    │
│                          │
│  [Vertical scroll grid]  │
│  [Single column]         │
│                          │
└──────────────────────────┘

SPECIFICATIONS:
- Card Width: 100% - 40px (1000px)
- Card Height: 400px
- Border Radius: 16px (down from 24px)
- Spacing: 20px between cards
- Title Font: 20px Orbitron 400
- Description: 14px Exo 2 400
```

#### COMMS ARRAY (Mobile)

```
┌──────────────────────────┐
│  COMMS ARRAY             │
│  [48px Orbitron]         │
│                          │
│  Initialize transmission │
│  [14px Exo 2]            │
│                          │
│  ┌──────────────────┐    │
│  │ OPERATOR CALLSIGN│    │
│  │ ┌──────────────┐ │    │
│  │ │ Enter name   │ │    │
│  │ └──────────────┘ │    │
│  │                  │    │
│  │ TRANSMISSION END │    │
│  │ ┌──────────────┐ │    │
│  │ │📧 email     │ │    │
│  │ └──────────────┘ │    │
│  │                  │    │
│  │ MESSAGE PAYLOAD  │    │
│  │ ┌──────────────┐ │    │
│  │ │ Message...   │ │    │
│  │ │              │ │    │
│  │ └──────────────┘ │    │
│  │                  │    │
│  │ ┌──────────────┐ │    │
│  │ │ 📡 TRANSMIT  │ │    │
│  │ └──────────────┘ │    │
│  │                  │    │
│  └──────────────────┘    │
│  [100% width - 40px]     │
│                          │
│  📧 Discord      24/7    │
│  Email          Response │
│                          │
└──────────────────────────┘

SPECIFICATIONS:
- Container: 100% - 40px padding
- Input Height: 46px
- Textarea Height: 120px
- Button Height: 52px
- All text scaled to mobile-optimized sizes
- Padding: 40px
- Border Radius: 16px
```

#### HOLOGRAPHIC NAV (Mobile)

```
┌──────────────────────────┐
│ [≡] Menu Button          │
│ (Top-right, 20px margin) │
│                          │
│ [When expanded]:         │
│                          │
│ ├─ 🏠 Home               │
│ ├─ 📄 About              │
│ ├─ 💼 Projects           │
│ ├─ 💻 Skills             │
│ └─ 📧 Contact            │
│                          │
│ [Full-screen backdrop]   │
│ [Vertical stack]         │
│ [50px button height]     │
│ [100% width - 40px]      │
│                          │
└──────────────────────────┘

SPECIFICATIONS:
- Toggle Button: 48px diameter circle
- Menu Items: Full width, 50px height
- Font: 16px Exo 2 600
- Gap: 12px between items
- Padding: 20px all sides
- Backdrop blur: 10px
```

---

## Design Tokens & Measurements

### Spacing Scale (8px base)

```
--space-0: 0px
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-6: 24px
--space-8: 32px
--space-12: 48px
--space-16: 64px
--space-20: 80px
--space-24: 96px
--space-32: 128px
--space-40: 160px
--space-48: 192px
--space-64: 256px
```

### Border Radius

```
--radius-xs: 4px   (minimal buttons)
--radius-sm: 8px   (small elements)
--radius-md: 12px  (medium cards)
--radius-lg: 16px  (large panels)
--radius-xl: 20px  (extra large)
--radius-2xl: 24px (section containers)
--radius-full: 50% (orbs, circles)
```

### Typography Scale

```
--text-xs: 12px   / 16px height
--text-sm: 14px   / 20px height
--text-base: 16px / 24px height
--text-lg: 18px   / 28px height
--text-xl: 20px   / 30px height
--text-2xl: 24px  / 32px height
--text-3xl: 28px  / 36px height
--text-4xl: 32px  / 40px height
--text-5xl: 40px  / 48px height
--text-6xl: 48px  / 56px height
--text-7xl: 60px  / 72px height
--text-8xl: 72px  / 84px height
--text-9xl: 96px  / 112px height
```

### Shadow Scale

```
--shadow-sm: 0 1px 2px 0 rgba(0,0,0,0.05)
--shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1)
--shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.15)
--shadow-xl: 0 20px 25px -5px rgba(0,0,0,0.2)
--shadow-2xl: 0 25px 50px -12px rgba(0,0,0,0.3)

--glow-sm: 0 0 10px rgba(0,255,255,0.3)
--glow-md: 0 0 20px rgba(0,255,255,0.5)
--glow-lg: 0 0 40px rgba(0,255,255,0.6)
--glow-xl: 0 0 60px rgba(0,255,255,0.8)
```

### Z-Index Scale

```
--z-hide: -1      (hidden elements)
--z-base: 0       (default)
--z-dropdown: 10  (menus, modals background)
--z-sticky: 20    (sticky headers)
--z-fixed: 30     (fixed nav)
--z-modal-bg: 40  (modal backdrop)
--z-modal: 50     (modal content)
--z-popover: 60   (tooltips, popovers)
--z-notification: 70 (toasts, alerts)
--z-top: 99999    (emergency coverage)
```

---

## Component Layouts

### FloatingOrb Component Layout (4K)

```
┌─ Container (absolute positioned) ─────────┐
│ ┌─ Canvas (3D Orb) ───────────────────┐  │
│ │  [Three.js Icosahedron]             │  │
│ │  - rotateX: continuous              │  │
│ │  - rotateY: continuous              │  │
│ │  - MeshDistortMaterial glow         │  │
│ │  - Point light following cursor     │  │
│ └─────────────────────────────────────┘  │
│                                          │
│ ┌─ Label ──────────────────────────────┐ │
│ │ "React" (centered below, 14px)       │ │
│ │ text-shadow: 0 0 10px #00ffff       │ │
│ └─────────────────────────────────────┘  │
│                                          │
│ ┌─ Glow Ring ───────────────────────────┐ │
│ │ border: 4px solid glowColor          │ │
│ │ box-shadow: 0 0 15px glowColor       │ │
│ │ animation: beacon-pulse 2s infinite  │ │
│ └─────────────────────────────────────┘  │
│                                          │
│ [Constellation Lines - SVG overlay]      │
│ (Drawn between nearby orbs)               │
└──────────────────────────────────────────┘
```

### GravitationalHero Section Layout

```
┌─ Hero Container (100vh) ──────────────┐
│                                       │
│ ┌─ Background Glows ────────────────┐ │
│ │ - Cyan radial gradient (top-left) │ │
│ │ - Magenta radial gradient (bot)   │ │
│ │ - Follows cursor with parallax    │ │
│ └───────────────────────────────────┘ │
│                                       │
│ ┌─ Content Container (centered) ────┐ │
│ │                                   │ │
│ │  ┌─ Name Characters ────────────┐ │ │
│ │  │ G A U R A V (split animation) │ │ │
│ │  │ [Hover per-character effect]  │ │ │
│ │  └───────────────────────────────┘ │ │
│ │                                   │ │
│ │  ┌─ Title ────────────────────────┐ │ │
│ │  │ Developer Explorer             │ │ │
│ │  │ [Exo 2, glow: multi-layer]     │ │ │
│ │  └───────────────────────────────┘ │ │
│ │                                   │ │
│ │  ┌─ Subtitle ─────────────────────┐ │ │
│ │  │ Navigating the void...         │ │ │
│ │  │ [Ethereal, lower opacity]      │ │ │
│ │  └───────────────────────────────┘ │ │
│ │                                   │ │
│ │  ┌─ CTA Buttons ──────────────────┐ │ │
│ │  │ [Explore] | [Contact]          │ │ │
│ │  │ [Glass panel hover effects]     │ │ │
│ │  └───────────────────────────────┘ │ │
│ │                                   │ │
│ └───────────────────────────────────┘ │
│                                       │
│ ┌─ Scroll Indicator (bottom) ────────┐ │
│ │ [Pulsing arrow/dot with label]     │ │
│ └───────────────────────────────────┘ │
│                                       │
└───────────────────────────────────────┘
```

---

## Responsive Breakpoints

### Tailwind Extended Configuration

```css
/* Base: Mobile-first */
/* xs: 0px   (mobile small) */
/* sm: 640px (mobile large) */
/* md: 768px (tablet) */
/* lg: 1024px (small laptop) */
/* xl: 1280px (desktop) */
/* 2xl: 1536px (large desktop) */
/* 4k: 2560px (4K ultra-wide) */
```

### Implementation Example

```tsx
// Desktop 4K
@media (min-width: 2560px) {
  .hero-title { font-size: 144px; }
  .orb-size { width: 120px; height: 120px; }
  .card-width { width: 380px; }
  .particle-count { --particle-count: 500; }
}

// Large Desktop (1920px)
@media (min-width: 1920px) {
  .hero-title { font-size: 96px; }
  .orb-size { width: 100px; height: 100px; }
  .card-width { width: 320px; }
  .particle-count { --particle-count: 300; }
}

// Desktop (1280px)
@media (min-width: 1280px) {
  .hero-title { font-size: 72px; }
  .orb-size { width: 80px; height: 80px; }
  .card-width { width: 280px; }
}

// Tablet (768px)
@media (min-width: 768px) and (max-width: 1024px) {
  .hero-title { font-size: 56px; }
  .orb-size { width: 70px; height: 70px; }
  .card-width { 100% - 40px; }
  .cards-per-row { 2; }
}

// Mobile (under 640px)
@media (max-width: 640px) {
  .hero-title { font-size: 42px; }
  .orb-size { width: 60px; height: 60px; }
  .card-width { 100% - 40px; }
  .cards-per-row { 1; }
  .glow-intensity { 0.6; } /* Reduced for performance */
}
```

---

## Accessibility Specifications

### WCAG AA Compliance Checklist

- [ ] **Minimum contrast ratio**: 4.5:1 for normal text, 3:1 for large text
- [ ] **Focus indicators**: Visible 2px outline, minimum 2px offset
- [ ] **Keyboard navigation**: All interactive elements accessible via Tab
- [ ] **ARIA labels**: All buttons and regions properly labeled
- [ ] **Motion**: Animations respect `prefers-reduced-motion`
- [ ] **Images**: All images have descriptive alt text
- [ ] **Color**: Information not conveyed by color alone
- [ ] **Language**: Page language declared in HTML
- [ ] **Form validation**: Clear error messages and recovery options
- [ ] **Skip links**: Quick navigation to main content

### High-Contrast Mode Specifications

```css
[data-contrast="high"] {
  --text-primary: #ffffff;
  --bg-primary: #000000;
  --accent: #ffff00 (instead of cyan);
  
  /* Increase border widths */
  --border-width: 2px;
  
  /* Remove subtle glows, use solid colors */
  --glow-intensity: 0;
  --shadow-opacity: 0.5;
  
  /* Remove animations that might interfere */
  --animation-duration: 0ms;
}
```

### Keyboard Navigation Map

```
Tab              → Navigate forward through interactive elements
Shift + Tab      → Navigate backward
Enter / Space    → Activate buttons, open menus
Escape           → Close modals/menus
Arrow Keys       → Rotate navigation ring (when focused)
  ↑ / →          → Next menu item
  ↓ / ←          → Previous menu item
```

---

## Final Checklist

- [ ] All mockups completed in Figma (4K + mobile variants)
- [ ] Design tokens exported to CSS variables
- [ ] Component specs documented with measurements
- [ ] Responsive breakpoints defined
- [ ] Accessibility guidelines reviewed
- [ ] Performance targets established
- [ ] Animation specifications finalized
- [ ] Color palette validated for WCAG compliance
- [ ] Typography scale tested on all devices
- [ ] Deployment ready for implementation

