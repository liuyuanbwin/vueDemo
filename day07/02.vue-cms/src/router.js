import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcartContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: HomeContainer
    },
    {
      path: '/member',
      component: MemberContainer
    },
    {
      path: '/shopcar',
      component: ShopcarContainer
    },
    {
      path: '/search',
      component: SearchContainer
    }
  ],
  linkActiveClass: 'mui-active' //覆盖默认的路由高亮度类,默认的类是 router-link-activate
})

// 把路由对象暴露出去
export default router