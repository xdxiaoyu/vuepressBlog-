/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-04-30 14:33:38
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-07-15 09:16:32
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
  dest: './docs/.vuepress/dist',
  ga: '',
  evergreen: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'ECMAScript',
        items: [
          { text: 'ES6', link: '/ECMAScript/ES6/' },
          { text: 'ES7-10', link: '/ECMAScript/ES7-10/' },
          { text: 'JS随笔', link: '/ECMAScript/JSessay/' }
        ]
      },
      {
        text: 'Guide',
        items: [
          { text: 'Vue', link: '/Guide/Vue/' },
          { text: 'Git', link: '/Guide/Git/' },
          { text: 'Webpack', link: '/Guide/Webpack/' },
        ]
      },
      { text: ' Contact',
      items: [
        { text: 'GitHub', link: 'https://github.com/dingxingxing' },
        { text: '博客园', link: 'https://www.cnblogs.com/dingxingxing' }
      ]
        },
    ],
    // sidebarDepth: 3,
    sidebar: [
      {
        title: 'ECMAScript ',
        collapsable: true,
        children: ['/ECMAScript/ES6/', '/ECMAScript/ES7-10/', '/ECMAScript/JSessay/']
      },
      {
        title: 'Guide ',
        collapsable: true,
        children: ['/Guide/Git/','/Guide/Webpack/', '/Guide/Vue/']
      },
    ]
  }
}


