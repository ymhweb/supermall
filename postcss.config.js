/*
 * @Author: your name
 * @Date: 2020-03-27 01:46:43
 * @LastEditTime: 2020-03-27 02:08:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\postcss.config.js
 */
module.exports = {
    plugins: {
        autoprefixer: {},
        "postcss-px-to-viewport":{
            viewportWidth: 375,
            viewportHeight: 667,
            unitPrecision: 5,
            viewportUnit: 'vw',
            selectorBlackList: ['ignore','tab-bar','tab-bar-item'],
            minPixelValue: 1,
            mediaQuery: false,
            exclude: [/TabBar/]
      },
    }  
}