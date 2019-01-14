import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { ViewAddrListProps, ViewAddrListState } from './viewAddrList.interface'
import './viewAddrList.scss'
// import {  } from '../../components'

// @connect(({ viewAddrList }) => ({
//     ...viewAddrList,
// }))

class ViewAddrList extends Component<ViewAddrListProps, ViewAddrListState > {
  config:Config = {
    navigationBarTitleText: '标题'
  }
  constructor (props: ViewAddrListProps) {
    super(props)
    this.state = {}
  }

  componentDidMount () {

  }

  render () {
    return (
      <View className='fx-viewAddrList-wrap'>

      </View>
    )
  }
}

export default ViewAddrList
