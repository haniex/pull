# OBSCURA®

Independent digital designer portfolio. Published at **https://haniex.github.io/pull/**

## Local

```bash
npm install --legacy-peer-deps
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

`vite.config.ts` sets `base: '/pull/'` for GitHub Pages.

## Deploy (GitHub Pages)

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. Push to `main` (or `master`). Workflow `.github/workflows/deploy.yml` builds and publishes `dist/`.
3. Site URL: `https://haniex.github.io/pull/`

## Contact form

Set `VITE_FORMSPREE_ENDPOINT` (Formspree form URL) in GitHub Actions secrets or a local `.env` file.  
Without it, validation still works; submit shows an honest “not connected” message (no fake success).

See `.env.example`.
