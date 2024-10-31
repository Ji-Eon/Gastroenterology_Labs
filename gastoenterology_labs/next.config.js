const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "https://ji-eon.github.io/Gastroenterology_Labs/" : "",
  basePath: '/Gastroenterology_Labs',
  trailingSlash: true,
};
