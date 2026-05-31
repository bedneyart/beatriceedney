# Quick Start: Get Your Site Live in 1 Hour

Follow these steps exactly in order.

## Step 1: Create GitHub Account & Repository (5 mins)

Already done. You have username **bedneyart**.

Now create a repository:
1. Go to github.com and log in
2. Click **+** (top right) → **New Repository**
3. Name: `bedneyart-website` (or similar)
4. Description: "My artist portfolio"
5. Click **Create Repository**
6. Copy the URL that appears (looks like `https://github.com/bedneyart/bedneyart-website.git`)

## Step 2: Download These Files (2 mins)

You should have:
- 7 HTML files (index.html, work.html, statement.html, bio.html, cv.html, press.html, contact.html)
- 1 CSS file (style.css)
- 1 README (README.md)
- 1 .gitignore (.gitignore)
- 2 empty folders (images/, downloads/)

Save all of these to a folder on your computer called `bedneyart-website`.

## Step 3: Upload to GitHub (10 mins)

### Easy Way (GitHub Desktop):

1. Download GitHub Desktop (desktop.github.com)
2. Sign in with your GitHub account
3. Click **File** → **Clone Repository**
4. Select your `bedneyart-website` repo
5. Click Clone

Now:
1. Open Finder/Windows Explorer
2. Go to the cloned folder
3. Drag all your files into it
4. In GitHub Desktop, you'll see all files listed
5. Write a message like "Initial commit: portfolio structure"
6. Click **Commit to Main**
7. Click **Push Origin** (top right)

Done. Your files are on GitHub.

### Technical Way (Terminal/Command Line):

```bash
cd ~/path/to/bedneyart-website
git init
git add .
git commit -m "Initial commit: portfolio structure"
git remote add origin https://github.com/bedneyart/bedneyart-website.git
git branch -M main
git push -u origin main
```

## Step 4: Add Your Hero Image (5 mins)

1. Take your strongest print image
2. Resize it to 1000px wide (use Preview on Mac or Paint on Windows)
3. Save it as `hero.jpg` in the `images/` folder

## Step 5: Deploy to Netlify (10 mins)

1. Go to netlify.com
2. Sign up (free, use GitHub to sign in)
3. Click **Add New Project** → **Import an existing project**
4. Choose GitHub
5. Authorize Netlify to access GitHub
6. Select your `bedneyart-website` repo
7. Click **Deploy Site**

Wait 30 seconds. Your site is live.

You'll see a URL like `flawless-penguin-abc123.netlify.app` — that's your live site.

## Step 6: Connect Your Domain (5 mins)

If you want yourname.com instead of the netlify URL:

1. In Netlify, go to **Site Settings** → **Domain Management**
2. Click **Add Custom Domain**
3. Enter your domain (e.g., bea-bedney.com)
4. Follow the DNS setup instructions (Netlify will tell you exactly what to do)
5. Takes 5–30 mins to go live

## Step 7: Fill in Your Content (30 mins)

Now fill in the placeholders:

**index.html:**
- Hero image is already there
- Replace [INSERT ONE SENTENCE] with your tagline

**work.html:**
- Add your 12 print images to the images/ folder (print-01.jpg through print-12.jpg)
- For each print, replace [INSERT TITLE], [YEAR], [MEDIUM], [DIMENSIONS]

**statement.html:**
- Replace the placeholder with your 150-word artist statement

**bio.html:**
- Replace with your 100-word biography (third person)

**cv.html:**
- Fill in your education, exhibitions, awards, press
- (Keep format simple: Year | Description)

**press.html:**
- Add your 1–2 press mentions
- Or delete this page if you don't have any

**contact.html:**
- Add your email
- Add your Instagram handle

## Step 8: Push Updates to Live (2 mins)

After you've edited everything:

**GitHub Desktop:**
1. You'll see all your changes listed
2. Click **Commit to Main**
3. Click **Push Origin**

**Terminal:**
```bash
git add .
git commit -m "Content: filled in portfolio"
git push
```

Netlify automatically redeploys. Your changes are live in 10–30 seconds.

---

## Done.

Your website is now live. Every time you update files and push to GitHub, Netlify rebuilds automatically.

You can:
- Add more prints later (just add images and update work.html)
- Update your statement, bio, CV anytime
- Change colors/fonts if needed (edit style.css)

All changes push the same way: edit → commit → push.

Questions? The README has more detail. The code is intentionally simple so you can modify it.
