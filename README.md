# Web Starter

A minimal, type-safe MDX starter built with Next.js 16, Velite, and Tailwind CSS. Perfect for blogs, documentation, and content-driven sites.

## Features

- **Next.js 16** - App Router with React Server Components
- **Type-Safe Content** - [Velite](https://velite.js.org/) validates MDX frontmatter
- **MDX Support** - Markdown with React components
- **Syntax Highlighting** - Server-rendered code blocks with highlight.js
- **Dark Mode** - System preference detection via next-themes
- **Base UI Components** - Pre-configured with Tailwind CSS
- **SEO Optimized** - OpenGraph, Twitter cards, sitemap, robots.txt
- **TypeScript** - Full type safety

## Quick Start

```bash
# Clone
git clone https://github.com/brijr/web-starter.git my-site
cd my-site

# Install
bun install

# Dev
bun dev
```

Your site runs at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── [...slug]/        # Dynamic MDX pages
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/
│   ├── markdown/         # MDX components
│   ├── posts/            # Post list components
│   ├── site/             # Site components (footer, logo)
│   └── ui/               # UI components
├── content/              # MDX content
├── lib/                  # Utilities and config
└── velite.config.ts      # Content schema
```

## Writing Content

Create `.mdx` files in `content/`. The file path becomes the URL:

```
content/
├── about.mdx             → /about
├── guide.mdx             → /guide
└── blog/
    └── first-post.mdx    → /blog/first-post
```

### Frontmatter

```mdx
---
title: "My Post"
description: "A description"
date: "2025-01-09"
author: "Your Name"
tags: ["tag1", "tag2"]
published: true
---

Your content here...
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Page title (max 99 chars) |
| `description` | string | No | SEO description |
| `date` | ISO date | Yes | Publication date |
| `author` | string | No | Author name |
| `tags` | string[] | No | Tags for categorization |
| `published` | boolean | No | Show/hide post (default: true) |

## Configuration

### Site Config

Edit `lib/site.ts`:

```typescript
export const siteConfig = {
  name: "Your Site",
  url: "https://yourdomain.com",
  description: "Your description",
  author: "Your Name",
};
```

### Styling

- `app/globals.css` - Theme colors and global styles
- `tailwind.config.ts` - Tailwind configuration

## Scripts

```bash
bun dev       # Start dev server
bun build     # Build for production
bun start     # Start production server
bun lint      # Run ESLint
```

## Deployment

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbrijr%2Fweb-starter)

### Other Platforms

Standard Next.js app - works anywhere that supports Node.js.

## Built With

- [Next.js 16](https://nextjs.org/)
- [Velite](https://velite.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Base UI](https://base-ui.com/)
- [highlight.js](https://highlightjs.org/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## License

MIT

## Credits

Made by [Bridger Tower](https://bridgertower.com)

---

[Report an issue](https://github.com/brijr/web-starter/issues)
