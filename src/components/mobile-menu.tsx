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

export function MobileMenu() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--text)] md:hidden"
        onClick={() => setMenuOpen((value) => !value)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>

      {menuOpen ? (
        <nav aria-label="Mobile navigation" className="card mt-3 space-y-2 p-4 md:hidden">
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
              href="mailto:hello@quantrex.com.au"
              className="block break-all rounded-2xl px-4 py-3 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]"
            >
              hello@quantrex.com.au
            </a>
          </div>
        </nav>
      ) : null}
    </>
  );
}
