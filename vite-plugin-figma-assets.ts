import type { Plugin } from "vite";

/**
 * Vite plugin that resolves `figma:asset/<hash>.<ext>` imports
 * used by Figma Make's code export. Outside of Figma Make's environment,
 * these are resolved to colored SVG placeholder data-URLs so the app
 * can run locally with visible (though approximate) avatars.
 */
export default function figmaAssetsPlugin(): Plugin {
  const VIRTUAL_PREFIX = "\0figma-asset:";

  const palette = [
    "#6C63FF", "#FF6584", "#3F3D56", "#F2A365", "#43B97F",
    "#2F80ED", "#EB5757", "#F2994A", "#9B51E0", "#56CCF2",
    "#27AE60", "#E0E0E0", "#4ECDC4", "#FF6B6B", "#C44569",
    "#574B90", "#F8B500", "#303952", "#FC427B", "#0ABDE3",
  ];

  function hashToColor(hash: string): string {
    let sum = 0;
    for (let i = 0; i < hash.length; i++) {
      sum = (sum * 31 + hash.charCodeAt(i)) >>> 0;
    }
    return palette[sum % palette.length];
  }

  function makePlaceholder(hash: string): string {
    const color = hashToColor(hash);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
      <rect width="400" height="400" fill="${color}" rx="20"/>
      <circle cx="200" cy="150" r="60" fill="rgba(255,255,255,0.25)"/>
      <rect x="130" y="230" width="140" height="100" rx="20" fill="rgba(255,255,255,0.15)"/>
    </svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
  }

  return {
    name: "vite-plugin-figma-assets",
    enforce: "pre",

    resolveId(source) {
      if (source.startsWith("figma:asset/")) {
        return VIRTUAL_PREFIX + source.slice("figma:asset/".length);
      }
      return null;
    },

    load(id) {
      if (id.startsWith(VIRTUAL_PREFIX)) {
        const filename = id.slice(VIRTUAL_PREFIX.length);
        const hash = filename.replace(/\.\w+$/, "");
        const dataUrl = makePlaceholder(hash);
        return `export default ${JSON.stringify(dataUrl)};`;
      }
      return null;
    },
  };
}
