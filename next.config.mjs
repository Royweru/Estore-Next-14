/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:['encrypted-tbn0.gstatic.com','m.media-amazon.com','taftclothing.com','i.pinimg.com']
  },
    async headers() {
        return [
          {
            source: "/api/(.*)",
            headers: [
              {
                key: "Access-Control-Allow-Origin",
                value: "*",
              },
              {
                key: "Access-Control-Allow-Methods",
                value: "GET,POST,PUT,DELETE,OPTIONS",
              },
              {
                key: "Access-Control-ALlow-Headers",
                value: "Content-Type, Authorization",
              },
              {
                key: "Content-Range",
                value: "bytes : 0-9",
              },
            ],
          },
        ];
      },
};

export default nextConfig;
