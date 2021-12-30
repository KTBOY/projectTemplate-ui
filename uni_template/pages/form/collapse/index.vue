<!--
 * @Author: zlc
 * @Date: 2021-10-18 11:07:20
 * @LastEditTime: 2021-12-29 17:39:52
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \git项目\project-template\uni_template\pages\form\collapse\index.vue
-->
<template>
  <view class="collapse">
    <list-pages :nav="nav"></list-pages>
  </view>
</template>
<script lang="ts">
import { defineComponent,reactive } from 'vue'
import listPages from '@/components/list/listPages/index.vue'
import { nav } from '@/pages/form/collapse/list.json'
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
