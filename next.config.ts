import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * The VSC campaign page is a static file under public/underwriting-surveillance/,
   * synced from the demo repo by scripts/sync-landing.mjs. These rewrites give it
   * clean URLs — /underwriting-surveillance for the canonical link, /vsc as the
   * short form used in print and email, where a long URL is read aloud or typed.
   *
   * Rewrites rather than redirects: the short link should stay short in the
   * address bar rather than expanding the moment somebody clicks it.
   */
  async rewrites() {
    return [
      {
        source: "/underwriting-surveillance",
        destination: "/underwriting-surveillance/index.html",
      },
      {
        source: "/vsc",
        destination: "/underwriting-surveillance/index.html",
      },
    ];
  },
};

export default nextConfig;
