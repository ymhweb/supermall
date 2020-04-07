<!--
 * @Author: your name
 * @Date: 2020-03-13 00:31:10
 * @LastEditTime: 2020-03-16 02:36:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\components\common\scroll\Scroll.vue
 -->
<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "Scroll",
        props:{
            probeType:{
                type: Number,
                default: 0
            },
            pullUpLoad:{
                type: Boolean,
                default: false
            }
        },
        data(){
            return{
                scroll:null
            }
        },
        mounted(){
            this.scroll = new BScroll(this.$refs.wrapper,{
                click: true,
                probeType: this.probeType,
                pullUpLoad: this.pullUpLoad
            })
            
            if(this.probeType === 2 || this.probeType === 3){
            this.scroll.on('scroll',(position)=>{
                // console.log(position);
                this.$emit('scroll',position)
            })
            }

            if(this.pullUpLoad){
            this.scroll.on('pullingUp',()=>{
                // console.log('加载更多');
                this.$emit('pullingUp')
            })
            }
        },
        methods:{
            scrollTo(x,y,time){
              this.scroll && this.scroll.scrollTo(x,y,time)
            },
            finishPullUp(){
                this.scroll.finishPullUp()
            },
            refresh(){
              this.scroll && this.scroll.refresh()
            }
            // getScrollY(){
            //     return this.scroll ? this.scroll.y : 0
            // }
        }
    }
</script>

<style scoped>

</style>