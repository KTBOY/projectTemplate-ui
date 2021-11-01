<!--
 * @Author: zlc
 * @Date: 2021-10-27 16:49:46
 * @LastEditTime: 2021-11-01 17:10:01
 * @LastEditors: zlc
 * @Description: Picker选择器
 * @FilePath: \git项目\project-template\uni_template\components\form\picker\index.vue

-->
<template>
  <view class="picker" v-if="modelValue">
    <view class="picker-body" v-if="showPickerView" @tap.stop="close"></view>
    <view class="picker-bg" :class="{ toggle: showPickerView }">
      <view class="info">
        <view class="picker-top" v-show="buttonLocation == 'top'">
          <button class="cancel" hover-class="none" type="button">
            {{ cancelText }}
          </button>
          <button class="confirm" hover-class="none" type="button">
            {{ confirmText }}
          </button>
        </view>
        <view class="picker-view-content">
          <picker-view v-if="true" class="picker-view" :indicator-style="indicatorStyle" :value="value" mask-class="mask-class" @change="handleChange">
            <picker-view-column class="picker-view-column">
              <view class="item" v-for="(item, index) in range" :key="index">{{ getItemValue(item, 'selector') }}</view>
            </picker-view-column>
          </picker-view>
        </view>

        <view class="picker-bottom" v-show="buttonLocation == 'bottom'">
          <button class="cancel" hover-class="none" type="button" @click="handCancel">
            {{ cancelText }}
          </button>
          <button class="confirm" hover-class="none" type="button" @click="handConfirm">
            {{ confirmText }}
          </button>
        </view>
      </view>
    </view>
  </view>
</template>
<script setup>
/**
 * picker picker弹出选择器
 * @property {String} cancel-color 取消按钮的颜色（默认#606266）
 * @property {String} confirm-color 确认按钮的颜色（默认#2979ff）
 * @property {String} buttonLocation 按钮位置（默认bottom）
 * @property {Boolean} mask-close-able 是否允许通过点击遮罩关闭Picker（默认true）
 * @property {Array} default-selector 数组形式，其中每一项表示选择了range对应项中的第几个
 * @property {Array} range 自定义选择的数据，mode=selector或mode=multiSelector时有效
 * @property {String} range-key 当range参数的元素为对象时，指定Object中的哪个key的值作为选择器显示内容
 * @event {Function} confirm 点击确定按钮，返回当前选择的值
 * @event {Function} cancel 点击取消按钮，返回当前选择的值
 * @example <u-picker v-model="show" mode="time"></u-picker>
 */
import { ref, reactive, toRefs, onMounted, useAttrs, getCurrentInstance, watch, nextTick, watchEffect } from 'vue'
import { getType } from '@/utils/index.js'
const props = defineProps({
  //控制picker显示隐藏
  modelValue: {
    type: Boolean,
    default: false,
  },
  //需要渲染的内容
  range: {
    type: Array,
    required: true,
  },
  //指定Object中的哪个key的值
  rangeKey: {
    type: String,
    default: '',
  },
  //确认按钮
  confirmText: {
    type: String,
    default: '确认',
  },
  //确认按钮
  cancelText: {
    type: String,
    default: '取消',
  },
  //按钮位置
  buttonLocation: {
    type: String,
    default: 'bottom',
  },
})
const emit = defineEmits(['update:modelValue','confirm','cancel'])
const value = ref([0])
const indicatorStyle = ref('height: 50px')
const showPickerView = ref(false)
const currenIndex=ref(0)
//关闭picker
function close() {
  showPickerView.value = false
  //需要等动画结束了去更新父组件
  setTimeout(() => {
    emit('update:modelValue', showPickerView.value)
  }, 100)
}

function handleChange(e) {
  console.log(e.currentTarget.dataset.value);
  currenIndex.value=e.currentTarget.dataset.value
  console.log(e)
}
function handConfirm() {
  let currenObject={
    currenObject:props.range[currenIndex.value],
    currenIndex:currenIndex.value
  }
  showPickerView.value=false
  emit('update:modelValue', showPickerView.value)
  emit('confirm',currenObject)
}
function handCancel(){
  showPickerView.value=false
  emit('update:modelValue', showPickerView.value)
  emit('cancel')
}
/**
 * @description: 获取需要渲染key
 * @param {Object} item
 * @param {String} mode 待定
 * @return {*}
 */
function getItemValue(item, mode) {
  return getType(item) == 'object' ? item[props.rangeKey] : item
}

watch([() => props.modelValue],(newValue, oldValue) => {
  console.log(newValue);
    setTimeout(() => {
      showPickerView.value = newValue[0];
     
    }, 100)
  }
)

</script>

<style lang="scss" scoped>
.picker {
  //背景色遮罩
  &-body {
    position: fixed;
    z-index: 999;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: transparent;
    background: rgba(0, 0, 0, 0.5);
    transition: all 0.3s;
  }
  //picke选择器
  &-bg {
    position: fixed;
    left: 0;
    bottom: 0;
    transform: translateY(100%);
    transition: transform 0.3s;
    width: 100%;
    z-index: 999;
  }
  .toggle {
    transform: translate(0);
  }
}
// picker选择的内容
.info {
  height: 640rpx;
  border-radius: 40rpx 40rpx 0 0;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  .picker-view-content {
    flex: 1;

    .picker-view {
      height: 100%;
      .picker-view-column {
        .item {
          height: 100rpx;
          line-height: 100rpx;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #000000;
        }
      }
    }
  }
  /* 底部按钮 */
  .picker-bottom {
    display: flex;

    padding-bottom: 23rpx;
    > button {
      color: #ffffff;
      height: 100rpx;
      width: 300rpx;
      border: none;
      border-radius: 150rpx;
    }
    > .confirm {
      background: $uni-color-primary;
    }
    > .cancel {
      background: #bbbbbdfc;
    }
  }
  /* 头部按钮 */
  .picker-top {
    display: flex;
    padding-top: 23rpx;
    > button {
      height: 100rpx;
      width: 300rpx;
      border: none;
      border-radius: 150rpx;
    }
    > .confirm {
      background: #ffffff;
      color: $uni-color-primary;
      text-align: right;
    }
    > .cancel {
      background: #ffffff;
      text-align: left;
    }
  }
}

button::after {
  border: none;
}
.mask-class {
  border-radius: 40rpx 40rpx 0 0;
}
</style>
