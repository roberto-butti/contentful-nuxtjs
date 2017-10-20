const contentful_config = require('./.contentful.json')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'contentful-nuxtjs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  env: {
    CTF_SPACE_ID: contentful_config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: contentful_config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: contentful_config.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: contentful_config.CTF_BLOG_POST_TYPE_ID
  }
}
