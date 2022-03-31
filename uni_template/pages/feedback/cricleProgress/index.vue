<!--
 * @Author: zlc
 * @Date: 2021-10-18 11:07:20
 * @LastEditTime: 2022-02-24 10:30:22
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \git项目\project-template\uni_template\pages\feedback\cricleProgress\index.vue
-->
<template>
  <view class="collapse">
    <list-pages :nav="nav"></list-pages>
  </view>
</template>
<script>
import { defineComponent,reactive } from 'vue'
import listPages from '@/components/list/listPages/index.vue'
import { nav } from '@/pages/feedback/cricleProgress/list.json'
export default defineComponent({
  components: {
    'list-pages': listPages,
  },
  setup() {
    return reactive({
      nav,
    })
  },
})
</script>
