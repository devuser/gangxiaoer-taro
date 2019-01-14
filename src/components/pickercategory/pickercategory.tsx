import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { PickercategoryProps, PickercategoryState } from './pickercategory.interface'
import './pickercategory.scss'

class Pickercategory extends Component<PickercategoryProps, PickercategoryState > {
  constructor (props: PickercategoryProps) {
    super(props)
    this.state = {}
  }
  static options = {
    addGlobalClass: true
  }
  static defaultProps:PickercategoryProps = {}

  render () {
    return (
      <View className='fx-pickercategory-wrap'>

      </View>
    )
  }
}

export default Pickercategory
