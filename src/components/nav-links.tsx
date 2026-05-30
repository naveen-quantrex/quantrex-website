"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
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
  );
}
