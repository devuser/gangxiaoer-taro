import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { SearchArticleProps, SearchArticleState } from './searchArticle.interface'
import './searchArticle.scss'
// import {  } from '../../components'

// @connect(({ searchArticle }) => ({
//     ...searchArticle,
// }))

class SearchArticle extends Component<SearchArticleProps, SearchArticleState > {
  config:Config = {
    navigationBarTitleText: '标题'
  }
  constructor (props: SearchArticleProps) {
    super(props)
    this.state = {}
  }

  componentDidMount () {

  }

  render () {
    return (
      <View className='fx-searchArticle-wrap'>

      </View>
    )
  }
}

export default SearchArticle
