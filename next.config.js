const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: ['images.microcms-assets.io'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/blogs/1',
        permanent: true,
      },
    ];
  },
};

module.exports = withBundleAnalyzer(config);
