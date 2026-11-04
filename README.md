# anbora.dk/blog

Personal blog built with [Astro](https://astro.build), deployed to GitHub Pages at **https://anbora.dk/blog**.

## Writing

```sh
npm install
npm run new -- "My post title"   # creates src/content/blog/my-post-title.md as a draft
npm run dev                      # http://localhost:4321/blog/
```

Posts live in `src/content/blog/` as `.md` or `.mdx`. Frontmatter is validated at build time (`src/content.config.ts`):

| field         | required | notes                                      |
| ------------- | -------- | ------------------------------------------ |
| `title`       | yes      |                                            |
| `description` | yes      | Used in lists, RSS and meta tags           |
| `pubDate`     | yes      | `YYYY-MM-DD`                               |
| `updatedDate` | no       |                                            |
| `tags`        | no       | e.g. `[dotnet, architecture]`              |
| `draft`       | no       | `true` hides the post outside `npm run dev` |
| `heroImage`   | no       | Relative path to an image next to the post |

Files starting with `_` are ignored. For posts with images, use a folder: `src/content/blog/my-post/index.md` with images beside it.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which type-checks, builds and publishes `dist/` to GitHub Pages. Pull requests run the build only.

### One-time setup

1. **Repo → Settings → Pages → Source: GitHub Actions.**
2. Leave the custom domain empty for this repo. Because the user site `anras573.github.io` has `anbora.dk` as its custom domain, GitHub automatically serves this project site at `anbora.dk/blog`.
3. Optional: add `Sitemap: https://anbora.dk/blog/sitemap-index.xml` to the `robots.txt` in the `anras573.github.io` repo. Crawlers only read `robots.txt` at the domain root.

## Structure

```
src/
  content/blog/        posts
  content.config.ts    post schema
  consts.ts            site title, author, socials, url() helper for the /blog base
  layouts/             Base (HTML shell, meta) and Post
  components/          Header, Footer, PostList, FormattedDate
  pages/               routes: index, posts/[...id], tags, about, rss.xml, 404
  styles/global.css    the whole design: typography, light/dark tokens
```

Always build internal links with `url('path/')` from `src/consts.ts` so they get the `/blog/` prefix.
