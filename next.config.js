/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Disable Turbopack completely — prevents “workspace root” errors
  webpack: (config, { dev }) => {
    if (!dev) {
      config.optimization.minimize = true;
    }
    return config;
  },

  // ✅ Use stable Webpack builder instead of Turbopack
  experimental: { turbo: false },

  // ✅ External packages (for resend / react-email)
  serverExternalPackages: ['@react-email/render'],

  // ✅ Image pattern (you had this before)
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
    ],
  },
};

module.exports = nextConfig;
