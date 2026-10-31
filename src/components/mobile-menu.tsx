"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { navItems } from "@/config/nav";
import { ThemeToggle } from "./theme-toggle";

export function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape and return focus to the toggle.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface text-ink"
      >
        {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
      </button>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full border-b border-line bg-bg px-4 pb-5 pt-2 shadow-lg shadow-black/20"
        >
          <ul className="mx-auto flex max-w-6xl flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3.5 text-base font-medium aria-[current=page]:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="border-t border-line">
              <ThemeToggle variant="row" />
            </li>
            <li className="mt-2">
              <a href={`mailto:${siteConfig.contactEmail}`} onClick={() => setOpen(false)} className="btn btn-primary w-full">
                Email {siteConfig.name}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
