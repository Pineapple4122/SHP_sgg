<template>
  <div class="today-recommend">
   <div class="py-container">
      <ul class="recommend">
         <li class="clock">
            <div class="time">
               <img src="./images/clock.png">
               <h3>今日推荐</h3>
            </div>
         </li>
         <li class="banner">
            <img src="./images/today01.png">
         </li>
         <li class="banner">
            <img src="./images/today02.png">
         </li>
         <li class="banner">
            <img src="./images/today03.png">
         </li>
         <li class="banner">
            <img src="./images/today04.png">
         </li>
      </ul>
   </div>
  </div>
</template>

<script>
export default {
   name: 'Recommend'
}
</script>

<style lang="less" scoped>
.today-recommend {
   .py-container {
      width: 1200px;
      margin: 0 auto;
      .recommend {
         display: flex;
         height: 165px;
         margin: 10px 0;
         background-color: #eaeaea;
         .clock {
            width: 16.67%;
            background-color: #5c5251;
            text-align: center;
            font-size: 18px;
            color: #fff;
            .time {
               padding: 30px 0;
               h3 {
                  font-weight: 700;
                  font-size: 18px;
                  margin: 9px 0;
                  line-height: 30px;
               }
            }
         }
         .banner {
            width: 20.83%;
            img {
               width: 100%;
               height: 100%;
               transition: all 400ms;
               &:hover {
                  opacity: 0.8;
               }
            }
         }
      }
   }
}
</style>