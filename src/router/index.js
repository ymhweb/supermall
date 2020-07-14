/*
 * @Author: your name
 * @Date: 2019-12-19 23:20:05
 * @LastEditTime: 2020-04-30 22:25:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')
const Register = () => import('../views/register/Register')
const Login = () => import('../views/login/Login')
const ConfirmPay = () => import('../views/confirmpay/ConfirmPay')
const PaySuccess = () => import('../views/paysuccess/PaySuccess')
const AlreadyBuy = () => import('../views/alreadybuy/AlreadyBuy')
Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:iid',
    component:Detail
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/confirmpay',
    component:ConfirmPay
  },
  {
    path:'/paysuccess',
    component:PaySuccess
  },
  {
    path:'/alreadybuy',
    component:AlreadyBuy
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
