/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-04-30 14:33:38
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-06-17 09:13:55
 */
module.exports = {
  title: 'hello',
  description: '小羽的博客',
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
          { text: 'ES7-10', link: '/ECMAScript/ES7-10/' }
        ]
      },
      {
        text: 'Guide',
        items: [
          { text: 'Git', link: '/Guide/Git/' },
          { text: 'JS随笔', link: '/Guide/JSessay/' }
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
        children: ['/ECMAScript/ES6/', '/ECMAScript/ES7-10/']
      },
      {
        title: 'Guide ',
        collapsable: true,
        children: ['/Guide/Git/', '/Guide/JSessay/']
      },
    ]
  }
}


