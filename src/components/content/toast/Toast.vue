<!--
 * @Author: your name
 * @Date: 2020-03-27 00:18:51
 * @LastEditTime: 2020-03-27 01:03:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\components\content\toast\Toast.vue
 -->
<template>
    <div class="toast" v-show="isShow">
        <div>{{message}}</div>
    </div>
</template>

<script>
export default {
    name: "Toast",
    props:{
        // message:{
        //     type: String,
        //     default: ''
        // },
        // show:{
        //     type: Boolean,
        //     default: false
        // }
    },
    data(){
        return{
            message: '',
            isShow: false
        }
    },

    methods:{
        show(message,duration=2000){
            this.isShow = true;
            this.message = message

            setTimeout(()=>{
                this.isShow = false,
                this.message = ''
            },duration)
        }
    }
}
</script>

<style scoped>
    .toast{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%);
        padding: 8px 10px;
        z-index: 99;

        color: #fff;
        background-color: rgba(0,0,0,.75);
    }
</style>