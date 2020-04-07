/*
 * @Author: your name
 * @Date: 2019-12-23 20:29:00
 * @LastEditTime: 2020-04-07 16:41:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\network\request.js
 */
import axios from 'axios'

export function request(config) {
  //1.创建axios得实例
  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000/api/wh',
    // baseURL: 'http://106.54.54.237:8000/api/h3',
    baseURL: 'http://152.136.185.210:8000/api/h8',
    timeout: 5000
  })
  //请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {

  })
  //响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  });

  //发送真正得网络请求
  return instance(config)//返回promise 调用时可以直接用.then

}
