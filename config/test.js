const setBooleanConfig = require('../utils/config').setBooleanConfig
const port = process.env.PORT || 3000

module.exports = {
  port: port,
  enableFileLogs: setBooleanConfig(process.env.ENABLE_FILE_LOGS, false),
  // Console logs are set to avoid the winston error of no defined transports
  enableConsoleLogs: setBooleanConfig(process.env.ENABLE_CONSOLE_LOGS, true),

  githubOauth: {
    clientId: 'clientId',
    clientSecret: 'clientSecret'
  },

  services: {
    rdsApi: {
      baseUrl: `http://localhost:${port}`
    },

    rdsUi: {
      baseUrl: 'https://realdevsquad.com',
      routes: {
        authRedirection: '/goto'
      }
    }
  },

  userToken: {
    cookieName: process.env.COOKIE_NAME || 'rds-session',
    ttl: process.env.USER_TOKEN_TTL || 30 * 24 * 60 * 60, // in seconds
    refreshTtl: process.env.USER_TOKEN_REFRESH_TTL || 180 * 24 * 60 * 60, // in seconds
    publicKey: process.env.PUBLIC_KEY || '-----BEGIN PUBLIC KEY-----\n' +
      'MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgHo6sGbw8qk+XU9sBVa4w2aEq01i\n' +
      'oKDMFFQa9mPy0MRScTCsrfEjbypD4VqIjJcwXGmDWKVhMcJ8SMZuJumIJ10vU9ca\n' +
      'WSh/aHhAxiOIqOEe54IyYTwjcn5avdZry3zl62RYQ7tDZCPAR/WvFCIkgRXwjXfC\n' +
      'Xpm4LR6ynKDMvsDNAgMBAAE=\n' +
      '-----END PUBLIC KEY-----',
    privateKey: process.env.PRIVATE_KEY || '-----BEGIN RSA PRIVATE KEY-----\n' +
      'MIICWwIBAAKBgHo6sGbw8qk+XU9sBVa4w2aEq01ioKDMFFQa9mPy0MRScTCsrfEj\n' +
      'bypD4VqIjJcwXGmDWKVhMcJ8SMZuJumIJ10vU9caWSh/aHhAxiOIqOEe54IyYTwj\n' +
      'cn5avdZry3zl62RYQ7tDZCPAR/WvFCIkgRXwjXfCXpm4LR6ynKDMvsDNAgMBAAEC\n' +
      'gYAhxa2QA+tIkA7ALxyahZqX7PhX/XRceYb0Zi7GFwVP+WeFB3FYO24vw2m01h3i\n' +
      'eF5QWRZZO63ACw8gpLbjt9cIJoGU0HG2qa81hc+EuxEIQMxZKYWc4Xh2YeMxZ0Z3\n' +
      'vOyd8ZtimVoLnP4rQBiX/NL6uFNJ86kvy4H3v6MGQaBgAQJBAOvwj49kH14XbONp\n' +
      'p925+AN5/4m44i0dA4PXfif6qRS/e40Y9c+yvvHhcG7evLo611TZvF0nE/nRcaG0\n' +
      '19VXDgECQQCEnx5Yl6DceCGhfSIAA/TmbquTBDXlhQpFxXFlAx0rpVZa9DKyAGFB\n' +
      '2Xt+BP0Po9cwV7GSEqjoWXsqpx9AfIrNAkEAgtpRFGqoBuwhBOMlKZCpX2w68Cvs\n' +
      'rK6Js4ZBPnUDbzFfmXp9Yeq1gbrRO3wm2XYm1LVJhbRVnNivF8sPZQ+6AQJAOqNk\n' +
      'NoWsgW64Z/+89cbKFMzgHdvhvL7rQNhBAAm1byPmn8aTV7LlTclMWfb4sV6e+ef8\n' +
      'QnrvpfRSihRktA2dDQJAH+dQBx3nG3bZ9khVAZQ1jTJ7j0cKixaGndFuYS1TJvJ2\n' +
      'Zzn584h/xbSIcP9/4SXmEK3wtoueUtMkvS3yKTvk+w==\n' +
      '-----END RSA PRIVATE KEY-----'
  }
}
