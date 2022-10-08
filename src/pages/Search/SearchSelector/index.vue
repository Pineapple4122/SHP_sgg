<template>
  <div class="selector clearfix">
   <div class="type-wrap logo">
      <div class="fl key brand">品牌</div>
      <div class="value logos">
         <ul class="logo-list">
            <li v-for="(trade,index) in trademarkList" :key="trade.tmId" @click="trademarkHandler(trademark)">{{trade.tmName}}</li>
         </ul>
         <div class="ext">
            <a class="sui-btn">多选</a>
            <a> 更多</a>
         </div>
      </div>
   </div>
   <div class="type-wrap" v-for="(attr,index) in attrsList" :key="attr.attrId">
      <div class="fl key">{{attr.attrName}}</div>
      <div class="fl value">
         <ul class="type-list">
            <li v-for="(attrValue,index) in attr.attrValueList" :key="index">
               <a @click="attrInfo(attr,attrValue)">{{attrValue}}</a>
            </li>
         </ul>
      </div>
      <div class="fl ext"></div>
   </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
   name: 'SearchSelector',
   computed: {
      ...mapGetters(['trademarkList','attrsList'])
   },
   methods: {
      trademarkHandler(trademark) {
         this.$emit('trademarkInfo',trademark)
      },
      attrInfo(attr,attrValue) {
         this.$emit('attrInfo',attr,attrValue)
      },
   }
}
</script>

<style lang="less" scoped>
.selector {
   border: 1px solid #ddd;
   margin-bottom: 5px;
   overflow: hidden;
   .type-wrap {
      position: relative;
      border-top: 1px solid #ddd;
      overflow: hidden;
      
      .key {
         float: left;
         width: 100px;
         text-align: right;
         line-height: 26px;
         padding: 10px 10px 0 15px;
         background: #f1f1f1;
      }
      .value {
         overflow: hidden;
         padding: 10px 0 0 15px;
         color: #333;
         margin-left: 120px;
         padding-right: 90px;
         .logo-list {
            li {
               float: left;
               width: 105px;
               height: 52px;
               line-height: 52px;
               border: 1px solid #e4e4e4;
               margin: -1px -1px 0 0;
               text-align: center;
               overflow: hidden;
               white-space: nowrap;
               text-overflow: ellipsis;
               font-size: 14px;
               font-weight: 700;
               color: #e1251b;
               font-style: italic;
            }
         }
         .type-list {
            li {
               float: left;
               display: block;
               margin-right: 30px;
               line-height: 26px;
            }
         }
      }
      .ext {
         position: absolute;
         top: 10px;
         right: 10px;
         .sui-btn {
            display: inline-block;
            padding: 0 10px;
            box-sizing: border-box;
            font-size: 12px;
            line-height: 18px;
            text-align: center;
            cursor: pointer;
            background: #fff;
            border: 1px solid #d5d5d5;
         }
      }
   }
   .logo {
      border-top: 0;
      .key {
         padding-bottom: 87px !important;
      }
   }
}
</style>