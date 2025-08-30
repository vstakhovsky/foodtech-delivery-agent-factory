# apps/web (Next.js)

- App Router structure under `app/`.
- Tailwind configured; `globals.css` loaded from layout.
- Minimal routes: `/`, `/restaurant/[id]`, `/cart`, `/checkout`, `/orders/[id]`.
- API route: `/api/health` returns `{ ok: true }`.

## Dev
`pnpm dev:web` → http://localhost:3000
