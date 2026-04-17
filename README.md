# Academic Homepage

A minimal, al-folio–inspired personal academic website built with Jekyll.
Designed for a graduate student in AI (UdeM · Mila).

## Structure

```
├── _config.yml               # site settings, author, nav
├── Gemfile                   # Jekyll + plugins
├── index.html                # about / landing page
├── _layouts/                 # default, page, post, note
├── _includes/                # head, header, footer
├── _pages/                   # publications, projects, cv, blog, notes
├── _posts/                   # blog posts (YYYY-MM-DD-slug.md)
├── _notes/                   # lecture-notes collection
├── _data/publications.yml    # structured list of papers
├── assets/
│   ├── css/main.scss         # all styles
│   ├── img/                  # profile.jpg lives here
│   └── pdf/                  # cv.pdf lives here
```

## Running locally

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

## Deploying to GitHub Pages

1. Create a repo named `<username>.github.io`.
2. Push the contents of this folder to the `main` branch.
3. In *Settings → Pages*, set **Source** to `Deploy from a branch` → `main`.
4. Update `url:` in `_config.yml` to `https://<username>.github.io`.

## Customising

- **Identity:** edit the `author:` block in `_config.yml`.
- **Profile photo:** drop a square JPG at `assets/img/profile.jpg`.
- **CV PDF:** drop your CV at `assets/pdf/cv.pdf`.
- **Publications:** add entries to `_data/publications.yml`. The `authors`
  field accepts HTML, so wrap your name in `<span class='me'>…</span>` to
  highlight it.
- **Projects:** edit `_pages/projects.md` (plain HTML grid).
- **CV timeline:** edit `_pages/cv.md`.
- **Blog posts:** add Markdown files to `_posts/` using
  `YYYY-MM-DD-slug.md`.
- **Lecture notes:** add Markdown files to `_notes/` with a `course:` and
  `order:` field in the front matter.
- **Colours &amp; typography:** edit the CSS variables at the top of
  `assets/css/main.scss`.
- **Dark mode:** toggle is built in (◐ button in the header); preference
  persists via `localStorage`.

## Optional niceties

- **MathJax / KaTeX:** add a `<script>` in `_includes/head.html` to
  render $\LaTeX$ in notes and posts.
- **BibTeX export:** point `pub.bibtex` at an `.bib` file in
  `assets/bib/`.
- **Google Analytics / Plausible:** add the snippet at the bottom of
  `_includes/footer.html`.

Have fun.
