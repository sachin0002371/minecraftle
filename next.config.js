/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          // { key: "Access-Control-Allow-Credentials", value: "true" }, // Optional for credentials
          {
            key: "Access-Control-Allow-Origin",
            value: "https://minecraftle.app", // Replace with actual diffle.org domain
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT,OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
     
    ];
  },
};

module.exports = nextConfig;
