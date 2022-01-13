<!--
 * @Author: zlc
 * @Date: 2022-01-04 10:49:05
 * @LastEditTime: 2022-01-04 14:41:51
 * @LastEditors: zlc
 * @Description: 进度条
 * @FilePath: \git项目\project-template\uni_template\components\feedback\cricleProgress\index01.vue
-->
<template>
  <view
    class="circle-progress"
    :style="{
      width: widthPx + 'px',
      height: widthPx + 'px',
      backgroundColor: bgColor,
    }"
  >
    <!-- 有的不支持canvas-id属性，必须用id属性 -->
    <canvas
      class="canvas-bg"
      :canvas-id="canvasId"
      :id="canvasId"
      :style="{
        width: widthPx + 'px',
        height: widthPx + 'px',
      }"
    ></canvas>
    <canvas
      class="canvas"
      :canvas-id="elId"
      :id="elId"
      :style="{
        width: widthPx + 'px',
        height: widthPx + 'px',
      }"
    ></canvas>
    <slot></slot>
  </view>
</template>
<script>
import { defineProps, reactive, computed, toRefs, watch, onMounted } from 'vue'
export default {
  props: {
    // 圆环进度百分比值
    percent: {
      type: Number,
      default: 0,
      // 值在0到100之间
      validator: (val) => {
        return val >= 0 && val <= 100
      },
    },
    // 圆环底色（灰色的圆环）
    inactiveColor: {
      type: String,
      default: '#ececec',
    },
    // 圆环激活部分的颜色
    activeColor: {
      type: String,
      default: '#2878ff',
    },
    // 圆环线条的宽度，单位rpx
    borderWidth: {
      type: [Number, String],
      default: 6,
    },
    // 整个圆形的宽度，单位rpx
    width: {
      type: [Number, String],
      default: 100,
    },
    // 整个圆环执行一圈的时间，单位ms
    duration: {
      type: [Number, String],
      default: 1500,
    },
    // 圆环进度区域的背景色
    bgColor: {
      type: String,
      default: '#ffffff',
    },
  },
  setup(props) {
    const data = reactive({
      widthPx: props.width, // 整个组件的背景宽度
      borderWidthPx: props.borderWidth, // 圆环的宽度
      startAngle: -Math.PI / 2, // canvas画圆的起始角度，默认为3点钟方向，定位到12点钟方向
      progressContext: null, // 活动圆的canvas上下文
      newPercent: props.percent, // 当动态修改进度值的时候，保存进度值的变化前后值，用于比较用
      oldPercent: 0, // 当动态修改进度值的时候，保存进度值的变化前后值，用于比较用
      elId: computed(() => {
        return 'progressId' + parseInt(Math.random() * 1000000)
      }),
      canvasId: computed(() => {
        //一个页面多个圆形进度
        return 'progressId' + parseInt(Math.random() * 1000000)
      }),
    })

    watch(
      () => props.percent,
      (nVal, oVal) => {
        if (nVal > 100) nVal = 100
        if (nVal < 0) oVal = 0
        data.newPercent = nVal
        data.oldPercent = oVal
        setTimeout(() => {
          drawCircleByProgress(oVal)
        }, 50)
      }
    )

    const drawProgressBg = () => {
      let ctx = uni.createCanvasContext(data.canvasId, this)
      ctx.setLineWidth(data.borderWidthPx) // 设置圆环宽度
      ctx.setStrokeStyle(props.inactiveColor) // 线条颜色
      ctx.beginPath() // 开始描绘路径
      let radius = data.widthPx / 2
      ctx.arc(radius, radius, radius - data.borderWidthPx, 0, 2 * Math.PI, false)
      ctx.stroke() // 对路径进行描绘
      ctx.draw()
    }
    const drawCircleByProgress = (progress) => {
      let ctx = data.progressContext
      if (!ctx) {
        ctx = uni.createCanvasContext(data.elId, this)
        data.progressContext = ctx
      }
      // 表示进度的两端为圆形
      ctx.setLineCap('round')
      // 设置线条的宽度和颜色
      ctx.setLineWidth(data.borderWidthPx)
      ctx.setStrokeStyle(props.activeColor)
      // 计算过渡时间
      let time = Math.floor(data.duration / 200)
      let endAngle = ((2 * Math.PI) / 100) * progress + data.startAngle
      ctx.beginPath()
      // 半径为整个canvas宽度的一半
      let radius = data.widthPx / 2
      ctx.arc(radius, radius, radius - data.borderWidthPx, data.startAngle, endAngle, false)
      ctx.stroke()
      ctx.draw()
      // 增大了百分比

      if (data.newPercent > data.oldPercent) {
        progress++
        if (progress > data.newPercent) return
      } else {
        // 减少百分比
        progress--
        if (progress < data.newPercent) return
      }

      setTimeout(() => {
        // 定时器，为了让进度条有动画效果
        drawCircleByProgress(progress)
      }, time)
    }
    onMounted(() => {
      drawProgressBg()
      drawCircleByProgress(data.oldPercent)
    })
    return {
      ...toRefs(data),
    }
  },
}
</script>
<style scoped>
page {
}
.circle-progress {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.canvas-bg {
  position: absolute;
}
.canvas {
  position: absolute;
}
</style>
