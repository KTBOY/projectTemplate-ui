<!--
 * @Author: zlc
 * @Date: 2021-12-29 16:59:24
 * @LastEditTime: 2022-01-04 11:58:23
 * @LastEditors: zlc
 * @Description: 列表组件
 * @FilePath: \git项目\project-template\uni_template\components\list\listPages\index.vue
-->
<template>
  <view class="list-pages">
    <view class="nav-item" v-for="nav in nav" :key="nav">
      <view class="nav-name">{{ nav.name }}</view>
      <template v-for="packageItem in nav.packages" :key="packageItem">
        <view v-if="packageItem.show">
          <navigator :url="packageItem.path" class="nav-info">
            <view>{{ packageItem.name }} {{ packageItem.cName }}</view>
            <view>
              <uni-icons type="forward" size="20"></uni-icons>
            </view>
          </navigator>
        </view>
      </template>
    </view>
  </view>
</template>
<script>
import {defineComponent} from "vue"

export default defineComponent({
    props: {
        nav:{
            type:Object,
            default:()=>{
                return {}
            }
        }
    },
    setup(props){
        console.log(props.nav)
    }
})
</script>
<style lang="scss">
.list-pages {
  background: #f7f8fa;
  border-radius: 80rpx 80rpx 0 0;
  overflow: hidden;
  padding: 60rpx 50rpx;
  height: auto;
  .nav-name {
    line-height: 40rpx;
    font-size: 26rpx;
    color: rgba(144, 156, 164, 1);
    margin-bottom: 20rpx;
  }
  .nav-info {
    width: 100%;
    height: 85rpx;
    line-height: 85rpx;
    padding: 0 10rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 50rpx;
    background: #ffffff;
    box-shadow: 0rpx 2rpx 8rpx 0rpx rgba(102, 102, 102, 0.06);
    margin-bottom: 20rpx;
  }
}
</style>
