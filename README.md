# 🎸 Chetan Punyani — Portfolio

Jazzy, vinyl-themed DevOps engineer portfolio.

## 📁 Project Structure

```
src/
├── main.jsx                 # React entry point
├── App.jsx                  # Main app — wires all components + audio
├── styles/
│   └── theme.js             # Colors, fonts, global CSS
├── data/
│   ├── config.js            # EmailJS credentials (edit this!)
│   ├── skills.js            # Skills data
│   └── projects.js          # Projects data
└── components/
    ├── StarField.jsx         # Animated star background
    ├── Nav.jsx               # Sticky nav with equalizer
    ├── SpeechBubble.jsx      # "YES I MADE THIS WITH AI" typing
    ├── VinylScene.jsx        # Main hero — guy at desk + vinyl
    ├── Equalizer.jsx         # Animated EQ bars
    ├── Section.jsx           # Section, Title, PickDivider
    ├── Terminal.jsx           # Typing terminal animation
    ├── SkillChip.jsx          # Hoverable skill tag
    ├── ProjectCard.jsx        # Project card with scanline
    ├── Contact.jsx            # EmailJS contact form
    └── Footer.jsx             # Footer + social links
```

## ⚡ Quick Start

```bash
npm install
npm run dev
```

## 📧 EmailJS Setup

Edit `src/data/config.js` with your credentials from emailjs.com.

## 🎵 Custom Music

Replace the `AUDIO_URL` in `src/App.jsx` with your own MP3.
Drop the file in `public/` folder and use `"/my-song.mp3"`.

## 🌐 Deploy

Push to GitHub → Import in Vercel → Done.
Every `git push` auto-redeploys.

## 🎨 Customize

| What          | File                        |
|---------------|-----------------------------|
| Colors/fonts  | `src/styles/theme.js`       |
| Skills        | `src/data/skills.js`        |
| Projects      | `src/data/projects.js`      |
| EmailJS creds | `src/data/config.js`        |
| Bio text      | `src/App.jsx` (About)       |
| Social links  | `src/components/Footer.jsx` |
| Audio URL     | `src/App.jsx` (top)         |
| Character SVG | `src/components/VinylScene.jsx` |
