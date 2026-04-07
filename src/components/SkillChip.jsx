import { useState } from "react";
import { C } from "../styles/theme";

const ACCENT_COLORS = [C.orange, C.coral, C.amber, C.lavender, C.teal, C.rose];

export default function SkillChip({ name }) {
  const [h, setH] = useState(false);
  const c = ACCENT_COLORS[name.length % ACCENT_COLORS.length];

  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: h ? `${c}20` : `${c}08`,
        border: `1px solid ${h ? c : C.border}`,
        borderRadius: 8,
        padding: "9px 14px",
        fontSize: 12.5,
        fontWeight: 600,
        cursor: "default",
        transition: "all .25s",
        color: h ? c : C.text,
        transform: h ? "translateY(-2px)" : "none",
        boxShadow: h ? `0 4px 16px ${c}33` : "none",
      }}
    >
      {name}
    </div>
  );
}
