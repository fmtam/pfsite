const { sourceFileArray } = require('./contents/posts/summary.json')

const sourceFileNameToUrl = filepath => {
  const deleteExt = filepath.replace('.md', '')
  const fileName = deleteExt.split('/')[deleteExt.split('/').length - 1]
  const splitArray = fileName.split('_')
  // return `/posts/${splitArray[0]}/${splitArray[1]}`
  return `/blog/${splitArray[0]}/${splitArray[1]}`
}
const generateDynamicRoutes = callback => {
  const routes = sourceFileArray.map(sourceFileName => {
    return sourceFileNameToUrl(sourceFileName)
  })
  callback(null, routes)
}

export default {
  mode: 'universal',
  head: {
    title: 'mypfsite',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'nuxt-js' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'mypfsite' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'mypfsite' },
      { hid: 'og:url', property: 'og:url', content: 'https://sample.com/' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'mypfsite',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: { color: '#fff' },
  css: [
    { src: '~/assets/css/common.scss', lang: 'scss' },
    { src: '~/node_modules/highlight.js/styles/nord.css', lang: 'css' },
    '@fortawesome/fontawesome-free/css/all.css',
  ],
  plugins: [
    '@/plugins/markdownit',
    {
      src: '@/plugins/vue-lazyload',
      ssr: false,
    },
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-XXXXXX-X',
      },
    ],
    'nuxt-webfontloader',
    'nuxt-fontawesome',
  ],
  webfontloader: {
    google: {
<<<<<<< HEAD
      families: [
        'Noto+Sans+JP'
      ]
    }
=======
      families: ['Noto+Sans+JP', 'Montserrat'],
    },
>>>>>>> a48eec8... update
  },
  fontawesome: {
    component: 'fa',
  },
  styleResources: {
    scss: ['./assets/css/_vars.scss', './assets/css/_mixins.scss'],
  },
  // markdownit: {
  //   preset: 'default',
  //   injected: true,
  //   breaks: true,
  //   html: true,
  // },
  generate: {
    routes: generateDynamicRoutes,
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://sample.com/',
    exclude: ['/about'],
    routes: generateDynamicRoutes,
  },
  build: {
    extend(config, ctx) {},
  },
  preset: {
    autoprefixer: {
      grid: true,
    },
<<<<<<< HEAD
    hardSource: true,
  }
=======
  },
>>>>>>> a48eec8... update
}