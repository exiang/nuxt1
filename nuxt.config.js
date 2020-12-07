export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt1',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',  
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyDjfv_ua6hemX03bsyq_sRAEYiP-x2EyTM",
          authDomain: "nuxt1-8d3de.firebaseapp.com",
          databaseURL: "https://nuxt1-8d3de-default-rtdb.firebaseio.com",
          projectId: "nuxt1-8d3de",
          storageBucket: "nuxt1-8d3de.appspot.com",
          messagingSenderId: "942970789648",
          appId: "1:942970789648:web:fb7765e725c5300140cf95"
        },
        services: {
          database: true // Just as example. Can be any other service.
        }
      }
    ]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
