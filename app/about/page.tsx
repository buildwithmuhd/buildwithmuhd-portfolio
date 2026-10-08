import type { Metadata } from "next";
import { portraits } from "../../components/placeholders";
import { Polaroid, Sticker } from "../../components/scrapbook";
import { profile } from "../../index";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Muhammad Is'haq, a Nigeria-based AppSec and frontend engineer, CS student, and Technology Director at Very Unreal LLC.",
};

const bio = [
  "I'm a frontend engineer, currently teaching myself how the things I build can be broken — and then how to stop that from happening.",
  "Two years in, I got comfortable. Clean components, decent UIs, ship it, repeat. Comfortable is fine, but it isn't interesting for long. Somewhere along the way I started wondering less about how a page looks and more about what happens if someone pokes at it the wrong way — and that question hasn't let go of me since.",
  "So now I split my time. Some days I'm still deep in React, squinting at a layout until it feels right. Other days I'm reading request headers like they owe me money, trying to understand how a login form actually fails. Different muscles, same curiosity.",
  "I'm based in Nigeria, studying computer science, and mostly just building things and writing down what I learn as I go — the wins, the dead ends, all of it.",
];

export default function AboutPage() {
  const skills = [
    { label: "Application Security", tone: "yellow" as const },
    { label: "Frontend Engineering", tone: "green" as const },
    { label: "Product Thinking", tone: "pink" as const },
    { label: "Threat Modeling", tone: "blue" as const },
    { label: "Motion restraint", tone: "mint" as const },
    { label: "Secure UX", tone: "cream" as const },
  ];

  return (
    <main className="text-[#11100e]">
      <section className="relative px-6 py-16 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 font-hand text-xl">about me!</p>

          <div className="grid gap-12 lg:grid-cols-[220px_1fr_260px] lg:items-start">
            <Polaroid
              src={portraits[2]}
              caption="2026"
              className="mx-auto w-62 rotate-[-4deg] lg:mt-2"
            />

            <div className="mx-auto max-w-xl text-center lg:text-left">
              <span className="inline-block border border-black bg-white px-5 py-2 text-xl font-bold shadow-[2px_2px_0_#111]">
                what&apos;s up
              </span>

              <p className="mt-6 text-balance font-hand text-2xl leading-snug sm:text-3xl">
                {bio[0]}
              </p>

              <div className="mt-5 space-y-4 text-base leading-relaxed text-black/75 sm:text-[17px]">
                {bio.slice(1).map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <p className="mt-6 text-sm text-black/60">
                If you&apos;re here, you probably already know what I do. This is just where I keep it.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                {skills.map((skill) => (
                  <Sticker key={skill.label} tone={skill.tone}>
                    {skill.label}
                  </Sticker>
                ))}
              </div>
            </div>

            <div className="mx-auto w-full max-w-[260px] rotate-[3deg] border border-black/15 bg-white p-5 shadow-paper lg:mt-2">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em]">
                Current file
              </p>
              <ul className="mt-4 space-y-3 text-sm font-bold">
                <li>{profile.education}</li>
                <li>{profile.current}</li>
                <li>Based in {profile.location}</li>
              </ul>
              <p className="mt-5 border-t border-black/10 pt-4 text-sm text-black/65">
                {profile.bio}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}