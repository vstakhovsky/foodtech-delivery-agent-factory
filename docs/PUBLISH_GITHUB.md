# Publish to GitHub (RU/EN)

## RU
```bash
git init
git add .
git commit -m "feat: bootstrap foodtech agent factory"
gh repo create your-org/foodtech-agent-factory --public --source=. --remote=origin --push
# Добавьте секреты в GitHub → Settings → Secrets and variables → Actions:
# ANTHROPIC_API_KEY, DATABASE_URL, STRIPE_*, NEXT_PUBLIC_MAPBOX_TOKEN / NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, FIREBASE_*, JWT_SECRET
```

## EN
```bash
git init
git add .
git commit -m "feat: bootstrap foodtech agent factory"
gh repo create your-org/foodtech-agent-factory --public --source=. --remote=origin --push
# Add Actions secrets: ANTHROPIC_API_KEY, DATABASE_URL, STRIPE_*, NEXT_PUBLIC_MAPBOX_TOKEN / NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, FIREBASE_*, JWT_SECRET
```
