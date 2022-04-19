<!--
 * @Author: zlc
 * @Date: 2022-04-11 21:57:38
 * @LastEditTime: 2022-04-19 22:16:52
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \gogogogo\project-template\uni_template\pages\index\list.vue
-->
<template>
  <view class="collapse">
    <list-pages :nav="moduleData"></list-pages>
  </view>
</template>



<script>
import { defineComponent,reactive } from 'vue'
import listPages from '@/components/list/listPages/index.vue'
import { nav } from "@/config.json";
export default defineComponent({
  components: {
    'list-pages': listPages,
  },
  setup() {
	 const moduleData=uni.getStorageSync('moduleData')
    return reactive({
      moduleData
    })
  },
 
})
</script>
<style scoped>

</style>