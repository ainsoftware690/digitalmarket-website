import type { MetadataRoute } from "next";
import { services } from "../lib/services";
import { INDUSTRY_SLUGS } from "../lib/industries";
import { site } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    entry("", 1, "weekly"),
    entry("/services", 0.9),
    ...services.map((s) => entry(`/services/${s.slug}`, s.category === "education" ? 0.5 : 0.9)),
    entry("/free-audit", 0.9),
    entry("/pricing", 0.8),
    entry("/work", 0.8),
    entry("/about", 0.7),
    entry("/contact", 0.7),
    entry("/industries", 0.8),
    ...INDUSTRY_SLUGS.map((slug) => entry(`/industries/${slug}`, 0.7)),
    entry("/vista", 0.6),
    entry("/terms", 0.2, "yearly"),
    entry("/privacy", 0.2, "yearly"),
    entry("/refund-policy", 0.2, "yearly"),
    entry("/intellectual-property", 0.2, "yearly"),
  ];
}
