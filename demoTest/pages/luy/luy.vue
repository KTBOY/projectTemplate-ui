<template>
	<view class="luy">
		<view>{{ position }} 最大时间:{{ duration }} 开始:{{ currentTime }}</view>
		<view @click="startRecorderManager">开始录制</view>
		<view @click="stopRecorderManager">暂停录制</view>
		<view @click="finishRecorderManager">结束录制</view>
		<view :class="['prompt-loader']" :style="{ height: radioPreCls }"><view :class="[`item-${index}`]" v-for="(item, index) in 15" :key="index"></view></view>
	</view>
</template>

<script>
const audioUrl = 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';
import { timeFormat } from '@/util/dateLibrary.js';
const recorderManager = uni.getRecorderManager(); //创建一个录音实例
const innerAudioContext = uni.createInnerAudioContext(); //创建一个播放实列
recorderManager.autoplay = true;
export default {
	data() {
		return {
			title: 'innerAudioContext',
			isPlaying: false,
			isPlayEnd: false,
			currentTime: 0,
			duration: 100,
			position: '0',
			timecount: '00:00:00',
			timecount2: '',
			hour: 0,
			minute: 0,
			second: 0,
			hour2: 0,
			minute2: 0,
			second2: 0,
			isZant: false,
			timer: '',
			yuming: '这是域名',
			permiss: 0, //0为开启录音权限1已开启录音权限,
			count: 0,
			maxTime: 120,
			radio: 3
		};
	},
	onLoad() {
		this.state = {
			audioContext: null
		};
		this.createInnerAudio();
		var a = timeFormat('hh:ii:ss', 1554954127000);
		console.log(this.maxTime * 100);
		//this.maxTime=this.maxTime * 1000
		//console.log(this.maxTime);
		//大于60分钟输出小时
		//大于60秒输出分钟
		//小于60输出秒杀
		//其他：不到xx分钟、xx小时输出秒数或者分钟数
	},

	computed: {
		radioPreCls() {
			if (this.radio >= 10) {
				return 70 + 'px';
			} else {
				return this.radio * 10 + 'px';
			}
		}
	},
	methods: {
		//创建一个音频播放实列
		createInnerAudio() {
			console.log(this.state);
			const innerAudioContext = (this.state.audioContext = uni.createInnerAudioContext());
			innerAudioContext.autoplay = false;
			innerAudioContext.src = audioUrl;
			innerAudioContext.onPlay(() => {
				console.log('开始播放');
			});
			innerAudioContext.onTimeUpdate(e => {
				if (this._isChanging === true) {
					return;
				}
				this.currentTime = innerAudioContext.currentTime || 0;
				this.duration = innerAudioContext.duration || 0;
			});
		},

		startRecorderManager() {
			// 为了防止苹果手机静音无法播放
			// uni.setInnerAudioOption({
			// 	obeyMuteSwitch: false
			// });

			this.getTimeIntervalplus(); //封装的一个计时器,调用开始计时
			console.log(this.maxTime * 100);
			const options = {
				//参数
				duration: this.maxTime * 100,
				sampleRate: 16000,
				numberOfChannels: 1,
				encodeBitRate: 96000,
			};
			recorderManager.start(options);
		},
		//暂停播放
		stopRecorderManager() {
			innerAudioContext.pause(); //暂停播放
			clearInterval(this.timer); //清除定时器
		},
		//结束录制
		finishRecorderManager() {
			recorderManager.stop(); //结束录音
			clearInterval(this.timer); //结束计时
			// recorderManager.onStop(function (res) {
			// 	console.log('recorder stop' + JSON.stringify(res));

			// });
		},
		// 计时器
		getTimeIntervalplus() {
			clearInterval(this.timer);
			this.timer = setInterval(() => {
				this.second += 1;
				if (this.second >= 60) {
					this.minute += 1;
					this.second = 0;
				}
				// if (this.minute >= 10) {
				// 	this.recordednum = 3;
				// 	recorderManager.stop();
				// 	clearInterval(this.timer);
				// }
				this.second2 = this.second;
				this.minute2 = this.minute;
				var a = timeFormat('yyyy-mm-dd', new Date());
				console.log(a);
				//this.timecount = a + " " + this.hour + ':' + this.minute + ':' + this.second;

				this.timecount = this.hour + ':' + this.minute + ':' + this.second;
				//this.timecount=timeFormat('hh:ii', new Date());
				console.log(new Date(this.timecount).getTime());
				console.log('this.timecount', this.timecount);
			}, 1000);
		}
	}
};
</script>

<style lang="scss">
.prompt-loader {
	height: 30px;
	display: flex;
	align-items: flex-end;
	margin-bottom: 6px;
}

@for $i from 0 through 15 {
	.item-#{$i} {
		width: 10rpx;
		height: 60rpx;
		background-color: red;
		animation: load 1s infinite ($i - 15) * 0.8 + s linear;
		margin: 0 10rpx;
	}
}

@keyframes load {
	0% {
		height: 20%;
	}
	50% {
		height: 100%;
	}
	100% {
		height: 20%;
	}

	// from {
	// 	height: 0px;

	// 	top: 400px;
	// }

	// to {
	// 	height: 400px;
	// 	top: 0px;
	// }
}
</style>
