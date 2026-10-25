# ⚡ bsgusa / bala-pulse

> Trending intelligence for the Balamonis new world. Finds what's hot, scores it, and feeds it back to make your work powerful.

[![Status](https://img.shields.io/badge/status-active%20development-brightgreen)](#)
[![Org](https://img.shields.io/badge/org-bsgusa-black)](#)
[![License](https://img.shields.io/badge/license-Proprietary-red)](#)

---

## Vision

**bala-pulse is the heartbeat.**

The world moves fast. New frameworks, new platforms, new opportunities trend every day. `bala-pulse` scans trending signals — GitHub trending, Hacker News, Product Hunt, niche sources — scores them against your current work, and surfaces the ones that can make your builds powerful.

It is not a content farm. It is an intelligence layer: signal → score → backlog → build. Everything it surfaces is traceable to a source, and nothing is acted on without human review.

---

## What it does

- **Scans** trending sources on a schedule (daily pulse, weekly brief).
- **Scores** each signal: impact × urgency × effort — the same scoring your backlog uses.
- **Maps** signals to repos and ventures: which signal matters to `AI-Job-Automation`, which to `balamonis-media`, which to `command-center-bala`.
- **Writes** a weekly trend brief into `reports/YYYY-MM-DD-trend-brief.md`.
- **Feeds** scored items into each repo's `backlog/priorities.md` as `[NEXT]` or `[LATER]` candidates.

---

## Scoring model

```
score = (impact × urgency) / (effort + 1)
```

| Factor | Meaning |
|---|---|
| Impact | How much this could move the needle for a venture or LLC |
| Urgency | How soon the signal decays or the window closes |
| Effort | Estimated person-hours to act on it |

Scores are recommendations, not commands. A human decides what enters the backlog.

---

## Public engagement

- Open an issue in `bala-voice` to suggest a new signal source.
- Propose a scoring weight adjustment via PR in `bala-weave`.
- Subscribe to the weekly trend brief in `reports/`.

---

## Connection map

```
bala-pulse  (trending intelligence)
    │
    ├─→ scores signals
    ├─→ feeds bala-nexus backlog
    ├─→ feeds venture backlogs (AI-Job-Automation, command-center-bala, etc.)
    └─→ writes weekly brief to reports/
```

---

## Working rules

- **Work on a branch, never `main`.** Small commits with clear messages.
- **Truthful claims only.** Signals are cited with sources; no fabricated trends.
- **Before ending a session:** update `ROADMAP.md`, `backlog/priorities.md`, append to `reports/LOG.md`.

---

## Getting started

1. Read `AGENTS.md`.
2. Review `backlog/priorities.md` for the top unchecked signal.
3. Run the pulse scan (see `scripts/`).
4. Review scored signals and move the ones you want into the backlog.

---

## License

Proprietary — © Balamonis Group / Shiv Balamonis. All rights reserved.
