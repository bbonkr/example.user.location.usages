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
            value: `default-src 'self'; script-src 'self' http://ip-api.com 'sha256-OBTN3RiyCV4Bq7dFqZ5a2pAXjnCcCYeTJMO2I/LYKeo=' 'sha256-6eTmMT5EE+1lVDhHwudus7RrBWSL7K7KkXPJTnKn7H8=' 'sha256-fVLggH/OkJkC5VxEHMoTV5qyQhIof+wkFQcZ5/8ee4g=' 'sha256-hCK1ksk1p5089mQBcDJxFO3uPlHvOJugBVXFJHrwlec=' 'sha256-7DEadscQ/3jV+BmOCJZcanDooDGbzPZvIxlEdhJKyaQ=' 'sha256-H7yAp0etXb5PgIX9taBAsj3PxjGg6lBGbffxw+fBY9o=' 'sha256-PLztIqHKR7MDxZvvGKUkDzNpm2nfVhV4Cl4X6f3gKhg=' 'sha256-H7yAp0etXb5PgIX9taBAsj3PxjGg6lBGbffxw+fBY9o=' 'sha256-XxTZyrMQIeG6SnSqEjoJvAkvQan23QIhgk0wi3MZaaU=' 'sha256-8DI2E9WyIGsy4cV4Y3smMrL87wOu0cdkMpu2GEt3U8Y='`,
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
