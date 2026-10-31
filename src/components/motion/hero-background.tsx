"use client";

import dynamic from "next/dynamic";

// The canvas code is split out and only loaded in the browser, after the page is interactive.
const HeroCanvas = dynamic(() => import("./hero-canvas"), { ssr: false });

/** Layered hero backdrop: CSS gradient mesh (works without JS) plus the data-flow canvas. */
export function HeroBackground() {
  return (
    <div className="hero-bg" aria-hidden="true">
      <div className="hero-mesh hero-mesh-a" data-parallax="0.06" />
      <div className="hero-mesh hero-mesh-b" data-parallax="0.12" />
      <HeroCanvas />
      <div className="hero-vignette" />
    </div>
  );
}
