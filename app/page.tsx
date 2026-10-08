import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, profile } from "../index";
import { portraits } from "../components/placeholders";
import { Polaroid, Sticker } from "../components/scrapbook";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Muhammad Is'haq is an AppSec and frontend engineer building secure, high-performance products with Next.js, TypeScript, and Tailwind CSS.",
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.handle,
    url: profile.website,
    jobTitle: profile.role,
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
    },
    sameAs: [profile.github],
    knowsAbout: profile.stack,
    worksFor: {
      "@type": "Organization",
      name: "Very Unreal LLC",
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <JsonLd />
      <main className="text-[#11100e]">
        <section className="relative px-6 pb-20 pt-16 text-center sm:px-12 lg:px-20">
          <div className="mx-auto flex max-w-6xl flex-col items-center">
            <div className="mb-5 flex w-full flex-wrap items-center justify-center gap-4 sm:gap-24">

              <p className="max-w-2xl text-3xl font-black font-sans leading-[1.04] sm:text-5xl lg:text-6xl">HI I'M</p>

            </div>
            <h1 className="relative inline-block border border-[#f06f4f]/60 px-4 py-5 font-display text-5xl leading-none sm:text-7xl lg:text-8xl">
              MUHAMMAD
              <span className="mt-3 block text-3xl sm:text-5xl lg:text-6xl">IS&apos;HAQ</span>
            </h1>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              <Sticker>AppSec Engineer</Sticker>
              <span className="font-[-apple-system] text-[11px] font-bold uppercase tracking-[0.2em]">
                <span className="mr-2 inline-block size-2 rounded-full bg-[#2864df]" />
                Open to new work and good problems
              </span>
              <Sticker tone="mint">Frontend Engineer</Sticker>
            </div>

            {/* Mobile / Tablet Polaroids (< lg) */}
            <div className="mt-10 flex items-center justify-center gap-4 sm:gap-8 lg:hidden">
              <Polaroid
                src={portraits[0]}
                caption=""
                className="w-32 rotate-[-5deg] transition-transform hover:rotate-0 sm:w-44"
              />
              <Polaroid
                src={portraits[1]}
                caption=""
                className="w-32 rotate-[6deg] transition-transform hover:rotate-0 sm:w-44"
              />
            </div>

            <div className="relative mt-10 grid w-full place-items-center">
              <Polaroid src={portraits[0]} caption="" className="absolute left-0 top-0 hidden w-52 rotate-[-7deg] lg:block" />
              <Polaroid src={portraits[1]} caption="" className="absolute right-0 top-4 hidden w-52 rotate-[9deg] lg:block" />
              <h2 className="max-w-2xl text-balance text-4xl font-black leading-[1.04] sm:text-5xl lg:text-6xl">
                I build secure software that <span className="inline-grid size-10 place-items-center rounded-full bg-[#24bf86] align-middle text-white">o</span>
                <br />
                gets out of your way. <span className="text-[#ff4e99]">*</span>
              </h2>
            </div>
            <Link href="/contact" className="focus-ring interactive-lift mt-8 inline-flex items-center gap-3 bg-black px-5 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-[5px_5px_0_#2864df]">
              <ArrowUpRight size={15} /> Contact me
            </Link>
          </div>
        </section>

        <section className="px-6 pb-24 sm:px-12 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-hand text-lg">open my desk</p>
                <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">FEATURED WORKS</h2>
              </div>
              <Link className="focus-ring inline-flex items-center gap-2 border-b-2 border-black pb-1 font-mono text-[11px] font-bold uppercase tracking-[0.16em]" href="/projects">
                All projects <ArrowUpRight size={14} />
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {featured.map((project, index) => (
                <Link key={project.id} href="/projects" className="focus-ring interactive-lift group block">
                  <div className="relative bg-white p-3 shadow-paper">
                    <span className="absolute left-4 top-4 z-10 bg-white px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em]">
                      + {project.date}
                    </span>
                    <img src={typeof project.image === "string" ? project.image : project.image.src} alt={`${project.name} project preview`} className="interactive-image aspect-[16/10] w-full object-cover transition duration-200 group-hover:grayscale" />
                  </div>
                  <h3 className="mt-4 text-center text-2xl font-black">{project.name}</h3>
                  <p className="mx-auto mt-1 max-w-sm text-center text-sm text-black/65">{project.vision}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
