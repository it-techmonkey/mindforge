import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#703043",
        "off-white": "#EAE1E1",
        charcoal: "#1A1A1B",
        "soft-lavender": "#C9B7BE",
        "true-black": "#000000",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-fraunces)", "var(--font-dm-sans)", "serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 2px 16px -2px rgba(112, 48, 67, 0.06), 0 6px 12px -4px rgba(26,26,27,0.04)",
        "soft-lg": "0 8px 32px -6px rgba(112, 48, 67, 0.1), 0 12px 20px -6px rgba(26,26,27,0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
