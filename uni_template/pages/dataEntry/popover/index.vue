<!--
 * @Author: zlc
 * @Date: 2022-01-14 11:20:34
 * @LastEditTime: 2022-01-14 11:29:38
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \git项目\project-template\uni_template\pages\dataEntry\popover\index.vue
-->
<template>
  <view class="popover">
    <list-pages :nav="nav"></list-pages>
  </view>
</template>
<script lang="ts">
import { defineComponent,reactive } from 'vue'
import listPages from '@/components/list/listPages/index.vue'
import { nav } from '@/pages/dataEntry/popover/list.json'
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