const withNextra = require('nextra')('nextra-theme-docs', './theme.config.js')
module.exports = withNextra()
module.exports = {
  async redirects() {
    return [
      {
        source: '/security',
        destination: '/legal/security',
        permanent: false
      }
    ]
  },
};
  
