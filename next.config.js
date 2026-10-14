/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export statique pour Cloudflare Pages gratuit (usage commercial autorise)
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "m.media-amazon.com" }
    ]
  },
  // Note: redirects() et headers() sont ignores en output export.
  // Voir public/_redirects et public/_headers pour Cloudflare Pages.
};

module.exports = nextConfig;
