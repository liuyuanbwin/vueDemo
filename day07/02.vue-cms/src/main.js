// 入口文件
console.log('ok')

import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)



// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'

import './lib/mui/css/icons-extra.css';

import './lib/mui/fonts/mui-icons-extra.ttf'

//按需导入 Mint-UI 中的组件
import {
  Header,
  Swipe,
  SwipeItem
} from 'mint-ui'

import app from './App.vue'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import router from './router.js'


var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})