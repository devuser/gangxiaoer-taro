import Api from '../../utils/request'

// export const testApi = (data:any) => Api.test(
//   data
// )
//
export const getArticleShareToken = (data) => {
  return Api.getArticleShareToken(data)
}
export const getArticleDetail = (data) => {
  return Api.getArticleDetail(data)
}
