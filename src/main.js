import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/mock/mockServe'

import 'swiper/css/swiper.css'

import {Pagination} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Pagination)

Vue.config.productionTip = false

import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name,TypeNav)
import Carousel from '@/components/Carousel'
Vue.component(Carousel.name,Carousel)

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  router,
  store,
}).$mount('#app')