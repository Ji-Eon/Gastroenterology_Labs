const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export', // 정적 HTML 출력 설정
  assetPrefix: isProd ? '/Gastroenterology_Labs/' : '',
  basePath: '/Gastroenterology_Labs',
  trailingSlash: true,
};
