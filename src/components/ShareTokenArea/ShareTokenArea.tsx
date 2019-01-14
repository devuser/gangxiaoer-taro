import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ShareTokenAreaProps, ShareTokenAreaState } from './ShareTokenArea.interface'
import './ShareTokenArea.scss'

class ShareTokenArea extends Component<ShareTokenAreaProps, ShareTokenAreaState > {
  constructor (props: ShareTokenAreaProps) {
    super(props)
    this.state = {}
  }
  static options = {
    addGlobalClass: true
  }
  static defaultProps:ShareTokenAreaProps = {}

  render () {
    return (
      <View className='fx-ShareTokenArea-wrap'>

      </View>
    )
  }
}

export default ShareTokenArea
