"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { THEME_COLORS, THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

function subscribe(onChange: () => void) {
  const mo = new MutationObserver(onChange);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => mo.disconnect();
}
const getTheme = (): Theme => (document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark");
const getServerTheme = (): Theme => "dark";

function applyTheme(next: Theme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", next);
  root.style.colorScheme = next;
  let meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "theme-color";
    document.head.appendChild(meta);
  }
  meta.content = THEME_COLORS[next];
  try {
    localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    /* storage can be blocked; the choice then lasts for this visit only */
  }
}

/** Light/dark switch. `variant="row"` is the labelled version used inside the mobile menu. */
export function ThemeToggle({ variant = "icon", className = "" }: { variant?: "icon" | "row"; className?: string }) {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);
  const next: Theme = theme === "dark" ? "light" : "dark";
  const label = `Switch to ${next} mode`;
  const Icon = theme === "dark" ? Sun : Moon;

  if (variant === "row") {
    return (
      <button
        type="button"
        onClick={() => applyTheme(next)}
        aria-label={label}
        className={`flex w-full items-center gap-3 rounded-lg px-3 py-3.5 text-base font-medium ${className}`}
      >
        <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
        {theme === "dark" ? "Light mode" : "Dark mode"}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => applyTheme(next)}
      aria-label={label}
      title={label}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface text-ink transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      <Icon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
    </button>
  );
}
