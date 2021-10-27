<!--
 * @Author: zlc
 * @Date: 2021-10-27 16:33:51
 * @LastEditTime: 2021-10-27 19:51:46
 * @LastEditors: zlc
 * @Description: picker选择器
 * @FilePath: \invitationf:\编辑器\舒克前端\git项目\project-template\uni_template\pages\form\picker\index.vue
-->
<template>
    <view class="picker">
        <button type="button" @click="fn">打开</button>
        <pickerBasicUsage v-model="show">
            
        </pickerBasicUsage>
    </view>
</template>
<script>
 import pickerBasicUsage from "@/components/form/picker/picker-basic-usage/index.vue"
import {
  ref,
  reactive,
  toRefs,
  onMounted,
  useAttrs,
  getCurrentInstance,

 
} from "vue";
export default{
    components:{
        pickerBasicUsage
    },
    setup() {
        const show=ref(false)
        function fn(){
            console.log("123");
            show.value=!show.value
           // forceUpdate()
        }   
        return{
             show,
             fn
        }
    },
    
}
</script>


<style lang="scss" scoped>
//$uni-color-primary
.picker{
    button{
        z-index: 1;
    }
}
</style>