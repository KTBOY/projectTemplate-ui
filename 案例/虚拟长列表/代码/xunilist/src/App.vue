<!--
 * @Author: zlc
 * @Date: 2022-02-09 23:15:55
 * @LastEditTime: 2022-02-09 23:23:42
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \gogogogo\project-template\案例\虚拟长列表\代码\xunilist\src\App.vue
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
