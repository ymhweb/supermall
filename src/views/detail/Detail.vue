<!--
 * @Author: your name
 * @Date: 2020-03-16 02:42:58
 * @LastEditTime: 2020-03-27 00:50:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\detail\Detail.vue
 -->
<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
        <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
            <detail-swiper :top-images="topImages"/>
            <detail-base-info :goods="goods"/>
            <detail-shop-info :shop="shop"/>
            <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
            <detail-param-info ref="params" :param-info="paramInfo"/>
            <detail-comment-info ref="comment" :comment-info="commentInfo"/>
            <goods-list ref="recommend" :goods="recommends"/>
            <!-- <detail-recommend :recommends="recommends" :current-i="currentI"/> -->
        </scroll>
        <detail-bottom-bar @addCart="addToCart"/>
        <back-top @click.native="backTop" v-show="isShowBackTop"/>
        <!-- <toast :message="message" :show="show"/> -->
    </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'
import BackTop from 'components/content/backTop/BackTop'
// import DetailRecommend from './childComps/DetailRecommend'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
// import Toast from 'components/content/toast/Toast'

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "../../network/detail"
import {debounce} from "common/utils"

export default {
    name: "Detail",
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        DetailBottomBar,
        // DetailRecommend,
        Scroll,
        BackTop,
        // Toast,
        GoodsList
    },
    data(){
        return{
            iid: null,
            topImages: [],
            goods: {},
            shop:{},
            detailInfo:{},
            paramInfo:{},
            itemParams:{},
            commentInfo:{},
            recommends:[],
            currentI: [],
            themeTopYs:[],
            getThemeTopY: null,
            currentIndex: 0,
            isShowBackTop: false,
            // message: '',
            // show: false
        }
    },
    created(){
        this.iid = this.$route.params.iid
        // console.log(this.$route.params.iid);   
        //获取顶部信息     
        getDetail(this.iid).then(res=>{
            // console.log(res);
            const data = res.result;
            this.topImages = data.itemInfo.topImages

            //获取商品信息
            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

            //获取店铺信息得对象
            this.shop = new Shop(data.shopInfo)

            //获取商品信息
            this.detailInfo = data.detailInfo

            //获取参数的信息
            this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

            //取出评论的信息
            if(data.rate.cRate !== 0){
                this.commentInfo = data.rate.list[0]
            }

            
        // this.themeTopYs.push(0);
        // this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        // this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);

        // console.log(this.themeTopYs);
            // this.$nextTick(()=>{

            //     this.themeTopYs = [];
            //     this.themeTopYs.push(0);
            //     this.themeTopYs.push(this.$refs.params.$el.offsetTop);
            //     this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
            //     this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
            //     console.log(this.themeTopYs);
                
            // })
        })

        getRecommend().then(res => {
            this.recommends = res.data.list
            // for(let i = 0;i<this.recommends.length;i++){
            //       this.currentI.push(i)                  
            // }
            // console.log(this.recommends);
            
            // console.log(this.currentI)          
            // console.log(res)   
        })

        this.getThemeTopY = debounce(()=>{
            this.themeTopYs = [];
            this.themeTopYs.push(0);
            this.themeTopYs.push(this.$refs.params.$el.offsetTop);
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
            this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        },200)
    },
    mounted(){
        // this.themeTopYs.push(0);
        // this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        // this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);

        // console.log(this.themeTopYs);
        
    },
    updated(){
        // this.themeTopYs = [];
        // this.themeTopYs.push(0);
        // this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        // this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);

        // console.log(this.themeTopYs);
    },
    methods:{
        imageLoad(){
            this.$refs.scroll.refresh()
            // console.log('1');
            this.getThemeTopY()
                // console.log(this.themeTopYs);
        },
        titleClick(index){
            // console.log(index);
            this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
        },
        contentScroll(position){
            // console.log(position);
            //1.获取y值
            const positionY = -position.y

            // console.log(this.getThemeTopY);
            
            //2.positionY和主题中值进行对比
            let length = this.themeTopYs.length;
            for(let i =0;i < length;i++){ 
                if(this.currentIndex !== i && ((i < length-1 && positionY >= this.themeTopYs[i] && 
                positionY < this.themeTopYs[i+1]) || (i === length-1 && 
                positionY >= this.themeTopYs[i]))){
                    this.currentIndex = i;
                    // console.log(this.currentIndex);
                    this.$refs.nav.currentIndex = this.currentIndex
                }
            }
            this.isShowBackTop = (-position.y) > 1000
        },
        backTop(){
              this.$refs.scroll.scrollTo(0,0,500)
        },
        addToCart(){
            //1.获取购物车需要显示得信息
            const product = {}
            product.image = this.topImages[0];
            product.title = this.goods.title;
            product.desc = this.goods.desc;
            product.price = this.goods.realPrice;
            product.iid = this.iid;

            //将商品添加到购物车
            // this.$store.commit('addCart',product)
            this.$store.dispatch('addCart',product).then(res =>{
                // this.show = true;
                // this.message = res;
                
                // setTimeout(()=>{
                //     this.show = false;
                //     this.message = '';
                // },1500)
                this.$toast.show(res,1500)
            })
        }
    }
}
</script>

<style scoped>
    #detail{
        position: relative;
        z-index: 9;
        background-color: #fff;;
        height: 100vh;
    }

    .content{
        position: absolute;
        top: 44px;
        bottom: 60px;
    }

    .detail-nav{
        position: relative;
        background-color: #fff;
        z-index: 9;
    } 
</style>