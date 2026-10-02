/**
 * Refreshes the numbers on the site that go stale: GitHub stars and YouTube views.
 *
 *   npm run refresh:stats            # update files in place
 *   npm run refresh:stats -- --dry   # only report what would change
 *
 * Needs `gh` (logged in) for stars and `yt-dlp` for views. Each source is optional:
 * if a tool is missing or fails, its numbers are left as they are.
 *
 * Updates:
 *   - `stars:` and `views:` in src/content/projects/*.md
 *   - `stars:` in src/data/archive.ts
 *   - `views:` in src/data/videos.ts
 *   - src/data/stats.json (total channel views, shown on the home page)
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DRY = process.argv.includes('--dry');
const CHANNEL = 'https://www.youtube.com/@HenriqueFerrolho/videos';
const changes = [];

function run(cmd, args) {
  try {
    return execFileSync(cmd, args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], maxBuffer: 1 << 26 });
  } catch {
    return null;
  }
}

/** 380000 → "380k", 6300 → "6.3k", 644 → "644", 1200000 → "1.2M" */
function compact(n) {
  const fmt = (x, unit) => `${x >= 100 ? Math.round(x) : Number(x.toFixed(1))}${unit}`;
  if (n >= 1e6) return fmt(n / 1e6, 'M');
  if (n >= 1e3) return fmt(n / 1e3, 'k');
  return String(n);
}

// ── GitHub stars ────────────────────────────────────────────────
const starCache = new Map();
function stars(repoUrl) {
  const m = repoUrl.match(/github\.com\/([^/]+)\/([^/#?]+)/);
  if (!m) return null;
  const slug = `${m[1]}/${m[2].replace(/\.git$/, '')}`;
  if (!starCache.has(slug)) {
    const out = run('gh', ['api', `repos/${slug}`, '--jq', '.stargazers_count']);
    starCache.set(slug, out === null ? null : Number(out.trim()));
  }
  return starCache.get(slug);
}

// ── YouTube views (one request for the whole channel) ───────────
const views = new Map();
const list = run('yt-dlp', ['--flat-playlist', '--print', '%(id)s %(view_count)s', CHANNEL]);
if (list) {
  for (const line of list.trim().split('\n')) {
    const [id, count] = line.split(' ');
    if (id && /^\d+$/.test(count)) views.set(id, Number(count));
  }
} else {
  console.warn('yt-dlp unavailable or failed — leaving view counts as they are.');
}

function write(file, before, after) {
  if (before === after) return;
  if (!DRY) fs.writeFileSync(file, after);
}

// ── Project pages ───────────────────────────────────────────────
const projectsDir = path.join(ROOT, 'src/content/projects');
for (const name of fs.readdirSync(projectsDir).filter((f) => f.endsWith('.md'))) {
  const file = path.join(projectsDir, name);
  const before = fs.readFileSync(file, 'utf8');
  let after = before;
  const fm = before.match(/^---\n([\s\S]*?)\n---/)[1];

  const code = fm.match(/^\s+code:\s*(\S+)/m)?.[1];
  if (code && /^stars:/m.test(fm)) {
    const n = stars(code);
    const old = Number(fm.match(/^stars:\s*(\d+)/m)?.[1]);
    if (n !== null && n !== old) {
      after = after.replace(/^stars:\s*\d+/m, `stars: ${n}`);
      changes.push(`${name}: stars ${old} → ${n}`);
    }
  }

  const yt = fm.match(/^youtube:\s*(\S+)/m)?.[1];
  if (yt && views.has(yt) && /^views:/m.test(fm)) {
    const v = compact(views.get(yt));
    const old = fm.match(/^views:\s*(\S+)/m)[1];
    if (v !== old) {
      after = after.replace(/^views:\s*\S+/m, `views: ${v}`);
      changes.push(`${name}: views ${old} → ${v}`);
    }
  }
  write(file, before, after);
}

// ── Archive (src/data/archive.ts) ───────────────────────────────
{
  const file = path.join(ROOT, 'src/data/archive.ts');
  const before = fs.readFileSync(file, 'utf8');
  const after = before.replace(/href: '([^']+)'(.*?)stars: (\d+)/g, (all, href, mid, old) => {
    const n = stars(href);
    if (n === null || n === Number(old)) return all;
    changes.push(`archive ${href}: stars ${old} → ${n}`);
    return `href: '${href}'${mid}stars: ${n}`;
  });
  write(file, before, after);
}

// ── Videos (src/data/videos.ts) and channel total ───────────────
if (views.size) {
  const file = path.join(ROOT, 'src/data/videos.ts');
  const before = fs.readFileSync(file, 'utf8');
  const after = before.replace(/id: '([^']+)'(.*?)views: '([^']+)'/g, (all, id, mid, old) => {
    if (!views.has(id)) return all;
    const v = compact(views.get(id));
    if (v === old) return all;
    changes.push(`video ${id}: views ${old} → ${v}`);
    return `id: '${id}'${mid}views: '${v}'`;
  });
  write(file, before, after);

  const total = [...views.values()].reduce((a, b) => a + b, 0);
  const statsFile = path.join(ROOT, 'src/data/stats.json');
  const prev = fs.existsSync(statsFile) ? JSON.parse(fs.readFileSync(statsFile, 'utf8')) : {};
  if (prev.channelViews !== total) {
    changes.push(`channel views ${prev.channelViews ?? '—'} → ${total}`);
    const next = { channelViews: total, updated: new Date().toISOString().slice(0, 10) };
    if (!DRY) fs.writeFileSync(statsFile, JSON.stringify(next, null, 2) + '\n');
  }
}

console.log(changes.length ? changes.join('\n') : 'Everything is up to date.');
if (DRY && changes.length) console.log('\n(dry run — no files written)');
