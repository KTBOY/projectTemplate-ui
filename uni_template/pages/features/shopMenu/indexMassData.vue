<!--
 * @Author: zlc
 * @Date: 2022-08-01 18:01:02
 * @LastEditTime: 2022-08-03 17:43:34
 * @LastEditors: zlc
 * @Description: 商城菜单大量数据版
 * @FilePath: \project-template\uni_template\pages\features\shopMenu\indexMassData.VUE
-->
<template>
  <view class="">
    <shop-menu 
     :test="state.test"
     :testIndex="state.testIndex"

    ></shop-menu>
  </view>
</template>

<script>
import shopMenu from '@/components/features/shopMenu/indexMassData.vue'
import { ref, reactive, toRefs ,onMounted} from 'vue'
export default {
  components: {
    'shop-menu': shopMenu,
  },
  setup(props) {
    const state = reactive({
      test: [],
      testIndex:[]
    })

    onMounted(() => {
      for (let index = 0; index < 20; index++) {
        state.test.push({
          name: `${index}人`,
          data: [{ classify: `${index}号` }],
        })
        state.testIndex.push(`${index}号`)
      }
    })
    return{
        state
    }
  },
}
</script>

<style></style>
