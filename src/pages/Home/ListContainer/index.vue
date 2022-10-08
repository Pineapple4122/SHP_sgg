<template>
  <div class="list-container">
      <div class="sortList clearfix">
         <div class="center">
            <Carousel :list='bannerList'></Carousel>
         </div>
         <div class="right">
            <div class="news">
               <h4>
                  <em class="fl">尚品汇快报</em>
                  <span class="fr">更多 ></span>
               </h4>
               <ul class="news-list">
                  <li>
                     <span class="bold">[特惠]</span>
                     备战开学季 全民半价购数码
                  </li>
                  <li>
                     <span class="bold">[特惠]</span>
                     备战开学季 全民半价购数码
                  </li>
                  <li>
                     <span class="bold">[特惠]</span>
                     备战开学季 全民半价购数码
                  </li>
                  <li>
                     <span class="bold">[特惠]</span>
                     备战开学季 全民半价购数码
                  </li>
                  <li>
                     <span class="bold">[特惠]</span>
                     备战开学季 全民半价购数码
                  </li>
               </ul>
            </div>
            <ul class="lifeservices">
               <li class="life-item">
                  <i class="list-item"></i>
                  <span class="service-intro">话费</span>
               </li>
               <li class="life-item">
                  <i class="list-item"></i>
                  <span class="service-intro">话费</span>
               </li>
               <li class="life-item">
                  <i class="list-item"></i>
                  <span class="service-intro">话费</span>
               </li>
               <li class="life-item">
                  <i class="list-item"></i>
                  <span class="service-intro">话费</span>
               </li>
               <li class="life-item">
                  <i class="list-item"></i>
                  <span class="service-intro">话费</span>
               </li>
               <li class="life-item">
                  <i class="list-item"></i>
                  <span class="service-intro">话费</span>
               </li>
               <li class="life-item">
                  <i class="list-item"></i>
                  <span class="service-intro">话费</span>
               </li>
               <li class="life-item">
                  <i class="list-item"></i>
                  <span class="service-intro">话费</span>
               </li>
               <li class="life-item">
                  <i class="list-item"></i>
                  <span class="service-intro">话费</span>
               </li>
               <li class="life-item">
                  <i class="list-item"></i>
                  <span class="service-intro">话费</span>
               </li>
               <li class="life-item">
                  <i class="list-item"></i>
                  <span class="service-intro">话费</span>
               </li>
               <li class="life-item">
                  <i class="list-item"></i>
                  <span class="service-intro">话费</span>
               </li>
            </ul>
            <div class="ads">
               <img src="./images/ad1.png">
            </div>
         </div>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
   name: 'ListContainer',
   mounted() {
      this.$store.dispatch('getBannerList')
   },
   computed: {
      ...mapState({
         bannerList: state => state.home.bannerList
      })
   }
}
</script>

<style lang="less" scoped>
.list-container {
   width: 1200px;
   margin: 0 auto;
   .sortList {
      height: 464px;
      padding-left: 210px;
      .center {
         box-sizing: border-box;
         width: 740px;
         height: 100%;
         padding: 5px;
         float: left;
      }
      .right {
         float: left;
         width: 250px;
         .news {
            border: 1px solid #e4e4e4;
            margin-top: 5px;
            h4 {
               border-bottom: 1px solid #e4e4e4;
               padding: 5px 10px;
               margin: 5px 5px 0;
               font-size: 14px;
               line-height: 22px;
               overflow: hidden;
               .fl {
                  float: left;
               }
               .fr {
                  float: right;
                  font-size: 12px;
                  font-weight: 400;
               }
            }
            .news-list {
               padding: 5px 15px;
               line-height: 26px;
               .bold {
                  font-weight: 700;
               }
            }
         }
         .lifeservices {
            display: flex;
            flex-wrap: wrap;
            border-right: 1px solid #e4e4e4;
            .life-item {
               width: 25%;
               border-left: 1px solid #e4e4e4;
               border-bottom: 1px solid #e4e4e4;
               margin-right: -1px;
               text-align: center;
               height: 64px;
               cursor: pointer;
               .list-item {
                  background-image: url('~@/assets/images/icons.png');
                  width: 61px;
                  height: 40px;
                  display: block;
               }
               .service-intro {
                  display: block;
                  width: 60px;
                  line-height: 22px;
               }
               &:nth-child(1) {
                  .list-item {
                     background-position: 0px -5px;
                  }
               }
               &:nth-child(2) {
                  .list-item {
                  background-position: -62px -5px;
                  }
               }
               &:nth-child(3) {
                  .list-item {
                  background-position: -126px -5px;
                  }
               }
               &:nth-child(4) {
                  .list-item {
                  background-position: -190px -5px;
                  }
               }
               &:nth-child(5) {
                  .list-item {
                  background-position: 0px -76px;
                  }
               }
               &:nth-child(6) {
                  .list-item {
                  background-position: -62px -76px;
                  }
               }
               &:nth-child(7) {
                  .list-item {
                  background-position: -126px -76px;
                  }
               }
               &:nth-child(8) {
                  .list-item {
                  background-position: -190px -76px;
                  }
               }
               &:nth-child(9) {
                  .list-item {
                  background-position: 0px -146px;
                  }
               }
               &:nth-child(10) {
                  .list-item {
                  background-position: -62px -146px;
                  }
               }
               &:nth-child(11) {
                  .list-item {
                  background-position: -126px -146px;
                  }
               }
               &:nth-child(12) {
                  .list-item {
                  background-position: -190px -146px;
                  }
               }
            }
         }
         .ads {
            margin-top: 5px;
            img {
               opacity: 0.8;
               transition: all 400ms;
               &:hover {
                  opacity: 1;
               }
            }
         }
      }
   }
}
</style>