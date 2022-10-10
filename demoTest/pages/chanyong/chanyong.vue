<!--
 * @Author: zlc
 * @Date: 2021-08-13 13:46:23
 * @LastEditTime: 2022-10-10 17:08:21
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \demoTest\pages\chanyong\chanyong.vue
-->
<template>
	<view>
		<view class="box">
			<view class="com_item" v-for="(item,index) in numList" :key="index">
				<view class="info_title">
					{{item.name}}
				</view>
				<view  class="info_url" @click="goPage(item)">
					>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
import Buzhoutiao from '@/components/tab/buzhoutiao.vue';
export default {
	components: {
		Buzhoutiao
	},
	data() {
		return {
			//控制步骤条数据
			numList: [
				{
					name: '步骤条',
					url:'/pages/chanyong/buzhoutiao/index'
					
				},
				{
					name: '手风琴',
					url:'/pages/chanyong/shoufengq/index'
					
				},
				{
					name: '步骤条',
					url:''
					
				},
				{
					name: '步骤条',
					url:''
					
				},
			]
		};
	},
	methods:{
		goPage(item){
			console.log(item)
			uni.navigateTo({
				url:item.url
			})
		}
	}
	
};
</script>

<style>
.com_item{
	display: flex;
	justify-content: space-between;
	padding: 20rpx 10rpx;
	border-bottom: 1rpx #007AFF solid;
}
</style>
