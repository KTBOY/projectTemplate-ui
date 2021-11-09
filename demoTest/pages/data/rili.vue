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
		<button @click="dateDown">下一个月</button>

		<view class="content"><uni-calendar></uni-calendar></view>
	</view>
</template>

<script>
import uniCalendar from '@/components/c-calendar/c-calendar.vue';
import calendarChange from '@/components/c-calendar/a.js';
export default {
	components: {
		uniCalendar
	},
	data() {
		return {
			calendarData: [{ label: '日' }, { label: '一' }, { label: '二' }, { label: '三' }, { label: '四' }, { label: '五' }, { label: '六' }],
			calendarDataTime: [], //日历补充数据
			calendarDataTimeNew: [], //日历不补充数据
			year: 0,
			month: 0,
			date: 0,
			day: -1,
			newObj: {}
		};
	},
	onLoad() {
		this.getNow();
		//this.getCalendarDate();
		this.setSeventDay();
		this.setAllData();
	},
	methods: {
		getNow() {
			let now = new Date();
			this.year = +now.getFullYear();
			this.month = +now.getMonth() + 1;
			this.date = +now.getDate();

			let firstTime = +new Date(this.year, this.month - 1, 1, 0, 0, 0);
			console.log(firstTime);
		},
		monthDay(month) {
			if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
				return 31;
			} else if ([4, 6, 9, 11].includes(month)) {
				return 30;
			} else if (month == 2) {
				if ((this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0) {
					return 29;
				} else {
					return 28;
				}
			}
		},

		// getCalendarDate() {
		// 	// 获取上一月天数
		// 	let firstDay = new Date(this.year + '-' + this.month + '-' + '01').getDay();
		// 	let num = Number.parseInt(firstDay);
		// 	//获取当前月份的天数
		// 	let nowDays = this.monthDay(this.month);
		// 	//获取上一月月份
		// 	let lastMonth = this.month - 1 > 0 ? this.month - 1 : 12;
		// 	//获取上一月天数
		// 	let lastDays = this.monthDay(lastMonth);
		// 	//补上月
		// 	for (let index = 0; index < num; index++) {
		// 		let obj = {
		// 			label: lastDays - num + index + 1,
		// 			labelKo: ' ',
		// 			isToDay: `${this.year}年${lastMonth}月${lastDays - num + index + 1}日`,
		// 			isToDayReg: `${this.year}/${lastMonth}/${lastDays - num + index + 1}`,
		// 			calendarChange:calendarChange.solar2lunar(this.year,lastMonth,lastDays - num + index + 1)

		// 		};
		// 		this.calendarData.push({ label: lastDays - num + index + 1 });
		// 		this.calendarDataTime.push({ label: lastDays - num + index + 1 }); //补上月和下月
		// 		this.calendarDataTimeNew.push(obj);
		// 	}
		// 	let newObj={}
		// 	//补当月
		// 		for (let index = 0; index < nowDays; index++) {
		// 			let obj={}
		// 			let allDataObj = {
		// 				isToDay: `${this.year}年${this.month}月${index + 1}日`,
		// 				isToDayReg: `${this.year}/${this.month}/${index + 1}`,
		// 				calendarChange:calendarChange.solar2lunar(this.year,this.month,this.date),
		// 				label:index + 1,

		// 			};
		// 			obj.labelData=`${this.year}年${this.month}月`
		// 			if(newObj[obj.labelData]){
		// 				newObj[obj.labelData].allData.push(allDataObj)
		// 				newObj[obj.labelData].data.push(allDataObj)
		// 			}else{
		// 				newObj[obj.labelData]={allData:[allDataObj]}
		// 				newObj[obj.labelData].data=[]
		// 			}

		// 			this.calendarData.push({ label: index + 1 });
		// 			this.calendarDataTime.push({ label: index + 1 });
		// 			//this.calendarDataTimeNew.push(obj);
		// 		}

		// 	console.log(newObj)
		// 	console.log('========', this.calendarDataTimeNew);
		// 	/*
		//     1.一个篇幅42个格子（7x6=42）,如果还没能整除于0，表示还有空格子，然后7-余数=剩下格子
		//     2.一个篇幅35个格子（7x5=35）,如果还没能整除于0，表示还有空格子，然后5-余数=剩下格子
		//     */
		// 	if (this.calendarData.length % 7 != 0) {
		// 		let surplusDay = 7 - (this.calendarData.length % 7);
		// 		for (let index = 0; index < surplusDay; index++) {
		// 			this.calendarData.push({ label: index + 1 });
		// 		}
		// 	}
		// 	if (this.calendarDataTime.length % 5 != 0) {
		// 		let surplusDay = 5 - (this.calendarDataTime.length % 5);
		// 		for (let index = 0; index < surplusDay; index++) {
		// 			this.calendarDataTime.push({ label: index + 1 });
		// 			this.calendarDataTimeNew.push({ label: ' '});
		// 		}
		// 	}

		// 	// console.log(num,firstDay,nowDays,lastDays,this.month,this.year);
		// 	// console.log(this.calendarData);
		// 	// console.log(this.calendarDataTime);
		// },

		//遍历当前月份所有数据
		allData() {
			let firstDay = new Date(this.year + '-' + this.month + '-' + '01').getDay();
			let num = Number.parseInt(firstDay);
			//获取当前月份的天数
			let nowDays = this.monthDay(this.month);
			//获取上一月月份
			let lastMonth = this.month - 1 > 0 ? this.month - 1 : 12;
			let year = this.month - 1 > 0 ? this.year : this.year - 1;
			console.log(lastMonth);
			//获取上一月天数
			let lastDays = this.monthDay(lastMonth);
			let obj = {};
			let allDataObj={}
			obj.labelData = `${this.year}年${this.month}月`;
			for (let index = 0; index < num; index++) {
				allDataObj = {
					label: lastDays - num + index + 1,
					labelKo: ' ',
					isToDay: `${year}年${lastMonth}月${lastDays - num + index + 1}日`,
					isToDayReg: `${year}/${lastMonth}/${lastDays - num + index + 1}`,
					calendarChange: calendarChange.solar2lunar(year, lastMonth, lastDays - num + index + 1)
				};
				if (this.newObj[obj.labelData]) {
					this.newObj[obj.labelData].allData.push(allDataObj);
					this.newObj[obj.labelData].data = [];
				} else {
					this.newObj[obj.labelData] = { allData: [allDataObj] };
					this.newObj[obj.labelData].data = [];
				}
			}
			
			
			//循环当月所有天数
			for (let index = 0; index < nowDays; index++) {
				allDataObj = {
					isToDay: `${this.year}年${this.month}月${index + 1}日`,
					isToDayReg: `${this.year}/${this.month}/${index + 1}`,
					calendarChange: calendarChange.solar2lunar(this.year, this.month, index + 1),
					label: index + 1
				};
				if (this.newObj[obj.labelData]) {
					this.newObj[obj.labelData].allData.push(allDataObj);
					this.newObj[obj.labelData].data.push(allDataObj);
				}
			}
			
			
			//遍历下个月天数
			if (this.newObj[obj.labelData].allData.length % 7 != 0) {
				let surplusDay = 7 - (this.calendarDataTime.length % 7);
				for (let index = 0; index < surplusDay; index++) {
					allDataObj = {
						isToDay: `${this.year}年${this.month + 1}月${index + 1}日`,
						isToDayReg: `${this.year}/${this.month + 1}/${index + 1}`,
						calendarChange: calendarChange.solar2lunar(this.year, this.month + 1, index + 1),
						label: index + 1,
						labelKo: ' '
					};
					if (this.newObj[obj.labelData]) {
						this.newObj[obj.labelData].allData.push(allDataObj);
					}
				}
			}
			
		},

		getCalendarDate() {
			//this.onData();
			this.allData();
			//this.lastData();
			console.log(this.newObj);
		},
		//截取每个星期的7天
		setSeventDay() {
			let result = [];
			for (let index = 0; index < this.calendarDataTime.length; index += 7) {
				result.push(this.calendarDataTime.slice(index, index + 7));
			}
		},

		setAllData() {
			for (var i = 1; i < 3; i++) {
				this.month = i;
				if (this.month <= 0) {
					this.month = i;
				}
				this.getCalendarDate();
			}

			
		},
		//上一个月
		dateUp() {
			this.month--;
			if (this.month <= 0) {
				this.year--;
				this.month = 12;
			}
			this.calendarDataTimeNew = [];
			this.getCalendarDate();
		},
		//下一个月
		dateDown() {
			this.month++;
			if (this.month > 12) {
				this.year++;
				this.month = 1;
			}
			
			
			this.getCalendarDate();
		}
	}
};
</script>

<style></style>
