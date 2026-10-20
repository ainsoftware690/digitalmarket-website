import Image from "next/image";
import Link from "next/link";
import { photos } from "@/lib/photos";
import { site, whatsappUrl } from "@/lib/site";
import Parallax from "../motion/Parallax";
import { Container } from "../ui/SectionHeading";

export default function FinalCta({
  title = "Find out what's costing you customers",
  lead = "Send us your website. Within two business days you'll get a short video walking through 12 checks and the three fixes we'd make first.",
}: {
  title?: string;
  lead?: string;
}) {
  const bg = photos["home-cta"];
  return (
    <section aria-labelledby="final-cta-heading" className="grain relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <Parallax distance={120}>
        <Image src={bg.src} alt="" fill sizes="100vw" className="object-cover" />
      </Parallax>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#021a30_0%,rgba(2,26,48,0.92)_45%,rgba(3,42,76,0.7)_100%)]" />
      <Container className="relative grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
        <div data-reveal>
          <h2 id="final-cta-heading" className="display text-[clamp(2.2rem,5vw,4.2rem)]">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{lead}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col" data-reveal>
          <Link href="/free-audit" className="btn btn-primary h-14 text-[1.05rem]">
            Get a free audit
          </Link>
          <a href={`tel:${site.phones.sales.e164}`} className="btn btn-on-dark h-14 text-[1.05rem]">
            Call {site.phones.sales.display}
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-sm font-semibold text-white/80 underline underline-offset-4 hover:text-white"
          >
            Or message us on WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
