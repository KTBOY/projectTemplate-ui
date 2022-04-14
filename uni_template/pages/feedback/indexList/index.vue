<!--
 * @Author: zlc
 * @Date: 2022-04-02 17:32:14
 * @LastEditTime: 2022-04-14 23:02:01
 * @LastEditors: zlc
 * @Description: 字母索引1.0使用
 * @FilePath: \gogogogo\project-template\uni_template\pages\feedback\indexList\index.vue
-->
<template>
  <view>
    <index-list :indexList="state.list"></index-list>
  </view>
</template>
<script>
import { onMounted, defineProps, toRefs, computed, reactive, watch, ref, nextTick } from 'vue'
import indexList from '@/components/feedback/indexList/index01.vue'
import cricleProgress from '@/components/feedback/cricleProgress/index01.vue'
import city from './city.js'
export default {
  components: {
    'index-list': indexList,
    cricleProgress,
  },
  setup(props) {
    const state = reactive({
      list: []
    })

  

    return {
      state,
    }
  },
}
</script>
