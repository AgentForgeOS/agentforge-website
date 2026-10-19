import { ImageResponse } from "next/og";

/**
 * Share card for the white paper, overriding the site default.
 *
 * The root card sells the company. This one has a narrower job: the link goes
 * out on LinkedIn, where the card is most of what decides the click, and a
 * reader scanning a feed should see the paper's title rather than a generic
 * product line. Same obsidian + blue so it is recognisably ours.
 */
export const alt = "Beyond the Algorithm — a white paper from AgentForgeOS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#090d16",
        }}
      >
        <div style={{ height: 8, background: "#3f80e8" }} />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 96px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 28 }}>
            <div style={{ width: 14, height: 14, borderRadius: 999, background: "#3f80e8" }} />
            <div style={{ color: "#9aa3b7", fontSize: 24, letterSpacing: 7 }}>
              WHITE PAPER
            </div>
          </div>
          <div
            style={{
              color: "#e7ebf3",
              fontSize: 92,
              fontWeight: 600,
              letterSpacing: -3,
              lineHeight: 1.05,
            }}
          >
            Beyond the Algorithm
          </div>
          <div
            style={{
              color: "#9aa3b7",
              fontSize: 34,
              marginTop: 26,
              maxWidth: 900,
              lineHeight: 1.35,
            }}
          >
            How memory knowledge graphs preserve and scale human judgment.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginTop: 44,
              color: "#6f7a90",
              fontSize: 26,
            }}
          >
            <div>AgentForgeOS</div>
            <div style={{ width: 4, height: 4, borderRadius: 999, background: "#6f7a90" }} />
            <div>Nish Parikh</div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
