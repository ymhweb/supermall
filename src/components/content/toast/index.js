/*
 * @Author: your name
 * @Date: 2020-03-27 00:38:29
 * @LastEditTime: 2020-03-27 00:59:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\components\content\toast\index.js
 */
import Toast from './Toast'

const obj = {}

obj.install = function(Vue){

    // document.body.appendChild(Toast,$el)
    const toastContrustor = Vue.extend(Toast)

    const toast = new toastContrustor()

    toast.$mount(document.createElement('div'))

    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast;
}

export default obj