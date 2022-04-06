<!--
 * @Author: zlc
 * @Date: 2022-04-02 17:31:52
 * @LastEditTime: 2022-04-06 11:09:02
 * @LastEditors: zlc
 * @Description: 字母索引1.0版
 * @FilePath: \git项目\project-template\uni_template\components\feedback\indexList\indexList01.vue
-->
<template>
  <view class="index-list">
    <view class="list-box">
      <view class="left-box">
        <scroll-view :scroll-y="true" @scroll="handleScroll" :scroll-into-view="state.type === 0 ? '' : `list-item-${state.currenIndex}`">
          <view class="list-item" v-for="(item,index) in testList" :key="index" :id="`list-item-${state.currenIndex}`">
            <view class="data-list-title">{{ item.letter }}</view>
            <view>
              <view @click="onSelect(item)" class="data-list-content-item" v-for="(k, l) in item.data" :key="l">{{ k }}</view>
            </view>
          </view>
        </scroll-view>
      </view>
      <view class="right-box">
        <view class="block-list" @touchstart="handleTouchstart" @touchmove="handleTouchmove" @touchend="handleTouchend">
<!--         <view class="focus-block">{{ testList[currenIndex].letter }}</view>-->
          <view class="block" v-for="(item, index) in testList" :key="index">{{ item.letter }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { onMounted, defineProps, toRefs, computed, reactive, watch, ref,nextTick} from 'vue'
import city from './city.js'
const testList= reactive(city)
const state = reactive({
  type:0,
  currenIndex:0,//索引
  windowData:{},//屏幕相关
  currenData:{},
  moveData:{}
})

watch(testList,async (newVal,oldVla)=>{
 await nextTick()
	 let query=uni.createSelectorQuery().in(this)
	 query.selectAll('.block-list').boundingClientRect(data => {
		 state.currenData.ListTop=data[0].top;//获取该dom距离屏幕顶部的距离
	 }).exec();
	 query.selectAll('.block').boundingClientRect(data => {
		  state.currenData.currenHeight=data[0].height;//获取每一个item
		  state.moveData.maxMoveY=data[0].height * (data.height - 1)
	 }).exec();
 
},{immediate:true})

function  handleTouchstart(e){
  state.type=1
  console.log(state.currenData)
  /*
  * 1.获取当前触摸的y轴 - 当前列表距离屏幕的高度//获取当前相对于当前列表y轴距离
  * 2.获取每一个块的高度，需要除2， 因为获取的是物理高度，在uni.app中是rpx单位 ，
  * 3.uni.upx2px转化为rpx像素，但是uni.app官方已经废弃该api了，也可以进行直接state.currenData.currenHeight/2
  * */
  let moveY=e.changedTouches[0].clientY -state.currenData.ListTop - uni.upx2px(state.currenData.currenHeight)//转换
  state.currenIndex=Math.round(moveY/ state.currenData.currenHeight)
  console.log(state.currenIndex)
}
function  handleTouchend(){

}
function  handleTouchmove(){

}
function handleScroll(){

}
onMounted(()=>{
  state.windowData.windowHeight=uni.upx2px(uni.getSystemInfoSync().windowHeight)
  console.log( state.windowData)
})
</script>
<style lang="scss" scoped>
.index-list{
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-size: 28rpx;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #222222;
}
.list-box {
  flex: 1;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  .left-box {
    height: 100%;
    display: flex;
    padding: 0 60rpx 0 30rpx;
    box-sizing: border-box;
      .list-item {
        .data-list-title {
          color: #909399;
          line-height: 60rpx;
        }
        .data-list-content-item {
          line-height: 100rpx;
          border-bottom: 1px solid #eeeeee;
        }
      }

  }

  .right-box{
    position: fixed;
    top: 40%;
    transform: translateY(-40%);
    right: 10rpx;
    .block-list{
      width: 40rpx;
      text-align: center;
      font-size: 20rpx;


      .block {
        width: 100%;
        height: 40rpx;
        line-height: 40rpx;
        color: #a8a8a8;
      }

      .focus-block {
        width: 100%;
        height: 40rpx;
        line-height: 40rpx;
        position: absolute;
        top: 0;
        background-color: #2878ff;
        color: #ffffff;
        border-radius: 50%;
      }
    }
  }
}
</style>
