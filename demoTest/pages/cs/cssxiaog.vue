<!--
 * @Author: zlc
 * @Date: 2022-06-28 16:17:29
 * @LastEditTime: 2022-06-28 17:43:33
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \project-template\demoTest\pages\cs\cssxiaog.vue
-->
<template>
    <view>
        <view class="huxi">
            <view class="name">动态呼吸灯</view>
            <view class="test1"></view>
        </view>
        <view class="shui">
            <view class="name">水波涟漪多层</view>
             <view class="dot"></view>
             <view class="pulse"></view>
        </view>

    </view>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.huxi {


    .test1 {
        margin: 100rpx auto;
        width: 100rpx;
        height: 100rpx;
        border-radius: 50%;
        animation: test1 1s ease-in-out infinite alternate;
    }

    @keyframes test1 {
        from {
            box-shadow: 0rpx 0rpx 4rpx blue;
        }

        to {
            box-shadow: 0rpx 0rpx 30rpx blue;
        }
    }


   
}
.shui{


}
</style>