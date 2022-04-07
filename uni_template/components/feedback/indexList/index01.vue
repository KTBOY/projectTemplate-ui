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
    <view class="list-box state-container" :style="{height:`${state.windowData.windowHeight}px`}">
      <view class="left-box">
        <scroll-view :style="{height:`${state.windowData.windowHeight}px`}" :scroll-y="true" @scroll="handleScroll" :scroll-into-view="state.type == 0 ? '' : `item-${state.currenIndex}`">
          <view class="list-item" v-for="(item,index) in testList" :key="index" :id="`item-${index}`">
            <view class="data-list-title">{{ item.letter }}</view>
            <view>
              <view class="data-list-content-item" v-for="(k, l) in item.data" :key="l">{{ k }}</view>
            </view>
          </view>
          <view class="fill-last" :style="{ height: state.currenMoveData.fillHeight + 'px' }">

          </view>
        </scroll-view>
      </view>
      <view class="right-box">
        <view class="block-list"  @touchmove="handleTouchmove" @touchend="handleTouchend" @touchstart="handleTouchstart" >
          <view class="focus-block"
          :style="{transform:`translateY(${state.moveData.moveY}px)`}"
          >{{ testList[state.currenIndex].letter }}</view>
          <view class="block" v-for="(item, index) in testList" :key="index" >{{ item.letter }}</view>
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
  currenMoveData:{},
  moveData:{}
})

watch(testList,async (newVal,oldVla)=>{
   await nextTick()
	 let query=uni.createSelectorQuery().in(this)
	 query.select('.block-list').boundingClientRect(data => {
		 state.currenMoveData.ListTop=data.top;//获取该dom距离屏幕顶部的距离
	 }).exec();
	 query.selectAll('.block').boundingClientRect(data => {
		  state.currenMoveData.currenHeight=data[0].height;//获取每一个item
		  state.moveData.lastMoveY=data[0].height * (data.length - 1);//获取最后一个y轴
	 }).exec();
   query.selectAll('.list-item').boundingClientRect(data=>{
     console.log(data)
     state.moveData.listTopArray=data.map(item=>{
       return item.top
     })
     /*
     * 此写法，适用商品分类等业务，普通的字母索引使用，会导致底部留白
     * */
     let last = data[data.length - 1]?.height
     if (last< state.windowData.windowHeight) {
       //state.currenMoveData.fillHeight = state.windowData.windowHeight - last
     }
   }).exec();
  console.log('获取成功')
},{immediate:true})

function  handleTouchstart(e){
  state.type=1
  /*
  * 1.获取当前触摸的y轴 - 当前列表距离屏幕的高度//获取当前相对于当前列表y轴距离
  * 2.获取每一个块的高度，需要除2， 因为获取的是物理高度，在uni.app中是rpx单位 ，
  * 3.uni.upx2px转化为rpx像素，但是uni.app官方已经废弃该api了，也可以进行直接state.currenMoveData.currenHeight/2
  * */
  let moveY=e.changedTouches[0].clientY -state.currenMoveData.ListTop - uni.upx2px(state.currenMoveData.currenHeight)//转换
  state.currenIndex=Math.round(moveY/ state.currenMoveData.currenHeight)
  state.moveData.moveY=state.currenIndex * state.currenMoveData.currenHeight

}
function  handleTouchmove(e){
  state.type= 2;
  let moveY=e.changedTouches[0].clientY -state.currenMoveData.ListTop - uni.upx2px(state.currenMoveData.currenHeight)
  if(moveY>= state.moveData.lastMoveY ||moveY<0) return
  state.currenIndex=Math.round(moveY/ state.currenMoveData.currenHeight)
  state.moveData.moveY=state.currenIndex * state.currenMoveData.currenHeight
}
function  handleTouchend(){
  state.type= 0;
}

function handleScroll(e){
  if(state.type==1||state.type==2) return
  let scrollTop = e.detail.scrollTop
  for (let i=state.moveData.listTopArray.length - 1; i >= 0; i--){
    if(scrollTop+2>=state.moveData.listTopArray[i]){
      state.currenIndex=i;
      state.moveData.moveY=state.currenIndex * state.currenMoveData.currenHeight
      break;
    }
  }


}
onMounted(()=>{

  state.windowData.windowHeight=uni.getSystemInfoSync().windowHeight
  console.log( state.windowData)
})
</script>
<style lang="less">
page {
  // background-color: #ededed;
  height: 100%;
}
.index-list{
  height: 100%;
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
