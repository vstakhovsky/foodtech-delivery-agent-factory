# FoodTech Delivery — AI Agent Factory + Claude Code Subagents


**Repository for a DoorDash/UberEats‑style food delivery web & mobile app built with **AI Agent Factory** + **Claude Code Subagents**.

## Monorepo layout

# FoodTech Delivery Agent Factory

[![CI](https://github.com/vstakhovsky/foodtech-delivery-agent-factory/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/vstakhovsky/foodtech-delivery-agent-factory/actions/workflows/ci.yml)


```
apps/
  web/         # Next.js 15 App Router web client
  mobile/      # Expo React Native mobile client
services/
  worker/      # Queue/dispatcher placeholder
db/
  schema.prisma
docs/
  ENV.sample, DEPLOY.md, SETUP.md, FOLDERS.md
.claude/
  agents/, commands/
PRPs/
  templates/
```

## Quick start
```bash
pnpm i
cp docs/ENV.sample .env
pnpm db:migrate        # set DATABASE_URL first
pnpm dev:web           # http://localhost:3000
pnpm dev:mobile        # expo dev server
```

## Claude Code
- Run `/agents` to manage subagents.
- `/generate-prp INITIAL.md` → creates PRPs/foodtech_mvp.md
- `/execute-prp PRPs/foodtech_mvp.md` to iteratively implement.
