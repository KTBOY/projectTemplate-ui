<template>
	<view class="picker">
		<button type="button" @click="handShowPicker">打开</button>
		<!-- <uni-data-checkbox v-model="value" :localdata="range" @change="change" :multiple="false"></uni-data-checkbox> -->
		<pickerBasicUsage v-model="show" :buttonLocation="buttonLocation" :range="rangePickerList"></pickerBasicUsage>
	</view>
</template>

<script>
/* 
方案二；弹出层跟随手指滑动
 1.当滑动三分之二的适合，向下滑动隐藏，并且有回弹的效果
 
 */
import pickerBasicUsage from '@/components/dohu/index2.vue';
export default {
	components:{
		pickerBasicUsage
	},
	data() {
		return {
			show: false,
			value: 0,
			rangePickerList: [1, 2, 3],
			buttonLocation: 'bottom',
			range: [{ value: 0, text: '底部按钮', key: 'bottom' }, { value: 1, text: '顶部按钮', key: 'top' }]
		};
	},
	methods:{
		handShowPicker() {
			console.log('123')
		  this.show=!this.show
		},
		// change(e){
		//     let {key}=e.detail.data
		//     buttonLocation.value=key
		// }
	}
};
</script>

<style></style>
