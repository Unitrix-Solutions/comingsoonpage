# Universal Coming Soon Page

A lightweight, industry-neutral landing page. Plain HTML, CSS and JavaScript: no build step, no database, no external requests.

## Files
`index.html` (page) · `style.css` (design) · `script.js` (logic) · `config.js` (**the only file you edit**) · `favicon.svg`

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server 8000` in this folder and visit http://localhost:8000.

## Upload to shared hosting / cPanel
1. In cPanel open **File Manager** and go to the domain's `public_html` (or the add-on domain's document root).
2. Upload the five files (or upload a zip and **Extract**). Do not overwrite an existing `index.html` you want to keep: rename it first.
3. Visit the domain. Apache, Nginx and static hosts all work without extra setup.
4. When the real site is ready, delete these files or replace them with the new site.

## Customize (config.js)
- **Name, title, heading, description:** `businessName`, `pageTitle`, `heading`, `description`. Empty means default text.
- **Contact:** `email`, `phone`, `whatsapp` (digits with country code, e.g. `923001234567`). Only filled fields appear; if all are empty, the contact section and the "Get in Touch" button are hidden.
- **Stay Connected button:** appears when a social URL or `websiteUrl` is set.
- **Colors:** `primaryColor` (text) and `accentColor` (buttons, glow), as hex values like `#0f1b3d`.
- **Logo / favicon:** upload `logo.png` / `favicon.png` next to `index.html` and set `logo` / `favicon`. If the logo file fails to load, the geometric symbol is kept.
- **Privacy link:** `privacyUrl`. Hidden when empty.

## Notes
- The progress line is decorative and shows no percentage.
- The year in the footer updates automatically.
- Animations stop for visitors who prefer reduced motion.
