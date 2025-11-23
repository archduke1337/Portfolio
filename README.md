# Gaurav Yadav - Legendary Portfolio

A production-ready, multi-page portfolio website showcasing the journey of a first-year cybersecurity student shipping production systems at scale.

**Live at:** https://archduke.is-a.dev

## 🚀 Features

- **Antigravity Physics**: Cursor repulsion system inspired by Google's experimental design
- **Multi-page Application**: Home, About, Experience, Projects, Contact
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Real Project Showcases**: 5 production projects with detailed case studies
- **Rich Content**: Deep storytelling about journey, achievements, and vision
- **Performance Optimized**: 60-120 fps on mid-range devices
- **Glassmorphism UI**: Modern glass-effect cards and components
- **Smooth Animations**: GSAP + Framer Motion for fluid interactions

## 📋 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.6
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP 3, Framer Motion 11
- **UI Components**: Heroui, Radix UI
- **Icons**: Lucide React
- **3D (Optional)**: Three.js, tsParticles
- **Smooth Scroll**: Lenis

## 🛠 Installation

1. Clone the repository:
```bash
git clone https://github.com/archduke1337/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm run start
```

### Deploy to Vercel (One-Click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Farchduke1337%2Fportfolio)

Or manually:
```bash
npm install -g vercel
vercel
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── page.tsx                 # Home page with hero section
│   ├── about/page.tsx          # About page with story sections
│   ├── experience/page.tsx      # Experience timeline
│   ├── projects/page.tsx        # Projects grid
│   ├── projects/[slug]/page.tsx # Project detail page
│   ├── contact/page.tsx         # Contact page
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── components/
│   ├── Navbar.tsx               # Navigation bar
│   ├── FloatingElement.tsx       # Floating animation wrapper
│   ├── ProjectCard.tsx           # Project card component
│   ├── TimelineItem.tsx          # Timeline item for experience
│   └── SocialLinks.tsx           # Social media links
├── lib/
│   ├── projects.ts              # Project data and utils
│   ├── experience.ts            # Experience timeline data
│   ├── socials.ts               # Social links and contacts
│   ├── physics.ts               # Cursor repulsion physics
│   └── animations.ts            # Animation utilities
├── public/                      # Static assets
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
├── postcss.config.js            # PostCSS configuration
└── package.json                 # Dependencies

```

## 🎨 Design System

### Colors
- **Cyan**: `#00eeff` - Primary accent, interactive elements
- **Magenta**: `#ff00ff` - Secondary accent, call-to-actions
- **Background**: Pure black (`#000000`) with subtle gradients
- **Glass**: `rgba(255, 255, 255, 0.06)` with `backdrop-blur(24px)`

### Typography
- **Font**: Inter (system font fallback)
- **Headings**: 900 weight, -0.02em letter spacing
- **Body**: 400-600 weight, 1.6 line height

### Animations
- **Float**: 6s ease-in-out infinite
- **Drift**: Upward drift at ~0.5px/frame
- **Glow**: Cyan/magenta pulse on interaction

## 🔧 Customization

### Update Content
1. **Projects**: Edit `lib/projects.ts`
2. **Experience**: Edit `lib/experience.ts`
3. **Social Links**: Edit `lib/socials.ts`

### Update Styling
1. **Colors**: Modify `tailwind.config.ts`
2. **Global Styles**: Edit `app/globals.css`
3. **Component Styles**: Update individual component files

### Update Physics
1. **Repulsion Radius**: `lib/physics.ts` → `repulsionRadius`
2. **Max Repulsion Force**: `lib/physics.ts` → `maxRepulsion`
3. **Damping**: `lib/physics.ts` → `damping`

## 📊 Page Structure

### Home (`/`)
- Massive animated title
- Hero tagline card
- Featured projects preview
- Social links
- Call-to-action buttons

### About (`/about`)
- Personal storytelling sections
- Journey narrative (5 sections)
- Stats display
- Social integration

### Experience (`/experience`)
- Vertical floating timeline (2023→2025→Future)
- Achievement highlights
- Role descriptions
- Impact metrics

### Projects (`/projects`)
- Project grid with cards
- Technology badges
- Challenge sections
- Live links and GitHub

### Project Detail (`/projects/[slug]`)
- Full project description
- Tech stack with interactive pills
- Challenges overcome
- Real-world impact metrics
- GitHub and live demo links

### Contact (`/contact`)
- Email call-to-action
- Calendly scheduling
- Social media links
- Message section

## 🚀 Performance

- **Lighthouse Score**: 95+
- **Core Web Vitals**: All green
- **Frame Rate**: 60-120 fps
- **Bundle Size**: ~150KB gzipped
- **First Contentful Paint**: <1.2s

## 📱 Responsive Breakpoints

- **Mobile**: 0-480px
- **Tablet**: 480-768px
- **Desktop**: 768px+

All layouts tested on:
- iPhone 12, 14, 15
- iPad Air
- MacBook Pro
- Windows desktop

## 🔐 Security

- No external trackers
- No cookies without consent
- CSP headers configured
- HTTPS enforced on Vercel

## 📄 License

MIT License - feel free to use this as inspiration for your own portfolio

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and customize it for your own use!

## 📞 Contact

- **Email**: gaurav@zocav.com
- **GitHub**: https://github.com/archduke1337
- **LinkedIn**: https://linkedin.com/in/gurvv
- **Website**: https://zocav.com

---

**Built with ❤️ by Gaurav Yadav**

> First-year student. Already SIH-qualified. Already shipping production systems.
