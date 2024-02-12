/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // @see https://beta.nextjs.org/docs/configuring/static-export#configuration
  output: "export",
  images: {
    loader: "custom",
    domains: ["images.microcms-assets.io"],
  },
};

module.exports = nextConfig;
