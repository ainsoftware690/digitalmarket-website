import type { Metadata } from "next";
import Hero from "./components/home/Hero";
import Commitments from "./components/home/Commitments";
import Pillars from "./components/home/Pillars";
import { ClientLogos, Reviews, WorkPreview } from "./components/home/Proof";
import { ProcessSection } from "./components/sections/ProcessSection";
import IndustriesGrid from "./components/home/IndustriesGrid";
import ServicesExplorer from "./components/home/ServicesExplorer";
import { explorerItems } from "@/lib/explorer";
import PricingPreview from "./components/home/PricingPreview";
import ReportShowcase from "./components/home/ReportShowcase";
import Faq from "./components/home/Faq";
import FinalCta from "./components/home/FinalCta";

export const metadata: Metadata = {
  title: { absolute: "Digital Market Mart | Web Design, SEO & Google Ads Agency in Maryland" },
  description:
    "Websites that convert, plus the SEO, Google Ads and automation that fill them. Maryland agency, written quotes, month-to-month marketing. Get a free audit.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientLogos />
      <Commitments />
      <Pillars />
      <ServicesExplorer items={explorerItems()} />
      <WorkPreview />
      <ProcessSection tone="white" />
      <ReportShowcase />
      <IndustriesGrid />
      <Reviews />
      <PricingPreview />
      <Faq />
      <FinalCta />
    </main>
  );
}
