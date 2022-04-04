import { resolve } from 'path'
// import axios from 'axios'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'suntech',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-png', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // '@nuxtjs/sitemap',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://suntechelectronics.tech/backend/wp-json/',
  },

  // sitemap: {
  //   hostname: 'https://suntechelectronics.tech/',
  //   routes: async () => {
  //     const { data } = await axios.get(
  //       'https://suntech-api.com/wp-json/wp/v2/posts/'
  //     )
  //     return data.data.map((post) => `/blog/${post.slug.rendered}`)
  //   },
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  alias: {
    icons: resolve(__dirname, 'node_modules/vue-material-design-icons'),
  },
}
