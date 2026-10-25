// bala-pulse — trend scan skeleton
// Scans configured sources, scores each signal, emits JSONL.
// Run: node scripts/pulse-scan.mjs  (dry-run: prints to stdout)

// Scoring: score = (impact × urgency) / (effort + 1)
// All scores are recommendations; a human decides what enters a backlog.

const SOURCES = [
  { name: 'github-trending', url: 'https://github.com/trending' },
  { name: 'hacker-news', url: 'https://news.ycombinator.com' },
  { name: 'product-hunt', url: 'https://www.producthunt.com' },
];

function scoreSignal(signal) {
  const impact = signal.impact ?? 3;      // 1-5
  const urgency = signal.urgency ?? 3;   // 1-5
  const effort = signal.effort ?? 3;     // 1-5
  const score = (impact * urgency) / (effort + 1);
  return { ...signal, score: Number(score.toFixed(2)) };
}

// Placeholder signals — replace with real fetches from SOURCES.
const placeholderSignals = [
  { source: 'github-trending', title: 'example: AI agent framework', impact: 4, urgency: 3, effort: 3 },
  { source: 'hacker-news', title: 'example: new deployment platform', impact: 3, urgency: 4, effort: 4 },
];

const scored = placeholderSignals.map(scoreSignal);

for (const s of scored) {
  console.log(JSON.stringify(s));
}
