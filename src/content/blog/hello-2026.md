---
title: Hello again, 2026
description: Dusting off the blog with a fresh coat of paint and a new stack.
pubDate: 2026-11-04
tags: [meta, astro]
---

After a long break, I'm writing again. The old blog has been retired, and this one is rebuilt from scratch.

## What's under the hood

- **[Astro](https://astro.build)**: posts are plain Markdown (or MDX) files, validated against a typed schema at build time.
- **GitHub Pages**: every push to `main` builds and deploys via GitHub Actions.
- **Zero client-side JavaScript**, apart from a few bytes for the theme toggle.

```ts
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({ title: z.string(), pubDate: z.coerce.date() }),
});
```

> The best time to start writing again was years ago. The second best time is now.

More soon.
