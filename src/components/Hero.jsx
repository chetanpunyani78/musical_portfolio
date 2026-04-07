import { useState, useEffect } from "react";
import { C, FD, FB } from "../styles/theme";
import Equalizer from "./Equalizer";
import DeskMe from "./DeskMe";

const HERO_IMAGE = "/hero-art.webp";

export default function Hero({ playing, onPlay }) {
  const [phase, setPhase] = useState("image"); // image | transitioning | vinyl
  const [showBubble, setShowBubble] = useState(false);
  const [typed, setTyped] = useState("");
  const msg = "YES I MADE THIS WEBSITE WITH AI";

  const handlePlay = () => {
    if (phase !== "image") return;
    setPhase("transitioning");
    onPlay();
    setTimeout(() => {
      setPhase("vinyl");
      setTimeout(() => setShowBubble(true), 600);
    }, 1200);
  };

  useEffect(() => {
    if (!showBubble) return;
    let i = 0;
    const iv = setInterval(() => { i++; setTyped(msg.slice(0, i)); if (i >= msg.length) clearInterval(iv); }, 40);
    return () => clearInterval(iv);
  }, [showBubble]);

  return (
    <div style={{
      minHeight: "100vh", position: "relative", display: "flex",
      flexDirection: "column", alignItems: "center", justifyContent: "center",
      textAlign: "center", overflow: "hidden",
      background: `radial-gradient(ellipse 80% 70% at 50% 55%, #3a2a36 0%, #2a1f28 35%, ${C.bg} 70%, ${C.bgDeep} 100%)`,
    }}>
      {/* IMAGE BACKGROUND — fit fully inside an aspect-ratio box */}
      {phase !== "vinyl" && (
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          display: "flex", alignItems: "center", justifyContent: "center",
          animation: phase === "transitioning" ? "fadeZoomOut 1.2s ease-in-out forwards" : "none",
        }}>
          <div style={{
            position: "relative",
            height: "100vh",
            aspectRatio: "433 / 594",
            maxWidth: "100vw",
          }}>
            <img
              src={HERO_IMAGE}
              alt=""
              style={{
                width: "100%", height: "100%", objectFit: "contain",
                display: "block",
                WebkitMaskImage: "radial-gradient(ellipse 78% 80% at 50% 50%, #000 25%, rgba(0,0,0,.6) 60%, transparent 100%)",
                maskImage: "radial-gradient(ellipse 78% 80% at 50% 50%, #000 25%, rgba(0,0,0,.6) 60%, transparent 100%)",
              }}
            />
            {/* PLAY BUTTON — anchored to vinyl center inside the image */}
            {phase === "image" && (
              <button onClick={handlePlay} style={{
                position: "absolute",
                left: "46%", top: "76%",
                transform: "translate(-50%, -50%)",
                width: "clamp(46px, 6.5vh, 64px)",
                height: "clamp(46px, 6.5vh, 64px)",
                borderRadius: "50%",
                background: `radial-gradient(circle at 35% 35%, ${C.orange}, ${C.coral})`,
                border: "2px solid rgba(255,255,255,.16)", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                animation: "glowPulse 3.5s ease-in-out infinite",
                transition: "transform .3s ease",
                padding: 0,
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "translate(-50%, -50%) scale(1.06)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translate(-50%, -50%) scale(1)"}
              >
                <div style={{ width: 0, height: 0, borderTop: "8px solid transparent", borderBottom: "8px solid transparent", borderLeft: `13px solid ${C.white}`, marginLeft: 3, opacity: .92 }} />
              </button>
            )}
          </div>
          {/* gentle vignette to soften edges into the warm background */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: `radial-gradient(ellipse 65% 60% at 50% 50%, rgba(0,0,0,0) 45%, rgba(26,18,25,.5) 80%, ${C.bg} 100%)`,
          }} />
        </div>
      )}

      {/* PRESS PLAY LABEL */}
      {phase === "image" && (
        <p style={{
          position: "absolute", left: 0, right: 0, bottom: "5%", zIndex: 5,
          color: "rgba(236,226,228,.45)", fontFamily: FB, fontSize: 11, letterSpacing: 3,
          textTransform: "uppercase", textAlign: "center",
        }}>press play</p>
      )}

      {/* TRANSITIONING SPINNER */}
      {phase === "transitioning" && (
        <div style={{ position: "relative", zIndex: 5 }}>
          <div style={{ width: 60, height: 60, border: `3px solid ${C.border}`, borderTopColor: C.orange, borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
        </div>
      )}

      {/* VINYL PLAYER */}
      {phase === "vinyl" && (
        <div style={{ position: "relative", zIndex: 5, padding: "120px 20px 40px" }}>
          {showBubble && (
            <div style={{
              background: `linear-gradient(135deg, ${C.orange}, ${C.coral})`,
              color: C.white, fontFamily: FD, padding: "12px 20px", borderRadius: 14, fontSize: 14, fontWeight: 900,
              textAlign: "center", lineHeight: 1.4, animation: "slideUp .5s ease-out",
              boxShadow: `0 0 30px ${C.orangeGlow}`, maxWidth: 300, margin: "0 auto 30px",
            }}>
              {typed}<span style={{ animation: "blink .5s infinite" }}>▌</span>
            </div>
          )}

          <div style={{ animation: "vinylAppear .8s ease-out", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: 30, flexWrap: "wrap" }}>
          <DeskMe playing={playing} />
          <div style={{ width: 280 }}>
            <svg viewBox="0 0 300 300" style={{ width: 280, height: 280 }}>
              <defs>
                <radialGradient id="vShine" cx="35%" cy="35%">
                  <stop offset="0%" stopColor="#555" stopOpacity=".2" />
                  <stop offset="100%" stopColor="#111" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect x="10" y="10" width="280" height="280" rx="16" fill="#1e1820" stroke={C.border} strokeWidth="1" />
              <rect x="18" y="18" width="264" height="264" rx="12" fill="#161218" />
              <g style={{ transformOrigin: "150px 150px", animation: playing ? "spin 2.5s linear infinite" : "none" }}>
                <circle cx="150" cy="150" r="110" fill={C.vinyl} stroke="#333" strokeWidth="1" />
                <circle cx="150" cy="150" r="110" fill="url(#vShine)" />
                {[100, 88, 76, 64, 52, 40, 30].map((r, i) => (
                  <circle key={i} cx="150" cy="150" r={r} fill="none" stroke="#252525" strokeWidth=".5" />
                ))}
                <path d="M 80 100 A 80 80 0 0 1 200 90" fill="none" stroke={C.lavender} strokeWidth=".7" opacity=".1" />
                <path d="M 100 200 A 60 60 0 0 1 210 180" fill="none" stroke={C.teal} strokeWidth=".7" opacity=".08" />
                <circle cx="150" cy="150" r="22" fill={C.orange} />
                <circle cx="150" cy="150" r="17" fill="#e07830" />
                <circle cx="150" cy="150" r="4" fill={C.bgDeep} />
                <text x="150" y="147" textAnchor="middle" fontSize="5.5" fill={C.white} fontFamily={FB} opacity=".9">CHETAN</text>
                <text x="150" y="155" textAnchor="middle" fontSize="3.8" fill={C.white} fontFamily={FB} opacity=".6">.dev</text>
              </g>
              <g style={{ transformOrigin: "260px 50px", animation: "needleDrop .8s ease-out forwards" }}>
                <line x1="260" y1="50" x2="175" y2="125" stroke="#888" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="175" y1="125" x2="165" y2="135" stroke="#777" strokeWidth="2" strokeLinecap="round" />
                <circle cx="260" cy="50" r="6" fill="#666" stroke="#888" strokeWidth="1" />
                <circle cx="165" cy="135" r="2" fill={C.coral} />
              </g>
            </svg>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginTop: 16 }}>
              <Equalizer playing={playing} size={24} />
              <span style={{ color: C.dim, fontFamily: FB, fontSize: 11, letterSpacing: 2 }}>NOW PLAYING</span>
              <Equalizer playing={playing} size={24} />
            </div>
          </div>
          </div>

          <div style={{ marginTop: 28, animation: "slideUp .6s ease-out .3s both" }}>
            <h1 style={{ fontFamily: FD, fontSize: "clamp(26px,4vw,48px)", lineHeight: 1.2, letterSpacing: 2 }}>
              <span style={{ color: C.orange }}>CHETAN</span> PUNYANI
              <br /><span style={{ fontSize: ".55em", color: C.lavender, letterSpacing: 4 }}>DEVOPS ENGINEER</span>
            </h1>
            <p style={{ color: C.dim, fontSize: 14, maxWidth: 440, margin: "16px auto 28px", lineHeight: 1.8, fontStyle: "italic" }}>
              Orchestrating infrastructure like a DJ mixes tracks.<br />Smooth deploys, zero skips.
            </p>
            <a href="#about" style={{
              display: "inline-block", padding: "12px 32px", border: `2px solid ${C.orange}`, borderRadius: 8,
              color: C.orange, textDecoration: "none", fontWeight: 700, fontSize: 12, letterSpacing: 3,
              textTransform: "uppercase", fontFamily: FD, transition: "all .3s", boxShadow: `0 0 16px ${C.orangeGlow}`,
            }}
            onMouseEnter={e => { e.target.style.background = C.orange; e.target.style.color = C.bgDeep; }}
            onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = C.orange; }}
            >EXPLORE →</a>
          </div>
        </div>
      )}
    </div>
  );
}
