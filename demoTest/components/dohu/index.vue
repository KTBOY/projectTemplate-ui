<template>
  <view class="picker" v-if="value">
    <view class="picker-body" v-if="showPickerView" @tap.stop="close"></view>
    <view class="picker-bg" :class="{ toggle: showPickerView }">
      <view class="info">
        <view class="picker-top" v-show="buttonLocation == 'top'">
          <button class="cancel" hover-class="none" type="button">
            {{ cancelText }}
          </button>
          <button class="confirm" hover-class="none" type="button">
            {{ confirmText }}
          </button>
        </view>
        <view class="picker-view-content">
          <picker-view v-if="true" class="picker-view" :indicator-style="indicatorStyle" :valuePicek="valuePicek" mask-class="mask-class" @change="handleChange">
            <picker-view-column class="picker-view-column">
              <view class="item" v-for="(item, index) in range" :key="index">{{ getItemValue(item, 'selector') }}</view>
            </picker-view-column>
          </picker-view>
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
	export default{
		props:{
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
		data(){
			return{
				emit:['update:value','confirm','cancel'],
				valuePicek:0,
				indicatorStyle:'height: 50px',
				showPickerView:true,
				currenIndex:0,
			}
		},
		watch:{
			
			value:(newValue, oldValue)=>{
				console.log(newValue)
				var that=this
				//console.log(this.showPickerView)
				that.showPickerView = newValue;
				// this.$nextTick(() => {
					
				// });
				setTimeout(() => {
				  
				}, 100)
			},
			
			
		},
		methods:{
			close() {
			  this.showPickerView= false
			  //需要等动画结束了去更新父组件
			  setTimeout(() => {
			    this.$emit('update:value', this.showPickerView)
			  }, 100)
			},
			handleChange(e) {
			  console.log(e.currentTarget.dataset.valuePicek);
			  this.currenIndex=e.currentTarget.dataset.valuePicek
			  console.log(e)
			},
			handConfirm() {
			  let currenObject={
			    currenObject:props.range[this.currenIndex],
			    currenIndex: this.currenIndex
			  }
			  this.showPickerView=false
			  this.$emit('update:value', this.showPickerView)
			  this.$emit('confirm',currenObject)
			},
			handCancel(){
			  this.showPickerView=false
			  this.$emit('update:value', this.showPickerView)
			  this.$emit('cancel')
			},
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
    transition: all 0.3s;
  }
  //picke选择器
  &-bg {
    position: fixed;
    left: 0;
    bottom: 0;
    transform: translateY(100%);
    transition: transform 0.3s;
    width: 100%;
    z-index: 999;
  }
  .toggle {
    transform: translate(0);
  }
}
// picker选择的内容
.info {
  height: 640rpx;
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
    > button {
      color: #ffffff;
      height: 100rpx;
      width: 300rpx;
      border: none;
      border-radius: 150rpx;
    }
    > .confirm {
      background: $uni-color-primary;
    }
    > .cancel {
      background: #bbbbbdfc;
    }
  }
  /* 头部按钮 */
  .picker-top {
    display: flex;
    padding-top: 23rpx;
    > button {
      height: 100rpx;
      width: 300rpx;
      border: none;
      border-radius: 150rpx;
    }
    > .confirm {
      background: #ffffff;
      color: $uni-color-primary;
      text-align: right;
    }
    > .cancel {
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
