import Taro, { Component, Config } from '@tarojs/taro'
import { Swiper, Image, SwiperItem, View, ScrollView } from '@tarojs/components'
// Text
import { connect } from '@tarojs/redux'
import { AtTabBar } from 'taro-ui'
// import Api from '../../utils/request' import Tips from '../../utils/tips'
import { IndexProps, IndexState } from './index.interface'

// import { TabItem } from 'taro-ui/@types/tab-bar' AtButton
import './index.scss'
import { TabItem } from 'taro-ui/@types/tab-bar'
import ViewArticleFooter from '../../components/viewArticleFooter/viewArticleFooter';
// import { element } from 'prop-types'TabItem import {  } from
import {  ArticleInterface } from '../common/ts/common.interface';
// '../../components'

@connect(({ index }) => ({
  ...index
}))

class Index extends Component<IndexProps,
IndexState> {
  config: Config = {
    navigationBarTitleText: '博雅塔-首页',
    usingComponents: {
      // 'van-row': '/static/vant/di/index', 'van-col': '/static/vant/dist/col/index',
      // 'wxs': '../../components/vant-weapp/wxs/utils', 
      // 'van-action-sheet':
      // '/components/vant/action-sheet/index', 'van-cell-group':
      // '/components/vant/cell-group/index', 'van-area':
      // '/components/vant/area/index', 'van-field': '/components/vant/field/index',
      'van-button' : '../../components/vant-weapp/button/index',
      'van-panel' : '../../components/vant-weapp/panel/index'
      // 'van-tabbar':
      // '/components/vant/tabbar/index', 'van-card': '/components/vant/card/index',
      // 'van-tabbar-item': '/components/vant/tabbar-item/index'
    }
  }
  constructor(props: IndexProps) {
    super(props)
    this.state = {
      month: 0,
      day: 0,
      dummy: 'gangxiaoer-h5',
      currentCategoryTabId: 0,
      pageindex: 1,
      pagelen: 10,
      token: ''
    }
  }

  // static options = {
  //   addGlobalClass: true
  // }
  static defaultProps: IndexProps = {
    articleCategoryList: [],
    articleList: [],
    shareToken: ''
  }

  // 获取今日数据
  async getData(month: number, day: number) {
    await this
      .props
      .dispatch({
        type: 'index/getLists',
        payload: {
          month: month,
          day: day
        }
      })
  }
  async getBannerList() {
    await this
      .props
      .dispatch({ type: 'index/getBannerList', payload: {} })
  }
  async getArticleCategoryList() {
    await this
      .props
      .dispatch({ type: 'index/getArticleCategoryList', payload: {} })
  }
  async getArticleList() {
    const { token, pagelen, pageindex, currentCategoryTabId } = this.state
    const { articleCategoryList } = this.props
    let articleCategoryId = 1
    if (articleCategoryList !== undefined) {
      const articleCategory = articleCategoryList[currentCategoryTabId]
      articleCategoryId = articleCategory.id
    }
    await this
      .props
      .dispatch({
        type: 'index/getArticleList',
        payload: {
          'articleCategoryId': articleCategoryId,
          'pageindex': pageindex,
          'pagelen': pagelen,
          'token': token
        }
      })
  }
  // 获取系统当前时间并请求参数
  getDate() {
    const myDate = new Date()
    const m = myDate.getMonth() + 1
    const d = myDate.getDate()
    this.setState({ month: m, day: d })
    this.getData(m, d)
  }

  componentDidMount() {
    // this.getDate()
    this.getBannerList()
    this.getArticleCategoryList()

    this.getArticleList()
  }
  onChange() { }
  onClick() { }

  onChangeTabbar(e: any) {
    console.log(e)
    this.setState({ currentCategoryTabId: e },
      () => {
        this.getArticleList()
      })
  }
  /**
 *
 * @param id
 */
  async onViewArticleBtnClick(articleId: number) {
    console.log(`onViewArticleBtnClick.articleId: ${articleId}`)
    await this.props.dispatch({
      type: 'index/articleShareTokenAdd',
      payload: {
        channel: 'gangxiaoer-h5',
        articleId: articleId,
        shareOpenId: '',
        token: ''
      }
    })
    const { shareToken } = this.props
    console.log(`onViewArticleBtnClick.shareToken: ${shareToken}`)
    Taro.redirectTo({ url: `/pages/viewArticle/viewArticle?shareToken=${shareToken}` })
  }
onVantBtnClick(e:any){
  console.log(e)
}
  render() {
    const { currentCategoryTabId } = this.state
    const { data, banner, articleList, articleCategoryList } = this.props
    console.log(`data: ${data}`)
    console.log(`banner: ${banner}`)
    console.log(`articleList: ${articleList}`)
    const tabList: Array<TabItem> = articleCategoryList && articleCategoryList.map((category) => {
      return { title: category.categorycn }
    })
    console.log(`tabList: ${tabList}`)
    console.log(tabList)
    return (
      <View className='fx-index-wrap'>

        <Swiper
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay
        >
          {banner && banner.map((item, index) => {
            console.log(item.picUrl)
            return (
              <SwiperItem key={index}>
                <View key={index}>
                  <Image key={index} src={item.picUrl} className='index-banner' />
                </View>
              </SwiperItem>
            )
          })
          }
        </Swiper>

        < AtTabBar tabList={
          tabList
        }
          current={
            currentCategoryTabId
          }
          onClick={
            this
              .onChangeTabbar
              .bind(this)
          } > </AtTabBar>
        <van-button type="primary" size='small' onclick={this.onVantBtnClick.bind(this)}>
        纯粹为测试Vant-weapp，点击控制台输出日志
        </van-button>
        <ScrollView scrollY scrollX={false} className="index">
          {articleList && articleList.map((article:ArticleInterface, articleIndex:number) => {
            console.log(articleIndex)
            console.log(article.subject)
            console.log(article)
            return (
              <View
                key={articleIndex}
                onClick={this
                  .onViewArticleBtnClick
                  .bind(this, article.id)}
                className="at-row index-card"
              >
                <View className='at-row'>
                  <View className='at-col at-col-3'>
                    < Image src={article.mainimage}
                      className="index-thumb" />
                  </View>
                  < View className='at-col at-col-9'>
                      < View className = 'at-row index-card-title' >
                      <View className='at-col at-col-9 index-card-title' >
                        {article.subject}
                      </View>
                    </View>
                    <ViewArticleFooter articleDetail={article}/>

                  </View>
                  <View className='at-row index-divLine' > 
                    <View className='at-col-12'>&nbsp;
                    </View>
                  </View>
                </View>
              </View>
            )
          })}
        </ScrollView>

      </View>
    )
  }
}

export default Index
