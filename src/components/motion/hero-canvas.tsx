"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; hub: boolean };
type Packet = { a: number; b: number; prev: number; t: number; speed: number; alt: boolean };

/** Small seeded PRNG so the static (reduced-motion) frame is identical on every load. */
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hexToRgb(hex: string, fallback: string): string {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return fallback;
  const n = parseInt(m[1], 16);
  return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`;
}

function glowSprite(rgb: string) {
  const s = document.createElement("canvas");
  s.width = s.height = 64;
  const g = s.getContext("2d");
  if (g) {
    const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, `rgba(${rgb},1)`);
    gr.addColorStop(0.25, `rgba(${rgb},0.4)`);
    gr.addColorStop(1, `rgba(${rgb},0)`);
    g.fillStyle = gr;
    g.fillRect(0, 0, 64, 64);
  }
  return s;
}

/**
 * Abstract data-flow network: slowly drifting nodes, faint links between close
 * nodes, and small packets of light that travel along the links.
 *
 * Cost control: capped node/packet counts (lower on small screens), capped DPR,
 * no shadowBlur (pre-rendered glow sprites instead), frame-rate cap, and the loop
 * stops when the hero is off screen, the tab is hidden, or reduced motion is on
 * (then a single static frame is drawn).
 */
export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const host = canvas.parentElement ?? canvas;

    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    let w = 1;
    let h = 1;
    let mobile = false;
    let linkDist = 140;
    let maxPackets = 12;
    let nodes: Node[] = [];
    let packets: Packet[] = [];
    let rgb1 = "165,180,252";
    let rgb2 = "103,232,249";
    let spr1 = glowSprite(rgb1);
    let spr2 = glowSprite(rgb2);
    let raf = 0;
    let last = 0;
    let running = false;
    let inView = true;
    const pointer = { x: -9999, y: -9999, active: false };

    let light = false;
    function readColors() {
      light = document.documentElement.getAttribute("data-theme") === "light";
      const cs = getComputedStyle(host);
      rgb1 = hexToRgb(cs.getPropertyValue("--accent"), rgb1);
      rgb2 = hexToRgb(cs.getPropertyValue("--accent-2"), rgb2);
      spr1 = glowSprite(rgb1);
      spr2 = glowSprite(rgb2);
    }

    function neighbours(i: number): number[] {
      const out: number[] = [];
      const a = nodes[i];
      for (let j = 0; j < nodes.length; j++) {
        if (j === i) continue;
        const dx = nodes[j].x - a.x;
        const dy = nodes[j].y - a.y;
        if (dx * dx + dy * dy < linkDist * linkDist) out.push(j);
      }
      return out;
    }

    function spawn() {
      const i = Math.floor(Math.random() * nodes.length);
      const n = neighbours(i);
      if (!n.length) return;
      packets.push({ a: i, b: n[Math.floor(Math.random() * n.length)], prev: -1, t: 0, speed: 0.011 + Math.random() * 0.012, alt: Math.random() < 0.35 });
    }

    function resize() {
      const r = host.getBoundingClientRect();
      w = Math.max(1, r.width);
      h = Math.max(1, r.height);
      mobile = w < 700;
      const dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1.25 : 1.5);
      canvas!.width = Math.round(w * dpr);
      canvas!.height = Math.round(h * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(Math.min(mobile ? 20 : 46, Math.max(12, (w * h) / (mobile ? 22000 : 24000))));
      linkDist = mobile ? 110 : Math.min(170, Math.max(120, w / 8));
      maxPackets = mobile ? 6 : 14;
      const rand = mulberry32(7);
      nodes = Array.from({ length: count }, (_, k) => ({
        x: rand() * w,
        y: rand() * h,
        vx: (rand() - 0.5) * 0.2,
        vy: (rand() - 0.5) * 0.2,
        hub: k % 5 === 0,
      }));
      packets = [];
      draw();
    }

    function step(dt: number) {
      const k = dt / 16.67;
      for (const n of nodes) {
        n.x += n.vx * k;
        n.y += n.vy * k;
        if (n.x < -20) n.x = w + 20;
        else if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        else if (n.y > h + 20) n.y = -20;
        if (pointer.active) {
          const dx = n.x - pointer.x;
          const dy = n.y - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 140 * 140 && d2 > 1) {
            const d = Math.sqrt(d2);
            n.x += (dx / d) * 0.3 * k;
            n.y += (dy / d) * 0.3 * k;
          }
        }
      }
      if (packets.length < maxPackets && Math.random() < 0.06 * k) spawn();
      for (let p = packets.length - 1; p >= 0; p--) {
        const pk = packets[p];
        pk.t += pk.speed * k;
        if (pk.t >= 1) {
          // Arrived: usually keep flowing onward, so light appears to travel through the network.
          const next = neighbours(pk.b).filter((j) => j !== pk.a && j !== pk.prev);
          if (next.length && Math.random() < 0.7) {
            packets[p] = { a: pk.b, b: next[Math.floor(Math.random() * next.length)], prev: pk.a, t: 0, speed: pk.speed, alt: pk.alt };
          } else {
            packets.splice(p, 1);
          }
        }
      }
    }

    function draw() {
      const c = ctx!;
      c.clearRect(0, 0, w, h);
      // Additive glow on dark; plain alpha on light (white + anything is invisible).
      c.globalCompositeOperation = light ? "source-over" : "lighter";
      c.lineWidth = 1;
      const ld2 = linkDist * linkDist;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const d2 = dx * dx + dy * dy;
          if (d2 < ld2) {
            c.strokeStyle = `rgba(${rgb1},${((1 - Math.sqrt(d2) / linkDist) * 0.32).toFixed(3)})`;
            c.beginPath();
            c.moveTo(nodes[i].x, nodes[i].y);
            c.lineTo(nodes[j].x, nodes[j].y);
            c.stroke();
          }
        }
      }

      if (pointer.active) {
        for (const n of nodes) {
          const dx = n.x - pointer.x;
          const dy = n.y - pointer.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < linkDist * 1.15) {
            c.strokeStyle = `rgba(${rgb2},${((1 - d / (linkDist * 1.15)) * 0.45).toFixed(3)})`;
            c.beginPath();
            c.moveTo(pointer.x, pointer.y);
            c.lineTo(n.x, n.y);
            c.stroke();
          }
        }
      }

      for (const n of nodes) {
        if (n.hub) c.drawImage(spr1, n.x - 12, n.y - 12, 24, 24);
        c.fillStyle = `rgba(${rgb1},0.75)`;
        c.beginPath();
        c.arc(n.x, n.y, n.hub ? 2.1 : 1.4, 0, Math.PI * 2);
        c.fill();
      }

      for (const pk of packets) {
        const a = nodes[pk.a];
        const b = nodes[pk.b];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        if (dx * dx + dy * dy > ld2 * 1.2) continue;
        const x = a.x + dx * pk.t;
        const y = a.y + dy * pk.t;
        const tail = Math.max(0, pk.t - 0.22);
        const tx = a.x + dx * tail;
        const ty = a.y + dy * tail;
        const col = pk.alt ? rgb2 : rgb1;
        const g = c.createLinearGradient(tx, ty, x, y);
        g.addColorStop(0, `rgba(${col},0)`);
        g.addColorStop(1, `rgba(${col},0.9)`);
        c.strokeStyle = g;
        c.lineWidth = 1.5;
        c.beginPath();
        c.moveTo(tx, ty);
        c.lineTo(x, y);
        c.stroke();
        c.drawImage(pk.alt ? spr2 : spr1, x - 13, y - 13, 26, 26);
      }
      c.globalCompositeOperation = "source-over";
      c.lineWidth = 1;
    }

    function frame(ts: number) {
      raf = requestAnimationFrame(frame);
      const minFrame = 1000 / (mobile ? 40 : 60);
      if (ts - last < minFrame - 1) return;
      const dt = Math.min(50, last ? ts - last : 16);
      last = ts;
      step(dt);
      draw();
    }

    function start() {
      if (running || reduceMq.matches || !inView || document.hidden) return;
      running = true;
      last = 0;
      raf = requestAnimationFrame(frame);
    }
    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    function onReduceChange() {
      if (reduceMq.matches) {
        stop();
        packets = [];
        draw();
      } else {
        start();
      }
    }
    function onVisibility() {
      if (document.hidden) stop();
      else start();
    }
    function onMove(e: PointerEvent) {
      if (!finePointer || e.pointerType !== "mouse") return;
      const r = host.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
      pointer.active = true;
    }
    function onLeave() {
      pointer.active = false;
    }

    const themeObserver = new MutationObserver(() => {
      readColors();
      draw();
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    readColors();
    resize();
    canvas.style.opacity = "1";

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView) start();
        else stop();
      },
      { threshold: 0 },
    );
    io.observe(host);

    const ro = new ResizeObserver(() => resize());
    ro.observe(host);

    reduceMq.addEventListener("change", onReduceChange);
    document.addEventListener("visibilitychange", onVisibility);
    host.addEventListener("pointermove", onMove, { passive: true });
    host.addEventListener("pointerleave", onLeave);
    start();

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      themeObserver.disconnect();
      reduceMq.removeEventListener("change", onReduceChange);
      document.removeEventListener("visibilitychange", onVisibility);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="hero-canvas" aria-hidden="true" />;
}
