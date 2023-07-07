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
            value: `default-src 'self'; script-src 'self' http://ip-api.com 'unsafe-hashes'`,
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
