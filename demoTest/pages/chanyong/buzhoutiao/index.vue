<template>
	<view>
		<view class="title">步骤条</view>
		<view class="head_steps">
		<!-- 	<Buzhoutiao :numList="numList" :steps="3">
				<template slot='icon' slot-scope="val">
					<view class="step_icon" :class="{step_icon_no:val.index>2}">
						{{val.index+1}}
					</view>
				</template>
		</Buzhoutiao> -->
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
					name: '公证信息',
					is:false,
				},
				{
					name: '公证事项'
				},
				{
					name: '上传材料'
				},
				{
					name: '提交结果'
				}
			]
		};
	}
};
</script>

<style>
.title {
	text-align: center;
}
.head_steps{
	background-color: #fff;
	border-bottom: 5rpx solid red;

		
}
.step_icon{
	background-color: #007AFF;
	width: 100%;
	height: 100%;
	border-radius: 50%;
	color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 0 0px 10rpx #2C405A;
}
.step_icon_no{
	background-color: red;
	box-shadow: 0 0 0px 10rpx #2C405A;
}
</style>
