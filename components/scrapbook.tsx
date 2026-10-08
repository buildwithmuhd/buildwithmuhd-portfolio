import type { ReactNode } from "react";

export type Accent = "blue" | "yellow" | "green" | "pink" | "black";

export const accentClass: Record<Accent, string> = {
  blue: "bg-[#2864df] text-white",
  yellow: "bg-[#f6c843] text-[#11100e]",
  green: "bg-[#75d8b4] text-[#11100e]",
  pink: "bg-[#ff5a9d] text-white",
  black: "bg-[#15120f] text-white",
};

export const stickerClass: Record<Exclude<Accent, "black"> | "mint" | "cream", string> = {
  blue: "bg-[#2864df] text-white",
  yellow: "bg-[#f6c843] text-[#11100e]",
  green: "bg-[#24bf86] text-[#11100e]",
  pink: "bg-[#ff5a9d] text-white",
  mint: "bg-[#91dec4] text-[#11100e]",
  cream: "bg-[#efe2a4] text-[#11100e]",
};

export function Sticker({
  children,
  tone = "yellow",
  className = "",
}: {
  children: ReactNode;
  tone?: keyof typeof stickerClass;
  className?: string;
}) {
  return (
    <span
      className={`marker interactive-sticker inline-flex items-center gap-2 border border-black/20 px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.08em] shadow-sticker ${stickerClass[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export function Polaroid({
  src,
  caption,
  className = "",
}: {
  src: string;
  caption: string;
  className?: string;
}) {
  return (
    <figure className={`tape relative bg-white p-3 pb-8 shadow-paper ${className}`}>
      <img src={src} alt={caption} className="aspect-[4/5] w-full object-cover grayscale-[8%]" />
      <figcaption className="absolute bottom-2 left-0 right-0 text-center font-hand text-sm text-black/65">
        {caption}
      </figcaption>
    </figure>
  );
}
