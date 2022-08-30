<!--
 * @Author: zlc
 * @Date: 2022-08-01 18:01:02
 * @LastEditTime: 2022-08-04 11:04:27
 * @LastEditors: zlc
 * @Description: 大量数据版
 * @FilePath: \project-template\uni_template\components\features\shopMenu\indexMassData.vue

 缺点：依然没有针对分页或者虚拟长列表,衔接性相对较差
 优点：但不需要获取列表数据，只需要获取分类数据
-->
<template>
	<view class="menu">
		<view class="scroll-panel">
			<view class="left">
				<scroll-view :scroll-y="true" class="left-scroll" :style="{ height: `${state.windowHeight}px` }" :scroll-into-view="leftIntoView" :scroll-with-animation="true">
					<view class="info">
						<view class="item-active" :style="{ transform: `translateY(${defineLeft.currenMoveData.moveY}px)` }">
							<text class="active-name">{{ testIndex[defineLeft.index] }}</text>
						</view>
						<view class="item left-elm-item" v-for="(item, index) in testIndex" :key="index" :id="`left-${index}`" @click="leftClickButton(index)">
							<text class="name">{{ item }}</text>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="right">
				<scroll-view
					:scroll-y="true"
					class="right-scroll"
					:style="{ height: `${state.windowHeight}px` }"
					:scroll-into-view="`right-${defineLeft.index}`"
					@scroll="rightClickButton"
					@scrolltolower="scrolltolower"
					:scroll-with-animation="true"
					:scroll-anchoring="true"
				>
					<view class="info">
						<view class="item-parent" :class="{ 'right-last': index == test.length - 1 }" :id="`right-${index}`" v-for="(item, index) in state.deepTest" :key="index">
							<view class="class-item">
								<view class="item-title">
									<text>{{ item.name }}</text>
								</view>
								<block v-for="(item1, index1) in item.data" :key="index1">
									<view class="item-container">{{ item1.classify }}{{ index }}</view>
									<image
									:src="(item1.lazyLoad&&state.showImg)?item1.image:item1.defaut "
									:id="`uid-right-${index}`"
									:data-id="item1.id"
									class="item-image"	
									@load="defineRightFun.loadImage"
									></image>
								</block>
							</view>
						</view>
					</view>
					<view class="fill-last" :style="{ height: state.fillHeight + 'px' }"></view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { onMounted, defineProps, defineEmits, computed, reactive, nextTick } from 'vue';
import { getSystemInfo } from '@/utils/uniApi.js';
import { debounce } from '@/utils/Function.js';
const query = uni.createSelectorQuery().in(this);
const observer = uni.createIntersectionObserver(this, {
	observeAll: true
});
const props = defineProps({
	test: {
		type: Array
	},
	testIndex: {
		type: Array
	}
});
const theResponsive={
	time:null,//定时器
}
const state = reactive({
	windowHeight: 0,
	scrollTopSize: 0,
	fillHeight: 0,
	deepTest: {},
	uId:'',
	showImg:false
});
//左侧定义
const defineLeft = reactive({
	index: 0,
	scrollHeight: 0,
	top: 0,
	topArrList: [],
	currenMoveData: {
		moveY: 0,
		currenHeight: 0
	}
});
//右侧定义
const defineRight = reactive({
	scrollTop: 0,
	allScrollTopHeight: 0,
	deltaY: 0,
	isSole: false,
	oldScrollTop: 0,
	topArrList: []
});



const leftIntoView = computed(() => {
	return `left-${defineLeft.index > 1 ? defineLeft.index - 2 : 0}`;
});
//左侧切换分类
const leftClickButton = async value => {
	defineRight.scrollTop = defineRight.oldScrollTop;
	await nextTick();
	defineRight.scrollTop = defineRight.topArrList[value];
	await nextTick();
	setTimeout(() => {
		defineLeft.index = value;
	}, 200);
};
const defineLeftFun = {
	getClassifyElement() {
		query
			.select('.item')
			.boundingClientRect(data => {
				return new Promise((resolve, reject) => {
					defineLeft.currenMoveData.currenHeight = data.height; //获取第一个item的高度
					resolve(data);
				}).catch(err => {
					this.currenMoveData.currenHeight = 50;
				});
			})
			.exec();
		query.selectAll('.left-elm-item').boundingClientRect(data => {
			defineLeft.topArrList = data.map(item => {
				return item.top - state.scrollTopSize;
			});
		});
	},
	onScrollIntersectionObserver() {
		
		uni.createIntersectionObserver(this)
			 .relativeToViewport({bottom:100})	
			.observe(`#uid-right-${defineLeft.index}`, res => {
				console.log(res);
				if (res.intersectionRatio) {
					console.log(res);
					const { lazyLoad, src, index, childerIndex } = res.dataset;
					
					//state.deepTest[index].data[childerIndex].defaut = state.deepTest[index].data[childerIndex].image;
				}
			});
	}
};

const defineRightFun = {
	//获取最后一项的高度,必须的，需要不补上最后一项，滚动定位就计算不准确
	getElementLastHeight() {
		return new Promise((resolve, reject) => {
			query
				.selectAll('.right-last ')
				.boundingClientRect(data => {
					resolve(data);
				})
				.exec();
		}).then(res => {
			let last = res[res.length - 1]?.height;
			if (last - 20 < state.windowHeight) {
				state.fillHeight = state.windowHeight - last;
			} else {
				state.fillHeight = 100;
			}
		});
	}
};

//右侧滚动事件
const rightClickButton = debounce(e => {
	const { scrollTop, scrollHeight, deltaY } = e.detail;
	let index = Math.floor((scrollTop / (scrollHeight - state.windowHeight)) * props.testIndex.length);
	index = index > props.testIndex.length - 1 ? props.testIndex.length - 1 : index;
	defineRight.oldScrollTop = defineLeft.topArrList[index];
	defineLeft.index = index;
	defineLeft.currenMoveData.moveY = defineLeft.index * defineLeft.currenMoveData.currenHeight;

},200);
//右侧触底
const scrolltolower = e => {
	defineRight.isSole = true;
};
const shopMenuFun = {
	//获取当前可滚动区域，距离头部的距离
	initScrollView() {
		return new Promise((resolve, reject) => {
			query
				.select('.scroll-panel')
				.boundingClientRect(res => {
					state.scrollTopSize = res.top;
					resolve();
				})
				.exec();
		});
	},
	generateId() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			let r = (Math.random() * 16) | 0,
				v = c == 'x' ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		});
	}
};

onMounted(async () => {
	state.uuId = shopMenuFun.generateId();
	const { windowHeight } = await getSystemInfo();
	state.windowHeight = windowHeight;
	state.deepTest = props.test.concat();

	await shopMenuFun.initScrollView();
	await defineLeftFun.getClassifyElement();
	await defineRightFun.getElementLastHeight();
	if (observer) {
		observer.disconnect();
	}
	await nextTick();
	observer.relativeTo('.right-scroll').observe(`.item-image`, res => {
		if (res.intersectionRatio) {
			const { lazyLoad, src, index, childerIndex } = res.dataset;
			state.deepTest[index].data[childerIndex].defaut = state.deepTest[index].data[childerIndex].image;
		}
	});
});
</script>

<style scoped lang="scss">
.scroll-panel {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: flex-start;
}
.left {
	width: 180rpx;
	box-sizing: border-box;
	font-size: 32rpx;
	&-scroll {
		background-color: #f2f4f6;
	}
	.info {
		.item {
			width: 180rpx;
			height: 100rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			font-size: 26rpx;
			color: #444;
			font-weight: 400;
			justify-content: center;
		}
	}
	.item-active {
		width: 180rpx;
		height: 100rpx;
		position: absolute;
		font-size: 28rpx;
		font-weight: 600;
		background: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
		.active-name {
			z-index: 10;
		}
	}
}
.right {
	flex: 1;
	.info {
		background-color: #f2f4f6;
		width: 100%;
	}
	.item-parent {
		width: 530rpx;
	}
	.item-parent + .item-parent {
		border-top: 2rpx solid #e3e4e6;
		.class-item {
			.item-title {
				font-size: 28rpx;
				font-family: Source Han Sans CN;
				color: #222222;
				font-weight: bold;
			}
		}
	}
	.item-image {
		width: 90rpx;
		height: 90rpx;
	}
}
</style>
