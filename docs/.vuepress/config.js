/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-04-30 16:36:00
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-09-17 12:00:28
 */
module.exports = {
  title: '小羽',
  description: '每割一次都要从割韭菜的人身上换回一点资源',
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
  base: '/xiaoyu_blog/',
  ga: '',
  evergreen: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Language',
        items: [
          { text: 'ES6', link: '/Language/ES6/' },
          { text: 'ES7-10', link: '/Language/ES7-10/' },
          { text: 'Node', link: '/Language/Node/Node/' }
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
        children: ['/Language/ES6/', '/Language/ES7-10/', {
          title: 'Node',
          children: ['/Language/Node/Node/', '/Language/Node/MongoDB/', '/Language/Node/Reptiles爬虫/']
        }]
      },
      {
        title: 'Guide ',
        collapsable: true,
        children: [{
          title: 'Vue',
          children: ['/Guide/Vue/Vue_mvvm/', '/Guide/Vue/Vuex/', '/Guide/Vue/Vue_base/']
        },
          '/Guide/Axios/','/Guide/SSO/', '/Guide/Git/', '/Guide/Webpack/']
      },
    ]
  }
}


