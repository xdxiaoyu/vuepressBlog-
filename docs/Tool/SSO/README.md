# SSO 

后端：

## jwt实现单点登录

### 问：

```js
1. 什么是 jwt，jwt 缺点有哪些
2. jwt 有哪些部分组成
3. jwt 与 token之间存在哪些区别
4. 如何纯手写一个 jwt
5. jwt 如何设计过期时间
6. jwt 与 oauht2.0之间的区别
7. 基于 jwt+oauht2.0实现单点登录
```

单点登录 SSO
Jwt  json web token
oauht2.0 开发协议

> 写多了，忘了咱们是前端（不要以为走错频道了，我们也要了解一二相关）

## token

### 	特征：

```js
临时且唯一  保证不能重复 缓存有效期机制
```

ex:只能门锁 临时密码 具有有效期，临时且唯一

### 	如何生成：

```js
uuid作为token
```

ex:生成token（uuid生成）作为Rediskey放入redis中，Redis的key作为有效期

### 	如何使用：

```js
token和sessionid非常相似，传统项目使用session存在缺陷：放入到服务端，
seesion	类似redis存放缓存内容
Session 中的 sessionid	类似token
不共享
大的项目都是基于token替代Session，Redis中。
```

用户登录 前后端分离项目

```js
1. 验证账号密码，成功验证的情况下
2. 生成对应token 采用uuid
3. 将该token缓存到redis中，rediskey = token， value userId。
4. 最后返回token给客户端，客户端将token保存到cookie中
```

查询的情况下：

>  客户端每次请求的时候在请求头中传递该token，服务器端接收到Token，从Redis查找对应key对应的value userId。在根据userId查询用户信息返回给客户端。

使用token的情况下依赖于：

> 必须依赖服务端 redis

### 优点：

```js
1. 能够隐藏参数真实性
2. 临时且唯一
```

### 缺点：

```js
1. 依赖于服务端redis，高并发情况下频发查询增加redis压力
```



## Jwt

> Jwt 实际和token基本设计思想一样。

**Jwt：** json web token

> Json：数据交换格式	轻量级、跨语言、减少宽带、可读性高。

### 加密算法：

```js

单向加密 MD5 只能暴力破解但是不可以解密

双向加密（对称加密）aes des

非对称加密 rsa
```

### Jwt主要组成：

```js
第一部分：header头部 标记使用什么算法 HS256，RSA256

第二部分：Payload（载荷）jwt存放的数据

注意不能存放敏感数据



第三部分：PayLoad采用MD5加密之后的签名值
```

### 生成：

```js
Base64.ENcode(header).Base64.ENcode(Payload).签名值
```

### 优点：

```js
1. 减去服务端压力
2. Jwt查询效率比token高
3. 不容易被客户端篡改
```

### 缺点：

```
1. 如果一旦生成好一个jwt之后，后期是否可以销毁.
2. Jwt payload 数据多，占用服务器端带宽资源
```



## Jwt 与 token之间到底有哪些区别

```js
1. token对应的内容存放在Redis中
2. Jwt 对应的payload数据存放在客户端
```





------

## SSO

**上面主要了解到后端具体实现单点登录的做法跟优缺点，下面着重整体讲述单点登录概念实践**

SSO（single sign On）：在多个应用系统中，只需要登录一次，就可以访问其他相互信任的应用系统。



### 技术实现

#### 普通登录

> 再说单点登录（SSO）的技术实现之前，先说一下普通的登录认证机制

```js
我们在浏览器中访问一个应用，这个应用需要登录，我们填写完用户名和密码后，完成登录认证。这时，我们在这个用户的session中标记登录状态为yes（已登录），同时在浏览器中写入Cookie，这个Cooike是这个用户的唯一标识。下次我们在访问这个应用的时候，请求中会带上这个Cookie，服务端会根据这个Cooike找到对应的session，通过session来判断这个用户是否登录。如果不做特殊配置，这个Cooike的名字就叫做sessionId  值在服务端（server）是唯一的
```



#### 同域名下的单点登录

> 同域下的单点登录是巧用了Cookie顶域的特性。

一个企业一般情况下只有一个域名，通过二级域名区分不同的系统。比如我们有一个域名叫：xiaoyu.com，同时有两个业务系统分别叫：app1.xaioyu.com和app2.xiaoyu.com。我们要做单点登录(SSO)，需要一个登录系统，叫做：sso.xiaoyu.com。

我们只要在sso.xiaoyu.com登录，app1.xaioyu.com和app2.xiaoyu.com就也登录了。通过上面的登录认证机制，我们可以知道，在sso.xiaoyu.com中登录了，其实是在sso.xiaoyu.com的服务端的session中记录了登录状态，同时在浏览器端的sso.xiaoyu.com下写入了Cookie。那么我们怎么才能让app1.xaioyu.com和app2.xiaoyu.com登录呢？这里有两个问题：

- Cookie是不能跨域的，我们Cookie的domain属性时sso.xiaoyu.com，在给app1.xaioyu.com和app2.xiaoyu.com发送请求是带不上的。
- sso、app1和app2是不同的应用，他们的session存在自己的应用内，是不共享的

那么我们如何解决这两个问题呢？针对第一个问题，sso登录以后，可以将Cookie的域设置为顶域，即xiaoyu.com，这样子所有子域的系统都可以访问到顶域的Cookie。我们在设置Cookie时，只能设置顶域和自己的域，不能设置其他域。比如：我们不能在自己的系统中给baidu.com的域设置Cookie。

Cookie的问题解决了，我再来看session的问题。我们在sso系统登录了，这时再访问app1、Cookie也逮到了app1的服务端，app1的服务器怎么找到这个Cookie对应的session呢？这里就要把3个系统的Session共享，解决共享Session的方案很多，这是后端需要考虑的问题，例如：Spring-Session。这样第2个问题也解决了。


> 同域下的单点登录就实现了，但这不是真正的单点登录



#### 不同域下的单点登录

> 同域名的单点登录巧用了Cookie顶域的特性。如果是不同域呢？不同域之间Cookie是不共享的，怎么办？

这里我们就要说一说CAS流程，这个流程是单点登录的标准流程。

**具体流程：**

```js
1. 用户访问app系统，app系统需要登录，但用户现在没有登录。
2. 跳转到CAS server，即SSO登录系统。SSO系统也没有登录，弹出用户登录页。
3. 用户填写用户名、密码，SSO系统进行认证后，将登录状态写入SSO的session，浏览器中写入SSO域下的Cookie。
4. SSO系统登录完成后会生成一个ST（Service Ticket），然后跳转到app系统，同时将ST作为参数传递给app系统。
5. app系统拿到ST后，从后台向SSO系统发生请求，验证ST是否有效。
6. 验证通过后，app系统将登录状态写入session并设置app域下的Cookie。

```

至此，跨域单点登录完成了，以后我们再访问app系统时，app系统就是登录的。接下来我们再看看访问app2系统时的流程。

```js
1. 用户访问app2系统，app2系统没有登录，跳转到SSO。
2. 由于SSO已经登录了，不需要重新登录验证。
3. SSO生成ST，浏览器跳转到app2系统，并将ST作为参数传递给app2。
4. app2拿到ST，后台访问SSO，验证ST是否有效。
5. 验证成功后，app2将登录状态写入session，并在app2域下写入Cookie。

这样，app2系统不需要走登录流程，就已经是登录。SSO，app和app2在不同的域，他们之间的session不共享也是没有问题的。
```


## 总结

- 单点登录（SSO系统）是保障各业务系统的用户资源的安全。
- 各个业务系统获得的信息是，这个用户能不能访问我的资源。
- 单点登录，资源dou7zai各个业务系统这边，不在SSO那一方。用户在给SSO服务提供了用户名密码后，作为业务系统不知道这件事。SSO随便给业务系统一个ST，那么业务系统是不能确定这个ST是用户伪造的，还是真的有效，所以要拿着这个ST去SSO服务器再问一下，这个用户给我的ST是否有效，是有效的我才让这个用户访问。























