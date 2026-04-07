import { useState, useEffect } from "react";
import { C, FD, FB } from "../styles/theme";
import Equalizer from "./Equalizer";

const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

export default function Nav({ playing }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(26,17,24,.94)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.border}` : "none",
        transition: "all .3s",
        padding: "14px 36px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontFamily: FD, fontSize: 20, letterSpacing: 2 }}>
          <span style={{ color: C.orange }}>CHETAN</span>
          <span style={{ color: C.lavender }}>.dev</span>
        </span>
        {playing && <Equalizer playing={playing} size={20} />}
      </div>
      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        {NAV_LINKS.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            style={{
              color: C.dim,
              textDecoration: "none",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              transition: "color .2s",
              fontFamily: FB,
            }}
            onMouseEnter={(e) => (e.target.style.color = C.orange)}
            onMouseLeave={(e) => (e.target.style.color = C.dim)}
          >
            {l}
          </a>
        ))}
        <a
          href="/resume.pdf"
          download="Chetan_Punyani_Resume.pdf"
          style={{
            color: C.orange,
            textDecoration: "none",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            fontFamily: FB,
            border: `1px solid ${C.orange}`,
            padding: "7px 14px",
            borderRadius: 6,
            transition: "all .25s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = C.orange; e.currentTarget.style.color = C.bgDeep; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.orange; }}
        >
          ↓ Resume
        </a>
      </div>
    </nav>
  );
}
