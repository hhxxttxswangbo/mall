//网络4.导入request
import { request } from './request'

//网络5.导出getHomeMultidata
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}