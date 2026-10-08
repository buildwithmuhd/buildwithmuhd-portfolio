"use client";

import { AnimatedSection } from "../../../components/AnimatedSection";

/**
 * Renders blog post markdown-like content with smooth scroll animations.
 * Each content block fades/slides in as the user scrolls.
 */
export function BlogPostClient({ content }: { content: string }) {
  const blocks = content
    .trim()
    .split("\n")
    .filter((line) => line.trim() !== "");

  return (
    <div className="blog-content mt-10">
      {blocks.map((line, i) => {
        const trimmed = line.trim();

        // H2 heading
        if (trimmed.startsWith("## ")) {
          return (
            <AnimatedSection
              key={i}
              delay={0.05}
              direction="left"
              distance={24}
            >
              <h2 className="mb-4 mt-12 font-display text-2xl leading-tight sm:text-3xl">
                {trimmed.replace("## ", "").toUpperCase()}
              </h2>
            </AnimatedSection>
          );
        }

        // H3 heading
        if (trimmed.startsWith("### ")) {
          return (
            <AnimatedSection key={i} delay={0.05} direction="up" distance={20}>
              <h3 className="mb-3 mt-8 text-xl font-black tracking-[-0.01em]">
                {trimmed.replace("### ", "")}
              </h3>
            </AnimatedSection>
          );
        }

        // Checklist items
        if (trimmed.startsWith("- [ ] ") || trimmed.startsWith("- [x] ")) {
          const checked = trimmed.startsWith("- [x] ");
          const text = trimmed.replace(/^- \[[ x]\] /, "");
          return (
            <AnimatedSection key={i} delay={0.03} direction="up" distance={16}>
              <label className="mb-2 flex items-start gap-3 text-[15px] leading-relaxed text-black/80">
                <span
                  className={`mt-1 flex size-4 shrink-0 items-center justify-center border border-black/25 text-[10px] ${checked ? "bg-[#24bf86] text-white" : ""}`}
                >
                  {checked ? "✓" : ""}
                </span>
                {renderInlineMarkdown(text)}
              </label>
            </AnimatedSection>
          );
        }

        // Bullet list items
        if (trimmed.startsWith("- ")) {
          const text = trimmed.replace("- ", "");
          return (
            <AnimatedSection key={i} delay={0.03} direction="up" distance={16}>
              <div className="mb-2 flex items-start gap-3 text-[15px] leading-relaxed text-black/80">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#2864df]" />
                {renderInlineMarkdown(text)}
              </div>
            </AnimatedSection>
          );
        }

        // Paragraph (default)
        return (
          <AnimatedSection key={i} delay={0.04} direction="up" distance={20}>
            <p className="mb-4 text-[15px] leading-[1.8] text-black/80">
              {renderInlineMarkdown(trimmed)}
            </p>
          </AnimatedSection>
        );
      })}
    </div>
  );
}

/**
 * Simple inline markdown renderer for bold, italic, code, and links.
 */
function renderInlineMarkdown(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Bold
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    // Inline code
    const codeMatch = remaining.match(/`(.+?)`/);
    // Italic (single *)
    const italicMatch = remaining.match(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/);

    // Find earliest match
    const matches = [
      boldMatch ? { type: "bold", match: boldMatch } : null,
      codeMatch ? { type: "code", match: codeMatch } : null,
      italicMatch ? { type: "italic", match: italicMatch } : null,
    ]
      .filter(Boolean)
      .sort((a, b) => (a!.match.index ?? 0) - (b!.match.index ?? 0));

    if (matches.length === 0) {
      parts.push(remaining);
      break;
    }

    const earliest = matches[0]!;
    const idx = earliest.match.index!;

    if (idx > 0) {
      parts.push(remaining.slice(0, idx));
    }

    if (earliest.type === "bold") {
      parts.push(
        <strong key={key++} className="font-black text-black">
          {earliest.match[1]}
        </strong>
      );
    } else if (earliest.type === "code") {
      parts.push(
        <code
          key={key++}
          className="rounded bg-black/[0.06] px-1.5 py-0.5 font-mono text-[13px] text-[#c7254e]"
        >
          {earliest.match[1]}
        </code>
      );
    } else if (earliest.type === "italic") {
      parts.push(
        <em key={key++} className="italic text-black/90">
          {earliest.match[1]}
        </em>
      );
    }

    remaining = remaining.slice(idx + earliest.match[0].length);
  }

  return <>{parts}</>;
}
