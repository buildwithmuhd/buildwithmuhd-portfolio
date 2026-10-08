import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import "./globals.css";
import {
  SITE_URL,
  SITE_NAME,
  SITE_AUTHOR,
  TWITTER_HANDLE,
} from "../lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_AUTHOR} | AppSec & Frontend Engineer`,
    template: `%s | ${SITE_AUTHOR}`,
  },
  description:
    "Portfolio of Muhammad Is'haq, an AppSec and frontend engineer in Nigeria building secure, high-performance products with Next.js, TypeScript, NestJS, Prisma, and Tailwind CSS.",
  keywords: [
    "Muhammad Is'haq",
    "buildwithmuhd",
    "AppSec engineer Nigeria",
    "frontend engineer Nigeria",
    "Next.js developer",
    "TypeScript developer",
    "React portfolio",
    "application security engineer",
    "Very Unreal Technology Director",
    "BuyMeBread founder",
    "ChallengeMeNow (CMN) founder",
    "Code no Hero founder",
    "BlindSpot founder",
    "Terminal Graveyard founder",
    "Chess Platform founder",
    "Helious founder",
    "TraceVault founder",
  ],
  authors: [{ name: SITE_AUTHOR, url: SITE_URL }],
  creator: SITE_AUTHOR,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: `${SITE_AUTHOR} | AppSec & Frontend Engineer`,
    description:
      "Secure, high-performance product engineering across AppSec, frontend, and full-stack systems.",
    siteName: SITE_NAME,
    // Note: og:image is auto-injected by app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_AUTHOR} | AppSec & Frontend Engineer`,
    description:
      "AppSec and frontend engineer building secure Next.js, TypeScript, and NestJS products.",
    creator: TWITTER_HANDLE,
    // Note: twitter:image is auto-injected by app/twitter-image.tsx
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
