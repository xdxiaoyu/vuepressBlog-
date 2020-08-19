# ES7-10



## Array

### ES7数组如何判断元素是否存在

```JavaScript
const arr = [1, 2, 3, 4, 5, 6, 7]
arr.includes(4) // true
```



## Math

### ES7数学乘方如何简写

```javascript
// 之前的做法
console.log(Math.pow(2,5));
//32

console.log(2 ** 5); // Math.pow()的简写
// 32
```





# ES8



## Async\Await

### await 只能出现在saync函数中

```javascript
// 用一个小栗子演示一下async和Await的使用
// 使得下面两个函数顺序执行。先准备好，再出去玩。
function wait() {
    setTimeout(() => {
        console.log('朋友准备中....')
    },1000)
}
function go() {
    console.log('朋友准备完毕，一起出去玩')
}

async function test() {
    let promise = new Promise(resolve => {
        setTimeout(() => {
        	console.log('朋友准备中....')
        	resolve()
        })
    })
    await promise
    await go()
}
```



### async实现原理

> async函数的实现原理，就是将Generator函数和自动执行器，包装在一个函数里。

```

```



### 迭代器和生成器

	> 迭代器（就是遍历器）

> 迭代器是一种特殊对象，它具有一些专门为迭代过程设计的专有接口，所有的迭代器对象都有一个next()方法，每次调用都返回一个结果对象。结果对象有两个属性：一个是value，表示下一个将要返回的值；另一个是done，它是一个布尔类型的值。

```
> 生成器（Generator）
```

> 生成器是一种返回迭代器的函数，通过function关键字后的星号（*）来表示，函数中会用到新的关键字yield.



## String

### 对String补白

> padStart，起始位置补白

```javascript
for (let i = 1; i < 32; i++) {
  console.log(i.toString().padStart(2, '0'));
}
// 01
// 02
// ...
```



> padEnd，末尾位置补白

```javascript
for (let i = 1; i < 32; i++) {
  console.log(i.toString().padEnd(5, '*'));
}
```

## Object

### 描述符

> ES8如何获取Object数据的描述符？

```JavaScript
const data = {
    Lilei： '78/50',
    Lima: '58/40'
}

Object.defineProperty(data, 'Lima', {
    enumerable: false,
    writable: fasle
})

Object.keys(data) //["PortLand", "Dublin"]

Object.getOwnPropertyDescriptors(data)
//PortLand: {value: "78/50", writable: true, enumerable: true, configurable: true}
//Dublin: {value: "88/52", writable: true, enumerable: true, configurable: true}
//Lima: {value: "58/40", writable: false, enumerable: false, configurable: true}

Object.getOwnPropertyDescriptors(data, 'Lima')
//Lima: {value: "58/40", writable: false, enumerable: false, configurable: true}
```





# ES9

## For await of

> ES9中异步操作集合是如何遍历的？

```javascript
// for of 是用来遍历异步操作的（集合含有异步操作，拿不到正确结果）
function Gen(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time)
        },time)
    })
}

async function test() {
    let arr = [Gen(2000), Gen(100), Gen(3000)]
    for await (let item of arr) {
        console.log(Date.now(), item)
    }
}

test()
//1591186908559 2000
//1591186908560 100
//1591186909560 3000
```

> 自定义数据结构异步遍历，该如何操作

```javascript
const obj = {
    count: 0,
    Gen (time) {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve({done: false,value:time})
            },time)
        })
    },
    [Symbol.asyncIterator] () {
    let self = this
    return {
      next() {
        self.count++
        if(self.count < 4) {
          return self.Gen(Math.random() * 1000)
        } else {
          return Promise.resolve({
            done: true,
            value: ''
          })
        }
      }
    }
  }
}
async function test() {
    for await (let item of obj) {
        console.log(new Date(), item)
    }
}

test()
//Wed Jun 03 2020 20:26:08 GMT+0800 (中国标准时间) 534.6221733997855
//Wed Jun 03 2020 20:26:08 GMT+0800 (中国标准时间) 118.35034861243953
//Wed Jun 03 2020 20:26:09 GMT+0800 (中国标准时间) 575.9665993428888
```



## Promise

> finally

```javascript
const Gen = (time) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(time <500) {
                reject(time)
            } else {
                resolve(time)
            }
        })
    })
}
Gen(Math.random() * 1000)
.then(val => console.log('resolve', val))
.catch(err => console.log('reject',err))
.finally(() => { console.log('finsh')})
```

## Object(Rest & Spread)

```javascript
const input = {
    a:1,
    b:2
}
const test = {
    d:1
}
const ouput = {
    ...input, //Spread扩展
    c:3
}
console.log(ouput)
// {a: 1, b: 2, c: 3}

input.a = 4
// 拷贝
console.log(input,output)
// {a: 4, b: 2} {a: 1, b: 2, c: 3}

//Rest 
const input = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
	e: 5
}
const { a, b, ...rest } = input
console.log(a, b, rest)
//1 2 {c: 3, d: 4, e: 5}
```

## RegExp

### dotAll

```javascript
// . 不能匹配换行符
console.log(/foo.bar/.test('foo\nbar')) // false
console.log(/foo.bar/us.test('foo\nbar')) // true
// u 匹配4个字节的汉字

// 判断是否开启dotAll 模式
const re = /foo.bar/s
console.log(re.dotAll)  // true
console.log(re.flags)   // s
```

### 命名分组捕获

```javascript
console.log('2019-06-07'.match(/(\d{4})-(\d{2})-(\d{2})/))
// ["2019-06-07", "2019", "06", "07", index: 0, input: "2019-06-07", groups: undefined]
// index -我们的正则是从第几个字符开始匹配到的
// input -完整的输入字符串

//分组命名捕获
const t = '2019-06-07'.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/)
console.log(t.groups) // {year: "2019", month: "06", day: "07"}
```

### 先行断言

```javascript
let test = 'hello world'
console.log(test.math(/hello(?=\sworld)/))  
//["hello", index: 0, input: "hello world", groups: undefined]
// 匹配hello的时候，紧接着匹配hello后面的东西是否满足条件
// 先遇到一个条件，判断后面的是不是满足-先行断言
```

### 后行断言

```javascript
let test = 'hello world'
console.log(test.match(/(?<=hello\s)world/)) 
//["world", index: 6, input: "hello world", groups: undefined]
console.log(test.match(/(?<!helle\s)world/)) 
//["world", index: 6, input: "hello world", groups: undefined]
```



# ES10

### flat()

```javascript
let arr = [1,[2,3],[4,5,[6,7,[8,9]]]]
//arr.flat()  扁平化，按照一个可指定的深度递归遍历数组
console.log(arr.flat(4))  
//[1,2,3,4,5,6,7,8,9]
```

### flatMap()

```javascript
let arr = [1,2,3]
console.log(arr.map(item => [item*2].flat()))
// [2,4,6]
console.log(arr.flatMap(item => [item*2]))
// [2,4,6]
```

### trim

> 去除空字符串

```javascript
let str ='   foo    '
log(str.trimRight())  // trimEnd  去除末尾空字符串
log(str.trimLeft())  // trimStart  去除末尾空字符串
log(str.trim()) // 去除开头和末尾空字符串
```

### fromEntries

```javascript
const arr = [['foo', 1], ['bar',2]]
log(arr[1][1]) // 2
const obj = Object.fromEntries(arr) // 数组到obj
log(obj.bar) // 2

const obj = {
    abc: 1,
  	def: 2,
	ghksks: 3
}
let res = Object.fromEntries(
	Object.entries(obj).filter(([key,val]) => key.length === 3)
)
log(res) //{abc: 1, def: 2}

```

## Proxy

```javascript
var obj = new Proxy({}, {
  get: function (target, propKey, receiver) {
    console.log(`getting ${propKey}!`);
    return Reflect.get(target, propKey, receiver);
  },
  set: function (target, propKey, value, receiver) {
    console.log(`setting ${propKey}!`);
    return Reflect.set(target, propKey, value, receiver);
  }
});
//上面代码对一个空对象架设了一层拦截，重定义了属性的读取（get）和设置（set）行为
obj.count = 1 // setting count
++obj.count // getting count 、 setting count
```



**ES6原生提供Proxy构造函数，用来生成Proxy实例**

```javascript
var proxy = new Proxy(target, handler)
```

::: tip
Proxy 对象的所有用法，都是上面这种形式，不同的只是handler参数的写法。target参数表示所要拦截的目标对象，handler参数也是一个对象，用来定制拦截行为
:::


```javascript
var proxy = new Proxy({}, {
  get: (target, propkey) => {
    return 35
  }
})

console.log(proxy.time) // 35 
console.log(proxy.name) // 35
console.log(proxy.title) // 35
```

> 上述代码，作为构造函数，Proxy接受两个参数。第一个参数是所要代理的目标对象（上述是一个空对象），即如果没有Proxy的介入，操作原来要访问的就是这个对象；第二个参数是一个配置对象，对于每一个被代理的操作，需要提供一个对应的处理函数，该函数将拦截对应的操作。比如，上面代码中，配置对象有一个get方法，用来拦截对目标对象属性的访问请求。get方法的两个参数分别是目标对象和所要访问的属性。可以看到，由于拦截函数总是返回35，所以访问任何属性都得到35.



# 使用Proxy实现最简单的观察者模式 

```javascript
const person = observable({
    name: '张三',
    age: '20'
})

function print() {
    console.log(`${person.name}, ${person.age + 2}`)
}

observe(print)
person.name = '李四'

// 输出  
// 李四 '20'
```

> 上面代码中，数据对象person是观察目标，函数print是观察者，一旦数据对象发生变化，print就好自动执行



> 下面代码使用Proxy写一个观察者模式最简单的实现，即实现observable和observe两个函数	思路是obersvable函数返回一个原始对象的Proxy代理，拦截赋值操作，触发充当观察者的各个函数

```javascript
const queuedObservers = new Set()

const observe = fn => queuedObservers.add(fn)
const observable = obj => new Proxy(Obj, {set})

function set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver)
    queuedObservers.forEach(observe => observe())
    return result
}
```

> 上面代码先定义一个set集合，所有观察者函数都放进这个集合。然后observable函数返回原始对象的代理，拦截赋值操作，拦截函数set之中，会自动执行所有观察者
