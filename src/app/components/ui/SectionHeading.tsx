interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlight: string;
  description?: string;
  id?: string;
}

/** Shared heading used by Process + Industries so both sections feel like one system. */
export function SectionHeading({ eyebrow, title, highlight, description, id }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {title}{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>
      {description && <p className="mt-4 text-base text-slate-400 sm:text-lg">{description}</p>}
    </div>
  );
}