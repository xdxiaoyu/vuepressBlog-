# 基于VuePress搭建的博客

由于博客分别部署在Gitee和GitHub，两者之间更新存在差异。所以写一个简单的比较更新博客步骤，好记性不如烂笔头



## GitHub

GitHub部署

```js
修改完文件。
检查vuepressBlog-\docs\.vuepress\文件里的config文件，确保下面这行代码是注释的
// base: '/xiaoyu_blog/', 
在项目根目录下\vuepressBlog-，用GitBash运行 `npm run deploy`
成功即可
```



## Gitee

Gitee部署

```js
修改完文件。
检查vuepressBlog-\docs\.vuepress\文件里的config文件，确保下面这行代码是打开的
base: '/xiaoyu_blog/', 
首先运行打包命令，再暂存更改然后提交更新到gitee。`git push gitee master`
去Gitee Pages 服务更新一下代码即可，不能勾选强制使用HTTPS，样式会丢失
```

