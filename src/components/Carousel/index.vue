<template>
  <div class="swiper-container">
      <div class="swiper-wrapper">
         <div class="swiper-slide">
            <img src="../../../public/images/banner1.jpg">
         </div>
         <div class="swiper-slide">
            <img src="../../../public/images/banner2.jpg">
         </div>
         <div class="swiper-slide">
            <img src="../../../public/images/banner3.jpg">
         </div>
         <div class="swiper-slide">
            <img src="../../../public/images/banner4.jpg">
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
   mounted() {
      new Swiper(".swiper-container", {
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
   },
}
</script>

<style lang="less" scoped>

</style>