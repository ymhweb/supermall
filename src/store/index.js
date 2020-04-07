/*
 * @Author: your name
 * @Date: 2019-12-19 22:54:20
 * @LastEditTime: 2020-03-25 01:00:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
    cartList: []
}
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store