"use client";

import { useState } from "react";
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
              Share this post
            </span>
          </div>


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
              className={`focus-ring flex items-center gap-2 border border-black px-3.5 py-2 font-mono text-[11px] font-bold uppercase tracking-wider transition-all ${active
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


    </section>
  );
}
