<template>
	<view class="tui-tabs">
		<scroll-view id="tab-bar" scroll-x scroll-with-animation class="tui-scroll-h" :show-scrollbar="false" :scroll-into-view="scrollInto">
			<view v-for="(tab, index) in tabBars" :key="tab.id" class="tui-tab-item" :id="tab.id" :data-current="index" @click="tabClick">
				<text class="tui-tab-item-title" 
				:class="[tabIndex == index?'tui-tab-item-title-active tui-tab-item-title-active-line':'']"
				>{{ tab.name }}</text>
				
			</view>
		</scroll-view>
		<view class="tui-line-h"></view>
		<swiper :current="tabIndex" class="tui-swiper-box" :duration="300" @change="tabChange" @transition="swiperTransition" @animationfinish="swiperAnimationfinish">
			<swiper-item class="tui-swiper-item" v-for="(tab, index1) in newsList" :key="index1">
				<scroll-view
					class="tui-scroll-v"
					:refresher-enabled="refresherEnabled"
					:refresher-triggered="tab.refreshing"
					refresher-background="#fafafa"
					enable-back-to-top
					:refresher-threshold="100"
					scroll-y
					@scrolltolower="loadMore(index1)"
					@refresherrefresh="onrefresh"
				>
					<view v-for="(newsitem, index2) in tab.data" :key="newsitem.id">
						<NewsItem :itemData="newsitem" @close="close(index1, index2)" :lastChild="index2 === tab.data.length - 1" @click="goDetail(newsitem)"></NewsItem>
					</view>
					<view class="tui-loading-more" v-if="tab.isLoading || tab.pageIndex > 3">
						<text class="tui-loadmore-line" v-if="tab.pageIndex > 3"></text>
						<text class="tui-loading-more-text">{{ tab.loadingText }}</text>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
import NewsItem from '@/pages/tabDemo/newsItem.vue';

// 缓存最多页数
const MAX_CACHE_PAGEINDEX = 3;
// 缓存页签数量
const MAX_CACHE_PAGE = 3;

const newsData = [
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
		title: '哪些专业毕业后收入高?计算机、金融专业排前列金融专业排前列金融专业排前列金融专业排前列金融专业排前列',
		image_url:
			'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fblog%2F201306%2F25%2F20130625150506_fiJ2r.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629965916&t=7eb2eb83cd42a1aec74b2a23f20d5075',
			comment_count: 3103,
		vote_count: 2356,
		dateTime: '2020-01-01',
		article_type: 1,
		source: '粤港精英联盟'
	},
	{
		title: '科创板交易系统准备就绪,不存在首批名单',
		image_url:
			'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fblog%2F201306%2F25%2F20130625150506_fiJ2r.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629965916&t=7eb2eb83cd42a1aec74b2a23f20d5075',
			comment_count: 3104,
		vote_count: 2356,
		dateTime: '2020-01-01',
		article_type: 1,
		source: '百科故事大全'
	},
	{
		title: '哪些专业毕业后收入高?计算机、金融专业排前列金融专业排前列金融专业排前列金融专业排前列金融专业排前列',
		image_url:
			'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fblog%2F201306%2F25%2F20130625150506_fiJ2r.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629965916&t=7eb2eb83cd42a1aec74b2a23f20d5075',
			comment_count: 3103,
		vote_count: 2356,
		dateTime: '2020-01-01',
		article_type: 1,
		source: '粤港精英联盟'
	},
	{
		title: '科创板交易系统准备就绪,不存在首批名单',
		image_url:
			'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fblog%2F201306%2F25%2F20130625150506_fiJ2r.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629965916&t=7eb2eb83cd42a1aec74b2a23f20d5075',
			comment_count: 3104,
		vote_count: 2356,
		dateTime: '2020-01-01',
		article_type: 1,
		source: '百科故事大全'
	},
	{
		title: '哪些专业毕业后收入高?计算机、金融专业排前列金融专业排前列金融专业排前列金融专业排前列金融专业排前列',
		image_url:
			'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fblog%2F201306%2F25%2F20130625150506_fiJ2r.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629965916&t=7eb2eb83cd42a1aec74b2a23f20d5075',
			comment_count: 3103,
		vote_count: 2356,
		dateTime: '2020-01-01',
		article_type: 1,
		source: '粤港精英联盟'
	},
	{
		title: '科创板交易系统准备就绪,不存在首批名单',
		image_url:
			'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fblog%2F201306%2F25%2F20130625150506_fiJ2r.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629965916&t=7eb2eb83cd42a1aec74b2a23f20d5075',
		comment_count: 3104,
		vote_count: 2356,
		dateTime: '2020-01-01',
		article_type: 1,
		source: '百科故事大全'
	}
];

export default {
	components: {
		NewsItem
	},
	data() {
		return {
			isIos: false,
			newsList: [],
			cacheTab: [],
			tabIndex: 0,
			tabBars: [],
			scrollInto: '',
			showTips: false,
			navigateFlag: false,
			pulling: false,
			refresherEnabled:false,
			refreshIcon:
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRBAMAAABYoVcFAAAAKlBMVEUAAACXl5eZmZmfn5+YmJiXl5eampqZmZmYmJiYmJiZmZmYmJiZmZmZmZl02B9kAAAADXRSTlMAQKAQ0GAsUN+wz5CA21ow0AAAAM5JREFUSMftzLEJAkEQheFR4WzjGji4wC5E0A7E0OgaEIwF4RqwJEEODKcX1114yQ/uhsLtY6Lh57NZ7Dz1heXd27Kwcb+WlQv3Vy1rWcta1rKW/1Q2R8PWt8FYdhPLi79ZLt33KB/hibJzH1E+PaAqRfqAcuMBVSlyMmy1C6hKka0CoCpBAlUJEmgsQQJVCRKoSpBAU0mSaCpJEk0lSSMaS5JG9FuK/IkeQkmSaEjikSSaRpJoHEmiIvOoyCwqMo+KzKMi8+hoZTtte5vDPrSGI5zJ/Z1kAAAAAElFTkSuQmCC'
		};
	},
	onLoad() {
		setTimeout(() => {
			this.tabBars = [
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
			];
			this.init();
		}, 200);
	},
	methods: {
		init() {
			this.newsList = this.randomfn();
		},
		//初始化数据
		randomfn() {
			let ary = [];
			for (let i = 0, length = this.tabBars.length; i < length; i++) {
				let aryItem = {
					loadingText: '正在加载...',
					refreshing: false,
					refreshText: '',
					data: [],
					isLoading: false,
					pageIndex: 1
				};
				//循环第一次的，添加这个对象，并且把新闻数据，合并在data中
				if (i === 0) {
					aryItem.pageIndex = 2;
					aryItem.data = aryItem.data.concat(newsData);
				}
				ary.push(aryItem);
			}
			console.log(ary);
			return ary;
		},
		//获取数据、更新数据
		getList(index, refresh) {
			let activeTab = this.newsList[index];
			let list = newsData || [];
			if (refresh) {
				activeTab.data = [];
				activeTab.loadingText = '正在加载...';
				activeTab.pageIndex = 2;
				activeTab.data = list || [];
			} else {
				activeTab.data = activeTab.data.concat(list);
				activeTab.pageIndex++;
				activeTab.isLoading = false;
				//根据实际修改判断条件
				if (activeTab.pageIndex > 3) {
					activeTab.loadingText = '没有更多了';
				}
			}
		},
		goDetail(e) {
			if (this.navigateFlag) return;
			this.navigateFlag = true;
			uni.navigateTo({
				url: '/pages/template/news/newsDetail/newsDetail'
			});
			setTimeout(() => {
				this.navigateFlag = false;
			}, 200);
		},
		loadMore(e) {
			console.log("滑动")
			let activeTab = this.newsList[this.tabIndex];
			if (activeTab.pageIndex < 4 && !activeTab.isLoading) {
				activeTab.isLoading = true;
				setTimeout(() => {
					this.getList(this.tabIndex);
				}, 300);
			}
		},
		//点击tab切换状态栏
		tabClick(e) {
			let index = e.target.dataset.current || e.currentTarget.dataset.current;
			this.switchTab(index);
		},
		//滑动的时候，获取索引，滑动到某页
		tabChange(e) {
			let index = e.target.current || e.detail.current;

			this.switchTab(index);
		},
		swiperTransition() {
			this.refresherEnabled = false;
		},
		swiperAnimationfinish() {
			this.refresherEnabled = true;
		},
		//滑动处理函数
		switchTab(index) {

			if (this.tabIndex === index) return;
			if (this.newsList[index].data.length === 0) {
				this.getList(index);
			}
			// 缓存 tabId
			if (this.newsList[this.tabIndex].pageIndex > MAX_CACHE_PAGEINDEX) {
				let isExist = this.cacheTab.indexOf(this.tabIndex);
				if (isExist < 0) {
					this.cacheTab.push(this.tabIndex);
					//console.log("cache index:: " + this.tabIndex);
				}
			}

			this.tabIndex = index;
			let scrollIndex = index - 1 < 0 ? 0 : index - 1;
			this.scrollInto = this.tabBars[scrollIndex].id;

			// 释放 tabId
			if (this.cacheTab.length > MAX_CACHE_PAGE) {
				let cacheIndex = this.cacheTab[0];
				this.clearTabData(cacheIndex);
				this.cacheTab.splice(0, 1);
				//console.log("remove cache index:: " + cacheIndex);
			}
		},
		clearTabData(e) {
			this.newsList[e].data.length = 0;
			this.newsList[e].loadingText = '加载更多...';
		},
		onrefresh(e) {
			var tab = this.newsList[this.tabIndex];
			if (tab.refreshing) {
				return;
			}

			tab.refreshing = true;

			setTimeout(() => {
				uni.stopPullDownRefresh();
				this.getList(this.tabIndex, true);
				this.pulling = true;
				tab.refreshing = false;
				uni.showToast({
					title: '刷新成功',
					icon: 'none'
				});
				setTimeout(() => {
					// TODO fix ios和Android 动画时间相反问题
					this.pulling = false;
				}, 500);
			}, 3000);
		}
	},
	onPullDownRefresh() {
		console.log('onPullDownRefresh');
	}
};
</script>

<style>
page {
	width: 100%;
	min-height: 100%;
	display: flex;
	height: 100vh;
}

.tui-tabs {
	flex: 1;
	flex-direction: column;
	overflow: hidden;
	background-color: #fafafa;
}

.tui-scroll-h {
	white-space: nowrap;
	height: 80rpx;
	background-color: #ffffff;
	display: flex;
	flex-direction: row;
	/* #ifdef H5 */
	position: fixed;
	top: 44px;
	left: 0;
	z-index: 999;
	/* #endif */
}

.tui-line-h {
	height: 1rpx;
	background-color: #cccccc;
	position: relative;
}

.tui-tab-item {
	display: inline-block;
	padding-left: 34rpx;
	padding-right: 34rpx;
	flex-wrap: nowrap;
}

.tui-tab-item-title {
	color: #555;
	font-size: 30rpx;
	height: 80rpx;
	line-height: 80rpx;
	flex-wrap: nowrap;
	white-space: nowrap;
	position: relative;
}

.tui-tab-item-title-active {
	color: #5677fc;
	font-size: 36rpx;
	font-weight: bold;
	text-align: center;
	display: block;
	box-sizing: border-box;
}
.tui-tab-item-title-active::after{
	content: '';
	height: 56rpx;
	width: 56rpx;

	border-bottom: 6rpx solid #5677fc;
	transition: property duration timing-function delay;  
	left: 10%;
	top: 15%;
	position: absolute;
}

@keyframes moving{
	from{
		left: 0%;
	}
	to{
		left: 100%;
	}
}

.tui-swiper-box {
	height: 100%;
	overflow-y: auto;
	/* #ifdef H5 */
	margin-top: 80rpx;
	/* #endif */
}

.tui-swiper-item {
	flex: 1 !important;
	flex-direction: row;
}

.tui-scroll-v {
	width: 100%;
	height: 100%;
}

.tui-loading-more {
	align-items: center;
	justify-content: center;
	padding-top: 15px;
	padding-bottom: 15px;
	text-align: center;
	position: relative;
}

.tui-loadmore-line {
	border-bottom-width: 1rpx;
	border-bottom-style: solid;
	border-bottom-color: #e5e5e5;
	width: 320rpx;
	position: absolute;
	z-index: -1;
}

.tui-loading-more-text {
	padding-left: 8rpx;
	padding-right: 8rpx;
	font-size: 28rpx;
	line-height: 28rpx;
	background-color: #fafafa;
	text-align: center;
	color: #999;
}
</style>
