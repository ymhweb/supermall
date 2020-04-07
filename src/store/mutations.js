/*
 * @Author: your name
 * @Date: 2020-03-25 00:14:37
 * @LastEditTime: 2020-03-26 00:42:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\store\mutations.js
 */
import {ADD_COUNTER,ADD_TO_CART} from './mutation-type'

export default{
    [ADD_COUNTER](state,payLoad){
        payLoad.count++
    },
    [ADD_TO_CART](state,payLoad){
        payLoad.checked = true
        state.cartList.push(payLoad)
    }
}