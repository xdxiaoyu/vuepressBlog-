# Node

## Node.js简介

### 				1.Node.js是什么

Node.js诞生于2009年，有Joyent的员工Ryan Dahl开发而成，目前官网最新版本已经更新到17.7.0版本，最新最稳定的是10.15.3。Node.js不是一门语言也不是框架，他只是具有GoogleV8引擎的JavaScript运行时环境，同时结合Libuv扩展了JavaScript功能，使之支持io、fs等只有语言才有的特性，使得JavaScript能够同时具体DOM操作（浏览器）和I/O、文件读写、操作数据库（服务端）等能力，是目前最简单的全栈语言。

这里我们可以简单理解Node.js是一个内置有chrome V8引擎的JavaScript运行环境，他可以使原本在浏览器中运行的JavaScript有能力跑后端，从而操作我们的数据库，进行文件读写等。

目前市场上高密的I/O模型，比如Web开发，微服务，前端构建等都有做Node.js的身影。不少大型网站都是使用Node.js作为后台开发语言，比如淘宝 双十一、去哪儿网的PC端核心业务。另外我们一些前端工具譬如VSCode，Webpack等也是有Node.js开发。

Node.js的包管理工具，npm已经成为世界开源包管理中最大的生态，功能强大，目前单月使用者接近1000万。

### 				2.Node.js特性（记住三句话）

- 事件驱动
- 非阻塞IO模型（异步）
- 轻量和高效

## Node在一线企业中的运用

### 作为中间层

我们通常说的前端和后端，前端负责用户界面，而后端负责提供数据和业务接口。现在我们在两者之间加入一层，前端并不是直接去请求后端业务接口，而是请求到中间层。再由中间层去请求业务接口，看一下示意图：

![](D:\文档存放区\Storage-of-record-documents\Node\images\中间层.png)

> 整个流程可以描述为：客户端直接请求到中间层的Node服务，Node服务分析请求，看需要哪个页面，再去请求对应数据，拿到数据后和模板结合成用户看到的页面，再给客户端。

那么有的人可能会觉得，这种模式不是更麻烦了吗？其实不然，我们来看看 **中间层的优点：**

```js
	1.减轻客户端内存，项目用户体验好。不会像MVVM模式的项目把页面渲染和数据请求都压在		  客户端，而是在服务端完成。

​	2.SEO性好，不像MVVM模式页面由js生成，而是在服务端渲染好html字符，有利于网页被搜		  索到。

​	3.保持了前后端分离的优点和目的，即解放后端，后端可以继续以接口形式写业务代码。

​	4.前端可以操控的范围增多，甚至可以做服务器，数据库层面的优化，比如中间层中常常用		  nginx，dedis来优化项目，应对高并发。
```

中间层模式是一种开发模式上的进步，为什么这么好的模式我从来没有听说过呢？因为这种模式成本过高，如果没有一定量级的项目没必要去采用。



### 做项目构建工具

这里说的项目构建工具，我相信大家都用过，我们的webpack，vue-cli都是输入项目构建工作。那么大家觉得这一类工具神奇好用方便的同时，有没有想过这些工具拿什么语言写的？其实他们不难，这些工具都是用Node来写的

很多公司都会开发自己公司的项目构建工具，帮助公司项目做的更标准更方便，一个好的项目构建工具，会极大的加快整个公司的项目开发效率。

这一类的项目构工具一般都要很多文件操作，Node对于i/o流的操作，在目前的主流后端语言中数一数二。所以越来越多的公司选择用Node来做项目构建工具。



### 做一些小型网站后端

用Node做后端，可能极大多数人认为的Node作用。其实真正在企业之中，很少会让你去用Node做后端。所以一般来说都是做一些小型或者个人站的后端

## Node.js事件

### Node.js事件循环

Node.js是单进程单线程应用程序，但是因为V8引擎提供的异步执行回调接口，通过这些接口可以处理大量并发，所以性能非常高。

Node.js几乎每一个API都是支持回调函数的。

Node.js基本上所有的事件机制都是用设计模式中观察者模式实现。

Node.js单线程类似进入一个while(true)的世界循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数。

```js
开启进程
开启线程
初始化数据，window/document/loaction...
while (true) {
    
    初始化事件列表
    根据事件修改数据
    根据数据去渲染页面
   
    if(count === 0) {
        运行js代码
        btn.onclick = function() {
        	document.body.style.background = 'skyblue'
        	console.log(123)
    	}
    		console.log(456)
        	count++
    }
    
}
```

**事件机制原理：**

```js
let fs = require('fs')

fs.readFile('hello.txt', { flag: 'r', encoding: 'utf-8' }, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    yuEvent.emit('helloSuccess', data)
    // 1数据库查看所有用户详细信息
    // 2统计用户年龄比例
    // 3查看所有用户学校的详细信息
  }
})

let yuEvent = {
  event: {
    // helloSuccess: [fn,fn,fn]
  },
  on: function (eventName, eventFn) {
    if (this.event[eventName]) {
      this.event[eventName].push(eventFn)
    } else {
      this.event[eventName] = []
      this.event[eventName].push(eventFn)
    }
  },
  emit: function (eventName, EventMsg) {
    if (this.event[eventName]) {
      this.event[eventName].forEach(itemFn => {
        itemFn(EventMsg)
      })
    }
  }
}

yuEvent.on('helloSuccess', (EventMsg) => {
  console.log('1数据库查看所有用户详细信息');
})
yuEvent.on('helloSuccess', (EventMsg) => {
  console.log('2统计用户年龄比例');
})
yuEvent.on('helloSuccess', (EventMsg) => {
  console.log('3查看所有用户学校的详细信息');
})

// PS D:\exces\PracticeCode\Node相关\事件> node read.js
// 运行结果：
// username,age,sex,school
// 1数据库查看所有用户详细信息
// 2统计用户年龄比例
// 3查看所有用户学校的详细信息
```



**Node内置的event模块进行调用**

```js
let events = require('events')
let fs = require('fs');
let ee = new events.EventEmitter()

ee.on('helloSuccess', (data) => {
  console.log('学Node');
  console.log(data);
})
ee.on('helloSuccess', () => {
  console.log('学webpack');
})
ee.on('helloSuccess', () => {
  console.log('学React');
})

function xyReadFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { flag: 'r', encoding: 'utf-8' }, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
xyReadFile('hello.txt').then(res => {
  ee.emit('helloSuccess', res)
})
// 第二种写法
async function test() {
  let data = await xyReadFile('hello.txt')
  ee.emit('helloSuccess', data)
}
test()

// PS D:\exces\PracticeCode\Node相关\事件> node event.js
// 学Node
// 窗前明月光
// 学webpack
// 学React
```

## Node.js模块化理解

Node.js采用的是Commonjs规范，在NodeJs中，一般将代码合理拆分到不同的js文件中，每一个文件就是一个模块，而文件路径就是模块名。

在编写每个模块时，都有require、exports、module三个预先定义好的变量可供使用。

> Node.js中模块的分类

- 核心模块（已经封装好的内置模块）；
- 自己定义的模块；
- 第三方的模块（npm下载下来的）



###				1.require

`require`函数用来在一个模块中引入另一个模块：用法：`let cc = require('模块名')`。模块名可用相对路径或绝对路径

require()函数的两个作用

- 执行导入的模块中的代码；
- 返回导入模块中的接口对象；



###				2.exports

`exports`对象用来导出当前模块的公共方法或属性，别的模块通过`require`函数使用当前模块得到的就是当前模块的`exports`对象。用法：`exports.name`,name为导出对象的名字。

> 其实exports类似于ES6中的export的用法，用来导出一个指定名字的对象



###				3.module.exports

`module.exports`用来导出一个默认对象，没有指定对象名，常见于修改模块的原始导出对象。比如原本模块导出的是一个对象，我们可以通过module.exports修改为导出一个函数。

> 注意使用exports时，只能单个设置属性exports.a = 
>
> 使用module.exports可以单个设置属性，也可以整个赋值



### 		4.模块初始化

一个模块中的JS代码仅在模块**第一次被使用时**执行一次，并且在使用的过程中进行初始化，之后缓存起来便于后续继续使用。



### 		5.主模块

通过命令形参传递传递个NodeJS以启动程序的模块被称为主模块。主模块负责调度组成整个程序的其他模块完成工作。例如通过以下命令启动程序时，main.js就是主模块。

```js
$ node main.js // 运行main.js启动程序，main.js称为主模块
```



### 		总结

```js
1.Node中每个模块都有一个module对象。module对象中有一个exports属性为接	口的对象，我们需要把模块之间公共的方法或属性挂载在这个接口对象中，方	便	其他的模块使用这些公共的方法或属性。

2.Node中每个模块的最后，都会`retrun: module.exports`。

3.Node中每个模块都会把`module.exports`指向的对象赋值给变量exports,也就是	说：exports = module.exports。

4.如果需要导出多个成员时必须使用`exports.add = XXX; exports.foo = XXX`; 或者使用`module.exports.add = XXX;module.exports.foo = XXX`。
```





## Node中require加载第三方包的规则...

Node.js中使用CommonJs模块化机制，通过npm下载的第三方包，我们在项目中引入第三方包都是：`let xx = require('第三方包名')` ，而`require`方法加载第三方包的原理机制是什么？

```js
1. `require('第三方包名')`优先在加载该包的模块的同级目录`node_modules`中查找第三方包。

2. 找到该第三方包中的package.json文件，并且找到里面的main属性对应的入口模块，该入口模块即为加载的第三方模块。

3. 如果在要加载的第三方包中没有找到package.json文件或者是package.json文件中没有main属性则默认加载第三方包中的index.js文件

4. 如果在加载第三方模块的文件的同级目录没有找到`node_module`文件夹，或者以上所有情况都没找到，则会向上一级父级目录下查找`node_module`文件夹，查找规则如上一致。

5. 如果一直找到该模块的磁盘根路径都没有找到，则会报错：`can not find module xxx`。
```



## npm常见命令

npm英文全称：`node package manager`，常见的npm命令总结如下：

```js
`npm -v`: 查看npm版本。

`npm init`: 初始化后会出现一个`package.json`配置文件。可以在后面加上`-y`,快速跳过问答式界面。

`npm install`: 会根据项目中的`package.json`文件自动下载项目所需要的全部依赖。

`npm install 包名 --save-dev(npm install 包名 -D)`: 安装的包只用于开发环境，不用于生产环境，会出现在`package.json`文件中的`devDependencies`属性中。

`npm install 包名 --save(npm install 包名 -S)`: 安装的包需要发布到生产环境，会出现在`package.json`文件中的`dependencies`属性中。

`npm list`: 查看当前目录下已安装的node包。

`npm list -g`: 查看全局已经安装过的node包。

`npm --help`: 查看npm帮助命令。

`npm update 包名`: 更新指定包。

`npm uninstall 包名`: 卸载指定包。

`npm config list`: 查看配置信息。

`npm 指定命令 --help`: 查看指定命令的帮助。

`npm info 指定包名`: 查看远程npm上指定包的所有版本信息。

`npm install -g cnpm --registry=https://registry.npm.taobao.org`: 修改包下载源，此例修改为了淘宝镜像。

`npm root`: 查看当前包的安装路径。

`npm root -g`: 查看全局的包的安装路径。

`npm ls 包名`: 查看本地安装的指定包及版本信息，没有显示empty。

`npm ls 包名 -g`: 查看全局安装的指定包及版本信息，没有显示empty。
```



## buffer

> 1.数组不能进行二进制数据的操作
>
> 2.js数组不像java、payth等语言效率高
>
> 3.buffer内存空间开辟出固定大小的内存

```js
// 将字符串转成buffer对象
var str = 'helloworld'
let buf = Buffer.from(str)

// 输出buffer内容
console.log(buf.toString());

// 开辟一个空的buffer(缓存区)，安全但是比下面慢
let buf1 = Buffer.alloc(10)
buf1[0] = 256
console.log(buf1);

// 不安全，会有上次内存数据遗留
let buf2 = Buffer.allocUnsafe(10)
console.log(buf2);
```


 ## fs模块

### 			1.读文件

**语法**：

```js
fs.readFile(path[, options], callback)
```

> 接收三个参数，写入文件路径，操作和编码格式等，回调函数


```js
var fs = require('fs') 

// 同步，等待和堵塞
var content = fs.readFileSync('hello.txt', { flag: 'r', encoding: "utf-8" })
console.log(content);

// 异步
fs.readFile('hello.txt', { flag: 'r', encoding: "utf-8" }, (err, data) => {
   if (err) {
     console.log(err);
   } else {
     console.log(data);
   }
 })

// 一般都用Promise对读取文件进行封装
function fsRead(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { flag: 'r', encoding: "utf-8" }, (err, data) => {
      if (err) {
        // 失败执行的内容
        reject(err)
      } else {
        // console.log(data);
        resolve(data)
      }
    })
  })
}
// 配合async顺序调用
async function ReadList() {
  var file2 = await fsRead('hello.txt')
  var file3 = await fsRead(file2+ '.txt')
  var file3Content = await fsRead(file3+ '.txt')
  console.log(file3Content);
}

ReadList()
```



### 			2.写文件

**语法**

```js
fs.writeFile(file, data[, options], callback)
```



> wirteFile接受三个参数，写入文件路径，写入内容，回调函数。
>
> 写入成功时候：error为null；写入失败时候：error为错误对象

```js
let fs = require('fs');
// flag
// write=>w   read=>r   apped=>a
// 'w': 打开文件用于写入。 如果文件不存在则创建文件，如果文件存在则截断文件。
// 'a': 打开文件用于追加。 如果文件不存在，则创建该文件。

fs.writeFile('test.txt',"今晚吃啥？\n", {flag: 'a',encoding:"utf-8"},function(err){
  if(err) {
    console.log(err,'写入内容出错');
  }else {
    console.log('写入内容成功');
  }
})


// Promise封装写入文件
function writefs(path,content){
  return new Promise((resolve,reject) => {
    fs.writeFile(path,`${content}\n`, {flag: 'a',encoding:"utf-8"},function(err){
      if(err) {
        reject(err)
      }else {
        resolve(err)
      }
    })
  })
}
async function writeList() {
  await writefs('xy.html', '<h1>1今天学Node</h1>')
  await writefs('xy.html', '<h1>2明天学Node</h1>')
  await writefs('xy.html', '<h1>3后天学Node</h1>')
  await writefs('xy.html', '<h1>4大后天学Node</h1>')
}

writeList()
```



### 		3.删除文件

**语法**

```js
fs.unlink(path, callback)
```

> 删除文件回收站没有，基本不可恢复

```js
let fs = require('fs')
fs.unlink('xy.txt',function() {
  console.log('成功删除');
})
```



### 	4.读取目录

**语法**

```js
fs.readdir(path, callback)
```

> callback有两个参数，error：为错误信息；files：为目录下的文件数组列表

```js
let fs = require('fs')
let { fsWritefs, fsRead } = require('./lcfs')

const txtPath = "all.txt"
fs.readdir('../fs', function (err, files) {
  if (err) {
    console.log(err);
  } else {
    console.log(files);
    files.forEach(async (filename, i) => {
      let content = await fsRead('../fs/' + filename)
      await fsWritefs(txtPath, content)
    })
  }
})
```





### 	5.创建目录

**语法**

```js
fs.mkdir(path[,option], callback)
```



### 6.删除目录

**语法**

```js
fs.rmdir(path. callback)
```

> 回收站无法找回

```js
let fs = require('fs')

fs.rmdir('abc',() => {
  console.log('删除成功');
})
```



### 7.输入输出

> 该`readline`模块提供了一个接口，用于一次从一行的[Readable](https://nodejs.org/api/stream.html#stream_readable_streams) 流（例如[`process.stdin`](https://nodejs.org/api/process.html#process_process_stdin)）中读取数据。
>
> 一旦调用了此代码，Node.js应用程序将`readline.Interface`在接口关闭之前终止， 因为接口等待`input`流上接收到数据。

```js
let readline = require('readline');
// 导入readline包

// 实例化接口对象
let r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

//设置r1,提问事件
r1.question("今天学什么？", (answer) => {
  console.log('答复：', answer);
  r1.close()
})
r1.on('close', () => {
  process.exit(0)
})
```



## Node.js Stream(流)

Stream是一个抽象接口，Node中有很多对象实现了这个接口。例如，对http服务器发起请求的request对象就是一个Stream，还有stdout(标准输出)。

Node.js，Stream有四种流类型：

- **Readable**	-	可读操作。
- **Writable**     -    可写操作。
- **Duplex**        -    可读可写操作。
- **Transform**   -   操作被写入数据，然后读出结果。



所有的Stream对象都是EventEmitter的实例。常用的事件有：

- **data**     - 当有数据可读时触发。
- **end**      - 没有更多的数据可读时触发。
- **error**    - 在接收和写入过程中发生错误时触发。
- **finish**   - 所有数据已被写入到底层系统时触发。





### 写入流

**语法**：

```js
fs.createWriteStream(文件路径，[可选的配置操作])
```

例子：

```js
let fs = require('fs')
// 创建写入流
let ws = fs.createWriteStream('hello.txt', { flags: 'w', encoding: 'utf-8' })
console.log(ws);
// 监听文件打开事件 
ws.on('open', () => {
  console.log("文件打开了");
})
// 监听准备事件
ws.on('ready', () => {
  console.log("文件写入已准备状态");
})
// 监听文件关闭事件
ws.on('close', () => {
  console.log('文件写入完成关闭');
})
// 文件流式写入
ws.write("helloworld!", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("内容流入完成");
  }
})
// 文件写入完成 
ws.end(() => {
  console.log("文件写入关闭");
})
```

​	

### 从流中读取数据

**语法：**

```js
fs.createReadStream(路径,[可选的配置项])
```

```js
// 语法：fs.createReadStream(路径,[可选的配置项])
let rs = fs.createReadStream('hello.txt', { flags: 'r', encoding: 'utf-8' })
console.log(rs);

rs.on('open',() => {
  console.log('读取的文件打开');
})

rs.on('close',() => {
  console.log('读取流结束');
})

// 每一次数据流入完成
rs.on('data',(chunk) => {
  console.log(chunk);
})
```



### 管道流

> 在`'pipe'`当事件被发射[`stream.pipe()`](https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options)方法被称为上的可读流，添加该可写至其目的地集合。





## path模块+os模块

Node.js中`path`模块提供了一些路径操作的API，`os`模块提供了一些操作系统相关信息的API

#### 1.path

`path.extname('hello.md')`获取文件（可以是一个路径文件）的扩展名，演示如下:

```js
let path = require('path')
console.log(path.extname('http://www.xinhuanet.com//2019-11/23/c_1125266028.html'))
// .html
```

- `path.resolve([...path])`把路径或路径片段的序列解析为一个绝对路径。

```js
let arr = ['/sxt','qianduan', 'zhongji']
let info1 = path.resolve(...arr)
console.log(info1);
// D:\sxt\qianduan\zhongji
```

- `path.join([...paths])`方法使用平台特定的分隔符把全部定的`path`片段连接到一起，并规范化的路径。

```js
let arr = ['/sxt','qianduan', 'zhongji']
let info1 = path.resolve(...arr)
console.log(info1);
// D:\sxt\qianduan\zhongji
```

- `path.parse([...paths])`解析路径，可以将路径信息直接解析出来，解析出根路径，目录，扩展名，文件名称，文件名

```js
console.log(path.parse(__filename));
//	{ root: 'D:\\',
//  	dir: 'D:\\exces\\PracticeCode\\Node相关\\PATH',
//		base: 'nodePath2.js',
//		ext: '.js',
//  	name: 'nodePath2' 
//	}
```

  

**几个路径的含义：**

> `__dirname`：获取当前执行文件所在**目录**的完整目录名

```js
// 获得当前执行目录的完整路径
console.log(__dirname);
// D:\exces\PracticeCode\Node相关\PATH
let info2 = path.join(__dirname,'sxt','qianduan', 'zhongji')
console.log(info2);
// D:\exces\PracticeCode\Node相关\PATH\sxt\qianduan\zhongji
```

> `__filename`：获得当前执行**文件**的带有完整绝对路径的文件名

```js
// 获取当前的执行文件
console.log(__filename);
// D:\exces\PracticeCode\Node相关\PATH\nodePath2.js
```

> `process.cwd()`：获得当前执行**node命令**时候的文件夹目录名

```js
console.log(process.cwd(__filename));
//  D:\exces\PracticeCode\Node相关\PATH
```



#### 2.os

- `os.cpus()`获取操作系统的CPU信息。

```js
let os = require('os')
console.log(os);
```

- `os.totalmem()` 获取整个内存大小

```js
let os = require('os')
console.log(os.totalmem());
```



## URL模块

`url`核心模块在为我们解析url地址时提供了非常方便的API，常见包含有查询字符串的url地址解析。

1. `url.parse()`：可以解析一个url地址，通过传入第二个参数（`true`）把包含有查询字符串的query转换成对象。

```js
let httpUrl = "https://sale.vmall.com/hwmate.html?cid=10602"
let urlObj = url.parse(httpUrl)
console.log(urlObj);
/*
Url {
  protocol: 'https:', // 协议
  slashes: true,
  auth: null,
  host: 'sale.vmall.com',
  port: null,
  hostname: 'sale.vmall.com',  // 主机名
  hash: null, // 哈希值
  search: '?cid=10602',
  query: 'cid=10602',
  pathname: '/hwmate.html',
  path: '/hwmate.html?cid=10602',
  href: 'https://sale.vmall.com/hwmate.html?cid=10602'
}
*/
```

2.`url.resolve()`解析相当于基URL的目标URL。第一个参数：基URL，第二个参数：目标URL。

```js
let targetUrl = "http://www.taobao.com/"
httpUrl = "./sxt/qianduan/laochen.html"

let newUrl = url.resolve(targetUrl,httpUrl)
console.log(newUrl);
// http://www.taobao.com/sxt/qianduan/laochen.html
```



## http模块

```js
let http = require('http')
// 创建server服务器对象
const server = http.createServer()
// 监听对当前服务器对象的请求
server.on('request', (req, res) => {
  // 当服务被请求时，会触发请求事件，并传入请求对象和响应对象
  // console.log(req.url);
  // console.log(req.headers);
  res.setHeader('Content-Type','text/html; charset=UTF-8')
  // 根据路径信息，显示不同的页面内容
  if(req.url === '/') {
    res.end('首页')
  } else {
    res.end('国内新闻')
  }
  res.end('helloworld')
})

// 服务器监听的端口
server.listen(80, () => {
  // 启动监听端口号成功时触发
  console.log("服务器启动成功");
})
```

## 总结

Node: 一门后端语言（服务器的程序语言），能够连接数据库存取数据，能够接受和处理网络请求（服务器的响应，发送请求去获取数据），事件驱动，异步执行，不等待提高IO（input和ouput）的处理速度和效率。

服务器：本质上是一台PC主机（linux系统，windows系统），部署了后端语言的执行环境，并且能够长时间提供网络服务。

### 事件驱动

node本身提供了事件对象，帮助我们快速订阅者模式，或者观察者模式，或者事件模式

```js
// 事件的订阅
event.on('林俊杰演唱会', () => { 订阅门票 })
// 事件的触发
event.emit('林俊杰演唱会')
```

### 读写事件

```js
fs.readfile('path',读取配置,(err,data) => {})
fs.writeFile('path',写入数据,写入配置,() => {})
```









