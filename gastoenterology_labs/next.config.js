// next.config.js
module.exports = {
  // ... rest of the configuration.

  output: 'standalone',

  async rewrites() {
    return [
      {
        source: '/',
        destination: '/main', // Rewrite the root path to /login
      },
    ];
  },
};