<template>
	<view class="region"><index-list :region="headerCitys"></index-list></view>
</template>

<script>
import indexList from '@/components/feedback/indexList/index01.vue';
import { ref } from 'vue';
export default {
	components: {
		'index-list': indexList
	},
	setup(props) {
		const headerCitys = ref([
			{
				name: '中国'
			},
			{
				name: '美国'
			},
			{
				name: '加拿大'
			},
			{
				name: '澳大利亚'
			},
			{
				name: '日本'
			},
			{
				name: '新加坡'
			},
			{
				name: '西班牙'
			},
			{
				name: '英国'
			}
		]);
		return {
			headerCitys
		};
	}
};
</script>
