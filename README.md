# Bea Bedney Artist Portfolio

A clean, minimal artist website built for prints and mixed media work.

## What You Have

7 pages, ready for content:

- **index.html** (HOME) — Hero image, tagline, link to work
- **work.html** (WORK) — 12 prints with titles and metadata
- **statement.html** (STATEMENT) — 150-word artist statement
- **bio.html** (BIO) — 100-word biography
- **cv.html** (CV) — Reverse-chronological CV
- **press.html** (PRESS) — Press mentions (optional)
- **contact.html** (CONTACT) — Email and Instagram

Plus **style.css** — all the styling. Mobile-responsive, fast, clean.

## Getting Started

### 1. Create a GitHub Repository

1. Log in to GitHub (github.com)
2. Click the **+** icon in the top right → **New Repository**
3. Name it `bedneyart` (or whatever you prefer)
4. Add a description: "Artist portfolio — prints and mixed media"
5. Click **Create Repository**

You'll see instructions. Copy the URL (it will look like `https://github.com/bedneyart/bedneyart.git`)

### 2. Set Up Locally (First Time)

**On Mac/Linux:**

```bash
# Create a folder for the project
mkdir bedneyart
cd bedneyart

# Initialize Git
git init

# Add these files you've been given to this folder:
# - index.html, work.html, statement.html, bio.html, cv.html, press.html, contact.html
# - style.css
# - Create folders: images/, downloads/

# Connect to GitHub
git remote add origin https://github.com/[YOUR-USERNAME]/bedneyart.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

**On Windows:**
Same steps, or use GitHub Desktop (easier): github.com/apps/desktop

### 3. Add Your Images

In the `images/` folder, add:
- `hero.jpg` — Your strongest print (for the homepage)
- `print-01.jpg` through `print-12.jpg` — Your 12 prints

**Image specs:**
- Format: JPG or PNG
- Size: 1000px wide minimum (we'll display at various sizes)
- File size: Keep under 500KB each (optimize before uploading)

### 4. Fill in Placeholders

Open each HTML file and replace the `[INSERT...]` sections with your actual content:

- **index.html**: Hero image, name, tagline
- **work.html**: Titles, years, mediums, dimensions for each print
- **statement.html**: Your 150-word artist statement
- **bio.html**: Your 100-word biography (third person)
- **cv.html**: Education, exhibitions, awards, press, collections
- **press.html**: Your 1-2 press mentions (or delete this page if none)
- **contact.html**: Your email and Instagram handle

### 5. Deploy to Netlify

1. Go to netlify.com and sign up (free)
2. Click **Add New Project** → **Import an existing project**
3. Choose GitHub, authorize, and select your `bedneyart` repo
4. Click Deploy — Netlify will build and host your site automatically

Your site will live at `[projectname].netlify.app`

### 6. Connect Your Domain

After Netlify deploys:

1. In Netlify, go to **Domain Management**
2. Add your custom domain (e.g., yourname.com)
3. Follow Netlify's instructions to update your domain's DNS

This takes 5–10 minutes to propagate.

---

## Making Updates

After setup, any changes are simple:

```bash
# Make changes to HTML files or add images
git add .
git commit -m "Updated work gallery"
git push
```

Netlify automatically redeploys. Your site updates in seconds.

---

## Folder Structure

```
bedneyart/
├── index.html
├── work.html
├── statement.html
├── bio.html
├── cv.html
├── press.html
├── contact.html
├── style.css
├── images/
│   ├── hero.jpg
│   ├── print-01.jpg
│   ├── print-02.jpg
│   └── ... (print-03 through print-12)
└── downloads/
    └── cv.pdf (optional)
```

---

## Tips

- **Mobile first**: Test on your phone. The site is responsive.
- **Image optimization**: Use a tool like TinyPNG to compress images before uploading.
- **CV as PDF**: Optional. If you want a downloadable PDF CV, add `cv.pdf` to the `downloads/` folder and it will work.
- **No e-commerce**: This is a portfolio. If you want to sell prints later, that's a separate conversation.
- **Typography**: The site uses system fonts for speed and clarity. Don't change them.

---

## Questions?

The site is designed to be simple and maintainable. If something doesn't work, it's usually:
- Image paths (check folder names match)
- File names (match exactly, including case)
- HTML syntax (missing closing tags)

All fixable.

Good luck. Let the work shine.
