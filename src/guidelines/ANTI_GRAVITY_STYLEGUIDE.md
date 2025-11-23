# Anti-Gravity Portfolio Design System & Styleguide

## Table of Contents
1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Glassmorphism System](#glassmorphism-system)
4. [Anti-Gravity Animations](#anti-gravity-animations)
5. [Component Architecture](#component-architecture)
6. [Accessibility Guidelines](#accessibility-guidelines)
7. [Performance Optimization](#performance-optimization)

---

## Color Palette

### Primary Cosmic Colors

```css
/* Pure Cosmic Black */
--bg-cosmic: #000000;
--bg-cosmic-void: #0f0f23;
--bg-cosmic-deep: #1a0a33;

/* Primary Text */
--text-cosmic: #ffffff;
--text-cosmic-muted: #b0b0b0;

/* Borders */
--border-cosmic: #2a0a2e;

/* Accent Colors - Neon Palette */
--accent-cyan: #00ffff;      /* Primary accent - high visibility */
--accent-magenta: #ff00ff;   /* Secondary accent - emphasis */
--accent-violet: #aa00ff;    /* Tertiary - subtle highlight */
--accent-lime: #00ff88;      /* Success/positive states */

/* Glassmorphism */
--glass-bg: rgba(0, 0, 0, 0.7);
--glass-border: rgba(255, 255, 255, 0.1);
--glass-blur: 10px;
```

### Glow Effects

```css
--glow-cyan: 0 0 20px rgba(0, 255, 255, 0.5);
--glow-magenta: 0 0 20px rgba(255, 0, 255, 0.5);
--glow-violet: 0 0 20px rgba(170, 0, 255, 0.5);
--glow-cyan-intense: 0 0 40px rgba(0, 255, 255, 0.8);
--glow-magenta-intense: 0 0 40px rgba(255, 0, 255, 0.8);
```

### Color Usage Guide

| Element | Color | Purpose |
|---------|-------|---------|
| Primary Text | #ffffff | Main readable content |
| Hero Title | #00ffff | Eye-catching, welcoming |
| Interactive Elements | #00ffff → #aa00ff | Gradient for depth |
| Success States | #00ff88 | Positive feedback |
| Borders | rgba(255,255,255,0.1) | Subtle separation |
| Backgrounds | #000000 | Pure void aesthetic |
| Glows | Various with 20-40px blur | Ethereal effect |

---

## Typography

### Font Stack

```css
/* Headings - Futuristic */
font-family: 'Orbitron', sans-serif;
font-weights: 400, 700, 900;
letter-spacing: 0.05em to 0.1em;

/* Body Text - Clean, Modern */
font-family: 'Exo 2', sans-serif;
font-weights: 300, 400, 500, 600, 700, 800;
letter-spacing: 0em to 0.05em;

/* Code/Monospace */
font-family: 'JetBrains Mono', monospace;
font-weights: 400, 500, 600;
```

### Typography Scale

```css
/* Headings */
h1 (Hero Name):     72px - 144px | Orbitron 900 | tracking: 0.1em
h2 (Section):       48px - 64px  | Orbitron 700 | tracking: 0.08em
h3 (Subsection):    32px - 40px  | Orbitron 700 | tracking: 0.06em
h4 (Card Title):    24px         | Orbitron 400 | tracking: 0.04em

/* Body */
Body Large:         18px         | Exo 2 400 | tracking: 0.02em
Body Regular:       16px         | Exo 2 400 | tracking: 0em
Body Small:         14px         | Exo 2 300 | tracking: -0.02em
Caption:            12px         | Exo 2 500 | tracking: 0.05em
```

### Text Effects

```css
/* Glowing text for hero */
text-shadow: 
  0 0 10px rgba(0, 255, 255, 0.6),
  0 0 20px rgba(0, 255, 255, 0.3),
  0 0 30px rgba(170, 0, 255, 0.1);

/* High-contrast accessible mode */
text-shadow: 
  0 0 5px rgba(0, 0, 0, 0.8);
color: #ffffff;
```

---

## Glassmorphism System

### Glass Panel Base

```css
.glass-panel {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  box-shadow: 
    inset 0 1px 0 0 rgba(255, 255, 255, 0.1),
    0 8px 32px 0 rgba(0, 0, 0, 0.3),
    0 0 20px rgba(0, 255, 255, 0.1);
}
```

### Glass Panel Enhanced (with glow)

```css
.glass-panel-glow {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  box-shadow: 
    inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
    0 8px 32px 0 rgba(0, 0, 0, 0.3),
    0 0 30px rgba(0, 255, 255, 0.2),
    0 0 60px rgba(255, 0, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-panel-glow:hover {
  border-color: rgba(0, 255, 255, 0.4);
  box-shadow: 
    inset 0 2px 8px rgba(255, 255, 255, 0.15),
    0 20px 60px rgba(0, 0, 0, 0.4),
    0 0 50px rgba(0, 255, 255, 0.3),
    0 0 100px rgba(170, 0, 255, 0.15);
}
```

### Glass Card (for larger containers)

```css
.glass-card {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1.5px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  box-shadow: 
    inset 0 2px 4px rgba(255, 255, 255, 0.08),
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 40px rgba(0, 255, 255, 0.15);
}
```

---

## Anti-Gravity Animations

### Levitation Effects

```css
/* Gentle floating */
@keyframes levitate {
  0%, 100% { transform: translateY(0px) translateZ(0); }
  50% { transform: translateY(-20px) translateZ(0); }
}

/* Slower levitation for large elements */
@keyframes levitate-slow {
  0%, 100% { transform: translateY(0px) translateZ(0); }
  50% { transform: translateY(-30px) translateZ(0); }
}

/* Quick levitation for interactive elements */
@keyframes levitate-fast {
  0%, 100% { transform: translateY(0px) translateZ(0); }
  50% { transform: translateY(-10px) translateZ(0); }
}

/* Usage */
.float-up { animation: levitate 4s ease-in-out infinite; }
.float-up-slow { animation: levitate-slow 6s ease-in-out infinite; }
.float-up-fast { animation: levitate-fast 2.5s ease-in-out infinite; }
```

### Tumbling/Rotation

```css
@keyframes tumble {
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(180deg) rotateZ(90deg);
  }
}

/* Usage */
.tumble { animation: tumble 8s linear infinite; }
```

### Glow Wave

```css
@keyframes text-glow-wave {
  0%, 100% {
    text-shadow: 
      0 0 10px rgba(0, 255, 255, 0.6),
      0 0 20px rgba(0, 255, 255, 0.3),
      0 0 30px rgba(170, 0, 255, 0.1);
  }
  50% {
    text-shadow: 
      0 0 20px rgba(0, 255, 255, 0.8),
      0 0 40px rgba(0, 255, 255, 0.5),
      0 0 60px rgba(170, 0, 255, 0.2);
  }
}

.glow-text { animation: text-glow-wave 3s ease-in-out infinite; }
```

### Signal Wave (for buttons/forms)

```css
@keyframes signal-wave {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.4;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}
```

### Beacon Pulse (for navigation)

```css
@keyframes beacon-pulse {
  0%, 100% {
    box-shadow: 
      0 0 10px rgba(0, 255, 255, 0.4),
      0 0 20px rgba(0, 255, 255, 0.2);
    opacity: 1;
  }
  50% {
    box-shadow: 
      0 0 20px rgba(0, 255, 255, 0.8),
      0 0 40px rgba(0, 255, 255, 0.4),
      0 0 60px rgba(170, 0, 255, 0.2);
    opacity: 0.8;
  }
}

.pulse-beacon { animation: beacon-pulse 2s ease-in-out infinite; }
```

### Black Hole Warp

```css
@keyframes black-hole-warp {
  0%, 100% { clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%); }
  25% { clip-path: polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%); }
  50% { clip-path: polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%); }
  75% { clip-path: polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%); }
}
```

---

## Component Architecture

### FloatingOrb Component

**Purpose**: Draggable, interactive skill spheres with 3D rendering

**Props**:
```typescript
interface FloatingOrbProps {
  label: string;           // Skill name
  color: string;          // Hex color for sphere
  glowColor: string;      // Glow effect color
  position?: { x: number; y: number };
  onDrag?: (position) => void;
  onHover?: (isHovering: boolean) => void;
  size?: number;          // Default 80px
  speed?: number;         // Rotation speed (default 2)
}
```

**Features**:
- 3D icosahedron mesh with distortion material
- Draggable within container bounds
- Hover expansion with glow intensification
- Label appears below with glow text
- Respects reduced-motion preferences

### GravitationalHero Component

**Purpose**: Eye-catching hero section with warped, floating typography

**Features**:
- Split-character animation with individual hover states
- Cursor position tracking for gravitational pull
- Gradient text with multi-layer glow
- Subtitle with ethereal opacity
- CTA buttons with glassmorphism and hover effects
- Scroll indicator with pulsing animation

### HolographicNav Component

**Purpose**: Ring-based navigation menu with holographic effect

**Features**:
- Expandable ring menu (desktop) or dropdown (mobile)
- Rotates continuously when expanded
- Icon buttons orbit around center on expansion
- Pulsing beacon effect on active items
- Smooth spring animations
- Responsive behavior for mobile/tablet

### AntiGravityCard Component

**Purpose**: Project cards with tumbling animation and 3D effects

**Features**:
- Tumbles continuously with varying speeds per card
- 3D wireframe box in background
- Hover elevation with shadow intensification
- Black hole warp effect on hover
- Tag chips with optional "more" indicator
- CTA button with signal wave effect

### CommsArray Component

**Purpose**: Contact form with transmission theme and signal effects

**Features**:
- Three input fields (name, email, message)
- Focus states with glow intensification
- Signal wave animations on form focus
- Transmission success overlay with checkmark
- Contact info display below form
- Accessible form with semantic HTML

---

## Accessibility Guidelines

### Reduced Motion Queries

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  /* Static versions of animated elements */
  .float-up { animation: none; }
  .spin-vortex { animation: none; }
  .glow-text { animation: none; }
}
```

### High-Contrast Mode

Add a data attribute: `[data-contrast="high"]`

```css
[data-contrast="high"] {
  --text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
}

[data-contrast="high"] .glow-text {
  text-shadow: var(--text-shadow);
}
```

### Keyboard Navigation

- **Tab**: Navigate through interactive elements
- **Enter/Space**: Activate buttons
- **Arrow Keys**: Orbit navigation menu (when focused)
- **Escape**: Close expanded menus

### ARIA Labels

```tsx
<button aria-label="Toggle navigation menu" role="button">
  Menu
</button>

<div role="region" aria-label="Project cards" aria-live="polite">
  {/* Content */}
</div>
```

---

## Performance Optimization

### Image Optimization

- Use WebP with PNG fallback
- Lazy-load below-fold images: `loading="lazy"`
- Optimize asset compression
- Use srcset for responsive images

### 3D/Canvas Optimization

```javascript
// Frame skipping for low-performance devices
const frameSkip = performance === 'low' ? 3 : 1;
let frameCount = 0;

useFrame(() => {
  frameCount++;
  if (frameCount % frameSkip !== 0) return;
  // Perform heavy calculations
});
```

### Bundle Size

- Lazy-load Three.js components
- Code-split heavy animations
- Tree-shake unused utilities
- Target bundle size: <400KB (gzipped)

### FCP/LCP Targets

- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **Time to Interactive**: <3.5s

---

## Usage Examples

### Basic Glassmorphism Panel

```html
<div class="glass-panel">
  Content here
</div>
```

### Floating Element

```html
<div class="float-up">
  <h2 class="glow-text">Floating Heading</h2>
</div>
```

### Interactive Button with Glow

```html
<button
  class="glass-panel-glow px-6 py-3 rounded-lg"
  style="color: #00ffff"
>
  Interact
</button>
```

### Responsive Grid with Anti-Gravity Cards

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div class="glass-card tumble">
    <!-- Card content -->
  </div>
</div>
```

---

## Browser Support

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Backdrop Filter | 76+ | 103+ | 9+ | 79+ |
| CSS Grid | 57+ | 52+ | 10.1+ | 16+ |
| CSS Variables | 49+ | 31+ | 9.1+ | 15+ |
| clip-path | 55+ | 54+ | 15.4+ | 79+ |
| Animation | 43+ | 16+ | 9+ | 12+ |

---

## Migration Guide

### From Previous Design System

1. Replace `--primary` with `--accent-cyan`
2. Use `glass-panel` class instead of custom shadows
3. Apply glassmorphism CSS variables
4. Use new animation classes (`.float-up`, `.glow-text`, etc.)
5. Import Orbitron font for headings
6. Test with reduced-motion enabled
7. Validate ARIA labels on interactive elements

---

## Maintenance & Future Updates

- Review performance metrics monthly
- Test accessibility with screen readers quarterly
- Update Three.js when major versions released
- Monitor browser support changes
- Collect user feedback on animation preferences

