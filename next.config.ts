import type { NextConfig } from "next";
import withPWA, { PWAConfig } from "next-pwa";
import path from "path";

// Configure PWA
const pwaConfig: PWAConfig = {
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // Disable PWA in development
};

// Next.js configuration
const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@use 'src/style/globals/_functions' as *;`,
  },
  productionBrowserSourceMaps: true, // Generate source maps for production
  // swcMinify: false, // Disable SWC minification
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development", // Remove console logs in production
  },
  experimental: {
    turbo: {},
  },
};

export default withPWA(pwaConfig)(nextConfig);
