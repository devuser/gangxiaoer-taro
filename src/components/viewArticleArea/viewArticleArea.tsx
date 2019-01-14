import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { ViewArticleAreaProps, ViewArticleAreaState } from './viewArticleArea.interface'
import './ViewArticleArea.scss'
// import ParseComponent from '../wxParseComponent/wxParseComponent'

// import {ArticleDetailInterface} from
// '../../pages/common/ts/common.interface';

class ViewArticleArea extends Component<ViewArticleAreaProps,
  ViewArticleAreaState> {
  constructor(props: ViewArticleAreaProps) {
    super(props)
    this.state = {
      //
    }
  }
  static options = {
    addGlobalClass: true
  }
  // static defaultProps : ViewArticleAreaProps = {   articleDetail:
  // <ArticleDetailInterface>{} }

  render() {
    const { articleDetail } = this.props
    
    return (
      <View className='fx-viewArticleArea-wrap'>
        <View className='at-row'>
          <View className='at-col at-col-12'>
            {articleDetail.subject}
          </View>
        </View>
        <View className='at-row'>
          <View className='fx-index-banner'>
            <Image src={articleDetail.mainimage} mode='widthFix' />
          </View>
        </View>
        < View className='at-row' >
          <View className='at-col at-col-4'>发布</View >
          <View className='at-col at-col-8'>{articleDetail.dateAdd}</View >
        </View>
        <View className='fx-index'>
        </View>
      </View>
    )
  }
}

export default ViewArticleArea
