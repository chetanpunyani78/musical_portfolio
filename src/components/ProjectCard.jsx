import { useState } from "react";
import { C, FD } from "../styles/theme";

const ACCENTS = [C.orange, C.coral, C.lavender, C.teal];

export default function ProjectCard({ project, index }) {
  const [h, setH] = useState(false);
  const accent = ACCENTS[index % 4];

  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: C.panel,
        border: `1px solid ${h ? accent : C.border}`,
        borderRadius: 14,
        padding: 28,
        cursor: "default",
        transition: "all .4s cubic-bezier(.16,1,.3,1)",
        transform: h ? "translateY(-5px)" : "none",
        boxShadow: h ? `0 16px 50px ${accent}22` : `0 4px 20px rgba(0,0,0,.3)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {h && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: "2px",
            background: `linear-gradient(90deg, transparent, ${accent}66, transparent)`,
            animation: "scanline 1.5s linear infinite",
          }}
        />
      )}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: 32, marginBottom: 14 }}>{project.icon}</div>
        <h3 style={{ fontFamily: FD, fontSize: 17, marginBottom: 8, color: C.white, letterSpacing: 1 }}>
          {project.title}
        </h3>
        <p style={{ color: C.dim, fontSize: 12.5, lineHeight: 1.7, marginBottom: 18 }}>
          {project.desc}
        </p>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {project.tags.map((t) => (
            <span
              key={t}
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: accent,
                background: `${accent}12`,
                padding: "3px 9px",
                borderRadius: 16,
                border: `1px solid ${accent}25`,
                letterSpacing: 1,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
