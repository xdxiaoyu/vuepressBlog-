# JavaScript
## 一.什么是JavaScript

### 1、JavaScript历史

​	1995年，JavaScript诞生于网景公司一位Brenda Eich的工程师手上

​	1998年，ISO和IEC将ECMAScript采纳为标准（ISO/IEC-16262）。自此以后，各家浏览器均已ECMAScript作为自己JavaScripe实现的依据，虽然具体实现各有不同。



### 2、JavaScript实现

​	虽然JavaScript和ECMAScript基本上是同义词，但是JavaScript远远不限于ECMA-262所定义的那样。完整的JavaScript实现包含以下几个部分：

- 核心（ECMAScript）
- 文档对象模型（DOM）
- 浏览器对象（BOM）

#### 2.1、ECMAScript

​	ECMAScript，即ECMA-262定义的语言，并不局限于Web浏览器。事实上，这门语言没有输入和输出之类的方法。ECMA-262将这门语言作为一个基准来定义，以便在它之上再构建更稳健的脚本语言。Web浏览器只是ECMAScript实现可能存在的一种**宿主环境**。宿主环境提供ECMAScript的基准实现和与环境自身交互必须的扩展。扩展（比如DOM）使用ECMAScript核心类型和语法，提供特定于环境的 额外功能。其他宿主环境还有服务端JavaScript平台Node.js和即将被淘汰的Adobe Flash。

> 如果不涉及浏览器的话，ECMA-262到底定义了什么？在基本的层面，它描述这门语言的如下部分：
>
> - 语法
> - 类型
> - 语句
> - 关键字
> - 保留字
> - 操作符
> - 全局对象

​	ECMAScript只是对实现这个规范描述的所有方面的一门语言的称呼。JavaScript实现ECMAScript，而Adobe ActionScript同样也实现了ECMAScript。

> ECMA-262第6版本，俗称ES6、ES2015，发布于2015年6月。这一版包含了大概这个规范有史以来最重要的一批增强特性。
>
> .....
>
> ECMA-262第10版本，也称ES10、ES2019，发布于2019年6月。修订内容大家可网上自行查阅。
>
> ECMA-262第11版本，也称ES11、ES2020，发布于2020年6月。修订内容大家可网上自行查阅。

#### 2.2、DOM

​	**文档对象模型**（DOM）是一个应用编程接口(API)，用于在HTML中使用扩展的XML。DOM将整个页面抽象为一组分层节点。HTML或XML页面的每个组成部分都是一种节点，包含不同数据。

> DOM通过创建表示文档的树，让开发者可以随性所欲地控制网页的内容和结构。使用DOM API，可以轻松删除、添加、替换、修改节点。

①、为什么DOM是必需的

​	浏览器支持不同形态的动态HTML（DHTML）的情况下，开发者首先可以做到不刷新页面而修改页面外观和内容。这代表web技术的一个巨大进步，但也暴露了很大的问题。由于网景和微软采用不同思路开发DHTML，开发者写一个HTML页面就可以在任何浏览器中运行的好日子就此终结。

​	为了保持Web跨平台的本性，万维网联盟（W3C）开始制定DOM标准进程

#### 2.3、BOM

​	浏览器提供了**浏览器对象模型**（BOM）API，用于支持访问和操作浏览器的窗口。使用DOM，开发者可以操控浏览器显示页面之外的部分。而BOM真正独一无二的地方，当然也是问题最多的地方，就是它是唯一一个没有相关标准的JavaScript实现。

​	HTML5改变了这个局面，这个版本的HTML以正式规范的形式涵盖了尽可能多的BOM特性问题。



### 3、JavaScript的不同版本

> 多数浏览器对JavaScript的支持指的是实现ECMAScript和DOM的程度。



### 4、小结

```js
JavaScript是一门用来与网页交互的脚本语言。
包含以下三个组成部分：

- ECMAScript：由ECMA-262定义并提供核心功能。
- 文档对象模型（DOM）：提供与网页内容交互的方法和接口。
- 浏览器对象模型（BOM）：提供与浏览器交互的方法和接口。
```

> JavaScript的这三个部分得到了五大浏览器（IE、FireFox、Chrome、Safari、Open）不同程度的支持。所有浏览器基本都对ES5（ECMAScript5）提供了完善的支持，而对ES6和ES7的支持度也在不断提升。浏览器对DOM的支持各部相同，但对Level3的支持日益趋于规范。HTML5中收录的BOM会因浏览器而异，不过开发者仍然可以假定存在很大一部分公共特性。



## 二、HTML中的JavaScript

### 1、`<script>`元素

<script>元素有下列8个属性：

- `async`：可选。表示应该立即开始下载脚本，但不能阻止 其他页面动作，比如下载资源或者等待其他脚本加载。只对外部脚本文件有效。
- `charset`：可选。使用`src`属性指定的代码字符集。这个属性很少使用，因为大多数浏览器不在乎它的值。
- `crossorigin`：可选。配置相关请求的CORS（跨域资源共享）设置。默认不使用CORS。`crossorigin="anonymous"`配置文件请求不必设置凭据标志。`crossorigin="use-credentials"`设置凭据标志，意味着出站请求会包含凭据。
- `defer`：可选。表示在文档解析和显示完成后再执行脚本是没有问题的。只对外部脚本文件有效。在IE7及更早的版本中，对行内脚本也可以指定这个属性。
- `integrity`：可选。允许比对接收到的资源和指定的加密签名以验证子资源完整性（SRI，Subresource Intergrity）。如果接收到的资源的签名与这个属性指定的签名不匹配，则页面会报错，脚本不会执行。这个属性可以用于确保内容分发网络（CDN）不会提供恶意内容。
- `src`：可选。表示包含要执行的代码的外部文件。
- `type`：可选。代替`language`，表示代码块中脚本语言的内容类型

`<script>`的使用方式有两种：

1. 通过它直接在网页中嵌入JavaScript代码。

   ```html
   <script>
       function sayHi() {
           console.log("Hi !")
       }
   </script>
   
   包含在<script>内的代码会被从上到下解释。上述例子，被解释的是一个函数定义，并且该函数会被保存在解释器环境中。在 </script> 元素中的代码被计算完成之前，页面的其余内容不会被加载，也不会被显示。
   ```

   

2. 通过它在网页中包含外部JavaScript文件。

   > 要包含外部文件中的JavaScript，就必须使用`src`这个属性。这个属性的值是一个URL，指向包含JavaScript代码的文件。

```html
<script src="example.js"></script>

上述例子在页面中加载了一个名为example.js的外部文件。文件本身只需要包含要放在<script>的起始及结束标签中的JavaScript代码。于解释行内JavaScript一样，在解释外部JavaScript文件时，页面也会阻塞。（阻塞时间也包含下载文件的时间。）在XHTML文档中，可以忽略结束标签，比如：

<script src="example.js">
```



以上语法不能在HTML文件中使用，因为它是无效的HTML，有些浏览器不能正常，比如IE。

> **注意**    按照惯例，外部JavaScript文件的扩展名是js。这不是必需的，因为浏览器不会检查所包含的JavaScript文件的扩展名。这就为使用服务器端脚本语言（如TypeScript，或React的JSX）转译为JavaScript提供了可能性。不过要注意，服务器经常会根据文件扩展来确定响应的正确MIME类型。如果不打算使用.js扩展名，一定要确保服务器能返回正确的MIME类型。
>
> MIME类型：是设定某种[扩展名](https://baike.baidu.com/item/扩展名/103577)的[文件](https://baike.baidu.com/item/文件/6270998)用一种[应用程序](https://baike.baidu.com/item/应用程序/5985445)来打开的方式类型，当该扩展名文件被访问的时候，[浏览器](https://baike.baidu.com/item/浏览器/213911)会自动使用指定应用程序来打开。多用于指定一些客户端自定义的文件名，以及一些媒体文件打开方式。



#### 1.1 标签占位符

​	过去，所有的`<script>`元素都被放在页面的`<head>`标签内。对于很多需要JavaScript的页面，这会导致页面渲染的明显延迟，此期间浏览器窗口完全空白。为解决这个问题，现代Web应用程序通常将所有JavaScript引用放在`<body>`元素中的页面内容后面。

```html
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <script src="example.js"></script>  <!-- 之前的写法 -->
    </head>
    <body>
        <!-- 这是页面内容 -->
        
        <script src="example.js"></script>  <!-- 现在的写法 -->
    </body>
</html>

```



#### 1.2 推迟执行脚本

 	HTML 4.01为`<script>`元素定义了一个叫`defer`属性。这个属性表示脚本在执行的时候不会改变页面的结构。因此这个脚本完全可以在整个页面解析完之后再运行。在`<script>`元素上设置`defer`属性，会告诉浏览器应该立即开始下载，但执行应该推迟：

```html
<!DOCTYPE html>
<html>
    <head>
     <title></title>
    </head>
    <body>
        <!-- 这是页面内容 -->
        <script defer src="example.js"></script>
    </body>
</html>

注意  对于XHTML文档，指定defer属性时应该写成defer="defer"。
```



#### 1.3 异步执行脚本

​	HTML5位`<script>`元素定义了`async`属性。从改变脚本处理方式上看，`async`属性与`defer`类似。当然，它们两者也都只适用于外部脚本，都会告诉浏览器立即开始下载。不过，与`defer`不同的是，标记`async`的脚本并不保证它们出现的次序执行

```html
<!DOCTYPE html>
<html>
    <head>
    <title></title>
    </head>
    <body>
        <!-- 这是页面内容 -->
        <script async src="example.js"></script>
        <script async src="example2.js"></script>
    </body>
</html>

<!--
	在这个例子中，第二个脚本可能先于第一个脚本执行。因此，重点在于它们之间没有依赖关系。给脚本添加async属性的目的是告诉浏览器，不必等脚本下载和执行完后再加载页面，同样也不必等到该异步脚本下载和执行后再加载其他脚本。正因为如此，脚步脚步不应该在加载期间修改DOM。
-->

注意  对于XHTML文档，指定async属性时应该写成async="async"。
```



#### 1.4  动态加载脚本

​	除了`<script>`标签，还有其他方式可有加载脚本。因为JavaScript可以使用DOM API， 所以通过向DOM中动态添加`<script>`元素同样可以加载指定脚本。只要创建一个`<script>`元素并将其添加到DOM即可。

```js
let script = document.createElement('script');
script.src = 'gibberish.js';
document.head.appendChild(script);

// 当然，在把HTMLElement元素添加到DOM且执行到这段代码之前不会发送请求。默认情况下，以这种方式创建的<script>元素是以异步方式加载的，相当于添加了async属性。不过这种做可能会有问题，因为所有浏览器都支持createElement()方法，但不是所有浏览器都支持async属性。因此，如果要统一动态脚本的加载行为，可以明确将其设置为同步加载：

let script = document.createElement('script');
script.src = 'gibberish.js';
script.async = false;
document.head.appendChild(script);

// 以这种方式获取的资源对浏览器预加载器是不可见的。这会严重影响它们在资源获取队列中的优先级。根据应用程序的工作方式以及怎么使用，这种方式可能会严重影响性能。要想让预加载器知道这些动态请求文件的存在，可以在文档头部显式声明它们：

<link rel="preload" href="gibberish.js">
```



#### 1.5 XHTML中 的变化

​	可扩展超文本标记语言是将HTML作为XML的应用重新包装的结果。与XHTML不同，在XHTML中使用JavaScript必须指定`type`属性且值为`text/javascript`。解析 `a < b`语句中的小于号（`<`）会被解析成一个标签的开始，并且由于作为标签开始的小于号后面不能有空格，这样会导致语法错误。避免XHTML中这种语法错误的方式有两种。

> 第一种是把所有小于号（`<`）都替换成对应的HTML实体形式（`&lt;`）

```html
<script type="text/javascript">
    function compare(a,b) {
        if (a &lt; b) {
            console.log("A")
        } else if (a > b) {
            console.log("B")
        } else {
            console.log("AB")
        }
    }
</script>
```



> 第二种是把所有代码都包含到一个CDATA块中。在XHTML（及XML）中，CDATA快表示文档中可以包含任意文本的区块，其内容不作为标签来解析，因此可以在其中包含任意字符，包括小于号，且不会引发语法错误。使用CDATA格式如下：

```html
<script type="text/javascript"> <![CDATA[
    function compare(a,b) {
        if (a &lt; b) {
            console.log("A")
        } else if (a > b) {
            console.log("B")
        } else {
            console.log("AB")
        }
    }
]]></script>

在兼容XHTML的浏览器中，这样能解决问题。但在不支持CDATA块的非XHTML兼容浏览器中则不行。为此，CDATA标记必须使用JavaScript注释来抵消。

<script type="text/javascript">
//<![CDATA[
    function compare(a,b) {
        if (a &lt; b) {
            console.log("A")
        } else if (a > b) {
            console.log("B")
        } else {
            console.log("AB")
        }
    }
//]]>
</script>

这种格式适用于所有现代浏览器。虽然有点黑科技的味道，但它可以通过XHTML验证，而且对XHTML之前的浏览器也能优雅地降级
```





### 2、行内代码与外部文件

​		虽然可以直接在HTML文件中嵌入JavaScript代码，但通常认为最佳实践是尽可能将JavaScript代码放在外部文件中。不过这个最佳实践并不是明确的强制性规则。推荐使用外部文件的理由如下。

- **可维护性**。 JavaScript代码如果分散到很多HTML页面，会导致维护困难。而一个目录保存所有JavaScript文件，则更容易维护，这样开发者就可以独立于使用它们的HTML页面来编辑代码。
- **缓存**。 浏览器会根据特定的设置缓存所有外部链接的JavaScript文件，这意味着如果两个页面都用到同一个文件，则该文件只需下载一次。这最终意味着页面加载更快。
- **适应未来**。  通过把JavaScript放到外部文件中，就不必考虑用XHTML或前面提到的注释黑科技。包含外部JavaScript文件的语法在HTML和XHTML中是一样的

### 3、文档模式

> 最初文档模式有两种：**混合模式**和**标准模式**，后又出现第三种文档模式：**准标准模式** 

### 4、 <noscrip>元素

​		针对早期浏览器不支持JavaScript的问题，需要一个页面优雅的降级的处理方案。最终，`<noscript>`元素出现，被用于给不支持JavaScript，但对于禁用JavaScript的浏览器来说，这个元素仍然有它的用处。

> `<noscript>`元素可以包含任何可以出现在<body>中的HTML元素，<script>除外。在下列两种情况下，浏览器将显示包含在<noscript>中的内容：
>
> --- 浏览器不支持脚本；
>
> --- 浏览器对脚本的支持被关闭。
>
> 任何一个条件被满足，包含在<noscript>中的内容就会被渲染。否则，浏览器不会渲染<noscript>中的内容。

### 5 、小结

- 要包含外部JavaScript文件，必须将`src`属性设置为要包含文件的URL。文件可以跟网页在同一台服务器上，也可以位于完全不同的域。
- 所有`<script>`元素会依照它们在网页中出现的次序被解释。在不使用`defer`和`async`属性的情况下，包含`<script>`元素中的代码必须严格按次序解释。
- 对不推迟执行的脚本，浏览器必须解释完位于`<script>`元素中的代码，然后才能继续渲染页面的剩余部分。为此，通常应该把`<script>`元素放到页面末尾i，介于主内容之后及</body>标签之前。
- 可以使用`async`属性表示脚本不需要等待其他脚本，同时也不阻塞文档渲染，即异步加载。异步脚本不能保证按照它们在页面中出现的次序执行。
- 通过使用`<noscript>`元素，可以指定在浏览器不支持脚本时显示的内容。如果浏览器支持并启用脚本，则`<noscript>`元素中的任何内容都不会被渲染。



## 三、语言基础

### 1、语法

#### 1.1 区分大小写

​	 首先要知道的是，ECMAScript中一切都区分大小写。无论是变量、函数名还是操作符，都区分大小写。换句话说，变量`test`和变量`Test`是两个不同的变量。



#### 1.2 标识符

​	  **标识符**：就是变量、函数、属性或函数参数的名称。

> 标识符可以由一或多个下列字符组成：

- 第一个字符必须是一个字母、下划线（`_`）或美元符号（`$`）;

- 剩下的其他字符可以是字母、下划线、美元符号或数字。

  按照惯例，ECMAScript标识符使用驼峰大小写形式。例：`firstEscond`

  **注意**    关键字、保留字、`true` 、`false`和`null`不能作为标识符

  

####  1.3 注释

  ECMAScript采用C语言风格的注释，包括单行注释和块注释。

```js
  // 单行注释
  
  /* 这是多行
  注释*/
```



#### 1.4  严格模式

​		  ECMAScript 5增加了严格模式的概念。严格模式是一种不同的JavaScript解析和执行模式，ECMAScript 3的一些不规范写法在这种模式下会被处理。对于不安全的活动将抛出错误。要对整个脚本启用严格模式，在脚本开头加上这一行：

```js
"user strict"
```

​		   虽然看起来像没有赋值给任何变量的字符串，但它其实是一个预处理指令。任何支持的JavaScript引擎看到它都会切换到严格模式。选择这种语法形式的目的是不破坏ECMAScript 3语法。

​		   也可以单独指定一个函数在严格模式下执行，只要把这个预处理指令放到函数体开头即可：

```js
function doSomething() {
    "use strict";
    // 函数体
}

// 所有现代浏览器都支持严格模式。
```



#### 1.5  语句



​		  ECMAScript中的语句以分号结尾。省略分号意味着由解析器确定语句在哪里结尾，如下所示：

```js
let sum = a + b			// 没有加分号也有效，但不推荐
let diff = a - b;		// 加分号有效，推荐

// 记着加分号有助于防止省略造成的问题，比如可以避免输入内容不完整
```

​		 if之类的控制语句只在执行多条语句时要求必须有代码块。不过最佳实践是始终在控制语句中使用代码块，即使要执行的只有一条语句，如下例所示：

```js
// 有效，但容易导致错误，应该避免
if (test)
    console.log(test);

// 推荐
if (test) { console.log(test);
}

// 在控制语句中使用代码块可以让你内容更清晰，在需要修改代码时也可以减少出错的可能性
```



### 2、关键字与保留字

​		ECMA-262描述了一组保留的**关键字**，这些关键字有特殊用途。比如表示控制语句的开始和结束，或者执行特定的操作。按照规定，保留的关键字不能用座标识符或属性名。ECMA-262第6版规定的所有关键字如下：

```js
berak		do			in			typeof		case		else		instanceof		var	
catch		export		 new		 void		 class		 extends	 return			 while
const		finally		 super		 with		continue	 for		 switch		 	 yield
debugger	function	 this		 default	if			 throw		 delete			import
try
```



### 3、变量

​		ECMAScript变量是松散型的，意思变量是可以用于保存任何类型的数据。每个变量只不过是一个用于保存任意值的命名占位符。有3个关键字可以声明变量： `var`、`const`和`let`。其中, `var`在ECMAScript的所有版本中都可以使用，而`const`和`let` 只能在ECMAScript 6及更晚的版本中使用。

#### 3.1、var关键字

​			①  `var` 声明作用域

​			使用`var`操作符定义的变量会成为包含它的函数的局部变量。比如，使用`var`在一个函数内部定义一个变量，就意味着该变量将在函数退出时被销毁：

```js
function test() {
    var message = "hi"; // 局部变量
}
test()
console.log(message); // 出错
```

​		②  `var`声明提前

​		使用`var`时，下面的代码不会报错。这是因为使用这个关键字声明的变量会自动提升到函数作用域顶部：

```js
function foo() {
    console.log(age);
    var age = 26;
}
foo(); // undefined

// 之所以不会报错，是因为ECMAScript运行时把它看成等价如下代码：

function foo() {
    var age;
    console.log(age);
    age = 26
}
foo(); // undefined
```



#### 3.2、  let 声明

​	`let`跟`var`的作用差不多，但有着非常重要的区别。最明显的区别是，`let`声明的范围是块作用域，而`var`声明的范围是函数作用域。

```js
if (true) {
    var name = 'Matt';
    console.log(name);	// Matt
}
console.log(name);		// Matt

if (true) {
    let age = 26;
    console.log(age);	// 26
}
console.log(age);	// ReferenceError: age没有定义

// 在这里，age 变量之所以不能在if块外部被引用，是因为它的作用域仅限于该块的内部。块作用域是函数作用域的子集。因此适用于var的作用域限制同样也适用于let。
```

​		当然，JavaScript引擎会记录用于变量声明的标识符及其所在块作用域，因此嵌套使用相同的标识符不会报错，而这是因为同一个块中没有重复声明：

```js
var name = 'Nicholas';
console.log(name);	//	'Nicholas'
if (true) {
    var name = 'Matt';
    console.log(name);	//	'Matt'
}


let age = 30;
console.log(age);	//	30
if (true) {
    let age = 26;
    console.log(age);	//	26
}

// 对声明冗余报错不会因混用let和var而受影响。这两个关键字声明的并不是不同类型的变量，它们只是指出变量在相关作用域如何存在。
```

​	①  暂死性死区

​		`let`与`var`的另一个重要的区别，就是`let`声明的变量不会再作用域中被提升。在`let`声明之前的执行瞬间被称为“暂死性死区”，在此阶段引用任何后面才声明的变量都会抛出`ReferenceError`。

​	②  全局声明

​		 与`var`关键字不同，使用`let`在全局作用域中声明的变量不会成为`window`对象的属性（`var`声明的变量则会）。

```js
var name = 'Matt';
console.log(window.name);	// 'Matt'

let age = 26
console.log(window.age);	//  undefined

// 不过，let声明仍然是在全局作用域中发生的，相应变量会在页面的生命周期内存续。因此，为了避免SyntaxError,必须确保页面不会重复声明同一个变量。
```

​		

​		③  条件声明

​			 在使用`var`声明变量时，由于声明会被提升，JavaScript引擎会自动将多余的声明在作用域顶部合并为一个声明。因为`let`的作用域是块，所以不可能检查前面是否已经使用`let`声明过变量，同时也就不可能在没声明的情况下引用它



​		④  `for`循环中的`let`声明

> 在`let`出现之前，`for`循环定义的迭代变量会渗透到循环外部：

```js
for (var i = 0; i < 5; ++i) {
    // 循环逻辑
}
console.log(i); // 5
```



> 改成使用`let`之后，这个问题就消失了，因为迭代变量的作用域仅限于`for`循环内部：

```js
for (let i = 0; i < 5; ++ i) {
    // 循环逻辑
}
console.log(i);  // ReferenceError: i没有定义
```



​			在使用`var`的时候，最常见的问题就是对迭代变量的奇特声明和修改：

```js
for (var i = 0; i < 5; i++ ) {
    setTimeout(() => console.log(i), 0)
}
// 你可能以为会输出0、1、2、3、4
// 实际上会输出5、5、5、5、5

// 之所以会这样，是因为在退出循环时，迭代变量保存的是导致循环退出的值：5。在之后执行超时逻辑时，所有的 i 都是同一个变量，因而输出的都是同一个最终值。


// 而在使用 let 声明迭代变量时，JavaScript引擎在后台会为每个迭代循环声明一个新的迭代变量。每个 setTimeout 引用的都是不同的变量实例，所以 console.log 输出的是我们期望的值，也就是循环执行过程中每个迭代变量的值。
for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0)
}
// 会输出0、1、2、3、4
```



#### 3.3、const声明

​		`const`的行为与`let`基本相同，唯一一个重要的区别是用它声明变量时必须同时初始化变量，且尝试修改`const`声明的变量会导致运行时错误。

```js
// const声明的作用域也是块
const name = 'Matt';
if (true) {
    const name = 'Nicholas';
}
console.log(name); // Matt
```

> `const`声明的限制只适用于它指向变量的引用。换句话说，如果`const`变量引用的是一个对象，那么修改这个对象内部的属性并不违反`const` 的限制。

```js
const person = {}
person.name = 'Matt'; // ok
```





#### 3.4、声明风格及最佳实践

​		ECMAScript 6增加`let`和 `const`从客观上为这门语言更精确地声明作用域和语义提供了更好的支持。从行为怪异的`var`所造成的各种问题，新的有助于提升代码质量的最佳实践也逐渐显现。

​		①、不使用`var`

​				限制自己只使用`let`和`const`有助于提升代码质量，因为变量有了明确的作用域、声明位置以及不变的值。

​		②、`const`优先，`let`次之

​				使用`const`声明可以让浏览器运行时强制保持变量不变，也可以让静态代码分析工具提前发现不合法的赋值操作。应优先使用`const`来声明变量，只在提前知道未来会有修改时，再使用`let`。这样能让开发者更有信心地推断某些变量的值永远不会变，同时也能迅速发现因意外赋值导致的非预期行为。	



### 4、数据类型

​			ECMAScript有6种简单数据类型（也称为原始类型）：`Undefined` 、`Null`、`Boolean`、`Number`、`String`和`Symbol`。`Symbol`（符号）是ECMAScript 6新增的。还有一种复杂数量类型叫 `Object`（对象）。`Object`是一种无序名值对的集合。因为在ECMAScript中不能定义自己的数据类型，所有值都可以用上述7种数据类型之一来表示。只有7种数据类型似乎不足以表示全部数据。但ECMAScript的数据很灵活，一种数据类型可以当作多种数据类型来使用。

#### 4.1  `typeof`操作符

​		`typeof`在某些情况下返回的结果可能会让人费解，但技术上讲还是正确的。比如，调用`typeof null`返回的是`object`。这是因为特殊值`null`被认为是一个空对象的引用。

> 严格来讲，函数在ECMAScript中被认为是对象，并不代表一种数据类型。可是，函数也有自己特殊的属性。为此，就有必要通过`typeof`操作符来区分函数和其他对象。

#### 	

#### 4.2	`Undefined`类型

​			`Undefined`类型只有一个值，就是特殊值`undefined`。当用`var`或`let`声明了变量但没有初始化时，就相当于给变量赋予了`undefined`值。

> 包含undefined值的变量跟未定义变量是有区别的。

```js
let message;		// 这个变量被声明了，只是值为undefined

// 确保没有声明过这个变量
// let age

console.log(message);	// "undefined"
console.log(age);		// 报错
```

> 在对未初始化的变量调用`typeof`时，返回的结果是`undefined`，但未声明的变量调用它时，返回的结果还是`undefined`，但对未声明的变量调用它时，返回的结果还是`undefined`

```js
let message;	// 这个变量被声明了，只是值为undefined

console.log(typeof message);	// "undefined"
console.log(typeof age);		// "undefined"

// 无论声明还是未声明，typeof返回的都是字符串"undefined"。逻辑上讲这是对的，因为虽然严格来讲这两个变量存在根本性差异，但它对任何一个变量都不可能执行什么真正的操作。
```



#### 4.3	`Null`类型

​				`Null`类型同样只有一个值，即特殊值`null`。逻辑上讲，`null`值表示一个空对象指针，这也是`typeof`传一个`null`会返回`object`的原因：

```js
let car = null;
console.log(typeof car);	// "object"
```



#### 4.4 `Boolean`类型

​			`Boolean`（布尔值）类型是ECMAScript中使用最频繁的类型之一。



#### 4.5 `Number`类型

​			ECMAScript中最有意思的数据类型或许就是`Number`了。`Number`类型使用IEEE 754格式表示整数和浮点值。

​			①、浮点值

​				浮点值的精确度最高可达17位小数，但在算术计算中远不如整数精确。例如，0.1+0.2得到的不是0.3，二是0.300 000 000 000 000 04。由于这种微小的舍入错误，导致很难测试特定的浮点值。	

> **注意**	之所以存在这种舍入错误，是因为使用了IEEE 754数值，这种错误并非ECMAScript所独有。其他使用相同格式的语言也有这个问题。

​			

​			②、值的范围

​				由于内存的限制，ECMAScript并不支持表示这个世界上的所有数值。ECMAScript可以表示的最小数值保存在`Number.MIN_VALUE`中，这个值在多数浏览器中是5e-324；可以表示的最大数值保存在`Number.MAX_VALUE`中，这个值在多数浏览器中是1.7976932349623157e+308。如果某个计算得到的数值超出了JavaScript可以表示的范围，那么这个数值会被自动转换为一个特殊的`Infinity`（无穷）值。负无穷大：-Infinity，正无穷大：Infinity。

> 要确定一个值是不是有限大，可以使用`isFinite()`



#### 4.6 `String`类型

​		`String`数据类型表示零或多个16位Unicode字符序列。

​		`null`和`undefined`值没有`toString()`方法，而`String()`方法有



#### 4.7 `Symbol`类型

​		`Symbol`是ECMAScript6新增的数据类型。符号是原始值，且符号实例唯一、不可变的。符号的用途是确保对象属性使用唯一标识符，不会发生属性冲突的危险。



#### 4.8 `Object`类型

​		`ECMAScript`中的对象其实就是一组数据和功能的集合。对象通过`new`操作符后跟对象类型的名称来创建。通过创建`Object`类型的实例来创建自己的对象，给对象添加属性和方法。





### 5、操作符

#### 5.1 一元操作符

> 只操作一个值的操作符



​	①、递增/递减操作符

```js
num++   //  先使用num再执行+1
++num   //  直接使用num+1后的值
(--) 同上
 
let s1 = '2';
let s2 = 'z';
let b = false;
let f = 1.1;
let o = {valueOf() { return -1; }};

s1++ // 3，字符串有效数值形式- 转换为数值再应用改变，变量类型变为数值。
s2++ // NaN，字符串非有效数值形式- 转换为`NaN`，变量类型变为数值。
b++ // 1，布尔值- false转换为0，true转换为1,变量类型变为数值。
f-- // 0.1000000000000009(因为浮点型不精准)，浮点型- 加1或减1.
o-- // -2，对象会调用`valueOf()`方法获取可以操作的值。得到值对应上述规则。如果`NaN`，调用`toString`并再次应用上述规则。 
```



​	②、一元加减

> 一元加减由（+ -）表示，放在变量前头，对数值没任何影响



#### 5.2 位操作符

> 用于数值的底层操作，也就是操作内存中表示数据的比特（位）

​	

①、按位非

> 用（~）表示，它的作用是对数值取反并减一。

```js
let num1 = 25; // 二进制
let num2 = ~num1; // -26

// 和下面操作一样
-num1 - 1 // -26
// 虽然返回结果一样，但是位操作符的速度快的多，因为位操作是在数值的底层表示上完成的。
```



②、按位与

> 用（&）表示，按位与操作在两个位都是1时返回1，在任何一位是0时返回0

```js
let result = 25 & 3;
console.log(result) // 1

// 二进制计算过程：
	25 = 0000 0000 0000 0000 0000 0000 0001 1001
  	 3 = 0000 0000 0000 0000 0000 0000 0000 0011
   AND = 0000 0000 0000 0000 0000 0000 0000 0001
// 结果为 1
```



③、按位或

> 用（|）表示，按位或操作在至少一位是1时返回1，两位都是0时返回0

```js
let result = 25 | 3;
console.log(result) // 27

// 二进制计算过程：
	25 = 0000 0000 0000 0000 0000 0000 0001 1001
  	 3 = 0000 0000 0000 0000 0000 0000 0000 0011
   AND = 0000 0000 0000 0000 0000 0000 0001 1011
// 结果为 27
```



④、按位异或

> 用（^）表示，按位异或只在一位上是1的时候返回1（两位都是1或0，则返回0）

```js
let result = 25 ^ 3;
console.log(result) // 26

// 二进制计算过程：
	25 = 0000 0000 0000 0000 0000 0000 0001 1001
  	 3 = 0000 0000 0000 0000 0000 0000 0000 0011
   AND = 0000 0000 0000 0000 0000 0000 0001 1010
// 结果为 26
```



⑤、左移

> 用（<<）表示，会按照指定的位数将数值的所有位向左移动。

⑥、有符号右移

> 用（>>）表示，会将数值的所有32位都向右移，同时保留符号。

⑦、无符号右移





#### 5.3 布尔操作符

