import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    if (response.data.code === 200) {
      return response.data.data
    }
    // _showErrorMessage(response.data.code, response.data.msg)
  },
  function (error) {
    console.log('2')
    return Promise.reject(error)
  }
)

// 错误消息提示
// const _showErrorMessage = (code, msg) => {
//   const message = exceptionMessage[code] || msg || '未知错误'
//   Message({ message, type: 'error' })
// }

const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return instance(options)
}
export default request