<!--
 * @Author: zlc
 * @Date: 2021-11-01 10:47:18
 * @LastEditTime: 2021-11-01 15:31:00
 * @LastEditors: zlc
 * @Description: 步骤条
 * @FilePath: \git项目\project-template\uni_template\pages\form\step\index.vue
-->
<template>
  <view class="step">
    <step :mode="mode" :stepIndex="1">
      <template v-slot:icon="value">
        <view class="step-item-icon" :class="{ 'step-item-icon-no': value.index > 0 }">{{ value.index + 1 }}</view>
      </template>
    </step>
    <view>
          <uni-data-checkbox v-model="value" :localdata="range" @change="change" :multiple="false"></uni-data-checkbox>
    </view>
  
  </view>
</template>

<script>
import step from '@/components/form/steps/index'
import { ref } from 'vue'
export default {
  components: {
    step,
  },

  setup(props) {
    const value = ref(0)
    const range = ref([
      { value: 0, text: '基础用法', key: '' },
      { value: 1, text: '自定义icon', key: 'number' },
    ])
    const mode=ref('number')
    function change(e) {
      let { key } = e.detail.data
      mode.value = key
    }
    return {
      value,
      range,
      change,
      mode
    }
  },
}
</script>
<style lang="scss" scoped>

.step{
    padding: 15rpx 20rpx;
}
.step-item-icon {
  background: red;
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
.step-item-icon-no {
  background-color: #cbccd0;
  box-shadow: 0 0 5rpx 10rpx #e7e7ea;
}
</style>
