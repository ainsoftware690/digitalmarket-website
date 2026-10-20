import Image from "next/image";

/** A browser window with a real desktop screenshot, and a phone with the mobile screenshot overlapping it. */
export function BrowserFrame({ src, alt, url, priority = false }: { src: string; alt: string; url: string; priority?: boolean }) {
  return (
    <div className="overflow-hidden rounded-[14px] bg-white shadow-[0_40px_80px_-30px_rgba(2,26,48,0.55)] ring-1 ring-black/10">
      <div className="flex items-center gap-1.5 border-b border-line bg-paper px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 flex-1 truncate rounded-md bg-white px-3 py-1 text-[11px] text-subtle">{url}</span>
      </div>
      <Image src={src} alt={alt} width={1440} height={900} priority={priority} sizes="(min-width: 1024px) 50vw, 100vw" className="block h-auto w-full" />
    </div>
  );
}

export function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full overflow-hidden rounded-[26px] border-[6px] border-ink-deep bg-ink-deep shadow-[0_30px_60px_-20px_rgba(2,26,48,0.6)]">
      <div className="relative aspect-[390/780] overflow-hidden rounded-[20px] bg-white">
        <Image src={src} alt={alt} fill sizes="200px" className="object-cover object-top" />
      </div>
    </div>
  );
}
