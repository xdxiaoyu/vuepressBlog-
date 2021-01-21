(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{197:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[t._v("#")]),t._v(" Webpack")]),t._v(" "),s("h2",{attrs:{id:"入口-entry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#入口-entry"}},[t._v("#")]),t._v(" 入口(entry)")]),t._v(" "),s("blockquote",[s("p",[t._v("入口起点(entry point)告诉webpack那个是原始文件。找到这个原始文件之后开始寻找依赖包和各种资源，根据这些包还有资源选择合适的loader进行处理。这个入口是需要在webpack的配置文件（webpack.config.js）中来声明的：")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    entry"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/to/my/entry/file.js'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"出口-output"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#出口-output"}},[t._v("#")]),t._v(" 出口(output)")]),t._v(" "),s("blockquote",[s("p",[t._v("出口（output）是告诉webpack经过各种loader处理后的文件应该生成到哪个目录下，也就是生成文件所在的地方。同样需要显示的告诉webpack的配置文件（webpack.config.js）")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    entry"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/to/my/entry/file.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-first-webpack.bundle.js'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loader"}},[t._v("#")]),t._v(" loader")]),t._v(" "),s("blockquote",[s("p",[t._v("构建的过程除了处理原生的JavaScript，还需要处理其他非JavaScript文件，比如图片、CSS、ES6等等。webpack loader的作用就是提供一个机制能保证所有的类型资源都可以采用对应的loader进行处理，这样webpack就能完成更加复杂的构建过程。而这个loader也是需要在配置文件（webpack.config.js）中来定义的：")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-first-webpack.bundle.js'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    module"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        rules"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("test"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.txt$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'raw-loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"插件-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件-plugins"}},[t._v("#")]),t._v(" 插件(plugins)")]),t._v(" "),s("blockquote",[s("p",[t._v("loader被用于转换某些资源类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括打包、优化和压缩、重新定义环境中的变量。插件接口的功能极其强大，可以用来处理各种各样的任务")])]),t._v(" "),s("p",[t._v("想要使用一个插件，你只需要require()它，然后把它添加到plugins数组中。多数插件可以通过选项(option)自定义。你也可以在一个配置文件中因为不同目的的而多次使用同一个插件，这时需要通过使用new操作符来创建它的一个实例。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HtmlWebpackPlugin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html-webpack-pugin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过 npm 安装")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" webpack "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于访问内置插件")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    module"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        rules"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("tets"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.txt$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'raw-loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HtmlWebpackPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/index.html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" config\n")])])]),s("h2",{attrs:{id:"模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模式"}},[t._v("#")]),t._v(" 模式")]),t._v(" "),s("blockquote",[s("p",[t._v("平时我们会存在两种状态：开发模式、生产模式。构建的过程中也是需要的，比如我们在开发环境需要快读的构建，在生产环境需要构建一个最符合线上环境的版本。这样我们只要在配置文件中简单的配置一下就可以达到目的：")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("export "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"babel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel"}},[t._v("#")]),t._v(" Babel")]),t._v(" "),s("blockquote",[s("p",[t._v("Bable 是一个工具链，主要用于将ECMAScript 2015+ 版本的代码转换为向后兼容的JavaScript语法，以便能够运行在当前和旧版本的浏览器或其他环境中。")])]),t._v(" "),s("h3",{attrs:{id:"工作原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工作原理"}},[t._v("#")]),t._v(" 工作原理")]),t._v(" "),s("p",[t._v("Code(代码)-parse(解析转换)-AST(抽象语法树) -transform(转换)-AST-plugins-AST-generator(还原)-Code")]),t._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5CAdministrator%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200628164355873.png",alt:"image-20200628164355873"}})]),t._v(" "),s("blockquote",[s("p",[t._v("Babel首先是把原始的代码转成抽象语法树(AST)，然后基于这个AST做转换，每个转换被处理成插件的形式，最后把AST还原成代码。实际我们应用起来只需要三步：根据应用场景选择引用场景、安装工具、配置文件。")])]),t._v(" "),s("p",[t._v("npm install -D babel-loader @babel/core @babel/preset-env")]),t._v(" "),s("blockquote",[s("p",[t._v("babel-loader是webpack是一会要用的，要用babel-loader就一定要用到babel，要用到babel就需要安装babel/core。")]),t._v(" "),s("p",[t._v("babel在做转换的时候，需要怎么处理呢？需要有一个规则和集合，babel/preset-env就是这个规则和集合")])]),t._v(" "),s("h1",{attrs:{id:"eslint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eslint"}},[t._v("#")]),t._v(" ESlint")]),t._v(" "),s("blockquote",[s("p",[t._v("ESlint最初是由Nicholas C.Zakas于2013年6月创建的开源项目。它的目标是提供一个插件化的、可组装的JavaScript和JSX工具。")])]),t._v(" "),s("h2",{attrs:{id:"规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#规则"}},[t._v("#")]),t._v(" 规则")]),t._v(" "),s("p",[t._v("ESLint每个规则会设置三个检查等级：")]),t._v(" "),s("p",[t._v('"off" 或 0 - 关闭规则')]),t._v(" "),s("p",[t._v('"warn" 或 1 - 开启规则，使用警告级别的错误：warn(不会导致程序退出)')]),t._v(" "),s("p",[t._v('"error" 或 2 - 开启规则，使用错误级别的错误：error(当被触发的时候，程序会退出)')]),t._v(" "),s("h2",{attrs:{id:"插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),s("p",[t._v("ESLint通过插件的机制来拓展规则的建设、也就是说插件是用来自定义规则的，我们可以使用他人的插件也可以自己开发插件。")]),t._v(" "),s("p",[t._v("插件的命名方式是：eslint-plugin- plugin-name，比较流行的ESLint插件有 eslint-pluigin-standard、eslint-plugin-vue")]),t._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("p",[t._v("ESlint被设计为完全可配置的，这意味着你可以关闭每一个规则而只运行基本语法验或混合匹配。有两种主要方式来配置SELint：")]),t._v(" "),s("p",[t._v("1、"),s("strong",[t._v("Configuration Comments")]),t._v(" - 使用 JavaScript注释把配置信息直接嵌入到一个代码源文件中。")]),t._v(" "),s("p",[t._v("2、"),s("strong",[t._v("Configuration Files")]),t._v("- 使用JavaScript、JSON、或者YAML文件为整个目录（处理你的主目录）和它的子目录指定配置信息。可以配置一个独立的.eslintrc.*文件，或者直接在package.json文件里的eslintConfig字段指定配置，ESLint会查找和自动读取它们。")])])}),[],!1,null,null,null);a.default=e.exports}}]);