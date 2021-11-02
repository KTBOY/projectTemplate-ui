<template>
	<view class="shoufe_box">
		<view class="shoufe_head" @click="handShow">
			<view class="shoufe_info">
				<view class="shoufe_title">
					{{title}}
				</view>
				<view class="shoufq_icon">
					|||
				</view>
			</view>
		</view>
		<view class="shoufe_body" :style="[{
					height: isShow ? height+'px'  : '0'
				}]">
			<view class="shoufe_content" id="body_content">
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			isShow:false,
			height:0
		};
	},
	methods:{
		querClassDom(){
			const query = uni.createSelectorQuery().in(this);
			query.select('#body_content').boundingClientRect(data => {
			  console.log(data)
			  this.height=data.height
			}).exec();
		},
		handShow(){
			console.log("123")
			this.isShow=!this.isShow
			this.querClassDom()
			
		}
	}
};
</script>

<style lang="less" scoped>
	.shoufe_box{
		width: 750rpx;
		
	}
	.shoufe_head{
		.shoufe_info{
			display: flex;
			justify-content: space-between;
			padding: 10rpx 20rpx;
		}
	}
	
	.shoufe_body{
		overflow: hidden;
		transition: all 0.3s;
		.shoufe_content {
				overflow: hidden;
				font-size: 28rpx;
				color: red;
				text-align: left;
			}
	}
</style>
