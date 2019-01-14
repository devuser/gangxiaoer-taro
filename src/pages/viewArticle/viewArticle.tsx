import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtNavBar } from 'taro-ui'
import marked from 'marked'
import { ViewArticleProps, ViewArticleState } from './viewArticle.interface'
import './viewArticle.scss'
// import {ArticleDetailInterface} from '../common/ts/common.interface';
import ViewArticleArea from '../../components/viewArticleArea/viewArticleArea'
// import ViewShareTokenArea from '../../components/viewShareTokenArea/viewShareTokenArea'
import ViewArticleFooter from '../../components/viewArticleFooter/viewArticleFooter'

@connect(({ viewArticle }) => ({
  ...viewArticle
}))

class ViewArticle extends Component<ViewArticleProps,
ViewArticleState> {
  config: Config = {
    navigationBarTitleText: '博雅塔'
  }
  constructor(props: ViewArticleProps) {
    super(props)
    this.state = {
      dummy: 'gangxiaoer-h5',
      shareToken: ''
    }
  }
  async getArticleShareToken() {
    const { shareToken } = this.state
    const token = ''
    console.log(`getArticleShareToken.shareToken: ${shareToken}`)
    await this
      .props
      .dispatch({
        type: 'viewArticle/getArticleShareToken',
        payload: {
          token: token,
          shareToken: shareToken
        }
      })
  }

  async getArticleDetail() {
    const { token, articleId } = this.props
    console.log(`getArticleDetail.articleId: ${articleId}`)
    await this
      .props
      .dispatch({
        type: 'viewArticle/getArticleDetail',
        payload: {
          token: token,
          articleId: articleId
        }
      })
  }

  async componentWillMount() {
    console.log('componentWillMount')
    console.log(this.$router.params)
    // 输出 { id: 2, type: 'test' }
    const shareToken = this.$router.params.shareToken
    console.log(`shareToken: ${shareToken}`)
    this.setState({
      shareToken: shareToken
    }, () => {
      this.getData()
    })
  }
  async getData() {
    await this.getArticleShareToken()
    await this.getArticleDetail()
  }
  componentDidMount() { }
  handleClick(e: any) {
    //
    console.log(e)
    Taro.redirectTo({ url: `/pages/index/index` })
  }
  render() {
    // const { shareToken, dummy } = this.state
    let { articleDetail } = this.props
    // const foo = (articleDetail : ArticleDetailInterface) => {   if
    // (articleDetail) {     return ( < View > <View>       {articleDetail.subject}
    //  </View> < View > {       articleDetail.content     } < /View>    < /View >)
    //  } }
    if (articleDetail && articleDetail.content){
      const htmlContent:string = marked(articleDetail.content)
      articleDetail.htmlContent = htmlContent
    }else{
      articleDetail = {htmlContent: '', ...articleDetail}
    }
    return (
      <View className='fx-viewArticle-wrap'>
        <AtNavBar
          onClickRgIconSt={this
            .handleClick
            .bind(this)}
          onClickRgIconNd={this
            .handleClick
            .bind(this)}
          onClickLeftIcon={this
            .handleClick
            .bind(this)}
          color='#000'
          title='博雅塔'
          leftText='返回'
          rightFirstIconType='bullet-list'
          rightSecondIconType='user'
        />
        <ViewArticleArea articleDetail={articleDetail} />
        < ViewArticleFooter articleDetail={
          articleDetail
        } />
      </View >
    )
  }
}

export default ViewArticle
