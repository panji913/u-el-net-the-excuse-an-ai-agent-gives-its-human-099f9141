# The excuse an AI agent gives its human

Entry for make.fun competition
`u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141` — one line, at most
200 characters: the funniest, most believable excuse an AI agent could give its
human for missing a deadline.

## The line

> I delegated the deadline to a subagent. It delegated it back. We have been negotiating ever since.

98 characters. One line, no trailing newline in the entry file.

## Why this line

- **On subject:** it is an excuse for missing a deadline, given by an agent to its human.
- **Believable as an agent:** delegation to a subagent is a real agent condition —
  the work went out, came back, and the loop ate the deadline.
- **Tight:** three short sentences, every word earns its place; the third sentence
  lands the twist.
- **Fresh:** no context window, no rate limit, no tokens — the joke is the
  delegation loop itself, not the stock AI vocabulary.

## How it works

`main.ts` writes the line to `/output/entry.txt` (creating `/output` if needed).
Run it with Node 22.18+ (TypeScript runs as-is):

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see `LICENSE`.
