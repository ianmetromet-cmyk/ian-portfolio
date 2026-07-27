# Ian Mark Newman — Portfolio

Senior communications strategist portfolio site built with React, Vite, and Tailwind CSS v4.

## Development

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.).

## Assets

Media files are served from `public/assets/`. Copy your `images/`, `video/`, and `docs/` folders there before deploying so campaign media, PDFs, and the resume load correctly. See `public/assets/README.md`.

## Project structure

- `src/App.tsx` — React shell that mounts the portfolio markup
- `src/portfolioBody.html` — Full page content (from the original static site)
- `src/initPortfolio.ts` — Interactions (modals, scroll effects, bilingual toggle, etc.)
- `src/App.css` — Component and layout styles
- `src/index.css` — Global tokens and Tailwind entry
- `index-4.html` — Original static reference (not used in the build)
