<template>
	<view class="picker" v-if="value">
		<view class="picker-body" @tap.stop="close"></view>
		<!-- :style="{ transform: `translateY(${moveY < 0 ? 0 : moveY}px)` }" -->
		<view class="picker-bg"  :class="{ toggle: showPickerView}" >
			<view class="info" @touchmove.stop="touchmove" @touchstart.stop="handleTouchstart" @touchend.stop="handleTouchend">
				<view class="picker-top" v-show="buttonLocation == 'top'">
					<button class="cancel" hover-class="none" type="button">
						{{ cancelText }}
					</button>
					<button class="confirm" hover-class="none" type="button">
						{{ confirmText }}
					</button>
				</view>
				<!-- 填充内容区域 -->
				<view class="picker-view-content">
					
				</view>

				<view class="picker-bottom" v-show="buttonLocation == 'bottom'">
					<button class="cancel" hover-class="none" type="button" @click="handCancel">
						{{ cancelText }}
					</button>
					<button class="confirm" hover-class="none" type="button" @click="handConfirm">
						{{ confirmText }}
					</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			//控制picker显示隐藏
			value: {
				type: Boolean,
				default: false,
			},
			//需要渲染的内容
			range: {
				type: Array,
				required: true,
			},
			//指定Object中的哪个key的值
			rangeKey: {
				type: String,
				default: '',
			},
			//确认按钮
			confirmText: {
				type: String,
				default: '确认',
			},
			//确认按钮
			cancelText: {
				type: String,
				default: '取消',
			},
			//按钮位置
			buttonLocation: {
				type: String,
				default: 'bottom',
			},
		},
		data() {
			return {

				showPickerView: false,
				currenIndex: 0,
				touchStartX: 0,
				touchStartY: 0,
				indexs: 0,
				nowPageY:0,
				nowPageX:0,
				moveY:0,
				
			}
		},
		watch: {
				value(newValue, oldValue) {
					setTimeout(()=>{
						this.showPickerView = newValue
					},100)
				},


		},
		methods: {
			close() {
				this.showPickerView = false
				setTimeout(() => {
					this.$emit('input', this.showPickerView)
				},300)

			},
			handConfirm() {
				let currenObject = {
					currenObject: props.range[this.currenIndex],
					currenIndex: this.currenIndex
				}
				this.showPickerView = false
				setTimeout(() => {
					this.$emit('input', this.showPickerView)
				},100)
				this.$emit('confirm', currenObject)
			},
			handCancel() {
				this.showPickerView = false
				setTimeout(() => {
					this.$emit('input', this.showPickerView)
				},100)
				this.$emit('cancel', this.showPickerView)
			},
			// 获取鼠标、手指初始位置
			handleTouchstart(e) {
				this.startTime = Date.now();
				this.touchStartX = e.changedTouches[0].clientX;
				
				this.touchStartY = e.changedTouches[0].clientY;
				this.nowPageY = this.touchStartY
			},
			handleTouchend(e) {
				let deltaX = e.changedTouches[0].clientX - this.touchStartX;
				let deltaY = e.changedTouches[0].clientY - this.touchStartY;
			
				
			},
			touchmove(e){
				this.nowPageX = e.changedTouches[0].pageX
				this.nowPageY = e.changedTouches[0].pageY
				let vax = this.touchStartX - this.nowPageX
				let vay = this.touchStartY - this.nowPageY
				console.log(vay)
				this.moveY=Math.abs(vay)
				if(Math.abs(vay)>350){
					this.showPickerView=false
					setTimeout(() => {
						this.$emit('input',this.showPickerView)
					},100)
				}else{
					
				}
				
				
				return 
				this.showPickerView=false
				if(this.touchStartY>this.nowPageY&&Math.abs(vay)>300){
					this.showPickerView=true
						setTimeout(() => {
							this.$emit('input',this.showPickerView)
						},100)
				}else{
					setTimeout(() => {
						this.showPickerView=false
						this.$emit('input',this.showPickerView)
					},100)
				}
				// 	setTimeout(() => {
				// 		this.$emit('input', this.showPickerView)
				// 	},100)
				
			},
			// touchmove(e){
			// 	console.log(e)
			// 	this.showPickerView = false
			// 	setTimeout(() => {
			// 		this.$emit('input', this.showPickerView)
			// 	},100)
			// },
			getItemValue(item, mode) {
				//return getType(item) == 'object' ? item[props.rangeKey] : item
			}
		}
	}
</script>

<style lang="scss" scoped>
	.picker {

		//背景色遮罩
		&-body {
			position: fixed;
			z-index: 999;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
			background: transparent;
			background: rgba(0, 0, 0, 0.5);
			transition: all 0.5s;
		}

		//picke选择器
		&-bg {
			position: fixed;
			left: 0;
			bottom: 0;
			transform: translateY(100%);
			transition: transform 0.5s;
			width: 100%;
			z-index: 999;
		}

		.toggle {
			transform: translate(0);

		}
	}

	// picker选择的内容
	.info {
		height: 100vh;
		border-radius: 40rpx 40rpx 0 0;
		background-color: #ffffff;
		display: flex;
		flex-direction: column;

		.picker-view-content {
			flex: 1;

			.picker-view {
				height: 100%;

				.picker-view-column {
					.item {
						height: 100rpx;
						line-height: 100rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						text-align: center;
						color: #000000;
					}
				}
			}
		}

		/* 底部按钮 */
		.picker-bottom {
			display: flex;

			padding-bottom: 23rpx;

			>button {
				color: #ffffff;
				height: 100rpx;
				width: 300rpx;
				border: none;
				border-radius: 150rpx;
			}

			>.confirm {
				background: $uni-color-primary;
			}

			>.cancel {
				background: #bbbbbdfc;
			}
		}

		/* 头部按钮 */
		.picker-top {
			display: flex;
			padding-top: 23rpx;

			>button {
				height: 100rpx;
				width: 300rpx;
				border: none;
				border-radius: 150rpx;
			}

			>.confirm {
				background: #ffffff;
				color: $uni-color-primary;
				text-align: right;
			}

			>.cancel {
				background: #ffffff;
				text-align: left;
			}
		}
	}

	button::after {
		border: none;
	}

	.mask-class {
		border-radius: 40rpx 40rpx 0 0;
	}
</style>
