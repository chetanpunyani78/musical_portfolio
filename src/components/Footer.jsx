import { C, FD, FB } from "../styles/theme";

const LINKS = [
  { name: "GitHub", url: "https://github.com/chetanpunyani78", icon: "⚡" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/chetan-punyani-04541a2b8/", icon: "🔗" },
  { name: "LeetCode", url: "https://leetcode.com/u/chetanpunyani78/", icon: "🧩" },
];

export function Socials() {
  return (
    <div style={{ display: "flex", gap: 14, marginTop: 24 }}>
      {LINKS.map((l) => (
        <a
          key={l.name}
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: C.dim, textDecoration: "none", fontSize: 12,
            padding: "8px 16px", border: `1px solid ${C.border}`,
            borderRadius: 8, transition: "all .2s", fontFamily: FB,
            display: "flex", alignItems: "center", gap: 6,
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.orange; e.currentTarget.style.color = C.orange; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.dim; }}
        >
          {l.icon} {l.name}
        </a>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "40px 20px", borderTop: `1px solid ${C.border}` }}>
      <span style={{ fontFamily: FD, fontSize: 13 }}>
        <span style={{ color: C.orange }}>CHETAN</span>
        <span style={{ color: C.lavender }}>.dev</span>
      </span>
      <span style={{ color: C.dim, fontSize: 11, marginLeft: 12 }}>
        — strummed with AI, deployed with soul 🎸
      </span>
    </footer>
  );
}
