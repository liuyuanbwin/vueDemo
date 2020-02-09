// 项目的 JS 入口文件
console.log('ok')

import './css/index.css'
import './css/index.scss'
import 'bootstrap/dist/css/bootstrap.css'

class Person {
  static info = {
    name: 'zs',
    age: 20
  }
}
console.log(Person.info)
//在 webpack 中,默认只能处理一部分 ES6 的新语法, 一些更高级的ES6语法或ES7语法,webpack 是处理不了的 ,这时候就要借助于第三方的 loader 来帮助 webpack 处理这些高级的语法, 当第三方 loader 把高级语法转为 低级的语法之后, 会把结果交给 webpack 去打包到 bundle.js中
// 通过 Babel 可以帮我们将 高级的语法转换为 低级的语法
// 在 webpack 中,可以运行如下两套命令,安装两套包,安装 babel 相关的 loader 功能
// cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
// cnpm i babel-preset-env babel-preset-stage-0 -D



// function Animal(name) {
//   this.name = name
// }
// Animal.info = 123

// var a1 = new Animal('小花')
// console.log(Animal.info)
// console.log(a1.name)