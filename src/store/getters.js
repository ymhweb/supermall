/*
 * @Author: your name
 * @Date: 2020-03-25 01:00:04
 * @LastEditTime: 2020-03-25 01:50:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\store\getters.js
 */
export default{
    cartLength(state){
        return state.cartList.length
    },
    cartList(state){
        return state.cartList
    }
}