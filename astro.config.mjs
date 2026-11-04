// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// The blog is a GitHub Pages *project* site. The user site (anras573.github.io)
// owns the anbora.dk custom domain, so this repo is served at anbora.dk/blog.
export default defineConfig({
  site: 'https://anbora.dk',
  base: '/blog',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
});
