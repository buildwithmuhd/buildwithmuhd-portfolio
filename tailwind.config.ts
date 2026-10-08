import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./index.ts"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        display: ["var(--font-display)", "Impact", "sans-serif"],
        hand: ["var(--font-hand)", "Comic Sans MS", "cursive"],
      },
      boxShadow: {
        paper: "0 18px 40px rgba(0, 0, 0, 0.24)",
        sticker: "0 3px 0 rgba(0, 0, 0, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
