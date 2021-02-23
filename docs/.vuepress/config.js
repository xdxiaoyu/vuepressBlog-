module.exports = {
  title: '小羽',
  description: '此心光明，亦复何言',
  head: [
    ['link', {
      rel: 'icon',
      href: `/favicon.ico`
    }],
    [
      "script", {
        "language": "javascript",
        "type": "text/javascript",
        "src": "/js/mouseClick.js"
      }
    ]
  ],
  dest: 'public',
  // 更新码云时打开，更新github关闭
  base: '/xiaoyu_blog/',
  ga: '',
  evergreen: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Language',
        items: [
          // { text: 'ES6', link: '/Language/ES6/' },
          // { text: 'ES7-10', link: '/Language/ES7-10/' },
          { text: 'Node', link: '/Language/Node/Node/' },
          { text: 'JavaScript', link: '/Language/JavaScript/JavaScript/' }
        ]
      },
      {
        text: 'Guide',
        items: [
          {
            text: 'Vue', link: '/Guide/Vue/Vue_mvvm/'
            // items: [
            //   { text: 'Vue_mvvm', link: '/Guide/Vue/Vue_mvvm/' },
            //   { text: 'Vuex', link: '/Guide/Vue/Vuex/' },
            // ]
          },
          { text: 'Axios', link: '/Guide/Axios/' },
          { text: 'SSO', link: '/Guide/SSO/' },
          { text: 'Git', link: '/Guide/Git/' },
          { text: 'Webpack', link: '/Guide/Webpack/' },
          { text: 'Webpack2.0', link: '/Guide/Webpack2.0/' },
        ]
      },
      {
        text: ' Contact',
        items: [
          { text: 'GitHub', link: 'https://github.com/dingxingxing' },
          { text: '博客园', link: 'https://www.cnblogs.com/dingxingxing' }
        ]
      },
    ],
    sidebarDepth: 5,
    sidebar: [
      {
        title: 'Language ',
        collapsable: true,
        children: [
          {
            title: 'Node',
            children: ['/Language/Node/Node/', '/Language/Node/MongoDB/', '/Language/Node/Reptiles爬虫/']
          },
          {
            title: 'JavaScript',
            children: ['/Language/JavaScript/JavaScript/', '/Language/JavaScript/ES6/', '/Language/JavaScript/ES7-10/']
          },]
      },
      {
        title: 'Guide ',
        collapsable: true,
        children: [{
          title: 'Vue',
          children: ['/Guide/Vue/Vue_mvvm/', '/Guide/Vue/Vuex/', '/Guide/Vue/Vue_base/']
        },
          '/Guide/Axios/', '/Guide/SSO/', '/Guide/Git/', '/Guide/Webpack/', '/Guide/Webpack2.0/']
      },
    ]
  }
}


