# Contributing to 212 Studio

## Development Workflow

### Setup
```bash
# Clone repository
git clone https://github.com/rafdotworks/212-studio.git
cd studio212

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Making Changes

1. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes**
   - Edit `src/App.jsx` for content and layout
   - Edit `documents/MANIFESTO.md` for manifesto text
   - Add images to `public/images/` folder

3. **Test locally**
   ```bash
   pnpm dev
   ```
   - Check responsiveness at different screen sizes
   - Test all navigation links
   - Verify visual consistency

4. **Commit changes**
   ```bash
   git add .
   git commit -m "Clear description of what changed"
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

### Commit Message Guidelines

Use clear, descriptive commit messages:

**Good:**
- `Add new project: Municipal Systems Interface`
- `Update contact email`
- `Fix spacing in project grid`
- `Update manifesto with 2026 revisions`

**Avoid:**
- `fix stuff`
- `updates`
- `wip`

## Code Style

### React Components
- Use functional components with hooks
- Keep components in `App.jsx` for simplicity
- Use inline styles for component-specific styling

### Styling
- Use the `rootStyles` object for global colors/fonts
- Maintain consistent spacing (multiples of 4px)
- Keep mobile breakpoint at 768px

### Project Structure
```jsx
// Each project should follow this pattern:
<div className="project-block" style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '16px'
}}>
  {/* Hero image */}
  {/* Title and metadata */}
  {/* Description */}
  {/* Detail images */}
  {/* Caption */}
</div>
```

## Design Principles

When making changes, maintain these principles from the manifesto:

### Intent Before Execution
- Every element should serve a clear purpose
- Avoid adding features "just because"
- Consider: Does this support the studio's philosophy?

### Simplicity Over Noise
- Prefer removing over adding
- Use whitespace generously
- Keep interactions minimal and purposeful

### Coherence Over Novelty
- Maintain visual consistency
- Use established patterns
- Don't introduce new styles arbitrarily

### Restraint
- What you leave out matters
- Less is often more
- Edit ruthlessly

## Content Guidelines

### Writing Tone
- Clear and direct
- Professional but not corporate
- Confident without being boastful
- Focus on the work, not the accolades

### Project Descriptions
- Start with what the project is
- Explain the approach or challenge
- Keep it concise (2-3 sentences)
- Focus on alignment of space, systems, people

### Image Quality
- Minimum 1920px width for hero images
- Use WebP format when possible
- Optimize file sizes (aim for <500KB)
- Ensure images are well-composed and high quality

## Testing

### Before Submitting a PR

**Visual Testing:**
- [ ] Desktop layout looks correct (1440px+)
- [ ] Tablet layout works (768-1024px)
- [ ] Mobile layout adapts properly (<768px)
- [ ] All images load correctly
- [ ] Typography is consistent

**Functional Testing:**
- [ ] All navigation links work
- [ ] Email links open mail client
- [ ] No console errors
- [ ] Smooth scrolling behavior

**Content Testing:**
- [ ] No typos or grammatical errors
- [ ] All years/dates are current
- [ ] Contact information is accurate
- [ ] Project metadata is complete

### Build Testing
```bash
# Create production build
pnpm build

# Test production build locally
pnpm preview
```

## Deployment

### Automatic Deployment
- Merging to `main` triggers automatic Vercel deployment
- Preview deployments created for all PRs
- Check Vercel dashboard for build status

### Manual Deployment
```bash
# Deploy to production
vercel --prod
```

## File Structure

### What Goes Where

**`src/App.jsx`**
- All React components
- Page layouts
- Navigation
- Styling

**`documents/`**
- Manifesto
- Any other markdown content

**`public/`**
- Images
- Static assets
- Favicon

**Root Directory**
- README, CHANGELOG, CONTRIBUTING
- Configuration files (vite.config.js, package.json)

## Common Tasks

### Adding a New Project
1. Copy existing project block in `HomePage` component
2. Update title, category, year
3. Replace images
4. Write description
5. Test on mobile and desktop

### Updating Contact Information
1. Edit `ContactPage` component
2. Update email link
3. Test that mailto: link works

### Modifying Layout Spacing
1. Check `rootStyles.spacingUnit` (4px base)
2. Maintain consistent multiples (8px, 16px, 24px, etc.)
3. Test on different screen sizes

### Changing Colors
1. Update `rootStyles` object
2. Maintain sufficient contrast for accessibility
3. Test throughout entire site

## Getting Help

- Check README.md for documentation
- Review CHANGELOG.md for project history
- Refer to manifesto for design philosophy
- Contact: raf@212studio.works

## Questions?

When in doubt, ask: *"Does this align with the manifesto?"*

- Does it serve a clear purpose?
- Is it simple and restrained?
- Is it coherent with existing design?
- Does it respect the user's attention?

---

Thank you for contributing to 212 Studio.
