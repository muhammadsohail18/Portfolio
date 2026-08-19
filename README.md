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
├── index.html          # Main HTML file
├── styles.css          # All styles
├── script.js           # Animations & interactions
├── image-fallback.js   # Embedded profile image (base64) — always loads
├── profile.jpg         # Profile image (optional — speeds up load if included)
├── favicon.svg         # SVG favicon
├── vercel.json         # Vercel configuration
├── package.json        # Project metadata
├── robots.txt          # SEO crawler rules
├── sitemap.xml         # SEO sitemap
├── README.md           # This file
└── .gitignore          # Git ignore rules
```

## About the Profile Image

The portfolio uses a **two-tier image loading strategy** so the profile photo is **always visible**, even if you forget to commit `profile.jpg`:

1. **Primary** — The `<img>` tag tries to load `profile.jpg` from your repo (fastest, lightest)
2. **Fallback** — If `profile.jpg` fails to load (file missing, broken path, etc.), the page automatically swaps to a base64-encoded version embedded in `image-fallback.js`

This means:
- ✅ Deploying **with** `profile.jpg` committed → fastest load (recommended for production)
- ✅ Deploying **without** `profile.jpg` → image still displays (slightly larger initial JS bundle)

The embedded fallback is automatically regenerated whenever you update `profile.jpg` and run the build helper:

```powershell
# Re-run this anytime you replace profile.jpg to refresh the fallback:
$bytes = [System.IO.File]::ReadAllBytes("profile.jpg")
$base64 = [Convert]::ToBase64String($bytes)
$dataUri = "data:image/jpeg;base64,$base64"
"window.__PROFILE_FALLBACK__ = `"$dataUri`";" | Out-File -LiteralPath "image-fallback.js" -Encoding utf8 -NoNewline
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

## Deploy to Vercel

### Option 1 — Vercel Dashboard (Easiest)

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **Add New → Project**
4. Import your GitHub repository
5. Vercel will auto-detect it as a static site — no configuration needed
6. Click **Deploy**

### Option 2 — Vercel CLI

```powershell
# Install Vercel CLI
npm i -g vercel

# Deploy from this folder
cd "path\to\Portfolio"
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? muhammad-sohail-portfolio
# - In which directory is your code located? ./
# - Override settings? No
```

For production deployment:

```powershell
vercel --prod
```

### Option 3 — Direct Upload (No Git)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag and drop this entire folder into the upload area
3. Click **Deploy**

That's it. Your site will be live in seconds.

## Deployment Checklist

Before deploying, run through this checklist to avoid any issues:

- [ ] All files use **relative paths** (no `C:\`, no `/Users/...`)
- [ ] `index.html` is at the **root** of the project (not in a subfolder)
- [ ] `vercel.json` is at the **root** of the project
- [ ] Filenames match exactly (case-sensitive): `index.html`, `styles.css`, `script.js`, `image-fallback.js`, `profile.jpg`, `favicon.svg`
- [ ] `profile.jpg` is included OR `image-fallback.js` is included (both included = best)
- [ ] No files in `.gitignore` that are needed (everything is needed for this site)
- [ ] No Node.js version conflicts (this site has no Node dependencies)

## Troubleshooting

| Issue | Solution |
|---|---|
| 404 on deployment | Make sure `index.html` is at the project root, not inside a subfolder |
| Fonts not loading | Check your browser isn't blocking Google Fonts |
| Profile photo missing | Either commit `profile.jpg` OR keep `image-fallback.js` (both already included) |
| CSS not applying | Verify the file name is exactly `styles.css` (lowercase, no spaces) |
| Build fails on Vercel | Check the build logs — this site has **no build step**, so a build error usually means a missing file |
| Want to change the domain | Settings → Domains in the Vercel dashboard, then update meta tags in `index.html` |

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
