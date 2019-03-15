const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    './assets/style/reset.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: './plugins/global.js',
      ssr: true
    }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    presets: ['es2015', 'stage-0'],
    styleResources: {
      scss: ['./assets/style/theme.scss', './assets/style/mixin.scss']
    },
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
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
