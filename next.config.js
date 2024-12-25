/** @type {import('next').NextConfig} */

const path = require('path')

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  // next.js config
  reactStrictMode: true,
  // add @import 'src/style/globals/_functions'; to all scss files.
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@use 'src/style/globals/_functions' as *;`,
  },
  productionBrowserSourceMaps: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
});

