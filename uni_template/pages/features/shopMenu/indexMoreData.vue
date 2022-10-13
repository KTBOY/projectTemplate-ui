<!--
 * @Author: zlc
 * @Date: 2022-08-01 18:01:02
 * @LastEditTime: 2022-10-13 10:22:00
 * @LastEditors: zlc
 * @Description: 商城菜单大量数据版
 * @FilePath: \project-template\uni_template\pages\features\shopMenu\indexMoreData.vue
-->
<template>
  <view class=""><shop-menu :test="state.test" :testIndex="state.testIndex"></shop-menu></view>
</template>

<script>
import shopMenu from '@/components/features/shopMenu/indexMoreData.vue'
import { ref, reactive, toRefs, onMounted } from 'vue'
export default {
  components: {
    'shop-menu': shopMenu,
  },
  setup(props) {
    const state = reactive({
      test: [],
      testIndex: [],
    })

    onMounted(() => {
      for (let index = 0; index < 8; index++) {
        state.test.push({
          name: `${index}人`,
          data: [
            {
              classify: `${index}号2`,
              lazyLoad: false,
              defaut: '/static/image/commer/defaut.png',
              image: 'https://img2.baidu.com/it/u=3995102021,1242293358&fm=253&fmt=auto&app=138&f=JPEG?w=774&h=500',
              id: index,
            },
            {
              classify: `${index}号`,
              lazyLoad: false,
              defaut: '/static/image/commer/defaut.png',
              image: 'https://img2.baidu.com/it/u=3995102021,1242293358&fm=253&fmt=auto&app=138&f=JPEG?w=774&h=500',
              id: index,
            },
          ],
        })
        state.testIndex.push(`${index}号`)
      }
    })
    return {
      state,
    }
  },
}
</script>

<style></style>
