<template>
	<view class="upload_box">
		<view class="myTransaction-header">
			<view class="myTransaction-header-title">
				<text class="header-title-pointer">*</text>
				<text>证照上传须知</text>
			</view>
			<view class="myTransaction-header-content">
				<view>根据司法部、外交部及相应国家(地区)对公证书格式的要求，上传的证照需满足下列条件︰</view>
				<view>1、证照尺寸需满足规范,用于制作公证书的证照需保留原始尺寸，请勿放大或者缩小，为了您的证照能满足使用国家(地区)的要求，请按照示例图的样式上传证照扫描件;</view>
				<view>2、证照内容需清晰，对于出具部门的公章需完整，可辨识，请勿在证照上擅自涂写其他内容;</view>
				<view>
					3、证照内容需完整，包括证照封皮(封面)、正文、封底等，里面的各项信息需完整，对于证照内容有缺失（如姓名、证件号码等)的，建议补足后申办，以免造成公证书无法使用。
				</view>
			</view>
		</view>
		
		<view class="upload_content" >
			<view class="upload_title">
				上传材料
			</view>
			<view class="upload_info">
				<view class="upload_item" v-for="(item,index) in wdclData" :key="index">
					<view class="upload_item_title">
						{{item.title}}
					</view>
					<scroll-view :scroll-x="true"  :scroll-into-view="`add-view-${id||item.le}`" :scroll-with-animation="true" class="upload_item_img">
						<view v-for="(item2,index2) in item.images" :key="index2" class="img_box">
							<UploadCom :src='item2.src' ></UploadCom>	
						</view>
						<view class="img_box_add" :id="`add-view-${item.images.length-1}`" >
							<button type="default" @click="addimg(item,index)">添加</button>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
		
		
		<view class="">
			裁剪
			<view class="">
				<view>
				 <button @tap="upload">上传</button>
				        <image-cropper :src="tempFilePath" @confirm="confirm" @cancel="cancel"></image-cropper>
				        <image :src="cropFilePath" mode="aspectFit" style="width: 100%;"></image>
				 </view>
			</view>
		</view>
	</view>
</template>

<script>
	import UploadCom from "@/pages/upload/components/uploadCom.vue"
	import ImageCropper from "@/components/invinbg-image-cropper/invinbg-image-cropper.vue";
	
export default {
	components:{
		UploadCom,
		ImageCropper
	},
	data() {
		return {
			wdclData: [
				{
					title: '公安部出示的无犯罪记录材料', // 当前部分的标题
					showIcon: true,
					count: 4,
					images: [
						{
							src: '/static/myBid/image@2x.png',
							icon: 'success'
						},
						{
							src: '/static/myBid/image@2x.png',
							icon: 'delete'
						},
						{
							src: '/static/myBid/image@2x.png',
							icon: 'delete'
						}
					]
				},
				{
					title: '公安部出示的无犯罪记录材料', // 当前部分的标题
					showIcon: true,
					images: [
						{
							src: '/static/myBid/image@2x.png',
							icon: 'fail'
						},
						{
							src: '/static/myBid/image@2x.png'
						}
					]
				}
			],
			id:'',
			 tempFilePath: '',
			  cropFilePath: '',
		};
	},
	watch:{
		
	},
	created() {
		this.wdclData.forEach(item=>{
			item.le=item.images.length-1;
			
		})
		console.log(this.wdclData)
	},
	methods:{
		addimg(item,index){
			uni.chooseImage({
					count: 1,
					sizeType: ['original'],
					sourceType: ['camera', 'album'],
				}).then(res => {
					if (!res[0]) {
						res[1].tempFilePaths.forEach(i => {
							item.images.push({
								src: i
							});
							
						});
						console.log(index)
						console.log(item.images.length-1)
						//this.$set(item,'le',item.images.length-1)
						//this.id = item.images.length-1;
						this.$nextTick(()=>{
							this.id=item.images.length-1
						})
						this.$forceUpdate()
						console.log(this.wdclData)
						
					};
					
				
			});

		},
		
		//裁剪
		upload() {
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['camera', 'album'],
				success: (res) => {
					this.tempFilePath = res.tempFilePaths.shift()
				}
			});
		},
		confirm(e) {
			this.tempFilePath = ''
			this.cropFilePath = e.detail.tempFilePath
		},
		cancel() {
			console.log('canceled')
		}

	}
		
};
</script>

<style lang="less" scoped>
page{
	background-color: #f2f4f6;
}
.upload_box{
	width: 750rpx;

}	
.myTransaction-header {
	padding: 30rpx;

	.myTransaction-header-title {
		text-align: center;

		.header-title-pointer {
			color: #ff5d5d;
		}
	}

	.myTransaction-header-content {
		font-size: 24rpx;
		color: #707070;
	}
}
.upload_content{
	background-color: #FFFFFF;
	border-radius: 10rpx;
	margin: 0 15rpx;
	.upload_title{
		height: 80rpx;
		line-height: 80rpx;
		border-bottom: 1rpx solid #d9d9d9;
		padding: 10rpx 15rpx;
	}
	
}
.upload_info{
	.upload_item{
		padding: 10rpx 15rpx;
		.upload_item_title{
			
		}
		.upload_item_img{
			width: calc(100vw - 25px);
			padding: 10rpx 0rpx;
			display: flex;
			white-space: nowrap;
			
		}
	}
}
.img_box{
	display: inline-block;	
}
.img_box_add{
	display: inline-block;	
	width: 160rpx;

}
</style>
