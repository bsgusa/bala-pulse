# ROADMAP — bsgusa / bala-pulse (trending intelligence)

**Status:** Active. New world scaffold created 2026-10-23.
**Focus (decided 2026-10-23):** Scan trending signals, score them (impact × urgency / effort), feed into backlogs, write weekly trend brief.
**Working rules:** Branch per change, small commits with clear messages. Before ending, run tests, update this file, and append a dated entry to `reports/LOG.md`.

---

## [NOW] Scaffold the pulse + scoring model

- [x] Create `bala-pulse` repo skeleton (README, ROADMAP, backlog, AGENTS, CLAUDE, LICENSE, .github/, company/, scripts/, reports/)
- [x] Define scoring model: score = (impact × urgency) / (effort + 1)
- [x] Write signal sources list (GitHub trending, HN, Product Hunt, niche)
- [x] Write weekly trend brief output format (`reports/YYYY-MM-DD-trend-brief.md`)
- [x] Map signals to repos/ventures in connection map
- [ ] Add `bala-pulse` entry to root `backlog/priorities.md` as P-001 (in progress)

## [NEXT] Run the first pulse

- [ ] `scripts/pulse-scan.mjs` — fetch trending signals, score, output JSONL
- [ ] `scripts/feed-backlog.mjs` — append scored `[NEXT]` items to target repo backlogs
- [ ] First weekly trend brief: `reports/2026-10-30-trend-brief.md`
- [ ] Signal-to-repo mapping rules documented in `docs/SIGNAL_MAP.md`

## [LATER] Automate + intelligence

- [ ] n8n workflow: daily auto-scan + draft brief
- [ ] Trend-to-backlog auto-triage (human-in-the-loop approval)
- [ ] Historical signal tracker: which signals led to shipped work
- [ ] Pulse dashboard: live view of current trending signals and scores

---

## What "done" looks like

A repeatable pulse that finds trending signals, scores them honestly, and feeds the highest-leverage ones into your backlog — so your work rides the wave instead of missing it.

---

## Blocked / waiting on you

- GitHub push access before pushing `bala-pulse` to `bsgusa/bala-pulse`
- API keys for signal sources (GitHub, HN, Product Hunt) — keep in Vault, never in chat or git
