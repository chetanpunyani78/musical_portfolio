// ━━━ COLOR PALETTE: warm, jazzy, mellow ━━━━━━━━━━━━━
export const C = {
  bg: "#211722",
  bgDeep: "#1a1219",
  panel: "#2a212a",
  border: "#3d3138",
  orange: "#e89260",
  orangeGlow: "#e8926022",
  coral: "#e08787",
  coralGlow: "#e0878718",
  amber: "#e8c074",
  lavender: "#beadde",
  lavGlow: "#beadde1c",
  teal: "#85c7c2",
  rose: "#d68a98",
  text: "#ece2e4",
  dim: "#9b8c90",
  white: "#fff",
  vinyl: "#1a1a1a",
  skin: "#d4956b",
  skinShadow: "#b87a52",
  hair: "#2a1a12",
  denim: "#3b5070",
  denimDark: "#2a3a52",
  desk: "#5a3a28",
  deskDark: "#3a2418",
};

// ━━━ FONTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const FD = "'Righteous', sans-serif";
export const FB = "'Space Mono', monospace";

// ━━━ GLOBAL CSS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const globalCSS = `
@import url('https://fonts.googleapis.com/css2?family=Righteous&family=Space+Mono:wght@400;700&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{background:${C.bg};color:${C.text};font-family:${FB};overflow-x:hidden}
::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-thumb{background:${C.orange};border-radius:9}

@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
@keyframes slideUp{0%{opacity:0;transform:translateY(50px)}100%{opacity:1;transform:translateY(0)}}
@keyframes pulse{0%,100%{opacity:.4}50%{opacity:1}}
@keyframes twinkle{0%,100%{opacity:.15}50%{opacity:.8}}
@keyframes eqBounce1{0%,100%{height:8px}50%{height:28px}}
@keyframes eqBounce2{0%,100%{height:18px}50%{height:10px}}
@keyframes eqBounce3{0%,100%{height:12px}50%{height:32px}}
@keyframes eqBounce4{0%,100%{height:22px}50%{height:14px}}
@keyframes eqBounce5{0%,100%{height:6px}50%{height:24px}}
@keyframes scanline{0%{top:-100%}100%{top:100%}}
@keyframes spectrumShift{0%{filter:hue-rotate(0deg)}50%{filter:hue-rotate(25deg)}100%{filter:hue-rotate(0deg)}}
@keyframes glowPulse{0%,100%{box-shadow:0 0 10px ${C.orangeGlow}}50%{box-shadow:0 0 18px ${C.orangeGlow}}}
@keyframes fadeZoomOut{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(1.15)}}
@keyframes vinylAppear{0%{opacity:0;transform:scale(.5) rotate(-30deg)}100%{opacity:1;transform:scale(1) rotate(0deg)}}
@keyframes needleDrop{0%{transform:rotate(25deg)}100%{transform:rotate(-5deg)}}
@keyframes headBob{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-2px) rotate(2deg)}}
@keyframes typeBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-1px)}}
@keyframes shoulderSway{0%,100%{transform:translateX(0)}50%{transform:translateX(1px)}}
@keyframes noteFloat{0%{opacity:0;transform:translate(0,0)}30%{opacity:.9}100%{opacity:0;transform:translate(20px,-30px)}}
`;
