<template>
		<view class="">
			<!-- scroll-view scroll-y="true" @scroll="scroll" -->
			<view @touchstart="handTouchstart"  @touchend="touchend" @touchmove="touchmove">
				<view class=""  v-for="(item,index) in 100" :key="index" >
					3321
				</view>
				
			</view>

			<view class="icon">
				<view :class="['icon-info',openTrue?'icon-open':'icon-close']">
					
				</view>
			</view>
		</view>
</template>

<script>
	export default{
		data() {
			return{
				openTrue:true
			}
			
		},
		
		onPullDownRefresh() {
			
		},
		onReachBottom() {
			console.log('触发了123')
		},
		scroll(e){
			console.log('123')
		},
		methods:{
			handTouchstart(e){
				console.log('123')
				
				
			},
			touchend(e){
				console.log('456')
				setTimeout(()=>{
					this.openTrue=true;
				},500)
			},
			touchmove(e){
				this.openTrue=false;
				console.log(e)
				console.log('789')
			}
		}
		
			
	}
</script>

<style lang="scss" scoped>
	.icon{
		position: fixed;
		top: 200rpx;
		left: 0;
	}
	.icon-info{
		background: red;
		width: 100rpx;
		height: 60rpx;
		border-radius: 50%;
			
	}
	.icon-close{
		transform: translateX(-80rpx);
		transition: all 0.3s; 
	}
	.icon-open{
		transition: all 0.3s; 
		transform: translate(0)
	}
</style>
