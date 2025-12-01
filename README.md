# Waypoint Labs - Marketing Site

Independent software studio building tools for truckers, travelers, and creators.

## Tech Stack

- **Framework:** React with Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed
- Or use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) to manage Node versions

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server (runs on http://localhost:8080)
npm run dev
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects grid
│   ├── ProjectCard.tsx # Project card component
│   ├── WhoItsFor.tsx   # Target audience section
│   ├── Roadmap.tsx     # Roadmap section
│   └── Contact.tsx     # Contact section
├── data/               # Content configuration
│   ├── siteConfig.ts   # Site metadata
│   ├── projects.ts     # Projects data
│   └── roadmap.ts      # Roadmap items
├── pages/              # Page components
│   └── Index.tsx       # Main landing page
└── index.css           # Global styles & design tokens
```

## Customizing Content

### Adding/Editing Projects

Edit `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: "unique-id",
    name: "Project Name",
    category: "Category",
    description: "Description here...",
    status: "MVP live soon" | "In development" | "Concept" | "Internal",
    tags: ["Tag1", "Tag2"],
    link: "#"
  }
];
```

### Updating Roadmap

Edit `src/data/roadmap.ts`:

```typescript
export const roadmap: RoadmapItem[] = [
  {
    id: "unique-id",
    title: "Milestone Title",
    description: "Details about this milestone..."
  }
];
```

### Site Configuration

Edit `src/data/siteConfig.ts` to update:
- Site name and tagline
- Contact information
- Social media links

## Design System

The design uses a dark theme with amber accents inspired by night driving and navigation. All colors are defined in `src/index.css` using CSS custom properties:

- `--waypoint-navy`: Deep navy base
- `--waypoint-slate`: Slate for cards
- `--waypoint-amber`: Amber accent
- `--waypoint-border`: Subtle borders

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository at [vercel.com](https://vercel.com)
3. Vercel will auto-detect Vite and configure build settings
4. Click "Deploy"

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and click "Add new site"
3. Connect your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy"

### Deploy via Lovable

This project is built with Lovable. Click the Publish button in the Lovable editor to deploy instantly.

## License

© 2025 Waypoint Labs. All rights reserved.
