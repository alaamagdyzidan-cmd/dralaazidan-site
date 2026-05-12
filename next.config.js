/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      // Permanently redirect the default Vercel preview/production hostname
      // to the canonical custom domain. This avoids duplicate-content SEO
      // issues where both URLs serve the same site.
      {
        source: "/:path*",
        has: [{ type: "host", value: "dralaazidan-site.vercel.app" }],
        destination: "https://www.dralaazidan.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
