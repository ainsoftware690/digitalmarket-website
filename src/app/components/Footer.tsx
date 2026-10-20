import Link from "next/link";
import Image from "next/image";
import { fullAddress, legalLinks, site, whatsappUrl } from "@/lib/site";
import { pillars } from "@/lib/nav";

const company = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Industries", href: "/industries" },
  { label: "GCC markets", href: "/vista" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { name: "LinkedIn", href: site.social.linkedin },
  { name: "Instagram", href: site.social.instagram },
  { name: "Facebook", href: site.social.facebook },
  { name: "YouTube", href: site.social.youtube },
  { name: "X", href: site.social.x },
];

export default function Footer() {
  const { sales, support } = site.phones;

  return (
    <footer className="bg-ink-deep text-white/80">
      <div className="mx-auto max-w-[1200px] px-5 pb-10 pt-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Image src="/images/logo-light.webp" alt={site.name} width={180} height={70} className="h-14 w-auto" />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/70">
              We design websites that sell, then bring in customers with SEO, Google Ads and automation. One team,
              one monthly report.
            </p>
            <address className="mt-6 space-y-2 text-[15px] not-italic">
              <p>{fullAddress}</p>
              <p>
                <a className="font-semibold text-white hover:text-signal" href={`tel:${sales.e164}`}>
                  {sales.display}
                </a>{" "}
                <span className="text-white/50">new projects</span>
              </p>
              <p>
                <a className="font-semibold text-white hover:text-signal" href={`tel:${support.e164}`}>
                  {support.display}
                </a>{" "}
                <span className="text-white/50">client support and billing</span>
              </p>
              <p>
                <a className="font-semibold text-white hover:text-signal" href={`mailto:${site.email.general}`}>
                  {site.email.general}
                </a>
              </p>
              <p>
                <a className="font-semibold text-white hover:text-signal" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  WhatsApp us
                </a>
              </p>
            </address>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {pillars.map((p) => (
              <nav key={p.id} aria-label={`${p.name} services`}>
                <p className="title text-base text-white">{p.name}</p>
                <ul className="mt-4 space-y-2.5 text-[15px]">
                  {p.services.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="hover:text-white">
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
            <nav aria-label="Company">
              <p className="title text-base text-white">Company</p>
              <ul className="mt-4 space-y-2.5 text-[15px]">
                {company.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Registered in Maryland, USA.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white">
                {l.label}
              </Link>
            ))}
          </nav>
          <nav aria-label="Social" className="flex flex-wrap gap-x-4 gap-y-2">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {s.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
