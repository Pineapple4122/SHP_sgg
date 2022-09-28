<template>
  <div class="register-container">
   <div class="register">
      <h3>
         注册新用户
         <span class="go">
            我有账号，去
            <a href="login.html" target="_blank">登录</a>
         </span>
      </h3>
      <div class="content">
         <label for="">手机号:</label>
         <input type="text" placeholder="请输入你的手机号" name="phone">
         <span class="error-msg"></span>
      </div>
      <div class="content">
         <label for="">手机号:</label>
         <input type="text" placeholder="请输入你的手机号" name="phone">
         <button>发送验证码</button>
         <span class="error-msg"></span>
      </div>
      <div class="content">
         <label for="">手机号:</label>
         <input type="text" placeholder="请输入你的手机号" name="phone">
         <span class="error-msg"></span>
      </div>
      <div class="content">
         <label for="">手机号:</label>
         <input type="text" placeholder="请输入你的手机号" name="phone">
         <span class="error-msg"></span>
      </div>
      <div class="controls">
         <input type="checkbox" name="agree">
         <span>同意协议并注册《尚品汇用户协议》</span>
         <span class="error-msg"></span>
      </div>
      <div class="btn">
         <button>完成注册</button>
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
   name: 'Register',
}
</script>

<style lang="less" scoped>
.register-container {
   .register {
      width: 1200px;
      margin: 0 auto;
      height: 445px;
      border: 1px solid #dfdfdf;
      h3 {
         padding: 6px 15px;
         margin: 0;
         background: #ececec;
         border-bottom: 1px solid #dfdfdf;
         font-size: 20px;
         line-height: 30px;
         color: #333;
         .go {
            float: right;
            font-size: 14px;
            a {
               color: #e1251b;
            }
         }
      }

      div:nth-of-type(1) {
         margin-top: 40px;
      }
      .content {
         padding-left: 390px;
         margin-bottom: 18px;
         position: relative;
         label {
            text-align: right;
            width: 96px;
            font-size: 14px;
            display: inline-block;
         }
         input {
            width: 270px;
            height: 38px;
            box-sizing: border-box;
            padding-left: 8px;
            margin-left: 5px;
            outline: none;
            border: 1px solid #999;
         }
         .error-msg {
            position: absolute;
            top: 100%;
            padding-left: 495px;
            color: red;
         }
      }
      .controls {
         text-align: center;
         position: relative;
         input {
            vertical-align: middle;
         }
         .error-msg {
            position: absolute;
            top: 100%;
            left: 495px;
            color: red;
         }
      }
      .btn {
         text-align: center;
         line-height: 36px;
         margin: 17px 0 0 55px;
         button {
            outline: none;
            width: 270px;
            height: 36px;
            background: #e1251b;
            color: #fff !important;
            display: inline-block;
            font-size: 16px;
            border: 1px solid #e1251b;
         }
      }
   }
   .copyright {
      width: 1200px;
      margin: 0 auto;
      text-align: center;
      line-height: 24px;
      li {
         display: inline-block;
         border-right: 1px solid #e4e4e4;
         padding: 0 20px;
         margin: 15px 0; 
      }
   }
}
</style>