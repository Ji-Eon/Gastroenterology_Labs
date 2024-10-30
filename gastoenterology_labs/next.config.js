const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/Gastroenterology_Labs/' : '',
  basePath: '/Gastroenterology_Labs',
  trailingSlash: true,
};
