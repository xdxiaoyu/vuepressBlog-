# MongoDB
## 1、关于MongoDB

MongoDB是面向文档型的数据库

在MySQL里面我们是一个个的数据表，但是在MongoDB里面是一个个的集合，集合里面是一个个文档。

在MySQL里面的数据表中是一行一行的数据，但是在MongoDB里面的文档是一个对象的集合，每个对象类似一行的数据。

MongoDB是以键值对的形式保存数据的。



## 2、MongoDB的安装

在MongoDB的安装目录下的bin下有两个重要的程序。

`mongo.exe`和`mongod.exe`

其中`mogod.exe`是启动MongoDB的程序。程序启动后运行`mogo.exe`，然后就可以在特定的MongoDB命令行中执行指令进行数据的增删改查。



MongoDB的启动指令：（E:\MobgoDB\data 自己存放数据库的位置）

```js
.\mongod.exe --dbpath E:\MobgoDB\data

// 然后运行
mongo.exe 就可以执行mongoDB的指令了
```



## 3、MongoDB一些指令

### 3.1、常用指令

```js
show dbs // 查看已经存在的数据库

use 数据库名 // 切换到指定的数据库（无论数据是否存在 均可切换成功）

db // 查看当前数据库

db.getCollectionNames() // 查看当前数据库下一共有哪些文档集合

db.集合名.insert(文档) // 向指定的集合录入一条文档(如果不存在会自动创建)
// 例如：db.user.insert({user:"lol",age:18})

db.集合名.insert([文档1，文档2]) // 向指定的集合插入多条文档
// 例如：db.suer.insert([{user:"love",age:10},{user:"noLove",age:20}])

// 插入多条数据或单条数据的其他写法
// db.集合名.insertMany([文档1，文档2])
// db.集合名.insertOne(文档)
db.users.insert([
    {username:"马云",age:58,height:167,friends:["马化腾","许家印","雷军","李彦宏","柳传志"]},
    {username:"许家印",age:52,height:177,friends:["马化腾","雷军","柳传志"]},
    {username:"雷军",age:48,height:174,friends:["马化腾","董明珠","柳传志"]},
    {username:"雷德承",age:18,height:180,friends:["马化腾","王健林","柳传志"]},
    {username:"王思聪",age:32,height:179,friends:["林更新","林缓存","陈赫","雷军"]}
])
```



### 3.2、查询语句

> 查询的方式都是以对象的形式查询的

```js
db.集合名.find() // 查询指定的集合内所有数据


// 查询指定字段
db.集合名.find({筛选条件},{显示字段})

// 显示字段
// 显示user字段，不显示_id字段
db.user.find({},{_id:0,user:1}) // 1则显示该字段值，0则不显示该字段值

// 筛选条件
// 条件格式： 属性名：{条件操作符：值}
// 条件操作符
//		$gt：大于
//		$gte：大于等于
//		$lt：小于
//		$lte：小于等于
//		$in：包含其中任意一个 注意 $in操作符的值必须为数组类型
//		$all：包含所有 $all操作符的值必须为数组类型
//		$nin：不包含其中任意一个 $nin操作符的值必须为数组类型
//		$ne：不等于
//		$not：对已定于好的条件进行取反 {属性: {$not: {条件}}}
//		$mod：取模（取余）   $mod: [x,y] 取所有除x雨y的值
db.user.find({age:{$gt:35}},{_id:0}) // 筛选条件为年龄大于35
db.user.find({friends:{$in:['林更新']}}，{_id:0}) // 筛选条件为friends字段包含字段有林更新的。
db.user.find({friends:{$in:['林更新','雷军']}},{_id:0}) // 筛序条件为friends字段有林更新或者有雷军的
db.user.find({friends:{$all:['马化腾','雷军']}},{_id:0}) // 筛选条件为friends字段同时包含马化腾和雷军
db.user.find({friends:{$nin:['马化腾','雷军']}},{_id:0}) // 筛选条件为friends字段不包含马化腾或者雷军
db.user.find({age:18},{_id:0}) // 筛选条件为age为18的文档
db.user.find({age:{$ne:18}},{_id:0}) // 筛选条件为age不为18的文档
db.user.find({age:{$not:{$gt:18}}},{_id:0}) // 筛选条件为age不大于18
db.user.find({age:{$mod[3,0]}},{_id:0}) // 筛选条件为age/3余数为0的文档


// 模糊查询
// https://blog.csdn.net/comhaqs/article/details/23822479

1、db.goods.find({name:/joe/ig})
2、db.goods.find({name:{$regex:/joe/ig}})
3、db.goods.find({goodsName:{$regex:'joe',$option:'ig'}})
var reg = new RegExp("joe","ig")
4、db.goods.find(name:reg)
5、db.goods.find({name:{$regex:reg}})
// 以上5中写法均可
```



**条件”且“和”或“**

```js
// 条件: 且
db.user.find({条件1},{条件2}, {_id:0})
// db.user.find({age:{$gt:25}},{friends:{$in:['雷军']}},{_id:0}) // age大于35并且friends中有雷军

// 条件：或
db.user.find({$or:[{条件1},{条件2}]},{_id:0})
 // db.user.find({$or:[{age:{$gt:35}},{frineds:{$in:['雷军']}}]},{_id:0}) // age大于35或者friends中有雷军

// 条件：且和或都有
db.user.find({条件1,$or:[{条件1},{条件2}]},{_id:0}) // 满足条件1，并且满足条件2或者条件3中的一个
// db.user.find({age:{$gt:30},$or:[{height:{$lt:175}},{friends:{$in:["许家印"]}]},{_id:0}) // age大于30，并且身高小于175或者friends中有许家印
```



**其他条件操作**

```js
.limit(n) // 取满足条件的头n条数据
.skip(n) // 跳过n条数据再取数据
.count() // 对满足条件的数据进行计数
.sort({第一排序条件,第二排序条件,.....}) // 按照属性进行排序
.skip(m).limit(n) // 跳过m条数据 再取头n条数据（调用顺序没有讲究，但是作用效果均为先条过数据再取数据）

// 示例
db.user.find({},{_id:0}).limit(3) // 取user集合中所有文档的前3个
db.user.find({},{_id:0}).limit(3).skip(3) // 取user集合中跳过前三个后取目前文档的前3个
// 先排序再跳过在截取
db.user.find({},{_id:0,age:1}).sort({age:1}) // 按照age升序排列（正数为升序）
db.user.find({},{_id:0,age:1}).sort({age:-1}) // 按照age降序排列（负数为降序）
db.user.din({},{_id:0,age:1,height:1}).sort({age:1,height:1}) // 按age升序排列，如果年龄相同，按身高升序排列
db.user.find({age:{$gt:35}},{_id:0}).count((err,count) => {console.log(count)}) // 统计age大于35的文档个数

// 设计翻页的时候，一般会这么用
db.suer.find().limit(y).skip((x-1)*y)
```



### 3.3、修改语句

> `db.集合名.update(query,{修改器: {属性:值}},option)`
>
> option为可选参数，为对象类型，其下有两个属性：
>
> ​	`multi`：布尔值，是否修改所有符合条件的数据，默认false
>
> ​	`upsert`：布尔值，当没有符合条件的数据时，是否创建该数据，默认false

```js
// 修改器
//   $set：重新赋值
// 	 $inc：对值进行叠加(值为正)或递减(值为负)适用于数字类型的值
// 	 $unset：删除整个属性(包括属性名及属性值)

// 数字修改器
// 	 $push：给数组类型的值添加一个新元素
// 	 $addToSet：给数组类型的值添加一个新元素（该方法不会重复添加已存在的值，同时也不会影响原来已经存在的重复值）
// 	 $pop：从尾部删除一条数据（值的大小不会对结果产生影响 永远只会操作一条数据）（值为正 从尾部删除一条数据 值为负 从头部删除一条数据）
// 	 $pull：按条件删除数据内元素  {$pull:{属性:值}} 删除指定值的元素


// 示例
db.user.update({username:'马云'},{$set:{age:55}}) // 设置马云文档的age为55
db.user.update({username:'马云'},{$inc:{age:2}}) // 设置马云的age在原来的基础上+2，如果是-2的话是减2
db.user.update({username:'马云'},{$unset:{age:1}}) //  删除马云的age属性，这里age设置的值可以任意
db.user.update({username:'马云'},{$push:{friends:'Daotin'}}) // 给马云的friends属性的最后增加一个值为'Daotin'
db.user.update({username:'马云'},{$pop:{friends:0}}) // 给马云的friends属性从最后删除一个值。这里指令friends的值可随意。
db.user.update({username:'王思聪'},{$pull:{friends:'林更新'}}) // 删除王思聪的friends属性中的林更新
```

> 注意：在默认情况下，修改操作只会操作第一条符合条件的数据。



### 3.4、删除语句

> `db.集合名.remove(query,option)`
>
> option：为可选参数，为对象类型，拥有属性
>
> `Justone`：是否只删除第一条符合条件的数据，默认false

```js
// 示例
dn.user.remove({user:'lvonve'}) // 删除user属性值为lvonve的所有文档
```

> 注意：默认情况下 会删除所有符合条件的数据



MongoDB是一种文档导向数据库管理系统，有C++撰写而成

如果你还没有MongoDB的基本知识，可以查看上方学习

## Node链接MongoDB
## 安装驱动

```js
$ cnpm install mongodb
```

## 创建数据库

要在MongoDB中创建一个数据库，首先我们需要创建一个MongoClient对象，然后配置好指定的url和端口号。

如果数据库不存在。MongoDB将创建数据库并建立连接。

## 创建连接

```js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017"

MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology:true},(err,db) => {
    if(err) throw err
    console.log('数据库已创建')
    db.close()
})
```

useNewUrlParser,useUnifiedTopology是使用最新的url解析器，避免mongo报警告错误。

------



## 数据库操作（CURD）

与MySQL不同的是MongoDB会自动创建数据库和集合，所以使用前我们不需要手动去创建

### 插入数据

#### 插入一条数据

> insertOne()

```js
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017"

MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology:true},(err,db) => {
    if(err) throw err
    var dbo = db.db('xiaoyu')
    var myobj = { username:"小羽", type:"帅",like:['唱','跳','开车','搞代码'] }
    dbo.collection("user").insertOne(myobj,(err,res) => {
        if(err) throw err
        console.log('文档插入成功')
        db.close()
    })
})
```



#### 插入多条数据

> insertMany()

```js
var MongoClinet = require('mongodb').MongoClient
var url = "mongodb://localhost:27017"

MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology:true},(err,db) => {
    if(err) throw err
    var dbo = db.db('user')
    var myobj = [
    { username: "小羽", type: "帅", like: ['唱', '跳', '开车', '搞代码'] },
    { username: "吴亦凡", type: "帅", like: ['唱', '跳', '大碗宽面'] },
    { username: "肖战", type: "帅", like: ['唱', '跳', '爱粉丝'] },
  ];
    dbo.collection('users').insertMany(myobj,(err,res) => {
        if(err) throw err
        console.log('插入的文档数量为：'+ res.insertedCount)
        db.close()
    })
})
```



### 查询数据

可以使用find()来查找数据，find()可以返回匹配条件的所有数据。如果未指定条件，find()返回集合中所有数据。

#### find()

```js
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology:true},(err,db) => {
    if(err) throw err
    var dbo = db.db('xiaoyu')
    dbo.collection('user').find({}).toArray((err,result) => {
        // 返回集合中所有数据
        if(err) throw err
        console.log(result)
        db.close()
    })
})
```



#### 查询指定条件

```js
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/";
MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology:true},(err,db) => {
    if(err) throw err
    var dbo = db.db('xiaoyu')
    var whereStr = {username: '小羽'} // 查询条件
    dbo.collection("user").find({whereStr}).toArray((err,result) => {
        if(err) throw err
        console.log(result);
        db.close();
    })
})
```



#### 更新数据

##### 更新一条数据

> updateOne()

```js
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology:true},(err,db) => {
    if(err) throw err
    var dbo = db.db('xiaoyu')
    var whereStr = {username: '小羽'} // 查询条件
    var updateStr = { $set: {"type": "小胖"} }
    dbo.collection("user").updateOne({whereStr,updateStr},(err,result) => {
        if(err) throw err
        console.log('文档更新成功');
        db.close();
    })
})
```

##### 更新多条数据

```js
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology:true},(err,db) => {
     if(err) throw err
    var dbo = db.db('xiaoyu')
    var whereStr = {username: '小羽'} // 查询条件
    var updateStr = {$set:{type: '胸怀天下' }}
    dbo.collection('user').pudateMany(whereStr,updateStr, (err, res) => {
        if (err) throw err;
        console.log(res.result.nModified + " 条文档被更新");
        db.close();
    })
})
```



### 删除数据

#### 删除一条数据

```js
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology:true},(err,db) => {
     if(err) throw err
    var dbo = db.db('xiaoyu')
    var whereStr = {username: '小羽'} // 查询条件
    dbo.collection('user').deleteOne(whereStr, (err, res) => {
        if (err) throw err;
        console.log("文档删除成功");
        db.close();
    })
})
```



#### 删除多条数据

```js
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology:true},(err,db) => {
     if(err) throw err
    var dbo = db.db('xiaoyu')
    var whereStr = {username: '小羽'} // 查询条件
    dbo.collection('user').deleteMany(whereStr, (err, res) => {
        if (err) throw err;
        console.log("文档删除成功");
        db.close();
    })
})
```



### 排序

排序使用sort()方法，该方法接受一个参数，规定是升序(1)还是降序(-1)

例如：

```js
{ type: 1 } // 按 type 字段升序
{ type: -1 } // 按 type 字段降序
```

```js
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology:true},(err,db) => {
     if(err) throw err
    var dbo = db.db('xiaoyu')
    var mysort = {type: 1}
    dbo.collection('user').find().sort(mysort).toArray((err, res) => {
        if (err) throw err;
        console.log(res);
        db.close();
    })
})
```



### 查询分页

如果要设置指定的返回条数可以使用 **limit()** 方法，该方法只接受一个参数，指定了返回的条数。

#### limit()

```js
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology:true},(err,db) => {
     if(err) throw err
    var dbo = db.db('xiaoyu')
    var mysort = {type: 1}
    dbo.collection('user').find().limit(2).toArray((err, res) => {
        if (err) throw err;
        console.log(res);
        db.close();
    })
})
```

#### skip()

```js
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology:true},(err,db) => {
     if(err) throw err
    var dbo = db.db('xiaoyu')
    var mysort = {type: 1}
    dbo.collection('user').find().skip(2).limit(2).toArray((err, res) => {
        // 跳过前面两条数据，读取两条数据
        if (err) throw err;
        console.log(res);
        db.close();
    })
})
```



### 删除集合

我们可以使用drop()方法来删除集合

```js
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology:true},(err,db) => {
     if(err) throw err
    var dbo = db.db('xiaoyu')
    var mysort = {type: 1}
    dbo.collection('user').find().skip(2).limit(2).toArray((err, res) => {
        // 跳过前面两条数据，读取两条数据
        if (err) throw err;
        console.log(res);
        db.close();
    })
})
```



### $lookup 实现左连接(多表查询)

创建集合 orders

```js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

let obj = { _id: 1, product_id: 154, status: 1 }
MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("xiaoyu");
    dbo.collection("orders").insertOne(obj, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
    });
});
```

创建集合 product

```js
MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("xiaoyu");
    var myobj =  [
      { _id: 154, name: '笔记本电脑' },
      { _id: 155, name: '耳机' },
      { _id: 156, name: '台式电脑' }
    ];
    dbo.collection("products").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("插入的文档数量为: " + res.insertedCount);
        db.close();
    });
});
```

使用$lookup查询

```js
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
  if (err) throw err;
  var dbo = db.db("xiaoyu");
  dbo.collection("orders").aggregate([
    {
      $lookup:
      {
        from: 'products',            // 右集合
        localField: 'product_id',    // 左集合 join 字段
        foreignField: '_id',         // 右集合 join 字段
        as: 'orderdetails'           // 新生成字段（类型array）
      }
    }
  ]).toArray((err, res) => {
    if (err) throw err
    console.log(JSON.stringify(res));
    // [{"_id":1,"product_id":154,"status":1,"orderdetails":[{"_id":154,"name":"笔记本电脑"}]}]
    db.close();
  })
});
```









