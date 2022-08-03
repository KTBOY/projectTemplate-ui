/*
 * @Author: zlc
 * @Date: 2022-01-18 17:13:12
 * @LastEditTime: 2022-08-02 16:50:03
 * @LastEditors: zlc
 * @Description: uniapp-api二次封装
 * @FilePath: \project-template\uni_template\utils\uniApi.js
 */

/**
 * @description: 获取Dom节点
 * @param {String} val .class
 * @return {*}
 */
export const getSystemInfoCalendarSelectorQuery = (val) => {
  return new Promise((resolve, reject) => {
    uni.getSystemInfo({
      success: () => {
        let info = uni.createSelectorQuery().select(val)
        info
          .boundingClientRect((data) => {
            resolve(data)
          })
          .exec()
      },
    })
  })
}
/**
 * @description: 提示
 * @param {String}title
 * @param {Object}options
 * @return {*}
 */
export const showToast = (title, options) => {
  let _options = Object.assign(
    {
      mask: false,
      icon: 'none',
      duration: 2000,
      position: 'center',
    },
    options
  )
  uni.showToast({
    title,
    ..._options,
  })
}
/**
 * @description: 加载
 * @param {Object}options
 * @return {*}
 */
export function showLoading(options) {
  let _options = Object.assign(
    {
      mask: true,
      title: '加载中',
    },
    options
  )
  uni.showLoading({
    ..._options,
  })
}

/**
 * @description: 获取屏幕信息
 * @param {String} val .class
 * @return {*}
 */
export const getSystemInfo = (val) => {
  return new Promise((resolve, reject) => {
    uni.getSystemInfo({
      success: (res) => {
        resolve(res)
      },
    })
  })
}
