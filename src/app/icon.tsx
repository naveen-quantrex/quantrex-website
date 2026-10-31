import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Generated from the brand config, so renaming the brand updates the favicon too.
// To use a designed icon instead, delete this file and add src/app/icon.png (or .svg).
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: siteConfig.colors.accent,
          color: "#ffffff",
          fontSize: 40,
          fontWeight: 700,
          borderRadius: 14,
        }}
      >
        {siteConfig.name.charAt(0).toUpperCase()}
      </div>
    ),
    size,
  );
}
