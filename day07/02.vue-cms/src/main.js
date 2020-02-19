// 入口文件
console.log('ok')

import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.http.options.root = 'http://www.liulongbin.top:3005'

Vue.http.options.emulateJSON = true

//导入时间插件
import moment from 'moment';
// 定义全局过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'

import './lib/mui/css/icons-extra.css';

import './lib/mui/fonts/mui-icons-extra.ttf'

//按需导入 Mint-UI 中的组件
// import {
//   Header,
//   Swipe,
//   SwipeItem,
//   Button,
//   Lazyload
// } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload)

import MintUI from 'mint-ui';
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

import VuePreview from 'vue-preview';
Vue.use(VuePreview)

import app from './App.vue'
import router from './router.js'


var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})