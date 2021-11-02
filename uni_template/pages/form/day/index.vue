<!--
 * @Author: zlc
 * @Date: 2021-11-02 10:58:34
 * @LastEditTime: 2021-11-02 14:46:28
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \git项目\project-template\uni_template\pages\form\day\index.vue
-->
<template>
<view>
    <button @click="dateUp">上一个月</button>
    <button  @click="dateDown">下一个月</button>
</view>
</template>

<script>
import {defineComponent, ref,onMounted } from "vue";
export default {
    setup(props) {
        const calendarData=ref([{label:"日"},{label: "一"}, {label:"二"},{label: "三"},{label: "四"},{label: "五"},{label: "六"}]) //日历循环渲染数据
        const calendarDataTime=ref([]);//不带星期的
        const year=ref(0)     //当前日期年
        const month=ref(0)    //当前日期月数
        const date=ref(0)     //当前日期号数
        const day=ref(-1)     //当前星期几



        

        getNow()
        getCalendarDate()
        setSeventDay()
        function getNow() {
            let now = new Date()
            year.value =+now.getFullYear()
            month.value =+now.getMonth() + 1
            date.value =+now.getDate()
            day.value =+now.getDay()
            let firstTime = +new Date(year.value,month.value-1,1,0,0,0)
            console.log(firstTime);
        }
        
        /**
         * @description: 获取每月天数
         * @param {*} month
         * @return {*}
         */        
        function monthDay(month){
            if([1,3,5,7,8,10,12].includes(month)){
                return 31
            }else if([4,6,9,11].includes(month)){
                return 30
            }else if(month==2){
                if((year.value%4==0&&year.value%100!=0)||year.value%400==0){
                    return 29
                }else{
                    return 28
                }
            }
        }
        function getCalendarDate(){
             // 获取当前月份一号星期几
             let firstDay = new Date(year.value + "-" + month.value + "-" + "01").getDay();
             let num=Number.parseInt(firstDay);
             //获取当前月份的天数
             let nowDays=monthDay(month.value)
             //获取下一月的天数
             let lastMonth=month.value-1>0?month.value-1:12;
             let lastDays=monthDay(lastMonth)
            console.log(num,firstDay,nowDays,lastDays);
            for (let index = 0; index < num; index++) {
                 calendarData.value.push({label:lastDays-num+index+1}) 
                 calendarDataTime.value.push({label:lastDays-num+index+1})
            }
            
           for (let index = 0; index < nowDays; index++) {

                 calendarData.value.push({label:index+1})
                 calendarDataTime.value.push({label:index+1})
            }
            /* 
            1.一个篇幅42个格子（7x6=42）,如果还没能整除于0，表示还有空格子，然后7-余数=剩下格子
            2.一个篇幅35个格子（7x5=35）,如果还没能整除于0，表示还有空格子，然后5-余数=剩下格子
            */
            if(calendarData.value.length%7!=0){
                let surplusDay=7-(calendarData.value.length%7)
                for (let index = 0; index < surplusDay; index++) {
                     calendarData.value.push({label:index+1})
                }
            }
            if(calendarDataTime.value.length%5!=0){
                let surplusDay=5-(calendarDataTime.value.length%5)
                for (let index = 0; index < surplusDay; index++) {
                     calendarDataTime.value.push({label:index+1})
                }
            }
            
             console.log(num,firstDay,nowDays,lastDays,month.value,year.value);
             console.log(calendarData.value);
             console.log(calendarDataTime.value);
        }

        function setSeventDay(){
            let result=[]
            for (let index = 0; index < calendarDataTime.value.length; index+=7) {
                console.log(index);
                
                result.push(calendarDataTime.value.slice(index,index+7))
                console.log(result);
                
            }
            console.log(result);
        }

        //上一个月
        function dateUp(){
            month.value--;
            if(month.value<=0){
                year.value--;
                month.value=12
            }
             getCalendarDate()

        }
        //下一个月
        function dateDown(){
             month.value++;
            if(month.value>12){
                year.value++;
                month.value=1
            }
             getCalendarDate()
        }
        return{
            calendarData,
            year,
            month,
            date,
            day,
            dateUp,
            dateDown
        }
   }
}
</script>

<style>
</style>
