/*
 * @Author: zlc
 * @Date: 2021-10-13 17:07:47
 * @LastEditTime: 2021-10-29 20:20:59
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \git项目\project-template\uni_template\main.js
 */
import App from './App.vue'

// #ifndef VUE3
import Vue from 'vue'

Vue.config.productionTip = true
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'

export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
