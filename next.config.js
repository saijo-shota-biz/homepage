/** @type {import('next').NextConfig} */
module.exports = {
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
