export default {
  // Target and SSR (https://go.nuxtjs.dev/config-target, https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-ssr)
  target: 'static',
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // CSS file in the project
    '@/assets/css/reset.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/vuelidate.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyCHI2raBVoIWwApXxevChfIw1T15d9Yv2c',
          authDomain: 'le-design-du-web.firebaseapp.com',
          projectId: 'le-design-du-web',
          storageBucket: 'le-design-du-web.appspot.com',
          messagingSenderId: '1:468487458462:web:837f472606ff7a9d79b58f',
          appId: 'G-HKBR9SHTNX'
        },
        services: {
          auth: {
            initialize: {
              onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION'
            }
          },
          firestore: true
        }
      }
    ]
  ],

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://ledesignduweb.fr'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // Loading bar
  loading: {
    color: '#7d48ee',
    continuous: true,
    duration: 3000
  }
}
