# 212 Studio

**212 Studio designs environments where space, systems, and people align.**

A minimal, editorial website for a design practice working across physical spaces, digital interfaces, and strategic systems.

## Live Site

- **Production:** https://212-studio-pnckpgmqx-raf-project.vercel.app
- **Repository:** https://github.com/rafdotworks/212-studio

## Philosophy

The website embodies the studio's design principles:
- **Intent before execution** — Every element serves a purpose
- **Simplicity over noise** — Clean, considered layouts
- **Coherence over novelty** — Consistent visual language

The design uses a warm neutral palette, Helvetica Neue typography, and generous spacing to create a calm, focused experience that reflects the studio's approach to design.

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

Development server runs at **http://localhost:5173/**

## Project Structure

```
studio212/
├── src/
│   ├── App.jsx           # Main application and all pages
│   └── main.jsx          # React entry point
├── documents/
│   └── MANIFESTO.md      # Studio manifesto (displayed on Information page)
├── index.html            # HTML entry point with meta tags
├── vite.config.js        # Vite configuration
└── package.json          # Dependencies and scripts
```

## Site Structure

The site consists of three core pages:

### 1. Index (Homepage)
- Hero statement with studio tagline
- Vertical stack of featured projects with large images
- Each project includes: hero image, title, description, detail images, and metadata

### 2. Information
- Full manifesto from `documents/MANIFESTO.md`
- Studio information (founders, established date)
- Practice areas and approach

### 3. Contact
- Simple contact section with email
- No form — direct email link for simplicity

## Working with Projects

Projects are displayed in a vertical stack on the homepage. Each project block includes:

```jsx
<div className="project-block">
  {/* Hero image - main project visual */}
  <svg>...</svg>
  
  {/* Project metadata */}
  <div>
    <h3>Project Title</h3>
    <div>Category • Year</div>
  </div>
  
  {/* Description */}
  <p>Project description...</p>
  
  {/* Detail images in 2-column grid */}
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
    <svg>...</svg>
    <svg>...</svg>
  </div>
  
  {/* Caption for detail images */}
  <div>Caption text...</div>
</div>
```

### Adding a New Project

1. Find the `projects-stack` section in `App.jsx`
2. Copy an existing project block
3. Update the title, category, year, description
4. Replace placeholder SVGs with real images:
   ```jsx
   <img src="/images/project-name.jpg" alt="Project Name" />
   ```
5. Adjust the description and captions

### Removing Projects

Simply delete the entire `<div className="project-block">...</div>` for any project you want to remove.

## Design System

### Colors
```javascript
bgColor: '#F4F3F0'      // Warm neutral background
textColor: '#1A1A1A'    // Near-black text
textSubtle: '#666666'   // Secondary text
```

### Typography
- **Font:** Helvetica Neue, Helvetica, Arial, sans-serif
- **Sizes:** 
  - Hero: 24px
  - Body: 14-16px
  - Metadata: 12-13px

### Spacing
- Base unit: 4px
- Section gaps: 80px
- Project gaps: 100px
- Page margin: 40px

### Layout
- Two-column grid: 240px sidebar + flexible content
- Content max-width: 900px
- Sidebar is sticky with navigation at top, metadata at bottom

## Updating Content

### Manifesto
Edit `documents/MANIFESTO.md` — changes automatically appear on the Information page.

### Contact Email
Update in `ContactPage` component:
```jsx
<a href="mailto:raf@212studio.works">raf@212studio.works</a>
```

### Navigation Metadata
Update in `Navigation` component:
```jsx
<p>2026<br />
Lisbon — London<br />
Independent</p>
```

### Studio Information
Update in `InformationPage` component under the "Practice" section.

## Deployment

The site auto-deploys to Vercel on every push to the `main` branch.

### Manual Deployment
```bash
# Deploy to production
vercel --prod

# Deploy to preview
vercel
```

### Workflow
1. Make changes locally
2. Test with `pnpm dev`
3. Commit and push to GitHub
4. Vercel automatically builds and deploys
5. Check deployment at your production URL

## Technologies

- **React 18** — UI library
- **React Router 6** — Client-side routing
- **Vite 5** — Build tool and development server
- **pnpm** — Package manager
- **Vercel** — Hosting and continuous deployment

## Browser Support

Modern browsers supporting ES6+ and CSS Grid:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Minimal JavaScript bundle (~183KB gzipped)
- No external dependencies beyond React
- Optimized images (use WebP where possible)
- Fast Time to Interactive (TTI)

## Maintenance

### Regular Updates
- Keep dependencies updated: `pnpm update`
- Update project content as work is completed
- Refresh placeholder projects with real work
- Update manifesto if studio approach evolves

### Adding Real Images
1. Optimize images before adding (use WebP format, ~1920px width max)
2. Place in `public/images/` folder
3. Replace SVG placeholders with `<img>` tags
4. Use descriptive alt text for accessibility

## Design Decisions

**Why inline styles?**
- Keeps all page logic in one file
- No build step for CSS
- Easy to understand and modify
- Consistent with the minimal approach

**Why no CMS?**
- Content updates are infrequent
- Direct code editing ensures design quality
- No added complexity or dependencies
- Git provides version control and history

**Why three pages only?**
- Focus on essentials for launch
- Easy to expand later when needed
- Reduces decision fatigue for visitors
- Reflects "restraint" value from manifesto

## Contributing

This is a private studio website. For updates:
1. Create a feature branch
2. Make changes and test locally
3. Create PR for review
4. Merge to main triggers deployment

## License

Private repository — All rights reserved © 212 Studio

---

**212 Studio** — Marianne Ventre and Raf V.  
Established 2019 • Lisbon — London • Independent

Contact: raf@212studio.works
