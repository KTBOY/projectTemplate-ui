<!--
 * @Author: zlc
 * @Date: 2022-04-11 10:42:34
 * @LastEditTime: 2022-04-12 15:01:58
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \git项目\project-template\uni_template\pages\features\imageColorRecognit\indexAll.vue
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
        background:`linear-gradient(360deg, rgba(${state.imageStyleData.leftNearestColor[0]},${state.imageStyleData.leftNearestColor[1]},${state.imageStyleData.leftNearestColor[2]},1)0%, rgba(${state.imageStyleData.leftNearestColor[1]},${state.imageStyleData.leftNearestColor[2]},${state.imageStyleData.leftNearestColor[3]},1))100%`
      }"
    ></view>
    <image-color-recognit :imageUrl="imageValue" @successColor="successColor"></image-color-recognit>
  </view>
</template>

<script>
import imageColorRecognit from '@/components/features/imageColorRecognit/imageColorRecognit03.vue'
import { ref, reactive, toRefs, onMounted } from 'vue'
export default {
  name: 'index',
  components: {
    'image-color-recognit': imageColorRecognit,
  },
  setup(props) {
    const query = uni.createSelectorQuery().in(this)
    const imageValue = ref('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F052420110515%2F200524110515-2-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653750305&t=7717e57b850fb9e3f1b78433017c3cfd')
    const state = reactive({
      imageStyleData: {},
      imageUrlData: {},
    })
    function select(e) {
      state.imageUrlData = e
      imageValue.value = e.tempFiles[0].path
    }

    function successColor(val) {
      state.imageStyleData = val
	  console.log(state.imageStyleData.leftNearestColor[1])
      
	  
    }

    return {
      imageValue,
      state,
      successColor,
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

.imageUrl {
  width: 100%;
  height: 530rpx;
  background-size: 100% 100%;
}
.img-box {
  height: calc(100vh - 618rpx);
  width: 100%;
}
</style>
