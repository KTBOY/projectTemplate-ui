<!--
 * @Author: zlc
 * @Date: 2021-10-18 11:06:28
 * @LastEditTime: 2021-12-29 16:14:50
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \git项目\project-template\uni_template\components\form\collapse\index.vue
-->
<template>
  <view class="collapse">
    <slot />
  </view>
</template>
<style lang="scss" scoped>
.title {
}
.collapse {
  &-head {
    display: flex;
  }
  &-info {
    > .title {
      width: 600rpx;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  &-icon {
    transition: all 0.3s;
  }
  .icon-active {
    transform: rotate(90deg) !important;
    transform-origin: center center !important;
  }

  // 内容
  &-body {
    overflow: hidden;
    transition: all 0.3s;
    > .content {
      overflow: hidden;
      font-size: 28rpx;
      text-align: left;
    }
  }
}
</style>