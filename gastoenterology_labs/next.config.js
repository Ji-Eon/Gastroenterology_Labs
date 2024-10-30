const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  output: 'export',  // 정적 내보내기 설정
  images: {
    unoptimized: true,  // 이미지 최적화 비활성화
  },
  assetPrefix: isProd ? '/Gastroenterology_Labs/' : '',
  basePath: '/Gastroenterology_Labs',
  trailingSlash: true,
};
