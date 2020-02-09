import Vue from 'vue'

//1.导入 vue-router
import VueRouter from 'vue-router'
//2. 手动安装 VueRouter
Vue.use(VueRouter)

import app from './App.vue'
import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'

//3. 创建路由对象
var router = new VueRouter({
  routes: [
    // account goodslist
    {
      path: '/account',
      component: account
    },
    {
      path: '/goodslist',
      component: goodslist
    }
  ]
})

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router // 4. 将路由对象挂载到 vm 上
})