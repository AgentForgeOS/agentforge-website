import { ImageResponse } from "next/og";

// Default share card for every route — the polished preview that renders when
// the link is pasted into email/Slack/iMessage. Obsidian + single blue accent.
export const alt = "AgentForge — Operational Decision Intelligence";
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
          <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 30 }}>
            <div style={{ width: 14, height: 14, borderRadius: 999, background: "#3f80e8" }} />
            <div style={{ color: "#9aa3b7", fontSize: 24, letterSpacing: 7 }}>
              OPERATIONAL DECISION INTELLIGENCE
            </div>
          </div>
          <div style={{ color: "#e7ebf3", fontSize: 108, fontWeight: 600, letterSpacing: -3 }}>
            AgentForge
          </div>
          <div style={{ color: "#9aa3b7", fontSize: 38, marginTop: 26, maxWidth: 940, lineHeight: 1.35 }}>
            The governed decision layer for high-stakes enterprise operations.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
