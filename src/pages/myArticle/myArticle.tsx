import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { MyArticleProps, MyArticleState } from './myArticle.interface'
import './myArticle.scss'
// import {  } from '../../components'

// @connect(({ myArticle }) => ({
//     ...myArticle,
// }))

class MyArticle extends Component<MyArticleProps, MyArticleState > {
  config:Config = {
    navigationBarTitleText: '标题'
  }
  constructor (props: MyArticleProps) {
    super(props)
    this.state = {}
  }

  componentDidMount () {

  }

  render () {
    return (
      <View className='fx-myArticle-wrap'>

      </View>
    )
  }
}

export default MyArticle
