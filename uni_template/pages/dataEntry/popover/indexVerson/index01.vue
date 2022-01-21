<!--
 * @Author: zlc
 * @Date: 2022-01-14 11:19:12
 * @LastEditTime: 2022-01-21 18:56:08
 * @LastEditors: zlc
 * @Description: popover-demo@click="handleOpenPopover"
 * @FilePath: \git项目\project-template\uni_template\pages\dataEntry\popover\indexVerson\index01.vue
-->
<template>
  <view class="demo">
    <h3>基础用法</h3>
    <popover :list="list" v-model:visible="visible.lightTheme" @choose="chooseItem">
      <template #reference>
        <tui-button width="220rpx" > 明朗风格</tui-button>
      </template>
    </popover>
    <popover :list="list" v-model:visible="visible.darkTheme" @choose="chooseItem" theme="dark" >
      <template #reference>
        <tui-button width="220rpx" >暗黑风格</tui-button>
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

    const visible = reactive({
      darkTheme: false,
      lightTheme: false,
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
