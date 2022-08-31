<!--
 * @Author: zlc
 * @Date: 2022-08-01 18:01:02
 * @LastEditTime: 2022-08-31 16:18:30
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \project-template\uni_template\components\features\shopMenu\indexMoreData.vue
缺点：依然没有针对分页或者虚拟长列表,需要获取列表数据的dom
优点：定位准确、衔接性好

1.获取当前可以使用的高度
  1.1屏幕的高度-其他模块高度height: calc(100vh - 45px（底部栏） - 44px顶部栏 - 45px其他);
  1.1或者通过js获取dom的高度进行操作
  1.2再获取可以使用的高度
  1.3计算可滚动区域距离头部多大，因为需要获取的每一项目的距离头部的高度
2.定义左侧布局
  1.1通过scroll-into-view来滚动定位，id绑定每一项item，使用computed去计算当前滚动的类，`left-${defineLeft.index > 1 ? defineLeft.index - 2 : 0}`，减2是因为往上滚动的时候尽可能显示更多的数据
  1.2不使用class切换效果，而使用transform，并没频繁的class切换引起重绘，甚至重排
  1.3高度，scroll-view一定要设置高度才能生效
  1.4 获取左侧数据的item高度
  1.5切换的时候先使用当前的滚动值，再进行赋值（使用右侧数据每一项的dom）
3.定义右侧布局
  1.1通过scroll-top来滚动定位，点击左侧类别进行切换（id绑定每一项item)，必须使用防抖，避免滚动过快导致左侧定位不准确的问题
  1.2 获取右侧数据每一项的dom
  1.3或者最后一项的高度，剩余高度=使用的高度-最后一项的高度，创建一个空div撑开最后一项（必须的，如果没有，左侧滚动就不准确）
  1.4 滚动的时候，如果滚动值>item的top则break循环，获取当前跳出循环的索引
  1.5 偏移值=索引*左侧item高度，定位左侧
  1.6 记录当前的滚动值
  
  
-->

1.定高 2.字项高*数量=item项高 3.不定高

<!-- 
 1.优化（不定高，只能每次渲染10条）-放弃
  1.1获取一屏幕可以展示多少条数据
  1.2计算开头-尾巴的数据长度
  1.3：可以看到的数据
 
 2.IntersectionObserver 当前视窗显示真实内容-其他显示展位内容，不渲染真实div，从而减少dom数量
 
 -->
<template>
  <view class="menu">
    <!-- <view class="cc">ddd</view> -->
    <view class="scroll-panel">
      <view class="left">
        <!--  -->
        <scroll-view :scroll-y="true" class="left-scroll" :style="{ height: `${state.windowHeight}px` }" :scroll-into-view="leftIntoView" :scroll-with-animation="true">
          <view class="info">
            <view class="item-active" :style="{ transform: `translateY(${defineLeft.currenMoveData.moveY}px)` }">
              <text class="active-name">{{ testIndex[defineLeft.index] }}</text>
            </view>
            <view class="item" v-for="(item, index) in testIndex" :key="index" :id="`left-${index}`" @click="leftClickButton(index)">
              <text class="name">{{ item }}</text>
            </view>
          </view>
        </scroll-view>
      </view>

      <view class="right">
        <scroll-view
          :scroll-y="true"
          class="right-scroll"
          :style="{ height: `${state.windowHeight}px` }"
          :scroll-top="defineRight.scrollTop"
          @scroll="rightClickButton"
          @scrolltolower="scrolltolower"
          :scroll-with-animation="true"
        >
          <view class="info">
            <view class="item-parent" :id="['right-' + index]" v-for="(item, index) in test" :key="item.id">
              <!-- 真实块 -->
              <view class="class-item" :id="`uid-class-${index}`" :data-index="index">
                <block v-if="state.currenHeight.isLookList[index]">
                  <block v-for="(item1, index1) in item.data" :key="index1">
                    <view class="thumb-box item-food">
                      <view class="left-info" @click="hadlerShopDetail(item)">
                        <image :src="item1.image" class="item-image" @load="defineRightFun.loadImage"></image>
                      </view>
                      <view class="right-info">
                        <view class="goods-title" @click="hadlerShopDetail(item)">{{ item.name }}</view>
                      </view>
                    </view>
                  </block>
                </block>
                <!-- 虚拟块 -->
                <block v-else>
                  <view :style="{ height: `${state.currenHeight.number[index] * 130}px` }">
                    <block> </block>
                  </view>
                </block>
              </view>
            </view>
          </view>
          <view class="fill-last" :style="{ height: state.fillHeight + 'px' }"></view>
        </scroll-view>
      </view>
    </view>
    <!-- <view class="cc">ddd</view> -->
  </view>
</template>

<script></script>

<script setup>
import { onMounted, defineProps, defineEmits, computed, reactive, nextTick, watch } from 'vue'
import { getSystemInfo } from '@/utils/uniApi.js'
import { debounce } from '@/utils/Function.js'
const query = uni.createSelectorQuery().in(this)
const observer = uni.createIntersectionObserver(this)
const props = defineProps({
  test: {
    type: Array,
    default: [],
  },
  testIndex: {
    type: Array,
  },
})
const state = reactive({
  windowHeight: 0,
  scrollTopSize: 0,
  fillHeight: 0,
  uId: '',
  showImg: false,
  currenHeight: {
    number: [2, 2, 2, 2, 2, 2, 2, 2],
    isLookList: new Array().fill(false, 0, props.test.length - 1),
    height: 130,
  },
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
  await nextTick()
  setTimeout(() => {
    defineLeft.index = value
  }, 1000)
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
      if (last - 20 < state.windowHeight) {
        state.fillHeight = state.windowHeight - last
      } else {
        state.fillHeight = 100
      }
    })
  },

  /*
   * 图片加载
   */
  loadImage(e) {
    state.showImg = true
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
  shopMenuFun.onScrollIntersectionObserverBlock()
}, 10)
//右侧触底
const scrolltolower = (e) => {
  defineRight.isSole = true
}
const shopMenuFun = {
  //获取当前可滚动区域，距离头部的距离
  initScrollView() {
    return new Promise((resolve, reject) => {
      query
        .select('.scroll-panel')
        .boundingClientRect((res) => {
          console.log(res)
          state.scrollTopSize = res.top
          resolve()
        })
        .exec()
    })
  },

  onScrollIntersectionObserverBlock() {
    uni
      .createIntersectionObserver(this)
      .relativeToViewport({ top: 100, bottom: 100 })
      .observe(`#uid-class-${defineLeft.index}`, async (res) => {
        //总高度/item=item数
        const itemHeightNum = Math.ceil(state.windowHeight / (state.currenHeight.number[defineLeft.index] * 130))
        if (res.intersectionRatio) {
          const currenIndex = defineLeft.index
          let end = currenIndex + itemHeightNum
          for (let index = defineLeft.index; index < end; index++) {
            await nextTick()
            state.currenHeight.isLookList[index] = true
          }
        } else {
          state.currenHeight.isLookList[res.dataset.index] = false
        }
      })
  },
}

onMounted(async () => {
  const { windowHeight } = await getSystemInfo()
  state.windowHeight = 500
  await shopMenuFun.initScrollView()
  await defineLeftFun.getClassifyElement()
  await defineRightFun.getElementTop()
  await nextTick()
  shopMenuFun.onScrollIntersectionObserverBlock()
})
</script>

<style scoped lang="scss">
.right-scroll,
.scroll-panel {
  overflow: hidden;
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
    transition: all 0.2s;
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
  .item-parent {
    width: 530rpx;
  }
  .item-parent + .item-parent {
    border-top: 2rpx solid #e3e4e6;
  }
  .class-item {
    .item-title {
      font-size: 28rpx;
      font-family: Source Han Sans CN;
      color: #222222;
      font-weight: bold;
    }
    .thumb-box {
      width: 100%;
      display: flex;
      height: 260rpx;
      padding: 33rpx 0;

      //左侧缩略图
      .left-info {
        width: 220rpx;
        height: 220rpx;
        border-radius: 15rpx;
        background: #f2f4f6;
        overflow: hidden !important;
        text-align: center;
        line-height: 220rpx;
        .item-image {
          width: 90rpx;
          height: 90rpx;
        }
      }

      //右侧商品说明
      .right-info {
        padding: 0 0 0 15rpx;
        width: 320rpx;
        .goods-title {
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          font-size: 32rpx;
          height: 90rpx;
          word-wrap: break-word;
        }
        .bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
  }
}
</style>
