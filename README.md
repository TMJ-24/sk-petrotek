# SK Petroteck Limited — Company Website

Corporate website for SK Petroteck Limited, Papua New Guinea's construction and community infrastructure development partner.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Charts**: D3.js v7
- **Icons**: Lucide React
- **Deployment**: Cloudflare Workers via OpenNext

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, stats, services overview, featured projects |
| `/about` | Company history, mission, values, team, certifications |
| `/services` | Civil construction, facilities, project management, community projects |
| `/projects` | Completed and in-progress school construction projects |
| `/contact` | Contact form and business details |
| `/privacy-policy` | Privacy policy |
| `/terms-of-use` | Terms of use |

## Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Production build
npm run lint      # ESLint
```

## Deployment

Deployed to Cloudflare Workers on every push to `main` via GitHub Actions.

Requires repository secrets:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Manual deploy:
```bash
npm run cf:build    # OpenNext build
npm run cf:deploy   # Build + wrangler deploy
```

## Environment

No environment variables required for the base site. Contact form submissions are handled client-side; backend integration (email/API) can be added via a Cloudflare Worker binding.
