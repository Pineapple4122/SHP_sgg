import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function(location,resolve,reject) {
   if(resolve && reject) {
      originPush.call(this,location,resolve,reject)
   }else {
      originPush.call(this,location,()=>{},()=>{})
   }
}
VueRouter.prototype.replace = function (location,resolve,reject) {
   if(resolve && reject) {
      originReplace.call(this,location,resolve,reject)
   } else {
      originReplace.call(this,location,()=>{},()=>{})
   }
}

export default new VueRouter({
   routes: [
      {
         path: '/home',
         component: ()=>import('@/pages/Home'),
         meta: {show: true},
      },
      {
         path: '/login',
         component: ()=>import('@/pages/Login'),
         meta: {show: false}
      },
      {
         path: '/search',
         component: ()=>import('@/pages/Search'),
         meta: {show: true}
      },
      {
         path: '/register',
         component: ()=>import('@/pages/Register'),
         meta: {show: false}
      },
      {
         path: '*',
         redirect: '/home'
      },
   ]
})