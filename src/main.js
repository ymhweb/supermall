/*
 * @Author: your name
 * @Date: 2019-12-19 20:26:40
 * @LastEditTime: 2020-04-27 22:09:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store'

import FastClick from 'fastclick'
// import VueLazyLoad from 'vue-lazyload'

import toast from 'components/content/toast'

import ELementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(toast);
Vue.use(ELementUI);

FastClick.attach(document.body)

// Vue.use(VueLazyLoad)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
