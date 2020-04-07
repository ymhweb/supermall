/*
 * @Author: your name
 * @Date: 2020-03-23 00:27:11
 * @LastEditTime: 2020-03-29 01:07:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\common\mixin.js
 */
import {debouce} from './utils'

export const itemListenerMixin = {
    mounted(){
        let newRefresh = debouce(this.$refs.scroll.refresh,100)
        this.itemImgListener = () =>{
            newRefresh()
        }
        this.$bus.$on('itemImageLoad',this.itemImgListener)
        console.log("hunru");
        
    }
}

export const tabControlMixin = {
    data: function () {
      return {
        currentType: POP
      }
    },
    methods: {
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = POP
            break
          case 1:
            this.currentType = NEW
            break
          case 2:
            this.currentType = SELL
            break
        }
        console.log(this.currentType);
      }
    }
  }