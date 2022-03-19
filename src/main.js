/*
 * @Author: your name
 * @Date: 2022-03-19 16:55:15
 * @LastEditTime: 2022-03-19 17:15:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
 * @FilePath: \tabbar\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 引入axios
import axios from 'axios'
//配置axios全局使用
Vue.prototype.$axios = axios
// 配置请求根路径
axios.defaults.baseURL=" https://www.escook.cn"
// 导入bootstrap
import "bootstrap/dist/css/bootstrap.css"
// 导入字体样式
import "bootstrap/dist/css/iconfont.css"
new Vue({
  render: h => h(App),
}).$mount('#app')