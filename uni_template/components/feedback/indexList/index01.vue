<!--
 * @Author: zlc
 * @Date: 2022-04-02 17:31:52
 * @LastEditTime: 2022-04-14 22:58:32
 * @LastEditors: zlc
 * @Description: 字母索引1.0版
 * @FilePath: \gogogogo\project-template\uni_template\components\feedback\indexList\index01.vue
-->
<template>
  <view class="index-list">
    <view class="region" v-if="region.length">
      <view class="region-item" v-for="(item, index) in region"> {{ item.name }}</view>
    </view>
    <view class="list-box state-container" :style="{ height: `${state.windowData.windowHeight}px` }" v-if="indexList.length">
      <view class="left-box">
        <scroll-view
          class="scroll-box"
          :style="{ height: `${state.windowData.windowHeight}px` }"
          :scroll-y="true"
          @scroll="handleScroll"
          :scroll-into-view="state.type == 0 ? '' : `item-${state.currenIndex}`"
        >
          <view class="list-item" v-for="(item, index) in indexList" :key="index" :id="`item-${index}`">
            <view class="data-list-title">{{ item.letter }}</view>
            <view>
              <view class="data-list-content-item" v-for="(k, l) in item.data" :key="l">{{ k }}</view>
            </view>
          </view>
          <view class="fill-last" :style="{ height: state.currenMoveData.fillHeight + 'px' }"></view>
        </scroll-view>
      </view>
      <view class="right-box">
        <view class="block-list" @touchmove="handleTouchmove" @touchend="handleTouchend" @touchstart="handleTouchstart">
          <view class="focus-block" :style="{ transform: `translateY(${state.currenMoveData.moveY}px)` }">{{ indexList[state.currenIndex].letter }}</view>
          <view class="block" v-for="(item, index) in indexList" :key="index">{{ item.letter }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { onMounted, defineProps, toRefs, computed, reactive, watch, ref, nextTick } from 'vue'

const props = defineProps({
  //地区列表
  region: {
    type: Array,
    default: [],
  },
  indexList:{
     type: Array,
     default: [],
  }
})

const state = reactive({
  type: 0,
  currenIndex: 0, //索引
  windowData: {}, //屏幕相关
  currenMoveData: {},
  regionData: {},
})
const query = uni.createSelectorQuery().in(this)
watch(()=>props.indexList, async (newVal, oldVla) => {
  await nextTick()
  //增加500ms的延迟保证页面渲染完毕，才获取Dom
  setTimeout(()=>{
    query
      .select('.block-list')
      .boundingClientRect((data) => {
        state.currenMoveData.ListTop = data.top //获取该dom距离屏幕顶部的距离
      })
      .exec()
    query
      .selectAll('.block')
      .boundingClientRect((data) => {
        state.currenMoveData.currenHeight = data[0].height //获取每一个item
        state.currenMoveData.lastMoveY = data[0].height * (data.length - 1) //获取最后一个y轴
      })
      .exec()
    query
      .selectAll('.list-item')
      .boundingClientRect((data) => {
        state.currenMoveData.listTopArray = data.map((item) => {
          return item.top
        })
        /*
        * 此写法，适用商品分类等业务，普通的字母索引使用，如果最后一个数据较少会导致底部留白
        * */
        let last = data[data.length - 1].height
        if (last < state.windowData.windowHeight) {
          //state.currenMoveData.fillHeight = state.windowData.windowHeight - last
        }
      })
      .exec()
   },500) 
  console.log('获取成功')
})

function handleTouchstart(e) {
  state.type = 1
  /*
   * 1.获取当前相对于当前列表y轴距离=获取当前触摸的y轴 - 当前列表距离屏幕的高度
   * 2.获取每一个块的高度，需要除2， 因为获取的是物理高度，在uni.app中是rpx单位 ，
   * 3.uni.upx2px转化为rpx像素，但是uni.app官方已经废弃该api了，也可以进行直接state.currenMoveData.currenHeight/2
   * */
  let moveY = e.changedTouches[0].clientY - state.currenMoveData.ListTop - uni.upx2px(state.currenMoveData.currenHeight) //转换
  state.currenIndex = Math.round(moveY / state.currenMoveData.currenHeight)
  state.currenMoveData.moveY = state.currenIndex * state.currenMoveData.currenHeight
}
function handleTouchmove(e) {
  state.type = 2
  let moveY = e.changedTouches[0].clientY - state.currenMoveData.ListTop - uni.upx2px(state.currenMoveData.currenHeight)
  if (moveY >= state.currenMoveData.lastMoveY || moveY < 0) return
  state.currenIndex = Math.round(moveY / state.currenMoveData.currenHeight)
  state.currenMoveData.moveY = state.currenIndex * state.currenMoveData.currenHeight
}
function handleTouchend() {
  state.type = 0
}

function handleScroll(e) {
  /*
   * 防止触摸滚动的时候也运行scroll-view滚动函数，以免获取的索引不正确并且频繁更新页面
   * 但在商品分类业务，比如有大量图片的时候，需要监听scroll-view滚动函数，点击的时候，改函数也是需要触发的
   * 所以这种情况下，需要禁用代码state.type
   * */
  if (state.type == 1 || state.type == 2) return
  let scrollTop = e.detail.scrollTop
  for (let i = state.currenMoveData.listTopArray.length - 1; i >= 0; i--) {
    if (scrollTop + 2 >= state.currenMoveData.listTopArray[i]) {
      state.currenIndex = i
      state.currenMoveData.moveY = state.currenIndex * state.currenMoveData.currenHeight
      break
    }
  }
}

function getCityDomData() {
  query
    .select('.region')
    .boundingClientRect((data) => {
      console.log(data)
      state.regionData.height = data.height
    })
    .exec()
}
function getIndexListDomData() {
  return new Promise((resolve, reject) => {
    resolve(state.currenMoveData)
  })
}
onMounted(async () => {
  if (props.region.length) {
    getCityDomData()
  }
  await nextTick()
  await getIndexListDomData()
  if (state.regionData.height) {
    state.windowData.windowHeight = uni.getSystemInfoSync().windowHeight - state.regionData.height
    console.log(state.regionData)
  } else {
    state.windowData.windowHeight = uni.getSystemInfoSync().windowHeight
  }
})
</script>
<style lang="less">
page {
  // background-color: #ededed;
  height: 100%;
  overflow: hidden;
}
.index-list {
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
.region {
  height: 220rpx;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  &-item {
    width: 160rpx;
    height: 80rpx;
    line-height: 80rpx;
    border: 1rpx solid #e3e4e6;
    border-radius: 12rpx;
    text-align: center;
    background-color: #ffffff;
    font-size: 28rpx;
    color: #222222;
    margin: 0 13rpx;
  }
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
    .scroll-box {
      height: 100%;
    }
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

  .right-box {
    position: absolute;
    top: 50%; //用了想对定位，不用但是是否不居中，或者定位偏差过大的问题，用完相对于父元素定位了，而且用百分比定位导致获取高度错误，应该用px或者rpx
    right: 10rpx;
    transform: translateY(-50%);
    .block-list {
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
