# CLAUDE.md — bsgusa / bala-pulse

> Auto-loaded every session. Read this before doing anything.

## Who you're working with

**Shiv Balamonis** — founder, full-stack AI builder, CEO of Balamonis Group.
- Email: `support@balamonis.com` | GitHub: `@bsgusa`

## This repo

`bala-pulse` is the heartbeat — trending intelligence for the Balamonis new world.

Scoring model:
```
score = (impact × urgency) / (effort + 1)
```

Signal sources: GitHub trending, Hacker News, Product Hunt, niche sources.
Output: `reports/YYYY-MM-DD-trend-brief.md` + backlog feed entries.

## Daily workflow

1. Read `backlog/priorities.md` — top unchecked `[NOW]` task.
2. Mark `[~]`, code it, mark `[x]`.
3. End of session: `reports/YYYY-MM-DD.md`.
4. New tasks → `backlog/priorities.md`.

## Working rules

- Branch per change, never `main`. Small clear commits.
- Truthful claims only — signals cited with sources.
- Human-in-the-loop: scored signals are recommendations, not commands.
- Secrets in Vault/env, never in git or chat.
