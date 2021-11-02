<template>
	<view class="steps">
		<view class="steps_item" :class="{'steps_item_greater' : index+1==steps , 'steps_item_to':index+1<steps}" v-for="(item,index) of numList" :key='index'>
			<view class="steps_item-icon">
				<slot name="icon" :index="index"></slot>
			</view>
			<view class="steps_item_label">
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			numList:Array,
			steps: {
				type: [Number, String],
				default: 1
			},
		}
	}
</script>

<style lang="less" scoped>
	.steps {
		display: flex;
		padding: 40rpx;
		.steps_item{
			flex: 1;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			position: relative;
		
			&:not(:last-child)::after {
				content: "";
				position: absolute;
				height: 6rpx;
				width: 40%;
				border-radius: 20px;
				top: 25rpx;
				right: -22.5%;
				background: #DEDFE1;
			}

			&_greater::after {
				background: linear-gradient(to right, #2878ff 0%, #ff0000 50%, #DEDFE1 50.1%, #DEDFE1 100%) !important;
			}

			&_to::after {
				background: #2878ff !important;
			}

			&-icon {
				width: 56rpx;
				height: 56rpx;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;


			}

			&-label {
				font-size: 14px;
				font-family: "微软雅黑";
				margin-top: 10rpx;
			}
		}


	}
</style>



