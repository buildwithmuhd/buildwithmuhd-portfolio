"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Share2,
  Copy,
  Check,
  ExternalLink,
  MessageCircle,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Sparkles,
} from "lucide-react";
import type { BlogPost } from "../data/posts";

type Platform = "whatsapp" | "twitter" | "linkedin" | "discord" | "facebook" | "instagram";

type SocialPreviewsProps = {
  post: BlogPost;
};

// Discord Icon custom SVG for authentic look
function DiscordIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export function SocialPreviews({ post }: SocialPreviewsProps) {
  const [platform, setPlatform] = useState<Platform>("whatsapp");
  const [copied, setCopied] = useState(false);

  const fullUrl = `https://muhammadishaq.xyz/blog/${post.slug}`;
  const shareText = `Read "${post.title}" by Muhammad Is'haq:`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const platforms: {
    id: Platform;
    name: string;
    icon: any;
    color: string;
    badgeTone: string;
    shareUrl?: string;
  }[] = [
    {
      id: "whatsapp",
      name: "WhatsApp",
      icon: MessageCircle,
      color: "bg-[#25D366] text-white",
      badgeTone: "#25D366",
      shareUrl: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText} ${fullUrl}`)}`,
    },
    {
      id: "twitter",
      name: "Twitter / X",
      icon: Twitter,
      color: "bg-black text-white",
      badgeTone: "#000000",
      shareUrl: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(fullUrl)}&via=aizenwritescode`,
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: Linkedin,
      color: "bg-[#0A66C2] text-white",
      badgeTone: "#0A66C2",
      shareUrl: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
    },
    {
      id: "discord",
      name: "Discord",
      icon: DiscordIcon,
      color: "bg-[#5865F2] text-white",
      badgeTone: "#5865F2",
    },
    {
      id: "facebook",
      name: "Facebook",
      icon: Facebook,
      color: "bg-[#1877F2] text-white",
      badgeTone: "#1877F2",
      shareUrl: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: Instagram,
      color: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white",
      badgeTone: "#E1306C",
    },
  ];

  const currentPlatform = platforms.find((p) => p.id === platform)!;

  return (
    <section className="mt-14 border-2 border-black bg-white p-6 shadow-[6px_6px_0_#111] sm:p-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <Share2 size={16} className="text-[#2864df]" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-black/60">
              Social Media Previews
            </span>
          </div>
          <h3 className="mt-1 font-display text-2xl tracking-tight sm:text-3xl">
            HOW THIS LOOKS WHEN SHARED
          </h3>
          <p className="mt-1 text-xs text-black/60 sm:text-sm">
            Live preview cards showing how WhatsApp, Twitter, Facebook, LinkedIn, Discord &amp; Instagram render this post.
          </p>
        </div>

        {/* Quick share buttons */}
        <div className="flex items-center gap-2">
          {currentPlatform.shareUrl && (
            <a
              href={currentPlatform.shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center gap-2 border border-black bg-[#f6c843] px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-wider text-black shadow-[2px_2px_0_#111] transition-transform hover:scale-105 active:scale-95"
            >
              Share on {currentPlatform.name} <ExternalLink size={12} />
            </a>
          )}
          <button
            type="button"
            onClick={handleCopy}
            className="focus-ring flex items-center gap-2 border border-black bg-black px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-wider text-white shadow-[2px_2px_0_#2864df] transition-transform hover:scale-105 active:scale-95"
          >
            {copied ? (
              <>
                <Check size={12} className="text-[#24bf86]" /> Copied!
              </>
            ) : (
              <>
                <Copy size={12} /> Copy Link
              </>
            )}
          </button>
        </div>
      </div>

      {/* Platform Selector Tabs */}
      <div className="mt-6 flex flex-wrap gap-2">
        {platforms.map((p) => {
          const active = platform === p.id;
          const IconComponent = p.icon;

          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setPlatform(p.id)}
              className={`focus-ring flex items-center gap-2 border border-black px-3.5 py-2 font-mono text-[11px] font-bold uppercase tracking-wider transition-all ${
                active
                  ? "bg-black text-white shadow-[3px_3px_0_#f6c843]"
                  : "bg-[#f4f3ed] text-black/75 hover:bg-black/5 hover:text-black"
              }`}
            >
              <IconComponent size={13} />
              {p.name}
            </button>
          );
        })}
      </div>

      {/* Preview Stage */}
      <div className="mt-6 rounded-lg border border-black/10 bg-[#e8e6dc]/60 p-4 sm:p-8">
        <AnimatePresence mode="wait">
          {/* WHATSAPP PREVIEW */}
          {platform === "whatsapp" && (
            <motion.div
              key="whatsapp"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mx-auto max-w-md rounded-2xl bg-[#0b141a] p-4 text-white shadow-xl"
            >
              <div className="mb-2 flex items-center gap-2 border-b border-white/10 pb-2 font-mono text-[10px] text-white/50">
                <span className="size-2 rounded-full bg-[#25D366]" /> WhatsApp Chat Preview
              </div>

              {/* Chat Bubble */}
              <div className="ml-auto max-w-[92%] rounded-2xl rounded-tr-none bg-[#005c4b] p-3 text-white shadow-md">
                {/* Link Preview Card */}
                <div className="overflow-hidden rounded-xl bg-[#025142] border border-white/10">
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/40">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <p className="font-sans text-[15px] font-bold leading-snug text-white">
                      {post.title}
                    </p>
                    <p className="mt-1 line-clamp-2 text-xs text-white/80">
                      {post.excerpt}
                    </p>
                    <p className="mt-2 text-[11px] font-medium text-[#8dfac9]">
                      muhammadishaq.xyz
                    </p>
                  </div>
                </div>

                {/* Message Text */}
                <p className="mt-2 text-sm text-[#8dfac9] underline underline-offset-2">
                  {fullUrl}
                </p>
                <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-white/60">
                  <span>10:42 AM</span>
                  <span className="text-[#53bdeb]">✓✓</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* TWITTER / X PREVIEW */}
          {platform === "twitter" && (
            <motion.div
              key="twitter"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mx-auto max-w-lg rounded-2xl border border-white/10 bg-black p-5 text-white shadow-xl"
            >
              {/* Tweet Author Header */}
              <div className="flex items-start gap-3">
                <div className="grid size-10 shrink-0 place-items-center rounded-full bg-[#ff5a9d] text-sm font-black text-white">
                  M
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-white text-[15px]">Muhammad Is&apos;haq</span>
                    <span className="text-white/50 text-xs">@aizenwritescode · Just now</span>
                  </div>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/95">
                    Excited to share my latest field notes: <span className="font-bold text-[#1d9bf0]">{post.title}</span> 🛡️
                    <br />
                    Check it out here 👇
                  </p>

                  {/* Summary Large Image Card */}
                  <div className="mt-3 overflow-hidden rounded-2xl border border-white/15 bg-[#16181c] transition-colors hover:border-white/30">
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/50">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-3.5">
                      <p className="text-[12px] text-white/50 uppercase tracking-wide">
                        muhammadishaq.xyz
                      </p>
                      <p className="mt-1 text-[15px] font-bold text-white leading-snug">
                        {post.title}
                      </p>
                      <p className="mt-1 line-clamp-2 text-xs text-white/65">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Twitter Engagement Icons */}
                  <div className="mt-4 flex items-center justify-between text-xs text-white/45 max-w-xs">
                    <span>💬 12</span>
                    <span>🔁 28</span>
                    <span>❤️ 142</span>
                    <span>📊 2.4K</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* LINKEDIN PREVIEW */}
          {platform === "linkedin" && (
            <motion.div
              key="linkedin"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mx-auto max-w-lg rounded-xl border border-black/15 bg-white p-5 text-black shadow-lg"
            >
              {/* Author Header */}
              <div className="flex items-start gap-3">
                <div className="grid size-11 shrink-0 place-items-center rounded-full bg-[#2864df] text-base font-black text-white">
                  M
                </div>
                <div>
                  <p className="font-bold text-sm text-black leading-tight">
                    Muhammad Is&apos;haq
                  </p>
                  <p className="text-[11px] text-black/60 leading-tight">
                    AppSec &amp; Frontend Engineer • Technology Director at Very Unreal LLC
                  </p>
                  <p className="text-[10px] text-black/45">Just now • 🌐</p>
                </div>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-black/85">
                New writing on the blog! {post.excerpt}
              </p>

              {/* LinkedIn Shared Article Card */}
              <div className="mt-3 overflow-hidden rounded-lg border border-black/15 bg-[#f8f9fa]">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/10">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-3.5">
                  <p className="text-[15px] font-bold text-black leading-snug">
                    {post.title}
                  </p>
                  <p className="mt-1 text-[11px] text-black/55 uppercase tracking-wider">
                    muhammadishaq.xyz • {post.readTime} min read
                  </p>
                </div>
              </div>

              {/* Action Bar */}
              <div className="mt-3 flex items-center justify-between border-t border-black/10 pt-2 text-[11px] font-bold text-black/65">
                <button type="button" className="hover:text-black">👍 Like</button>
                <button type="button" className="hover:text-black">💬 Comment</button>
                <button type="button" className="hover:text-black">🔄 Repost</button>
                <button type="button" className="hover:text-black">✈️ Send</button>
              </div>
            </motion.div>
          )}

          {/* DISCORD PREVIEW */}
          {platform === "discord" && (
            <motion.div
              key="discord"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mx-auto max-w-lg rounded-xl bg-[#313338] p-5 text-white shadow-xl"
            >
              {/* Message Header */}
              <div className="flex items-start gap-3">
                <div className="grid size-10 shrink-0 place-items-center rounded-full bg-[#5865F2] font-black text-white">
                  M
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white text-[14px]">buildwithmuhd</span>
                    <span className="rounded bg-[#5865F2] px-1 text-[9px] font-bold uppercase text-white">
                      APP
                    </span>
                    <span className="text-[11px] text-white/40">Today at 10:42 AM</span>
                  </div>
                  <p className="mt-1 text-xs text-[#00a8fc] underline">
                    {fullUrl}
                  </p>

                  {/* Discord Rich Embed */}
                  <div className="mt-2.5 max-w-md rounded border-l-4 border-[#2864df] bg-[#2b2d31] p-3.5 shadow-sm">
                    <p className="text-[11px] font-semibold text-white/70">
                      Muhammad Is&apos;haq Portfolio
                    </p>
                    <a
                      href={fullUrl}
                      className="mt-1 block text-[15px] font-bold text-[#00a8fc] hover:underline"
                    >
                      {post.title}
                    </a>
                    <p className="mt-1 text-xs leading-relaxed text-white/75">
                      {post.excerpt}
                    </p>

                    <div className="mt-3 overflow-hidden rounded-md border border-white/10">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="aspect-[16/9] w-full object-cover"
                      />
                    </div>

                    <div className="mt-2.5 flex items-center gap-2 text-[10px] text-white/45">
                      <span>muhammadishaq.xyz</span>
                      <span>•</span>
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* FACEBOOK PREVIEW */}
          {platform === "facebook" && (
            <motion.div
              key="facebook"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mx-auto max-w-lg rounded-xl border border-black/15 bg-white p-5 text-black shadow-lg"
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="grid size-10 shrink-0 place-items-center rounded-full bg-[#1877F2] font-black text-white">
                  M
                </div>
                <div>
                  <p className="font-bold text-sm leading-tight text-black">
                    Muhammad Is&apos;haq
                  </p>
                  <p className="text-[11px] text-black/50">Just now · 🌐 Public</p>
                </div>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-black/85">
                Check out the latest article on product security &amp; frontend engineering:
              </p>

              {/* Shared Link Card */}
              <div className="mt-3 overflow-hidden rounded border border-black/20 bg-[#f0f2f5]">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/10">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-black/60">
                    MUHAMMADISHAQ.XYZ
                  </p>
                  <p className="mt-0.5 font-bold text-[15px] leading-snug text-black">
                    {post.title}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs text-black/70">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Reaction Bar */}
              <div className="mt-3 flex items-center justify-around border-t border-black/10 pt-2 text-xs font-semibold text-black/65">
                <button type="button" className="hover:text-[#1877F2]">👍 Like</button>
                <button type="button" className="hover:text-[#1877F2]">💬 Comment</button>
                <button type="button" className="hover:text-[#1877F2]">↗️ Share</button>
              </div>
            </motion.div>
          )}

          {/* INSTAGRAM STORY / POST PREVIEW */}
          {platform === "instagram" && (
            <motion.div
              key="instagram"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mx-auto max-w-sm overflow-hidden rounded-2xl border-2 border-black bg-gradient-to-b from-[#1c1c1e] to-[#0a0a0c] p-4 text-white shadow-2xl"
            >
              {/* Instagram Story Top Bar */}
              <div className="flex items-center justify-between pb-3">
                <div className="flex items-center gap-2">
                  <div className="grid size-8 place-items-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-0.5 text-xs font-black text-white">
                    <span className="grid size-full place-items-center rounded-full bg-black">
                      M
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold">@buildwithmuhd</span>
                  <span className="text-[10px] text-white/50">• 2h</span>
                </div>
                <span className="font-mono text-xs text-white/50">•••</span>
              </div>

              {/* Story Visual Canvas */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/20 bg-black">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                />

                {/* Scrapbook Sticker Overlay */}
                <div className="absolute inset-x-3 bottom-14 rounded-lg border border-black/20 bg-white/95 p-3 text-black shadow-lg backdrop-blur">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#2864df]">
                    <Sparkles size={11} /> New Blog Post
                  </div>
                  <p className="mt-1 font-display text-lg leading-tight">
                    {post.title.toUpperCase()}
                  </p>
                </div>

                {/* Instagram Link Sticker */}
                <div className="absolute bottom-3 inset-x-8 rounded-full border border-black/10 bg-white px-4 py-2 text-center text-xs font-bold text-black shadow-lg">
                  🔗 muhammadishaq.xyz
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-white/60">
                <span>Send message</span>
                <span>❤️ ✈️</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
