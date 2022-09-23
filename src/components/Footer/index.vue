<template>
  <div class="footer">
      <div class="footer-container">
        <div class="footerList">
          <div class="footerItem">
            <h4>购物指南</h4>
            <ul class="footerItemCon">
              <li>购物流程</li>
              <li>会员介绍</li>
              <li>生活旅行/团购</li>
              <li>常见问题</li>
              <li>购物指南</li>
            </ul>
          </div>
          <div class="footerItem">
            <h4>配送方式</h4>
            <ul class="footerItemCon">
              <li>购物流程</li>
              <li>会员介绍</li>
              <li>生活旅行/团购</li>
              <li>常见问题</li>
              <li>购物指南</li>
            </ul>
          </div>
          <div class="footerItem">
            <h4>购物指南</h4>
            <ul class="footerItemCon">
              <li>购物流程</li>
              <li>会员介绍</li>
              <li>生活旅行/团购</li>
              <li>常见问题</li>
              <li>购物指南</li>
            </ul>
          </div>
          <div class="footerItem">
            <h4>购物指南</h4>
            <ul class="footerItemCon">
              <li>购物流程</li>
              <li>会员介绍</li>
              <li>生活旅行/团购</li>
              <li>常见问题</li>
              <li>购物指南</li>
            </ul>
          </div>
          <div class="footerItem">
            <h4>购物指南</h4>
            <ul class="footerItemCon">
              <li>购物流程</li>
              <li>会员介绍</li>
              <li>生活旅行/团购</li>
              <li>常见问题</li>
              <li>购物指南</li>
            </ul>
          </div>
          <div class="footerItem">
            <h4>帮助中心</h4>
            <img src="./images/wx_cz.jpg">
          </div>
        </div>
        <div class="copyright">
          <ul class="helpLink">
            <li>
              关于我们
              <span class="space"></span>
            </li>
            <li>
              关于我们
              <span class="space"></span>
            </li>
            <li>
              关于我们
              <span class="space"></span>
            </li>
            <li>
              关于我们
              <span class="space"></span>
            </li>
            <li>
              关于我们
              <span class="space"></span>
            </li>
            <li>
              关于我们
              <span class="space"></span>
            </li>
            <li>
              关于我们
              <span class="space"></span>
            </li>
            <li>
              关于我们
              <span class="space"></span>
            </li>
            <li>
              关于我们
              <span class="space"></span>
            </li>
            <li>关于我们</li>
          </ul>
          <p>地址：北京市昌平区宏福科技园综合楼6层</p>
          <p>京ICP备19006430号</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
   name: 'Footer',
}
</script>

<style lang="less" scoped>
.footer {
  background-color: #eaeaea;
  .footer-container {
    width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    .footerList {
      border-top: 1px solid #e4e1e1;
      border-bottom: 1px solid #e4e1e1;
      padding: 20px;
      padding-left: 40px;
      overflow: hidden;
      .footerItem {
        float: left;
        width: 16.6666667%;
        h4 {
          font-size: 14px;
        }
        .footerItemCon {
          li {
            line-height: 18px;
          }
        }
        &:last-child img {
          width: 121px;
        }
      }
    }

    .copyright {
      padding: 20px;
      .helpLink {
        text-align: center;
        li {
          display: inline;
          .space {
            width: 1px;
            color: #666;
            height: 13px;
            border-left: 1px solid #666;
            margin: 8px 10px;
          }
        }
      }
      p {
        text-align: center;
        margin: 10px 0;
      }
    }
  }
}
</style>