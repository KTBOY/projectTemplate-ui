
<template>
	<view class="image-all"><canvas canvas-id="imageCanvas" class="canvas"></canvas></view>
</template>
<script setup>
import { onMounted, defineProps, defineEmits, computed ,nextTick} from 'vue';
const query = uni.createSelectorQuery().in(this);
const props = defineProps({
	//只接受远端图片
	imageUrl: {
		type: String
	}
});
const emit = defineEmits(['successColor']);

function getImageColorData() {
	let imgWidth, imgHeight;
	let canvasWidth, canvasHeight;
	var ctx = uni.createCanvasContext('imageCanvas');
	let imageUrl = props.imageUrl + '?' + new Date().getTime();
	query.select('.imageUrl').boundingClientRect(data => {
			console.log(data)
			imgWidth = data.width;
			imgHeight = data.height;
			canvasWidth = data.width;
			canvasHeight = data.height;
	}).exec();
	
	setTimeout(()=>{
		console.log(canvasWidth,canvasHeight)
		const leftSectionData = [];
		const rightSectionData = [];
		const onelineImgDataLen = canvasWidth * 4;
		ctx.drawImage(imageUrl, 0, 0, canvasWidth, canvasHeight);
		ctx.draw(true, () => {
			// 获取像素数据
			uni.canvasGetImageData({
				canvasId: ctx.id,
				x: 0,
				y: 0,
				width: 1,
				height: 1,
				success: res => {
					console.log(res)
					if(!res.data){
						uni.showToast({
							title:'获取数据为空'
						})
					}
					var imageData = {
						leftNearestColor: res.data,
						
					};
					console.log(imageData);
					emit('successColor', imageData);
					return
				}
			});
		});

	},2000)
}
onMounted(async () => {
	uni.showLoading({
		title:'加载中'
	})
	await nextTick()
	setTimeout(()=>{
		uni.hideLoading()
		getImageColorData();
	},2000)
	
});
</script>

<style>
.canvas {
	 visibility: hidden;
}
</style>