import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
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
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans min-h-screen">{children}</body>
    </html>
  );
}
