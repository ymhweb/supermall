<!--
 * @Author: your name
 * @Date: 2020-03-22 00:55:24
 * @LastEditTime: 2020-03-22 17:51:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\detail\childComps\DetailRecommend.vue
 -->
<template>
    <div>
      <img v-for="(item,index) in saveObj" :key="index" src="item" alt="">
   </div> 
</template>

<script>
import { getRecommend } from '../../../network/detail'
export default {
    name: "DetailRecommend",
    data(){
        return{
            saveObj: []
        }
    },
    props:{
        recommends:{
            type: Array,
            default(){
                return []
            }
        },
        currentI:{
            type: Array,
            default(){
                return []
            }
        }       
    },
    computed:{
        newRecommends(){
            for(let i=0;i<this.recommends.length;i++){
                this.saveObj.push(this.recommends[i].image)     
                console.log(this.saveObj);                                  
            }
        }
    },
    mounted(){
        this.newRecommends
    }
}
</script>

<style scoped>

</style>