<!--
 * @Author: zlc
 * @Date: 2022-01-14 11:19:12
 * @LastEditTime: 2022-02-23 17:13:53
 * @LastEditors: zlc
 * @Description: popover-demo@click="handleOpenPopover"
 * @FilePath: \git项目\project-template\uni_template\pages\dataEntry\popover\indexVerson\index01.vue
-->
<template>
  <view class="demo">
    <view class="demo-title">基础用法</view>
    <popover :list="list" v-model:visible="visible.lightTheme" @choose="chooseItem">
      <template #reference>
        <tui-button width="200rpx"> 明朗风格</tui-button>
      </template>
    </popover>
    <popover :list="list" v-model:visible="visible.darkTheme" @choose="chooseItem" theme="dark">
      <template #reference>
        <tui-button width="200rpx">暗黑风格</tui-button>
      </template>
    </popover>
    <view class="demo-title">选项配置</view>
    <popover :list="listIcons" v-model:visible="visible.showIcons" @choose="chooseItem">
      <template #reference>
        <tui-button width="200rpx"> 展示图标</tui-button>
      </template>
    </popover>
    <view class="demo-title">位置自定义</view>
    <popover :list="list" location="top" v-model:visible="visible.locationTop" @choose="chooseItem">
      <template #reference>
        <tui-button width="200rpx"> 向上弹出</tui-button>
      </template>
    </popover>
    <popover :list="list" location="left" v-model:visible="visible.locationLeft" @choose="chooseItem">
      <template #reference>
        <tui-button width="200rpx"> 向左弹出</tui-button>
      </template>
    </popover>
    
    <popover :list="list" location="right" v-model:visible="visible.locationRight" @choose="chooseItem">
      <template #reference>
        <tui-button width="200rpx"> 向右弹出</tui-button>
      </template>
    </popover>
  </view>
</template>
<script>
import popover from '@/components/dataEntry/popover/index01.vue'
import Skbutton from '@/components/basics/button/index.vue'
import tuiButton from '@/components/traoUi/components/thorui/tui-button/tui-button'
import { onMounted, defineProps, toRefs, computed, reactive } from 'vue'
export default {
  components: {
    popover, //气泡提示框1.0
    tuiButton,
  },
  setup() {
    const list = [
      {
        name: '选项一',
        disabled: true,
      },
      {
        name: '选项二',
        disabled: true,
      },
      {
        name: '选项三',
      },
    ]
    const listIcons = [
      {
        name: '选项一',
        disabled: true,
        icon: 'contact',
      },
      {
        name: '选项二',
        disabled: true,
        icon: 'vip',
      },
      {
        name: '选项三',
        icon: 'fire',
      },
    ]

    const visible = reactive({
      darkTheme: false,
      lightTheme: false,
      showIcons: false,
      locationTop: false,
      locationLeft: false,
      locationRight: false,
    })

    function handleOpenPopover() {
      visible.darkTheme = !visible.show
    }
    function chooseItem(value) {
      uni.showToast({ title: value.name })
    }
    return {
      list,
      visible,
      listIcons,
      handleOpenPopover,
      chooseItem,
    }
  },
}
</script>
<style lang="scss" scoped>
.demo {
  padding: var(--page-padding--);
}
</style>
