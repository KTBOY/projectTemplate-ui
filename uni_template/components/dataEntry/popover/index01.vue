<!--
 * @Author: zlc
 * @Date: 2022-01-18 15:39:16
 * @LastEditTime: 2022-01-20 17:01:27
 * @LastEditors: zlc
 * @Description: 气泡弹出框1.0
 * @FilePath: \git项目\project-template\uni_template\components\dataEntry\popover\index01.vue
-->
<template>
  <view class="popover">
    <view ref="reference" class="reference"> <slot name="reference"></slot></view>
    <view :class="['popover-card', popoverContent]" :style="getStyle">
      <view :class="popoverArrow" :style="getArrowStyle"> </view>
      <slot name="content"></slot>
      <view class="title-item" v-for="(item, index) in list" :key="index">
        <!-- <slot v-if="item.icon"> <nut-icon class="item-img" :name="item.icon"></nut-icon></slot> -->
        <view class="title-name">{{ item.name }}</view>
      </view>
    </view>
  </view>
</template>
<script setup>
import { onMounted, defineProps, toRefs, computed, reactive } from 'vue'
import { getSystemInfoCalendarSelectorQuery } from '@/utils/uniApi.js'

const props = defineProps({
  list: {
    type: Array,
    default: [{}],
  },
  location: {
    type: String,
    default: 'bottom',
  },
})
const { location } = toRefs(props)

const state = reactive({
  popoverElement: {}, //内容Dom数据
})

//计算内容使用的方向
const popoverContent = computed(() => {
  const prefixCls = 'popoverContent'
  return {
    [prefixCls]: true,
    [`${prefixCls}--${location.value}`]: location.value,
  }
})
//计算使用的箭头方向
const popoverArrow = computed(() => {
  const prefixCls = 'popoverArrow'
  return {
    [prefixCls]: true,
    [`${prefixCls}--${location.value}`]: location.value,
  }
})

//计算内容方向
const getStyle = computed(() => {
  const style = {}
  if (location.value == 'top') {
    style.bottom = state.elHeight + 10 + 'px'
  } else if (location.value == 'right') {
    style.top = 0 + 'px'
    style.right = -state.elWidth + 'px'
  } else if (location.value == 'left') {
    style.top = 0 + 'px'
    style.left = -state.elWidth + 'px'
  } else {
    style.top = state.elHeight + 10 + 'px'
  }

  return style
})

//计算箭头位置
const getArrowStyle = computed(() => {
  const style = {}
  if (location.value == 'top') {
    style.bottom = -20 + 'px'
    style.left = state.popoverElement.width / 2 + 'px'
  } else if (location.value == 'right') {
    style.top = 20 + 'px'
    style.left = -20 + 'px'
  } else if (location.value == 'left') {
    style.top = 20 + 'px'
    style.right = -20 + 'px'
  } else {
    style.left = state.popoverElement.width / 2 + 'px'
    style.top = -20 + 'px'
  }
  console.log(style)
  return style
})
onMounted(async () => {
  let res = await getSystemInfoCalendarSelectorQuery('.popoverContent')
  state.popoverElement = res
  console.log(res)
  console.log(props.list)
})
</script>
<style lang="scss" scope>
.popover-card {
  background-color: #4b4c4d;
  opacity: 1;
  font-size: 14px;
  font-family: PingFangSC;
  font-weight: normal;
  color: #ffffff;
  display: inline-block;
  border-radius: 10px;
}
.popoverContent--left,
.popoverContent--right,
.popoverContent--top,
.popoverContent {
  position: relative;
  margin: 15px;
}
.title-item {
  display: flex;
  align-items: center;
  padding-bottom: 8px;
  margin: 8px;
  border-bottom: 1px solid #ffffff;
  &:first-child {
    margin-top: 15px;
  }
  &:last-child {
    margin-bottom: 2px;
    border-bottom: none;
  }
  .title-name {
    margin-right: 12px;
    margin-left: 8px;
    width: 100%;
  }
}
.popoverContent--bottom {
  .popoverArrow--bottom {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 10px solid transparent;
    border-bottom: 10px solid #4b4c4d;
  }
}
.popoverContent--top {
  .popoverArrow--top {
    position: absolute;
    top: auto;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 10px solid #4b4c4d;
    border-bottom: 10px solid transparent;
  }
}
.popoverContent--left {
  .popoverArrow--left {
    position: absolute;
    border-left: 10px solid #4b4c4d;
    border-right: 10px solid transparent;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
  }
}
.popoverContent--right {
  .popoverArrow--right {
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid #4b4c4d;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
  }
}
</style>
