<!--
 * @Author: zlc
 * @Date: 2022-01-14 11:19:12
 * @LastEditTime: 2022-01-18 17:54:03
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \git项目\project-template\uni_template\pages\dataEntry\popover\indexVerson\index01.vue
-->
<template>
  <view>
    <popover>
      <template #reference>
        <button type="button">点击</button>
      </template>
    </popover>
  </view>
</template>
<script>
import popover from '@/components/dataEntry/popover/index01.vue'
export default {
  components: {
    popover, //气泡提示框1.0
  },
}
</script>
<style lang="scss" scoped></style>
