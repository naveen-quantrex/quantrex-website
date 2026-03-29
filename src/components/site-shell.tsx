"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="site-grid" />
      <div className="site-glow" />
      <div className="site-orb" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <header className="sticky top-0 z-40 pt-3 sm:pt-4">
          <nav className="card flex items-center justify-between rounded-[1.5rem] px-3 py-3 sm:rounded-full sm:px-6">
            <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3" onClick={() => setMenuOpen(false)}>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white shadow-lg shadow-[rgba(129,166,198,0.3)] sm:h-11 sm:w-11">
                Q
              </div>
              <div className="min-w-0">
                <div className="truncate text-xs font-semibold tracking-[0.18em] text-[var(--text)] sm:text-sm sm:tracking-[0.28em]">
                  QUANTREX
                </div>
                <div className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)] sm:block">
                  Services and software
                </div>
              </div>
            </Link>

            <div className="hidden items-center gap-2 md:flex">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-full px-4 py-2 text-sm transition-colors ${
                      active
                        ? "bg-[var(--accent-light)] text-[var(--accent-strong)]"
                        : "text-[var(--muted)] hover:text-[var(--text)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href="mailto:naveen@quantrex.com.au"
                className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)] transition-colors hover:text-[var(--text)]"
              >
                naveen@quantrex.com.au
              </a>
              <Link href="/contact" className="btn-primary">
                Let&apos;s talk
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--text)] md:hidden"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </nav>

          {menuOpen ? (
            <div className="card mt-3 space-y-2 p-4 md:hidden">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-2xl px-4 py-3 text-sm transition-colors ${
                      active
                        ? "bg-[var(--accent-light)] text-[var(--accent-strong)]"
                        : "text-[var(--muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="fine-rule pt-4">
                <a
                  href="mailto:naveen@quantrex.com.au"
                  className="block break-all rounded-2xl px-4 py-3 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]"
                >
                  naveen@quantrex.com.au
                </a>
              </div>
            </div>
          ) : null}
        </header>

        <main className="flex-1 pt-4 sm:pt-6">{children}</main>

        <footer className="py-10">
          <div className="card overflow-hidden">
            <div className="grid gap-8 px-5 py-7 sm:px-8 sm:py-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
              <div>
                <p className="panel-label">Quantrex</p>
                <h2 className="mt-3 max-w-xl text-2xl font-semibold tracking-[-0.05em] sm:text-3xl">
                  Operational technology support with a softer, more human presence.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                  We help teams stay supported, deliver field work reliably, and build software
                  that fits how the business actually runs.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="panel-label">Navigate</p>
                  <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                    {navItems.map((item) => (
                      <Link key={item.href} href={item.href} className="block hover:text-[var(--text)]">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="panel-label">Contact</p>
                  <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                    <a href="mailto:naveen@quantrex.com.au" className="block break-all hover:text-[var(--text)]">
                      naveen@quantrex.com.au
                    </a>
                    <a href="mailto:supriya@quantrex.com.au" className="block break-all hover:text-[var(--text)]">
                      supriya@quantrex.com.au
                    </a>
                    <a href="tel:+61466300421" className="block hover:text-[var(--text)]">
                      0466 300 421
                    </a>
                    <span className="block">Melbourne, Australia</span>
                    <Link href="/privacy" className="block hover:text-[var(--text)]">
                      Privacy Policy
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="fine-rule flex flex-col gap-3 px-5 py-4 text-xs text-[var(--muted-2)] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
              <p>(c) {new Date().getFullYear()} Quantrex Pty Ltd</p>
              <p className="font-mono uppercase tracking-[0.18em]">
                Built for support, engineering, and modern operations
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
