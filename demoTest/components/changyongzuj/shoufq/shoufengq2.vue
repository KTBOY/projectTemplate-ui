<!--
 * @Author: zlc
 * @Date: 2022-10-10 17:10:48
 * @LastEditTime: 2022-10-10 17:49:55
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \demoTest\components\changyongzuj\shoufq\shoufengq2.vue
-->
<template>
	<view class="collapse">
		<view class="collapse-head" @tap.stop="handleClick">
			<slot name="header">
				<view class="header">
					<view class="title"></view>
					<view>a</view>
				</view>
			</slot>
		</view>
		<view class="collapse-body" :style="{height:isOpen?height:'0rpx'}">
			<view class="collapse-body_info" :class="[
				{
					'collapse-transform':height=='auto',
					'collapse-transform_show':isOpen
				}
			]">
				<slot name="body"></slot>
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
		},
		height:{
			type:String,
			default:'auto'
		},
		index:{
			type:Number,
			default:0,
		},
		//当前索引，index==current时展开
		current: {
			type: Number,
			default: -1
		},
	},
	data() {
		return {
			isOpen:false
		};
	},
	watch:{
		current:{
			handler:function(newVal,oldVal){
				this.isOpen = this.index == this.current
			},
			
		}
	},
	methods:{
		
		handleClick() {
			if (this.disabled) return;
			this.$emit("click", {
				index: Number(this.index)
			})
		}
	}
};
</script>

<style lang="scss" scoped>
	.collapse-body{
		transition: all 0.25s;
	   	overflow: hidden;
		&_info{
			transition: all 0.25s;
	   		overflow: hidden;
			position: relative;
			z-index: 1;
		}
	}
	.collapse-transform{
		opacity: 0;
		visibility: hidden;
		transform: translateY(-40%);

	}
	.collapse-transform_show {
		opacity: 1;
		visibility: visible;
		-webkit-transform: translateY(0);
		transform: translateY(0);
	}
</style>
