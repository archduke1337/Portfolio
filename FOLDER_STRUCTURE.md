# Folder Structure

```
portfolio/
│
├── app/                              # Next.js App Router
│   ├── page.tsx                      # Home page (/)
│   ├── layout.tsx                    # Root layout wrapper
│   ├── globals.css                   # Global styles & animations
│   │
│   ├── about/
│   │   └── page.tsx                  # About page (/about)
│   │
│   ├── experience/
│   │   └── page.tsx                  # Experience timeline (/experience)
│   │
│   ├── projects/
│   │   ├── page.tsx                  # Projects grid (/projects)
│   │   └── [slug]/
│   │       └── page.tsx              # Project detail (/projects/:slug)
│   │
│   └── contact/
│       └── page.tsx                  # Contact page (/contact)
│
├── components/                       # Reusable React components
│   ├── Navbar.tsx                    # Navigation bar (appears on all pages)
│   ├── FloatingElement.tsx            # Wrapper for floating animations
│   ├── ProjectCard.tsx                # Project card component
│   ├── TimelineItem.tsx               # Timeline item component
│   └── SocialLinks.tsx                # Social media icons
│
├── lib/                              # Utilities & data
│   ├── projects.ts                   # Project data, types, helpers
│   ├── experience.ts                 # Experience timeline data
│   ├── socials.ts                    # Social links & contact info
│   ├── physics.ts                    # Cursor repulsion physics hook
│   └── animations.ts                 # GSAP animation utilities
│
├── public/                           # Static assets
│   ├── projects/                     # Project images
│   │   ├── seekengine.png
│   │   ├── swiftformat.png
│   │   ├── room.png
│   │   ├── gilab.png
│   │   └── ecoquest.png
│   ├── favicon.ico
│   └── robots.txt
│
├── .gitignore                        # Git ignore rules
├── package.json                      # Dependencies & scripts
├── package-lock.json                 # Lock file
├── next.config.js                    # Next.js configuration
├── tsconfig.json                     # TypeScript configuration
├── tailwind.config.ts                # Tailwind CSS configuration
├── postcss.config.js                 # PostCSS configuration
└── README.md                         # This file
```

## File Descriptions

### App Files
- **app/page.tsx**: Home page with hero section, featured projects, and social links
- **app/layout.tsx**: Root layout with metadata, background gradients, and CSS reset
- **app/globals.css**: Global styles, animations, glassmorphism utilities, typography system
- **app/about/page.tsx**: Storytelling page with 5 personal journey sections and stats
- **app/experience/page.tsx**: Vertical timeline from 2023→2025→Future with achievements
- **app/projects/page.tsx**: Grid layout showcasing all featured projects with details
- **app/projects/[slug]/page.tsx**: Individual project pages with full case studies

### Components
- **Navbar.tsx**: Fixed navigation with links to all pages
- **FloatingElement.tsx**: Wrapper component applying floating animations to children
- **ProjectCard.tsx**: Reusable card displaying project summary with tech stack
- **TimelineItem.tsx**: Individual timeline entry with type-specific styling
- **SocialLinks.tsx**: Animated social media icon grid with hover effects

### Libraries
- **projects.ts**: Project data array, interfaces, and utility functions
- **experience.ts**: Timeline data, types, and filtering utilities
- **socials.ts**: Social links array and contact information
- **physics.ts**: Custom React hook for cursor repulsion physics
- **animations.ts**: GSAP scroll animations and text reveal effects

### Config Files
- **package.json**: npm dependencies and build scripts
- **next.config.js**: Next.js build configuration
- **tsconfig.json**: TypeScript compiler options
- **tailwind.config.ts**: Tailwind CSS theme and extensions
- **postcss.config.js**: PostCSS plugin configuration
