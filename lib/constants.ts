/**
 * Central site constants used across metadata, OG images, schemas, and sitemaps.
 * Falls back to the production URL if the env var is missing.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://muhammadishaq.xyz";

export const SITE_NAME = "Muhammad Is'haq(buildwithmuhd) Portfolio";

export const SITE_AUTHOR = "Muhammad Is'haq";

export const TWITTER_HANDLE = "@buildwithmuhd";

export const GITHUB_URL = "https://github.com/buildwithmuhd";

export const LINKEDIN_URL = "https://www.linkedin.com/in/muhammadishaq-d3v/";

export const TWITTER_URL = "https://x.com/buildwithmuhd";

export const SAME_AS = [GITHUB_URL, LINKEDIN_URL, TWITTER_URL];
