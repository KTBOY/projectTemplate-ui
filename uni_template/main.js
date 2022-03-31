/*
 * @Author: zlc
 * @Date: 2021-10-13 17:07:47
 * @LastEditTime: 2022-02-24 11:15:54
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \git项目\project-template\uni_template\main.js
 */
import App from './App.vue'
//import './static/js/componentImport'
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
