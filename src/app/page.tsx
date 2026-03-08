import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text)" }}>

      {/* Grid background */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial glow */}
      <div
        className="pointer-events-none fixed left-1/2 -top-48 z-0 h-[600px] w-[900px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(99,102,241,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        {/* ── Nav ── */}
        <nav className="flex items-center justify-between py-6" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="flex items-center gap-2.5">
            <div
              className="flex h-7 w-7 items-center justify-center rounded-md text-xs font-black text-white"
              style={{ background: "var(--accent)" }}
            >
              Q
            </div>
            <span className="text-sm font-bold tracking-widest" style={{ color: "var(--text)" }}>
              QUANTREX
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="#products"
              className="text-sm transition-colors hover:opacity-100"
              style={{ color: "var(--muted)" }}
            >
              Products
            </Link>
            <Link
              href="#about"
              className="text-sm transition-colors hover:opacity-100"
              style={{ color: "var(--muted)" }}
            >
              About
            </Link>
            <a
              href="mailto:hello@quantrex.com"
              className="rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface)",
                color: "var(--text)",
              }}
            >
              Contact
            </a>
          </div>
        </nav>

        {/* ── Hero ── */}
        <section className="pb-24 pt-28">
          <div className="animate-fade-up">
            <span
              className="mb-6 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest"
              style={{
                border: "1px solid var(--accent-border)",
                background: "var(--accent-light)",
                color: "var(--accent)",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
              Independent software · Australia
            </span>
          </div>

          <h1
            className="animate-fade-up delay-100 mt-6 max-w-3xl text-5xl font-bold leading-[1.1] tracking-[-0.035em] sm:text-6xl lg:text-7xl"
            style={{ color: "var(--text)" }}
          >
            Software built for the{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #818cf8 0%, #a78bfa 55%, #c084fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              niches that matter.
            </span>
          </h1>

          <p
            className="animate-fade-up delay-200 mt-6 max-w-xl text-lg leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            We build focused, purpose-built products for professionals
            working in complex, regulated industries — where generic
            software never quite fits.
          </p>

          <div className="animate-fade-up delay-300 mt-10 flex items-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-85"
              style={{ background: "var(--accent)" }}
            >
              See our products
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:hello@quantrex.com"
              className="text-sm transition-colors"
              style={{ color: "var(--muted)" }}
            >
              Get in touch →
            </a>
          </div>
        </section>

        {/* ── Divider ── */}
        <div style={{ height: "1px", background: "var(--border)" }} />

        {/* ── Products ── */}
        <section id="products" className="py-20">
          <p
            className="mb-10 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--muted-2)" }}
          >
            Products
          </p>

          <div
            className="overflow-hidden rounded-2xl"
            style={{ border: "1px solid var(--border)" }}
          >
            {/* VisaDocket */}
            <a
              href="https://visadocket.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="group product-card-link"
            >
              <div className="grid gap-8 p-8 lg:grid-cols-2 lg:items-center">
                <div className="space-y-5">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wider"
                    style={{
                      background: "var(--green-light)",
                      border: "1px solid var(--green-border)",
                      color: "var(--green)",
                    }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--green)" }} />
                    Live
                  </span>

                  <div>
                    <h2 className="text-2xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
                      VisaDocket
                    </h2>
                    <p className="mt-1 text-sm font-medium" style={{ color: "var(--accent)" }}>
                      Migration practice management
                    </p>
                  </div>

                  <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                    End-to-end practice management for registered migration agents.
                    Client records, visa applications, document tracking, compliance
                    tools, and automated workflows — built for how agents actually work.
                  </p>

                  <span
                    className="inline-flex items-center gap-1.5 text-sm font-medium transition-transform group-hover:gap-2"
                    style={{ color: "var(--accent)" }}
                  >
                    visadocket.com.au
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>

                {/* Product preview card */}
                <div
                  className="hidden rounded-xl p-5 lg:block"
                  style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
                >
                  <div className="space-y-3">
                    {[
                      { label: "Client management", check: true },
                      { label: "Visa application tracking", check: true },
                      { label: "Document management", check: true },
                      { label: "MARA compliance tools", check: true },
                      { label: "Immigration updates feed", check: true },
                      { label: "Client portal", check: true },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <div
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                          style={{ background: "var(--green-light)", border: "1px solid var(--green-border)" }}
                        >
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-sm" style={{ color: "var(--muted)" }}>
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </a>

            {/* Divider */}
            <div style={{ height: "1px", background: "var(--border)" }} />

            {/* Next product */}
            <div className="p-8" style={{ background: "var(--surface)" }}>
              <div className="flex items-start justify-between gap-8">
                <div className="space-y-4">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wider"
                    style={{
                      background: "rgba(113,113,122,0.1)",
                      border: "1px solid var(--border)",
                      color: "var(--muted)",
                    }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--muted)" }} />
                    Coming soon
                  </span>

                  <div>
                    <h2 className="text-2xl font-bold tracking-tight" style={{ color: "var(--muted-2)" }}>
                      Next product
                    </h2>
                    <p className="mt-1 text-sm font-medium" style={{ color: "var(--muted-2)" }}>
                      TBD
                    </p>
                  </div>

                  <p className="max-w-md text-base leading-relaxed" style={{ color: "var(--muted-2)" }}>
                    We&apos;re always looking for the next underserved niche — professionals
                    doing complex, important work with tools that don&apos;t fit.
                    Know one? We&apos;d love to hear it.
                  </p>

                  <a
                    href="mailto:hello@quantrex.com"
                    className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-80"
                    style={{ color: "var(--muted)" }}
                  >
                    Share an idea →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section
          id="about"
          className="py-20"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p
            className="mb-10 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--muted-2)" }}
          >
            About
          </p>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-5">
              <p className="text-lg leading-[1.85]" style={{ color: "var(--muted)" }}>
                <strong style={{ color: "var(--text)", fontWeight: 600 }}>Quantrex</strong>{" "}
                is an independent software company based in Australia. We find industries
                where professionals are stuck using generic tools that were never designed
                for them — then we build something that actually fits.
              </p>
              <p className="text-lg leading-[1.85]" style={{ color: "var(--muted)" }}>
                We&apos;re{" "}
                <strong style={{ color: "var(--text)", fontWeight: 600 }}>
                  small by design.
                </strong>{" "}
                Less overhead means more focus on craft, quality, and building real
                relationships with the people who use our products.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { title: "Vertical SaaS", desc: "Deep focus on specific industries" },
                { title: "Built in Australia", desc: "Proudly Australian made" },
                { title: "Small by design", desc: "Quality over growth for its own sake" },
                { title: "Regulated industries", desc: "Complex problems, real solutions" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl p-4"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section
          className="py-20"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div
            className="rounded-2xl p-10 text-center"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--muted-2)" }}
            >
              Get in touch
            </p>
            <h2
              className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--text)" }}
            >
              Have a problem worth solving?
            </h2>
            <p className="mx-auto mb-8 max-w-md text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              Working in a space where the software just doesn&apos;t cut it?
              We&apos;d genuinely like to hear from you — whether you&apos;re a potential
              customer, partner, or just have an idea.
            </p>
            <a
              href="mailto:hello@quantrex.com"
              className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-85"
              style={{ background: "var(--accent)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              hello@quantrex.com
            </a>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer
          className="flex flex-wrap items-center justify-between gap-4 py-8"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-2">
            <div
              className="flex h-5 w-5 items-center justify-center rounded text-[10px] font-black text-white"
              style={{ background: "var(--accent)" }}
            >
              Q
            </div>
            <p className="text-sm" style={{ color: "var(--muted-2)" }}>
              © {new Date().getFullYear()} Quantrex Pty Ltd
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://visadocket.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors hover:opacity-80"
              style={{ color: "var(--muted-2)" }}
            >
              VisaDocket
            </a>
            <a
              href="mailto:hello@quantrex.com"
              className="text-sm transition-colors hover:opacity-80"
              style={{ color: "var(--muted-2)" }}
            >
              Contact
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
}
