<!--
 * @Author: zlc
 * @Date: 2021-10-18 11:18:24
 * @LastEditTime: 2021-10-18 19:31:36
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \invitationf:\编辑器\舒克前端\git项目\project-template\uni_template\components\form\collapse\collapse-item.vue
-->
<template>
  <view class="collapse-item" @click="handClick">
    <!-- 标题区域 -->
    <view class="collapse-head" :hover-stay-time="200">
      <view class="collapse-info">
        <view class="title">{{ title }}</view>
      </view>

      <view class="collapse-icon"   >
         <uni-icons
          type="arrowdown"
          size="20"
          :class="{ 'icon-active': isShow }"
        ></uni-icons> 
       	<!-- <u-icon :class="{ 'u-arrow-down-icon-active': isShow }"
					 class="u-arrow-down-icon" name="arrow-down"></u-icon>  :class="{ 'icon-active': isShow }"-->
      </view>
    </view>

    <!-- 内容区域  -->
    <view
      class="collapse-body"
      :style="[
        {
          height: isShow ? height + 'px' : '0',
        },
      ]"
    >
      <view class="content">
        <slot></slot>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref, reactive, toRefs, onMounted, useAttrs } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "你好",
  },
});
const height: any = ref(0);
const isShow: Boolean = ref(false);
function handClick() {
  isShow.value = !isShow.value;
  querClassDom();
}
/**
 * @description: 获取每个面版的高度
 * @param {*}
 * @return {*}
 */
function querClassDom() {
  const query = uni.createSelectorQuery().in(this);
  query
    .select(".content")
    .boundingClientRect((data) => {
      // console.log(data.height);
      height.value = data.height;
      console.log(height.value);
    })
    .exec();
}
onMounted(() => {
  querClassDom();
});
</script>
<style lang="scss" scoped>
.collapse {
  &-item {
  }
  &-head {
    display: flex;
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
  }

  &-body {
    overflow: hidden;
    transition: all 0.3s;
    > .content {
      overflow: hidden;
      font-size: 28rpx;
      color: red;
      text-align: left;
    }
  }
}
.u-arrow-down-icon {
  transition: all 0.3s;
  margin-right: 20rpx;
  margin-left: 14rpx;
}

.icon-active {
  display: inline-block;
  color: red;
  transform: rotate(180deg) !important;
  transform-origin: center center !important;
}
.collapse-info {
}
</style>