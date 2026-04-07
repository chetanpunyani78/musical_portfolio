import { useState, useEffect, useRef } from "react";
import { C, FD } from "../styles/theme";

export function Section({ id, children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      style={{
        padding: "100px 40px",
        maxWidth: 1080,
        margin: "0 auto",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(50px)",
        transition: "all .8s cubic-bezier(.16,1,.3,1)",
      }}
    >
      {children}
    </section>
  );
}

export function Title({ children, sub }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <h2 style={{ fontFamily: FD, fontSize: 34, color: C.white, letterSpacing: 2 }}>
        {children}
      </h2>
      <div
        style={{
          width: 60,
          height: 3,
          marginTop: 12,
          borderRadius: 2,
          background: `linear-gradient(90deg, ${C.orange}, ${C.coral}, ${C.lavender})`,
          boxShadow: `0 0 12px ${C.orangeGlow}`,
        }}
      />
      {sub && (
        <p style={{ color: C.dim, fontSize: 13, marginTop: 12, fontStyle: "italic" }}>
          {sub}
        </p>
      )}
    </div>
  );
}

export function PickDivider() {
  return (
    <div style={{ textAlign: "center", padding: "24px 0" }}>
      <svg viewBox="0 0 600 30" style={{ width: 360, height: 24, opacity: 0.5 }}>
        <defs>
          <linearGradient id="pickGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={C.orange} />
            <stop offset="50%" stopColor={C.coral} />
            <stop offset="100%" stopColor={C.lavender} />
          </linearGradient>
        </defs>
        <line x1="0" y1="15" x2="255" y2="15" stroke="url(#pickGrad)" strokeWidth="1" />
        <path d="M 290 5 Q 300 0, 310 5 Q 312 15, 300 27 Q 288 15, 290 5 Z" fill={C.amber} opacity=".8" />
        <line x1="345" y1="15" x2="600" y2="15" stroke="url(#pickGrad)" strokeWidth="1" />
      </svg>
    </div>
  );
}
