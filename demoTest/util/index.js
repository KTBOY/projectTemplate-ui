/*
 * JS 时间格式化
 * type 时间格式（yyyy-mm-dd hh:ii:ss / mm-dd / hh:ii / yyyy-mm）可自定义
 * date 毫秒时间戳（1554954127000）
 * 使用：timeFormat('yyyy-mm-dd hh:ii:ss',1554954127000)
 * 获取
 * var d = new Date('2010-5').getTime();
 * let month =timeFormat('yyyy-mm', d);//时间戳转换年月
 * console.log(month)
 * month=new Date(month).getTime();
 * console.log(timeFormat('yyyy-mm', month))
 * 说明：紧支持毫秒级时间戳，传统秒级 Unix 时间戳需要乘以 1000 转换为毫秒
 */
export function timeFormat(type, date) {
	var date = new Date(date);
	var o = {
		"m+": date.getMonth() + 1, //月份   
		"d+": date.getDate(), //日   
		"h+": date.getHours(), //小时   
		"i+": date.getMinutes(), //分   
		"s+": date.getSeconds(), //秒   
	};
	if (/(y+)/.test(type)) {
		type = type.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	};
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(type)) {
			type = type.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k])
				.length)));
		};
	}
	return type;
}
//js方式获取两个日期间的所有日期(天数)、所有月份、所有年份
//1.获取所有的天数：
export function getDateBetween(start, end) {
	var result = [];
	//使用传入参数的时间
	var startTime = new Date(start);
	var endTime = new Date(end);
	while (endTime - startTime >= 0) {
		let year = startTime.getFullYear();
		let month = startTime.getMonth();
		month = month < 9 ? '0' + (month + 1) : month + 1;
		let day = startTime.getDate().toString().length == 1 ? "0" + startTime.getDate() : startTime.getDate();
		//加入数组
		result.push(year + "-" + month + "-" + day);
		//更新日期
		startTime.setDate(startTime.getDate() + 1);
	}
	return result;
}
// 获取两个日期的之间的所有年月
export function getMonthBetween(start, end) {
	//初始化数组
	var result = [];
	//切割起始年月
	var s = start.split("-");
	//切割结束年月
	var e = end.split("-");
	//获取时间对象
	var min = new Date();
	var max = new Date();
	//设置起始时间
	min.setFullYear(s[0], s[1]);
	//设置结束时间
	max.setFullYear(e[0], e[1]);

	//复制一份起始时间对象
	var curr = min;
	//定义字符串
	var str = "";
	//起始时间在结束时间之前
	while (curr <= max) {
		//获取此时间的月份
		var month = curr.getMonth();
		//如果月份为0，也就是代表12月份
		if (month === 0) {
			str = (curr.getFullYear() - 1) + "-" + 12;
		} else { //正常月份
			str = curr.getFullYear() + "-" + (month < 10 ? ("0" + month) : month);
		}
		//将此年月加入数组
		result.push(str);
		//更新此时间月份
		curr.setMonth(month + 1);
	}
	return result;
}


//获取所有的年份：
export function getYearBetween(start, end) {
	var result = [];
	//使用传入参数的时间
	var startTime = new Date(start);
	var endTime = new Date(end);
	while (endTime - startTime >= 0) {
		//获取年份
		let year = startTime.getFullYear();
		//加入数组
		result.push(year);
		//更新日期
		startTime.setFullYear(startTime.getFullYear() + 1);
	}
	return result;
}



//根据某年某月计算出一个月的年月日
export function getDaysInMonth(year, month) {
  const daysOfMonth = [];
  month = parseInt(month, 10);
  const lastDayOfMonth = new Date(year, month, 0).getDate();
  for (let i = 1; i <= lastDayOfMonth; i++) {
    if (i < 10) {
      daysOfMonth.push(year+"-"+month+"-"+"0" + i);
    } else {
      daysOfMonth.push(year+"-"+month+"-"+i);
    }
  }
  return daysOfMonth;
}