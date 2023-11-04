module.exports = {
  manifest: {
    version: '0.0.1'
  },
  api: {
    baseURL:
      process.env.API_BASE_URL || 'https://servicebus.rayanparsi.com/api',
    browserBaseURL: null,
    proxy: false,
    progress: false,
    debug: false
  },
  media: {
    baseUrl: process.env.MEDIA_BASE_URL || ''
  },
  video: {
    baseUrl: process.env.VIDEO_BASE_URL || ''
  },
  cdn: {
    baseUrl: process.env.CDN_BASE_URL || ''
  },
  languageType: {
    rtl: true
  },
  sentry: {
    dsn: null
  },
  analytics: {
    ga: null
  },
  router: {
    mode: 'history'
  },
  mode: process.env.APPLICATION_MODE || 'spa',
  devServer: {
    host: '0.0.0.0'
  }
}
