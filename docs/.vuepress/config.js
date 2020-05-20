/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-04-30 14:33:38
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-05-20 17:06:47
 */
module.exports = {
  title: 'hello',
  description: '小羽羽羽羽',
  head: [
    ['link', {
      rel: 'icon',
      href: `/favicon.ico`
    }]
  ],
  dest: './docs/.vuepress/dist',
  ga: '',
  evergreen: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      {
        text: 'ECMAScript',
        items: [
          { text: 'ES6', link: '/ECMAScript/ES6/' },
          { text: 'ES7', link: '/ECMAScript/ES7/' }
        ]
      },
      { text: 'External', link: 'https://www.baidu.com' },
    ],
    sidebarDepth: 3,
    sidebar: [
      {
        title: 'ECMAScript',
        collapsable: false,
        children: ['/ECMAScript/ES6/']
      }
    ]
  }
}

