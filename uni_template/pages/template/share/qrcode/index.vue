<!--
 * @Author: zlc
 * @Date: 2022-04-19 22:22:38
 * @LastEditTime: 2022-04-19 22:59:22
 * @LastEditors: zlc
 * @Description: 二维码生成以及分享
 * @FilePath: \gogogogo\project-template\uni_template\pages\template\share\qrcode\index.vue
-->
<template>
	<view class="demo">
		<view class="demo-title">基础用法</view>
		<qrcode></qrcode>
		<view class="demo-select">
			<radio-group class="radioItems" @change="radioChange">
				<label class="item" v-for="(item, index) in state.radioItems" :key="index">
					<view><radio :id="item.name" :value="item.value" :checked="item.checked"></radio></view>
					<view >
						<label class="label-2-text" :for="item.name">
							<text>{{ item.value }}</text>
						</label>
					</view>
				</label>
			</radio-group>
		</view>
	</view>
</template>
<script>
import { defineComponent, reactive } from 'vue';
import qrcode from '@/components/template/share/qrcode/qrcode01.vue';
export default defineComponent({
	components: {
		qrcode: qrcode
	},
	setup() {
		const state = reactive({
			checkde1: true,
			checkde2: false,
			radioItems: [
				{

					value: '默认',
					checked: 'true'
				},
				{

					value: '显示图标',
					
				}
			]
		});
		function radioChange(e) {
            var checked = e.target.value
            var changed = {}
            for (var i = 0; i < state.radioItems.length; i++) {
                if (checked.indexOf(state.radioItems[i].name) !== -1) {
                    changed['radioItems[' + i + '].checked'] = true
                } else {
                    changed['radioItems[' + i + '].checked'] = false
                }
            }
		}

		return {
			state,
			radioChange
		};
	}
});
</script>

<style lang="scss" scoped>
.demo-select {
	margin: 15rpx 0;
}
.radioItems{
	display: flex;
	.item{
		text-align: center;
		margin: 0 15rpx;
	}
}
</style>
