<template>
	<view class="handJd" @click.stop="handOn($event)">
		<arprogress :percent="percent">
			<text>{{ percent }}%</text>
		</arprogress>
		<button type="default" @longtap.stop="handJd()" @touchend.prevent="touchend" @touchstart.prevent="touchstart">点我</button>
	</view>
</template>

<script>
import arprogress from '../../components/ar-circle-progress/ar-circle-progress.vue';
let clerTime;
export default {
	components: {
		arprogress
	},
	data() {
		return {
			percent: 20,
			time: 0,
			timeStamp:0,
			startTime:0,
			endTime:0,
			tounchOptions:{}
		};
	},
	methods: {
		handJd(e) {
			return
			this.time++

			clearInterval(this.endTime)
			this.startTime = setInterval(() => {
				if (this.percent == 0) {
					clearInterval(this.startTime);
				}else{
					this.percent--
				}
			}, 1000);
		},

		handOn(e) {

			console.log(e)
		},
		setPercent() {

			this.percent++;
		},
		touchend(e) {
			this.endTime = setInterval(() => {
				if (this.percent == 0) {
					clearInterval(this.endTime);
				}else{
					this.percent-=2
					clearInterval(this.time);
				}
			}, 100);
			
		},
		touchstart(e) {
			if(this.endTime>=0){
				clearInterval(this.endTime);
			}
			this.time = setInterval(() => {
				this.percent+=2;
				
			}, 100);
		}, 
	}
};
</script>

<style></style>

<!-- 
		touchend(e) {
			clearInterval(this.startTime)
			if(e.timeStamp<=this.timeStamp){
				return
			}

			this.endTime = setInterval(() => {
				if (this.percent == 0) {
					clearInterval(this.endTime);
				}else{
					this.percent--
				}
			}, 1000);
			
		},
		touchstart(e) {
			if (e.cancelable) {
				e.preventDefault();
			}
			this.tounchOptions=e
			clearInterval(this.startTime)
			this.timeStamp=e.timeStamp
			console.log(e);
			this.startTime = setInterval(() => {
				this.percent++;
			}, 1000);
		}, 
 
 
 -->