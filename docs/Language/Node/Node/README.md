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


