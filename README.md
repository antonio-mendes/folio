# António Mendes — personal site

A personal CV site on warm paper, with a slow dithered field behind the header and a scaffold for a future blog.

## Stack

- [Next.js](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS

## Run locally

```bash
npm install
npm run dev   # needs Node 20.9+
```

Open [http://127.0.0.1:43122](http://127.0.0.1:43122).

## GitHub Pages

Pushes to `main` on GitHub run [`.github/workflows/pages.yml`](.github/workflows/pages.yml). The action builds a static export and publishes it at [https://antoniomendes.dev](https://antoniomendes.dev) (the domain root, with no repository prefix).

In the GitHub repo, set **Settings → Pages → Source** to **GitHub Actions** and **Custom domain** to `antoniomendes.dev`, then enable **Enforce HTTPS**. [`public/CNAME`](public/CNAME) records that domain.

## Edit content

Profile copy lives in [`content/profile.ts`](content/profile.ts). Update experience, talks, skills, and links there.

## Routes

| Path | Description |
|------|-------------|
| `/` | CV home (intro, work, talks, education/skills) |
| `/blog` | Blog scaffold — empty state until posts are added (not linked from the nav yet) |
