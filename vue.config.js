const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  devServer: {
    open: false,
    port: 9090,
    host: 'localhost',
    https: false,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_CROSS_API,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
})
