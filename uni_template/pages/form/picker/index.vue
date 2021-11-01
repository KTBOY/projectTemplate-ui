<!--
 * @Author: zlc
 * @Date: 2021-10-27 16:33:51
 * @LastEditTime: 2021-11-01 15:29:18
 * @LastEditors: zlc
 * @Description: picker选择器
 * @FilePath: \git项目\project-template\uni_template\pages\form\picker\index.vue
-->
<template>
  <view class="picker">
    <button type="button" @click="handShowPicker">打开</button>
    <uni-data-checkbox v-model="value"  :localdata="range" @change="change" :multiple="false"></uni-data-checkbox>
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
    const buttonLocation=ref('buttom')
    const range = ref([
      { value: 0, text: '底部按钮', key: 'bottom' },
      { value: 1, text: '顶部按钮', key: 'top' },
    ])
    function handShowPicker() {
      show.value = !show.value
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
.picker {
  button {
    z-index: 1;
  }
}
</style>
