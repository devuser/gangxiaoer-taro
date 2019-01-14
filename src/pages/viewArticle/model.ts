import * as viewArticleApi from './service'

export default {
  namespace: 'viewArticle',
  state: {
    data: [],
    dummy: 'gangxiaoer-h5',
    key: '72eed010c976e448971655b56fc2324e',
    v: '1.0'
  },

  effects: {
    * getArticleShareToken ({ payload }, { select, call, put }) {
      console.log('viewArticle..............')
      const { dummy }= yield select(state => state.viewArticle)
      // const token = console.log(`getArticleList params: ${token},
      // ${articleCategoryId}, ${pageindex}, ${pagelen}`)
      console.log(`getArticleShareToken.dummy: ${dummy}`)
      console.log(...payload)
      const { error, data } = yield call(viewArticleApi.getArticleShareToken, {
        ...payload
      })

      console.log(...payload)
      console.log(`getArticleShareToken.data: ${data}`)
      console.log(data)
      const { channel, articleId } = data
      console.log(`getArticleShareToken.articleId: ${articleId}`)
      console.log(`getArticleShareToken.channel: ${channel}`)
      // console.log(`getArticleShareToken.articleList: ${articleList}`)
      if (!error) {
        yield put({
          type: 'updateState',
          payload: {
            channel: channel,
            articleId: articleId
          }
        })
      }
    },
    * getArticleDetail ({
      payload
    }, { select, call, put }) {
      const { dummy } = yield select(state => state.viewArticle)
      // const token = console.log(`getArticleList params: ${token},
      // ${articleCategoryId}, ${pageindex}, ${pagelen}`)
      console.log(dummy)
      console.log(...payload)
      const { error, data } = yield call(viewArticleApi.getArticleDetail, {
        ...payload
      })

      console.log(...payload)
      console.log(data)
      const articleDetail = data

      console.log(`getArticleDetail.articleDetail: ${articleDetail}`)
      // console.log(`getArticleDetail.articleList: ${articleList}`)
      if (!error) {
        yield put({
          type: 'updateState',
          payload: {
            articleDetail: articleDetail
          }
        })
      }
    }

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
