<!--
 * @Author: zlc
 * @Date: 2022-04-19 22:22:38
 * @LastEditTime: 2022-04-19 22:59:22
 * @LastEditors: zlc
 * @Description: 二维码生成以及分享
 * @FilePath: \gogogogo\project-template\uni_template\pages\template\share\qrcode\index.vue
-->
<template>
  <view class="demo">
    <view class="demo-title">基础用法</view>
    <qrcode></qrcode>
  </view>
</template>
<script>
import { defineComponent,reactive } from 'vue'
import qrcode from '@/components/template/share/qrcode/index01.vue'
export default defineComponent({
  components: {
    'qrcode': qrcode,
  },
  setup() {
    
  },
 
})
</script>


<style>


</style>