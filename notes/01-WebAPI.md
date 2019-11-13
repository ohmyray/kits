# WebAPI 大纲 - 讲师备课版



## WebAPI概述

### 目标

能够说出什么是 Web API

### 基本概念

Web : 网页

API : ( Application Programming Interface )应用程序编程接口

WebAPI : 浏览器提供给我们操作浏览器和网页的一套编程接口，其实就是一系列的属性和方法。

#### WebAPI 

浏览器提供的一套操作浏览器功能和页面元素的API，包括 BOM 和 DOM 两部分。

![1496912475691](assets/1496912475691.png)

  

### WebAPI参考手册

MDN 版 Web API手册：https://developer.mozilla.org/zh-CN/docs/Web/API



### 小结

什么事 API ？

```js
参考答案：应用程序编程接口。
```

什么是 WebAPI ?

```js
参考答案：浏览器提供给我们操作浏览器和网页的一套编程接口，其实就是一系列的属性和方法。
```



## DOM

### 目标

能够说出什么是DOM

能够说出节点、元素、属性的概念

### 概念

DOM（Document Object Model）：文档对象模型

把整个网页当做一个文档对象看待，如果要单独操作某个标签，按照提供的方法去查找即可。

#### HTML 源代码

```html
<html>
    <head>
        <title>My Title</title>
    </head>
    <body>
        <a href="">My link</a>
        <h1>
            My header
        </h1>
    </body>
</html>
```

#### DOM 树



![](assets/dom-1555911779962.png)



### WebAPI 常见三个术语

文档	**document**               整个网页在JS中看做是一个网页文档对象

节点	node		  	网页中所有的内容都可以被称为节点，如：HTML标签，注释节点，文本节点...

元素	**element**	  	 元素其实就是之前学习HTML时候的**标签**

### DOM 常见操作

- 获取元素
- 注册事件
- 操作元素

### 小结

什么是DOM？

```js
参考答案：文档对象模型，JS把整个页面看做是一个文档对象。
```



## 获取页面元素

### 目标

能够根据 id 获取元素

能够根据标签名获取元素

### 为什么要获取页面元素

- 需求：把 body 背景色变成红色。
- 编程思维：第一步先找到 body 元素，第二部才能改变 body 背景颜色。

### 获取 body 元素

```js
var body = document.body;
console.log(body);
```

body 是页面内主体标签，有特殊性，可快速获取，但是 div 这类标签就不行。

### 根据 id 名称获取元素

```js
var box = document.getElementById('box');
console.log(box);
```

注意：由于id名具有唯一性，部分浏览器支持直接使用id名访问元素，但不是标准方式，不推荐使用。

### 根据标签名获取元素

```js
var inputs = document.getElementsByTagName('input');
console.log(inputs);
```

注意：通过标签名获取到的数据是伪数组，不管标签是一个还是多个，返回的都是伪数组。

### 补充的查找方式

1. getElementsByClassName
2. querySelector
3. querySelectorAll

### 小结

如何根据id名称获取元素？

```js
参考答案：document.getElementById("id名称");
```

如何根据标签名获取元素？

```js
参考答案：document.getElementsByTagName("标签名称");
```



## 事件

### 目标

能够说出事件三要素

### 为什么要学习事件

- 之前改背景色都是立刻被修改的，事件可以是通过点击按钮才修改背景颜色。

- 事件通常与函数配合使用，这样就可以通过发生的事件来驱动函数执行。

### 概念

事件有 `触发 - 响应` 的特点。

### 事件三要素

- 事件源:   被触发事件的元素，如 当按钮被操作
- 事件类型:  事件的触发方式，如 鼠标点击 或 键盘输入
- 事件处理函数: 事件触发后要执行的代码，如 函数内让 body 变背景色

### 事件的基本使用

```javascript
// 1. 查找事件源
var box = document.getElementById('box');
// 2. 给事件源添加点击事件
box.onclick = function() {
    // 3. 事件处理函数内部执行的代码
    console.log('代码会在box被点击后执行');  
};
```

### 小结

事件三要素分别是？

```js
参考答案：事件源，事件类型，事件处理函数
```

事件书写步骤？

```js
参考答案：1.查找事件源，2.注册事件，3.事件处理函数内写业务代码
```



### 案例参考代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <!-- 给 btn 添加个id名称 -->
    <input type="button" value="点击背景变色" id="btn">
    <script>
        // 1.0 查找元素
        var btn = document.getElementById("btn");
        // 2.0 注册事件/绑定事件/添加事件
        btn.onclick = function(){
            // 3.0 写效果，效果写到函数内，当点击的时候才会执行函数
            var body = document.body;
            body.style.backgroundColor = "pink";
        }

    </script>
</body>
</html>
```



## 开关思想

### 目标

能够使用开关思想切换页面效果。



### 开关思想主要步骤

1. 定义个开关变量。
2. 使用开关变量用于分支语句判断。
3. 修改开关变量的值。



### 参考代码

```js
 		var btn = document.getElementById("btn");
		// 1. 定义个开关变量。
        var bl = true;
        btn.onclick = function(){
            // 2. 使用开关变量用于分支语句判断。
            if( bl ){
                console.log("效果1");
                // 3.1 修改开关变量的值(颠倒)
                bl = false;
            }else{
                console.log("效果2");
                // 3.2 修改开关变量的值(颠倒)
                bl = true;
            }
        }
```

### 小结

开关思想实现步骤？

```
参考答案：1. 定义个开关变量，2.使用开关变量用于分支语句判断，3. 修改开关变量的值
```



## 基本属性操作

### 目标

获取和设置DOM元素的基本属性


### 基本属性

href、title、id、src、**className**

> 特别注意，类名属性的获取和修改需要写成  className。

```javascript
var link = document.getElementById('link');
console.log(link.href);
console.log(link.title);

var pic = document.getElementById('pic');
console.log(pic.src);
console.log(pic.className);
```

### 小结

在 JS 中修改标签属性步骤？

```js
1. 查找元素（标签）
2. 修改属性的值：元素.标签属性名  =  值;
```





## 表单属性操作

### 目标

获取和设置表单元素的属性

### 表单属性

表单常见属性

- value 用于大部分表单元素的内容获取
- type 可以获取input标签的类型

 3 个特殊表单属性，获取的是布尔类型数据。

- disabled 禁用属性
- checked 复选框选中属性
- selected 下拉菜单选中属性

### 小结

1. 普通属性获取到的是字符串类型，设置的时候也是字符串类型数据。如 id,title,src,type,value。
2. 类名获取和设置需要写成 className。
3. 表单 disabled ，checked， selected 这3个特殊属性，获取类型是布尔类型，设置的时候也是布尔类型。



## 自定义属性

### 目标

获取和设置元素的自定义属性

### 自定义属性

```html
<input type="button" value="按钮" id="btn01" data-index="0">
```

> data-* 属性就是自定义属性。

### 自定义属性1

- getAttribute()           获取属性
- setAttribute()           设置属性
- removeAttribute()   移除属性

### 参考代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <!-- 
        在 HTML 标签上可添加自定义属性，格式为  data-属性名 = "值"
     -->
    <input type="button" value="按钮1" id="btn01" data-index="0">
    <input type="button" value="按钮2" id="btn02" data-index="1">
    <input type="button" value="按钮3" id="btn03" data-index="2">

    <script>
        // 1. 查找元素
        var btn01 = document.getElementById("btn01");
        var btn02 = document.getElementById("btn02");
        var btn03 = document.getElementById("btn03");

        // btn01.type
        // 获取属性值
        // getAttribute("属性名称")          获取属性值
        console.log(  btn01.getAttribute("data-index") );
        console.log(  btn01.getAttribute("type") );

        // 设置修改属性
        // setAttribute("属性名称","值");
        btn01.setAttribute("data-index", "666");
        btn01.setAttribute("type", "text");

        // 移除属性
        btn01.removeAttribute("data-index");
        btn01.removeAttribute("type"); 

    </script>
</body>
</html>
```



### 自定义属性2 *

> 只能获取和修改自定义属性。

- 获取自定义属性

```
dataset.属性
```

- 设置自定义属性

```
dataset.属性 = 值;
```

### 参考代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <!-- 
        在 HTML 标签上可添加自定义属性，格式为  data-属性名 = 值
     -->
    <input type="button" value="按钮1" id="btn01" data-index="0" data-text="文本内容">
    <input type="button" value="按钮2" id="btn02" data-index="1">
    <input type="button" value="按钮3" id="btn03" data-index="2">

    <script>
        // 1. 查找元素
        var btn01 = document.getElementById("btn01");
        var btn02 = document.getElementById("btn02");
        var btn03 = document.getElementById("btn03");

        // 获取单个自定义属性，其实就是获取 dataset 对象上的一个值
        console.log( btn01.dataset.index );
        console.log( btn01.dataset.text );

        // 获取该元素上所有的自定义属性，对象类型
        console.log(btn01.dataset);

        // 重新赋值就是修改该自定义属性
        btn01.dataset.index =  "666";

    </script>

</body>
</html>
```

### 小结

基本属性修改？

```js
元素.属性名 = "值"
```

表单属性 disabled，checked，selected 修改？

```js
// 获取到布尔类型数据,设置的时候也是布尔类型。
元素.disabled = true;
元素.disabled = false;
```

自定义属性修改？

1. 获取，修改，移除，   方法

```js
获取：元素.getAttribute("属性名")
修改：元素.setAttribute("属性名","值")
移除：元素.removeAttribute("属性名")
```

2. dataset

```js
获取：元素.dataset.属性名
修改：元素.dataset.属性名 = "值";
```



## 样式属性操作

### 目标

​	操作元素的行内样式
​	操作元素的类属性

### style 属性

style 属性修改行内样式。

```js
var box = document.getElementById('box');
box.style.backgroundColor = 'pink';
```

### className 属性

如果一个页面中已经有写好了的样式,此时就可以使用class的方式来添加样式。

```js
var box = document.getElementById('box');
box.className = 'demo';
// 如果有多个类样式的话,这种操作会给`覆盖掉`
```

### classList 属性 *

添加类，删除类，切换类。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        /* 3.1 把所有要修改的样式，用一个类名统一管理起来 */
        .style01{
            width: 100px;
            height: 100px;
            background-color: #f40;
            font-size: 30px;
            text-align: center;
            line-height: 100px;
        }
    </style>
</head>
<body>
    <input type="button" value="点击给盒子添加背景色" id="btn">
    <div id="box" class="box01 box02">
        盒子
    </div>
    <script>    
        // 需求：点击<按钮>给<盒子>添加背景色
        // 1. 查找元素
        var btn = document.getElementById("btn");
        var box = document.getElementById("box");

        // 2.0 事件绑定
        btn.onclick = function(){
            // 3.0 效果
            // 切换类：元素.classList.toggle("类名称");
            // box.classList.toggle("style01");

            // 添加类名
            // box.classList.add("style01");

            // 删除类名
            // box.classList.remove("box01");

            // 是否包含某个类名称，返回值布尔类型
            var bl = box.classList.contains("box03");
            console.log(bl);
        }

    </script>
</body>
</html>
```

### 小结

如何操作元素的行内样式？

```js
元素.style.单个属性 = 值;
```

如何通过 classList 操作元素的类属性？

```js
添加：元素.classList.add("类名称")

删除：元素.classList.remove("类名称")

切换：元素.classList.toggle("类名称")
```



## 事件处理函数内的 this 

### 目标

在事件处理函数内使用 this

### 概念

基本解释：this 翻译过来是 `这个` 的意思。

功能：在 `事件处理函数内` 的 `this` 指向当前绑定事件的 `这个事件源` 。

### 参考代码

```js
var inputs = document.getElementsByTagName("input");
// 遍历所有的按钮
for(var i=0; i<inputs.length; i++){
    // 把之前重复写的代码，利用for循环遍历添加事件即可
    inputs[i].onclick = function(){
        this.style.backgroundColor = "pink";
    }
}
```

### 小结

事件处理函数内的 this 指向什么?

```js
参考答案：在 `事件处理函数内` 的 `this` 指向当前绑定事件的 `这个事件源` 。
```



## 通过选择器方式查找 *

### 目标

使用选择器方式查找元素

### 查找一个元素

```js
document.querySelector("CSS选择器");
// 返回符合选择器规则的第一个元素
```

### 查找全部元素

```js
document.querySelectorAll("CSS选择器");
// 返回符合选择器规则的全部元素，伪数组
```

> 注意：document.querySelectorAll() 查找返回的是伪数组格式数据，
>
> 所以使用的时候记得通过方括号 [ ] 把元素取出来，
>
> 伪数组不能直接使用与绑定事件或修改样式。



### 参考代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div class="box">
        <input type="button" value="按钮1" id="btn1" class="my-btn">
        <input type="button" value="按钮2" id="btn2" class="my-btn">
    </div>
    <input type="button" value="按钮3" id="btn3" class="my-btn">

    <script>
        // 查找方法1：在网页文档中，通过选择器进行查找
        //      document.querySelector("选择器")
        //         功能：查找到符合选择器规则的第一个元素
        //  
        //   CSS选择器平常怎么写，写成字符串就行。
        // var btn = document.querySelector("#btn");
        // console.log(btn);
    
        // var myBtn = document.querySelector(".my-btn");
        // console.log(myBtn);

        // var input = document.querySelector("input");
        // console.log(input);

        // var text = document.querySelector("[type='button']");
        // console.log(text);

        
        //  查找方法2：document.querySelectorAll("选择器")
        //          功能：查找到符合选择器规则的所有元素，伪数组格式
        //          需要注意：伪数组无法直接绑定事件，需要通过方括号的方式取出来才能绑定事件

        // 通过标签名称查找全部
        var inputs = document.querySelectorAll("input")
        console.log(inputs);

        // 通过id名称查找全部
        var btn = document.querySelectorAll("#btn1")
        console.log(btn);

        // 通过类名称查找全部
        var myBtns = document.querySelectorAll(".my-btn");
        console.log(myBtns);

        // 还支持CSS选择器嵌套的写法进行查找
        var myBtns = document.querySelectorAll(".box .my-btn");
        console.log(myBtns);
        
    </script>

</body>
</html>
```





## 排他思想

### 效果展示

![](assets/paita.gif)

### 实现步骤

```js
1. 通过 循环 排除全部。
2. 通过 this 确立当前点击的这个元素。
```

### 参考代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        /* 常用于表示选中状态的类名： current   active   on */
        .on{
            background-color: pink;
        }
    </style>
</head>
<body>
    <input type="button" value="美女1">
    <input type="button" value="美女2">
    <input type="button" value="美女3">

    <script>
        // 查找所有元素
        var inputs = document.querySelectorAll("input");
        // 循环遍历所有的 input 元素
        for(var i=0; i < inputs.length; i++){
            // 给所有 input 元素添加点击事件
            inputs[i].onclick = function(){
                // 1. 通过<循环>排除<所有>
                for(var j=0; j < inputs.length; j++){
                    inputs[j].classList.remove("on");
                }
                // 2. 通过<this>确立当前点击的<这个元素>
                this.classList.add("on");
            }
        }
    </script>
</body>
</html>
```



## 美女切换效果

![](assets/girls.gif)

### 代码

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        /* 常用于表示选中状态的类名： current   active   on */
        .on{
            background-color: pink;
        }
        .main img{
            width: 500px;
        }
    </style>
</head>
<body>
    <!-- 
        为了让每个按钮点击的时候，能切换固定的一张图片
        给每个按钮添加自定义属性，这个自定义属性存放当前按钮对应哪个图片的路径
    -->
    <input type="button" value="美女1" data-src="./img/01.jpg">
    <input type="button" value="美女2" data-src="./img/02.jpg">
    <input type="button" value="美女3" data-src="./img/03.jpg">
    <div class="main">
        <img src="./img/01.jpg" alt="">
    </div>

    <script>
        // 查找所有元素
        var inputs = document.querySelectorAll("input");
        // 循环遍历所有的 input 元素
        for(var i=0; i < inputs.length; i++){
            // 给所有 input 元素添加点击事件
            inputs[i].onclick = function(){
                // 1. 通过<循环>排除<所有>
                for(var j=0; j < inputs.length; j++){
                    inputs[j].classList.remove("on");
                }
                // 2. 通过<this>确立当前点击的<这个元素>
                this.classList.add("on");
                // 3. 在按钮被点击的时候，把当前这个按钮存放的图片信息获取
                var imgSrc = this.dataset.src;
                // 4. 查找图片元素
                var myImg = document.querySelector(".main img");
                // 5. 把获取到的图片路径，赋值给图片的 src 属性
                myImg.src = imgSrc;

            }
        }
    </script>
</body>
</html>
```



### 案例小结

```js
1. 查找所有元素，document.querySelectorAll()
2. for 循环遍历
3. 给元素添加事件
4. 排他思想，排除所有，确立当前这个
5. 元素类名的添加和删除

1. 标签自定义属性添加，把图片路径直接写到按钮上
2. 获取标签的自定义属性，获取当前点击这个按钮存放的图片路径
3. 查找单个元素使用，document.querySelector();
4. 修改图片元素的 src 属性，也就是修改图片路径从而实现换图效果。
```





## 事件类型

| 事件类型 | 单词        | 备注                |
| -------- | ----------- | ------------------- |
| 鼠标单击 | onclick     |                     |
| 鼠标双击 | ondblclick  | double  双倍        |
|          |             |                     |
| 鼠标移入 | onmouseover | mouse  鼠标         |
| 鼠标移出 | onmouseout  |                     |
|          |             |                     |
| 获取焦点 | onfocus     | focus 焦点          |
| 失去焦点 | onblur      | blur 模糊，失去焦点 |

> 原生 JS 的事件全部都是小写的英文单词，不要写错。



## 仿搜索框提示盒子

### 效果预览

![](assets/focus_blur-1556375072516.gif)

### 代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .box{
            width: 400px;
            height: 400px;
            background-color: pink;
            display: none;
        }
        .show{
            display: block;
        }
    </style>
</head>
<body>
    <input type="text" id="search">
    <div id="box" class="box">
        搜索框的提示盒子，搜索框获取焦点显示，搜索框失去焦点隐藏
    </div>
    <script>
        // 查找输入框, 查找提示盒子
        var search = document.querySelector("#search");
        var box = document.querySelector("#box");

        // 获取焦点
        search.onfocus = function(){
            // console.log("获取焦点");
            box.classList.add("show");
        }

        // 失去焦点
        search.onblur = function(){
            // console.log("失去焦点");
            box.classList.remove("show");
        }


    </script>
</body>
</html>
```

### 知识点

```js
1. 查找元素 document.querySelector();
2. 获取焦点  onfocus
3. 失去焦点  onblur
4. 添加类名称   classList.add("类名称");
5. 删除类名称   classList.remove("类名称");
```



## 创建元素

### 目标

​	使用 innerHTML 创建页面元素
​	使用 createElement 创建页面元素

### document.write()

```javascript
document.write('新设置的内容<p>标签也可以生成</p>');
```

### innerHTML

```javascript
var box = document.getElementById('box');
box.innerHTML = '新内容<p>新标签</p>';
```



### 创建元素方式的对比

- innerHTML 列表数据渲染。



### 





## 点击按钮创建新闻列表

![](assets/news.gif)

### 代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <input id="btn" type="button" value="点击按钮创建新闻">
    <ul id="news">
        
    </ul>
    <script>
    // 模拟新闻数据，存放到数组中
    var arr = [
        "国家新闻出版广电总局发文 游戏版号申报正式重启",
        "实探黑龙江鹤岗：6年11万套棚改房 煤厂停产“人都走了”",
        "国家网信办集中查处一批违法违规色情、赌博和占卜网站"
    ];
    
    // 需求：点击<按钮>创建<新闻>
        // 1. 查找元素
        var btn = document.querySelector("#btn");
        var news = document.querySelector("#news");

        // 2. 给按钮添加点击事件
        btn.onclick = function(){
            // 2.1 遍历所有新闻内容，拼接成一段字符串
            var htmlStr = "";
            for(var i=0;i<arr.length;i++){
                htmlStr += "<li>" + arr[i] + "</li>";
            }
            // 2.2 把所有新闻内容放到 innerHTML
            news.innerHTML = htmlStr;
        }
    
    </script>
</body>
</html>
```

### 知识点小结

```js
1. 数组语法
2. 查找元素
3. 绑定事件
4. for 循环遍历数组
5. 字符串拼接
6. += 累加
7. innerHTML 属性，修改元素的内容
```





### innerHTML 创建列表性能问题

主要有两种写法，分别是，字符串拼接，数组 push 拼接。

```js
        // 2. 给按钮添加点击事件
        btn.onclick = function(){
            // 2.1 遍历所有新闻内容，拼接成一段字符串
            var htmlStr = "";
            for(var i=0;i<arr.length;i++){
                htmlStr = htmlStr + "<li>" + arr[i] + "</li>";
            }
            // console.log(htmlStr);
            // 2.2 把所有新闻内容放到 innerHTML
            news.innerHTML = htmlStr;
        }

for 循环内核心拼接代码：   htmlStr = htmlStr + "<li>" + arr[i] + "</li>";
1.先获取到 htmlStr 内容，2.再拼接后面部分，3.再重新赋值。
```



```js
btn.onclick = function(){
    var htmlArr = [];
    for(var i=0; i<arr.length; i++){
        htmlArr.push("<li>"+arr[i]+"</li>");
    }
    // 2.2 把所有新闻内容放到 innerHTML
    news.innerHTML = htmlArr.join("");
}

htmlArr.push("<li>"+arr[i]+"</li>");

把拼接的内容，直接 push 添加到数组中即可。

```



### 区别 innerHTML 和 innerText

### 目标

区别 innerHTML 和 innerText

### 属性

```js
innerHTML      HTML 超文本标记语言，支持 HTML 标签作为内容添加

innerText	   Text 纯文本，以文本方式把内容添加到盒子中 
```

### 代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .box{
            border: 1px solid #f00;
            width: 500px;
            height: 50px;
            margin: 20px;
        }
    </style>
</head>
<body>
    <ul class="box">

    </ul>
    
    <ul class="box">

    </ul>
    <script>
        // 查找两个盒子
        var boxs = document.querySelectorAll(".box");

        // 第一个盒子通过 innerHTML 添加内容
        boxs[0].innerHTML = "<li>一条内容，通过 innerHTML 添加</li>";

        // 第二个盒子通过 innerText 添加内容
        boxs[1].innerText = "<li>一条内容，通过 innerText 添加</li>";

    </script>

</body>
</html>
```









## 创建元素

### 目标

​	使用innerHTML创建页面元素
​	使用createElement创建页面元素

### document.write()

```javascript
document.write('新设置的内容<p>标签也可以生成</p>');
```

### innerHTML

```javascript
var box = document.getElementById('box');
box.innerHTML = '新内容<p>新标签</p>';
```

### document.createElement()

```javascript
var div = document.createElement('div');
document.body.appendChild(div);
```



### 创建元素方式的对比

- innerHTML 列表数据渲染。
- document.createElement 单行添加。



### 小结

​	innerHTML 和 createElement 区别？



## 节点操作

### 目标

​	学习节点操作的方法		

### 节点树

![1497154623955](assets/dom.png)

### 节点操作方法

- 追加节点

  - appendChild()

  ```html
  <script>
     var li3 = document.getElementById('li3');
     var ul = document.querySelector('ul');
     var node = li3.cloneNode(true);
     ul.appendChild(node);
  </script>
  ```

- 插入节点

  - insertBefore()

  ```html
  <script>
     var li3 = document.getElementById('li3');
     var ul = document.querySelector('ul');
     var lis = ul.children;
     var node = li3.cloneNode(true);
     ul.insertBefore(node,lis[1]);
  </script>
  ```


- 删除节点

  - removeChild()

  ```html
  <script>
     var li3 = document.getElementById('li3');
     var ul = document.querySelector('ul');
     ul.removeChild(li3);
  </script>
  ```

  



### 补充节点关系

- 父节点
  - parentNode 返回父元素节点
- 子节点
  - children 返回子元素节点
- 下一个兄弟节点
  - nextElementSibling 只会获取下一个元素节点
- 上一个兄弟节点
  - previousElementSibling
- 第一个子节点
  - firstElementChild
- 最后一个子节点
  - lastElementChild



### 小结

​	如何添加节点，插入节点，删除节点？





## 注册事件的两种方式

### 目标

​	注册事件的两种方式(on和addEventListener)

​	移除事件的两种方式

### 注册事件的两种方式

```javascript
var box = document.getElementById('box');
box.onclick = function () {
  console.log('点击后执行');
};
box.onclick = null;

box.addEventListener('click', eventCode, false);

function eventCode() {
  console.log('点击后执行');
}
```

### 移除事件的两种方式

```js
  box.onclick = null;
  box.removeEventListener('click', eventCode, false);
```

  

### 小结

​	addEventListener注册事件好处？



## 事件对象

### 目标

获取事件对象实现相应效果

### 概念

事件对象其实就是记录了事件被触发时候，包含的一些事件相关的信息，把这些信息用一个对象整体管理起来。

### 事件对象能用来干什么

```js
事件对象包含了事件触发时候的相关信息
如：获取鼠标位置，获取键盘按下的按键，获取事件类型，获取事件源 ...
```

### 事件对象书写步骤

```js
1. 在事件处理函数的 ( ) 内传入参数,常用参数名 event ，ev ，e
2. 在事件处理函数的 { } 即可使用。
```

> 温馨提示：新版 Chrome 浏览器默认可以使用 event 作为事件对象，不稳定，建议传入参数 event。

### 事件对象常用属性

| 事件对象属性      | 描述                                           | 备注                         |
| ----------------- | ---------------------------------------------- | ---------------------------- |
| type              | 事件类型                                       |                              |
|                   |                                                |                              |
| target            | 事件目标                                       |                              |
| srcElement        | 事件目标                                       |                              |
|                   |                                                |                              |
| clientX / clientY | 基于浏览器的可视区域，鼠标坐标值               | 可配合固定定位，基于窗口定位 |
| pageX / pageY     | 基于整个页面，页面滚动有关，鼠标在页面的坐标值 | 可配合绝对定位，基于页面定位 |
|                   |                                                |                              |
| keyCode           | 获取键盘编码                                   |                              |
| which             | 获取键盘编码                                   |                              |



### 事件对象常用方法

- event.stopPropagation() 阻止事件触发后传播(阻止冒泡)
- event.preventDefault() 取消默认行为



## 常用的鼠标和键盘事件补充

### 目标

补充常用的事件类型

### 事件类型

| 事件        | 事件翻译           |      |
| ----------- | ------------------ | ---- |
| `mouseup`   | 鼠标按键放开时触发 |      |
| `mousedown` | 鼠标按键按下触发   |      |
| `mousemove` | 鼠标移动触发       |      |
|             |                    |      |
| `keydown`   | 键盘按键按下触发   |      |
| `keyup`     | 键盘按键弹起触发   |      |



### 参考代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <input type="text" placeholder="请输入内容..." id="user">
    <script>

        var user = document.querySelector("#user");

        // 松开事件，就只会在松开的时候触发一次。
        // 获取用户最终在键盘松开时候的那一个按键
        user.addEventListener("keyup",function(event){
            // console.log(event);
            if(event.keyCode === 13){
                console.log("用户松开了回车键，就发布新闻");
            }
        });
    </script>

</body>
</html>
```

### 小结

如何获取用户当前按下的键盘的哪个按键？

```js
1. 给输入框绑定一个键盘松开事件。
2. 在事件处理函数的 事件对象 中，通过 event.keyCode 获取按下是哪一个按键
```



## 按回车键发布新闻效果

### 效果展示

![](assets/createNewsEnter.gif)

### 参考代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <!-- 按钮 -->
    <input type="button" value="点击创建新元素">
    <!-- 输入框 -->
    <input type="text" value="">
    <ul id="news">
        <li>这里原本有一些新闻内容</li>
    </ul>

    <script>
        // 需求：点击按钮新增加一条新闻内容

        // 1. 查找元素
        var btn = document.querySelector("[type='button']");    // 字符串外双引号，内单引号
        var text = document.querySelector('[type="text"]');     // 字符串外单引号，内双引号
        var news = document.querySelector("#news");

        // 把事件处理函数抽离后保存到变量中
        var fn = function (){
            // 3.1 获取输入框内容
            var userText = text.value.trim();
            // console.log(userText.length);
            // 3.1.1 如果字符串为空，给用户提示
            if( userText.length === 0 ){
                alert("请输入内容，是不是你忘了");
            }else{
                // 3.1.2 不是空字符串才发布内容
                // 3.2 发布内容
                var tag = document.createElement("li");
                // 把修改的内容换成 输入框获取到的内容
                tag.innerHTML = userText;
                // news.appendChild(tag);
                news.insertBefore(tag, news.children[0] );
                
                // 把空字符串赋值给输入框的 value，元素.value 才是修改内容的 API
                text.value = "";
            }
        }

        // 2. 绑定事件，
        // 这个地方不带括号的原因，这里仅仅是赋值绑定事件，并需要立刻触发
        // 而是按钮被点击的时候才会触发
        btn.onclick = fn;

        text.addEventListener("keyup", function(event){
            // if 判断键盘编码是否为 回车键 13 
            if(event.keyCode === 13){
                // 如果是回车键，主动调用 fn 函数
                // 这里带括号就是为了键盘是回车键的时候，进行主动调用发布效果。
                fn();
            }
        });

    </script>

</body>
</html>
```

### 小结

```js
1. keyup 键盘松开事件
2. 通过事件对象 event.keyCode 获取用户是否松开回车键
3. 如果是回车键，就发布新闻

4. 由于发布新闻的逻辑之前的点击事件写过，所以可以把函数抽离复用
5. 把 发布新闻的函数 重新赋值绑定给 按钮的点击事件
6. 把 发布新闻的函数 在键盘按下如果是回车键的分支中 主动调用。
```

补充字符串修剪首尾空格

```js
字符串.trim()
```



## 小天使跟随鼠标效果

### 目标

使用 clienX / clienY 实现效果

### 效果预览

![](assets/angel.gif)

### 参考代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        body{
            margin: 0;
            padding: 0;
            height: 5000px;
            background-image: linear-gradient(0deg,purple,yellowgreen);
        }
        #box{
            position: fixed;
            left: 0;
            top:0;
        }
    </style>
</head>
<body>
    <img src="./images/angel.gif" alt="小天使" id="box">
    <script>
        // 获取小天使，因为他要移动
        var box = document.querySelector("#box");
        // 获取 body 因为要绑定事件
        var body = document.querySelector("body");

        body.addEventListener("mousemove", function(event){
            // 获取鼠标坐标值，根据浏览器可视区域获取鼠标坐标值
            var x = event.clientX;
            var y = event.clientY;
            // console.log(x,y);
            // 把坐标值赋值给小天使 top left 样式中.
            box.style.left = x + "px";
            box.style.top = y + "px";
        });

        // 小结：
        //      1. 查找元素
        //      2. 事件绑定，addEventListener 
        //      3. 事件对象，获取鼠标坐标值
        //      4. 样式固定定位
        //      5. style 属性修改样式
    </script>
</body>
</html>
```

### 小结

```js
1. 查找元素
2. 事件绑定，addEventListener 
3. 事件对象，获取鼠标坐标值
4. 样式固定定位
5. style 属性修改样式
```

注意事项

```js
body 默认是没有高度的，平常 body 都是被内容撑开高度。
body 添加背景色都是整个页面的背景色变化。
```



### 全屏触发的事件源

document  整个网页文档，在 JS 中允许给 document 绑定事件，整个网页文档都能触发。





## 事件冒泡

### 目标

​	事件的三个阶段

​	阻止事件冒泡



### 事件冒泡特征

### DOM 树

![1555904175326](assets/1497154623955.png)



如果 子元素 和 父元素 都绑定了相同的事件类型。

当我们点击子元素的时候，子元素事件先触发，父元素的事件也会被触发。

事件会继续往上进行传播，继续触发，这种现象我们称为 事件冒泡，它代表事件传播的方式。



### 事件的三个阶段

1. 捕获阶段 - 了解，在触发事件的目标元素之前的查找过程
2. 当前目标阶段 - 事件真正触发的元素
3. 冒泡阶段 - 事件默认的传播方式，先触发目标，再进行传播

![1555904862992](assets/1555904862992.png)



### 阻止事件冒泡

- 标准方式  event.stopPropagation();     		推荐写法。
- IE低版本   event.cancelBubble = true;                  之前的写法。



### 小结

​	如何阻止事件冒泡？





## 事件委托

### 目标

​	使用事件委托。

### 概念

​	事件委托是对"事件处理程序过多"问题的一种解决方案。

​	没有事件委托之前，如果有 1000 条数据，for 循环就要注册 1000 次。

### 步骤

```js
1. 事件注册给父级元素，不直接注册给 li 
2. 在事件处理函数内部判断 event.target 的节点名称，如果是 li 才执行业务代码。
```

### 参考代码 1

> 判断节点名，注意节点在 JS 中大写英文字母

```js
var box = document.querySelector("#box");
box.onclick = function(event){
    if(event.target.nodeName === "LI"){
        console.log("你点击了li元素");
    }
}
```

### 参考代码 2

> 判断类名

```js
var box = document.querySelector("#box");
box.onclick = function(event){
    if(event.target.className === "item"){
        console.log("执行业务代码");
    }
}
```

### 小结

​	实现事件委托原理？



## BOM 基本概念

### 目标

了解 DOM 相关概念



### JavaScript 三大组成

ECMAScript +  DOM + BOM

语法  +   操作网页API + 操作浏览器API



### 顶级对象

Browser Object Model    浏览器对象模型

```
window
```



### 全局变量/全局函数

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script>
        // window 是整个网页编程中顶级对象，代表是整个浏览器对象
        // 包括之前学习的弹窗 alert , prompt 全部都是 window 对象下的功能而已

        console.log(window);
        // 只不过我们平常把 window 这个对象省略了
        console.log( window.alert === alert );   // true

        // 全局变量
        var aaaaa = "123";
        // 全局变量和全局函数其实都是添加 window 对象下的
        console.log( aaaaa  === window.aaaaa );    // true

        // 全局函数
        function fn(){
            alert();
        }

        // fn();	// 可以调用
        // window.fn();  // 也可以调用
        console.log( fn === window.fn  );   // true

        // document 对象其实也是 window 对象下的其中一个子对象而已
        console.log( document === window.document ); // true

        // BOM 对象中其实是包含了 DOM
    </script>
</body>
</html>
```

### 小结

BOM 和 DOM 分别代表什么？

```js
参考答案：BOM 浏览器对象模型，DOM 文档对象模型
```

BOM 和 DOM 是什么关系？

```js
参考答案：BOM 对象中其实是包含了 DOM 对象
```



## 浏览器加载事件

### 目标

学习 load 事件



### load 事件

事件赋值的写法，会被覆盖

```js
window.onload = function(){
  
}
```

事件函数的写法

```js
window.addEventListener("load",function(){
    
});
```



### load 事件执行时机

window.onload 事件执行时机：当浏览器资源加载完毕后自动执行。

也就是在 所有标签加载完毕后，图片加载完毕，外链文件加载完毕后，才执行事件处理函数体内的代码。



### 获取图片高度

获取无设置高度的图片，需要在图片加载完毕后才可以正常获取正确高度，否则为 0。



### 参考代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <img src="./images/angel.gif" >
	
    <script>
		// 1. 查找图片
		var img = document.querySelector("img");
		
		
		// 在外面获取图片高度
		var imgHeight = img.offsetHeight;
		// 在外面输出图片高度
		console.log(imgHeight);       // 0，无法正常获取图片高度
		
	

        // 在 load 事件内部获取图片高度
        window.addEventListener("load", function(){
            // 在外面获取图片高度
			var imgHeight2 = img.offsetHeight;
			// 在 load 事件内部输出图片高度
			console.log(imgHeight2);  // 80，可以正常获取图片高度
        });
        
    </script>
</body>
</html>
```

### 小结

load 事件的执行时机？

```js
当浏览器资源加载完毕后自动执行，包括图片，外链文件等。
```



## 定时器

### 目标

学习 多次定时器 和 单次定时器



### 多次定时器

> 多次定时器特点：设置后会永久执行。

设置多次定时器：

```js
# 基本语法
setInterval(回调函数, 毫秒时间);
# 创建定时器后把定时器编号存到变量中，清除的时候需要用到
var timer = setInterval(回调函数, 毫秒时间);
```

清除多次定时器：

```js
clearInterval(定时器名称)
```

### 单次定时器

```js
设置：	setTimeout(回调函数, 毫秒时间)
清除： clearTimeout()
```

### 小结

多次定时器：永久执行。

单次定时器：执行一次后自动结束。

> 提示：工作的时候使用到多次定时器较多。

### 参考代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <input type="button" value="清除多次定时器" id="btn">
    <script>

        // 设置多次定时器：setInterval(回调函数, 毫秒时间)
        // 清除多次定时器：clearInterval(定时器的名称)
        function fn(){
            console.log("闹钟设置的事件到了，起床啦...");
        }
        // 创建定时器，每隔两秒钟执行一次 fn 函数体内的代码
        // 把创建的定时器的编号保持到变量 timer 中，相当于给当前定时器起个名称
        var timer = setInterval(fn, 2000);

        // 查找按钮
        var btn = document.querySelector("#btn");

        // 点击按钮后，清除定时器
        btn.addEventListener("click",function(){
            // 清除定时器，通过 timer 找到需要清除的定时器
            clearInterval(timer);
        });

    </script>
</body>
</html>
```

### 小结

多次定时器启动和清除？



## 发送验证倒计时效果

### 目标

使用多次定时器实现效果

### 效果预览

![](assets/countNum.gif)

### 参考代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script>
        // 浏览器加载事件
        window.addEventListener("load",function(){
            
            // 查找元素
            var btn = document.querySelector("#btn");

            btn.addEventListener("click",function(){
                // 准备一个用于倒计时的变量
                var num = 10;
                // 设置定时器
                var timer = setInterval(function(){
                    // 定时器内部不断让数值减少
                    num--;
                    // 把数值赋值给按钮，让按钮有倒计时效果
                    btn.value = num;
                    // 在倒计时的时候把按钮的状态禁止掉
                    btn.disabled = true;

                    // 如果倒计时是 0，清除定时器
                    if(num === 0){ 
                        // 清除定时器
                        clearInterval(timer);
                        // 把按钮文字变回原本的文字
                        btn.value = "发送验证码";
                        // 去除按钮的禁用状态
                        btn.disabled = false;
                    }
                },1000);

            });

        });
    </script>
</head>
<body>
    <input type="button" value="发送验证码" id="btn">
</body>
</html>
```

### 小结

```js
1. 给按钮添加点击事件。
2. 准备一个倒计时的数字，存到变量 num 中。
3. 设置一个多次定时器，定时器内让 num 存放的数字 不断减少。
4. 分支语句，如果 num 减少到 0，清除定时器。
5. 把 num 数值显示到按钮 ，value 修改按钮内容，同时把按钮状态禁用。
6. 倒计时结束后，在分支语句中把重新显示提示文字和按钮状态。
```





## location 对象

### 目标

学习 location 实现 获取链接，跳转链接，刷新页面

### 知识点

主要用于获取和设置浏览器地址栏。

### 参考代码

设置

```js
// 设置地址栏，能跳转页面
location.href = "http://www.baidu.com";
```

获取

```js
// 获取地址栏
var link = location.href;
console.log(link);
```

刷新页面

```js
// 等号右边 ->  获取当前 URL 地址信息
// 等号左边 <-  设置当前 URL 地址
// 把获取到的地址，设置到当前url，可以实现页面的刷新
location.href = location.href;
```

### 小结

location 对象主要用于干什么？

```
参考答案：主要用户获取和设置当前地址栏的 URL 地址。
```



## 本地存储

### 目标

学习 localStorage  本地存储



### localStorage 方法

```js
获取： localStorage.getItem()
设置： localStorage.setItem()
移除： localStorage.removeItem()
```



### 案例

实现本地存储版 todoList 



## JSON 方法补充

```js
JSON 解析：JSON.parse()

JSON 转字符串：JSON.stringify()
```



### 其他

sessionStrorage 选讲



### 小结

本地存储的获取，设置，移除数据方法分别是？






