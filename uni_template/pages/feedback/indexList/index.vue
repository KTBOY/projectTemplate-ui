<!--
 * @Author: zlc
 * @Date: 2022-04-02 17:32:14
 * @LastEditTime: 2022-04-12 23:07:16
 * @LastEditors: zlc
 * @Description: 字母索引1.0使用
 * @FilePath: \gogogogo\project-template\uni_template\pages\feedback\indexList\index.vue
-->
<template>
  <view>
    <index-list></index-list> 

  </view>
</template>
<script>
import indexList from '@/components/feedback/indexList/index01.vue'
import cricleProgress from '@/components/feedback/cricleProgress/index01.vue'

export default {
  components: {
   'index-list':indexList,
   cricleProgress
  }
 
}
</script>
