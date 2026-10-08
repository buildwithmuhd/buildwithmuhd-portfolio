// Re-export the OG image for Twitter Card scraping.
// Next.js serves this at /blog/[slug]/twitter-image automatically.
export { default, alt, size, contentType, runtime } from "./opengraph-image";
