<!--
 * @Author: zlc
 * @Date: 2021-10-18 11:07:20
 * @LastEditTime: 2022-04-02 11:57:43
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \git项目\project-template\uni_template\pages\form\collapse\indexVerson\index01.vue
-->
<template>
  <view class="collapse">
    <view class="demo-title">手风琴</view>
     <Card>
      <view class="collapse-area">
        <Collapse>
          <CollapseItem @change="itemChange" :title="item.head" :open="item.open" :accordion="false" :index="index" v-for="(item, index) in itemList" :key="index">
            {{ item.body }}
          </CollapseItem>
        </Collapse>
      </view>
    </Card> 
  </view>
</template>
<script>
import { defineComponent, ref } from 'vue'
import Card from '@/components/form/card/index.vue'
import Collapse from '@/components/form/collapse/index01.vue'
import CollapseItem from '@/components/form/collapse/collapse-item01.vue'
export default {
  components: {
    Card,
    Collapse,
    CollapseItem,
  },

  setup() {
    const value = ref(0)
    const range = ref([
      { value: 0, text: '基础用法' },
      { value: 1, text: '手风琴' },
    ])
    const accordion = ref(true)
    const itemList = ref([
      {
        head: '赏识在于角度的转换',
        body: '只要我们正确择取一个合适的参照物乃至稍降一格去看待他人，值得赏识的东西便会扑面而来',
        open: false,
        disabled: true,
      },
      {
        head: '生活中不是缺少美，而是缺少发现美的眼睛',
        body: '学会欣赏，实际是一种积极生活的态度，是生活的调味品，会在欣赏中发现生活的美',
        open: false,
      },
      {
        head: '周围一些不起眼的人、事、物，或许都隐藏着不同凡响的智慧',
        body: '但是据说雕刻大卫像所用的这块大理石，曾被多位雕刻家批评得一无是处，有些人认为这块大理石采凿得不好，有些人嫌它的纹路不够美',
        open: false,
      },
    ])

    function itemChange(val) {
      console.log(val)
      itemList.value.forEach((item, index) => {
        if (val == index) {
          item.open = !item.open
        } else {
          item.open = false
        }
      })
    }
    function change(e) {
      console.log(e)

      accordion.value = e.detail.value == 0 ? true : false
    }
    return {
      itemList,
      itemChange,
      value,
      range,
      change,
      accordion,
    }
  },
}
</script>
<style lang="scss" scoped>
.collapse {
  padding: 15rpx 20rpx;
  &-text {
    color: #a59da6;
    margin: 15rpx 0;
  }
}
.active {
  color: red;
}
</style>
