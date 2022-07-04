/*
 * @Author: 驿米
 * @Date: 2021-11-16 11:07:07
 * @LastEditTime: 2021-12-28 10:58:04
 * @LastEditors: zlc
 * @Description: 日期工具库
 * @FilePath: \git项目c:\Users\YIMI\Desktop\项目\11-8\uniapp\utils\dateLibrary.js
 */
/**
 * @description: JS 时间格式化
 * @param {String} type（yyyy-mm-dd hh:ii:ss / mm-dd / hh:ii / yyyy-mm// yyyy // mm // dd）可自定义
 * @param {data} date 毫秒时间戳（1554954127000）
 * 使用：timeFormat('yyyy-mm-dd hh:ii:ss',1554954127000)
 * @return {any}
 */
export function timeFormat(type, date) {
  var date = new Date(date)
  var o = {
    'm+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'i+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
  }
  if (/(y+)/.test(type)) {
    type = type.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(type)) {
      type = type.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }
  return type
}
/**
 * @description: 获取某月内的当前月的所有日期
 * @param {String} year 年份2021
 * @param {String} month 月份05
 * @return {String[]}
 */
export function getDaysInMonth(year, month) {
  const daysOfMonth = []
  month = parseInt(month, 10)
  month = month >= 10 ? month : `0${month}`
  const lastDayOfMonth = new Date(year, month, 0).getDate()
  for (let i = 1; i <= lastDayOfMonth; i++) {
    if (i < 10) {
      daysOfMonth.push(year + '-' + month + '-' + '0' + i)
    } else {
      daysOfMonth.push(year + '-' + month + '-' + i)
    }
  }
  return daysOfMonth
}
/**
 * @description: 获取某年月日的当前周的所有日期
 * @param {String} date
 * @return {*}
 */
export function getDaysInWeek(date) {
  let currentDate = new Date(date)
  let timesStamp = currentDate.getTime()
  let currenDay = currentDate.getDay()

  let dates = []

  for (var i = 0; i < 7; i++) {
    dates.push(new Date(timesStamp + 24 * 60 * 60 * 1000 * (i - ((currenDay + 6) % 7))).toLocaleDateString().replace(/\//g, '-'))
  }

  return dates
}
/**
 * @description: 获取两个日期的之间的所有年月
 * @param {String} start 开始日期 2020-12
 * @param {String} end 结束日期 2021-5
 * 不支持从大到小日期
 * console.log(getMonthBetween('2020-12','2021-5'));
 * @return {String[]}
 */
export function getMonthBetween(start, end) {
  //初始化数组
  var result = []
  //切割起始年月
  var s = start.split('-')
  //切割结束年月
  var e = end.split('-')
  //获取时间对象
  var min = new Date()
  var max = new Date()
  //设置起始时间
  min.setFullYear(s[0], s[1])
  //设置结束时间
  max.setFullYear(e[0], e[1])

  //复制一份起始时间对象
  var curr = min
  //定义字符串
  var str = ''
  //起始时间在结束时间之前
  while (curr <= max) {
    //获取此时间的月份
    var month = curr.getMonth()
    //如果月份为0，也就是代表12月份
    if (month === 0) {
      str = curr.getFullYear() - 1 + '-' + 12
    } else {
      //正常月份
      str = curr.getFullYear() + '-' + (month < 10 ? '0' + month : month)
    }
    //将此年月加入数组
    result.push(str)
    //更新此时间月份
    curr.setMonth(month + 1)
  }
  return result
}

/**
 * @description:获取某个月份的前x个月
 * @param {*} date 当前月
 * @param {*} monthNum 获取当前月前几个月
 * getPreMonthDay(xxxx年xx月, 5) //5个月前的月份
 * @return {*}
 */
export function getPreMonthDay(date, monthNum) {
  var dateArr = date.split('-')
  var year = dateArr[0] //获取当前日期的年份
  var month = dateArr[1] //获取当前日期的月份
  var day = dateArr[2] //获取当前日期的日
  var days = new Date(year, month, 0)
  days = days.getDate() //获取当前日期中月的天数
  var year2 = year
  var month2 = parseInt(month) - monthNum
  if (month2 <= 0) {
    var absM = Math.abs(month2)
    year2 = parseInt(year2) - Math.ceil(absM / 12 == 0 ? 1 : parseInt(absM) / 12)
    month2 = 12 - (absM % 12)
  }
  var day2 = day
  var days2 = new Date(year2, month2, 0)
  days2 = days2.getDate()
  if (day2 > days2) {
    day2 = days2
  }
  if (month2 < 10) {
    month2 = '0' + month2
  }

  // var t2 = year2 + '-' + month2 + '-' + day2;
  var t2 = year2 + '-' + month2
  return t2
}

/**
 * @description:返回两个日期之间的差异 (以天为值)
 * @param {*} dateInitial
 * @param {*} dateFinal
 * @return {*}
 */
export const getDaysDiffBetweenDates = (dateInitial, dateFinal) => (dateFinal - dateInitial) / (1000 * 3600 * 24)
