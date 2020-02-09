//这个 main.js 是我们项目的入口文件

//1. 导入 Jquery
// import *** from *** ES6 中导入模块的方式
// 由于 ES6 的代码, 太高级了, 浏览器解析不了, 所以这一行 会有问题, 执行会报错
import $ from 'jquery'

//使用 import 语法, 导入 css 样式
import './css/index.css'
import './css/index.less'
import './css/index.scss'
// 注意:webpack 默认只能打包 JS 类型的文件, 无法处理其他的非 JS 类型的文件
//如果要处理 非JS类型的文件, 我们需要手动安装一些 合适的 第三方 loader 加载器
//1. 如果想要打包处理 css 文件,需要安装 cnpm i style-loader css-loader -D
//2. 打开 webpackl.config.js 这个配置文件,在里面 新增一个配置节点 叫做 module 他是一个对象,在这个 module 对象身上,有一个 rules 属性,这个 rules 属性是个数组;这个数组中,存放了所有第三方文件的匹配和处理规则

// 注意: webpack 处理第三方文件类型的过程
// 1. 发现文件不是 JS 就去查找 对应的第三方 loader 规则
// 2. 如果能找到对应规则, 则调用对应的loader 处理 这种文件类型
// 3. 调用loader 的时候, 是从后往前调用的 
// 4. 调用到最后一个的时候,把调用结果,返回webpack 处理打包

$(function () {
  $('li:odd').css('backgroundColor', 'red')
  $('li:even').css('backgroundColor', function () {
    return '#' + 'D97634'
  })
})

// 经过刚才的演示, Webpack 可以做什么事情 ???
// 1.  webpack 能够处理 JS 文件之间的互相依赖关系;
// 2.  webpack 能够处理 JS 的兼容问题,把 高级的浏览器不识别的语法,转为 低级的 浏览器能正常是别的 语法

// 刚才运行的命令格式: webpack 要打包的文件的路径 打包好的输出文件的路径


// 使用 webpack-dev-server 这个工具, 来实现自动打包编译的功能
// 1. 运行 npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
// 2. 安装完毕后, 这个工具的用法 和  webpack 命令的用法, 完全一样
// 3. 由于我们是在项目中,本地安装的 webpack-dev-server, 所以无法把它当做命令行执行, 只有安装到全局的才可以在这里使用