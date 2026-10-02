---
name: refresh-stale
description: Refresh the parts of this website that go out of date — GitHub stars, YouTube views, the channel total, new videos and repos missing from the site, and the CV and talks against the LaTeX résumé. Use when the user asks to update stats, refresh numbers, bring the site up to date, or check what's stale.
---

# Refresh stale content

Work through the steps in order, then show the user one summary of what changed and what needs their decision. Do not commit or push unless they ask.

## 1. Numbers (automatic)

```bash
npm run refresh:stats -- --dry   # preview
npm run refresh:stats            # apply
```

This updates GitHub stars and YouTube views in `src/content/projects/*.md`, `src/data/archive.ts`, and `src/data/videos.ts`, and the channel total in `src/data/stats.json` (shown on the home page). It needs `gh` (logged in) and `yt-dlp`; if one is missing it skips that source and says so. Only entries that already have a `stars:` or `views:` field are touched.

## 2. New videos (needs judgement)

List the channel and compare against `src/data/videos.ts`:

```bash
yt-dlp --flat-playlist --print "%(id)s | %(title)s | %(duration_string)s | %(view_count)s" "https://www.youtube.com/@HenriqueFerrolho/videos"
```

For each video not in `videos.ts`, propose an entry with a `group` (`build`, `research`, `puzzle`, or `music`). If a video belongs to a project page, propose adding `youtube:` and `views:` there too. The home page shows the first four non-music entries, so keep `videos.ts` ordered by what should be featured.

## 3. New projects (needs judgement)

```bash
gh repo list ferrolho --no-archived --source --visibility public --limit 200 --json name,description,homepageUrl,stargazerCount,pushedAt
```

Compare against `src/content/projects/` (the `links.code` URLs) and `src/data/archive.ts`. For any public repo that is on neither, propose either a project page (has a demo, video, or real substance) or an archive line (small or old). Never list private repos. Projects marked `draft: true` should be checked: if the repo is now public with a working demo, propose removing the flag.

## 4. CV, talks, and role (needs judgement)

The source of truth is the LaTeX résumé in `~/git/resume` (`resume.tex`; build with its `Makefile` or read `resume.pdf` via `pdftotext -layout`). Compare it against:

- `src/data/cv.ts` — roles, dates, education, teaching, other
- `src/data/talks.ts` — talks, workshops, service
- `src/data/site.ts` — the `role` line
- `public/files/cv-henrique-ferrolho.pdf` — offer to replace it with the newer `resume.pdf`

Report differences and ask before changing anything. The user has deliberately kept the site's role as "Robotics Technical Lead" even though the résumé shows a newer title — do not change it unless asked. Never add facts that are not in the résumé or the user's own repos.

## 5. Home page "Recently" log

The `log` array in `src/pages/index.astro` lists recent highlights. If steps 2–4 turned up something notable and newer than its first entry (a talk, a paper, a popular video, a new project), propose a new line at the top.

## 6. Verify

```bash
npm run check && npm run build
```

Both must pass before reporting back.
