/*
 * @Author: zlc
 * @Date: 2021-10-28 16:16:21
 * @LastEditTime: 2021-10-28 16:24:34
 * @LastEditors: zlc
 * @Description: 常用工具库
 * @FilePath: \invitationf:\编辑器\舒克前端\git项目\project-template\uni_template\utils\index.js
 */

/**
 * @description: 类型推断
 * @param {any} value
 * @return {*}
 */
export const getType=(value)=>{
    let type=typeof value
    if( type !=="object"){
        return type
    }

    return Object.prototype.toString.call(value).replace(/^\[Object(\S+)\]$/,'$1')
}