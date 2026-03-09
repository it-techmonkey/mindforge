import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MindForge.",
  description:
    "We build brands that stand out. Data-driven marketing solutions that grow your business and captivate your audience. Strategy to execution.",
  keywords: ["digital marketing", "growth agency", "branding", "SEO", "PPC", "MindForge"],
  openGraph: {
    title: "MindForge | Strategy Meets Creativity",
    description: "Data-driven marketing solutions that grow your business.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className="font-sans min-h-screen">{children}</body>
    </html>
  );
}
