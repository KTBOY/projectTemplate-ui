<!--
 * @Author: zlc
 * @Date: 2021-10-13 17:07:47
 * @LastEditTime: 2021-10-29 17:08:57
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \git项目\project-template\uni_template\App.vue
-->
<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
/* 扩展图标库 */
@import '@/static/iconfont.css';


page{

	background: #f7f8fa;
	
}




/*每个页面公共css */
* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}


</style>
