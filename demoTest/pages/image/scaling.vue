<template>
	<view class="scalling">
		<view class="deom">
				<image :src="imageUrl" :style="imageStyle"  @load="imageLoad"></image>
			
		</view>
			
	</view>
</template>

<script>
	export default {
		data() {
			return{
			  imagewidth: 0,//缩放后的宽  
			  imageheight: 0,//缩放后的高  	
			  imageStyle:{},
			  imageUrl:"https://tresource.ymyimi.cn:9000/yimi-yidao-checkroll/banner/image/2022/06/09/5BF73C4402DC4E10A1FCEE44BEA54F11.png",
			  imagefirstsrc: 'http://bpic.588ku.com/back_pic/00/03/85/1656205138bbe2d.png',//图片链接  
			}
		},
		methods:{
			imageUtil(e){
				let imageSize={}
				let originalWidth = e.detail.width;//图片原始宽  
				let originalHeight = e.detail.height;//图片原始高
				let originalScale = originalHeight/originalWidth;//图片高宽比  
				uni.getSystemInfo({
					success:(res)=>{
						const {windowWidth=110,windowHeight=60}=res
						let windowScale=windowHeight / windowWidth
						if(originalScale < windowScale){
							imageSize.imageWidth=windowWidth
							imageSize.imageHeight=(windowWidth*originalHeight) / originalWidth
						}else{
							imageSize.imageWidth=windowHeight
							imageSize.imageHeight=(windowHeight*originalWidth) / windowHeight
						}
					}
				})
				console.log(originalScale);
				return imageSize
			},
			
			imageLoad(e){
				const {imageHeight,imageWidth}=this.imageUtil(e)
				this.imageStyle={
					width:`${imageWidth}px`,
					height:`${imageHeight}px`
				}
				
			}
			
		}
	}
</script>

<style>
	.deom{
		height: 380rpx;
		width: 750rpx;
	
		overflow: hidden;
	}
</style>