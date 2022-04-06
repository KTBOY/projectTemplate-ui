<!--
 * @Author: zlc
 * @Date: 2022-04-02 17:32:14
 * @LastEditTime: 2022-04-06 11:18:15
 * @LastEditors: zlc
 * @Description: 字母索引1.0使用
 * @FilePath: \git项目\project-template\uni_template\pages\feedback\indexList\index01.vue
-->
<template>
  <view>
    <index-list></index-list>
  </view>
</template>
<script>
import indexList from '@/components/feedback/indexList/index01.vue'
export default {
  components: {
    'index-list': indexList,
  },
  setup(props) {},
}
</script>
