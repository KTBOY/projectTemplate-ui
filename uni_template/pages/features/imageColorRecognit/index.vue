<!--
 * @Author: zlc
 * @Date: 2022-04-11 10:42:34
 * @LastEditTime: 2022-04-11 18:05:52
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \git项目\project-template\uni_template\pages\features\imageColorRecognit\index.vue
-->
<template>
  <view>
    <image-color-recognit :imageUrl="imageValue" @receiveRenderData="receiveRenderData"></image-color-recognit>
    <view><uni-file-picker v-model="imageValue" fileMediatype="image" mode="grid" @select="select" @progress="progress" @success="success" @fail="fail" /></view>

    <view
      class="imageUrl"
      :style="{
        backgroundImage: `url(${imageValue})`,
      }"
    ></view>

    <view
      class="img-box"
      v-if="state.imageStyleData.leftNearestColor"
      :style="{
        backgroundImage: `linear-gradient(360deg,rgba(${state.imageStyleData.leftNearestColor[1]},${state.imageStyleData.leftNearestColor[2]},${state.imageStyleData.leftNearestColor[3]})0%,rgba(${state.imageStyleData.rightNearestColor[1]},${state.imageStyleData.rightNearestColor[2]},${state.imageStyleData.rightNearestColor[3]})100%`,
      }"
    ></view>
  </view>
</template>

<script>
import imageColorRecognit from '@/components/features/imageColorRecognit/index01.vue'
import { ref, reactive, toRefs } from 'vue'
export default {
  name: 'index',
  components: {
    'image-color-recognit': imageColorRecognit,
  },
  setup(props) {
    const imageValue = ref('http://yd.ymyimi.cn:9001/api/yid/1629430898298.png')
    const state = reactive({
      imageStyleData: {},
    })
    function receiveRenderData(val) {
      state.imageStyleData = val

      console.log(state.imageStyleData)
    }
    return {
      imageValue,
      receiveRenderData,
      state,
    }
  },
}
</script>

<style lang="scss" scoped>
.img-box {
  height: 530rpx;
  width: 750rpx;
}
.imageUrl {
  width: 750rpx;
  height: 530rpx;
  background-size: 100% 100%;
}
</style>
