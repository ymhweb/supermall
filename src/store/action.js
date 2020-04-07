/*
 * @Author: your name
 * @Date: 2020-03-25 00:16:08
 * @LastEditTime: 2020-03-26 02:48:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\store\action.js
 */
import {ADD_COUNTER,ADD_TO_CART} from './mutation-type'

export default{
    addCart(context,payLoad){
        return new Promise((resolve,reject) => {
          let oldProduct = context.state.cartList.find(item => item.iid === payLoad.iid)
          if(oldProduct){
              context.commit(ADD_COUNTER,oldProduct)
              resolve('当前的商品数量+1')
          }else{
            payLoad.count = 1
            context.commit(ADD_TO_CART,payLoad)
            resolve('添加了新的商品')
          }
        })
      }
}