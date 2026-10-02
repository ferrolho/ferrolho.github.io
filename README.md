# ferrolho.github.io

Personal site of Henrique Ferrolho — projects, research, talks, and writing.
Built with [Astro](https://astro.build) and deployed to GitHub Pages by GitHub Actions.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321 — drafts are visible here
npm run build     # production build in dist/ — drafts are hidden
npm run preview   # serve dist/ locally
npm run check     # type-check content and components
```

Requires Node 22.12 or newer.

## Where things live

| Path | What |
| --- | --- |
| `src/content/projects/*.md` | One file per project page in the gallery |
| `src/content/publications/*.md` | Papers (abstract and videos in the body) |
| `src/content/blog/*.md` | Blog posts; URL is `/blog/<file name>/` |
| `src/data/archive.ts` | Smaller and older projects listed only in the archive on `/projects/` |
| `src/data/talks.ts`, `cv.ts`, `videos.ts` | Talks, CV, and the YouTube snapshot |
| `src/data/site.ts` | Name, role, navigation, and social links |
| `src/assets/` | Images that get resized and converted to WebP at build time |
| `public/` | Files served as-is: PDFs in `files/`, legacy `images/` and `videos/`, hover `previews/` |
| `src/content.config.ts` | The schemas every content file is checked against |

## Add a project

1. Put a cover image in `src/assets/projects/<slug>.jpg`. Screenshots at 16:10 look best; the gallery crops everything to 16:10.
2. Create `src/content/projects/<slug>.md`:

   ```yaml
   ---
   title: My Project
   summary: One or two sentences, at most 160 characters. Shown on the card.
   date: 2026-09-01            # sorts the gallery; the card shows the year
   years: 2024 – 2026          # optional: overrides the year shown
   topics: [robotics, hardware] # robotics | hardware | simulation | education | optimisation | web
   stack: [Python, MuJoCo]
   cover: ../../assets/projects/<slug>.jpg
   coverAlt: What the image shows.
   coverPosition: 50% 50%      # optional: which part of the image to keep when cropping
   preview: /previews/<slug>.mp4  # optional: short muted loop played on hover
   featured: 3                 # optional: position on the home page (1 = the large feature card)
   youtube: VIDEO_ID           # optional: embedded at the top of the project page
   stars: 42                   # optional: GitHub stars snapshot
   views: 12k                  # optional: YouTube views snapshot
   draft: true                 # optional: only visible in `npm run dev`
   links:
     demo: https://…
     code: https://github.com/…
     video: https://youtu.be/…
     docs: https://…
     paper: /publications/<id>/
     post: /blog/<slug>/
   ---

   The write-up, in Markdown.
   ```

3. Run `npm run dev` and check the card at `/projects/`. The build fails if a required field is missing, which keeps every card consistent.

Hover previews are small H.264 loops, about 5 s at 720 px wide, with no audio:

```bash
ffmpeg -ss 6 -t 5 -i input.mp4 -vf "scale=720:-2,fps=30" -an -c:v libx264 -crf 28 \
  -pix_fmt yuv420p -movflags +faststart public/previews/<slug>.mp4
```

## The pendulum on the home page

The hero is the live demo from the [rotary inverted pendulum](https://github.com/ferrolho/rotary-inverted-pendulum)
docs, shown as an iframe of its `/embed/` page. Nothing is copied here: changes to the demo there show up here once
that site is redeployed. If the embed cannot load, the project's cover image is shown instead.

`npm run dev` expects the pendulum docs on port 4322 (`npm run dev -- --port 4322` in its `website/` folder).
Set `PUBLIC_PENDULUM_EMBED` to point somewhere else.

## Licence

The code is MIT. The content — text, photos, and videos — is CC BY 4.0. Published papers keep their publishers' terms. See `LICENSE`.

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
The first time only, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.

Old Jekyll URLs, such as `/about/`, `/other/`, and the category-based blog URLs, redirect to their new locations. The list is in `astro.config.mjs`.
