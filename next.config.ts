import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75, 85],
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920, 2400],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      // Legacy duplicate routes (301, as in the legacy index.php)
      { source: "/bus-timetable", destination: "/campus/bus-timetable", statusCode: 301 },
      { source: "/hari-udaan-2026", destination: "/events/hari-udaan-2026", statusCode: 301 },
      { source: "/vice-chancellor", destination: "/management/vice-chancellor", statusCode: 301 },
      { source: "/orientation-program", destination: "/events/orientation-program", statusCode: 301 },
      // Legacy mobile-navigation links that pointed to external Heartfulness resources
      { source: "/heartfulness/about-heartfulness", destination: "https://heartfulness.org/", statusCode: 301 },
      { source: "/heartfulness/about-kanha", destination: "https://heartfulness.org/kanha", statusCode: 301 },
      { source: "/heartfulness/about-daaji", destination: "https://daaji.org", statusCode: 301 },
      // Common aliases
      { source: "/news", destination: "/blog", statusCode: 301 },
      { source: "/news/:slug", destination: "/blog/:slug", statusCode: 301 },
      { source: "/programmes", destination: "/programs", statusCode: 301 },
      { source: "/programmes/:slug", destination: "/programs/:slug", statusCode: 301 },
      { source: "/admissions", destination: "/apply", statusCode: 301 },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/videos/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/docs/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
    ];
  },
};

export default nextConfig;
