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
        "primary-hover": "#5a2840",
        "off-white": "#EAE1E1",
        charcoal: "#1A1A1B",
        "soft-lavender": "#C9B7BE",
        "true-black": "#000000",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(112, 48, 67, 0.08), 0 8px 16px -6px rgba(0,0,0,0.04)",
        "soft-lg": "0 12px 40px -8px rgba(112, 48, 67, 0.12), 0 16px 24px -8px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
