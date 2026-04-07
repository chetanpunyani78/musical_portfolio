import { useState, useEffect } from "react";
import { C, FB } from "../styles/theme";

const LINES = [
  { t: "$ whoami", c: C.orange },
  { t: "> Chetan Punyani — DevOps Engineer", c: C.dim },
  { t: "$ ansible-playbook deploy.yml", c: C.orange },
  { t: "> PLAY [production] ✓ All tasks passed.", c: C.dim },
  { t: "$ terraform plan", c: C.orange },
  { t: "> 12 to add, 0 to change, 0 to destroy.", c: C.teal },
  { t: '$ echo "my guitar has better uptime than prod"', c: C.orange },
  { t: "> ...no comment from the SRE team.", c: C.amber },
];

export default function Terminal() {
  const [vis, setVis] = useState([]);

  useEffect(() => {
    LINES.forEach((_, i) =>
      setTimeout(() => setVis((p) => [...p, i]), 350 * i + 400)
    );
  }, []);

  return (
    <div
      style={{
        background: C.panel,
        border: `1px solid ${C.border}`,
        borderRadius: 12,
        overflow: "hidden",
        width: "100%",
        maxWidth: 540,
        boxShadow: `0 0 40px ${C.coralGlow}`,
      }}
    >
      <div
        style={{
          background: C.bgDeep,
          padding: "10px 14px",
          display: "flex",
          gap: 7,
          alignItems: "center",
        }}
      >
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: C.coral }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: C.amber }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: C.teal }} />
        <span style={{ marginLeft: 10, fontSize: 11, color: C.dim, fontFamily: FB }}>
          ~/chetan ~ bash
        </span>
      </div>
      <div style={{ padding: 18, fontSize: 12.5, lineHeight: 2.1 }}>
        {LINES.map((l, i) => (
          <div
            key={i}
            style={{
              opacity: vis.includes(i) ? 1 : 0,
              transform: vis.includes(i) ? "translateX(0)" : "translateX(-15px)",
              transition: "all .35s ease",
              color: l.c,
              fontWeight: l.t.startsWith("$") ? 700 : 400,
            }}
          >
            {l.t}
          </div>
        ))}
        <span style={{ color: C.orange, animation: "blink 1s infinite" }}>▌</span>
      </div>
    </div>
  );
}
