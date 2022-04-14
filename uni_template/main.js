/*
 * @Author: zlc
 * @Date: 2021-10-13 17:07:47
 * @LastEditTime: 2022-04-14 22:53:05
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \gogogogo\project-template\uni_template\main.js
 */
import App from './App.vue'
import {showToast,showLoading} from "@/utils/uniApi.js"
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
