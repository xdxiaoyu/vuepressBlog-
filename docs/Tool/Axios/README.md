# Axios

## 一、HTTP 相关

### 1.HTTP 请求报文

#### ①. 请求行

```javascript
method url

GET

POST
```

#### ② 多个请求头

```javascript
Host: www.baidu.com

Cookie: BAIDUID=ADA21BHF;BIDUPSID=AD3B0FR

Content-Type: application/x-www-form-urlencoded 或者 application/json
```
> `Content-Type` 告诉服务端请求体的内容格式


#### ③ 请求体

```javascript
username=tom&pwd=123

{"username":"tom","pwd":123}
```

### 2.HTTP 响应报文

#### ① 响应状态行

```javascript
status statusText
```

#### ② 多个响应头

```javascript
Content-Type: text/html;charset=utf-8

Set-Cookie: BD_CK_SAM=1;path=/

> 响应什么格式的文本，例(html 格式的文本)
>
> Set-Cookie 服务端携带 session 给客户端
```

#### ③ 响应体

html 文本/json 文本/js/css/图片...

### 3.API 分类

#### 1.REST API: restful

```javascript
(1) 发送请求进行 CRUD 哪个操作由请求方式决定

(2) 同一个请求路径可以进行多个操作

(3) 请求方式会用到 GET/POST/PUT/DELETE
```

#### 2.非 REST API： restless

```javascript
(1) 请求方式不决定请求的 CRUD 操作

(2) 一个请求路径只对应一个操作

(3) 一般只有 GET/POST
```

## 二、XHR 的理解和使用

### 1.理解

① 使用 XMLHttpRequest(XHR)对象可以于服务器交互，也就是发生 ajax 请求。

② 前端可以获取到数据，而无需让整个的页面刷新。

③ 这使得 Web 页面可以只更新页面的局部，而不影响用户的操作。

### 2.区别一般 http 请求与 ajax 请求

① ajax 请求是一种特别的 http 请求

② 对服务端来说，没有任何区别，区别在浏览器端

③ 浏览器发送请求： 只有 XHR 或 fetch 发出的才是 ajax 请求，其它所有的都是非 ajax 请求。

④ 浏览器端接收到响应

​ （1）一般请求：浏览器一般会直接显示响应体数据，也就是我们常说的刷新跳转页面

​ （2）ajax 请求： 浏览器不会对外界进行任何更新操作，只是调用监视的回调函数并传入响应相关数据

### 3.XHR 相关 API

```javascript
1.XMLHttpRequest(): 创建 XHR 对象的构造函数

2.status： 响应状态码值，比如 200,404

3.statusText: 响应状态文本

4.readyState: 标识请求状态的只读属性

​ 0： 初始

​ 1：open()之后

​ 2：send()之后

​ 3：请求中

​ 4：请求完成

5.onreadystatechagnge: 绑定 readyState 改变的监听

6.responseType： 指定响应数据类型，如果是‘json’，得到响应后自动解析响应体

7.response：响应体数据，类型取决于 responseType 的指定

8.timeout: 指定请求超时时间，默认为 0 代表没有限制

9.ontimeout： 绑定超时的监听

10.onerror: 绑定请求网络错误的监听

11.open()" 初始化一个请求，参数为：（method，url[，async]）

12.send(data): 发送请求

13.abort():请求中断

14.getResponseHeader(name): 获取指定名称的响应头值

15.getAllResponseHeader(name): 获取所有响应头组成的字符串

16.setRequestHeader(name, value): 设置请求头
```

## 三、axios 理解和使用

### 1.请求配置

```javascript
{
    // 请求服务器的URL
    url: '/user',

    // method 创建请求使用的方法
    method: 'get'

    // baseURL 将自动加早url前面，除非 url 是一个绝对url
    baseURL: 'https://some-domain.com/api/'

    // 'transformRequest' 允许向服务器发送前，修改请求数据
    // 只能用在 PUT, POST 和 PATH 这几个请求方法
    // 后面数组中的函数必须返回一个字符串，或ArrayBuffer,或 Stream
    transformRequest: [function(data, headers) {
        // 对 data 进行任意转换处理
        return data;
    }]

    //	'transformResponse' 在传递给 then/catch前， 允许修改响应数据
    transformResponse:[function(data) {
        // 对 data 进行任意转换处理
        return data
    }]

    // 'headers' 是即将被发送的自定义请求头
    headers: {	'X-Requested-With': 'XMLHttpRequest' }

    // 'params' 是即将与请求一起发送的URL参数
    // 必须是一个无格式对象(plain object) 或 URLSearchParams对象
    params: {
        ID: 12345
    }

    // 'paramsSerializer'是一个负责 'params' 序列化的函数
    paramsSerializer: function(params) {
        return Qs.stringify(params, {arrayFormat: 'brackets'})
    }

    // 'data' 是作为请求主体被发送的数据
    // 只适用于这些请求方法 PUT POST PATHCH
    // 在没有设置 `transformRequest` 时， 必须以下类型之一：
   	// - string,plain object, ArrayBuffer,ArrayBufferView,URLSearchParams
    // - 浏览器专属： FormData, File, Blob
    // - Node 专属： Stream
    data: {
        firstName: 'Fred'
    }

    // 指定请求超时的毫秒数(0表示无超时时间)
    // 请求超时，请求将被中断
    timeout: 1000

    // 'withCreadentials' 表示跨越请求时是否需要使用凭证
    withCreadentials: true, // default -> false

    // 'adapter' 允许自定义处理请求，以使测试更轻松
    adapter: function(config) {
    	/* */
    }

    // 'auth' 表示应该使用 HTTP 基础验证，并提供凭证
    // 这将设置一个'Authorization' 头，覆写掉现有的任意使用'hedaers'设置的自定义'Authorization'
    auth: {
        username: 'janedoe',
        password: 's00pers3cret'
    }

    //  'responseType' 表示服务器响应的数据类型， 可以是 'arraybuffer', 'blob', 'document', 'json'
    responseType: 'json',

    // 'xsrfCookieName' 是作用于xsrf token 的值得cookie的名称
    xsrfCookieName: 'XSRF-TOKEN'

    // 'onUploadProgress' 允许为上传处理进度事件
    onUploadProgress: function(progressEvent) {
        // Do whatever you want with the native progress event
    }

    // 'onDownloadProgress' 允许为下载处理进度事件
    onDownloadProgress: function(progressEvent) {
        // 对原生进度事件的处理
    }

    // 'maxContentLength' 定义允许的响应内容的最大尺寸
    maxContentLength: 2000

    // 'validateStatus' 定义对于给定的HTTP响应状态码是resolve 或 reject promis
    validateStatus: function(status) {
        return status >=200 && status <300
    }

    // 'maxRedirects' 定义在node.js中 follow的最大重定向数目
    // 如果设置为0， 将不会 follow 任何重定向
    maxRedirects: 5， // default

    // 'proxy' 定义代理服务器的主机名称和端口
    // 'auth' 表示HTTP 基础验证应当用于连接代理，并提供凭证
    // 这将会设置一个 'Proxy-Authorization'头，覆盖掉已有的通过使用`header`设置的自定义
    proxy: {
        host: '127.0.01',
        port: 9000,
        auth: {
            username: 'mikeymike',
            password: 'rapunz3l'
        }
    }

    // 'cancelToken' 指定用于取消请求的 cancel token
    cancelToken: new CancelToken(function(cancel) {

    })
}
```

### 2.响应结构

某个请求的响应包含以下信息

```javascript
{
    // 'data' 由服务器提供的响应
    data: {}

    // 'status' 来自服务器响应的 HTTP 状态信息
    status: 200,

     // 'statusText' 来自服务器响应的HTTP 状态信息
     statusText: 'OK'

    // 'headers' 服务器响应的头
    headers: {}

    // 'config' 是为请求提供的配置信息
    config: {}

    request: {}
}
```

### 3.axios 特点

1.基于 promise 的异步 ajax 请求库。

2.浏览器端/ node 端都可以使用。

3.支持请求/ 响应拦截器。

4.支持取消请求。

5.请求/ 响应数据转换。

6.批量发送多个请求。

### 4.axios.create(config)

1.根据指定配置创建一个新的 axios，也就是每个新 axios 都有自己的配置

2.新 axios 只是没有取消请求和批量发请求的方法，其他所有语法都是一致的

3.为什么要设计这个语法？

​ (1) 需要：项目中有部分按接口需要的配置与另一部分接口需求的配置不太一样，如何处理？

​ (2) 解决：创建 2 个新 axios，每个人都有特有的配置，分别应用到不同要求的接口请求中

### 5.axios 的处理链流程

```js
// 添加请求拦截器（回调函数） -> 后添加先执行
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
```

### 6.取消请求

```js
let cancel  // 用于保存取消请求的函数
getProducts() {
    // 准备发请求前，取消未完成的请求
	if( typeof cancel === 'function' ) {
    	cancel('取消请求')
	}
	axios({
    	url: 'http://localhost:8000/products1',
    	cancelToken: new axios.CancelToken((c) => { // c是用于取消当前请求的函数
    	// 保存取消函数，用于之后可能需要取消当前请求
    	cancel = c;
  	})
	}).then(
    	response => {
        	cancel = null
        	consoel.log('请求成功了')
    	},
    	error => {
        	if(axios.isCancel(error)) {
            	console.log('取消请求的错误')
        	} else { // 请求出错
            	cancel = null
        		console.log(error.message)
        	}
    	}
	)
}

cancelReq() {
    if(type cancel === 'function') {
        cancel('强制取消请求')
    } else {
        console.log('没有可取消的请求')
    }
}
// 调用
cancelReq()
```

## 四、axios 源码阅读解析

### 1.文件目录

​ dist ->打包生成后的文件

​ examples -> 一些例子

​ lib -> 核心文件代码

​ adapters -> 请求相关的文件夹

​ http.js -> node 服务端发送 http 请求

​ xhr.js -> 真正发请求的模块

​ Cancel -> 取消请求相关的文件夹

​ Cancel.js -> 定义的是 Cancel 构造函数

​ CancelToken.js -> 定义的是一个构造函数，执行取消相关的

​ isCancel.js -> 判断一个 error 是不是 cancel 类型错误

​ core -> 核心的一些东西

​ Axios.js -> Axios 构造函数

​ dispathRequest.js -> 分发请求

​ InterceptorManager.js -> 拦截器相关

​ helpers ->工具模块

​ axios.js -> 向外暴露 axios 函数

​ defaults.js -> 默认配置相关的东西

​ index.js -> 外层的入口文件

### 2.axios 与 Axios 的关系

①、从语法上来说：axios 不是 Axios 的实例。

②、从功能上来说：axios 是 Axios 的实例。（1.有自身的属性。2.有他原型链上的方法）

③、axios 是 Axios.prototype 函数 bind()返回的函数

④、axios 作为对象有 Axios 原型对象上的所有方法，有 Axios 对象上所有属性

> 源码中 axios.js 文件

```js
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  // 等同于 Axios.prototype.request.bind(context)
  // bind返回一个新函数，这个新函数内部会调用这个request函数，
  // 简单的理解：axios函数最终找request执行
  // context是Axios的实例，一旦使用了request函数里面的this指向的就是Axios实例
  var instance = bind(Axios.prototype.request, context); // axios

  // 将Axios原型对象上的方法拷贝到 instance上：request()/get()/post()/put()/delete()
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  //  将Axios实例对象上的属性拷贝到instance上：defaults和interceptors属性
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);
```

### 3.instance 与 axios 的区别？

**1.相同：**

（1）都是一个能发任意请求的函数： request(config)

（2）都有发特定请求的各种方法：get()/post()/put()/delete()

（3）都有默认配置和拦截器属性：defaults/interceptors

**2.不同：**

（1）默认匹配的值很可能不一样

（2）instance 没有 axios 后面添加的一些方法：create()/CancelToken()/all()

> 源码中 axios.js 文件

```js
// Factory for creating new instances
axios.create = function create(instanceConfig) {
  // 还是调用了createInstance方法，跟上面一样再走里面一遍
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
// 不一样的地方是axios添加了这些，而axios.create并没有添加这些操作
axios.Cancel = require("./cancel/Cancel");
axios.CancelToken = require("./cancel/CancelToken");
axios.isCancel = require("./cancel/isCancel");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
```

### 4.axios 运行的整体流程？

**主要流程：**

> request(config) == > dispatchRequest(config) ===> xhrAdapter(config)

**request(config)：**

将请求拦截器 / dispatchRequest() / 响应拦截器 通过 promise 链串起来，然后 promise

**dispatchRequest(config) :**

转换请求数据 ===> 调用 xhrAdapter()发请求 ===> 请求返回后转换响应数据.返回 promise

**xhrAdapter(config):**

创建 XHR 对象，根据 config 进行相应设置，发送特定请求，并接收响应数据，返回 promise。

axiso 流程图：

![](https://img2020.cnblogs.com/blog/1639676/202008/1639676-20200805190425070-67870031.png)

#### request(config)

> 源码 axios.js / Axios.js 文件
>
> Promise 通过它的链使用将请求拦截器，发请求的操作，响应拦截器，以及我们的最后请求的成功失败串联起来

```js
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  // Axios.prototype.request.bind(context)
  var instance = bind(Axios.prototype.request, context); // axios

  // Copy axios.prototype to instance
  // 将Axios原型对象上的方法拷贝到 instance上：request()/get()/post()/put()/delete()
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  //  将Axios实例对象上的属性拷贝到instance上：defaults和interceptors属性
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};
```

```js
/**
 * 主要用于发请求的函数
 * 我们使用的axios就是此函数bind()返回的函数
 *
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  ------
  // Promise通过它的链使用将请求拦截器，发请求的操作，响应拦截器，以及我们的最厚请求的成功失败串联起来

  // Hook up interceptors middleware
  // undefined作用：chain后面是两两一组进行调用，有了它作为发请求那一组的reject失败回调,
  // 保证了响应拦截器还是被两两一组返回调用，避免错位
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  // 找到所有的请求拦截器函数，后添加的请求拦截器保存在数组的前面
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  // 后添加的响应拦截器保存在数组后面
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  // 通过promise的then()串连起来所有的请求拦截器/请求方法/ 响应拦截器
  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  // 返回用来指定我们的onResolved和onRejected的promise
  return promise;
};

```

#### dispatchRequest(config)

> 源码 dispatchRequest.js/default.js 文件

```js
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // 对config中的data进行必要的处理转换
  // 设置相应的Content-Type请求头
  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    // 转换数据格式
    config.transformRequest // --对应在defalut文件中
  );

  // Flatten headers
  // 整合config中所有的header
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(
    function onAdapterResolution(response) {
      throwIfCancellationRequested(config);

      // Transform response data
      // 对response中还没有解析的data数据进行解析
      // Json字符串解析为js对象/数组
      response.data = transformData(
        response.data,
        response.headers,
        // 转换数据格式
        config.transformResponse // --对应在defalut文件中
      );

      return response;
    },
    function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);

        // Transform response data
        if (reason && reason.response) {
          reason.response.data = transformData(
            reason.response.data,
            reason.response.headers,
            config.transformResponse
          );
        }
      }

      return Promise.reject(reason);
    }
  );
};
```

```js
// 得到当前环境对应的请求适配器
  adapter: getDefaultAdapter(),

  // 请求转换器
  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    // 如果data是对象，指定请求体参数格式为json，并将参数数据对象转换为json
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  // 响应数据转换器：解析字符串类型的data数据
  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],
```

#### xhrAdapter(config)

> 源码 xhr.js 文件

```js
// 创建XHR对象
var request = new XMLHttpRequest();

// HTTP basic authentication
if (config.auth) {
  var username = config.auth.username || "";
  var password = unescape(encodeURIComponent(config.auth.password)) || "";
  requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
}

var fullPath = buildFullPath(config.baseURL, config.url);

// 初始化请求
request.open(
  config.method.toUpperCase(),
  buildURL(fullPath, config.params, config.paramsSerializer),
  true
);
// buildURL在help文件夹buildURL.js处理请求url

// Set the request timeout in MS
// 指定超时的时间
request.timeout = config.timeout;

// Listen for ready state
// 绑定请求状态改变的监听
request.onreadystatechange = function handleLoad() {
  if (!request || request.readyState !== 4) {
    return;
  }

  // The request errored out and we didn't get a response, this will be
  // handled by onerror instead
  // With one exception: request that using file: protocol, most browsers
  // will return status as 0 even though it's a successful request
  if (
    request.status === 0 &&
    !(request.responseURL && request.responseURL.indexOf("file:") === 0)
  ) {
    return;
  }

  // Prepare the response
  // 准备response对象
  var responseHeaders =
    "getAllResponseHeaders" in request
      ? parseHeaders(request.getAllResponseHeaders())
      : null;
  var responseData =
    !config.responseType || config.responseType === "text"
      ? request.responseText
      : request.response;
  var response = {
    data: responseData,
    status: request.status,
    statusText: request.statusText,
    headers: responseHeaders,
    config: config,
    request: request,
  };

  // 根据响应状态码来确定请求的promise的结果状态（成功/失败）
  settle(resolve, reject, response); // 下方settle.js文件

  // Clean up request
  request = null;
};

// Handle browser request cancellation (as opposed to a manual cancellation)
// 绑定请求中断监听
request.onabort = function handleAbort() {
  if (!request) {
    return;
  }

  reject(createError("Request aborted", config, "ECONNABORTED", request));

  // Clean up request
  request = null;
};

// Not all browsers support upload events
// 绑定上传进度的监听
if (typeof config.onUploadProgress === "function" && request.upload) {
  request.upload.addEventListener("progress", config.onUploadProgress);
}

// 如果配置了cancelToken
if (config.cancelToken) {
  // Handle cancellation
  // 指定用于中断请求的回调函数
  config.cancelToken.promise.then(function onCanceled(cancel) {
    if (!request) {
      return;
    }

    // 中断请求
    request.abort();
    // 让请求的promise失败
    reject(cancel);
    // Clean up request
    request = null;
  });
}

if (!requestData) {
  requestData = null;
}

// Send the request
// 发送请求，指定请求体数据，可能是null
request.send(requestData);
```

> settle.js 文件

```js
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
     // 请求成功
    resolve(response);
  } else {
     // 请求出错
    reject(createError( // 源码createError.js内 创建error对象的函数
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

default.js文件

// 判读状态码的合法性： [200,299]
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
```

### 5.axios 的请求/响应数据转换器是什么？

> 函数

1.请求转换器：对请求头和请求体数据进行特定处理的函数

```js
// 如果data是对象，指定请求体参数格式为json，并将参数数据对象转换为json
if (utils.isObject(data)) {
  setContentTypeIfUnset(headers, "application/json;charset=utf-8");
  return JSON.stringify(data);
}
```

2.响应转换器： 将响应体 json 字符串解析为 js 对象或数组的函数

```js
if (typeof data === "string") {
  try {
    data = JSON.parse(data);
  } catch (e) {
    /* Ignore */
  }
}
```

### 6.response 的整体结构

```js
{
  data, status, statusText, headers, config, request;
}
// 对应源码adapters文件夹的xhr.js
```

### 7.error 整体结构

```js
{
   config,
   request,
   response,
   ...
}
// 对应源码core文件夹的enhanceError.js
```

### 8.如何取消未完成的请求？

1.当配置了 cancelToken 对象时，保存 cancel 函数

（1） 创建一个用于将来中断请求的 cancelPromise

（2） 并定义了一个用于取消请求的 cancel 函数

（3）将 cancel 函数传递出来

2.调用 cancel()取消请求

（1）执行 cancel 函数传入错误信息 message

（2）内部会让 cancelPromise 变为成功，且成功的值为一个 Cancel 对象

（3）在 cancelPromise 的成功回调中中断请求，并让发请求的 promise 失败，失败的 reason 为 Cancel 对象

> 源码 CancelToken.js / xhr.js

```js
function CancelToken(executor) {
  if (typeof executor !== "function") {
    throw new TypeError("executor must be a function.");
  }

  // 为取消请求准备一个promise对象，并保存resolve函数到外部(外部有机会可以使用promise)
  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  // 保存当前token对象
  var token = this;
  // 执行器函数是外部定义，内部调用
  // 立即执行接收的执行器函数，并传入用于取消请求的cancel函数
  // cancel函数是内部定义，外部调用    -》结合上面(axios理解使用第6点一起康康)
  executor(function cancel(message) {
    // 如果token中有reason了，说明请求已取消。 | 这个if后看，先看下面的token.reason
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    // 将token的reason指定为一个Canel对象
    token.reason = new Cancel(message);
    // 将取消请求的promise指定为成功，值为reason
    resolvePromise(token.reason);
  });
}
```

```js
// 如果配置了cancelToken
if (config.cancelToken) {
  // Handle cancellation
  // 指定用于中断请求的回调函数
  config.cancelToken.promise.then(function onCanceled(cancel) {
    if (!request) {
      // 如果请求还没有结束，可以走后面的中断请求
      // 如果请求结束了，直接return，无法走后面的中断请求一系列操作
      return;
    }

    // 中断请求
    request.abort();
    // 让请求的promise失败
    reject(cancel);
    // Clean up request
    request = null;
  });
}
```
