import type { Metadata } from "next";
import { Github, Mail, ShieldCheck } from "lucide-react";
import { profile } from "../../index";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Muhammad Is'haq for AppSec, frontend engineering, secure product work, and high-performance Next.js interfaces.",
};

export default function ContactPage() {
  return (
    <main className="text-[#11100e]">
      <section className="relative px-6 py-24 text-center sm:px-12 lg:px-20">
        <ShieldCheck className="mx-auto text-[#f6c843]" size={96} strokeWidth={1.5} />
        <h1 className="mt-5 font-display text-4xl sm:text-6xl">LET&apos;S TALK</h1>
        <p className="mx-auto mt-5 max-w-xl font-hand text-2xl">
          Got a product, AppSec problem, or frontend system that needs to feel fast and stay hard to break?
        </p>
        <div className="mx-auto mt-8 flex max-w-lg flex-wrap justify-center gap-3">
          <a className="focus-ring inline-flex items-center gap-2 bg-black px-5 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-[4px_4px_0_#f6c843]" href={`mailto:${profile.email}`}>
            <Mail size={15} /> Write email
          </a>
          <a className="focus-ring inline-flex items-center gap-2 border-2 border-black bg-white px-5 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.14em] shadow-[4px_4px_0_#111]" href={profile.github}>
            <Github size={15} /> GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
