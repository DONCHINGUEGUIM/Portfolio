# DN — Personal Portfolio

Dark-themed, single-page portfolio site showcasing my projects, services, and contact info. Built with React and deployed as a static site on Cloudflare Workers.

## Features

- **Hero** — intro, role, availability badge, CTA buttons
- **About** — bio, stats, hire-me block
- **Services** — UI/UX, Web Development, Project Design, Photo & Video Editing (experience per skill)
- **Works** — 6 project cards with custom hand-coded SVG illustrations, filter tabs, GitHub links
- **Contact** — form + contact info
- **Responsive** — mobile menu, sticky navbar, scroll-aware header
- **Social bar** — GitHub, LinkedIn, Instagram shortcuts

## Tech Stack

| Layer | Tool |
|-------|------|
| UI | React 18 (JSX) |
| Styling | Tailwind CSS 3 |
| Bundler | esbuild (custom `scripts/build.mjs`) |
| Icons | lucide-react |
| Class utils | clsx + tailwind-merge |
| Deploy | Cloudflare Workers (Static Assets) |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
git clone https://github.com/DONCHINGUEGUIM/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Local dev server runs at `http://localhost:4000`.

### Build

```bash
npm run build
```

Outputs to `dist/`:

```
dist/
├── index.html        # generated shell
├── index.css         # minified Tailwind
├── assets/index.js   # bundled app
└── images/*.svg      # project illustrations
```

### Deploy

```bash
npx wrangler login   # first time only
npm run deploy
```

`wrangler.jsonc` points `assets.directory` at `./dist` with SPA fallback.

## Project Structure

```
src/
├── main.jsx                  # entry
├── App.jsx                   # root layout
├── index.css                 # global styles + glassmorphism
└── components/
    ├── Navbar.jsx            # fixed nav, active-section tracking
    ├── HeroSection.jsx
    ├── AboutSection.jsx
    ├── ServicesSection.jsx
    ├── WorksSection.jsx      # projects + filters
    ├── ContactSection.jsx
    ├── Footer.jsx
    └── SocialBar.jsx
scripts/
├── build.mjs                 # esbuild + image copy + HTML generation
└── serve.mjs                 # local dev server (port 4000)
public/images/                # custom SVG project art
```

## Author

**Donchi Ngueguim (DN)** — [github.com/DONCHINGUEGUIM](https://github.com/DONCHINGUEGUIM)

## License

MIT
