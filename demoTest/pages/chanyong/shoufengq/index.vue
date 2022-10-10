<!--
 * @Author: zlc
 * @Date: 2021-08-26 10:37:36
 * @LastEditTime: 2022-10-10 17:40:30
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \demoTest\pages\chanyong\shoufengq\index.vue
-->
<template>
	<view class="box">
		<block v-for="(item,index) in itemList" :key="index">
			<shoufengq :index="index" :current="item.current" @click="handleClick">
				<template #header>
					<view class="header">
						<view class="">1</view>
						<view>2</view>
					</view>
				</template>
				<template #body>
					<view class="body">
						<view>{{item.body}}</view>
					</view>
				</template>
			</shoufengq>
		</block>
	</view>
</template>

<script>
	import shoufengq from "@/components/changyongzuj/shoufq/shoufengq2"
	export default{
		data(){
			return{
				itemList: [
					{
						head: '赏识在于角度的转换',
						body: '只要我们正确择取一个合适的参照物乃至稍降一格去看待他人，值得赏识的东西便会扑面而来',
						current:0
					},
					{
						head: '生活中不是缺少美，而是缺少发现美的眼睛',
						body: '学会欣赏，实际是一种积极生活的态度，是生活的调味品，会在欣赏中发现生活的美',
						open: false,
						current:-1
					},
					{
						head: '周围一些不起眼的人、事、物，或许都隐藏着不同凡响的智慧',
						body: '但是据说雕刻大卫像所用的这块大理石，曾被多位雕刻家批评得一无是处，有些人认为这块大理石采凿得不好，有些人嫌它的纹路不够美',
						open: false,
						current:-1
					}
				]
			}
		},
		components:{
			shoufengq
		},
		methods: {
			handleClick(e){
				console.log(e);
				let index = e.index;
				let item = this.itemList[index];
				item.current = item.current == index ? -1 : index
			}
		},
	}
</script>

<style>
.header {
	display: flex;
	height: 80rpx;
	align-items: center;
	justify-content: space-between;
}
</style>
