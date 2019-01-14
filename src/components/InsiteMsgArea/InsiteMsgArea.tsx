import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { InsiteMsgAreaProps, InsiteMsgAreaState } from './InsiteMsgArea.interface'
import './InsiteMsgArea.scss'

class InsiteMsgArea extends Component<InsiteMsgAreaProps, InsiteMsgAreaState > {
  constructor (props: InsiteMsgAreaProps) {
    super(props)
    this.state = {}
  }
  static options = {
    addGlobalClass: true
  }
  static defaultProps:InsiteMsgAreaProps = {}

  render () {
    return (
      <View className='fx-InsiteMsgArea-wrap'>

      </View>
    )
  }
}

export default InsiteMsgArea
