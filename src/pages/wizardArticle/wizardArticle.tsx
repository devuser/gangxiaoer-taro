import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
import { connect } from '@tarojs/redux'
// import Tips from '../../utils/tips'
import { WizardArticleProps, WizardArticleState } from './wizardArticle.interface'
import './wizardArticle.scss'
// import {  } from '../../components'
// import { ArticleDetailInterface } from '../common/ts/common.interface';

// @connect(({ wizardArticle }) => ({
//     ...wizardArticle,
// }))

@connect(({ wizardArticle }) => ({
  ...wizardArticle
}))

class WizardArticle extends Component<WizardArticleProps, WizardArticleState > {
  config:Config = {
    navigationBarTitleText: '标题'
  }
  constructor (props: WizardArticleProps) {
    super(props)
    this.state = {
      article: {}
    }
  }

  componentDidMount () {

  }

  render () {
    const { article } = this.state
    return (
      <View className='fx-wizardArticle-wrap'>
        <View > {
          article.subject
        } </View>
        <View>{
          article.content
        } </View>
      </View>
    )
  }
}

export default WizardArticle
