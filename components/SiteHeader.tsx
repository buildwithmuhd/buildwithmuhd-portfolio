"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Blocks,
  BriefcaseBusiness,
  Github,
  Linkedin,
  Mail,
  Menu,
  Newspaper,
  Star,
  Workflow,
  X,
  ArrowUpRight,
} from "lucide-react";
import { profile } from "../index";

const links = [
  { href: "/", label: "Home", icon: Star },
  { href: "/about", label: "About", icon: BriefcaseBusiness },
  { href: "/experience", label: "Experience", icon: Workflow },
  { href: "/projects", label: "Projects", icon: Blocks },
  { href: "/blog", label: "Blog", icon: Newspaper },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-black/10 bg-[#f7f5ee]/95 px-4 backdrop-blur sm:px-6">
        {/* Brand logo & mobile name */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            aria-label="Muhammad Is'haq home"
            className="focus-ring grid size-7 place-items-center rounded-full bg-[#ff5a9d] text-sm font-black text-white shadow-[2px_2px_0_#111] transition-transform hover:scale-105 active:scale-95"
          >
            M
          </Link>
          <span className="font-mono text-xs font-bold tracking-tight text-black/70 sm:hidden">
            Muhammad Is&apos;haq
          </span>
        </div>

        {/* Desktop Navigation (>= md screens) */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 font-mono text-[11px] font-bold uppercase tracking-[0.08em] md:flex"
        >
          {links.map(({ href, label, icon: Icon }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <Link
                key={href}
                className={`focus-ring flex items-center gap-2 px-3 py-2 transition-all ${active
                    ? "bg-[#f6c843] shadow-[2px_2px_0_#111]"
                    : "hover:bg-black/5 text-black/80 hover:text-black"
                  }`}
                href={href}
                aria-current={active ? "page" : undefined}
              >
                <Icon
                  size={12}
                  fill={label === "Home" && active ? "currentColor" : "none"}
                />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Social Links */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            aria-label="GitHub"
            className="focus-ring grid size-7 place-items-center rounded-full bg-[#f6c843] text-black shadow-[1.5px_1.5px_0_#111] transition-transform hover:scale-110 active:scale-95"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={13} />
          </a>
          <a
            aria-label="LinkedIn"
            className="focus-ring grid size-7 place-items-center rounded-full bg-[#ff5a9d] text-white shadow-[1.5px_1.5px_0_#111] transition-transform hover:scale-110 active:scale-95"
            href="https://www.linkedin.com/in/muhammadishaq-d3v/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={12} />
          </a>
          <a
            aria-label="Email Muhammad Is'haq"
            className="focus-ring grid size-7 place-items-center rounded-full bg-[#24bf86] text-white shadow-[1.5px_1.5px_0_#111] transition-transform hover:scale-110 active:scale-95"
            href={`mailto:${profile.email}`}
          >
            <Mail size={12} />
          </a>
        </div>

        {/* Mobile Hamburger Button (< md screens) */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="focus-ring flex size-9 items-center justify-center border border-black/20 bg-white shadow-[2px_2px_0_#111] transition-transform active:scale-95"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            />

            {/* Slide-down / Dropdown Menu */}
            <motion.nav
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed left-3 right-3 top-16 z-50 overflow-hidden border-2 border-black bg-[#f4f3ed] p-5 shadow-[6px_6px_0_#111] md:hidden"
            >
              {/* Decorative tape sticker */}
              <div className="pointer-events-none absolute -right-6 top-3 w-24 rotate-12 bg-[#ffe484]/80 py-0.5 text-center font-mono text-[9px] uppercase tracking-widest text-black/60 shadow-sm">
                menu
              </div>

              <div className="mb-3 flex items-center justify-between border-b border-black/10 pb-3">
                <p className="font-hand text-base text-black/70">where to?</p>

              </div>

              {/* Navigation Items */}
              <div className="grid gap-2">
                {links.map(({ href, label, icon: Icon }) => {
                  const active =
                    href === "/" ? pathname === "/" : pathname.startsWith(href);

                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={`focus-ring flex items-center justify-between border border-black/15 px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.1em] transition-all active:scale-[0.99] ${active
                          ? "bg-[#f6c843] text-black shadow-[3px_3px_0_#111]"
                          : "bg-white text-black/80 hover:bg-black/5"
                        }`}
                    >
                      <span className="flex items-center gap-3">
                        <Icon
                          size={15}
                          fill={
                            label === "Home" && active
                              ? "currentColor"
                              : "none"
                          }
                        />
                        {label}
                      </span>
                      {active ? (
                        <span className="size-2 rounded-full bg-[#2864df]" />
                      ) : (
                        <ArrowUpRight size={14} className="opacity-40" />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Social Links & Contact */}
              <div className="mt-5 border-t border-black/10 pt-4">
                <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-black/50">
                  connect
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring flex items-center justify-center gap-2 border border-black/15 bg-[#f6c843] py-2.5 font-mono text-[10px] font-bold uppercase text-black shadow-[2px_2px_0_#111] transition-transform active:scale-95"
                  >
                    <Github size={13} /> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/muhammadishaq-d3v/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring flex items-center justify-center gap-2 border border-black/15 bg-[#ff5a9d] py-2.5 font-mono text-[10px] font-bold uppercase text-white shadow-[2px_2px_0_#111] transition-transform active:scale-95"
                  >
                    <Linkedin size={13} /> LinkedIn
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="focus-ring flex items-center justify-center gap-2 border border-black/15 bg-[#24bf86] py-2.5 font-mono text-[10px] font-bold uppercase text-white shadow-[2px_2px_0_#111] transition-transform active:scale-95"
                  >
                    <Mail size={13} /> Email
                  </a>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
