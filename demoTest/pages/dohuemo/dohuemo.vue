<template>
	<view class="uni-swiper-msg">
		<swiper class="swiper" vertical="true" autoplay="false" duration="500" interval="4000" @animationfinish="timer">
			<swiper-item v-for="(item, index) in msg" :key="index">
				<view class="tip" @tap="notice(item)">第{{ item }}个会员充值成功</view>
			</swiper-item>
		</swiper>


		<view class="">滚动提示</view>
		<view class="nav">
			<!-- <view  v-for="item in msg" :class="{anim:animate==true}" :style="styleObject" ref='rollul' >
				<text>{{item.name}}</text>
			</view> -->
	 		<view  :style="styleObject">
				<text>{{msg[0].name}}</text>
			</view>
			<view :style="styleObject">
				<text>{{msg[1].name}}</text>
			</view> 
		</view>
		<view :animation="animationData" style="background:red;height:100rpx;width:100rpx" @click="declick"></view>

		<view>按钮动画</view>
		<view style="height: 35px;width:300px;background:orangered;border-radius: 4px;" class="blink" id="animat">12313213213</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			animationData: {},
			off: false,
			
			count:[],//条数
			styleObject:{
				
			},
			animate:true,
			msg: [
				{
					name: '1safsaf'
				},
				{
					name: '2safsaf'
				},
				{
					name: '3safsaf'
				},
				{
					name: '5safsaf'
				}
			]
		};
	},
	onLoad() {
		this.gund()
		//setInterval(this.scroll,2000) 
	},
	onShow: function() {
	
		// 初始化一个动画
		var animation = uni.createAnimation({
			duration: 1000,
			timingFunction: 'ease'
		});
		this.animation = animation;
		
	},
	methods: {
		timer() {},
		declick() {
			if (this.off) {
				// 使用动画
				this.rotateAndScale();
			} else {
				this.norotateAndScale();
			}
			this.off = !this.off;
		},
		// 定义动画内容
		rotateAndScale() {
			// 定义动画内容
			this.animation
				.rotate(45)
				.scale(2, 2)
				.step();
			// 导出动画数据传递给data层
			this.animationData = this.animation.export();
		},
		norotateAndScale() {
			this.animation
				.rotate(0)
				.scale(1, 1)
				.step();
			this.animationData = this.animation.export();
		},
		
		
		//滚动提示
		gund(){
			setInterval(()=>{
				this.styleObject={
					transform:`translateY(-${100}%)`
				}
				setTimeout(()=>{
					this.msg.push(this.msg[0])
					this.msg.shift()
					this.styleObject={
						transition:'none',
						transform:`translateY(-${0}%)`
					}
				},500)
			},3000)
		

		},
		scroll(){
		      let con1 = this.$refs.rollul;
		      con1[0].style.marginTop='30px';
		      this.animate=!this.animate;
		      var that = this; // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
		      setTimeout(function(){
		          that.msg.push(that.msg[0]);
		          that.msg.shift();
		          con1[0].style.marginTop='0px';
		          that.animate=!that.animate;  // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
		      },0)
		}
	}
};
</script>
<style lang="scss" scoped>
.uni-swiper-msg  {
	  padding: 20rpx 20rpx !important;
	  flex-wrap: nowrap !important;
	  display: flex !important;
}

.blink {
               position:relative;
                animation:mymove 5s infinite;
                -webkit-animation:mymove 5s infinite; /*Safari and Chrome*/
                animation-direction:alternate;/*轮流反向播放动画。*/
                animation-timing-function: ease-in-out; /*动画的速度曲线*/
                /* Safari 和 Chrome */
                -webkit-animation:mymove 5s infinite;
                -webkit-animation-direction:alternate;/*轮流反向播放动画。*/
                -webkit-animation-timing-function: ease-in-out; /*动画的速度曲线*/
	
}
@keyframes mymove {
	0% {
		transform: scale(1); /*开始为原始大小*/
	}
	25% {
		transform: scale(1.1); /*放大1.1倍*/
	}
	50% {
		transform: scale(1);
	}
	75% {
		transform: scale(1.1);
	}
}

@-webkit-keyframes mymove /*Safari and Chrome*/ {
	0% {
		transform: scale(1); /*开始为原始大小*/
	}
	25% {
		transform: scale(1.1); /*放大1.1倍*/
	}
	50% {
		transform: scale(1);
	}
	75% {
		transform: scale(1.1);
	}
}

/* 滚动提示 */
.nav {
  width: 750rpx;
  height: 60rpx;
  text-align: center;
  background: red;
  overflow: hidden;
  font-size: 0.23rpx;
}
.nav img {
  width: 0.55rpx;
  height: 0.56rpx;
  z-index: 1;
  border-radius: 50%;
  margin-right: 0.1rpx;
  margin-bottom: 0.13rpx;
  margin-left: 0.1rpx;
  
}
.nav > view {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 0.1rpx 0;
  align-items: center;
  color: #fff;
  line-height: 100%;
  transition: all 0.5s;
}
.nav > view > text {
  line-height: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex-shrink: 0;
  overflow: hidden;
  flex: 1;
  margin-bottom: 0.13rpx;
 
}
.anim{
  transition: all 0.5s;

}
/* 滚动提示end */
</style>
