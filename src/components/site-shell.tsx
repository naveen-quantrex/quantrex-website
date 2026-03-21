"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6">
        <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[rgba(9,9,11,0.8)] backdrop-blur">
          <nav className="flex items-center justify-between py-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--accent)] text-xs font-black text-white">
                Q
              </div>
              <div>
                <div className="text-sm font-bold tracking-[0.28em] text-[var(--text)]">
                  QUANTREX
                </div>
                <div className="text-[11px] text-[var(--muted)]">
                  Services + Software
                </div>
              </div>
            </Link>

            <div className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm transition-colors ${
                      active ? "text-[var(--text)]" : "text-[var(--muted)] hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link href="/contact" className="btn-secondary">
                Let&apos;s talk
              </Link>
            </div>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] md:hidden"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </nav>

          {menuOpen ? (
            <div className="space-y-2 border-t border-[var(--border)] py-4 md:hidden">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl border border-transparent px-4 py-3 text-sm text-[var(--muted)] transition-colors hover:border-[var(--border)] hover:bg-[var(--surface)] hover:text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ) : null}
        </header>

        <main className="flex-1">{children}</main>

        <footer className="mt-12 border-t border-[var(--border)] py-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded bg-[var(--accent)] text-[10px] font-black text-white">
                Q
              </div>
              <p className="text-sm text-[var(--muted-2)]">
                © {new Date().getFullYear()} Quantrex Pty Ltd
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-5 text-sm text-[var(--muted-2)]">
              <Link href="/services" className="hover:text-foreground">Services</Link>
              <Link href="/products" className="hover:text-foreground">Products</Link>
              <Link href="/about" className="hover:text-foreground">About</Link>
              <Link href="/contact" className="hover:text-foreground">Contact</Link>
              <a href="tel:+61466300421" className="hover:text-foreground">0466 300 421</a>
              <a href="mailto:hello@quantrex.com.au" className="hover:text-foreground">hello@quantrex.com.au</a>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-4 text-xs text-[var(--muted-2)]">
            <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
            <span>·</span>
            <span>Melbourne, VIC, Australia</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

