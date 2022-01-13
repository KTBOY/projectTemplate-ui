<!--
 * @Author: zlc
 * @Date: 2021-12-31 11:07:16
 * @LastEditTime: 2022-01-04 14:44:34
 * @LastEditors: zlc
 * @Description: 环形进度条1.0
 * @FilePath: \git项目\project-template\uni_template\pages\animation\cricleProgress\indexVerson\index01.vue
-->
<template>
  <view class="cricleProgress">
    <view class="cricleProgress-info">
      <cricleProgress :percent="percent">
        <text>{{ percent }}%</text>
      </cricleProgress>
    </view>
    <button type="default" @touchend.prevent="touchend" @touchstart.prevent="touchstart">点我</button>
  </view>
</template>
<script>
import cricleProgress from '@/components/feedback/cricleProgress/index01.vue'
import { reactive, toRefs } from 'vue'
export default {
  components: {
    cricleProgress,
  },
  setup() {
    const data = reactive({
      percent: 20,
      endTime: 0,
      time: 0,
    })
    const touchend = (e) => {
      data.endTime = setInterval(() => {
        if (data.percent == 0) {
          clearInterval(data.endTime)
        } else {
          data.percent -= 2
          clearInterval(data.time)
        }
      }, 100)
    }
    const touchstart = (e) => {
      if (data.endTime >= 0) {
        clearInterval(data.endTime)
      }
      data.time = setInterval(() => {
        if (data.percent < 100) {
          data.percent += 2
        }
      }, 100)
    }
    return {
      ...toRefs(data),
      touchend,
      touchstart

    }
  },
}
</script>
<style lang="scss">
.cricleProgress-info{
  
}
</style>
