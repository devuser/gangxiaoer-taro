import index from '../pages/index/config' // index接口

/**
 * 请求的公共参数
 */
export const commonParame = {}
// 后端是否支持json格式 const contentType = 'application/x-www-form-urlencoded'
const contentType = 'application/json'
// ; charset = utf - 8
/**
 * 请求映射文件
 */

export const requestConfig = {
  loginUrl: '/api/user/wechat-auth', // 微信登录接口
  getBannerList: {
    url: '/banner/list', // Banner接口
    method: 'GET',
    dataType: 'json'
  },

  getArticleCategoryList: {
    url: '/articlecategory/list',
    method: 'GET',
    dataType: 'json',
    mode: 'cors',
    cache: 'no-cache'
  },

  getArticleList: {
    url: '/article/list',
    method: 'POST',
    dataType: 'json',
    mode: 'cors',
    cache: 'no-cache',
    // responseType:'text',
    header: {
      'content-type': contentType
    }
  },
  articleShareTokenAdd: {
    url: '/article/sharetoken/add',
    method: 'POST',
    dataType: 'json',
    mode: 'cors',
    cache: 'no-cache',
    // responseType:'text',
    header: {
      'content-type': contentType
    }
    // 参数集合  'channel': 'wxappView', 'articleId': articleId, 'shareOpenId': openId,
    // 'token': token
  },
  getArticleShareToken: {
    url: '/article/sharetoken/get',
    method: 'POST',
    dataType: 'json',
    mode: 'cors',
    cache: 'no-cache',
    // responseType:'text',
    header: {
      'content-type': contentType
    }
    // 参数集合  'channel': 'wxappView', 'articleId': articleId, 'shareOpenId': openId,
    // 'token': token
  },
  getArticleDetail: {
    url: '/article/detail',
    method: 'POST',
    dataType: 'json',
    mode: 'cors',
    cache: 'no-cache',
    header: {
      'content-type': contentType
    }
    // data : {   'token': token,   'articleId': Number(articleId) },

  },
  ...index
}

// console.log('before getData') console.log(this.$http) const res = await
// this.$http.request({   method: 'get',   url: '/articlecategory/list',   body:
// {} }) let _categoryList = [] const categoryMap = {}
// res.data.forEach((category) => {   let foo = {     'articleCategoryId':
// category.id,     'categorycn': category.categorycn   }
// _categoryList.push(foo)   categoryMap[foo.articleCategoryId] = foo })
// wx.setStorageSync('categoryList', JSON.stringify(_categoryList))
