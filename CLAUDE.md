# CLAUDE.md

Personal website of Henrique Ferrolho (robotics engineer, PhD in trajectory optimisation for legged robots). Built with Astro 7, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `master`.

## Commands

```bash
npm run dev            # http://localhost:4321 — drafts visible
npm run build          # dist/ — drafts hidden
npm run check          # type-check; keep at 0 errors
npm run refresh:stats  # update GitHub stars and YouTube views (see the refresh-stale skill)
```

The home-page hero embeds the pendulum demo from the rotary-inverted-pendulum repo. For it to load in dev, run that repo's docs too: `npm run dev -- --port 4322` in `~/git/Rotary Inverted Pendulum/website`. Without it the hero shows a static photo, which is expected.

## Layout

- `src/content/projects/*.md` — one page per project; schema in `src/content.config.ts`. Cover images live in `src/assets/projects/`, hover-preview loops in `public/previews/`.
- `src/content/publications/*.md`, `src/content/blog/*.md` — papers and posts. Blog URLs are `/blog/<file name>/`.
- `src/data/` — `site.ts` (name, role, nav, socials), `archive.ts` (small/old projects shown only in the archive), `talks.ts`, `cv.ts`, `videos.ts`, `stats.json` (generated).
- `src/components/` — `ProjectCard`, `PendulumHero` (iframe host for the pendulum embed), `PubRow`, `VideoCard`, `YouTube` (click-to-load embed), `Icon`.
- `public/` — served as-is: `files/` (PDFs), `images/` and `videos/` (used by old posts), favicon set (the Lego mug with the H — sentimental, keep it).
- `astro.config.mjs` — redirects from the old Jekyll URLs. Don't add redirects for renamed projects: old project links are allowed to break.

## Conventions

- Facts come from the user's own sources only: the PDF résumé (`~/git/resume`), repo READMEs, and paper abstracts. Never invent roles, degrees, awards, or numbers. The degrees are BSc + MSc from the University of Porto and a PhD in Robotics and Autonomous Systems from Edinburgh.
- The site's role line stays "Robotics Technical Lead" unless the user says otherwise.
- A project page's file name and URL are the repo's exact name (`src/content/projects/TORA.jl.md` with `slug: TORA.jl` → `/projects/TORA.jl/`); its cover and preview use the same name. When a repo is renamed, rename these to match. Only projects without a single repo (Balanbot, RoLoMa, CreateJS Playground) use descriptive names.
- Projects stay in their own repos (each with its own GitHub Pages at `ferrolho.github.io/<repo>/`); this site links to them rather than hosting them. Avoid project slugs that collide with those repo paths at the root — project pages live under `/projects/`.
- Only public repos appear on the site. `draft: true` hides a project or post in production.
- Design tokens are CSS custom properties in `src/styles/global.css`, with light and dark themes. Fonts: Geist (sans), Geist Mono, Instrument Serif (accents only). Accent is international orange.
- Licence: code MIT, content CC BY 4.0, papers under their publishers' terms (`LICENSE`).
- Commit messages: a single conventional-commit line, no body or trailers.
