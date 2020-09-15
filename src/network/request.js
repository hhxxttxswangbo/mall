import axios from 'axios'

//视频145集25分始
export function request(config) {
  // 网络1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 5000
  })

  // 网络2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 网络3.发送真正的网络请求
  return instance(config)
}
