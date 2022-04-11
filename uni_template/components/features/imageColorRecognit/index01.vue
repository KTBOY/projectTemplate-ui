<template>
  <view class="imageColorRecognit" @click="renderScript.emitImage" :imageUrl="imageUrl" :change:imageUrl="renderScript.receiveMsg"> </view>
</template>

<script setup>
import { onMounted, defineProps, defineEmits, computed } from 'vue'
import emitImageData from './index.js'
import { state, mutations } from '@/components/features/imageColorRecognit/store.js'
const props = defineProps({
  imageUrl: {
    type: String,
  },
})
const emit = defineEmits(['receiveRenderData'])
const itemActive = computed(() => {
  return state.selectActive
})
function receiveRenderData(val) {
  // console.log('receiveRenderData-->', emitImageData);普通数据更新
  // console.log('itemActive-->', itemActive.value);//响应式数据更新
  emit('receiveRenderData', itemActive.value)
}

onMounted(() => {
  setTimeout(() => {
    receiveRenderData()
  }, 2000)
})
</script>

<script module="renderScript" lang="renderjs">
import emitImageData from "./index.js"
import { state, mutations } from '@/components/features/imageColorRecognit/store.js'
export default{
  imageUrl:null,
  data(){
    return{
      imgSrc:''
    }
  },
  mounted(){


  },
  methods:{
  // 接收逻辑层发送的数据
  receiveMsg(newValue, oldValue, ownerVm, vm) {
    console.log('newValue', newValue)
    this.imgSrc=newValue
    this.emitImage()

  },

  emitImage(e, ownerVm){
	 // var imgSrc = "http://yd.ymyimi.cn:9001/api/yid/1629430898298.png"
	  const imgEle = document.createElement('img')
	  const canvas = document.createElement('canvas')
	  imgEle.src = this.imgSrc+ '?' + new Date().getTime();
	  imgEle.setAttribute('crossOrigin', '');
	  imgEle.onload=()=>{
		console.log("加载成功",imgEle.src)
		var ctx = canvas.getContext("2d");
		var naturalImgSize = [imgEle.naturalWidth, imgEle.naturalHeight];
		canvas.width = naturalImgSize[0];
		canvas.height = naturalImgSize[1];

		//绘制到canvas
		ctx.drawImage(imgEle, 0, 0);
		//获取imageData：rgba像素点
		var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
		const leftSectionData = []
		const rightSectionData = []
		const onelineImgDataLen = canvas.width * 4;
    imgData.data.forEach((colorVal, i) => {
        if (i % onelineImgDataLen <= 0.5 * onelineImgDataLen || i % onelineImgDataLen >= 0.6 * onelineImgDataLen) {
            const inLeft = i % onelineImgDataLen <= 0.5 * onelineImgDataLen
            if (i % 4 === 0) {
                // 获取rgb均值
                const curAverageRGB = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3;
                let leftOrRightRef = inLeft ? leftSectionData : rightSectionData;
                //每个数组里存四个值：本颜色值中的r、g、b的均值，以及r、g、b三个值。
                //均值一方面用于累加计算本区域的整体均值，然后再跟每个均值对比拿到与整体均值最接近的项的索引，再取该数组里的后三个值：rgb，对应着颜色
                leftOrRightRef[leftOrRightRef.length] = [curAverageRGB, imgData.data[i], imgData.data[i + 1], imgData.data[i + 2]]
            }
        }
    })
    const averageOfLeft = Math.round(leftSectionData.reduce((_cur, item) => {
        return _cur + item[0]
    }, 0) / leftSectionData.length)
    const averageOfRight = Math.round(rightSectionData.reduce((_cur, item) => {
        return _cur + item[0]
    }, 0) / rightSectionData.length)
    //find the most near color
    const findNearestIndex = (averageVal, arrBox) => {
        let _gapValue = Math.abs(averageVal - arrBox[0])
        let _nearColorIndex = 0
        arrBox.forEach((item, index) => {
            const curGapValue = Math.abs(item - averageVal)
            if (curGapValue < _gapValue) {
                _gapValue = curGapValue
                _nearColorIndex = index
            }
        })
        return _nearColorIndex
    }

    const leftNearestColor = leftSectionData[findNearestIndex(averageOfLeft, leftSectionData)]
    const rightNearestColor = rightSectionData[findNearestIndex(averageOfRight, rightSectionData)]
    //console.log(leftNearestColor,rightNearestColor)
    var imageData={
        leftNearestColor:leftNearestColor,
        rightNearestColor:rightNearestColor,
      }
      emitImageData.imageData=imageData
      mutations.setSelectActive(imageData)
   // ownerVm.callMethod('receiveRenderData', imageData)
    }
  }
}

}
</script>
<style scoped></style>
