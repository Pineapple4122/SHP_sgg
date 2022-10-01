import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/mock/mockServe'

import 'swiper/css/swiper.css'

Vue.config.productionTip = false

import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name,TypeNav)
import Carousel from '@/components/Carousel'
Vue.component(Carousel.name,Carousel)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')