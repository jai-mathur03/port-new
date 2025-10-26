// next.config.js
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force Next.js to use the stable Webpack compiler instead of Turbopack
  compiler: {
    reactRemoveProperties: false,
  },

  // Explicitly disable Turbopack and set correct root
  future: {
    webpack5: true,
  },

  // ✅  Fix root detection (stops /src/app confusion)
  experimental: {
    // this key now expects an absolute path
    turboRoot: path.resolve(__dirname),
  },

  // ✅  External packages
  serverExternalPackages: ["@react-email/render"],

  // ✅  Optional: image domains
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
    ],
  },
};

module.exports = nextConfig;
