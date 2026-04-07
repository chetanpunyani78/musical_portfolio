import { C } from "../styles/theme";

const COLORS = [C.orange, C.coral, C.amber, C.lavender, C.teal];
const ANIMS = ["eqBounce1", "eqBounce2", "eqBounce3", "eqBounce4", "eqBounce5"];

export default function Equalizer({ playing, size = 32 }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: size }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          style={{
            width: size / 6,
            borderRadius: 2,
            background: `linear-gradient(to top, ${COLORS[i]}, ${COLORS[(i + 1) % 5]})`,
            height: playing ? undefined : 4,
            animation: playing ? `${ANIMS[i]} ${0.4 + i * 0.1}s ease-in-out infinite` : "none",
            transition: "height 0.3s",
          }}
        />
      ))}
    </div>
  );
}
