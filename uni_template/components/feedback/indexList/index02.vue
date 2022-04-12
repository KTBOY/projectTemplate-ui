<!--
 * @Author: zlc
 * @Date: 2022-04-12 22:50:12
 * @LastEditTime: 2022-04-12 23:06:28
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \gogogogo\project-template\uni_template\components\feedback\indexList\index02.vue
-->
<template>
  <view class="index-list">
    <view class="list-box state-container">
      <view class="left-box">
        <scroll-view :style="{ height: `${state.windowData.windowHeight}px` }" :scroll-y="true" @scroll="handleScroll" :scroll-into-view="state.type == 0 ? '' : `item-${state.currenIndex}`">
          <view class="list-item" v-for="(item, index) in testList" :key="index" :id="`item-${index}`">
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
          <view class="focus-block" :style="{ transform: `translateY(${state.currenMoveData.moveY}px)` }">{{ testList[state.currenIndex].letter }}</view>
          <view class="block" v-for="(item, index) in testList" :key="index">{{ item.letter }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { onMounted, defineProps, toRefs, computed, reactive, watch, ref, nextTick } from 'vue'
import city from './city.js'
const testList = ref(city)
const state = reactive({
  type: 0,
  currenIndex: 0, //索引
  windowData: {}, //屏幕相关
  currenMoveData: {},
  regionData: {},
})
const query = uni.createSelectorQuery().in(this)
watch(testList, async (newVal, oldVla) => {
  await nextTick()
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
  console.log('获取成功')
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
    top: 50%;
    transform: translateY(-50%);
    right: 10rpx;
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
