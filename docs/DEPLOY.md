# Deploy (RU/EN)

## RU — Web (Vercel)
1) Подключите репозиторий GitHub к Vercel.
2) Установите переменные окружения (см. `.env`).
3) Задеплойте. При первом деплое выполните миграции БД.

## RU — Mobile (Expo EAS)
1) `npm i -g eas-cli` → `eas login`
2) `eas build --platform ios|android`
3) Настройте секреты (`eas secret:create`), используйте EAS Submit/Update.

## EN — Web (Vercel)
Connect GitHub repo, set env vars, deploy, run DB migrations.

## EN — Mobile (Expo EAS)
Install EAS CLI, build, set secrets, submit to stores; use OTA updates later.
