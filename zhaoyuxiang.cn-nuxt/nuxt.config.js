module.exports = {
  head: {
    titleTemplate: '%s - 华米兹之家',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,viewport-fit=cover' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://unpkg.com/wired-elements@latest/dist/wired-elements.bundled.js', defer: true }
    ],
  },

  css: [
    { src: '~assets/css/main.less', lang: 'less' },
    { src: '~assets/css/github-markdown.css', lang: 'css' }
  ],

  dev: (process.env.NODE_ENV !== 'production'),

  transition: 'page'
}