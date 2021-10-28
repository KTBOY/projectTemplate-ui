<!--
 * @Author: zlc
 * @Date: 2021-10-27 16:49:46
 * @LastEditTime: 2021-10-28 16:57:48
 * @LastEditors: zlc
 * @Description: Picker选择器
 * @FilePath: \invitationf:\编辑器\舒克前端\git项目\project-template\uni_template\components\form\picker\index.vue

-->
<template>
  <view class="picker" v-if="modelValue">
    <view class="picker-body" v-if="showPickerView" @tap.stop="close"></view>
    <view class="picker-bg" :class="{ toggle: showPickerView }">
      <view class="info">
        <view class="picker-view-content">
          <picker-view
            v-if="true"
            class="picker-view"
            :indicator-style="indicatorStyle"
            :value="value"
            mask-class="mask-class"
            @change="handleChange"
          >
            <picker-view-column class="picker-view-column">
              <view class="item" v-for="(item, index) in range" :key="index">{{
                getItemValue(item,'selector')
              }}</view>
            </picker-view-column>
          </picker-view>
        </view>

        <view class="picker-footer">
           <button type="button">{{cancelText}}</button>
           <button type="button">{{confirmText}}</button>
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
 * @property {Boolean} mask-close-able 是否允许通过点击遮罩关闭Picker（默认true）
 * @property {Array} default-selector 数组形式，其中每一项表示选择了range对应项中的第几个
 * @property {Array} range 自定义选择的数据，mode=selector或mode=multiSelector时有效
 * @property {String} range-key 当range参数的元素为对象时，指定Object中的哪个key的值作为选择器显示内容
 * @event {Function} confirm 点击确定按钮，返回当前选择的值
 * @event {Function} cancel 点击取消按钮，返回当前选择的值
 * @example <u-picker v-model="show" mode="time"></u-picker>
 */
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
import { getType } from "@/utils/index.js";
const props = defineProps({
  //控制picker显示隐藏
  modelValue: {
    type: Boolean,
    default: false,
  },
  //需要渲染的内容
  range:{
    type:Array,
    required:true
  },
  //指定Object中的哪个key的值
  rangeKey:{
    type:String,
    default:""
  },
  //确认按钮
  confirmText:{
    type:String,
    default:"确认"
  },
  //确认按钮
  cancelText:{
    type:String,
    default:"取消"
  }
});
const emit = defineEmits(["update:modelValue"]);
const value = ref([0]);
const indicatorStyle = ref("height: 50px");
const showPickerView = ref(false);
//关闭picker
function  close() {
  showPickerView.value = false;
  //需要等动画结束了去更新父组件
  setTimeout(()=>{
      emit("update:modelValue", showPickerView.value);
  },100)
}


function handleChange(e) {

  console.log(e);
}

function getItemValue(item,mode){
   return getType(item)=='object' ?item[props.rangeKey]:item
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
          height:100rpx;
          line-height:100rpx;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #000000;
        }
      }
    }
  }
  .picker-footer{
    display: flex;
  }
}

.mask-class{
  border-radius: 40rpx 40rpx 0 0;
}
</style>