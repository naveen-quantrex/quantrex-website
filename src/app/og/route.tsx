import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "nodejs";

export async function GET() {
  const { ink, accent, paper } = siteConfig.colors;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: paper,
          color: ink,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: accent,
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            {siteConfig.name.charAt(0).toUpperCase()}
          </div>
          <div style={{ fontSize: "32px", fontWeight: 700, letterSpacing: "-0.02em" }}>{siteConfig.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ fontSize: "72px", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.035em", maxWidth: "980px" }}>
            Software and AI that fit how your business already runs.
          </div>
          <div style={{ fontSize: "28px", color: "#475569", maxWidth: "900px", lineHeight: 1.4 }}>
            Custom software, automation and focused products for small businesses.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "22px", color: "#475569" }}>
          <span style={{ color: accent, fontWeight: 600 }}>{siteConfig.domain}</span>
          <span>·</span>
          <span>{siteConfig.location}</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
