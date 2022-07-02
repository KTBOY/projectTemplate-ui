<!--
 * @Author: zlc
 * @Date: 2022-04-19 22:22:38
 * @LastEditTime: 2022-04-20 00:00:57
 * @LastEditors: zlc
 * @Description: 二维码生成以及分享01
 * @FilePath: \gogogogo\project-template\uni_template\components\template\share\qrcode\index01.vue
-->
<template>
  <view class="qrcode">
    <canvas id="qrcode" canvas-id="qrcode" :style="{ width: `${state.size}px`, height: `${state.size}px` }" />
  </view>
</template>
<script>
import uQRCode from '@/common/uqrcode'
import {reactive, onMounted} from 'vue'
export default {
  setup(props) {
    const state = reactive({
      size: 256,
      margin: 10,
      backgroundColor: '#FFFFFF',
      foregroundColor: '#000000',
    })
    function couponQrcode() {
      let modules = uQRCode.getModules({
        text: 'https://xxx/wechat?key=123',
        errorCorrectLevel: uQRCode.errorCorrectLevel.H,
      })
      console.log(modules);
      let tileSize = (state.size - state.margin * 2) / modules.length
      // 获取绘图所需的上下文
      let ctx = uni.createCanvasContext('qrcode', this)
      console.log(ctx);
      // 开始绘制
      ctx.setFillStyle(state.backgroundColor)
      ctx.fillRect(0, 0, state.size, state.size)
      for (var row = 0; row < modules.length; row++) {
        for (var col = 0; col < modules.length; col++) {
          // 计算每一个小块的位置
          var x = col * tileSize + state.margin
          var y = row * tileSize + state.margin
          var w = tileSize
          var h = tileSize

          var style = modules[row][col] ? state.foregroundColor : state.backgroundColor
          ctx.setFillStyle(style)
          ctx.fillRect(x, y, w, h)
        }
      }
      ctx.draw()
    }
    onMounted(()=>{
        setTimeout(() => {
            couponQrcode()
        }, 2000);
        
    })

    return{
        state
    }
  },
}
</script>
