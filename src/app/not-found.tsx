import Link from "next/link";
import { legalLinks } from "../lib/site";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-sm font-semibold text-signal-press">404</p>
      <h1 className="display-md mt-2 text-[clamp(2rem,4vw,3rem)] text-ink">Page not found</h1>
      <p className="mt-3 text-slate-600">The page you’re looking for has moved or no longer exists.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
        <Link href="/" className="rounded-lg bg-signal-press px-4 py-2 font-semibold text-white hover:bg-ink">Home</Link>
        <Link href="/services" className="rounded-lg border border-slate-300 px-4 py-2 font-semibold hover:bg-paper">Services</Link>
        <Link href="/contact" className="rounded-lg border border-slate-300 px-4 py-2 font-semibold hover:bg-paper">Contact</Link>
      </div>
      <ul className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-slate-500">
        {legalLinks.map((l) => (
          <li key={l.href}><Link href={l.href} className="hover:underline">{l.label}</Link></li>
        ))}
      </ul>
    </main>
  );
}