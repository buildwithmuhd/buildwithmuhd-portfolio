import type { Metadata } from "next";
import { BlogListClient } from "./BlogListClient";
import {
  SITE_URL,
  SITE_NAME,
  SITE_AUTHOR,
  TWITTER_HANDLE,
} from "../../lib/constants";

export const metadata: Metadata = {
  title: "Blog — Notes on AppSec & Frontend Systems",
  description:
    "Articles and field notes on application security, secure defaults, frontend performance, and engineering high-trust digital products by Muhammad Is'haq.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `Blog — Notes on AppSec & Frontend Systems | ${SITE_AUTHOR}`,
    description:
      "Articles and field notes on application security, secure defaults, frontend performance, and engineering high-trust digital products by Muhammad Is'haq.",
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog — Notes on AppSec & Frontend Systems | ${SITE_AUTHOR}`,
    description:
      "Articles and field notes on application security, secure defaults, frontend performance, and engineering high-trust digital products by Muhammad Is'haq.",
    creator: TWITTER_HANDLE,
  },
};

function BlogJsonLd() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
    />
  );
}

export default function BlogPage() {
  return (
    <>
      <BlogJsonLd />
      <main className="text-[#11100e]">
        <section className="px-6 py-16 sm:px-12 lg:px-20">
          <div className="mx-auto max-w-5xl">
            <BlogListClient />
          </div>
        </section>
      </main>
    </>
  );
}
