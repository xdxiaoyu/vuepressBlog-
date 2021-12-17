module.exports = {
  title: '小羽',
  description: '婷婷袅袅十三余，豆蔻梢头二月初',
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
        text: 'Tool',
        items: [
          {
            text: 'Vue', link: '/Tool/Vue/Vue_mvvm/'
            // items: [
            //   { text: 'Vue_mvvm', link: '/Tool/Vue/Vue_mvvm/' },
            //   { text: 'Vuex', link: '/Tool/Vue/Vuex/' },
            // ]
          },
          { text: 'Axios', link: '/Tool/Axios/' },
          { text: 'SSO', link: '/Tool/SSO/' },
          { text: 'Git', link: '/Tool/Git/' },
          { text: 'Webpack', link: '/Tool/Webpack/' },
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
        title: 'Tool ',
        collapsable: true,
        children: [{
          title: 'Vue',
          children: ['/Tool/Vue/Vue_mvvm/', '/Tool/Vue/Vuex/', '/Tool/Vue/Vue_base/']
        },
          '/Tool/Axios/', '/Tool/SSO/', '/Tool/Git/', '/Tool/Webpack/']
      },
    ]
  }
}


