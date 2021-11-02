<!-- 
组件：上传图片组件-小图片 
只做展示，默认没有删除的
 -->
<template>
	<view class="btn_main">
		<view class="btn_main_img">
			<image :src="src" v-if="showImg"  mode="scaleToFill">
			</image>
			<u-loading color="#2878ff" size="36" mode="circle" v-else></u-loading>
		</view>
		<uni-icons  v-if="iconIsTrue" type="clear" size="20" color="#cecece"/>
	</view>
</template>

<script>
	export default {
		props: {
			//接受上传的图片
			src: {
				type: String,
				value: ""
			},
			iconIsTrue:Boolean//开启标
		},
		
		computed:{
			showImg(){
				return this.src?true:false
			}
		},

		data() {
			return {

			}
		},

	}
</script>

<style scoped lang="less">
		.btn_main {
			width: 330rpx;
			height: 180rpx;
			background-color: #f95412;
			position: relative;
			margin: 0 12rpx;
			
		}

		.btn_main_img {
			background-color: red;
			width: 210rpx;
			height: 120rpx;
			background-color: #FFFFFF;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-50%);

		}

		.btn_main image {
			//height: 200rpx;
			//width: 200rpx;
			display: block;
			width: 100%;
			height: 100%;


		}
		 /deep/.u-loading-circle{
			position: absolute;
			left: 40%;
			top: 30%;
		}

		.btn_main .uni-icons {
			position: absolute;
			top: 10rpx;
			left: 260rpx;
		}

		.upload_name {
			text-align: center;
			margin-top: 10rpx;
		}
	
</style>
