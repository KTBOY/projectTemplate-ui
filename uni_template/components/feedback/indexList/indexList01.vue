<!--
 * @Author: zlc
 * @Date: 2022-04-02 17:31:52
 * @LastEditTime: 2022-04-02 19:10:25
 * @LastEditors: zlc
 * @Description: 字母索引1.0版
 * @FilePath: \git项目\project-template\uni_template\components\feedback\indexList\indexList01.vue
-->
<template>
  <view class="index-list">
    <view class="list-box">
      <view class="left-box">
        <scroll-view> </scroll-view>
      </view>
      <view class="right-box">
        <scroll-view> </scroll-view>
      </view>
    </view>
  </view>
</template>

<script setup>
const state= reactive({
    testList=[
        {
            name:'a',
            letter: [
                {
                    name:"a1",
                },
                 {
                    name:"a2",
                }
            ],
        },
         {
            name:'b',
            letter: [
                {
                    name:"b1",
                },
                 {
                    name:"b3",
                }
            ],
        }
    ]
})
</script>
<style lang="scss" scoped>
.list-box {
  flex: 1;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
