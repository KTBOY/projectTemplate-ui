<!--
 * @Author: zlc
 * @Date: 2022-01-20 17:20:00
 * @LastEditTime: 2022-01-20 17:52:53
 * @LastEditors: zlc
 * @Description: 按钮组件
 * @FilePath: \git项目\project-template\uni_template\components\basics\button\index.vue
-->
<template>
  <view class="button">
    <button :class="buttonType">
      <slot></slot>
    </button>
  </view>
</template>
<script setup>
import { onMounted, defineProps, toRefs, computed, reactive } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'default', //default默认按钮，primary主要按钮
  },
})
const { type } = toRefs(props)
const buttonType = computed(() => {
  const prefixCls = 'buttonType'
  return {
    [prefixCls]: true,
    [`${prefixCls}--${type.value}`]: type.value,
  }
})
</script>
<style scoped lang="scss">
.buttonType--default {
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-align: center;
  padding:10rpx 15rpx;
}
</style>
