<template>
  <div class="swiper-container" ref="cur">
      <div class="swiper-wrapper">
         <div class="swiper-slide" v-for="(carousel,index) in list" :key="carousel.id">
            <img :src="carousel.imgUrl">
         </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
   </div>
</template>

<script>
import Swiper from 'swiper'

export default {
   name: 'Carousel',
   data() {
      return {
         
      }
   },
   props: ['list'],
   computed: {
   },
   mounted() {

   },
   watch: {
      list: {
         immediate: true,
         handler() {
            this.$nextTick(() => {
               var mySwiper = new Swiper(this.$refs.cur, {
                  loop: true,
                  autoplay: true,
                  navigation: {
                     nextEl: ".swiper-button-next",
                     prevEl: ".swiper-button-prev",
                  },
                  pagination: {
                     el: ".swiper-pagination",
                     clickable: true,
                  },
               })
            })
         }
      }
   }
}
</script>

<style lang="less" scoped>

</style>