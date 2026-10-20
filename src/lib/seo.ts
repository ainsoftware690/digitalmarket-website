import type { Metadata } from "next";
import { fullAddress, site } from "./site";

type PageMeta = {
  /** Page title without the brand suffix; the layout template adds it. */
  title: string;
  description: string;
  path: string;
  /** Set for pages that must not be indexed. */
  noindex?: boolean;
};

/** Consistent title, description, canonical and social tags for every page. */
export function pageMetadata({ title, description, path, noindex }: PageMeta): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title: `${title} | ${site.name}`,
      description,
      locale: "en_US",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name}: websites that sell, marketing that fills them` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: ["/opengraph-image"],
    },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  };
}

/** Organization + LocalBusiness schema for the head office. */
export function organizationJsonLd() {
  const { address } = site;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        legalName: site.legalName,
        url: site.url,
        logo: `${site.url}/images/logo.webp`,
        email: site.email.general,
        telephone: site.phones.sales.e164,
        sameAs: Object.values(site.social),
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#localbusiness`,
        name: site.name,
        url: site.url,
        image: `${site.url}/images/logo.webp`,
        telephone: site.phones.sales.e164,
        email: site.email.general,
        priceRange: "$$",
        parentOrganization: { "@id": `${site.url}/#organization` },
        address: {
          "@type": "PostalAddress",
          streetAddress: address.street,
          addressLocality: address.city,
          addressRegion: address.region,
          postalCode: address.postalCode,
          addressCountry: address.country,
        },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Country", name: "Saudi Arabia" },
          { "@type": "Country", name: "Qatar" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        description: `${site.description} Head office: ${fullAddress}.`,
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Renders a JSON-LD block. Escapes "<" so content can't break out of the script tag. */
export function jsonLdString(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
