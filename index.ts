
import type { StaticImageData } from "next/image";

export type Project = {
  id: string;
  name: string;
  status: string;

  description: string;
  vision: string;
  tags: string[];
  sourceCodeLink: string;
  image: StaticImageData | string;
  accent: "blue" | "yellow" | "green" | "pink" | "black";
};

import bmb from './assets/bmb.png';
import helious from './assets/helious.png';
import cmn from './assets/cmn.png';
import tracevault from './assets/tracevault.png';
import blindspot from './assets/blindspot.png';
import tg from './assets/image.png';
import nest from './assets/nest.png';


export const projects: Project[] = [
  {
    id: "buymebread",
    name: "BuyMeBread",
    status: "In Development",
    description:
      "A Paystack-powered Nigerian creator support platform with a NestJS, Prisma, PostgreSQL, Redis, Bull queues, Resend, Cloudinary, and secure creator payout flows.",
    vision:
      "A frictionless creator economy layer where fans support with intent and creators grow communities without operational burnout.",
    tags: ["Next.js", "NestJS", "Prisma", "Paystack", "AppSec"],
    sourceCodeLink: "https://buymebread.ng/",
    accent: "yellow",
    image: bmb
  },
  {
    id: "helious",
    name: "Helious",
    status: "Live",

    description:
      "An AI-powered Ethereum smart contract analyzer that turns contract risk, safety scoring, and plain-English security summaries into a fast product experience.",
    vision:
      "Make Web3 safer by helping users and dApps spot suspicious smart contracts before they sign.",
    tags: ["Next.js", "Etherscan", "AI", "Web3 Security"],
    sourceCodeLink: "https://heliouss.vercel.app",
    accent: "black",
    image: helious
  },
  {
    id: "challengemenow",
    name: "ChallengeMeNow",
    status: "Live",
    description:
      "A timed skill-assessment platform with challenge questions, granular scoring, weak-area detection, and progress tracking for developers and teams.",
    vision:
      "Replace guesswork about skill level with honest, measurable proof of proficiency.",
    tags: ["React", "FastAPI", "PostgreSQL", "Redis"],
    sourceCodeLink: "https://challengemenow.xyz",
    accent: "blue",
    image: cmn
  },
  {
    id: "tracevault",
    name: "TraceVault",
    status: "MVP",
    description:
      "An open-source lost-and-found platform for campuses and communities, hardened with Clerk, MongoDB, Cloudinary, Redis caching, rate limits, and optimized indexes.",
    vision:
      "A deployable community tool that keeps useful public infrastructure alive beyond one maintainer.",
    tags: ["Next.js 15", "MongoDB", "Clerk", "Cloudinary"],
    sourceCodeLink: "https://tracevault.xyz",
    accent: "green",
    image: tracevault
  },
  {
    id: "blindspot",
    name: "BlindSpot",
    status: "In Development",
    description:
      "A Tauri desktop privacy app for streamers and screen-sharers, built to hide sensitive regions instantly with blackout or blur overlays.",
    vision:
      "Give people one-click peace of mind when sharing their screen in live digital spaces.",
    tags: ["Tauri", "Rust", "React", "Privacy"],
    sourceCodeLink: "https://blindspot-eta.vercel.app/",
    accent: "pink",
    image: blindspot
  },
  {
    id: "terminal-graveyard",
    name: "Terminal Graveyard",
    status: "Live",
    description:
      "Terminal Graveyard is a lightweight, cross-platform background desktop application built using Tauri, Rust, and React. It acts as a dedicated archive, or graveyard, for your command-line history, automatically capturing and storing past commands so you never lose track of complex one-liners or frequently used scripts.",
    vision:
      "It provides a clean, searchable user interface to quickly sift through hundreds of past commands using keywords.",
    tags: ["Tauri", "Rust", "React", "Desktop App"],
    sourceCodeLink: "https://terminal-graveyard.vercel.app/",
    image: tg,
    accent: "black",
  },
  {
    id: "nest-js-starter",
    name: "NestJS Starter",
    status: "Live",
    description:
      "Opinionated NestJS backend template by Kindra Studio Pre-wired with Prisma, PostgreSQL, JWT Auth, Google OAuth, and Rate Limiting",
    vision:
      "A production-ready boilerplate to ship APIs faster with security and structure baked in",
    tags: ["NestJS", "Prisma", "PostgreSQL", "JWT Auth", "Google OAuth", "Rate Limiting"],
    sourceCodeLink: "https://github.com/buildwithmuhd/nestjs-starter",
    image: nest,
    accent: "yellow",
  }

];

export const profile = {
  name: "Muhammad Is'haq",
  handle: "buildwithmuhd",
  role: "AppSec & Frontend Engineer",
  location: "Nigeria",
  education: "Computer Science, University of Ilorin",
  current: "Technology Director at Very Unreal LLC",
  github: "https://github.com/buildwithmuhd",
  website: "https://muhammadishaq.xyz",
  email: "muhammadhabbibi24434@gmail.com",
  bio:
    "Muhammad Is'haq is a product-minded AppSec and frontend engineer building secure, high-performance web products with Next.js, TypeScript, NestJS, Prisma, PostgreSQL, Redis, and Tailwind CSS.",
  shortBio: "I build secure software that feels light, clear, and hard to break.",
  stack: [
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "NestJS",
    "Prisma",
    "PostgreSQL",
    "Redis",
    "AppSec",
    "Pen Testing",
  ],
  experience: [
    "Technology Director at Very Unreal LLC",
    "Frontend Engineer at ngtaskhub.com",
    "Frontend Engineer at referx.com.ng",
    "NOC/SIWES placement at Galaxy Backbone, Abuja",
  ],
};
