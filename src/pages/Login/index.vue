<template>
  <div class="login-container">
      <div class="login-wrap">
         <div class="login">
            <div class="loginform">
               <ul class="tab clearFix">
                  <li>
                     <a href="#" style="border-right: 0px;">扫描登录</a>
                  </li>
                  <li>
                     <a href="#" class="current">账户登录</a>
                  </li>
               </ul>
               <div class="content">
                  <form action="#">
                     <div class="input-text clearFix">
                        <span></span>
                        <input type="text" placeholder="邮箱/用户名/手机号">
                     </div>
                     <div class="input-text clearFix">
                        <span class="pwd"></span>
                        <input type="password" placeholder="请输入密码">
                     </div>
                     <div class="setting clearFix">
                        <label class="checkbox">
                           <input type="checkbox" name="m1" value="2" checked>
                           自动登录
                        </label>
                        <span class="forget">忘记密码？</span>
                     </div>
                     <button class="btn">登&nbsp;&nbsp;录</button>
                  </form>
                  <div class="call clearFix">
                     <ul>
                        <li><img src="./images/qq.png"></li>
                        <li><img src="./images/sina.png"></li>
                        <li><img src="./images/ali.png"></li>
                        <li><img src="./images/weixin.png"></li>
                     </ul>
                     <a href="/register" class="register">立即注册</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="copyright">
         <ul>
            <li>关于我们</li>
            <li>关于我们</li>
            <li>关于我们</li>
            <li>关于我们</li>
            <li>关于我们</li>
            <li>关于我们</li>
            <li>关于我们</li>
            <li>关于我们</li>
         </ul>
         <div class="adress">地址：北京市昌平区宏福科技园综合楼6层</div>
         <div class="beian">京ICP备19006430号</div>
      </div>
  </div>
</template>

<script>
export default {
   name: 'Login'
}
</script>

<style lang='less' scoped>
.login-container {
   .login-wrap {
      height: 487px;
      background-color: #e93854;
      .login {
         width: 1200px;
         height: 487px;
         margin: 0 auto;
         background: url('./images/loginbg.png') no-repeat;
         .loginform {
            width: 420px;
            height: 406px;
            background: #fff;
            float: right;
            padding: 20px;
            position: relative;
            top: 45px;
            box-sizing: border-box;
            .tab {
               li {
                  float: left;
                  width: 50%;
                  text-align: center;
                  a {
                     width: 100%;
                     display: block;
                     height: 50px;
                     font-weight: 700;
                     border: 1px solid #ddd;
                     font-size: 20px;
                     line-height: 50px;
                     color: #333;
                     text-decoration: none;
                     box-sizing: border-box;
                  }
                  .current {
                     border-bottom: none;
                     border-top: 1px solid #28a3ef;
                     color: #e1251b;
                  }
               }
            }
            .content {
               width: 380px;
               height: 316px;
               border: 1px solid #ddd;
               border-top: none;
               padding: 18px;
               box-sizing: border-box;
               form {
                  margin: 15px 0 18px;
                  font-size: 12px;
                  line-height: 18px;
                  .input-text {
                     margin-bottom: 16px;
                     span {
                        float: left;
                        width: 37px;
                        height: 32px;
                        border: 1px solid #ccc;
                        background: url('~@/assets/images/icons.png') no-repeat -10px -201px;
                        box-sizing: border-box;
                        border-radius: 2px 0 0 2px;
                     }
                     input {
                        width: 302px;
                        height: 32px;
                        float: left;
                        box-sizing: border-box;
                        border: 1px solid #ccc;
                        border-left: none;
                        padding: 6px 8px 6px 8px;
                        font-size: 14px;
                        line-height: 22px;
                        border-radius: 0 2px 2px 0;
                        outline: none;
                     }
                     .pwd {
                        background-position: -72px -201px;
                     }
                  }
                  .setting {
                     label {
                        float: left;
                     }
                     .forget {
                        float: right;
                     }
                  }
                  .btn {
                     background-color: #e1251b;
                     width: 100%;
                     height: 36px;
                     padding: 6px;
                     margin-top: 25px;
                     border: 1px solid #e1251b;
                     outline: none;
                     font-size: 16px;
                     color: #fff;
                     word-spacing: 4px;
                  }
               }
               .call {
                  margin-top: 30px;
                  ul {
                     float: left;
                     li {
                        float: left;
                        margin-right: 5px;
                     }
                  }
                  .register {
                     float: right;
                     line-height: 38px;
                     font-size: 15px;
                  }
               }
            }
         }
      }
   }

   .copyright {
      width: 1200px;
      margin: 0 auto;
      text-align: center;
      line-height: 24px;
      ul {
         li {
            display: inline-block;
            padding: 0 20px;
            border-right: 1px solid #e4e4e4;
            margin: 15px 0;
         }
      }
   }
}
</style>