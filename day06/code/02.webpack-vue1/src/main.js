// 入口文件
console.log(' ojbk f ')

//复习:  在普通网页中如何使用vue
// 1. 引入 script 标签, 引入 vue 的包
// 2. 在index页面中创建 一个 id 为 app 的 div 容器
// 3. 通过 new Vue 得到一个 vm 的实例


// 在 webpack 中尝试 Vue:
// 注意 : 在 webpack 中,使用 import Vue from 'vue' 导入 vue 的构造函数,导入的不完整,只导入了 runtime-only 的方式,没有提供像网页中那样的使用方式
import Vue from 'vue'
//import Vue from '../node_modules/vue/dist/vue.js'
// 回顾 包的查找规则:
// 1. 找项目根目录中有没有 node_modules 的文件夹
// 2. 在 node_modules 中 根据包名,找对应的 vue 文件夹
// 3. 在 vue 文件夹中,找 一个叫做 package.json 的包配置文件
// 4. 在 package.json 文件中, 查找一个 main 属性[main属性制定了这个包在被加载的时候的入口文件]
// var login = {
//   template: '<h1>这是 login 组件,是使用网页中形式创建出来的组件</h1>'
// }

//导入 login 组件 
import login from './login.vue'
// 默认 webpack 无法打包 .vue 文件,需要安装 相关的 loader
//cnpm i vue-loader vue-template-compiler -D
// 在配置文件中,新增 loader 配置项 {}
var vm = new Vue({
  el: '#app',
  data: {
    msg: '123'
  },
  // components: {
  //   login
  // }
  render: function (createElements) {
    return createElements(login)
  }
})

import m222, {
  title as title123,
  content
} from './test.js'
console.log(m222)
console.log(title123 + '----' + content)