import { posts, type BlogPost } from "../data/posts";

/**
 * Look up a single published post by slug.
 * Returns `null` for drafts and non-existent slugs so metadata/OG routes
 * can fall back to the generic site card without leaking draft content.
 */
export function getPublishedPost(slug: string): BlogPost | null {
  const post = posts.find((p) => p.slug === slug);
  if (!post) return null;
  // If status is explicitly "draft", hide it
  if (post.status === "draft") return null;
  return post;
}

/**
 * Strip basic Markdown syntax to produce plain text suitable for
 * a meta-description fallback (≤ 155 characters).
 */
export function stripMarkdown(md: string): string {
  return (
    md
      // headings
      .replace(/^#{1,6}\s+/gm, "")
      // bold/italic
      .replace(/\*{1,3}(.+?)\*{1,3}/g, "$1")
      // inline code
      .replace(/`(.+?)`/g, "$1")
      // checklist markers
      .replace(/- \[[ x]\] /g, "")
      // list markers
      .replace(/^[-*+]\s+/gm, "")
      // links [text](url)
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      // multiple newlines / whitespace
      .replace(/\n+/g, " ")
      .replace(/\s{2,}/g, " ")
      .trim()
  );
}

/**
 * Build a description from a post's excerpt or content, capped at ~155 chars.
 */
export function postDescription(post: BlogPost): string {
  if (post.excerpt) return post.excerpt;
  const plain = stripMarkdown(post.content);
  if (plain.length <= 155) return plain;
  return plain.slice(0, 152) + "…";
}
