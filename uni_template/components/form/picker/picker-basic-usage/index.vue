<!--
 * @Author: zlc
 * @Date: 2021-10-27 16:49:46
 * @LastEditTime: 2021-10-28 11:12:03
 * @LastEditors: zlc
 * @Description: Picker选择器
 * @FilePath: \invitationf:\编辑器\舒克前端\git项目\project-template\uni_template\components\form\picker\picker-basic-usage\index.vue
-->
<template>
  <view class="picker" v-if="modelValue" >
    <view class="picker-body" v-if="showPickerView" @tap.stop="close"></view>
    <view class="picker-view" :class="{ toggle: showPickerView }">
      <view class="info"> </view>
    </view>
  </view>
</template>
<script setup>
import {
  ref,
  reactive,
  toRefs,
  onMounted,
  useAttrs,
  getCurrentInstance,
  watch,
  nextTick,
  watchEffect,
  
} from "vue";
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
const emit =defineEmits(['update:modelValue'])
const showPickerView = ref(false);

//关闭picker
function close() {
 showPickerView.value = false
 emit('update:modelValue', showPickerView.value)
}
watch(
  () => props.modelValue,
  (newValue, oldValue) => {
    setTimeout(() => {
      showPickerView.value = newValue;
    }, 100);
  }
);
</script>

<style lang="scss" scoped>
.picker {
  &-body {
    position: fixed;
    z-index: 999;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: transparent;
    background: rgba(0, 0, 0, 0.5);
  }
  &-view {
    position: fixed;
    left: 0;
    bottom: 0;
    transform: translateY(100%);
    transition: transform 0.3s;
    width: 100%;
    z-index: 999;
    > .info {
      height: 640rpx;
      border-radius: 40rpx 40rpx 0 0;
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      
    }
  }
  .toggle {
    transform: translate(0);
  }
}
</style>