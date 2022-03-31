<!--
 * @Author: zlc
 * @Date: 2022-01-18 15:39:16
 * @LastEditTime: 2022-02-23 18:58:28
 * @LastEditors: zlc
 * @Description: 气泡弹出框1.0
 * @FilePath: \git项目\project-template\uni_template\components\dataEntry\popover\index01.vue
-->
<template>
  <view class="popover" @click.stop="openPopover">
    <view ref="reference" class="reference"> <slot name="reference"></slot></view>
    <template v-if="showPopup">
      <view :class="[popoverContent, getThemStyle]" :style="getStyle">
        <view :class="popoverArrow" :style="getArrowStyle"> </view>
        <slot name="content"></slot>
        <view class="title-item" v-for="(item, index) in list" :key="index">
          <slot v-if="item.icon">
            <uni-icons class="item-img" :type="item.icon" size="30"></uni-icons>
          </slot>
          <view class="title-name" @click="handleGetName(item)">{{ item.name }}</view>
        </view>
      </view>
    </template>
  </view>
</template>
<script setup>
import { onMounted, defineProps, toRefs, computed, reactive, watch, ref } from 'vue'
import { getSystemInfoCalendarSelectorQuery } from '@/utils/uniApi.js'

const props = defineProps({
  //列表
  list: {
    type: Array,
    default: [{}],
  },
  //使用的箭头方向
  location: {
    type: String,
    default: 'bottom',
  },
  //控制弹框显示隐藏
  visible: {
    type: Boolean,
    default: false,
  },
  //控制使用弹框风格
  theme: {
    type: String,
    default: 'light',
  },
})

const { location, theme } = toRefs(props)
const emit = defineEmits(['update', 'update:visible', 'choose', 'close'])
const showPopup = ref(props.visible)
const state = reactive({
  popoverElement: {}, //内容Dom数据
})

watch(
  () => props.visible,
  (value) => {
    showPopup.value = value
  }
)
onMounted(async () => {
  //获取弹出框由内容撑开的盒子元素
  let res = await getSystemInfoCalendarSelectorQuery('.reference')
  state.popoverElement = res
})

//更新子组件状态v-model
function update(val) {
  emit('update', val)
  emit('update:visible', val)
}
function handleGetName(value) {
  emit('choose', value)
}

//打开冒泡弹出框
function openPopover(event) {
  update(!props.visible)
}
const closePopover = (event) => {
  event.stopPropagation()
  event.preventDefault()
  emit('close')
  emit('update:visible', false)
}

//计算弹框颜色状态
const getThemStyle = computed(() => {
  const prefixCls = 'popoverTheme'
  return {
    [prefixCls]: true,
    [`${prefixCls}--${theme.value}`]: theme.value,
  }
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
  setTimeout(() => {
    console.log(state)
  }, 200)

  if (location.value == 'top') {
    style.bottom = state.popoverElement.height + 5 + 'px'
    style.left = 0 + 'px'
  } else if (location.value == 'right') {
    style.top = 0 + 'px'
    style.right = -state.popoverElement.width+ 20 + 'px'
  } else if (location.value == 'left') {
    style.top = 0 + 'px'
    style.left = -state.popoverElement.width + 20 + 'px'
  } else {
    style.top = state.popoverElement.height + 10 + 'px'
  }
  console.log(style)
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

  return style
})
</script>

<style lang="scss" scope>
$popover-white-background-color: rgba(255, 255, 255, 1) !default;
$popover-dark-background-color: rgba(75, 76, 77, 1) !default;
.popover {
  display: inline-block;
  vertical-align: top;
  margin: 0 20px 20px 0;
  position: relative;
}

.popoverTheme--light {
  background-color: $popover-white-background-color;
  color: '#000000';
}
.popoverTheme--dark {
  background-color: $popover-dark-background-color;
  color: #ffffff;
}
.popoverContent--left,
.popoverContent--right,
.popoverContent--top,
.popoverContent {
  position: absolute;
  margin: 15px 0;
  opacity: 1;
  font-size: 14px;
  font-family: PingFangSC;
  font-weight: normal;
  border-radius: 10px;
  padding-top: 0.5px;
  z-index: 12;
  .title-item {
    display: flex;
    align-items: center;
    padding-bottom: 8px;
    margin: 8px;
    border-bottom: 1px solid #e5e5e5;
    &:last-child {
      margin-bottom: 2px;
      border-bottom: none;
    }
    .title-name {
      margin-right: 12px;
      margin-left: 8px;
      width: 100%;
    }

    &:first-child {
      color: red;
    }
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
    border-bottom: 10px solid $popover-dark-background-color;
  }
}
.popoverContent--top {
  .popoverArrow--top {
    position: absolute;
    top: auto;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 10px solid $popover-dark-background-color;
    border-bottom: 10px solid transparent;
  }
}
.popoverContent--left {
  .popoverArrow--left {
    position: absolute;
    border-left: 10px solid $popover-dark-background-color;
    border-right: 10px solid transparent;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
  }
}
.popoverContent--right {
  .popoverArrow--right {
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid $popover-dark-background-color;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
  }
}

//明亮状态
.popoverTheme--light {
  .popoverArrow--bottom {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 10px solid transparent;
    border-bottom: 10px solid $popover-white-background-color;
  }

  .popoverArrow--top {
    position: absolute;
    top: auto;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 10px solid $popover-white-background-color;
    border-bottom: 10px solid transparent;
  }

  .popoverArrow--left {
    position: absolute;
    border-left: 10px solid $popover-white-background-color;
    border-right: 10px solid transparent;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
  }

  .popoverArrow--right {
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid $popover-white-background-color;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
  }
}
</style>
