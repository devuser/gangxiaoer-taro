// import Taro from '@tarojs/taro';
import * as indexApi from './service'

export default {
  namespace: 'index',
  state: {
    data: [],
    dummy: 'gangxiaoer-h5',
    key: '72eed010c976e448971655b56fc2324e',
    v: '1.0'
  },

  effects: {
    * getLists ({
      payload
    }, { select, call, put }) {
      const { key, v } = yield select(state => state.index)
      const { error, result } = yield call(indexApi.getLists, {
        key,
        v,
        ...payload
      })
      console.log(`getLists.error: ${error}`)
      console.log(`getLists.result: ${result}`)

      if (!error) {
        yield put({
          type: 'updateState',
          payload: {
            data: result
          }
        })
      }
    },
    * getBannerList ({
      payload
    }, { select, call, put }) {
      const { dummy } = yield select(state => state.index)
      console.log(`getBannerList params: ${dummy}`)
      const { error, data } = yield call(indexApi.getBannerList, {
        dummy,
        ...payload
      })
      const banner = data
      console.log(`getBannerList.error: ${error}`)
      console.log(`getBannerList.data: ${data}`)
      console.log(`getBannerList.banner: ${banner}`)
      if (!error) {
        yield put({
          type: 'updateState',
          payload: {
            banner: banner
          }
        })
      }
    },
    * getArticleCategoryList ({
      payload
    }, { select, call, put }) {
      const { dummy } = yield select(state => state.index)
      const { error, data } = yield call(indexApi.getArticleCategoryList, {
        dummy,
        ...payload
      })
      const articleCategoryList = data
      console.log(`getArticleCategoryList.error: ${error}`)
      console.log(`getArticleCategoryList.data: ${data}`)
      console.log(`getArticleCategoryList.articleCategoryList: ${articleCategoryList}`)
      if (!error) {
        yield put({
          type: 'updateState',
          payload: {
            articleCategoryList: articleCategoryList
          }
        })
      }
    },
    * getArticleList ({
      payload
    }, { select, call, put }) {
      const { dummy } = yield select(state => state.index)
      // const token = console.log(`getArticleList params: ${token},
      // ${articleCategoryId}, ${pageindex}, ${pagelen}`)
      console.log(dummy)
      console.log(...payload)
      const { error, data } = yield call(indexApi.getArticleList, {
        ...payload
      })
      const articleList = data.data
      console.log(...payload)
      console.log(data)
      console.log(`getArticleList.error: ${error}`)
      console.log(`getArticleList.data.code: ${data.code}`)
      console.log(`getArticleList.articleList: ${articleList}`)
      console.log(articleList)
      if (!error) {
        yield put({
          type: 'updateState',
          payload: {
            articleList: articleList
          }
        })
      }
    },
    * articleShareTokenAdd ({
      payload
    }, { select, call, put }) {
      const { dummy } = yield select(state => state.index)
      // const token = console.log(`getArticleList params: ${token},
      // ${articleCategoryId}, ${pageindex}, ${pagelen}`)
      console.log(dummy)
      console.log(...payload)
      const { error, data } = yield call(indexApi.articleShareTokenAdd, {
        ...payload
      })

      console.log(...payload)
      console.log(data)
      const shareToken = data.shareToken
      console.log(`articleShareTokenAdd.shareToken: ${shareToken}`)
      // console.log(`articleShareTokenAdd.data.code: ${data.code}`)
      // console.log(`articleShareTokenAdd.articleList: ${articleList}`)
      console.log(shareToken)
      if (!error) {
        yield put({
          type: 'updateState',
          payload: {
            shareToken: shareToken
          }
        })
      }
    }
    /// /////////////////////////
  },
  reducers: {
    updateState (state, { payload: data }) {
      return {
        ...state,
        ...data
      }
    }
  }

}
