<!--
 * @Author: zlc
 * @Date: 2021-11-01 11:33:37
 * @LastEditTime: 2021-11-01 15:29:30
 * @LastEditors: zlc
 * @Description: 步骤条
 * @FilePath: \git项目\project-template\uni_template\components\form\steps\index.vue
-->

<template>
  <view class="step">
    <view class="step-item" :class="[index + 1 == stepIndex ? 'step-item-greater' : '', index + 1 < stepIndex ? 'step-item-to' : '']" v-for="(item, index) in stepsList" :key="index">
      <view class="step-item-icon">
        <view class="step-item-icon-bg" v-if="mode == ''" :class="{ 'step-item-icon-no': index > 0 }">{{ index + 1 }}</view>
        <slot name="icon" :index="index" v-else></slot>
      </view>
      <view class="step-item-label">{{ item.name }}</view>
    </view>
  </view>
</template>

<script setup>
/**
 * step step步骤条
 * 如果在当前步骤则使用渐变css，大于的时候当前的索引则使用铺满背景色
 */
import { ref, reactive, toRefs, onMounted, useAttrs, getCurrentInstance, watch, nextTick, watchEffect } from 'vue'
const props = defineProps({
  stepIndex: {
    type: [String, Number],
    default: 2,
  },
  stepsList: {
    type: Array,
    default: [
      {
        name: '公证信息',
      },
      {
        name: '公证事项',
      },
      {
        name: '上传材料',
      },
      {
        name: '提交结果',
      },
    ],
  },
  mode: {
    type: String,
    default: '',
  },
})
</script>
<style lang="scss" scoped>
.step {
  display: flex;
  padding: 40rpx;
  &-item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    flex: 1;
    &:not(:last-child)::after {
      content: '';
      position: absolute;
      height: 6rpx;
      width: 40%;
      border-radius: 25%;
      top: 25rpx;
      right: -22.5%;
      background: #dedfe1;
    }
    &-greater::after {
      background: linear-gradient(to right, $uni-color-primary 0%, $uni-color-primary 50%, #dedfe1 50.1%, #dedfe1 100%) !important;
    }
    &-to::after {
      background: $uni-color-primary !important;
    }
    &-icon {
      width: 56rpx;
      height: 56rpx;
      &-bg {
        background: $uni-color-primary;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-content: center;
        box-shadow: 0 0 5rpx 10rpx #d2e3ff;
        padding: 5rpx;
       
      }
      &-no {
        background-color: #cbccd0;
        box-shadow: 0 0 5rpx 10rpx #e7e7ea;
      }
    }
    &-label {
      font-size: 14px;
      font-family: '微软雅黑';
      margin-top: 10rpx;
    }
  }
}
</style>
