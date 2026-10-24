# António Mendes — personal site

A simple, sleek personal CV site with a scaffold for a future blog.

## Stack

- [Next.js](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS
- [shadcn/ui](https://ui.shadcn.com/)
- Subtle dithered hero via [`@paper-design/shaders-react`](https://github.com/paper-design/shaders)

## Run locally

```bash
npm install
npm run dev -- --port 43122
```

Open [http://127.0.0.1:43122](http://127.0.0.1:43122).

## Edit content

Profile copy lives in [`content/profile.ts`](content/profile.ts). Update experience, skills, and contact details there.

## Routes

| Path | Description |
|------|-------------|
| `/` | CV home (hero, about, experience, education/skills, contact) |
| `/blog` | Blog scaffold — empty state until posts are added |
