<template>
	<view class="handJd" @touchstart="touchstart">
			<arprogress :percent="percent">
				<text>{{ percent }}%</text>
			</arprogress>
			<button type="default" @click="handJd()">点我</button>
	</view>

</template>

<script>
import arprogress from '../../components/ar-circle-progress/ar-circle-progress.vue';
export default {
	components: {
		arprogress
	},
	data() {
		return {
			percent: 20
		};
	},
	methods: {
		handJd(e) {
			console.log(e)
			this.percent++;
		},
		touchstart(e){
			console.log(e)
			this.percent++;
		}
	}
};
</script>

<style></style>
