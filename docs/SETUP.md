# SETUP (RU/EN)

## RU
1. Установите Node 20+, pnpm, Git.
2. Создайте Postgres (Supabase/локально), получите DATABASE_URL.
3. Скопируйте `docs/ENV.sample` в `.env`, заполните ключи (Stripe, Maps, FCM).
4. `pnpm i`, затем `pnpm db:migrate`.
5. Запустите веб: `pnpm dev:web`, мобильное: `pnpm dev:mobile`.

## EN
1. Install Node 20+, pnpm, Git.
2. Provision Postgres (Supabase/local), grab DATABASE_URL.
3. Copy `docs/ENV.sample` to `.env`, set keys (Stripe, Maps, FCM).
4. `pnpm i`, then `pnpm db:migrate`.
5. Run web: `pnpm dev:web`, mobile: `pnpm dev:mobile`.
