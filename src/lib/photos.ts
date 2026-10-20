/**
 * Photography used across the site. Self-hosted WebP, sourced from Unsplash under the
 * Unsplash License (free for commercial use, no attribution required). Source URLs are
 * kept here so any image can be traced or replaced.
 *
 * Stock photos illustrate the type of work. Never caption them as our team or our clients.
 */

export type Photo = { src: string; alt: string; width: number; height: number; source: string };

export const photos = {
  "home-hero": { src: "/images/photos/home-hero.webp", alt: "A strategist presenting a plan to a team around a table", width: 2000, height: 1333, source: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0" },
  "home-cta": { src: "/images/photos/home-cta.webp", alt: "A team meeting around a conference table", width: 1800, height: 1200, source: "https://images.unsplash.com/photo-1622675363311-3e1904dc1885" },
  "pillar-build": { src: "/images/photos/pillar-build.webp", alt: "Website wireframes sketched on paper", width: 1400, height: 933, source: "https://images.unsplash.com/photo-1587440871875-191322ee64b0" },
  "pillar-grow": { src: "/images/photos/pillar-grow.webp", alt: "Laptop showing marketing analytics charts", width: 1400, height: 997, source: "https://images.unsplash.com/photo-1460925895917-afdab827c52f" },
  "pillar-automate": { src: "/images/photos/pillar-automate.webp", alt: "Customer support team wearing headsets", width: 1400, height: 933, source: "https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c" },
  "about-1": { src: "/images/photos/about-1.webp", alt: "Three people collaborating on a laptop in an office", width: 1600, height: 2400, source: "https://images.unsplash.com/photo-1603195827187-459ab02554a0" },
  "about-2": { src: "/images/photos/about-2.webp", alt: "Designer sketching website wireframes at a desk", width: 1400, height: 933, source: "https://images.unsplash.com/photo-1587355760421-b9de3226a046" },
  "about-3": { src: "/images/photos/about-3.webp", alt: "Team reviewing a plan on a whiteboard", width: 1400, height: 1050, source: "https://images.unsplash.com/photo-1557804506-669a67965ba0" },
  "web-development-hero": { src: "/images/photos/web-development-hero.webp", alt: "Developer reviewing a website design on a desktop monitor", width: 2000, height: 1333, source: "https://images.unsplash.com/photo-1542744094-3a31f272c490" },
  "web-development-1": { src: "/images/photos/web-development-1.webp", alt: "Hand-drawn wireframes of website page layouts", width: 1200, height: 800, source: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d" },
  "web-development-2": { src: "/images/photos/web-development-2.webp", alt: "Two developers working on code at their monitors", width: 1200, height: 800, source: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5" },
  "web-development-3": { src: "/images/photos/web-development-3.webp", alt: "Design system components on a monitor", width: 1200, height: 1500, source: "https://images.unsplash.com/photo-1558655146-d09347e92766" },
  "web-development-4": { src: "/images/photos/web-development-4.webp", alt: "Designer drawing a mobile wireframe on a tablet", width: 1200, height: 800, source: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c" },
  "e-commerce-development-hero": { src: "/images/photos/e-commerce-development-hero.webp", alt: "Shopper carrying several shopping bags", width: 2000, height: 1333, source: "https://images.unsplash.com/photo-1483985988355-763728e1935b" },
  "e-commerce-development-1": { src: "/images/photos/e-commerce-development-1.webp", alt: "Customer paying online with a card at a laptop", width: 1200, height: 800, source: "https://images.unsplash.com/photo-1733503747506-773e56e4078f" },
  "e-commerce-development-2": { src: "/images/photos/e-commerce-development-2.webp", alt: "Woman shopping on her phone with a card in hand", width: 1200, height: 675, source: "https://images.unsplash.com/photo-1713947506242-8fcae733d158" },
  "e-commerce-development-3": { src: "/images/photos/e-commerce-development-3.webp", alt: "Branded tote bag ready for delivery", width: 1200, height: 800, source: "https://images.unsplash.com/photo-1561715276-a2d087060f1d" },
  "e-commerce-development-4": { src: "/images/photos/e-commerce-development-4.webp", alt: "Couple browsing an online store together on a laptop", width: 1200, height: 800, source: "https://images.unsplash.com/photo-1665686377065-08ba896d16fd" },
  "mobile-app-development-hero": { src: "/images/photos/mobile-app-development-hero.webp", alt: "Hand holding a phone showing a dashboard app", width: 2000, height: 1500, source: "https://images.unsplash.com/photo-1551650975-87deedd944c3" },
  "mobile-app-development-1": { src: "/images/photos/mobile-app-development-1.webp", alt: "Food ordering app open on a smartphone", width: 1200, height: 1799, source: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31" },
  "mobile-app-development-2": { src: "/images/photos/mobile-app-development-2.webp", alt: "Person using a shopping app on a smartphone", width: 1200, height: 1500, source: "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d" },
  "mobile-app-development-3": { src: "/images/photos/mobile-app-development-3.webp", alt: "Developer testing an app on a phone in front of code", width: 1200, height: 1800, source: "https://images.unsplash.com/photo-1633250391894-397930e3f5f2" },
  "mobile-app-development-4": { src: "/images/photos/mobile-app-development-4.webp", alt: "Phone on a stand beside a desktop with app designs", width: 1200, height: 1500, source: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9" },
  "seo-optimizer-hero": { src: "/images/photos/seo-optimizer-hero.webp", alt: "Laptop showing website traffic analytics beside a coffee", width: 2000, height: 1333, source: "https://images.unsplash.com/photo-1599658880436-c61792e70672" },
  "seo-optimizer-1": { src: "/images/photos/seo-optimizer-1.webp", alt: "Search performance report with clicks and impressions", width: 1200, height: 732, source: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43" },
  "seo-optimizer-2": { src: "/images/photos/seo-optimizer-2.webp", alt: "Hand searching a map on a smartphone", width: 1200, height: 901, source: "https://images.unsplash.com/photo-1509576931792-214960705f8a" },
  "seo-optimizer-3": { src: "/images/photos/seo-optimizer-3.webp", alt: "Local shop owner serving a customer at the counter", width: 1200, height: 801, source: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" },
  "seo-optimizer-4": { src: "/images/photos/seo-optimizer-4.webp", alt: "Person reviewing website analytics on a laptop", width: 1200, height: 800, source: "https://images.unsplash.com/photo-1600469984476-c713650f1b1b" },
  "digital-marketing-hero": { src: "/images/photos/digital-marketing-hero.webp", alt: "Marketing team planning a campaign on laptops", width: 2000, height: 1333, source: "https://images.unsplash.com/photo-1582005450386-52b25f82d9bb" },
  "digital-marketing-1": { src: "/images/photos/digital-marketing-1.webp", alt: "Campaign performance charts on a tablet", width: 1200, height: 1800, source: "https://images.unsplash.com/photo-1571677246347-5040036b95cc" },
  "digital-marketing-2": { src: "/images/photos/digital-marketing-2.webp", alt: "Team working through ad results around a table", width: 1200, height: 1200, source: "https://images.unsplash.com/photo-1641951820920-c90394aef512" },
  "digital-marketing-3": { src: "/images/photos/digital-marketing-3.webp", alt: "Strategist mapping a campaign on a whiteboard wall", width: 1200, height: 1800, source: "https://images.unsplash.com/photo-1726594703316-fc9f35c7d80f" },
  "digital-marketing-4": { src: "/images/photos/digital-marketing-4.webp", alt: "Laptop on a desk showing a social media feed", width: 1200, height: 800, source: "https://images.unsplash.com/photo-1537731121640-bc1c4aba9b80" },
  "ai-content-video-creation-hero": { src: "/images/photos/ai-content-video-creation-hero.webp", alt: "Film crew setting up a camera on set", width: 2000, height: 1333, source: "https://images.unsplash.com/photo-1632187989763-c9c620420b4d" },
  "ai-content-video-creation-1": { src: "/images/photos/ai-content-video-creation-1.webp", alt: "Professional video camera with a microphone on a tripod", width: 1200, height: 1800, source: "https://images.unsplash.com/photo-1612548403247-aa2873e9422d" },
  "ai-content-video-creation-2": { src: "/images/photos/ai-content-video-creation-2.webp", alt: "Video editing timeline on a monitor", width: 1200, height: 800, source: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d" },
  "ai-content-video-creation-3": { src: "/images/photos/ai-content-video-creation-3.webp", alt: "Videographer filming with a handheld camera", width: 1200, height: 800, source: "https://images.unsplash.com/photo-1611784728558-6c7d9b409cdf" },
  "ai-content-video-creation-4": { src: "/images/photos/ai-content-video-creation-4.webp", alt: "Clapperboard held up at the start of a shoot", width: 1200, height: 811, source: "https://images.unsplash.com/photo-1485846234645-a62644f84728" },
  "ai-automation-systems-hero": { src: "/images/photos/ai-automation-systems-hero.webp", alt: "Consultant mapping a workflow strategy on a whiteboard", width: 2000, height: 1333, source: "https://images.unsplash.com/photo-1542744094-24638eff58bb" },
  "ai-automation-systems-1": { src: "/images/photos/ai-automation-systems-1.webp", alt: "Support agent with a headset answering customers", width: 1200, height: 800, source: "https://images.unsplash.com/photo-1766066014237-00645c74e9c6" },
  "ai-automation-systems-2": { src: "/images/photos/ai-automation-systems-2.webp", alt: "Chat message bubbles on a screen", width: 1200, height: 675, source: "https://images.unsplash.com/photo-1662974770404-468fd9660389" },
  "ai-automation-systems-3": { src: "/images/photos/ai-automation-systems-3.webp", alt: "Receptionist checking bookings on a tablet", width: 1200, height: 800, source: "https://images.unsplash.com/photo-1759143545924-beb85b33c0f1" },
  "ai-automation-systems-4": { src: "/images/photos/ai-automation-systems-4.webp", alt: "Sticky notes mapping an automation flow", width: 1200, height: 800, source: "https://images.unsplash.com/photo-1760952851538-17a59f691efe" },
  "industry-real-estate": { src: "/images/photos/industry-real-estate.webp", alt: "Modern house exterior lit at dusk", width: 1400, height: 1089, source: "https://images.unsplash.com/photo-1748063578185-3d68121b11ff" },
  "industry-retail-ecommerce": { src: "/images/photos/industry-retail-ecommerce.webp", alt: "Clothing boutique interior", width: 1400, height: 934, source: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04" },
  "industry-healthcare": { src: "/images/photos/industry-healthcare.webp", alt: "Doctor consulting with a patient", width: 1400, height: 788, source: "https://images.unsplash.com/photo-1758691462878-6edc3d3da1be" },
  "industry-med-spa-salons": { src: "/images/photos/industry-med-spa-salons.webp", alt: "Stylist working with a client in a salon", width: 1400, height: 935, source: "https://images.unsplash.com/photo-1562322140-8baeececf3df" },
  "industry-education": { src: "/images/photos/industry-education.webp", alt: "Online class on a laptop", width: 1400, height: 1050, source: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b" },
  "industry-professional-services": { src: "/images/photos/industry-professional-services.webp", alt: "Professionals reviewing documents at a table", width: 1400, height: 788, source: "https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d" },
  "industry-financial-services": { src: "/images/photos/industry-financial-services.webp", alt: "Advisor meeting with a client", width: 1400, height: 788, source: "https://images.unsplash.com/photo-1714974528703-e5ad41abc259" },
  "industry-manufacturing": { src: "/images/photos/industry-manufacturing.webp", alt: "Robotic production line in a factory", width: 1400, height: 933, source: "https://images.unsplash.com/photo-1647427060118-4911c9821b82" },
  "industry-hospitality": { src: "/images/photos/industry-hospitality.webp", alt: "Modern hotel lobby", width: 1400, height: 933, source: "https://images.unsplash.com/photo-1621293954908-907159247fc8" },
  "industry-restaurants": { src: "/images/photos/industry-restaurants.webp", alt: "Busy restaurant dining room", width: 1400, height: 996, source: "https://images.unsplash.com/photo-1494346480775-936a9f0d0877" },
  "industry-travel-tourism": { src: "/images/photos/industry-travel-tourism.webp", alt: "Beach and cliffside town from above", width: 1400, height: 1050, source: "https://images.unsplash.com/photo-1554366347-897a5113f6ab" },
  "industry-construction": { src: "/images/photos/industry-construction.webp", alt: "Contractor reviewing blueprints on site", width: 1400, height: 1867, source: "https://images.unsplash.com/photo-1772442198624-4fc4d7281e89" },
  "industry-logistics": { src: "/images/photos/industry-logistics.webp", alt: "Forklift moving through a warehouse", width: 1400, height: 1318, source: "https://images.unsplash.com/photo-1645736315000-6f788915923b" },
  "industry-automotive": { src: "/images/photos/industry-automotive.webp", alt: "Cars lined up outside a dealership", width: 1400, height: 1050, source: "https://images.unsplash.com/photo-1621808752171-531c30903889" },
  "industry-it-cybersecurity": { src: "/images/photos/industry-it-cybersecurity.webp", alt: "Technician working on server equipment", width: 1400, height: 2100, source: "https://images.unsplash.com/photo-1785682117028-6fcf2c0b515b" },
  "industry-startups-saas": { src: "/images/photos/industry-startups-saas.webp", alt: "Startup team working in an open office", width: 1400, height: 933, source: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740" },
} as const satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

/** Hero + gallery images for a service page. */
export function servicePhotos(slug: string): { hero: Photo; gallery: Photo[] } | null {
  const p = photos as Record<string, Photo>;
  const hero = p[`${slug}-hero`];
  if (!hero) return null;
  const gallery = [1, 2, 3, 4].map((i) => p[`${slug}-${i}`]).filter(Boolean);
  return { hero, gallery };
}

export function industryPhoto(slug: string): Photo | undefined {
  return (photos as Record<string, Photo>)[`industry-${slug}`];
}
