import config from 'config'

export default {
  mode: config.get('mode'),
  performance: true,
  /*
   ** Headers of the page
   */
  head: {
    title: 'پی جی پال - صدور صورتحساب الکترونیکی حق الوکاله و خدمات حقوقی',
    meta: [
      {
        hid: 'charset',
        charset: 'utf-8'
      },
      {
        hid: 'viewport',
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0, shrink-to-fit=0'
      },
      {
        hid: 'mobile-web-app-capable',
        name: 'mobile-web-app-capable',
        content: 'yes'
      },
      {
        hid: 'apple-mobile-web-app-capable',
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      },
      {
        hid: 'apple-mobile-web-app-status-bar-style',
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: 'PGPAL'
      },
      {
        hid: 'author',
        name: 'author',
        content: 'MiladHp'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'صدور صورتحساب الکترونیکی حق الوکاله و خدمات حقوقی'
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#0b072b'
      },
      {
        hid: 'og:type',
        name: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        property: 'og:title',
        content: 'PGPAL'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        property: 'og:site_name',
        content: 'PGPAL'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        property: 'og:description',
        content: 'PGPAL'
      }
    ],
    link: [
      {
        hid: 'shortcut-icon',
        rel: 'shortcut icon',
        href: 'icon.png'
      },
      {
        hid: 'apple-touch-icon',
        rel: 'apple-touch-icon',
        href: 'apple-touch-icon.png',
        sizes: '512x512'
      },
      {
        href: 'splashscreens/iphone5_splash.png',
        media:
          '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image',
        hid: 'apple-touch-startup-image-iphonese'
      },
      {
        href: 'splashscreens/iphone6_splash.png',
        media:
          '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image',
        hid: 'apple-touch-startup-image-iphone6'
      },
      {
        href: 'splashscreens/iphoneplus_splash.png',
        media:
          '(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)',
        rel: 'apple-touch-startup-image',
        hid: 'apple-touch-startup-image-iphoneplus'
      },
      {
        href: 'splashscreens/iphonex_splash.png',
        media:
          '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)',
        rel: 'apple-touch-startup-image',
        hid: 'apple-touch-startup-image-iphonex'
      },
      {
        href: 'splashscreens/iphonexr_splash.png',
        media:
          '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image',
        hid: 'apple-touch-startup-image-iphonexr'
      },
      {
        href: 'splashscreens/iphonexsmax_splash.png',
        media:
          '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)',
        rel: 'apple-touch-startup-image',
        hid: 'apple-touch-startup-image-iphonexsmax'
      },
      {
        href: 'splashscreens/ipad_splash.png',
        media:
          '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image',
        hid: 'apple-touch-startup-image-ipad'
      },
      {
        href: 'splashscreens/ipadpro1_splash.png',
        media:
          '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image',
        hid: 'apple-touch-startup-image-ipadpro1'
      },
      {
        href: 'splashscreens/ipadpro3_splash.png',
        media:
          '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image',
        hid: 'apple-touch-startup-image-ipadpro2'
      },
      {
        href: 'splashscreens/ipadpro2_splash.png',
        media:
          '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image',
        hid: 'apple-touch-startup-image-ipadpro3'
      }
    ]
  },
  env: {
    baseUrl: config.get('api.baseURL')
  },
  /*
   ** nuxt/auth
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: `${config.get('api.baseURL')}/Customer/CreateActivation`,
            method: 'post'
          },
          user: false
        },
        autoFetchUser: false,
        prefix: '',
        tokenName: false,
        tokenRequired: false
      }
    },
    token: {
      prefix: 'token'
    },
    localStorage: {
      prefix: ''
    },
    redirect: {
      login: '/signup',
      logout: '/signup'
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#781c8b',
    height: '3px',
    continuous: true,
    failedColor: '#FF1744'
  },
  /*
   ** Global CSS
   */
  css: [
    './node_modules/normalize-css/normalize.css',
    '~/assets/styles/main.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/global',
    '~/plugins/axios',
    '~/plugins/moment',
    '~/plugins/device',
    '~/plugins/vuelidate',
    '~/plugins/inputDigit',
    '~/plugins/clipboard',
    '~/plugins/pwaUpdate'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    [
      'nuxt-compress',
      {
        gzip: {
          cache: true
        },
        brotli: {
          threshold: 10240
        }
      }
    ],
    [
      'nuxt-twa-module',
      {
        defaultUrl: 'https://pwa.pgpal.ir',
        hostName: 'pwa.pgpal.ir',
        sha256Fingerprints: [],
        applicationId: 'ir.pgpal.pwa',
        launcherName: 'pgpal',
        packageId: 'ir.pgpal.pwa',
        name: 'PGPAL',
        short_name: 'PGPAL',
        description: 'PGPAL',
        theme_color: '#ffffff',
        versionCode: 1,
        versionName: '1.0',
        statusBarColor: '#ffffff',
        iconPath: '/static/icon.png',
        distFolder: '.nuxt/dist/client'
      }
    ]
  ],
  bootstrapVue: {
    bootstrapCSS: false
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    progress: config.get('api.progress'),
    debug: config.get('api.debug'),
    baseURL: config.get('api.baseURL'),
    browserBaseURL: config.get('api.browserBaseURL'),
    proxy: Boolean(config.get('api.proxy'))
  },
  /*
 ** PWA
 */
  pwa: {
    cacheAssets: true,
    meta: {
      charset: 'utf-8',
      viewport:
        'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0, shrink-to-fit=0',
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: 'black-translucent',
      favicon: true,
      name: 'PGPAL',
      author: 'MiladHp',
      description: 'PGPAL',
      theme_color: '#ffffff',
      lang: 'fa',
      nativeUI: true,
      ogType: 'website',
      ogSiteName: 'PGPAL',
      ogTitle: 'PGPAL',
      ogDescription: 'PGPAL'
    },
    manifest: {
      defaultUrl: 'https://pwa.pgpal.ir',
      hostName: 'pwa.pgpal.ir',
      launcherName: 'PGPAL',
      packageId: 'ir.pgpal.pwa',
      versionCode: 1,
      versionName: '1.0',
      name: 'PGPAL',
      short_name: 'PGPAL',
      description: 'PGPAL',
      theme_color: '#ffffff',
      statusBarColor: '#ffffff',
      host: 'pwa.pgpal.ir',
      appleStatusBarStyle: '#f4f6f9',
      background_color: '#f4f6f9',
      display: 'standalone',
      dir: 'rtl',
      lang: 'fa',
      orientation: 'portrait-primary',
      version: '1.0.0',
      dev: false,
      icons: [
        {
          src: '/manifest-icons/icon-512x512.png',
          type: 'image/png',
          sizes: '512x512',
          purpose: 'any maskable'
        },
        {
          src: '/manifest-icons/icon-512x512.png',
          type: 'image/png',
          sizes: '512x512',
          purpose: 'maskable'
        },
        {
          src: '/manifest-icons/icon-512x512.png',
          type: 'image/png',
          sizes: '512x512',
          purpose: 'any'
        },
        {
          src: '/manifest-icons/icon-192x192.png',
          type: 'image/png',
          sizes: '192x192',
          purpose: 'any'
        },
        {
          src: '/manifest-icons/icon-180x180.png',
          type: 'image/png',
          sizes: '180x180',
          purpose: 'any'
        },
        {
          src: '/manifest-icons/icon-152x152.png',
          type: 'image/png',
          sizes: '152x152',
          purpose: 'any'
        },
        {
          src: '/manifest-icons/icon-144x144.png',
          type: 'image/png',
          sizes: '144x144',
          purpose: 'any'
        },
        {
          src: '/manifest-icons/icon-120x120.png',
          type: 'image/png',
          sizes: '120x120',
          purpose: 'any'
        },
        {
          src: '/manifest-icons/icon-114x114.png',
          type: 'image/png',
          sizes: '114x114',
          purpose: 'any'
        },
        {
          src: '/manifest-icons/favicon-96x96.png',
          type: 'image/png',
          sizes: '96x96',
          purpose: 'any'
        },
        {
          src: '/manifest-icons/icon-76x76.png',
          type: 'image/png',
          sizes: '76x76',
          purpose: 'any'
        },
        {
          src: '/manifest-icons/icon-72x72.png',
          type: 'image/png',
          sizes: '72x72',
          purpose: 'any'
        },
        {
          src: '/manifest-icons/icon-60x60.png',
          type: 'image/png',
          sizes: '60x60',
          purpose: 'any'
        },
        {
          src: '/manifest-icons/icon-57x57.png',
          type: 'image/png',
          sizes: '57x57',
          purpose: 'any'
        },
        {
          src: '/manifest-icons/favicon-32x32.png',
          type: 'image/png',
          sizes: '32x32',
          purpose: 'any'
        },
        {
          src: '/manifest-icons/favicon-16x16.png',
          type: 'image/png',
          sizes: '16x16',
          purpose: 'any'
        }
      ]
    },
    icons: {
      source: '/icon.png',
      purpose: ['any', 'maskable'],
      sizes: [
        16,
        32,
        57,
        60,
        64,
        72,
        76,
        96,
        120,
        128,
        144,
        152,
        167,
        180,
        192,
        256,
        384,
        512
      ]
    }
  },
  /*
   ** Render
   */
  render: {
    http2: {
      push: true
    },
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style'].includes(type) || /woff2$/.test(file)
      }
    }
  },
  /*
   ** Router
   */
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/signup',
        name: 'signup',
        component: 'pages/auth.vue'
      })
    }
  },
  /*
   ** Build configuration
   */
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
