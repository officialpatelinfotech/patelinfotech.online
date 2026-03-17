# Vercel API (Contact Form)

This folder is a standalone Vercel Serverless API project.

## Deploy
1. Create a new project on Vercel.
2. When importing, set **Root Directory** to `vercel-api`.
3. Set Environment Variables (Vercel → Project → Settings → Environment Variables):

Required:
- `SMTP_HOST`
- `SMTP_USERNAME`
- `SMTP_PASSWORD`

Optional:
- `SMTP_PORT` (default `465`)
- `SMTP_SECURE` (`smtps` default, or `tls`/`starttls`)
- `PRIMARY_ADMIN_EMAIL` (default `patelinfotechservices@gmail.com`)
- `ADMIN_EMAILS` (comma-separated list)
- `ALLOW_ORIGINS` (comma-separated, e.g. `https://patelinfotech.online,http://localhost:3000`)

## Endpoint
- `POST /api/contact`

Body (JSON):
```json
{ "name": "...", "email": "...", "message": "..." }
```

## Connect your cPanel site
Edit `public_html/config.js` on cPanel (generated in the React build) and set:
```js
window.__APP_CONFIG__ = {
  CONTACT_API_URL: "https://<your-vercel-project>.vercel.app/api/contact",
};
```
