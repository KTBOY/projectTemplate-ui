<!--
 * @Author: zlc
 * @Date: 2022-04-11 10:42:34
 * @LastEditTime: 2022-04-12 15:03:05
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \git项目\project-template\uni_template\pages\features\imageColorRecognit\index.vue
-->
<template>
  <view class="demo">
  
    <view
      class="imageUrl"
      :style="{
        backgroundImage: `url(${imageValue})`,
      }"
    >
    </view>
    <view
      class="img-box"
      v-if="state.imageStyleData.leftNearestColor"
      :style="{
        backgroundImage: `linear-gradient(360deg,rgba(${state.imageStyleData.leftNearestColor[1]},${state.imageStyleData.leftNearestColor[2]},${state.imageStyleData.leftNearestColor[3]},1)0%,rgba(${state.imageStyleData.rightNearestColor[1]},${state.imageStyleData.rightNearestColor[2]},${state.imageStyleData.rightNearestColor[3]},1)100%`,
      }"
    ></view>
      <image-color-recognit :imageUrl="imageValue" @receiveRenderData="receiveRenderData"></image-color-recognit>
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
      imageUrlData: {},
    })
    function select(e) {
      state.imageUrlData = e
      imageValue.value = e.tempFiles[0].path
    }

    function receiveRenderData(val) {
      state.imageStyleData = val

      console.log(state.imageStyleData)
    }
    return {
      imageValue,
      state,
      receiveRenderData,
      select,
    }
  },
}
</script>

<style lang="scss" scoped>

.demo {
  height: calc(100vh - 88rpx);
  overflow: hidden;
}
.img-box {
  height: calc(100vh - 618rpx);
  width: 750rpx;
}
.imageUrl {
  width: 750rpx;
  height: 530rpx;
  background-size: 100% 100%;
}
</style>
