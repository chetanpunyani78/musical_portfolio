import { useState, useEffect, useRef, useCallback } from "react";
import { C, FD, globalCSS } from "./styles/theme";
import { SKILLS } from "./data/skills";
import { PROJECTS } from "./data/projects";

import StarField from "./components/StarField";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Equalizer from "./components/Equalizer";
import { Section, Title, PickDivider } from "./components/Section";
import Terminal from "./components/Terminal";
import SkillChip from "./components/SkillChip";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";
import { Socials, Footer } from "./components/Footer";

// ━━━ AUDIO CONFIG ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Replace this URL with your own MP3 in /public folder after deploy
// e.g. "/my-song.mp3"
// Local mp3 served from /public — guaranteed to play (no CORS / hotlink issues).
// Drop any jazzy mp3 you like at public/music.mp3 to swap it.
const AUDIO_URL = "/music.mp3";

export default function App() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  // Pre-create the audio element once so the user-gesture play() call is synchronous
  useEffect(() => {
    const audio = new Audio();
    audio.src = AUDIO_URL;
    audio.loop = true;
    audio.volume = 0.35;
    audio.preload = "auto";
    audio.addEventListener("error", (e) => {
      console.error("Audio element error:", audio.error, e);
    });
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const startMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) { setPlaying(true); return; }
    const p = audio.play();
    if (p && typeof p.then === "function") {
      p.then(() => setPlaying(true))
       .catch(err => {
         console.error("Audio play() rejected:", err);
         // retry without CORS in case the server doesn't send the header
         audio.crossOrigin = null;
         audio.load();
         audio.play().then(() => setPlaying(true)).catch(e2 => {
           console.error("Audio retry failed:", e2);
           setPlaying(true);
         });
       });
    } else {
      setPlaying(true);
    }
  }, []);

  return (
    <>
      <style>{globalCSS}</style>
      <StarField />
      <Nav playing={playing} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Hero playing={playing} onPlay={startMusic} />

        {/* ═══ ABOUT ═══ */}
        <PickDivider />
        <Section id="about">
          <Title sub="// side A — the origin story">LINER NOTES</Title>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50, alignItems: "center" }}>
            <div>
              <p style={{ color: C.dim, fontSize: 14, lineHeight: 2, marginBottom: 18 }}>
                I'm Chetan — a DevOps engineer who treats infrastructure like a
                well-composed song. Every pipeline tuned, every deployment on
                beat. I automate the boring stuff so teams can focus on making
                great software.
              </p>
              <p style={{ color: C.dim, fontSize: 14, lineHeight: 2, marginBottom: 18 }}>
                When I'm not terraforming clouds or wrangling Jenkins pipelines,
                you'll find me at the gym or playing guitar. Turns out debugging
                production at 2 AM and learning barre chords require the same
                thing — patience and strong fingers.
              </p>
              <p style={{ color: C.dim, fontSize: 14, lineHeight: 2, marginBottom: 24 }}>
                From Ansible playbooks to Grafana dashboards to Java
                microservices — I make sure your systems hit every note.
              </p>
              <div style={{ display: "flex", gap: 28 }}>
                {[
                  { n: "DevOps", l: "PRIMARY" },
                  { n: "Java", l: "SECONDARY" },
                  { n: "🎸", l: "HOBBY" },
                ].map((s) => (
                  <div key={s.l} style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: FD, fontSize: 22, color: C.orange }}>
                      {s.n}
                    </div>
                    <div style={{ fontSize: 10, color: C.dim, marginTop: 4, letterSpacing: 2 }}>
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
              <Socials />
            </div>
            <Terminal />
          </div>
        </Section>

        {/* ═══ SKILLS ═══ */}
        <PickDivider />
        <Section id="skills">
          <Title sub="// the tracklist">THE STACK</Title>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {SKILLS.map((cat) => (
              <div key={cat.cat}>
                <h3
                  style={{
                    fontFamily: FD,
                    fontSize: 13,
                    color: C.coral,
                    marginBottom: 12,
                    letterSpacing: 3,
                  }}
                >
                  {cat.icon} {cat.cat}
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                    gap: 8,
                  }}
                >
                  {cat.items.map((s) => (
                    <SkillChip key={s} name={s} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══ PROJECTS ═══ */}
        <PickDivider />
        <Section id="projects">
          <Title sub="// greatest hits">SETLIST</Title>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </Section>

        {/* ═══ CONTACT ═══ */}
        <PickDivider />
        <Section id="contact">
          <Title sub="// request a track">DROP A LINE</Title>
          <p
            style={{
              color: C.dim,
              fontSize: 13,
              lineHeight: 1.9,
              marginBottom: 28,
              maxWidth: 460,
            }}
          >
            Got a project that needs orchestration? Or want to jam about the
            best guitar tone for a sunny afternoon? Let's connect.
          </p>
          <Contact />
        </Section>

        <Footer />
      </div>
    </>
  );
}
