// 入口文件
console.log('ok')

import Vue from 'vue'

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'

//按需导入 Mint-UI 中的组件
import {
  Header
} from 'mint-ui'
import app from './App.vue'
Vue.component(Header.name, Header)


var vm = new Vue({
  el: '#app',
  render: c => c(app)
})