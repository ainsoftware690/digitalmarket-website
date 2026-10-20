/**
 * Proof shown on the site: client logos, reviews and case studies.
 *
 * Every section that uses these lists hides itself while its list is empty,
 * so the site never shows placeholder or invented proof.
 *
 * Rules before adding anything here (FTC 16 CFR Part 465):
 *  - Real clients only, with their written permission.
 *  - Reviews quoted as written; link to where they were published when possible.
 *  - Case-study numbers must come from reports you can produce on request.
 */

export type ClientLogo = {
  name: string;
  /** Path under /public, e.g. "/images/clients/waggoner.svg". SVG or WebP preferred. */
  src: string;
  width: number;
  height: number;
};

export type Review = {
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Where the review was published (Google, Clutch, LinkedIn). */
  source?: { label: string; href: string };
  /** Optional headshot under /public. */
  photo?: string;
};

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  /** One sentence: what problem the client came with. */
  challenge: string;
  /** What we built or ran, as short phrases. */
  work: string[];
  /** Up to three results, each a number and what it measures. */
  results: { value: string; label: string }[];
  /** Screenshot under /public, 16:10 works best. */
  image?: string;
  url?: string;
  review?: Review;
};

export type LiveProject = {
  name: string;
  industry: string;
  description: string;
  href: string;
  /** Screenshots of the live site, captured from the public homepage. */
  desktop?: string;
  mobile?: string;
};

export const clientLogos: ClientLogo[] = [];

export const reviews: Review[] = [];

export const caseStudies: CaseStudy[] = [];

/** Sites we built that are live today. Linked, no claims beyond "we built it". */
export const liveProjects: LiveProject[] = [
  {
    name: "ReservationKart",
    industry: "Travel & Tourism",
    description: "Travel booking platform with search, listings and checkout.",
    href: "https://reservationkart.com",
    desktop: "/images/work/reservationkart-desktop.webp",
    mobile: "/images/work/reservationkart-mobile.webp",
  },
  {
    name: "ReservationCarRent",
    industry: "Automotive & Rentals",
    description: "Car rental booking site with fleet listings and reservations.",
    href: "https://reservationcarrent.com",
    desktop: "/images/work/reservationcarrent-desktop.webp",
    mobile: "/images/work/reservationcarrent-mobile.webp",
  },
  {
    name: "Pinnacle Network & Security",
    industry: "IT & Cybersecurity",
    description: "Corporate website for a managed network and security provider.",
    href: "https://pinnaclenetsec.com",
    desktop: "/images/work/pinnaclenetsec-desktop.webp",
    mobile: "/images/work/pinnaclenetsec-mobile.webp",
  },
];

/** Average rating is only shown when at least this many reviews exist. */
export const MIN_REVIEWS_FOR_RATING = 5;

export type TeamMember = {
  name: string;
  role: string;
  /** Headshot under /public, square. */
  photo: string;
  bio: string;
  linkedin?: string;
};

/** The About page shows a team section once at least one person is listed. */
export const team: TeamMember[] = [];
