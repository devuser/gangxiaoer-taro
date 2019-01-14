import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { GswiperProps, GswiperState } from './gswiper.interface'
import './gswiper.scss'

class Gswiper extends Component<GswiperProps, GswiperState > {
  constructor (props: GswiperProps) {
    super(props)
    this.state = {}
  }
  static options = {
    addGlobalClass: true
  }
  static defaultProps:GswiperProps = {}

  render () {
    return (
      <View className='fx-gswiper-wrap'>

      </View>
    )
  }
}

export default Gswiper
