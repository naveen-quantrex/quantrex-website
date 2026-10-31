import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig, displayLegalName } from "@/config/site";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { navItems } from "@/config/nav";
import { NavLinks } from "./nav-links";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-lg bg-accent px-4 py-2 font-semibold text-accent-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
        <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label={`${siteConfig.name} home`} className="rounded-lg">
            <Logo />
          </Link>
          <nav aria-label="Main" className="hidden md:block">
            <NavLinks />
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/contact" className="btn btn-primary hidden !py-2.5 md:inline-flex">
              Start a project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main id="main" className="min-h-[60vh]">
        {children}
      </main>

      <footer className="border-t border-line bg-surface-2">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-7 text-muted">{siteConfig.tagline}</p>
            <p className="mt-2 text-sm text-muted">{siteConfig.location}</p>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow">Explore</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[{ href: "/", label: "Home" }, ...navItems].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow">Contact</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${siteConfig.contactEmail}`} className="break-all text-muted hover:text-ink">
                  {siteConfig.contactEmail}
                </a>
              </li>
              {siteConfig.phone ? (
                <li>
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-muted hover:text-ink">
                    {siteConfig.phone}
                  </a>
                </li>
              ) : null}
              {siteConfig.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-ink">
                    {s.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-line">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p>
              © {new Date().getFullYear()} {displayLegalName}
              {siteConfig.legalName && siteConfig.abn ? ` · ABN ${siteConfig.abn}` : ""}
            </p>
            <p className="flex gap-4">
              <Link href="/privacy" className="hover:text-ink">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-ink">
                Terms
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
