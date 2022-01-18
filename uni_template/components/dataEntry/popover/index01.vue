<!--
 * @Author: zlc
 * @Date: 2022-01-18 15:39:16
 * @LastEditTime: 2022-01-18 17:56:49
 * @LastEditors: zlc
 * @Description: 气泡弹出框1.0
 * @FilePath: \git项目\project-template\uni_template\components\dataEntry\popover\index01.vue
-->
<template>
  <view class="popover">
    <view ref="reference" class="reference"> <slot name="reference"></slot></view>
    <view class="popover-card popover-content">
      <view class="popover-bottom"> </view>
      我是龙恩 我在气泡框内
    </view>
  </view>
</template>
<script setup>
import { onMounted } from 'vue'
import { getSystemInfoCalendarSelectorQuery } from '@/utils/uniApi.js'

onMounted(async () => {
  let res = await getSystemInfoCalendarSelectorQuery('.popover-content')
  console.log(res)
})
</script>
<style lang="scss" scope>
.popover-card {
  margin: 15rpx;
}
.popover-content {
  position: relative;
  //width: 300rpx;
  //height: 100rpx;
  border: 5px solid var(--popover-white-background-color--);
}

.popover-bottom {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 10px solid transparent;
  border-bottom: 10px solid var(--popover-white-background-color--);
}
</style>
