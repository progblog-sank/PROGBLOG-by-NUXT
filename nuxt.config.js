export default {
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: '%s ｜ PROGBLO by NUXT',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'シングルページアプリケーションを実装できるnuxt.jsで作成したPROGBLOGのポートフォリオサイト' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'PROGBLO by NUXT' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://nuxt.progblog-web.com' },
      { hid: 'og:title', property: 'og:title', content: 'PROGBLO by NUXT' },
      { hid: 'og:description', property: 'og:description', content: 'シングルページアプリケーションを実装できるnuxt.jsで作成したPROGBLOGのポートフォリオサイト' },
      { hid: 'og:image', property: 'og:image', content: 'https://nuxt.progblog-web.com/ogp.jpg' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://nuxt.progblog-web.com' },
      { rel: "stylesheet", href:"https://use.fontawesome.com/releases/v5.6.1/css/all.css"}
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  '@/assets/css/base.css'
],
/*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    'nuxt-fontawesome',
    'nuxt-webfontloader',
    '@nuxtjs/markdownit'
  ],
  webfontloader: {
    google: {
      families: ['Anton']
    }
  },
  markdownit: {
    html: true,
    injected: true,
    preset: 'default',
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  }
}
