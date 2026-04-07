# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # install dependencies
npm run dev       # start dev server (Vite, hot reload)
npm run build     # production build → dist/
npm run preview   # preview production build locally
```

No test suite is configured.

## Architecture

Single-page React app built with Vite. No router — all sections (`#about`, `#skills`, `#projects`, `#contact`) live on one scrollable page in `src/App.jsx`, which assembles every component and owns the audio state.

**Styling** is done entirely with inline styles using constants from `src/styles/theme.js`. There are no CSS modules or Tailwind classes. The exported `C` object holds all colors, `FD`/`FB` are font family strings, and `globalCSS` is a template-literal string injected via `<style>` in App. All keyframe animations are defined there.

**Data** is static:
- `src/data/skills.js` — array of `{ cat, icon, items[] }` skill categories
- `src/data/projects.js` — array of `{ title, desc, tags[], icon }` project cards
- `src/data/config.js` — EmailJS credentials (`EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_PUBLIC_KEY`); must be filled in for the contact form to work

**Audio** is managed in `App.jsx`. `AUDIO_URL` at the top of the file points to an external MP3. To use a local file, drop it in `public/` and set the URL to `"/filename.mp3"`.

**Contact form** (`src/components/Contact.jsx`) uses `@emailjs/browser` — it reads the three constants from `config.js` and calls `emailjs.sendForm` directly from the browser; no backend needed.

## Customization Quick Reference

| What to change | Where |
|---|---|
| Colors / fonts / animations | `src/styles/theme.js` |
| Skills list | `src/data/skills.js` |
| Projects list | `src/data/projects.js` |
| EmailJS credentials | `src/data/config.js` |
| Bio copy | `src/App.jsx` (About section) |
| Background music URL | `src/App.jsx` (`AUDIO_URL` constant) |
| Social links / footer | `src/components/Footer.jsx` |
