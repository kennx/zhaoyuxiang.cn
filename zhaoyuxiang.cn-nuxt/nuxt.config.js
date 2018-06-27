module.exports = {
  head: {
    titleTemplate: '%s - 华米兹之家',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  },

  css: [
    { src: '~assets/css/main.less', lang: 'less' }
  ],

  dev: (process.env.NODE_ENV !== 'production'),

  transition: 'page',

  modules: [
    '@nuxtjs/axios',
  ],

  plugins: ['~/plugins/axios'],

  axios: {
    host: 'localhost',
    port: 7001,
    prefix: '/graphql'
  }
}