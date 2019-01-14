import Api from '../../utils/request'

export const getLists = data => {
  return Api.getLists(data)
}
export const getBannerList = data => {
  return Api.getBannerList(data)
}
export const getArticleCategoryList = data => {
  return Api.getArticleCategoryList(data)
}

export const getArticleList = data => {
  return Api.getArticleList(data)
}
export const articleShareTokenAdd = data => {
  return Api.articleShareTokenAdd(data)
}
