<!--
 * @Author: zlc
 * @Date: 2022-01-14 11:19:12
 * @LastEditTime: 2022-01-20 17:44:55
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \git项目\project-template\uni_template\pages\dataEntry\popover\indexVerson\index01.vue
-->
<template>
  <view>
    <popover :list="list">
      <template #reference>
        <Skbutton>点击</Skbutton>
      </template>
    </popover>
  </view>
</template>
<script>
import popover from '@/components/dataEntry/popover/index01.vue'
import Skbutton from '@/components/basics/button/index.vue'
export default {
  components: {
    popover, //气泡提示框1.0
    Skbutton
  },
  setup() {
    const list = [
      {
        name: '选项一',
        disabled: true,
      },
      {
        name: '选项二',
        disabled: true,
      },
      {
        name: '选项三',
      },
    ]
    return {
      list,
    }
  },
}
</script>
<style lang="scss" scoped></style>
