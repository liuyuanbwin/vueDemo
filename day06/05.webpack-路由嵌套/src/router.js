import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'

import register from './sub/register.vue'
import login from './sub/login.vue'
//1.导入 vue-router
import VueRouter from 'vue-router'

//3. 创建路由对象
var router = new VueRouter({
  routes: [
    // account goodslist
    {
      path: '/account',
      component: account,
      children: [{
          path: 'login',
          component: login
        },
        {
          path: 'register',
          component: register
        }
      ]
    },
    {
      path: '/goodslist',
      component: goodslist
    }
  ]
})

export default router