<template>
	<!--
	本页面模板教程：https://ext.dcloud.net.cn/plugin?id=2672
	uni-list 文档：https://ext.dcloud.net.cn/plugin?id=24
	uniCloud 文档：https://uniapp.dcloud.io/uniCloud/README
	unicloud-db 组件文档：https://uniapp.dcloud.io/uniCloud/unicloud-db
	DB Schema 规范：https://uniapp.dcloud.net.cn/uniCloud/schema
	 -->
	<view class="list">
		<!-- 刷新页面后的顶部提示框 -->
		<!-- 当前弹出内容没有实际逻辑 ，可根据当前业务修改弹出提示 -->
	<!-- 	<view class="tips" :class="{ 'tips-ani': tipShow }">为您更新了10条最新新闻动态</view> -->
	
			<uni-list>
				<!-- to 属性携带参数跳转详情页面，当前只为参考 -->
				<uni-list-item :border="true" class="uni-list-item--waterfall" title="自定义商品列表" v-for="item in data" :key="item._id" :to="'/pages/detail/detail?id='+item._id+'&title='+item.name">
					<!-- 通过header插槽定义列表左侧图片 -->
					<template v-slot:header>
						<view class="uni-thumb shop-picture">
							<image :src="item.goods_thumb" mode="aspectFill"></image>
						</view>
					</template>
					<!-- 通过body插槽定义商品布局 -->
					<view slot="body" class="shop">
						<view class="safsaf">
							safsa
						</view>
						<view class="">
							safsa
						</view>
					</view>
				</uni-list-item>
			</uni-list>
			<!-- 通过 loadMore 组件实现上拉加载效果，如需自定义显示内容，可参考：https://ext.dcloud.net.cn/plugin?id=29 -->
			<uni-load-more v-if="loading || options.status === 'noMore' " :status="options.status" />
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				// 数据表名
				collection: 'opendb-mall-goods',
				// 查询字段，多个字段用 , 分割
				field: 'goods_thumb,name,goods_tip,tag,goods_price,comment_count,month_sell_count,shop_name',
				formData: {
					status: 'loading', // 加载状态
				},
				tipShow: false ,// 是否显示顶部提示框
				data:[{
					goods_thumb:"1",
					name:"2"
				},{
					goods_thumb:"1",
					name:"2"
				},
				],
				loading:false
			};
		},
		onLoad() {},
		methods: {
			
			load(data, ended) {
				if (ended) {
					this.formData.status = 'noMore'
				}
			}
		},
		/**
		 * 下拉刷新回调函数
		 */
		onPullDownRefresh() {
			
		},
		/**
		 * 上拉加载回调函数
		 */
		onReachBottom() {
			
		}
	};
</script>

<style lang="scss">
	@import '@/common/uni-ui.scss';

	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}

	.tips {
		color: #67c23a;
		font-size: 14px;
		line-height: 40px;
		text-align: center;
		background-color: #f0f9eb;
		height: 0;
		opacity: 0;
		transform: translateY(-100%);
		transition: all 0.3s;
	}

	.tips-ani {
		transform: translateY(0);
		height: 40px;
		opacity: 1;
	}

	.shop {
		flex: 1;
		display: flex;

		justify-content: space-between;
	}

	.shop-picture {
		width: 110px;
		height: 110px;
	}

	.shop-picture-column {
		width: 100%;
		height: 170px;
		margin-bottom: 10px;
	}

	.shop-price {
		margin-top: 5px;
		font-size: 12px;
		color: #ff5a5f;
	}

	.shop-price-text {
		font-size: 16px;
	}

	.hot-tag {
		background: #ff5a5f;
		border: none;
		color: #fff;
	}

	.button-box {
		height: 30px;
		line-height: 30px;
		font-size: 12px;
		background: #007AFF;
		color: #fff;
	}

	.uni-link {
		flex-shrink: 0;
	}

	.ellipsis {
		display: flex;
		overflow: hidden;
	}

	.uni-ellipsis-1 {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.uni-ellipsis-2 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}


	// 默认加入 scoped ，所以外面加一层提升权重
	.list {
		.uni-list--waterfall {

			/* #ifndef H5 || APP-VUE */
			// 小程序 编译后会多一层标签，而其他平台没有，所以需要特殊处理一下
			/deep/ .uni-list {
				/* #endif */
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				padding: 5px;
				box-sizing: border-box;

				/* #ifdef H5 || APP-VUE */
				// h5 和 app-vue 使用深度选择器，因为默认使用了 scoped ，所以样式会无法穿透
				/deep/
				/* #endif */
				.uni-list-item--waterfall {
					width: 50%;
					box-sizing: border-box;

					.uni-list-item__container {
						padding: 5px;
						flex-direction: column;
					}
				}

				/* #ifndef H5 || APP-VUE */
			}

			/* #endif */
		}
	}
</style>
