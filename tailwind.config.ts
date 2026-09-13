import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FDFCF8",
        foreground: "#111111",
        card: "#FFFFFF",
        primary: "#111111",
        "primary-foreground": "#FFFFFF",
        accent: "#FF5A00", // Vibrant Orange
        "accent-secondary": "#0055FF", // Electric Blue
        "accent-tertiary": "#00C853", // Mint Green
        muted: "#EAE7DD",
        border: "#111111",
      },
      fontFamily: {
        sans: ["var(--font-bricolage)", "sans-serif"],
        handwriting: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        hard: "4px 4px 0px 0px rgba(17, 17, 17, 1)",
        "hard-lg": "8px 8px 0px 0px rgba(17, 17, 17, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
