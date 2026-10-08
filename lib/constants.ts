/**
 * Central site constants used across metadata, OG images, and sitemaps.
 * Falls back to the production URL if the env var is missing (e.g. during build).
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://muhammadishaq.xyz";

export const SITE_NAME = "Muhammad Is'haq Portfolio";

export const SITE_AUTHOR = "Muhammad Is'haq";

export const TWITTER_HANDLE = "@buildwithmuhd";
