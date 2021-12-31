<!--
 * @Author: zlc
 * @Date: 2021-10-18 11:07:20
 * @LastEditTime: 2021-12-31 11:44:13
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \git项目\project-template\uni_template\pages\animation\cricleProgress\index.vue
-->
<template>
  <view class="collapse">
    <list-pages :nav="nav"></list-pages>
  </view>
</template>
<script lang="ts">
import { defineComponent,reactive } from 'vue'
import listPages from '@/components/list/listPages/index.vue'
import { nav } from '@/pages/animation/cricleProgress/list.json'
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
