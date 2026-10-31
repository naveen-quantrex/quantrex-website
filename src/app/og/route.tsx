import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "nodejs";

export async function GET() {
  const { accentOnDark } = siteConfig.colors;

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
          background:
            "radial-gradient(900px 600px at 10% 0%, rgba(99,102,241,0.38), rgba(5,7,15,0) 70%), radial-gradient(800px 500px at 100% 100%, rgba(34,211,238,0.16), rgba(5,7,15,0) 70%), #05070f",
          color: "#f1f5f9",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: accentOnDark,
              color: "#05070f",
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
          <div style={{ fontSize: "28px", color: "#b4bfd3", maxWidth: "900px", lineHeight: 1.4 }}>
            Custom software, automation and focused products for small businesses.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "22px", color: "#b4bfd3" }}>
          <span style={{ color: accentOnDark, fontWeight: 600 }}>{siteConfig.domain}</span>
          <span>·</span>
          <span>{siteConfig.location}</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
