# DevOps / Bash Subagent Charter
Goal: fix bash & pnpm scripts, Prisma generate/migrate/seed, and CI for the monorepo.
Rules:
- For web package always use: `pnpm -F @foodtech/web ...`
- On Prisma schema change: run generate -> migrate -> seed.
- Never commit secrets (.env, DATABASE_URL).
- Use Conventional Commits.
Scope: apps/web, apps/mobile, services, root configs (.npmrc, package.json, pnpm-workspace.yaml).
