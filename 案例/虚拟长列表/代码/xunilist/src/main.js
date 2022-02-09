/*
 * @Author: zlc
 * @Date: 2022-02-09 23:15:55
 * @LastEditTime: 2022-02-09 23:30:56
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \gogogogo\project-template\案例\虚拟长列表\代码\xunilist\src\main.js
 */
import Vue from "vue";
import App from "./App";
//引入路由相关配置
import router from "./router";

//阻止启动生产环境提醒
Vue.config.productionTip = true;
//实例化Vue对象，挂载对应Dom节点、加入路由依赖、核心入口组件

const app = new Vue({
  router,
  render: (h) => h(App),
});

app.$mount("#app");

createApp(App).mount('#app')
