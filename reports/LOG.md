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
