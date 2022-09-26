<template>
  <div class="like">
      <div class="py-container">
         <div class="title">
            <h3 class="fl">猜你喜欢</h3>
            <a href="#" class="fr">换一换</a>
         </div>
         <div class="bd">
            <ul class="favouriate">
               <li>
                  <img src="./images/like_01.png">
                  <div class="like-text">
                     <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                     <h3>￥116.00</h3>
                  </div>
               </li>
               <li>
                  <img src="./images/like_02.png">
                  <div class="like-text">
                     <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                     <h3>￥116.00</h3>
                  </div>
               </li>
               <li>
                  <img src="./images/like_03.png">
                  <div class="like-text">
                     <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                     <h3>￥116.00</h3>
                  </div>
               </li>
               <li>
                  <img src="./images/like_01.png">
                  <div class="like-text">
                     <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                     <h3>￥116.00</h3>
                  </div>
               </li>
               <li>
                  <img src="./images/like_02.png">
                  <div class="like-text">
                     <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                     <h3>￥116.00</h3>
                  </div>
               </li>
               <li>
                  <img src="./images/like_03.png">
                  <div class="like-text">
                     <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                     <h3>￥116.00</h3>
                  </div>
               </li>
            </ul>
         </div>
      </div>
  </div>
</template>

<script>
export default {
   name: 'Like',
}
</script>

<style lang="less" scoped>
.like {
   margin-top: 15px;
   .py-container {
      width: 1200px;
      margin: 0 auto;
      .title {
         overflow: hidden;
         .fl {
            float: left;
            line-height: 30px;
            font-size: 20px;
         }
         .fr {
            float: right;
            text-decoration: none;
            line-height: 30px;
            width: 66px;
            height: 25px;
            font-size: 12px;
            font-weight: 400;
            color: #666;
            background-image: url('~@/assets/images/icons.png');
            background-position: 182px -104px;
         }
      }

      .bd {
         .favouriate {
            border: 1px solid #e4e4e4;
            padding: 0 10px;
            box-sizing: border-box;
            display: flex;
            overflow: hidden;
            li {
               width: 16.667%;
               height: 250px;
               background: #fff;
               display: flex;
               flex-direction: column;
               align-content: center;
               cursor: pointer;
               margin: 0 -1px;
               overflow: hidden;
               position: relative;
               img {
                  width: 142px;
                  height: 142px;
                  transition: all 400ms;
                  &:hover {
                     opacity: 0.8;
                     transform: scale(1.1);
                  }
               }
               .like-text {
                  width: 142px;
                  padding: 0;
                  border-right: 1px solid #e4e4e4;
                  p {
                     margin: 5px 0;
                  }
                  h3 {
                     color: #df3033;
                     font-size: 20px;
                     line-height: 30px;
                     margin: 9px 0;
                     font-weight: 700;
                  }
               }
            }
         }
      }
   }
}
</style>