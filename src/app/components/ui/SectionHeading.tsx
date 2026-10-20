import Link from "next/link";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: ReactNode;
  lead?: ReactNode;
  id?: string;
  align?: "left" | "center";
  /** Use on navy backgrounds. */
  inverse?: boolean;
  as?: "h1" | "h2";
}

/** One heading style for every section: left-aligned display type and a short lead. */
export function SectionHeading({ title, lead, id, align = "left", inverse, as = "h2" }: SectionHeadingProps) {
  const Tag = as;
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Tag
        id={id}
        className={`display-md text-[clamp(2rem,4vw,3.1rem)] ${inverse ? "text-white" : "text-ink"}`}
      >
        {title}
      </Tag>
      {lead && (
        <p className={`mt-4 text-lg leading-relaxed ${inverse ? "text-white/75" : "text-muted"} ${align === "center" ? "mx-auto" : ""} prose-measure`}>
          {lead}
        </p>
      )}
    </div>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1200px] px-5 lg:px-8 ${className}`}>{children}</div>;
}

/** Breadcrumb trail for inner pages. */
export function Breadcrumbs({ items, light = false }: { items: { name: string; href?: string }[]; light?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${light ? "text-white/70" : "text-muted"}`}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden className={light ? "text-white/40" : "text-line-strong"}>/</span>}
            {item.href ? (
              <Link href={item.href} className={`hover:underline ${light ? "hover:text-white" : "hover:text-ink"}`}>
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className={light ? "text-white" : "text-ink"}>
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
