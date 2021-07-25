export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TechTok Polska',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Społeczność łącząca pasjonatów informatyki i technologii. Możesz tu pochwalić się swoim projektem, znaleźć rozwiązanie jakiegoś problemu, a co najważniejsze poznać wiele ciekawych osób!' },
      { hid: 'og:description',  name:'og:description', content: 'Społeczność łącząca pasjonatów informatyki i technologii. Możesz tu pochwalić się swoim projektem, znaleźć rozwiązanie jakiegoś problemu, a co najważniejsze poznać wiele ciekawych osób!' },
      { hid: 'og:image',  name:'og:image', content:'/thumbnail.png' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/icon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'pl'
    }
  },

  googleFonts: {
    families: {
      Roboto: true,
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
