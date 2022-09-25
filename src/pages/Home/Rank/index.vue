<template>
  <div class="rank">
   <div class="tab">
      <div class="tab-tit clearfix">
         <a href="#" class="on">
            <p class="img"><i></i></p>
            <p class="text">热卖排行</p>
         </a>
         <a href="#">
            <p class="img"><i></i></p>
            <p class="text">热卖排行</p>
         </a>
         <a href="#">
            <p class="img"><i></i></p>
            <p class="text">热卖排行</p>
         </a>
      </div>
   </div>
   <div class="content">
      <ul>
         <li>
            <div class="img-item">
               <p class="tab-pic">
                  <a href="#">
                     <img src="./images/1.jpg">
                  </a>
               </p>
               <div class="tab-info">
                  <div class="info-title">
                     <a href="#">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
                  </div>
                  <p class="info-price">定金：￥100.00</p>
               </div>
            </div>
            <div class="img-item">
               <p class="tab-pic">
                  <a href="#">
                     <img src="./images/1.jpg">
                  </a>
               </p>
               <div class="tab-info">
                  <div class="info-title">
                     <a href="#">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
                  </div>
                  <p class="info-price">定金：￥100.00</p>
               </div>
            </div>
            <div class="img-item">
               <p class="tab-pic">
                  <a href="#">
                     <img src="./images/1.jpg">
                  </a>
               </p>
               <div class="tab-info">
                  <div class="info-title">
                     <a href="#">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
                  </div>
                  <p class="info-price">定金：￥100.00</p>
               </div>
            </div>
            <div class="img-item">
               <p class="tab-pic">
                  <a href="#">
                     <img src="./images/1.jpg">
                  </a>
               </p>
               <div class="tab-info">
                  <div class="info-title">
                     <a href="#">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
                  </div>
                  <p class="info-price">定金：￥100.00</p>
               </div>
            </div>
         </li>
      </ul>
   </div>
  </div>
</template>

<script>
export default {
   name: 'Rank',
}
</script>

<style lang="less" scoped>
.rank {
   width: 1200px;
   margin: 0 auto;
   .tab {
      width: 312px;
      margin: 0 auto;
      overflow: hidden;
      .tab-tit {
         text-align: center;
         a {
            text-decoration: none;
            display: block;
            float: left;
            padding: 0 18px;
            font-size: 16px;
            color: #999;
            p {
               margin: 5px 0;
            }
            .img {
               i {
                  width: 35px;
                  height: 35px;
                  display: block;
                  background: url('./images/bg0.png');
                  margin-left: 10px;
               }
            }
            .text {
               line-height: 28px;
            }
         }
         .on {
            color: #e60012;
            .img {
               i {
                  background-position: -35px 0;
               }
            }
         }
      }
   }

   .content {
      overflow: hidden;
      padding: 10px;
      ul {
         li {
            overflow: hidden;
            line-height: 18px;
            .img-item {
               float: left;
               width: 269px;
               border: 1px solid #e1251b;
               margin: 0 12px 10px;
               overflow: hidden;
               background: #fff;
               .tab-pic {
                  width: 230px;
                  height: 210px;
                  overflow: hidden;
                  text-align: center;
                  margin: 5px auto 18px;
                  a {
                     color: #666;
                     img {
                        width: 200px;
                        height: 200px;
                     }
                  }
               }
               .tab-info {
                  background: #fafafa;
                  .info-title {
                     height: 50px;
                     padding-left: 10px;
                     margin: 0 auto;
                     line-height: 28px;
                     overflow: hidden;
                     a {
                        color: #333;
                        text-decoration: none;
                     }
                  }
                  .info-price {
                     height: 35px;
                     padding-left: 10px;
                     font-size: 20px;
                     color: #e1251b;
                     display: block;
                     line-height: 24px;
                     margin: 10px auto 0;
                  }
               }
            }
         }
      }
   }
}
</style>