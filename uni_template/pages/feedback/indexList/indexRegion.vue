<!--
 * @Author: zlc
 * @Date: 2022-04-11 21:57:38
 * @LastEditTime: 2022-04-14 23:01:05
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \gogogogo\project-template\uni_template\pages\feedback\indexList\indexRegion.vue
-->
<template>
  <view class="region"><index-list :region="state.headerCitys" :indexList="state.list"></index-list></view>
</template>

<script>
import indexList from '@/components/feedback/indexList/index01.vue'
import { ref, reactive, onMounted } from 'vue'
import city from './city.js'
export default {
  components: {
    'index-list': indexList,
  },
  setup(props) {
    const state = reactive({
      list: [],
      headerCitys: [
        {
          name: '中国',
        },
        {
          name: '美国',
        },
        {
          name: '加拿大',
        },
        {
          name: '澳大利亚',
        },
        {
          name: '日本',
        },
        {
          name: '新加坡',
        },
        {
          name: '西班牙',
        },
        {
          name: '英国',
        },
      ],
    })
    onMounted(() => {
      setTimeout(() => {
        state.list = city
      }, 100)
    })
    return {
      state,
    }
  },
}
</script>
