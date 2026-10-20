import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { INDUSTRIES } from "@/lib/industries";
import PhotoHero from "../components/ui/PhotoHero";
import { photos } from "@/lib/photos";
import IndustriesGrid from "../components/home/IndustriesGrid";
import FinalCta from "../components/home/FinalCta";

export const metadata: Metadata = pageMetadata({
  title: "Industries We Serve",
  description: `Websites, SEO and ads built around how your sector sells. ${INDUSTRIES.length} industries including healthcare, legal and accounting, home services, real estate and hospitality.`,
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <main>
      <PhotoHero
        photo={photos["industry-hospitality"]}
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Industries" }]}
        title="Marketing that knows how your customers buy"
        intro="Every industry page below explains the problems we usually see in that field and how we fix them. Don't see yours? The free audit will still tell you what would work."
      />
      <IndustriesGrid all />
      <FinalCta />
    </main>
  );
}
