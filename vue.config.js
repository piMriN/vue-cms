const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: false,
    port: 9090,
    proxy: {
      //进行代理转发
      [process.env.VUE_APP_BASE_API]: {
        // 转发的网址
        target: process.env.VUE_APP_CROSS_API,
        // 是否开启本地代理 默认true
        changeOrigin: true,
        // 重要点
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/common.scss";'
      }
    }
  }
})
