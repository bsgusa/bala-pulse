# Log — bsgusa / bala-pulse (trending intelligence)

## 2026-10-23 — New world scaffold created

### Created
- Repo skeleton: README.md, ROADMAP.md ([NOW]/[NEXT]/[LATER]), backlog/priorities.md, AGENTS.md, CLAUDE.md
- LICENSE (Proprietary), .gitignore, .github/workflows/ci.yml
- company/repos.json — repos bala-pulse feeds scored signals into
- scripts/pulse-scan.mjs — trend scan skeleton (score = impact × urgency / (effort + 1))
- reports/LOG.md — this file

### Scoring model
```
score = (impact × urgency) / (effort + 1)
```
All scores are recommendations; human-in-the-loop before any backlog entry.

### Signal sources (to be wired)
- GitHub trending, Hacker News, Product Hunt, niche sources
- Output: reports/YYYY-MM-DD-trend-brief.md

### Next
- Wire real fetches into scripts/pulse-scan.mjs
- First weekly trend brief: reports/2026-10-30-trend-brief.md
- docs/SIGNAL_MAP.md — signal → repo mapping rules

## 2026-11-01 — Lexora repo slugs corrected

The 2026-11-01 GitHub cleanup renamed `bsgusa/AI-Job-Automation` → `bsgusa/company-lexora-legal`
(lexoraai.space) and `bsgusa/company-lexoraai` → `bsgusa/company-lexora-jobs` (lexoraai.org).
This repo still referenced the old slug.

- `company/repos.json`: old slug replaced with `company-lexora-legal`; `company-lexora-jobs` added (10 repos).
- README / docs references updated to the new slugs. Local checkout paths unchanged
  (`~/AI-Job-Automation`, `~/company-lexoraai` — the directories were not renamed).
- Historical entries above are left as-is.
