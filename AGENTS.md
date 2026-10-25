# AGENTS.md — bsgusa / bala-pulse (trending intelligence)

Conventions for AI agents (and humans) working in this repo.

## Start here

1. Read [`ROADMAP.md`](./ROADMAP.md) — milestones; work the `[NOW]` item.
2. Read [`backlog/priorities.md`](./backlog/priorities.md) — the detailed task list.
3. Skim the latest file in [`reports/`](./reports/) for recent context.

## Purpose

`bala-pulse` scans trending signals (GitHub trending, HN, Product Hunt, niche sources), scores them (`impact × urgency / (effort + 1)`), and feeds them into backlogs so your work rides the wave.

## Layout

| Path | What lives there |
|---|---|
| `scripts/` | `pulse-scan.mjs`, `feed-backlog.mjs` |
| `reports/` | Weekly trend briefs: `YYYY-MM-DD-trend-brief.md` |
| `docs/` | `SIGNAL_MAP.md` — signal → repo mapping rules |
| `ROADMAP.md` / `backlog/priorities.md` | Milestones + task list |

## Working rules

- **Work on a branch, never `main`.** Small commits with clear messages.
- **Truthful claims only.** Signals are cited with sources; no fabricated trends.
- **Human-in-the-loop.** Scored signals are recommendations, never auto-merged.
- **Secrets never in git.** API keys go in Vault / env, never in chat or commits.
- **Before ending a session:** update `ROADMAP.md`, `backlog/priorities.md`, append to `reports/LOG.md`.

## Stack

Node.js scripts + JSONL + Markdown. No build step.

## GitHub

Org: `bsgusa`. Repo: public. Issues = suggest signal sources. PRs = via `bala-weave` templates.
