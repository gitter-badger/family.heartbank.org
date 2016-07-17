module.exports = {
  htmlAttributes: { lang: 'en' },
  titleTemplate: 'HeartBank',
  defaultTitle: 'HeartBank',
  description: 'A Family Bank allows you to give and take freely between family members',
  base: { href: '/' },

  meta: [
    { name: 'description', content: this.description }
  ],

  link: [
    /** <link> tags for "apple-touch-icon" (AKA Web Clips). **/
    { rel: 'apple-touch-icon', sizes: '57x57', href: '/assets/icon/apple-icon-57x57.png' },
    { rel: 'apple-touch-icon', sizes: '60x60', href: '/assets/icon/apple-icon-60x60.png' },
    { rel: 'apple-touch-icon', sizes: '72x72', href: '/assets/icon/apple-icon-72x72.png' },
    { rel: 'apple-touch-icon', sizes: '76x76', href: '/assets/icon/apple-icon-76x76.png' },
    { rel: 'apple-touch-icon', sizes: '114x114', href: '/assets/icon/apple-icon-114x114.png' },
    { rel: 'apple-touch-icon', sizes: '120x120', href: '/assets/icon/apple-icon-120x120.png' },
    { rel: 'apple-touch-icon', sizes: '144x144', href: '/assets/icon/apple-icon-144x144.png' },
    { rel: 'apple-touch-icon', sizes: '152x152', href: '/assets/icon/apple-icon-152x152.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/icon/apple-icon-180x180.png' },

    /** <link> tags for android web app icons **/
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/assets/icon/android-icon-192x192.png' },

    /** <link> tags for favicons **/
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/icon/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/assets/icon/favicon-96x96.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/icon/favicon-16x16.png' },

    /** <link> tags for a Web App Manifest **/
    { rel: 'manifest', href: '/assets/manifest.json' },

    /** <link> tags for Fonts **/
    { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Roboto:400,300,500', type:'text/css' }
  ],

  script: [
    { src: 'https://use.fontawesome.com/9c4c495f74.js' }
  ]
}
