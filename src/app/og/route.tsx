import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(135deg, #f8f4ef 0%, #e8ddd0 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "#81a6c6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: 700,
              fontSize: "20px",
            }}
          >
            Q
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#24313c",
                letterSpacing: "-0.04em",
              }}
            >
              QUANTREX
            </span>
            <span
              style={{
                fontSize: "11px",
                color: "#536676",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Services and Software
            </span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 700,
              color: "#24313c",
              lineHeight: 1,
              letterSpacing: "-0.05em",
              maxWidth: "800px",
            }}
          >
            IT Support, Field Engineering & Custom Software.
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#536676",
              maxWidth: "700px",
              lineHeight: 1.4,
            }}
          >
            Melbourne-based technology partner for businesses with specialist
            operational needs.
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <span
            style={{
              fontSize: "14px",
              color: "#536676",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            quantrex.com.au
          </span>
          <span style={{ fontSize: "14px", color: "#81a6c6" }}>·</span>
          <span style={{ fontSize: "14px", color: "#536676" }}>
            Melbourne, Australia
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
