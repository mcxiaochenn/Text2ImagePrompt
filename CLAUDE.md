# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI 文生图提示词生成器 — a pure static single-page tool that takes a user's scene description and generates positive/negative trigger words for Stable Diffusion via an LLM API. All API calls happen client-side; there is no server or SSR.

## Commands

```bash
pnpm dev          # Dev server
pnpm build        # Build to dist/
pnpm preview      # Preview production build
```

Node >= 22.12.0 required. Package manager is pnpm.

## Architecture

- **`src/config.ts`** — Single source of truth for site metadata, API defaults, default prompts, ICP filing. Self-hosters only need to edit this file.
- **`src/layouts/Layout.astro`** — Global layout: `<head>` (title, meta description, favicon from config), `<style is:global>` (all styles), footer (author hardcoded, uptime, ICP), home link. Author info is intentionally **not** in config — it's hardcoded.
- **`src/pages/index.astro`** — The entire app: settings panel, input textarea, output (positive/negative prompts), history list. All JS is inline `<script>` with `define:vars` to pass config values to client-side code.

## Key Implementation Details

- **Astro `<style>` is scoped by default.** Dynamic elements created via `document.createElement` in JS won't match scoped styles. The layout uses `<style is:global>` to work around this.
- **`define:vars`** on `<script>` tags is how server-side config values reach client-side JS (e.g., `apiConfig`, `defaultPromptsConfig`, `createdAt`).
- **localStorage keys:** `t2i_api_config` (API settings), `t2i_defaults` (default prompts), `t2i_history` (generation history, max 50 items).
- **Output is pure static** (`dist/` — HTML/CSS/JS only). No adapters, no SSR, no serverless functions. Deployable to any static host (GitHub Pages, Netlify, Cloudflare Pages, Vercel Static, etc.).
- **Icons:** Font Awesome 6 via CDN (`<link>` in Layout). Do not use emoji for icons.
- **No external CSS framework.** All styles are hand-written in the `<style is:global>` block.

## Config (`src/config.ts`)

```ts
site.title        // Page title (h1 + <title>)
site.desc         // Short description shown on page
site.description  // Full SEO meta description
site.createdAt    // Site uptime start (ISO datetime)
site.favicon      // Favicon URL (external allowed)

api.baseUrl       // Default LLM API base URL
api.model         // Default model name

defaultPrompts.positive  // Merged into every generation
defaultPrompts.negative  // Merged into every generation

icp.show    // Boolean — show ICP filing in footer
icp.text    // ICP filing number
icp.link    // ICP filing link
```

## Conventions

- All user-facing text is in Chinese (zh-CN), except generated prompts which are always English.
- The LLM system prompt enforces English output in `POSITIVE: ... NEGATIVE: ...` format.
- History items auto-save on generation; default prompts auto-save on blur (no save button).
- Author identity (辰渊尘 ChenDusk) is hardcoded in Layout.astro, not exported from config.
