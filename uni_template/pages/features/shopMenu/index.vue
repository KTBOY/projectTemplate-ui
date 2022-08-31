<!--
 * @Author: zlc
 * @Date: 2022-08-01 18:01:02
 * @LastEditTime: 2022-08-31 16:25:19
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \project-template\uni_template\pages\features\shopMenu\index.vue
-->
<template>
  <view class=""><shop-menu :test="state.test" :testIndex="state.testIndex"></shop-menu></view>
</template>

<script>
import shopMenu from '@/components/features/shopMenu/index01.vue'
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
              classify: `${index}号`,
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
