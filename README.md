# Studio Värn Portfolio Website

A minimal portfolio website built with React, Vite, and React Router.

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at **http://localhost:5173/**

## Available Commands

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Create production build (output in `dist/` folder)
- `pnpm preview` - Preview production build locally

## Project Structure

```
212-studio/
├── src/
│   ├── App.jsx       # Main application component
│   └── main.jsx      # React entry point
├── public/           # Static assets (images, fonts, etc.)
├── index.html        # HTML entry point
├── vite.config.js    # Vite configuration
└── package.json      # Dependencies and scripts
```

## Editing Content

All content and styling is in `src/App.jsx`:

### Navigation
- Edit links in the `Navigation` component (lines 53-115)

### Page Content
Each page has its own component:
- `HomePage` - Landing page
- `SelectedWorksPage` - Portfolio items
- `AtelierPage` - Experimental work
- `PublicationsPage` - Publications list
- `InformationPage` - About/services
- `ContactPage` - Contact form

### Styling
- Global colors and fonts: `rootStyles` object (lines 4-11)
- Component styles: Inline styles in each component
- Responsive breakpoint: 768px (mobile)

### Adding New Pages

1. Create a new component in `App.jsx`:
```jsx
const NewPage = () => {
  return (
    <main style={{ /* styles */ }}>
      {/* Your content */}
    </main>
  );
};
```

2. Add a route in the `App` component:
```jsx
<Route path="/new-page" element={<Layout><NewPage /></Layout>} />
```

3. Add a navigation link in the `Navigation` component:
```jsx
<li className="nav-item">
  <Link to="/new-page">New Page</Link>
</li>
```

### Adding Images

1. Place images in the `public/` folder (e.g., `public/images/photo.jpg`)
2. Reference them with absolute paths: `/images/photo.jpg`

Example:
```jsx
<img src="/images/photo.jpg" alt="Description" />
```

## Building for Production

```bash
# Create optimized production build
pnpm build

# Files will be in the dist/ folder
# Upload the dist/ folder to your web host
```

## Technologies

- **React 18** - UI library
- **React Router 6** - Client-side routing
- **Vite 5** - Build tool and dev server
- **pnpm** - Package manager

## Features

- Fast hot-reload development
- Client-side routing (no page refreshes)
- Responsive design (mobile-friendly)
- Minimal, clean design aesthetic
- Contact form with validation

## Notes

- The contact form currently shows a success message but doesn't send emails (no backend)
- All styling is inline for simplicity (no separate CSS files)
- The dev server runs on port 5173 by default
