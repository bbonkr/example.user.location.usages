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
            value: `default-src 'self'; script-src 'self' 'unsafe-inline'; connect-src http://ip-api.com`,
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
