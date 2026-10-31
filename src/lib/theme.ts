export const THEME_STORAGE_KEY = "site-theme";
export type Theme = "dark" | "light";
export const THEME_COLORS: Record<Theme, string> = { dark: "#05070f", light: "#f6f7fc" };

/** Inline script (runs in <head> before paint). Dark unless the visitor chose light. */
export const themeInitScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});t=t==="light"?"light":"dark";var d=document.documentElement;d.setAttribute("data-theme",t);d.style.colorScheme=t;}catch(e){}})();`;
