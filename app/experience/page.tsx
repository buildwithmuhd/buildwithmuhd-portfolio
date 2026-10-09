import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Building2, MapPin } from "lucide-react";
import { experiences } from "../../data/experience";
import { accentClass, Sticker } from "../../components/scrapbook";
import {
  SITE_URL,
  SITE_NAME,
  SITE_AUTHOR,
  TWITTER_HANDLE,
} from "../../lib/constants";

export const metadata: Metadata = {
  title: "Work Experience & Engineering Roles",
  description:
    "Professional experience of Muhammad Is'haq: Technology Director at Very Unreal, frontend engineering at ngtaskhub, and network operations at Galaxy Backbone.",
  alternates: {
    canonical: `${SITE_URL}/experience`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `Work Experience & Engineering Roles | ${SITE_AUTHOR}`,
    description:
      "Professional experience of Muhammad Is'haq: Technology Director at Very Unreal, frontend engineering at ngtaskhub, and network operations at Galaxy Backbone.",
    url: `${SITE_URL}/experience`,
    siteName: SITE_NAME,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: `Work Experience & Engineering Roles | ${SITE_AUTHOR}`,
    description:
      "Professional experience of Muhammad Is'haq: Technology Director at Very Unreal, frontend engineering at ngtaskhub, and network operations at Galaxy Backbone.",
    creator: TWITTER_HANDLE,
  },
};

function ExperienceJsonLd() {
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
        name: "Experience",
        item: `${SITE_URL}/experience`,
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

export default function ExperiencePage() {
  return (
    <>
      <ExperienceJsonLd />
      <main className="text-[#11100e]">
      <section className="px-6 py-16 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="font-hand text-lg">where i&apos;ve worked</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-5">
            <div>
              <h1 className="font-display text-4xl leading-tight sm:text-6xl lg:text-7xl">EXPERIENCE</h1>
              <p className="mt-5 max-w-2xl text-lg text-black/70">
                A field log of the teams, products, and infrastructure rooms that shaped how I build secure, useful software.
              </p>
            </div>
            <div className="rotate-[2deg] border border-black/15 bg-white p-4 shadow-paper">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em]">Current mode</p>
              <p className="mt-2 text-2xl font-black">AppSec + Frontend</p>
            </div>
          </div>

          <div className="relative mt-12">
            <div className="absolute bottom-0 left-4 top-0 hidden w-px bg-black/20 md:block" />
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <article key={`${experience.company}-${experience.role}`} className="relative grid gap-5 md:grid-cols-[56px_1fr]">
                  <div className="hidden md:block">
                    <div className={`relative z-10 grid size-9 place-items-center border border-black/20 shadow-[3px_3px_0_rgba(0,0,0,0.16)] ${accentClass[experience.accent]}`}>
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="grid overflow-hidden border border-black/20 bg-white/60 shadow-[6px_6px_0_rgba(0,0,0,0.12)] lg:grid-cols-[0.95fr_1.05fr]">
                    <div className={`p-7 ${accentClass[experience.accent]}`}>
                      <div className="flex flex-wrap gap-2">
                        <Sticker tone={experience.accent === "black" ? "cream" : "yellow"}>{experience.type}</Sticker>
                        <span className="marker inline-flex border border-black/20 bg-white/25 px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.08em]">
                          {experience.period}
                        </span>
                      </div>
                      <h2 className="mt-8 text-4xl font-black tracking-[-0.02em]">{experience.company}</h2>
                      <p className="mt-2 text-xl font-bold">{experience.role}</p>
                      <p className="mt-5 flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em]">
                        <MapPin size={14} /> {experience.location}
                      </p>
                    </div>
                    <div className="p-7">
                      <div className="flex items-start gap-3">
                        <Building2 className="mt-1 shrink-0 text-[#2864df]" size={20} />
                        <p className="text-lg leading-relaxed text-black/75">{experience.summary}</p>
                      </div>
                      <ul className="mt-6 grid gap-3">
                        {experience.highlights.map((highlight) => (
                          <li key={highlight} className="border-l-4 border-[#f6c843] bg-[#f7f5ee] px-4 py-3 text-sm font-semibold text-black/75">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {experience.tools.map((tool) => (
                          <span key={tool} className="border border-black/15 bg-white px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em]">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <Link href="/contact" className="focus-ring mx-auto mt-12 inline-flex items-center gap-2 border-b-2 border-black pb-1 font-mono text-[11px] font-bold uppercase tracking-[0.16em]">
            Build something together <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
      </main>
    </>
  );
}
