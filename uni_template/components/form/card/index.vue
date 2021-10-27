<!--
 * @Author: zlc
 * @Date: 2021-10-18 11:46:50
 * @LastEditTime: 2021-10-18 11:58:18
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \invitationf:\编辑器\舒克前端\git项目\project-template\uni_template\components\form\card\index.vue
-->
<template>
  <view class="card">
   <slot/>
  </view>
</template>
<style lang="scss" scoped>
.card {
  height: auto;
  background-color: #ffffff;
  border-radius: 20rpx;
  padding: 20rpx 15rpx;
  box-shadow: 0rpx 0rpx 10rpx #d4d4d4;
}
</style>