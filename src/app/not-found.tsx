import Link from "next/link";
import { legalLinks } from "../lib/site";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-sm font-semibold text-blue-600">404</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Page not found</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">The page you’re looking for has moved or no longer exists.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
        <Link href="/" className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">Home</Link>
        <Link href="/services" className="rounded-lg border border-slate-300 px-4 py-2 font-semibold hover:bg-slate-50 dark:border-slate-700">Services</Link>
        <Link href="/contact" className="rounded-lg border border-slate-300 px-4 py-2 font-semibold hover:bg-slate-50 dark:border-slate-700">Contact</Link>
      </div>
      <ul className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-slate-500">
        {legalLinks.map((l) => (
          <li key={l.href}><Link href={l.href} className="hover:underline">{l.label}</Link></li>
        ))}
      </ul>
    </main>
  );
}