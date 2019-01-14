import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ViewAddrListAreaProps, ViewAddrListAreaState } from './viewAddrListArea.interface'
import './viewAddrListArea.scss'

class ViewAddrListArea extends Component<ViewAddrListAreaProps, ViewAddrListAreaState > {
  constructor (props: ViewAddrListAreaProps) {
    super(props)
    this.state = {}
  }
  static options = {
    addGlobalClass: true
  }
  static defaultProps:ViewAddrListAreaProps = {}

  render () {
    return (
      <View className='fx-viewAddrListArea-wrap'>

      </View>
    )
  }
}

export default ViewAddrListArea
