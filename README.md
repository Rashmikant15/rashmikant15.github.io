# Rashmi Kant — Personal Research Website

A dependency-free static site for GitHub Pages. No Jekyll, Ruby, npm, or build command is required.

## 1. Preview locally

Open `index.html` in your browser, or run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## 2. Replace the profile picture

Replace `assets/images/profile-placeholder.svg` with your own image, for example `assets/images/profile.jpg`.
Then search all HTML files for:

```text
assets/images/profile-placeholder.svg
```

and replace it with:

```text
assets/images/profile.jpg
```

A square image (at least 600x600 px) works best.

## 3. Review public contact details

The site currently shows email, GitHub, LinkedIn, and Tokyo, Japan. Your phone number is intentionally not published.

## 4. Push to GitHub Pages

For a personal site, create a repository named exactly:

```text
Rashmikant15.github.io
```

(or `<your-github-username>.github.io` if your username is different).

From this folder:

```bash
git init
git add .
git commit -m "Create personal research website"
git branch -M main
git remote add origin https://github.com/Rashmikant15/Rashmikant15.github.io.git
git push -u origin main
```

Then in GitHub open **Settings → Pages** and choose **Deploy from a branch → main → /(root)** if Pages is not enabled automatically.

## 5. Main files

- `index.html` — homepage
- `research.html` — research areas
- `publications.html` — journal + conference outputs
- `projects.html` — selected projects
- `teaching.html` — teaching and mentoring
- `cv.html` — web CV
- `contact.html` — contact page
- `assets/files/Rashmi_Kant_CV.pdf` — downloadable CV
- `assets/css/style.css` — all styling
- `assets/js/main.js` — mobile menu, theme toggle, footer year

## Updating the site

After editing files:

```bash
git add .
git commit -m "Update website"
git push
```

GitHub Pages will publish the new version after the push.
