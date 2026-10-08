import { ImageResponse } from "next/og";
import { getPublishedPost } from "../../../lib/posts";

export const runtime = "edge";

export const alt = "Blog post preview";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPublishedPost(slug);

  // ---------- Design tokens (from globals.css / DESIGN.md) ----------
  const ink = "#11100e";
  const paper = "#f4f3ed";
  const accent = "#2864df";
  const yellow = "#f6c843";

  // Fallback for drafts / not-found — generic site card
  if (!post) {
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
          }}
        >
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
          <div
            style={{
              marginTop: 16,
              fontSize: 24,
              color: accent,
              fontFamily: "monospace",
              letterSpacing: "0.12em",
              textTransform: "uppercase" as const,
            }}
          >
            AppSec & Frontend Engineer
          </div>
        </div>
      ),
      { ...size }
    );
  }

  // ---------- Truncate title sensibly ----------
  const maxTitleLength = 90;
  const displayTitle =
    post.title.length > maxTitleLength
      ? post.title.slice(0, maxTitleLength - 1) + "…"
      : post.title;

  // Format tags for display (max 3)
  const displayTags = post.tags.slice(0, 3);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 72px",
          background: paper,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top row: site wordmark + accent bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Accent square (logo stand-in) */}
          <div
            style={{
              width: 40,
              height: 40,
              background: accent,
              flexShrink: 0,
            }}
          />
          <div
            style={{
              fontSize: 20,
              fontWeight: 900,
              color: ink,
              letterSpacing: "-0.02em",
            }}
          >
            Muhammad Is&apos;haq
          </div>
          <div
            style={{
              marginLeft: 12,
              fontSize: 14,
              fontFamily: "monospace",
              color: `${ink}88`,
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
            }}
          >
            Blog
          </div>
        </div>

        {/* Centre: post title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 52,
              fontWeight: 900,
              lineHeight: 1.1,
              color: ink,
              letterSpacing: "-0.03em",
              maxWidth: "95%",
            }}
          >
            {displayTitle}
          </div>
          {/* Yellow accent underline */}
          <div
            style={{
              width: 80,
              height: 6,
              background: yellow,
              borderRadius: 3,
              marginTop: 8,
            }}
          />
        </div>

        {/* Bottom row: tags + date */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            {displayTags.map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "6px 16px",
                  fontSize: 14,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  color: accent,
                  background: `${accent}14`,
                  border: `1.5px solid ${accent}33`,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase" as const,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          <div
            style={{
              fontSize: 16,
              fontFamily: "monospace",
              fontWeight: 700,
              color: `${ink}77`,
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
            }}
          >
            {post.date}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
