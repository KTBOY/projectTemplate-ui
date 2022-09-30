<template>
	<view class="content">
		<view class="text-area">
			<navigator class="imgbtn" url="../chanyong/chanyong">
				常用组件
			</navigator>
		</view>
		<view class="text-area">
			<navigator class="imgbtn" url="../upload/upload">
				图片上传
			</navigator>
		</view>
		<view class="text-area">
			<navigator class="imgbtn" url="../tabDemo/tabDemo">
				tab栏
			</navigator>
		</view>
		<view class="text-area">
			<navigator class="imgbtn" url="../dohuemo/dohuemo">
				动画
			</navigator>
		</view>
		<view class="text-area">
			<navigator class="imgbtn" url="../dohuemo/tipIcon">
				动画-滑动隐藏
			</navigator>
		</view>
		<view class="text-area">
			<navigator class="imgbtn" url="../dohuemo/popr">
				动画-滑动隐藏弹出层
			</navigator>
		</view>
		<view class="text-area">
			<navigator class="imgbtn" url="../data/rili">
				手写日历
			</navigator>
		</view>
		<view class="text-area">
			<navigator class="imgbtn" url="../data/jdt">
				圆形进度条
			</navigator>
		</view>
		<view class="text-area">
			<navigator class="imgbtn" url="../luy/luy">
				录音相关
			</navigator>
		</view>
		<view class="text-area">
			<navigator class="imgbtn" url="../cs/cssxiaog">
				css相关
			</navigator>
		</view>
		<view class="text-area">
			<navigator class="imgbtn" url="../image/scaling">
				图片相关
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		width:70%;
		height: 90rpx;
		color: #FFFFFF;
		background-color: #007AFF;
		display: flex;
		justify-content: center;
		margin: 10rpx 0;
		line-height: 90rpx;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
