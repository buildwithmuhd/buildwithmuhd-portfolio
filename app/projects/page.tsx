import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { accentClass, Sticker } from "../../components/scrapbook";
import { projects } from "../../index";
import {
  SITE_URL,
  SITE_NAME,
  SITE_AUTHOR,
  TWITTER_HANDLE,
} from "../../lib/constants";

export const metadata: Metadata = {
  title: "Featured Software & Security Projects",
  description:
    "Explore engineering case studies and security tools by Muhammad Is'haq, including BuyMeBread, Helious, ChallengeMeNow, TraceVault, and developer utilities.",
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `Featured Software & Security Projects | ${SITE_AUTHOR}`,
    description:
      "Explore engineering case studies and security tools by Muhammad Is'haq, including BuyMeBread, Helious, ChallengeMeNow, TraceVault, and developer utilities.",
    url: `${SITE_URL}/projects`,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Featured Software & Security Projects | ${SITE_AUTHOR}`,
    description:
      "Explore engineering case studies and security tools by Muhammad Is'haq, including BuyMeBread, Helious, ChallengeMeNow, TraceVault, and developer utilities.",
    creator: TWITTER_HANDLE,
  },
};

function ProjectsJsonLd() {
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
        name: "Projects",
        item: `${SITE_URL}/projects`,
      },
    ],
  };

  const projectList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured Software Projects",
    description:
      "Software and security engineering projects developed by Muhammad Is'haq",
    itemListElement: projects.map((p, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareSourceCode",
        name: p.name,
        description: p.description,
        url: p.sourceCodeLink,
        codeRepository: p.sourceCodeLink,
        programmingLanguage: p.tags,
        author: {
          "@type": "Person",
          name: SITE_AUTHOR,
          url: SITE_URL,
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectList) }}
      />
    </>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsJsonLd />
      <main className="text-[#11100e]">
        <section className="px-6 py-16 sm:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <p className="font-hand text-lg">case files</p>
            <div className="mt-3 flex flex-wrap items-end justify-between gap-5">
              <h1 className="font-display text-4xl leading-tight sm:text-6xl lg:text-7xl">PROJECTS</h1>
              <p className="max-w-xl text-lg text-black/70">
                Secure product engineering, frontend systems, infrastructure-minded builds, and fast experiments that survived the filter.
              </p>
            </div>

            <div className="mt-10 grid gap-7">
              {projects.map((project, index) => (
                <article
                  key={project.id}
                  className={`interactive-lift relative grid min-h-[320px] overflow-hidden border border-black/20 p-7 md:grid-cols-[0.92fr_1.08fr] md:p-10 ${accentClass[project.accent]}`}
                >
                  <div className="absolute left-0 top-0 px-7 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em]">
                    + Project {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-12 max-w-xl">
                    <p className="font-mono text-[11px] font-bold uppercase tracking-[0.12em]">
                      * {project.status}
                    </p>
                    <h2 className="mt-4 text-4xl font-black tracking-[-0.02em] sm:text-5xl">{project.name}</h2>
                    <p className="mt-4 text-lg">{project.description}</p>
                    <p className="mt-4 text-base opacity-80">{project.vision}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="border border-current/25 bg-white/20 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a className="focus-ring mt-8 inline-flex items-center gap-2 border-b-2 border-current pb-1 font-mono text-[11px] font-bold uppercase tracking-[0.16em]" href={project.sourceCodeLink}>
                      View project <ArrowUpRight size={14} />
                    </a>
                  </div>
                  <div className="tape relative mt-8 self-end bg-white/90 p-3 shadow-paper md:mt-0">
                    <img
                      src={typeof project.image === "string" ? project.image : project.image.src}
                      alt={`${project.name} interface preview`}
                      className="interactive-image aspect-[16/10] w-full object-cover grayscale-[20%]"
                    />
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {["AppSec", "Frontend", "Full-stack", "Secure UX", "Automation"].map((label, index) => (
                <Sticker key={label} tone={(["yellow", "mint", "pink", "blue", "cream"] as const)[index]}>
                  {label}
                </Sticker>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
