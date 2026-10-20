import { pillars } from "./nav";
import { photos, type Photo } from "./photos";
import { SERVICE_PAGES } from "./service-pages";

export type ExplorerItem = { slug: string; label: string; pillar: string; intro: string; src: string; alt: string };

/** Built on the server so the long service copy never ships to the browser. */
export function explorerItems(): ExplorerItem[] {
  return pillars.flatMap((p) =>
    p.services.map((s) => {
      const page = SERVICE_PAGES.find((x) => x.slug === s.slug)!;
      const hero = (photos as Record<string, Photo>)[`${s.slug}-hero`];
      return { slug: s.slug, label: s.label, pillar: p.name, intro: page.headline, src: hero.src, alt: hero.alt };
    })
  );
}
