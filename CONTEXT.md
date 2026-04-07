# CHETAN.dev — Portfolio Project Context

## Overview

A jazzy, vinyl-themed portfolio website for **Chetan Punyani**, a DevOps & Java Engineer. The site uses a warm spectrum color palette, music/vinyl metaphors throughout, and features an interactive hero where a painting-style artwork transitions into a spinning vinyl player when the user clicks play — triggering background music.

Built with React + Vite. Deployed on Vercel via GitHub auto-deploy. Contact form powered by EmailJS.

---

## Design Philosophy

**Theme:** Jazz club meets outer space. Warm, mellow tones with subtle cosmic elements (twinkling stars in spectrum colors). The entire site uses music production metaphors — sections are called "Liner Notes", "The Stack" (tracklist), "Setlist" (projects), and "Drop a Line" (contact). Dividers use a guitar pick shape.

**Color Palette:**
- Primary: `#ff8c42` (warm orange)
- Secondary: `#ff6b6b` (coral)
- Accent: `#ffc857` (amber), `#c4a8ff` (lavender), `#6dd3ce` (teal), `#e8788a` (rose)
- Background: `#1a1118` (deep warm black)
- Panel: `#241c22` (slightly lighter)
- Text: `#f0e6e8` (warm white), `#8a7a7e` (muted dim)

**Fonts:**
- Display: Righteous (Google Fonts) — rounded, retro-modern
- Body: Space Mono (Google Fonts) — monospace, techy

**Art References:** Pinterest jazz/vinyl paintings — painterly, warm-toned artwork of a figure with headphones leaning over a turntable. The uploaded artwork (`hero-art.webp`) is used as the landing background.

---

## Hero Interaction Flow

This is the core unique feature of the site:

```
┌─────────────────────────────────────┐
│  PHASE 1: IMAGE LANDING             │
│                                     │
│  Full-screen artwork background     │
│  Dark gradient overlay              │
│  "CHETAN PUNYANI"                   │
│  "DevOps Engineer"                  │
│  [ ▶ ] glowing play button          │
│  "press play"                       │
│                                     │
│  User clicks play button ──────────►│
├─────────────────────────────────────┤
│  PHASE 2: TRANSITION (1.2s)         │
│                                     │
│  Image zooms out + fades            │
│  (fadeZoomOut CSS animation)        │
│  Loading spinner appears briefly    │
│  Audio starts playing               │
│                                     │
├─────────────────────────────────────┤
│  PHASE 3: VINYL PLAYER              │
│                                     │
│  Record drops in (vinylAppear)      │
│  Tone arm swings down (needleDrop)  │
│  Vinyl spins infinitely (spin)      │
│  Speech bubble types:               │
│    "YES I MADE THIS WEBSITE WITH AI"│
│  Equalizer bars bounce              │
│  Name + subtitle + EXPLORE button   │
│                                     │
└─────────────────────────────────────┘
```

**Audio behavior:** The `Audio` object is created *on click* (not on page load) because browsers block autoplay. If audio fails to play (e.g. codec issue), the vinyl animation still proceeds — the site degrades gracefully.

---

## Project Structure

```
portfolio/
├── index.html                  # HTML entry, font preloads, favicon
├── package.json                # React 18, Vite 5, @emailjs/browser
├── vite.config.js              # Vite + React plugin
├── .gitignore                  # node_modules, dist, .env
├── README.md                   # Quick start + deploy guide
│
├── public/
│   └── hero-art.webp           # Landing artwork (173KB)
│
└── src/
    ├── main.jsx                # ReactDOM.createRoot mount
    ├── App.jsx                 # Main orchestrator (audio, routing, layout)
    │
    ├── styles/
    │   └── theme.js            # Colors (C), fonts (FD, FB), globalCSS
    │                           # All keyframe animations defined here
    │
    ├── data/
    │   ├── config.js           # EmailJS credentials (3 constants)
    │   ├── skills.js           # Skills array grouped by category
    │   └── projects.js         # Projects array with title/desc/tags/icon
    │
    └── components/
        ├── Hero.jsx            # 3-phase hero (image → transition → vinyl)
        ├── Nav.jsx             # Sticky nav, blur on scroll, EQ when playing
        ├── Equalizer.jsx       # 5-bar animated equalizer (spectrum colors)
        ├── StarField.jsx       # 60 twinkling star divs + gradient nebula
        ├── Section.jsx         # Section (scroll reveal), Title, PickDivider
        ├── Terminal.jsx        # Typing terminal with DevOps commands
        ├── SkillChip.jsx       # Hoverable skill tag (color by name length)
        ├── ProjectCard.jsx     # Project card with scanline hover effect
        ├── Contact.jsx         # EmailJS-powered contact form
        └── Footer.jsx          # Footer + Socials (GitHub, LinkedIn)
```

---

## Component Details

### App.jsx
- Manages global `playing` state and `audioRef`
- `startMusic()` — creates Audio on user click, plays it, sets playing state
- Passes `playing` to Nav (shows EQ) and Hero (triggers vinyl)
- Renders all sections in order with PickDivider between them

### Hero.jsx
- Internal state: `phase` — "image" | "transitioning" | "vinyl"
- Phase 1: Background image with CSS `background-image`, dark overlay gradient, pulsing play button
- Phase 2: `fadeZoomOut` animation on image, spinner shown
- Phase 3: SVG vinyl record (spins via CSS `spin`), tone arm with `needleDrop`, speech bubble with character-by-character typing
- Only ONE play button exists (in phase 1)

### Nav.jsx
- Fixed position, transparent until scroll > 50px then blurred dark background
- Shows site name "CHETAN.dev" + Equalizer component when music is playing
- 4 anchor links: About, Skills, Projects, Contact

### Equalizer.jsx
- 5 bars with gradient colors (orange → coral → amber → lavender → teal)
- Each bar has different bounce timing for organic feel
- Accepts `playing` prop to start/stop, `size` prop for scaling

### Terminal.jsx
- Simulates terminal with sequential line reveal (350ms delay between lines)
- Commands in orange, outputs in dim/teal/amber
- Includes humor: "my guitar has better uptime than prod"

### Section.jsx (exports 3 things)
- `Section` — IntersectionObserver-based scroll reveal (fade up)
- `Title` — Section heading with gradient underline + optional subtitle
- `PickDivider` — SVG guitar pick shape between sections

### Contact.jsx
- Uses `@emailjs/browser` for real email sending
- Form fields: from_name, from_email, message (names match EmailJS template)
- Status states: idle → sending → sent | error
- Uses `<form ref>` with `emailjs.sendForm()`

### StarField.jsx
- 60 absolutely positioned divs with random position, size, color, twinkle timing
- useMemo to prevent re-renders
- Bottom gradient overlay for nebula effect

---

## Animations Reference

All defined in `src/styles/theme.js` via the `globalCSS` template literal:

| Animation | Used In | Purpose |
|---|---|---|
| `spin` | Hero vinyl, Nav spinner | Continuous 360° rotation |
| `blink` | Speech bubble cursor, Terminal cursor | Blinking caret |
| `slideUp` | Hero text, Speech bubble | Fade in + translate up |
| `pulse` | Headphone LEDs, Power LED | Opacity pulse |
| `twinkle` | StarField | Random star twinkling |
| `eqBounce1-5` | Equalizer | Bouncing bars (different timings) |
| `scanline` | ProjectCard hover | CRT-style line sweep |
| `glowPulse` | Play button | Pulsing box-shadow glow |
| `fadeZoomOut` | Hero image | Zoom + fade out transition |
| `vinylAppear` | Vinyl SVG | Scale up + rotate in |
| `needleDrop` | Tone arm | Rotate into playing position |
| `spectrumShift` | Hero glow | Hue rotation for spectrum effect |

---

## Data Schema

### skills.js
```js
{
  cat: "CATEGORY NAME",    // Displayed as section header
  icon: "🔄",              // Emoji prefix
  items: ["Tool1", "Tool2"] // Array of skill names
}
```

### projects.js
```js
{
  title: "Project Name",
  desc: "One-liner description.",
  tags: ["Tag1", "Tag2"],   // Shown as colored chips
  icon: "🎵"                // Emoji displayed large
}
```

### config.js
```js
EMAILJS_SERVICE_ID   // From EmailJS dashboard → Email Services
EMAILJS_TEMPLATE_ID  // From EmailJS dashboard → Email Templates
EMAILJS_PUBLIC_KEY   // From EmailJS dashboard → Account → API Keys
```

---

## EmailJS Template Variables

The contact form sends these variables to EmailJS:

| Form field name | EmailJS template variable | Description |
|---|---|---|
| `from_name` | `{{from_name}}` | Sender's name |
| `from_email` | `{{from_email}}` | Sender's email |
| `message` | `{{message}}` | Message body |

The EmailJS template must use these exact variable names. The "Reply To" field in the template should be set to `{{from_email}}`.

---

## Deployment

**Stack:** Vite + React → GitHub → Vercel (auto-deploy on push)

**Repository:** `https://github.com/chetanpunyani78/neodev-portfolio`

**Vercel project:** `neodev-portfolio.vercel.app`

**Deploy steps:**
```bash
cd portfolio
npm install
git init
git add .
git commit -m "commit message"
git remote add origin https://github.com/chetanpunyani78/neodev-portfolio.git
git branch -M main
git push -u origin main --force
```

Vercel auto-detects Vite, builds, and deploys. Every subsequent `git push` triggers a new deployment.

**Custom domain:** Vercel Dashboard → Project → Settings → Domains → Add domain.

---

## Audio Configuration

The audio URL is defined at the top of `src/App.jsx`:

```js
const AUDIO_URL = "https://cdn.pixabay.com/audio/2022/10/25/audio_7a34ef872a.mp3";
```

**To use your own music:**
1. Place an MP3 file in the `public/` folder (e.g. `public/my-song.mp3`)
2. Change the URL to `"/my-song.mp3"`
3. Note: Copyrighted music (Pink Floyd, etc.) cannot be used legally without a license. Use royalty-free tracks or self-composed music.

**Why audio might not play locally:**
- Some browsers block audio on `localhost` even with user interaction
- The Pixabay CDN URL may be rate-limited or geo-blocked
- Solution: Use a local file in `public/` instead

---

## Customization Quick Reference

| What to change | File | What to edit |
|---|---|---|
| Colors, fonts | `src/styles/theme.js` | `C` object, `FD`/`FB` strings |
| Skills list | `src/data/skills.js` | Add/remove/reorder categories and items |
| Projects | `src/data/projects.js` | Edit title, desc, tags, icon |
| EmailJS credentials | `src/data/config.js` | 3 constant values |
| Bio / About text | `src/App.jsx` | About section paragraphs |
| Social links | `src/components/Footer.jsx` | `LINKS` array URLs |
| Hero image | `public/hero-art.webp` | Replace file (keep same name) |
| Audio track | `src/App.jsx` | `AUDIO_URL` constant |
| Terminal commands | `src/components/Terminal.jsx` | `LINES` array |
| Section titles | `src/App.jsx` | `<Title>` component text |
| Nav brand | `src/components/Nav.jsx` | "CHETAN" + ".dev" text |

---

## Current Chetan Punyani Profile

**Role:** DevOps Engineer

**Core Skills:**
- CI/CD: Jenkins, Rundeck, Azure DevOps, GitHub Actions
- Infrastructure: Terraform, Ansible, Azure, Docker, Kubernetes
- Monitoring: Grafana, Splunk, Prometheus
- Development: Java, Spring Boot, Maven, REST APIs
- Databases: MongoDB, SQL Server, PostgreSQL
- Essentials: Linux, Bash, Git, Python, Nginx

**Interests:** Guitar, gym/fitness, music (vinyl/jazz)

**GitHub:** `chetanpunyani78`

**Humor style in site:**
- Terminal: "my guitar has better uptime than prod" → "no comment from the SRE team"
- Bio: "debugging production at 2 AM and learning barre chords require the same thing — patience and strong fingers"
- Footer: "strummed with AI, deployed with soul"
- Speech bubble: "YES I MADE THIS WEBSITE WITH AI"

---

## Version History

| Version | Changes |
|---|---|
| v1 | Akira/space theme, angry astronaut SVG, green accent |
| v2 | Warm jazz theme, vinyl player, detailed SVG character, guitar |
| v3 | Image-based hero landing, play → vinyl transition, removed SVG character, removed guitar from scene, clean component architecture, single play button, fixed audio |
