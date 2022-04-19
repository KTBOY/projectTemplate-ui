<!--
 * @Author: zlc
 * @Date: 2021-10-13 17:07:47
 * @LastEditTime: 2022-04-19 22:49:45
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \gogogogo\project-template\uni_template\App.vue
-->
<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style lang="scss">
/* 扩展图标库 */
@import "@/static/iconfont.css";

page {
  background: #f7f8fa;
  --popover-white-background-color--: #2878ff;
  --page-padding--: 15px;
}
.demo{
  padding:var(--page-padding--);
}
.demo-title {
  margin: 15rpx 0;
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
