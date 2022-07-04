<template>
	<view class="tui-tabs">
		<scroll-view id="tab-bar" scroll-x scroll-with-animation class="tui-scroll-h" :show-scrollbar="false" :scroll-into-view="scrollInto">
			<view v-for="(tab, index) in tabBars" :key="tab.id" class="tui-tab-item" :id="tab.id"  @click="tabClick(tab,index)">
				<text class="tui-tab-item-title" :class="{ 'tui-tab-item-title-active': tabIndex == index }">{{ tab.name }}</text>
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
						<NewsItem :itemData="newsitem" @close="close(index1, index2)" :lastChild="index2 === tab.data.length - 1" @click="goDetail(newsitem)">
							
							
						</NewsItem>
					</view>
	
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import NewsItem from "@/pages/tabDemo/newsItem.vue"
	//缓存最大页数
	const MAX_CACHE_PAGEINDES=3
	//缓存页签数量
	const MAX_CACHE_PAGE=3
export default {
	props: {
		newsData: Array,
		tabBars: Array
	},
	components:{
		NewsItem
	},
	data() {
		return {
			isIos: false,
			newsList: [],
			cacheTab: [],
			tabIndex: 0,
			scrollInto: '',
			showTips: false,
			navigateFlag: false,
			pulling: false,
			refresherEnabled:false

		};
	},
	created() {

		this.init()
	},
	onLoad() {

		
	},
	methods: {
		//点击切换tab
		tabClick(item, index) {
			this.tabIndex = index;
			this.switchTab(index)
		},
		//生成数据
		init(){
			this.newsList=this.randomfn();//把每一个分类下的新闻合并在这个数组
			console.log(this.newsList)
		},
		randomfn(){
			let ary=[];

			this.tabBars.forEach((item,index)=>{
				let aryItem={
					loadingText:"加载中",
					refreshing:false,
					refreshText:'',
					data:[],
					isLoading:false,
					pageIndex:1
				};
				if(index===0){
					console.log("123")
					aryItem.pageIndex=2;
					aryItem.data=aryItem.data.concat(this.newsData)
				}
				ary.push(aryItem)
			})


			return ary
		},
		getList(index,refresh){
			let activeTab=this.newsList[index];
			let list=newsData||[];
			if(refresh){
				activeTab.data=[];
				activeTab.loadingText='加载中...',
				activeTab.pageIndex=2,
				activeTab.data=list||[];


			}else{
				activeTab.data=activeTab.data.concat(list);
				activeTab.pageIndex++;
				activeTab.isLoading=false;
				if(activeTab.pageIndex>3){
					activeTab.loadingText="没有更多了"
				}
			}
		},

		//滚动到底部/右边，会触发 scrolltolower 事件
		loadMore(e){
			let activeTab=this.newsList[this.tabIndex];
			if(activeTab.pageIndex<4&&!activeTab.isLoading){
				activeTab.isLoading=true;
				setTimeout(()=>{
					this.getList(this.tabIndex);//滑动的索引，请求数组中数据，根据索引提取
				},300)
			}
		},
		//h滑动事件
		tabChange(e){
			let index=e.target.current||e.detail.current;
			this.switchTab(index)
		},
		//swiper-item 的位置发生改变时会触发 transition 事件
		swiperTransition(){
			this.refresherEnabled=false;//设置为false,标识，不能触发下拉，因为我正在滑动
		},
		//滑动动画解释， 表示我可以下拉刷新数据
		swiperAnimationfinish(){
			this.refresherEnabled=true;
		},

		switchTab(index){
			if(Object.is(this.tabIndex,index)) return
			if(this.newsList[index].data.length===0){
				this.getList(index)
			}
			if(this.newsList[this.tabIndex].pageIndex>MAX_CACHE_PAGEINDES){
				let isExist=this.cacheTab.indexOf(this.tabIndex);
				if(isExist<0){
					this.cacheTab.push(this.tabIndex)
				}
			}
			this.tabIndex=index;
			let scrollIndex=index-1<0?0:index-1;
			this.scrollInto=this.tabBars[scrollIndex].id;
			if(this.cacheTab.length>MAX_CACHE_PAGE){
				let cacheIndex=this.cacheTab[0];
				this.clearTabData(cacheIndex);
				this.cacheTab.splice(0,1);

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
			},
		//跳转详情页面
		goDetail(){
			if(this.navigateFlag) return;
			this.navigateFlag=true
			uni.navigateTo({

			})
			setTimeout(()=>{
				this.navigateFlag=false;
			},200)
		}
	}
};
</script>

<style lang="less" scoped>
.tui-tabs {
	flex: 1;
	flex-direction: column;
	overflow: hidden;
	background-color: #fafafa;
	.tui-scroll-h {
		white-space: nowrap;
		height: 80rpx;
		background-color: #ffffff;
		display: flex;
		flex-direction: row;
		/* #ifdef H5 */
		position: fixed;
		top: 80rpx;
		left: 0;
		z-index: 999;
		/* #endif */
		.tui-tab-item {
			display: inline-block;
			padding: 0 45rpx;
			flex-wrap: nowrap;
			.tui-tab-item-title {
				color: #555;
				font-size: 30rpx;
				height: 80rpx;
				line-height: 80rpx;
				flex-wrap: nowrap;
				white-space: nowrap;
			}

			.tui-tab-item-title-active {
				color: #5677fc;
				font-size: 36rpx;
				font-weight: bold;
				border-bottom: 6rpx solid #5677fc;
				text-align: center;
				display: block;
				box-sizing: border-box;
			}
		}
	}
}
.tui-line-h {
	height: 1rpx;
	background-color: #cccccc;
	position: relative;
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
