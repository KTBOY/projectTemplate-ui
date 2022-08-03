<!--
 * @Author: zlc
 * @Date: 2022-08-01 18:01:02
 * @LastEditTime: 2022-08-03 16:45:52
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \project-template\uni_template\components\features\shopMenu\indexMassData.vue
-->
<template>
  <view class="menu">
    <view class="scroll-panel">
      <view class="left">
        <scroll-view :scroll-y="true" class="left-scroll" :style="{ height: `${defineLeft.scrollHeight}px` }" :scroll-into-view="leftIntoView" :scroll-with-animation="true">
          <view class="info">
            <view class="item-active" :style="{ transform: `translateY(${defineLeft.currenMoveData.moveY}px)` }">
              <text class="active-name">{{ testIndex[defineLeft.index] }}</text>
            </view>
            <view class="item" v-for="(item, index) in testIndex" :key="index" :id="`left-${index}`" @click="leftClickButton(index)">
              <text class="name">
                {{ item }}
              </text>
            </view>
          </view>
        </scroll-view>
      </view>
      <view class="right">
        <scroll-view
          :scroll-y="true"
          class="right-scroll"
          :style="{ height: `${defineLeft.scrollHeight}px` }"
          :scroll-top="defineRight.scrollTop"
          @scroll="rightClickButton"
          @scrolltolower="scrolltolower"
          :scroll-with-animation="true"
        >
          <view class="info">
            <view class="item-parent" :id="'right-' + index" v-for="(item, index) in test" :key="index">
              <view class="class-item">
                <view class="item-title">
                  <text>{{ item.name }}</text>
                </view>
                <block v-for="(item1, index1) in item.data" :key="index1">
                  <view class="item-container">
                    {{ item1.classify }}
                  </view>
                </block>
              </view>
            </view>
          </view>
          <view class="fill-last" :style="{ height: state.fillHeight + 'px' }"> </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { onMounted, defineProps, defineEmits, computed, reactive, nextTick } from 'vue'
import { getSystemInfo } from '@/utils/uniApi.js'
import { debounce } from '@/utils/Function.js'
const query = uni.createSelectorQuery().in(this)
const props = defineProps({
  test: {
    type: Array,
  },
  testIndex: {
    type: Array,
  },
})
const state = reactive({
  windowHeight: 0,
  scrollTopSize: 0,
  fillHeight: 0,
})
const defineLeft = reactive({
  index: 0,
  scrollHeight: 0,
  currenMoveData: {
    moveY: 0,
    currenHeight: 0,
  },
})
const defineRight = reactive({
  scrollTop: 0,
  allScrollTopHeight: 0,
  deltaY: 0,
  isSole: false,
  oldScrollTop: 0,
  topArrList: [],
})
const leftIntoView = computed(() => {
  return `left-${defineLeft.index > 1 ? defineLeft.index - 2 : 0}`
})
//左侧切换分类
const leftClickButton = async (value) => {
  defineRight.scrollTop = defineRight.oldScrollTop
  await nextTick()
  defineRight.scrollTop = defineRight.topArrList[value]
  setTimeout(() => {
    defineLeft.index = value
  }, 500)
}
const defineLeftFun = {
  getClassifyElement() {
    query
      .select('.item')
      .boundingClientRect((data) => {
        return new Promise((resolve, reject) => {
          defineLeft.currenMoveData.currenHeight = data.height //获取第一个item的高度
          resolve(data)
        }).catch((err) => {
          this.currenMoveData.currenHeight = 50
        })
      })
      .exec()
  },
}

const defineRightFun = {
  getElementTop() {
    return new Promise((resolve, reject) => {
      query
        .selectAll('.item-parent ')
        .boundingClientRect((data) => {
          resolve(data)
        })
        .exec()
    }).then((res) => {
      defineRight.topArrList = res.map((item) => {
        return item.top - state.scrollTopSize
      })
      let last = res[res.length - 1]?.height
      if (last - 20 < defineLeft.scrollHeight) {
        state.fillHeight = defineLeft.scrollHeight - last + 30
      } else {
        state.fillHeight = 100
      }
    })
  },
}

//右侧滚动事件
const rightClickButton = debounce((e) => {
  const { scrollTop, scrollHeight, deltaY } = e.detail
  let index = 0
  for (let i = defineRight.topArrList.length - 1; i >= 0; i--) {
    if (scrollTop + 2 >= defineRight.topArrList[i]) {
      index = i
      break
    }
  }
  defineRight.oldScrollTop = defineRight.topArrList[index]
  defineLeft.index = index < 0 ? 0 : index
  defineLeft.currenMoveData.moveY = defineLeft.index * defineLeft.currenMoveData.currenHeight
})
//右侧触底
const scrolltolower = (e) => {
  defineRight.isSole = true
}
const shopMenuFun = {
  initScrollView() {
    return new Promise((resolve, reject) => {
      query
        .select('.scroll-panel')
        .boundingClientRect((res) => {
          state.scrollTopSize = res?.top
          resolve()
        })
        .exec()
    })
  },
}

onMounted(async () => {
  const { windowHeight } = await getSystemInfo()
  defineLeft.scrollHeight = windowHeight
  await shopMenuFun.initScrollView()
  await defineLeftFun.getClassifyElement()
  await defineRightFun.getElementTop()
})
</script>

<style scoped lang="scss">
.scroll-panel {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
}
.left {
  width: 180rpx;
  box-sizing: border-box;
  font-size: 32rpx;
  &-scroll {
    background-color: #f2f4f6;
  }
  .info {
    .item {
      width: 180rpx;
      height: 100rpx;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      font-size: 26rpx;
      color: #444;
      font-weight: 400;
      justify-content: center;
    }
  }
  .item-active {
    width: 180rpx;
    height: 100rpx;
    position: absolute;
    font-size: 28rpx;
    font-weight: 600;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    .active-name {
      z-index: 10;
    }
  }
}
.right {
  flex: 1;
  .info {
    background-color: #f2f4f6;
    width: 100%;
  }
  .item-parent + .item-parent {
    width: 530rpx;
    height: 200rpx;
    border-top: 2rpx solid #e3e4e6;
    .class-item {
      .item-title {
        font-size: 28rpx;
        font-family: Source Han Sans CN;
        color: #222222;
        font-weight: bold;
      }
    }
  }
}
</style>
