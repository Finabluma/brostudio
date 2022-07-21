export default {
  env: {
    MAPBOX_ACCESS_TOKEN: process.env.MAPBOX_ACCESS_TOKEN,
    MAPBOX_STYLE: process.env.MAPBOX_STYLE,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cocina mediterránea 👨🏼‍🍳 La Volta',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=5',
      },
      {
        hid: 'mobile-web-app-capable',
        name: 'mobile-web-app-capable',
        content: 'yes',
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#222',
      },
      {
        hid: 'apple-mobile-web-app-capable',
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
      {
        hid: 'apple-mobile-web-app-status-bar-style',
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
      {
        hid: 'msapplication-TileColor',
        name: 'msapplication-TileColor',
        content: '#222',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/hnq7yja.css' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/filters.js',
    '~/plugins/sanityImageBuilder.js',
    '~/plugins/lazysizes.client.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://sanity.nuxtjs.org
    '@nuxtjs/sanity/module',
    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
    // https://www.npmjs.com/package/@nuxtjs/svg
    '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://github.com/nuxt-community/redirect-module
    '@nuxtjs/redirect-module',
    // https://image.nuxtjs.org/getting-started/installation
    '@nuxt/image',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  eslint: {
    cache: false,
  },

  loading: false,

  // Defaults options
  tailwindcss: {
    jit: true,
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    viewer: true,
  },

  // ColorMode
  colorMode: {
    preference: 'system',
    classSuffix: '',
  },

  sanity: {
    projectId: 'z6s2ouei',
    apiVersion: '2021-10-18',
    withCredentials: true,
  },

  image: {
    provider: 'sanity',
    sanity: {
      projectId: 'z6s2ouei',
    },
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
      '3xl': 1920,
    },
  },

  redirect: [
    // Redirect URLs to use a trailing slash
    {
      from: '^(\\/[^\\?]*[^\\/])(\\?.*)?$',
      to: '$1/$2',
    },
  ],
}
