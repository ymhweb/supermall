/*
 * @Author: your name
 * @Date: 2020-03-28 23:06:23
 * @LastEditTime: 2020-03-28 23:56:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\network\category.js
 */
import {request} from './request'

export function getCategory(){
    return request({
        url: '/category'
    })
}

export function getSubcategory(maitKey){
    return request({
        url: '/subcategory',
        params:{
            maitKey
        }
    })
}

export function getCategoryDetail(miniWallkey, type) {
    return request({
      url: '/subcategory/detail',
      params: {
        miniWallkey,
        type
      }
    })
  }
  