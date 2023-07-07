/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `default-src 'self' ip-api.com`,
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
