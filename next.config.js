const withNextra = require('nextra')('nextra-theme-docs', './theme.config.js')
module.exports = withNextra({
  async redirects() {
    return [
      {
        source: '/security',
        destination: '/legal/security',
        permanent: false
      }
    ]
  },
});
