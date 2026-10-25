# Signal Map — bsgusa / bala-pulse

Which trending signal matters to which repo/venture, and how it flows into a backlog.

## Scoring model

```
score = (impact × urgency) / (effort + 1)
```

| Factor | Scale | Meaning |
|---|---|---|
| Impact | 1–5 | How much this could move the needle for a venture or LLC |
| Urgency | 1–5 | How soon the signal decays or the window closes |
| Effort | 1–5 | Estimated person-hours to act on it |

All scores are recommendations. A human decides what enters a backlog.

## Signal → repo mapping

| Signal type | Example | Routes to | Why |
|---|---|---|---|
| AI agent framework | New autonomous agent library | `bala-pulse`, `command-center-bala` | Could power auto-coder |
| Deployment platform | New serverless/edge host | `balamonis_group_main`, `command-center-bala` | Infra candidate |
| Creative format | New short-form video AI | `balamonis-media` | Studio product surface |
| Legal automation | New contract-review AI | `AI-Job-Automation` | Lexora product surface |
| Career automation | New job-apply agent | `AI-Job-Automation` | Careers pillar |
| Public engagement | New issue/discussion pattern | `bala-voice` | Engagement surface |
| Contribution model | New PR/review workflow | `bala-weave` | Collab tissue |

## Flow

1. `scripts/pulse-scan.mjs` fetches signals from sources
2. Each signal is scored
3. `scripts/feed-backlog.mjs` appends `[NEXT]` candidates to target repo backlogs
4. Human reviews → merges into `backlog/priorities.md`
5. Weekly brief: `reports/YYYY-MM-DD-trend-brief.md`

## Signal sources (to be wired)

- GitHub trending (`https://github.com/trending`)
- Hacker News (`https://news.ycombinator.com`)
- Product Hunt (`https://www.producthunt.com`)
- Niche sources (add as needed)

API keys for these sources live in Vault / env — never in git, never in chat.
