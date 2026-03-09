import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { Process } from "@/sections/Process";
import { CaseStudies } from "@/sections/CaseStudies";
import { CTA } from "@/sections/CTA";
import { FAQ } from "@/sections/FAQ";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <CaseStudies />
        <CTA />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
