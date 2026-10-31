"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const clamp = (n: number, a: number, b: number) => Math.min(b, Math.max(a, n));

/**
 * One small controller for all scroll and pointer effects, driven by data attributes:
 *   [data-reveal] / [data-stagger]   fade-and-rise when scrolled into view
 *   [data-parallax="0.1"]            subtle depth while in view
 *   [data-timeline]                  line drawing + step highlight on scroll
 *   [data-spot]                      cursor-following border glow (CSS vars --mx/--my)
 *   [data-tilt]                      gentle 3D tilt
 *   [data-magnetic]                  button leans toward the cursor
 *   [data-pause-offscreen]           CSS animations pause when off screen
 * Nothing here runs when the visitor prefers reduced motion (content stays static and visible).
 */
export function MotionController() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fineMq = window.matchMedia("(hover: hover) and (pointer: fine)");
    let teardown: Array<() => void> = [];

    function setup() {
      teardown.forEach((fn) => fn());
      teardown = [];

      if (reduceMq.matches) {
        root.classList.remove("motion-ready");
        return;
      }
      root.classList.add("motion-ready");

      const vh = () => window.innerHeight;

      // --- Reveals ---------------------------------------------------------
      const revealEls = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], [data-stagger]"));
      const revealIO = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              (e.target as HTMLElement).classList.add("is-in");
              revealIO.unobserve(e.target);
            }
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
      );
      for (const el of revealEls) {
        const r = el.getBoundingClientRect();
        // Already on screen at load: mark as shown so nothing flashes or shifts.
        if (r.top < vh() * 0.92 && r.bottom > 0) el.classList.add("is-in");
        else revealIO.observe(el);
      }
      teardown.push(() => revealIO.disconnect());

      // --- Pause CSS animations that are off screen ------------------------
      const pausers = Array.from(document.querySelectorAll<HTMLElement>("[data-pause-offscreen]"));
      const pauseIO = new IntersectionObserver((entries) => {
        for (const e of entries) (e.target as HTMLElement).classList.toggle("is-offscreen", !e.isIntersecting);
      });
      pausers.forEach((el) => pauseIO.observe(el));
      teardown.push(() => pauseIO.disconnect());

      const onVisibility = () => root.classList.toggle("tab-hidden", document.hidden);
      document.addEventListener("visibilitychange", onVisibility);
      teardown.push(() => document.removeEventListener("visibilitychange", onVisibility));

      // --- Scroll-driven: progress bar, parallax, timelines -----------------
      const parallax = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
      const parallaxVisible = new Set<HTMLElement>();
      const parallaxIO = new IntersectionObserver((entries) => {
        for (const e of entries) {
          const el = e.target as HTMLElement;
          if (e.isIntersecting) parallaxVisible.add(el);
          else parallaxVisible.delete(el);
        }
        schedule();
      });
      parallax.forEach((el) => parallaxIO.observe(el));
      teardown.push(() => parallaxIO.disconnect());

      const timelines = Array.from(document.querySelectorAll<HTMLElement>("[data-timeline]")).map((el) => ({
        el,
        steps: Array.from(el.querySelectorAll<HTMLElement>("[data-step]")),
      }));

      let ticking = false;
      let raf = 0;
      function update() {
        ticking = false;
        const max = root.scrollHeight - vh();
        root.style.setProperty("--sp", max > 0 ? (window.scrollY / max).toFixed(4) : "0");

        parallaxVisible.forEach((el) => {
          const f = parseFloat(el.dataset.parallax ?? "0.1");
          const r = el.getBoundingClientRect();
          const center = r.top + r.height / 2 - vh() / 2;
          el.style.translate = `0 ${(-center * f).toFixed(1)}px`;
        });

        for (const t of timelines) {
          const r = t.el.getBoundingClientRect();
          if (r.bottom < -100 || r.top > vh() + 100) continue;
          const p = clamp((vh() * 0.72 - r.top) / (r.height * 0.85 + 1), 0, 1);
          t.el.style.setProperty("--p", p.toFixed(3));
          t.steps.forEach((s, i) => s.classList.toggle("is-active", p >= (i + 0.3) / t.steps.length));
        }
      }
      function schedule() {
        if (ticking) return;
        ticking = true;
        raf = requestAnimationFrame(update);
      }
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule, { passive: true });
      teardown.push(() => {
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
        cancelAnimationFrame(raf);
      });
      update();

      // --- Pointer effects (mouse only) -------------------------------------
      if (fineMq.matches) {
        const magnets = Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]"));
        let tiltEl: HTMLElement | null = null;

        const resetTilt = (el: HTMLElement | null) => {
          if (!el) return;
          el.style.setProperty("--rx", "0deg");
          el.style.setProperty("--ry", "0deg");
        };

        const onMove = (e: PointerEvent) => {
          if (e.pointerType !== "mouse") return;
          const target = e.target as Element | null;
          if (!target || !target.closest) return;

          const spot = target.closest<HTMLElement>("[data-spot]");
          if (spot) {
            const r = spot.getBoundingClientRect();
            spot.style.setProperty("--mx", `${e.clientX - r.left}px`);
            spot.style.setProperty("--my", `${e.clientY - r.top}px`);
          }

          const tilt = target.closest<HTMLElement>("[data-tilt]");
          if (tilt !== tiltEl) {
            resetTilt(tiltEl);
            tiltEl = tilt;
          }
          if (tilt) {
            const r = tilt.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5;
            const py = (e.clientY - r.top) / r.height - 0.5;
            tilt.style.setProperty("--ry", `${(px * 7).toFixed(2)}deg`);
            tilt.style.setProperty("--rx", `${(-py * 7).toFixed(2)}deg`);
          }

          for (const m of magnets) {
            const r = m.getBoundingClientRect();
            const dx = e.clientX - (r.left + r.width / 2);
            const dy = e.clientY - (r.top + r.height / 2);
            const near = Math.hypot(dx, dy) < Math.max(r.width, r.height) / 2 + 70;
            m.style.translate = near ? `${(dx * 0.2).toFixed(1)}px ${(dy * 0.3).toFixed(1)}px` : "";
          }
        };
        const onLeaveDoc = () => {
          resetTilt(tiltEl);
          tiltEl = null;
          magnets.forEach((m) => (m.style.translate = ""));
        };
        document.addEventListener("pointermove", onMove, { passive: true });
        document.documentElement.addEventListener("pointerleave", onLeaveDoc);
        teardown.push(() => {
          document.removeEventListener("pointermove", onMove);
          document.documentElement.removeEventListener("pointerleave", onLeaveDoc);
          onLeaveDoc();
        });
      }
    }

    setup();
    reduceMq.addEventListener("change", setup);
    return () => {
      reduceMq.removeEventListener("change", setup);
      teardown.forEach((fn) => fn());
      teardown = [];
    };
  }, [pathname]);

  return null;
}
