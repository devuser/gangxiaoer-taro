/**
 * 项目配置文件
 */

/**
 * 线上环境
 */
const ONLINEHOST = 'http://api.juheapi.com'
// 配置请求基地址
// const host = 'https://coms.boyosoft.net/gangxiaoer/gapi/v2'
const ONLINEBOYOCOMSHOST ='https://coms.boyosoft.net/gangxiaoer/gapi/v2'
// const ONLINEBOYOCOMSHOST = 'http://127.0.0.1:39090/boyocoms/gangxiaoer/gapi/v2'
// request.config.timeout = 10 * 1000
// request.config.baseURL = host

/**
 * 测试环境
 */
export const QAHOST = 'http://xxx.cn'

/**
 * 线上mock
 */
export const MOCKHOST = 'http://xxx/mock'

/**
 * 是否mock
 */
export const ISMOCK = false

/**
 * 当前的host  ONLINEHOST | QAHOST | MOCKHOST
 */
export const MAINHOST = ONLINEHOST
export const BOYOCOMSHOST = ONLINEBOYOCOMSHOST
/**
 * 全局的分享信息 不用每一个都去写
 */
export const SHAREINFO = {
  'title': '分享标题',
  'path': '路径',
  'imageUrl': '图片'
}
