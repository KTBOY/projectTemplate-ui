/*
 * @Author: zlc
 * @Date: 2022-01-18 17:13:12
 * @LastEditTime: 2022-01-20 16:06:49
 * @LastEditors: zlc
 * @Description: uniapp-api二次封装
 * @FilePath: \git项目\project-template\uni_template\utils\uniApi.js
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
