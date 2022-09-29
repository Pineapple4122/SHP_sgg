module.exports = {
   lintOnSave: false, //关闭eslint校验工具
   devServer: {
      proxy: {
         '/api': {
            target: 'http://gmall-h5-api.atguigu.cn'
         }
      }
   }
}