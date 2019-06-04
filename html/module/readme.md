# list
- 前端模块规范有三种：CommonJs,AMD和CMD。
- require
- Commonjs
- AMD  
- CMD
- webpack 



# 前端模块规范有三种：CommonJs,AMD和CMD。
CommonJs用在服务器端，AMD和CMD用在浏览器环境
AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。
CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。
AMD:提前执行（异步加载：依赖先执行）+延迟执行
CMD:延迟执行（运行到需加载，根据顺序执行）

作者：linwalker
链接：https://www.jianshu.com/p/d67bc79976e6
来源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。


# Require 模块学习
1. 简介：
 js通过script标签的默认加载方式是同步的，即第一个script标签内的js加载完成后，才开始加载第二个，
 以此类推，直至js文件全部加载完毕。 且js的依赖关系必须通过script的顺序才能确保；而在js加载期间，
 浏览器将停止响应，这大大影响了用户体验，基于此，很多解决js以来和加载的方案出现,require js就是其中之一
 
 # CommonJS 规范
 CommonJS 是以在浏览器环境之外构建 JavaScript 生态系统为目标而产生的项目，比如在服务器和桌面环境中。
 # AMD
全称是Asynchronous Module Definition，即异步模块加载机制
   
   作为一个规范，只需定义其语法API，而不关心其实现。AMD规范简单到只有一个API，即define函数：
define([module-name?], [array-of-dependencies?], [module-factory-or-object]);
其中：
module-name: 模块标识，可以省略。
array-of-dependencies: 所依赖的模块，可以省略。
module-factory-or-object: 模块的实现，或者一个JavaScript对象。

模块通过 define 函数定义在闭包中，格式如下：

    define(id?: String, dependencies?: String[], factory: Function|Object);
    id 是模块的名字，它是可选的参数。

# CMD
CMD 即Common Module Definition通用模块定义，CMD规范是国内发展出来的，就像AMD有个requireJS，CMD有个浏览器的实现SeaJS，SeaJS要解决的问题和requireJS一样，只不过在模块定义方式和模块加载（可以说运行、解析）时机上有所不同。
 

AMD是依赖关系前置,在定义模块的时候就要声明其依赖的模块;
CMD是按需加载依赖就近,只有在用到某个模块的时候再去require：

        // CMD
        define(function(require, exports, module) {
        var a = require('./a')
        a.doSomething()
        // 此处略去 100 行
        var b = require('./b') // 依赖可以就近书写
        b.doSomething()
        // ... 
        })

        // AMD 默认推荐的是
        define(['./a', './b'], function(a, b) { // 依赖必须一开始就写好
        a.doSomething()
        // 此处略去 100 行
        b.doSomething()
        ...
        }) 

作者：linwalker
链接：https://www.jianshu.com/p/d67bc79976e6
来源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。