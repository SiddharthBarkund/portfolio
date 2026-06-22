# Siddharth Barkund — AI/ML Portfolio

A premium, production-ready portfolio website built with modern web technologies.

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theming**: next-themes (dark/light mode)
- **Typewriter**: react-type-animation

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Home page (assembles sections)
│   ├── loading.tsx        # Loading skeleton
│   └── globals.css        # Global styles & design tokens
├── components/
│   ├── layout/            # Navbar, Footer, ScrollProgress
│   ├── sections/          # 11 page sections (Hero, About, etc.)
│   ├── ui/                # Reusable UI primitives
│   └── providers/         # ThemeProvider
├── data/                  # Content data files (easy to edit!)
│   ├── projects.ts        # Project entries
│   ├── skills.ts          # Skill categories & levels
│   ├── experience.ts      # Work experience
│   ├── certifications.ts  # Certifications
│   ├── achievements.ts    # Achievement items
│   ├── roadmap.ts         # Learning roadmap
│   ├── career-goals.ts    # Career goal entries
│   ├── github.ts          # GitHub profile & repos
│   └── navigation.ts      # Nav menu items
├── types/                 # TypeScript interfaces
│   └── index.ts
└── lib/                   # Utility functions
    └── utils.ts
```

## 🏃 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## ✏️ Editing Content

All content is in the `src/data/` directory. Each file exports a typed array or object that you can easily modify:

| File | Content |
|------|---------|
| `projects.ts` | Project cards (title, description, tech, links) |
| `skills.ts` | Skill categories and proficiency levels |
| `experience.ts` | Work experience timeline |
| `certifications.ts` | Certification cards |
| `achievements.ts` | Achievement entries |
| `roadmap.ts` | Learning roadmap items |
| `career-goals.ts` | Career goal cards |
| `github.ts` | GitHub profile and top repos |
| `navigation.ts` | Navbar menu items |

## 🎨 Customization

### Theme Colors
Edit CSS variables in `src/app/globals.css`:
- `--accent`: Primary accent color (amber/gold)
- `--background`: Page background
- `--card`: Card background with transparency

### Contact Form
The contact form uses [Formspree](https://formspree.io/). To enable it:
1. Create a free Formspree account
2. Create a new form
3. Replace `YOUR_FORM_ID` in `src/components/sections/Contact.tsx` with your form ID

### Resume
Replace `public/resume.pdf` with your actual resume PDF.

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import to [Vercel](https://vercel.com)
3. Deploy — zero configuration needed

### Other Platforms
```bash
npm run build
npm start
```

## 📱 Responsive Breakpoints

- **Mobile**: 375px+
- **Tablet**: 768px+
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

## ✨ Features

- 🌙 Dark/Light theme with persistence
- 🎭 Smooth scroll-triggered animations
- 📱 Fully responsive design
- ⚡ Optimized performance
- 🔍 SEO optimized (metadata, OG tags, sitemap)
- ♿ Accessible (semantic HTML, ARIA labels)
- 📊 GitHub stats integration
- 📬 Working contact form
- 📄 Resume download
- 🎨 Glassmorphism design system

## 📄 License

MIT © Siddharth Barkund
