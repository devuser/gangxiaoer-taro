import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ArticleuserbrefProps, ArticleuserbrefState } from './articleuserbref.interface'
import './articleuserbref.scss'

class Articleuserbref extends Component<ArticleuserbrefProps, ArticleuserbrefState > {
  constructor (props: ArticleuserbrefProps) {
    super(props)
    this.state = {}
  }
  static options = {
    addGlobalClass: true
  }
  static defaultProps:ArticleuserbrefProps = {}

  render () {
    return (
      <View className='fx-articleuserbref-wrap'>

      </View>
    )
  }
}

export default Articleuserbref
