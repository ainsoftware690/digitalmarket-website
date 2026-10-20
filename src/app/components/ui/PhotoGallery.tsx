import Image from "next/image";
import type { Photo } from "@/lib/photos";

/**
 * Four-image bento: one large image and three smaller ones, with captions.
 * Captions describe the scene; they never claim the people shown are our clients or team.
 */
export default function PhotoGallery({ photos }: { photos: Photo[] }) {
  if (photos.length === 0) return null;
  return (
    <ul className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:auto-rows-[240px] lg:grid-cols-4" data-reveal-stagger="110">
      {photos.slice(0, 4).map((p, i) => (
        <li
          key={p.src}
          data-reveal="scale"
          className={`group zoom-frame relative overflow-hidden rounded-[var(--radius-panel)] bg-ink ${
            i === 0 ? "sm:col-span-2 lg:row-span-2" : i === 3 ? "sm:col-span-2" : ""
          }`}
        >
          <Image
            src={p.src}
            alt={p.alt}
            fill
            sizes={i === 0 || i === 3 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
            className="object-cover"
          />
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-deep/85 to-transparent px-5 pb-4 pt-12 text-[14px] font-medium text-white/90 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            {p.alt}
          </span>
        </li>
      ))}
    </ul>
  );
}
