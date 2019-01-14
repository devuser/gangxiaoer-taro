import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { TagcellgroupProps, TagcellgroupState } from './tagcellgroup.interface'
import './tagcellgroup.scss'

class Tagcellgroup extends Component<TagcellgroupProps, TagcellgroupState > {
  constructor (props: TagcellgroupProps) {
    super(props)
    this.state = {}
  }
  static options = {
    addGlobalClass: true
  }
  static defaultProps:TagcellgroupProps = {}

  render () {
    return (
      <View className='fx-tagcellgroup-wrap'>

      </View>
    )
  }
}

export default Tagcellgroup
