import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ArticleButtonAreaProps, ArticleButtonAreaState } from './ArticleButtonArea.interface'
import './ArticleButtonArea.scss'

class ArticleButtonArea extends Component<ArticleButtonAreaProps, ArticleButtonAreaState > {
  constructor (props: ArticleButtonAreaProps) {
    super(props)
    this.state = {}
  }
  static options = {
    addGlobalClass: true
  }
  static defaultProps:ArticleButtonAreaProps = {}

  render () {
    return (
      <View className='fx-ArticleButtonArea-wrap'>

      </View>
    )
  }
}

export default ArticleButtonArea
