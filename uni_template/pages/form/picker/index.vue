<!--
 * @Author: zlc
 * @Date: 2021-10-27 16:33:51
 * @LastEditTime: 2022-04-02 14:15:56
 * @LastEditors: zlc
 * @Description: picker选择器
 * @FilePath: \git项目\project-template\uni_template\pages\form\picker\index.vue
-->
<template>
  <view class="demo">
    <div class="demo-title">基础用法</div>
      <div class="demo-layout">
        <tui-button width="200rpx" @click="handShowPicker('bottom')" >底部按钮</tui-button>
        <tui-button width="200rpx" @click="handShowPicker('top')">头部按钮</tui-button>
      </div>
      <pickerBasicUsage v-model="show" :buttonLocation="buttonLocation" :range="rangePickerList"></pickerBasicUsage>
  </view>
</template>
<script>
import pickerBasicUsage from '@/components/form/picker/index.vue'
import { ref, reactive, toRefs, onMounted, useAttrs, getCurrentInstance } from 'vue'
export default {
  components: {
    pickerBasicUsage,
  },
  setup() {
    const show = ref(false)
    const value = ref(0)
    const rangePickerList = ref([1, 2, 3])
    const buttonLocation=ref('bottom')
    const range = ref([
      { value: 0, text: '底部按钮', key: 'bottom' },
      { value: 1, text: '顶部按钮', key: 'top' },
    ])
    function handShowPicker(e) {
   
      show.value = !show.value
      buttonLocation.value=e
    }
    function change(e){
        let {key}=e.detail.data
        buttonLocation.value=key
    }
    return {
      show,
      range,
      value,
      rangePickerList,
      buttonLocation,
      change,
      handShowPicker,
    }
  },
}
</script>

<style lang="scss" scoped>
//$uni-color-primary
.demo {
  padding: var(--page-padding--);
  &-layout{
    display: flex;
    justify-content:space-between;
  }
}
.demo-layout{

}
</style>
