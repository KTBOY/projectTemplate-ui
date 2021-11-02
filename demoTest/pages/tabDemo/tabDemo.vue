<template>
	<view class="tui-tabs"><Tab :newsData="newsData" :tabBars="tabBars"></Tab></view>
</template>

<script>
import Tab from '@/components/tab/Tab.vue';
export default {
	components: {
		Tab
	},
	data() {
		return {
			tabBars: [
				{
					name: '热门',
					id: 'hot'
				},
				{
					name: '娱乐',
					id: 'yule'
				},
				{
					name: '体育',
					id: 'sports'
				},
				{
					name: '国内',
					id: 'domestic'
				},
				{
					name: '财经',
					id: 'finance'
				},
				{
					name: '科技',
					id: 'keji'
				},
				{
					name: '教育',
					id: 'education'
				},
				{
					name: '汽车',
					id: 'car'
				}
			],
			newsData: [
				{
					title: '温故知新老师们这些话要牢记',
					image_url:
						'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fblog%2F201306%2F25%2F20130625150506_fiJ2r.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629965916&t=7eb2eb83cd42a1aec74b2a23f20d5075',
					comment_count: 3101,
					vote_count: 2356,
					dateTime: '2020-01-01',
					article_type: 1,
					source: '央视网新闻'
				},
				{
					title: '美国会表决通过新驻华大使 月底有望赴华',
					image_url:
						'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fblog%2F201306%2F25%2F20130625150506_fiJ2r.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629965916&t=7eb2eb83cd42a1aec74b2a23f20d5075',
					comment_count: 3102,
					vote_count: 2356,
					dateTime: '2020-01-01',
					article_type: 1,
					source: '央视网新闻'
				},
				{
					title: '温故知新老师们这些话要牢记',
					image_url:
						'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fblog%2F201306%2F25%2F20130625150506_fiJ2r.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629965916&t=7eb2eb83cd42a1aec74b2a23f20d5075',
					comment_count: 3101,
					vote_count: 2356,
					dateTime: '2020-01-01',
					article_type: 1,
					source: '央视网新闻'
				},
				{
					title: '美国会表决通过新驻华大使 月底有望赴华',
					image_url:
						'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fblog%2F201306%2F25%2F20130625150506_fiJ2r.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629965916&t=7eb2eb83cd42a1aec74b2a23f20d5075',
					comment_count: 3102,
					vote_count: 2356,
					dateTime: '2020-01-01',
					article_type: 1,
					source: '央视网新闻'
				},
				{
					title: '温故知新老师们这些话要牢记',
					image_url:
						'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fblog%2F201306%2F25%2F20130625150506_fiJ2r.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629965916&t=7eb2eb83cd42a1aec74b2a23f20d5075',
					comment_count: 3101,
					vote_count: 2356,
					dateTime: '2020-01-01',
					article_type: 1,
					source: '央视网新闻'
				},
				{
					title: '美国会表决通过新驻华大使 月底有望赴华',
					image_url:
						'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fblog%2F201306%2F25%2F20130625150506_fiJ2r.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629965916&t=7eb2eb83cd42a1aec74b2a23f20d5075',
					comment_count: 3102,
					vote_count: 2356,
					dateTime: '2020-01-01',
					article_type: 1,
					source: '央视网新闻'
				}
			]
		};
	}
};
</script>

<style></style>
