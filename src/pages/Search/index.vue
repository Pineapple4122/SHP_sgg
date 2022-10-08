<template>
  <div>
      <TypeNav></TypeNav>
      <div class="main">
         <div class="py-container">
            <div class="bread">
               <ul class="fl sui-breadcrumb">
                  <li><a href="#">全部结果</a></li>
               </ul>
               <ul class="fl sui-tag">
                  <li class="with-x" v-if="searchParams.categoryName">
                     {{searchParams.categoryName}}
                     <i @click="removeCategoryName">x</i>
                  </li>
                  <li class="with-x" v-if="searchParams.keyword">
                     {{searchParams.keyword}}
                     <i @click="removeKeyword">x</i>
                  </li>
                  <li class="with-x" v-if="searchParams.trademark">
                     {{searchParams.trademark}}
                     <i @click="removeTrademark">x</i>
                  </li>
                  <li class="with-x" v-for="(prop,index) in searchParams.props" :key="index">
                     {{prop.split(':')[1]}}
                     <i @click="removeAttr(index)">x</i>
                  </li>
               </ul>
            </div>

            <SearchSelector @trademarkInfo='trademarkInfo' @attrInfo="attrInfo"></SearchSelector>

            <div class="details">
               <div class="sui-navbar">
                  <div class="navbar-inner filter">
                     <ul class="sui-nav">
                        <li :class="{active:isOne}" @click="changeOrder('1')">
                           <a>
                              综合
                              <span v-show="isOne" class="iconfont" :class="{'icon-cs-jt-xs-1-1': isAsc,'icon-cs-jt-xx-1-1': isDesc}"></span>
                           </a>
                        </li>
                        <li :class="{active:isTwo}" @click="changeOrder('2')">
                           <a>
                              价格
                              <span v-show="isTwo" class="iconfont" :class="{'icon-cs-jt-xs-1-1': isAsc,'icon-cs-jt-xx-1-1': isDesc}"></span>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="goods-list">
                  <ul class="yui3-g">
                     <li class="yui3-u-1-5" v-for="(good,index) in goodsList" :key="good.id">
                        <div class="list-wrap">
                           <div class="p-img">
                              <a href="#">
                                 <img :src="good.defaultImg" alt="">
                              </a>
                           </div>
                           <div class="price">
                              <strong>
                                 <em>￥</em>
                                 <i>{{good.price}}</i>
                              </strong>
                           </div>
                           <div class="attr">
                              <a href="#" target="_blank" title="">{{good.title}}</a>
                           </div>
                           <div class="commit">
                              <i class="command">
                                 已有<span>2000</span>人评价
                              </i>
                           </div>
                           <div class="operate">
                              <a target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                              <a class="sui-btn btn-bordered">收藏</a>
                           </div>
                        </div>
                     </li>
                  </ul>
               </div>
               <el-pagination
                  align="center"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="searchParams.pageNo"
                  :page-sizes="[10, 20, 50]"
                  :page-size="searchParams.pageSize"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="total">
               </el-pagination>
            </div>
         </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import SearchSelector from './SearchSelector'

export default {
   name: 'Search',
   components: {
      SearchSelector,
   },
   data() {
      return {
         //带给服务器参数
         searchParams: {
            //一级分类id
            category1Id: "",
            //二级分类id
            category2Id: "",
            //三级分类id
            category3Id: "",
            //分类名
            categoryName: "",
            //关键词
            keyword: "",
            //排序
            order: "1:desc",
            //分页器用的：代表当前是第几页
            pageNo: 1,
            //代表的是每一页展示数据的个数
            pageSize: 10,
            //平台售卖属性带的参数
            props: [],
            //品牌
            trademark: "",
         },
      }
   },
   methods: {
      getData() {
         this.$store.dispatch('getSearchList',this.searchParams)
      },
      removeCategoryName() {
         this.searchParams.category1Id = undefined
         this.searchParams.category2Id = undefined
         this.searchParams.category3Id = undefined
         this.searchParams.categoryName = undefined
         if(this.$route.params) {
            this.$router.push({name:'search',params:this.$route.params})
         }
      },
      removeKeyword() {
         this.searchParams.keyword = undefined
         this.$bus.$emit('clear')
         if(this.$route.query) {
            this.$router.push({name:'search',query:this.$route.query})
         }
      },
      trademarkInfo(trademark) {
         this.searchParams.trademark = `${trademark.tmId}:${trademark.tmName}`
         this.getData()
      },
      removeTrademark() {
         this.searchParams.trademark = undefined
         this.getData()
      },
      attrInfo(attr,attrValue) {
         let prop = `${attr.attrId}:${attrValue}:${attr.attrName}`
         if(this.searchParams.props.indexOf(prop) === -1) {
            this.searchParams.props.push(prop)
         }
         this.getData()
      },
      removeAttr(index) {
         this.searchParams.props.splice(index,1)
         this.getData()
      },
      handleSizeChange(pageSize) {
         this.searchParams.pageSize = pageSize
         this.getData()
      },
      handleCurrentChange(pageNo) {
         this.searchParams.pageNo = pageNo
         this.getData()
      },
      changeOrder(flag) {
         let originOrder = this.searchParams.order
         let originFlag = originOrder.split(':')[0]
         let originSort = originOrder.split(':')[1]
         let newOrder = ''
         if(flag === originFlag) {
            newOrder = `${flag}:${originSort==='asc'?'desc':'asc'}`
         }else {
            newOrder = `${flag}:'desc'`
         }
         this.searchParams.order = newOrder
         this.getData()
      }
   },
   computed: {
      ...mapGetters(['attrsList','goodsList','trademarkList']),
      ...mapState({
         total: (state) => state.search.searchList.total
      }),
      isOne() {
         return this.searchParams.order.indexOf('1') !== -1
      },
      isTwo() {
         return this.searchParams.order.indexOf('2') !== -1
      },
      isAsc() {
         return this.searchParams.order.indexOf('asc') !== -1
      },
      isDesc() {
         return this.searchParams.order.indexOf('desc') !== -1
      }
   },
   beforeMount() {
      Object.assign(this.searchParams,this.$route.query,this.$route.params)
   },
   mounted() {
      this.getData()
   },
   watch: {
      $route: {
         immediate: true,
         handler(newValue,oldValue) {
            this.searchParams.category1Id = undefined
            this.searchParams.category2Id = undefined
            this.searchParams.category3Id = undefined
            Object.assign(this.searchParams,this.$route.query,this.$route.params)
            this.getData()
         }
      }
   }
}
</script>

<style lang="less" scoped>
.main {
   margin: 10px 0;
   .py-container {
      width: 1200px;
      margin: 0 auto;
      .bread {
         margin-bottom: 5px;
         overflow: hidden;
         .sui-breadcrumb {
            padding: 3px 15px;
            margin: 0;
            font-weight: 400;
            border-radius: 3px;
            float: left;
            li {
               line-height: 18px;
               display: inline-block;
               a {
                  color: #666;
                  text-decoration: none;
                  &:hover {
                     color: #4cb9fc !important;
                  }
               }
            }
         }
         .sui-tag {
            float: left;
            margin-top: -5px;
            font-size: 0;
            line-height: 0;
            padding: 5px 0 0;
            margin-bottom: 18px;
            .with-x {
               font-size: 12px;
               margin: 0 5px 5px 0;
               display: inline-block;
               overflow: hidden;
               color: #000;
               background: #f7f7f7;
               padding: 0 7px;
               height: 20px;
               line-height: 20px;
               border: 1px solid #dedede;
               white-space: nowrap;
               transition: color 400ms;
               cursor: pointer;
               i {
                  margin-left: 10px;
                  cursor: pointer;
                  font: 400 14px tahoma;
                  display: inline-block;
                  height: 100%;
                  vertical-align: middle;
               }
               &:hover {
                  color: #28a3ef;
               }
            }
         }
      }
      .details {
         margin-bottom: 5px;
         .sui-navbar {
            // overflow: visible;
            // margin-bottom: 0;
            .filter {
               border: 1px solid #e2e2e2;
               background: #fbfbfb;
               padding-right: 20px;
               min-height: 40px;
               box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);
               .sui-nav {
                  position: relative;
                  left: 0;
                  display: block;
                  float: left;
                  margin: 0 10px 0 0;
                  li {
                     float: left;
                     line-height: 18px;
                     a {
                        display: block;
                        cursor: pointer;
                        padding: 11px 15px;
                     }
                     &.active {
                        a {
                           background: #e1251b;
                           color: #fff;
                        }
                     }
                  }
               }
            }
         }

         .goods-list {
            margin: 20px 0;
            ul {
               display: flex;
               flex-wrap: wrap;
               li {
                  height: 100%;
                  width: 20%;
                  margin-top: 10px;
                  line-height: 28px;
                  .list-wrap {
                     .p-img {
                        padding-left: 15px;
                        width: 215px;
                        height: 255px;
                        a {
                           img {
                              max-width: 100%;
                              height: auto;
                              vertical-align: middle;
                           }
                        }
                     }
                     .price {
                        padding-left: 15px;
                        font-size: 18px;
                        color: #c81623;
                        strong {
                           font-weight: 700;
                        }
                     }
                     .attr {
                        padding-left: 15px;
                        width: 85%;
                        overflow: hidden;
                        min-height: 38px;
                        line-height: 1.8;
                        margin-bottom: 8px;
                        cursor: pointer;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        a {
                           color: #333;
                        }
                     }
                     .commit {
                        padding-left: 15px;
                        font-size: 13px;
                        height: 22px;
                        color: #a7a7a7;
                        span {
                           font-weight: 700;
                           color: #646fb0;
                        }
                     }
                     .operate {
                        padding: 12px 15px;
                        .sui-btn {
                           display: inline-block;
                           padding: 2px 14px;
                           box-sizing: border-box;
                           font-size: 12px;
                           line-height: 18px;
                           text-align: center;
                           vertical-align: middle;
                           cursor: pointer;
                           margin-right: 15px;
                        }
                        .btn-bordered {
                           min-width: 85px;
                           border: 1px solid #8c8c8c;
                           color: #8c8c8c;
                           &:hover {
                              background: #666;
                              border: 1px solid #666;
                              color: #fff !important;
                              text-decoration: none;
                           }
                        }
                        .btn-danger {
                           border: 1px solid #e1251b;
                           color: #e1251b;
                           &:hover {
                              background: #e1251b;
                              color: #fff !important;
                              border: 1px solid #e1251b;
                              text-decoration: none;
                           }
                        }
                     }
                  }
               }
            }
         }
      }
   }
}
</style>