# Muhammad Sohail — Portfolio

A professional personal portfolio for **Muhammad Sohail**, a final-year Software Engineering student at the University of Gujrat. Built with pure HTML, CSS, and JavaScript — no build step, no framework, no dependencies.

## Live Demo

Once deployed, your site will be live at:
- `https://your-project-name.vercel.app`
- Or your custom domain if connected.

## Features

- Fully responsive (mobile, tablet, desktop)
- Modern editorial dark theme with warm gold accents
- Custom typography (Bricolage Grotesque, Fraunces, Inter, JetBrains Mono)
- Pure HTML/CSS/JS — zero dependencies
- Optimized for performance and SEO
- Accessible markup and semantic HTML

## Project Structure

```
Portfolio/
├── index.html          # Main HTML file (with embedded base64 profile image)
├── 404.html            # Custom not-found page
├── styles.css          # All styles
├── script.js           # Animations & interactions
├── profile.jpg         # Profile image (used for OG/Twitter cards + Apple touch icon)
├── favicon.svg         # SVG favicon
├── netlify.toml        # Netlify configuration
├── _redirects          # Netlify redirects (HTTPS, pretty URLs)
├── _headers            # Netlify security & cache headers
├── vercel.json         # Vercel configuration (alternative deployment)
├── package.json        # Project metadata
├── robots.txt          # SEO crawler rules
├── sitemap.xml         # SEO sitemap
├── README.md           # This file
└── .gitignore          # Git ignore rules
```

## About the Profile Image

The profile image is **embedded directly into `index.html` as a base64 data URI** — there is no external file dependency for the hero portrait:

- ✅ The image is part of the HTML itself
- ✅ Works on every deployment (Vercel, GitHub Pages, anywhere)
- ✅ No cache issues, no missing file errors, no JavaScript dependency
- ✅ `profile.jpg` is still kept in the repo for Open Graph / Twitter cards and Apple touch icon

If you want to replace the photo, run this PowerShell one-liner to re-embed the new image into `index.html`:

```powershell
$bytes = [System.IO.File]::ReadAllBytes("profile.jpg")
$base64 = [Convert]::ToBase64String($bytes)
$dataUri = "data:image/jpeg;base64,$base64"

$html = Get-Content "index.html" -Raw
$pattern = '<img id="portraitImg"[^>]*/>'
$replacement = '<img id="portraitImg" src="' + $dataUri + '" alt="Muhammad Sohail — Front-End Developer" loading="eager" decoding="async" fetchpriority="high" />'
$html = $html -replace $pattern, $replacement

$utf8NoBom = New-Object System.Text.UTF8Encoding($False)
[System.IO.File]::WriteAllText("index.html", $html, $utf8NoBom)
```

## Local Development

Just open `index.html` in a browser, or run a local server:

```powershell
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`.

## Deploy to Netlify

### Option 1 — Netlify Dashboard (Easiest)

1. Push this folder to a GitHub repository
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click **Add new site → Import an existing project**
4. Select **GitHub** and authorize Netlify
5. Pick your repository
6. Netlify will auto-detect the static site settings from `netlify.toml`:
   - Build command: *(empty)*
   - Publish directory: `.`
7. Click **Deploy site**

Your site will be live at `https://your-site-name.netlify.app` within seconds.

### Option 2 — Netlify CLI

```powershell
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy from this folder
cd "path\to\Portfolio"
netlify deploy

# Follow the prompts:
# - Create & configure a new site? Yes
# - Team: your team
# - Site name: muhammad-sohail-portfolio
# - Publish directory: ./
```

For production deployment:

```powershell
netlify deploy --prod
```

### Option 3 — Drag & Drop (No Git)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag this entire folder onto the upload zone
3. Done — your site is live instantly

### Option 4 — Manual Deploy via CLI

```powershell
# First-time setup (creates a new site)
netlify init

# Deploy a draft
netlify deploy

# Deploy to production
netlify deploy --prod
```

## Deploy to Vercel

The project also works perfectly on Vercel (config in `vercel.json`):

### Option 1 — Vercel Dashboard (Easiest)

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **Add New → Project**
4. Import your GitHub repository
5. Vercel will auto-detect it as a static site — no configuration needed
6. Click **Deploy**

### Option 2 — Vercel CLI

```powershell
npm i -g vercel
cd "path\to\Portfolio"
vercel
```

For production deployment:

```powershell
vercel --prod
```

### Option 3 — Direct Upload (No Git)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag and drop this entire folder into the upload area
3. Click **Deploy**

## Custom Domain

After deploying, you can connect a custom domain:

### Netlify
1. **Domain settings → Add custom domain**
2. Update DNS records as instructed
3. HTTPS is automatic via Let's Encrypt

### Vercel
1. **Settings → Domains → Add**
2. Update DNS records
3. HTTPS is automatic

After setting up your domain, update these files with your real domain (replace `your-domain` placeholders):
- `index.html` → `<link rel="canonical">`, all `og:*` and `twitter:*` meta tags, JSON-LD
- `robots.txt` → `Sitemap:` URL
- `sitemap.xml` → all `<loc>` URLs

## Deployment Checklist

Before deploying, run through this checklist to avoid any issues:

- [ ] All files use **relative paths** (no `C:\`, no `/Users/...`)
- [ ] `index.html` is at the **root** of the project (not in a subfolder)
- [ ] Config files at root: `netlify.toml` (for Netlify) and/or `vercel.json` (for Vercel)
- [ ] Filenames match exactly (case-sensitive): `index.html`, `styles.css`, `script.js`, `profile.jpg`, `favicon.svg`
- [ ] Profile image embedded as base64 in `index.html` (works without `profile.jpg`)
- [ ] No files in `.gitignore` that are needed (everything is needed for this site)
- [ ] No build dependencies — this is a pure static site

## Troubleshooting

| Issue | Solution |
|---|---|
| 404 on deployment | Make sure `index.html` is at the project root, not inside a subfolder |
| Fonts not loading | Check your browser isn't blocking Google Fonts |
| Profile photo missing | The image is embedded as base64 in `index.html` — should always work |
| CSS not applying | Verify the file name is exactly `styles.css` (lowercase, no spaces) |
| Build fails | This site has **no build step**, so a build error usually means a missing file |
| Want to change the domain | Update domain settings in the dashboard, then update meta tags in `index.html` |
| Netlify not auto-detecting settings | Ensure `netlify.toml` is at the project root |

## Custom Domain

After deployment:

1. Go to your Vercel project **Settings → Domains**
2. Add your custom domain (e.g., `muhammadsohail.dev`)
3. Update the DNS records as instructed by Vercel
4. After the domain is verified, update these files with your new domain:
   - `index.html` → replace `your-domain.vercel.app` in all meta tags
   - `robots.txt` → update the sitemap URL
   - `sitemap.xml` → update all URLs

## Before You Deploy

Update these files with your real domain (replace `your-domain.vercel.app`):

1. `index.html`:
   - `<link rel="canonical" ...>`
   - All `og:*` meta tags
   - All `twitter:*` meta tags
   - JSON-LD `schema.org` block

2. `robots.txt`:
   - `Sitemap:` URL

3. `sitemap.xml`:
   - All `<loc>` URLs

## Performance Notes

- All assets use relative paths (`./styles.css`, `./script.js`, `./profile.jpg`)
- The `vercel.json` already includes:
  - Long-term caching for static assets (CSS, JS, images)
  - Security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy)
  - Clean URLs (no `.html` extension)
- Fonts are loaded from Google Fonts CDN with `preconnect`
- No JavaScript frameworks = small bundle size
- No build step = fastest possible deployment

## Contact

- **Email**: Sohailmalik1803@gmail.com
- **Phone**: +92 334 469 4890
- **GitHub**: https://github.com/muhammadsohail18
- **LinkedIn**: https://www.linkedin.com/in/muhammad-sohail-18925b421/

## License

MIT License — feel free to use this as a template for your own portfolio.
