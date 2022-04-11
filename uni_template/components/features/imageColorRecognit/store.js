import { reactive } from 'vue'

//初始化store仓库
export const state = reactive({
    selectActive: {}, //选中的对象

})
export const mutations = {
    /**
     * @description: 选中的海报对象
     * @param {Object} payload
     * @return {*}
     */
    setSelectActive(payload) {

        state.selectActive=payload
    }


}