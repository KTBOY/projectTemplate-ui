/*
 * @Author: zlc
 * @Date: 2021-10-29 19:33:11
 * @LastEditTime: 2021-10-29 19:33:12
 * @LastEditors: zlc
 * @Description: 
 * @FilePath: \git项目\project-template\uni_template\shim-vue.d.ts
 */
declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }
  