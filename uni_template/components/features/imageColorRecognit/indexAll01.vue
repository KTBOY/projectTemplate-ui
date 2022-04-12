<!--
 * @Author: zlc
 * @Date: 2022-04-12 11:22:25
 * @LastEditTime: 2022-04-12 14:56:41
 * @LastEditors: zlc
 * @Description: 多端图片颜色识别
 * @FilePath: \git项目\project-template\uni_template\components\features\imageColorRecognit\indexAll01.vue
-->
<template>
	<view class="image-all"><canvas canvas-id="imageCanvas" class="canvas"></canvas></view>
</template>
<script setup>
import { onMounted, defineProps, defineEmits, computed } from 'vue';
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
	query
		.select('.imageUrl')
		.boundingClientRect(data => {
			///console.log(data)
			imgWidth = data.width;
			imgHeight = data.height;
			canvasWidth = data.width;
			canvasHeight = data.height;
			ctx.drawImage(imageUrl, 0, 0, canvasWidth, canvasHeight);
		}).exec();
	

	console.log(ctx)
	const leftSectionData = [];
	const rightSectionData = [];
	const onelineImgDataLen = canvasWidth * 4;
	ctx.draw(true, () => {
		// 获取像素数据
		uni.canvasGetImageData({
			canvasId: ctx.id,
			x: 0,
			y: 0,
			width: imgWidth,
			height: imgHeight,
			success: res => {
				//console.log(res)
				res.data.forEach((colorVal, i) => {
					if (i % onelineImgDataLen <= 0.5 * onelineImgDataLen || i % onelineImgDataLen >= 0.6 * onelineImgDataLen) {
						const inLeft = i % onelineImgDataLen <= 0.5 * onelineImgDataLen;
						if (i % 4 === 0) {
							// 获取rgb均值
							const curAverageRGB = (res.data[i] + res.data[i + 1] + res.data[i + 2]) / 3;
							let leftOrRightRef = inLeft ? leftSectionData : rightSectionData;
							//每个数组里存四个值：本颜色值中的r、g、b的均值，以及r、g、b三个值。
							//均值一方面用于累加计算本区域的整体均值，然后再跟每个均值对比拿到与整体均值最接近的项的索引，再取该数组里的后三个值：rgb，对应着颜色
							leftOrRightRef[leftOrRightRef.length] = [curAverageRGB, res.data[i], res.data[i + 1], res.data[i + 2]];
						}
					}
				});
				const averageOfLeft = Math.round(
					leftSectionData.reduce((_cur, item) => {
						return _cur + item[0];
					}, 0) / leftSectionData.length
				);
				const averageOfRight = Math.round(
					rightSectionData.reduce((_cur, item) => {
						return _cur + item[0];
					}, 0) / rightSectionData.length
				);
			
				//find the most near color
				const findNearestIndex = (averageVal, arrBox) => {
					let _gapValue = Math.abs(averageVal - arrBox[0]);
					let _nearColorIndex = 0;
					arrBox.forEach((item, index) => {
						const curGapValue = Math.abs(item - averageVal);
						if (curGapValue < _gapValue) {
							_gapValue = curGapValue;
							_nearColorIndex = index;
						}
					});
					return _nearColorIndex;
				};

				const leftNearestColor = leftSectionData[findNearestIndex(averageOfLeft, leftSectionData)];
				const rightNearestColor = rightSectionData[findNearestIndex(averageOfRight, rightSectionData)];
				console.log(leftNearestColor, rightNearestColor);
				var imageData = {
					leftNearestColor: leftNearestColor,
					rightNearestColor: rightNearestColor
				};
				console.log(imageData);
				emit('successColor', imageData);
			}
		});
	});
}
onMounted(() => {
	setTimeout(()=>{
		getImageColorData();
	},2000)
	
});
</script>

<style>
.canvas {
	 visibility: hidden;
}
</style>
