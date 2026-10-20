"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { mainNav, pillars } from "@/lib/nav";
import { site } from "@/lib/site";

/** Pages that open with a full-bleed photo hero; the header sits transparent over it until scroll. */
function hasDarkHero(path: string) {
  if (["/", "/about", "/vista", "/work", "/industries", "/services"].includes(path)) return true;
  if (path.startsWith("/industries/")) return true;
  return path.startsWith("/services/") && path !== "/services/business-credit-education";
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Close everything on navigation (state adjusted during render, not in an effect).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setServicesOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const clear = hasDarkHero(pathname) && !scrolled && !menuOpen && !servicesOpen;
  const linkTone = clear ? "text-white hover:bg-white/10" : "text-ink hover:bg-paper";

  return (
    <>
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-500 ${
        clear
          ? "border-white/10 bg-transparent"
          : scrolled
            ? "border-line bg-white/95 shadow-[0_1px_0_rgba(3,42,76,0.06),0_8px_24px_-12px_rgba(3,42,76,0.18)] backdrop-blur"
            : "border-transparent bg-white/95 backdrop-blur"
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-[72px] max-w-[1200px] items-center gap-6 px-5 lg:px-8">
        <Link href="/" className="shrink-0" aria-label={`${site.name} home`}>
          <Image
            src={clear ? "/images/logo-light.webp" : "/images/logo.webp"}
            alt={site.name}
            width={164}
            height={64}
            priority
            className="h-11 w-auto"
          />
        </Link>

        <div className="ml-auto hidden items-center gap-1 lg:flex">
          <div className="relative" ref={servicesRef}>
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={() => setServicesOpen((o) => !o)}
              className={`flex items-center gap-1 rounded-lg px-3 py-2 font-medium ${linkTone} ${
                pathname.startsWith("/services") && !clear ? "!text-signal-press" : ""
              }`}
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} aria-hidden />
            </button>
            {servicesOpen && (
              <div
                id="services-menu"
                className="absolute left-1/2 top-full mt-3 w-[720px] -translate-x-1/2 rounded-[var(--radius-panel)] border border-line bg-white p-6 shadow-[0_24px_60px_-20px_rgba(3,42,76,0.35)]"
              >
                <div className="grid grid-cols-3 gap-6">
                  {pillars.map((p) => (
                    <div key={p.id}>
                      <p className="title text-lg text-ink">{p.name}</p>
                      <p className="mt-1 text-sm leading-snug text-muted">{p.promise}</p>
                      <ul className="mt-4 space-y-1">
                        {p.services.map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/services/${s.slug}`}
                              className="block rounded-lg px-2 py-1.5 -mx-2 text-[15px] font-medium text-ink hover:bg-paper hover:text-signal-press"
                            >
                              {s.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-sm">
                  <span className="text-muted">Not sure what you need? We&apos;ll tell you in the audit.</span>
                  <Link href="/services" className="link">
                    All services
                  </Link>
                </div>
              </div>
            )}
          </div>

          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-lg px-3 py-2 font-medium ${linkTone} ${isActive(item.href) && !clear ? "!text-signal-press" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2 lg:ml-2">
          <a
            href={`tel:${site.phones.sales.e164}`}
            className={`hidden items-center gap-2 rounded-lg px-3 py-2 font-semibold xl:flex ${linkTone}`}
          >
            <Phone className={`h-4 w-4 ${clear ? "text-signal" : "text-signal-press"}`} aria-hidden />
            {site.phones.sales.display}
          </a>
          <Link href="/free-audit" className="btn btn-primary hidden sm:inline-flex">
            Get a free audit
          </Link>
          <button
            type="button"
            className={`grid h-11 w-11 place-items-center rounded-lg border lg:hidden ${clear ? "border-white/30 text-white" : "border-line text-ink"}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
    </header>

      {/* Outside the header: its backdrop-filter would trap a fixed-position child. */}
      {menuOpen && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-[72px] z-50 overflow-y-auto border-t border-line bg-white lg:hidden">
          <div className="mx-auto max-w-[1200px] px-5 py-6">
            {pillars.map((p) => (
              <div key={p.id} className="border-b border-line pb-5 mb-5">
                <p className="title text-lg">{p.name}</p>
                <ul className="mt-2">
                  {p.services.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="block py-2.5 text-[17px] text-ink">
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <ul className="space-y-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block py-2.5 text-[17px] font-semibold text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-3">
              <Link href="/free-audit" className="btn btn-primary w-full">
                Get a free audit
              </Link>
              <a href={`tel:${site.phones.sales.e164}`} className="btn btn-secondary w-full">
                <Phone className="h-4 w-4" aria-hidden /> Call {site.phones.sales.display}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
