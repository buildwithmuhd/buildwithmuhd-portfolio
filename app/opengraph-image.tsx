import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Muhammad Is'haq — AppSec & Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generic site-wide OG image used as fallback for non-post routes
 * (home, projects, about, contact, etc.).
 */
export default async function OGImage() {
  const ink = "#11100e";
  const paper = "#f4f3ed";
  const accent = "#2864df";
  const yellow = "#f6c843";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: paper,
          fontFamily: "system-ui, sans-serif",
          gap: "20px",
        }}
      >
        {/* Accent square */}
        <div
          style={{
            width: 56,
            height: 56,
            background: accent,
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: ink,
            letterSpacing: "-0.03em",
          }}
        >
          Muhammad Is&apos;haq
        </div>

        {/* Yellow underline */}
        <div
          style={{
            width: 100,
            height: 6,
            background: yellow,
            borderRadius: 3,
          }}
        />

        {/* Role */}
        <div
          style={{
            marginTop: 4,
            fontSize: 22,
            fontFamily: "monospace",
            fontWeight: 700,
            color: accent,
            letterSpacing: "0.12em",
            textTransform: "uppercase" as const,
          }}
        >
          AppSec & Frontend Engineer
        </div>

        {/* Domain */}
        <div
          style={{
            marginTop: 12,
            fontSize: 16,
            fontFamily: "monospace",
            color: `${ink}66`,
            letterSpacing: "0.08em",
          }}
        >
          muhammadishaq.xyz
        </div>
      </div>
    ),
    { ...size }
  );
}
