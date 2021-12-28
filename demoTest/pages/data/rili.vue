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
import { timeFormat, getMonthBetween, getDaysInMonth } from '@/util/index.js';
export default {
	components: {
		uniCalendar
	},
	data() {
		return {
			calendarData: [{ label: '日' }, { label: '一' }, { label: '二' }, { label: '三' }, { label: '四' }, { label: '五' }, { label: '六' }],
			calendarDataTime: [], //日历补充数据
			calendarDataTimeNew: [], //日历不补充数据
			calendarDataTimeSix: [], //日历当前月和前面5个月
			year: 0,
			month: 0,
			date: 0,
			day: -1,
			newObj: {}
		};
	},
	onLoad() {
		this.getNow();
		this.getCalendarDate();
		//this.setSeventDay();
		//this.setAllData();
		this.startRili();
		//console.log(getMonthBetween('2020-12','2021-5'));//获取两个日期之间月份数
		// console.log(this.GetPreMonthDay('2021-5',6));//获取两个当前月份的前5个月月份数
		//console.log(this.aaa());//获取月份
	},
	methods: {
		startRili() {
			//1.获取当前日期
			let now = new Date().getTime();
			let month = timeFormat('mm', now); //当前月份
			let endData = timeFormat('yyyy-mm-dd', now); //年月日
			let nowDataYearAndMonth = timeFormat('yyyy-mm', now); //当前年月

			//2.获取开始日期月份
			let startData = this.GetPreMonthDay(nowDataYearAndMonth, 6); //5个月前的月份

			//获取开始日期到结束日期的所有月份
			let allBetween = getMonthBetween(startData, endData);
			allBetween.forEach((item, index) => {
				let obj = {
					dataListArray: [],
					dataListObj:[]
				};
				obj.letter = item;
				obj.timestamp=new Date(item).getTime()
				obj.dataListArray.push(getDaysInMonth(item.split('-')[0], item.split('-')[1]));
				obj.dataListArray[0].forEach(item => {
					let childerObj={
						name:item,
						type:'我是类型字段',
						bgColor:'我是日期背景色',
						isSingIn:'false/true,是否已经签到'
					}
					obj.dataListObj.push(childerObj)
				});
				
				this.calendarDataTimeSix.push(obj);
			});
			console.log(this.calendarDataTimeSix);
		},

		aaa() {
			var d = new Date('2010-5').getTime();
			let month = timeFormat('yyyy-mm', d); //当前月份
			console.log(month);
			month = new Date(month).getTime();
			console.log(timeFormat('yyyy-mm', month));
			//console.log(d.getFullYear() + " " + (d.getMonth() + 1) + " " + d.getDate());
			return false;
		},

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
			let allDataObj = {};
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

		GetPreMonthDay(date, monthNum) {
			var dateArr = date.split('-');
			var year = dateArr[0]; //获取当前日期的年份
			var month = dateArr[1]; //获取当前日期的月份
			var day = dateArr[2]; //获取当前日期的日
			var days = new Date(year, month, 0);
			days = days.getDate(); //获取当前日期中月的天数
			var year2 = year;
			var month2 = parseInt(month) - monthNum;
			if (month2 <= 0) {
				var absM = Math.abs(month2);
				year2 = parseInt(year2) - Math.ceil(absM / 12 == 0 ? 1 : parseInt(absM) / 12);
				month2 = 12 - (absM % 12);
			}
			var day2 = day;
			var days2 = new Date(year2, month2, 0);
			days2 = days2.getDate();
			if (day2 > days2) {
				day2 = days2;
			}
			if (month2 < 10) {
				month2 = '0' + month2;
			}

			// var t2 = year2 + '-' + month2 + '-' + day2;
			var t2 = year2 + '-' + month2;
			return t2;
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
