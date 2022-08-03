/*
 * @Author: zlc
 * @Date: 2022-08-03 09:40:46
 * @LastEditTime: 2022-08-03 09:40:55
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \project-template\uni_template\utils\Function.js
 */

export const debounce=(func, wait = 200)=> {
    let timeout = null
    return function () {
      let context = this
      let args = arguments
      if (timeout) clearTimeout(timeout)
      timeout = setTimeout(() => {
        func.apply(context, args)
      }, wait)
    }
  }