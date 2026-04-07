import { useMemo } from "react";
import { C } from "../styles/theme";

export default function StarField() {
  const stars = useMemo(() =>
    Array.from({ length: 60 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      s: Math.random() * 2 + 0.5,
      d: Math.random() * 5 + 2,
      delay: Math.random() * 5,
      color: [C.orange, C.amber, C.lavender, C.rose, C.teal, "#fff"][
        Math.floor(Math.random() * 6)
      ],
    })),
  []);

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
      {stars.map((st, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${st.x}%`,
            top: `${st.y}%`,
            width: st.s,
            height: st.s,
            borderRadius: "50%",
            background: st.color,
            animation: `twinkle ${st.d}s ease-in-out ${st.delay}s infinite`,
          }}
        />
      ))}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "35vh",
          background: `linear-gradient(to top, ${C.orange}08, ${C.coral}05, transparent)`,
        }}
      />
    </div>
  );
}
