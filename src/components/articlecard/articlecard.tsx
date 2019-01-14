import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ArticlecardProps, ArticlecardState } from './articlecard.interface'
import './articlecard.scss'

class Articlecard extends Component<ArticlecardProps, ArticlecardState > {
  constructor (props: ArticlecardProps) {
    super(props)
    this.state = {}
  }
  static options = {
    addGlobalClass: true
  }
  static defaultProps:ArticlecardProps = {}

  render () {
    return (
      <View className='fx-articlecard-wrap'>

      </View>
    )
  }
}

export default Articlecard
