<template>
  <div class="type-nav">
      <div class="container">
         <div @mouseleave="leaveIndex" @mouseenter="enterShow">
            <h2 class="all">全部商品分类</h2>
            <transition name="sort">
               <div class="sort" v-show="show">
                  <div class="all-sort-list2" @click="goSearch">
                     <div class="item" v-for="(c1,index) in categoryList" :key="c1.categoryId" :class="{cur:currentIndex==index}">
                        <h3 @mouseenter="changeIndex(index)">
                           <a :data-categoryName='c1.categoryName' :data-category1Id='c1.categoryId'>{{c1.categoryName}}</a>
                        </h3>
                        <div class="item-list clearfix" :style="{display:currentIndex==index?'block':'none'}">
                           <div class="subitem" v-for="(c2,index) in c1.categoryChild" :key="c2.categotyId">
                              <dl class="fore">
                                 <dt>
                                    <a :data-categoryName='c2.categoryName' :data-category2Id='c2.categoryId'>{{c2.categoryName}}</a>
                                 </dt>
                                 <dd>
                                    <em v-for="(c3,index) in c2.categoryChild" :key="c3.categotyId">
                                       <a :data-categoryName='c3.categoryName' :data-category2Id='c3.categoryId'>{{c3.categoryName}}</a>
                                    </em>
                                 </dd>
                              </dl>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </transition>
         </div>
         <nav class="nav">
            <a href="#">服装城</a>
            <a href="#">服装城</a>
            <a href="#">服装城</a>
            <a href="#">服装城</a>
            <a href="#">服装城</a>
            <a href="#">服装城</a>
            <a href="#">服装城</a>
            <a href="#">服装城</a>
         </nav>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import throttle from 'lodash/throttle'

export default {
   name: 'TypeNav',
   data() {
      return {
         currentIndex: -1,
         show: true,
      }
   },
   mounted() {
      // this.$store.dispatch('categoryList')
      if(this.$route.path != '/home') {
         this.show = false
      }
   },
   computed: {
      ...mapState({
         categoryList: (state) => state.home.categoryList
      }),
   },
   methods: {
      changeIndex: throttle(function (index) {
         this.currentIndex = index
      },50),
      leaveIndex() {
         this.currentIndex = -1
         if(this.$route.path != '/home') {
            this.show = false
         }
      },
      enterShow() {
         if(this.$route.path != '/home') {
            this.show = true
         }
      },
      goSearch(event) {
         let node = event.target
         // console.log(node.dataset);
         let {categoryname,category1id,category2id,category3id} = node.dataset
         if(categoryname) {
            let location = {name: 'search'}
            let query = {categoryName: categoryname}
            if(category1id) {
               query.category1Id = category1id
            } else if(category2id) {
               query.category2Id = category2id
            } else {
               query.category3Id = category3id
            }
            if(this.$route.params) {
               location.params = this.$route.params
               location.query = query
               this.$router.push(location)
            }
         }
      }
   }
}
</script>

<style lang="less" scoped>
.type-nav {
   border-bottom: 2px solid #e1251b;
   .container {
      width: 1200px;
      margin: 0 auto;
      display: flex; 
      position: relative;
      .all {
         width: 210px;
         height: 45px;
         line-height: 45px;
         text-align: center;
         color: #fff;
         font-weight: bold;
         font-style: 14px;
         background-color: #e1251b;
      }
      .nav {
         a {
            height: 45px;
            line-height: 45px;
            font-size: 16px;
            margin: 0 22px;
            color: #333;
         }
      }
      .sort {
         position: absolute;
         left: 0;
         top: 45px;
         width: 210px;
         height: 461px;
         background: #fafafa;
         z-index: 999;
         .all-sort-list2 {
            .item {
               h3 {
                  line-height: 30px;
                  font-weight: 400;
                  font-size: 14px;
                  padding: 0 20px;
                  margin: 0;
                  overflow: hidden;
                  a {
                     color: #333;
                  }
               }
               .item-list {
                  // display: none;
                  position: absolute;
                  width: 734px;
                  min-height: 460px;
                  left: 210px;
                  top: 0;
                  background: #f7f7f7;
                  border: 1px solid #ddd;
                  z-index: 9999 !important;
                  .subitem {
                     float: left;
                     width: 650px;
                     padding: 0 4px 0 8px;
                     dl {
                        border-top: 1px solid #eee;
                        padding: 6px 0;
                        overflow: hidden;
                        zoom: 1;
                        &.fore {
                           border-top: 0;
                        }
                        dt {
                           float: left;
                           width: 54px;
                           text-align: right;
                           line-height: 22px;
                           padding: 3px 6px 0 0;
                           font-weight: 700;
                        }
                        dd {
                           float: left;
                           width: 415px;
                           padding: 3px 0 0;
                           overflow: hidden;
                           em {
                              float: left;
                              height: 14px;
                              line-height: 14px;
                              padding: 0 8px;
                              margin-top: 4px;
                              border-left: 1px solid #ccc;
                           }
                        }
                     }
                  }
               }
            }
            .cur {
               background-color: skyblue;
            }
         }
      }
      .sort-enter {
         height: 0;
      }
      .sort-enter-to {
         height: 461px;
      }
      .sort-enter-active {
         transition: all .5s linear;
      }
   }
}
</style>