<!--
 * @Author: zlc
 * @Date: 2021-10-18 11:18:24
 * @LastEditTime: 2021-10-20 17:55:54
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \invitationf:\编辑器\舒克前端\git项目\project-template\uni_template\components\form\collapse\collapse-item.vue
-->
<template>
  <view :class="['collapse-item']" @click="handClick(index)">
    <view class="collapse-head" :hover-stay-time="200">
      <view class="collapse-info">
        <view class="title">{{ title }}</view>
      </view>

      <view
        class="collapse-icon"
        :class="{ 'icon-active': accordion ? isShow : open }"
      >
        <uni-icons type="arrowdown" size="20"></uni-icons>
      </view>
    </view>

    <!-- 内容区域  -->
    <view
      class="collapse-body"
      :style="[
        {
          height: (accordion?isShow:open) ? height + 'px' : '0',
        },
      ]"
    >
      <view class="content" :id="index">
        <slot></slot>
      </view>
    </view>
  </view>
</template>





<script setup>
import {
  ref,
  reactive,
  toRefs,
  onMounted,
  useAttrs,
  getCurrentInstance,
} from "vue";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  index: {
    type: [String, Number],
    required: true,
  },
  open: {
    type: Boolean,
    required: true,
  },
  accordion: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(["change"]); //定义要给父组件使用的事件
const height= ref(0); //折叠面板高度
const isShow= ref(false); //是否开启折叠面板
const domArrayData = ref([]);
/**
 * @description:点击展开折叠面板
 * @param {String|Number} index
 * @return {*}
 */
function handClick(index) {
  emit("change", index);
  domArrayData.value.forEach((item) => {
    if (item.id == index) {
      height.value = item.height;
      isShow.value = !isShow.value;
    }
  });
}
/**
 * @description: 获取每个面版的高度
 * @param {*}
 * @return {*}
 */
function querClassDom() {
  const query = uni.createSelectorQuery().in(this);
  query
    .selectAll(".content")
    .boundingClientRect((data) => {
      domArrayData.value.push(...data);
    })
    .exec();
}
onMounted(() => {
  console.log(props.accordion);
  querClassDom();
});
</script>

<style lang="scss" scoped>
.title {
}
.collapse {
  &-head {
    display: flex;
  }
  &-info {
    > .title {
      width: 600rpx;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  &-icon {
    transition: all 0.3s;
  }
  .icon-active {
    transform: rotate(90deg) !important;
    transform-origin: center center !important;
  }

  // 内容
  &-body {
    overflow: hidden;
    transition: all 0.3s;
    > .content {
      overflow: hidden;
      font-size: 28rpx;
      text-align: left;
    }
  }
}
</style>