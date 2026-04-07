import { C, FB } from "../styles/theme";

// Animated character vibing at a desk with a laptop, while the vinyl plays.
export default function DeskMe({ playing }) {
  const anim = playing ? "running" : "paused";
  return (
    <svg viewBox="0 0 240 200" style={{ width: 220, height: 184, display: "block" }}>
      {/* floating music notes */}
      {playing && (
        <g fill={C.lavender} fontFamily={FB} fontSize="14">
          <text x="170" y="55" style={{ animation: "noteFloat 2.6s ease-out infinite" }}>♪</text>
          <text x="180" y="70" style={{ animation: "noteFloat 2.6s ease-out .9s infinite" }}>♫</text>
          <text x="165" y="48" style={{ animation: "noteFloat 2.6s ease-out 1.7s infinite" }}>♩</text>
        </g>
      )}

      {/* back wall accent */}
      <rect x="0" y="0" width="240" height="200" fill="none" />

      {/* desk top */}
      <rect x="20" y="150" width="200" height="6" rx="1" fill={C.desk} />
      <rect x="20" y="156" width="200" height="3" fill={C.deskDark} />
      {/* desk legs */}
      <rect x="28" y="159" width="5" height="38" fill={C.deskDark} />
      <rect x="207" y="159" width="5" height="38" fill={C.deskDark} />

      {/* coffee mug */}
      <g style={{ transformOrigin: "55px 145px" }}>
        <rect x="48" y="135" width="14" height="15" rx="1" fill={C.coral} />
        <path d="M 62 138 Q 68 140 68 144 Q 68 148 62 148" fill="none" stroke={C.coral} strokeWidth="1.5" />
        <ellipse cx="55" cy="135" rx="7" ry="1.5" fill="#3a2218" />
        {playing && <ellipse cx="55" cy="133" rx="3" ry=".8" fill="#fff" opacity=".4" style={{ animation: "pulse 2s ease-in-out infinite" }} />}
      </g>

      {/* laptop */}
      <g style={{ transformOrigin: "140px 150px", animation: `typeBob 1.2s ease-in-out infinite`, animationPlayState: anim }}>
        {/* base */}
        <rect x="108" y="142" width="74" height="8" rx="1" fill="#3a3a40" />
        <rect x="108" y="148" width="74" height="2" fill="#222" />
        {/* screen */}
        <rect x="112" y="108" width="66" height="36" rx="2" fill="#1a1a1e" stroke="#444" strokeWidth="1" />
        <rect x="115" y="111" width="60" height="30" fill="#0d1117" />
        {/* code lines on screen */}
        <rect x="118" y="115" width="20" height="1.5" fill={C.coral} opacity=".85" />
        <rect x="142" y="115" width="14" height="1.5" fill={C.lavender} opacity=".75" />
        <rect x="120" y="120" width="28" height="1.5" fill={C.teal} opacity=".75" />
        <rect x="120" y="125" width="18" height="1.5" fill={C.amber} opacity=".75" />
        <rect x="142" y="125" width="20" height="1.5" fill={C.orange} opacity=".75" />
        <rect x="120" y="130" width="34" height="1.5" fill={C.lavender} opacity=".6" />
        <rect x="120" y="135" width="12" height="1.5" fill={C.teal} opacity=".7" />
        {/* blinking cursor */}
        <rect x="135" y="135" width="2" height="1.5" fill={C.orange}>
          <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* chair back behind body */}
      <rect x="78" y="115" width="44" height="50" rx="4" fill={C.deskDark} opacity=".8" />

      {/* body — sways gently to the beat */}
      <g style={{ transformOrigin: "100px 150px", animation: "shoulderSway 1.6s ease-in-out infinite", animationPlayState: anim }}>
        {/* torso (jacket) */}
        <path d="M 76 120 Q 100 112 124 120 L 130 158 L 70 158 Z" fill={C.denim} />
        <path d="M 100 115 L 100 158" stroke={C.denimDark} strokeWidth="1" opacity=".6" />

        {/* left arm to coffee */}
        <path d="M 78 122 Q 65 135 58 140" fill="none" stroke={C.denim} strokeWidth="9" strokeLinecap="round" />
        <circle cx="58" cy="140" r="4.5" fill={C.skin} />

        {/* right arm to laptop keyboard */}
        <path d="M 122 122 Q 135 136 142 144" fill="none" stroke={C.denim} strokeWidth="9" strokeLinecap="round" />
        <circle cx="142" cy="144" r="4.5" fill={C.skin} />
      </g>

      {/* head — bobs to the music */}
      <g style={{ transformOrigin: "100px 105px", animation: "headBob 1.1s ease-in-out infinite", animationPlayState: anim }}>
        {/* neck */}
        <rect x="95" y="100" width="10" height="14" fill={C.skinShadow} />
        {/* face */}
        <ellipse cx="100" cy="92" rx="15" ry="17" fill={C.skin} />
        {/* hair */}
        <path d="M 85 88 Q 88 70 100 68 Q 113 70 115 88 L 115 80 Q 100 64 85 80 Z" fill={C.hair} />
        <path d="M 86 86 Q 92 78 100 78 Q 108 78 114 86 L 114 82 Q 100 70 86 82 Z" fill={C.hair} />
        {/* ear shadows */}
        <ellipse cx="84.5" cy="94" rx="2" ry="3" fill={C.skinShadow} />
        <ellipse cx="115.5" cy="94" rx="2" ry="3" fill={C.skinShadow} />
        {/* headphones */}
        <path d="M 82 90 Q 100 70 118 90" fill="none" stroke="#1a1a1e" strokeWidth="3.5" strokeLinecap="round" />
        <ellipse cx="82" cy="95" rx="4.5" ry="5.5" fill={C.coral} stroke="#1a1a1e" strokeWidth="1" />
        <ellipse cx="118" cy="95" rx="4.5" ry="5.5" fill={C.coral} stroke="#1a1a1e" strokeWidth="1" />
        {/* eyes — closed, vibing */}
        <path d="M 92 92 Q 94.5 94 97 92" fill="none" stroke="#1a1a1e" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M 103 92 Q 105.5 94 108 92" fill="none" stroke="#1a1a1e" strokeWidth="1.4" strokeLinecap="round" />
        {/* smile */}
        <path d="M 95 100 Q 100 104 105 100" fill="none" stroke="#1a1a1e" strokeWidth="1.3" strokeLinecap="round" />
      </g>
    </svg>
  );
}
