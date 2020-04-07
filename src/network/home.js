/*
 * @Author: your name
 * @Date: 2019-12-23 20:37:04
 * @LastEditTime: 2020-03-17 00:48:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\network\home.js
 */
import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}

export function getHomeGoods(type,page) {
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}
