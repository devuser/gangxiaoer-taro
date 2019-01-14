import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { EditAddrProps, EditAddrState } from './editAddr.interface'
import './editAddr.scss'
// import {  } from '../../components'

// @connect(({ editAddr }) => ({
//     ...editAddr,
// }))

class EditAddr extends Component<EditAddrProps, EditAddrState > {
  config:Config = {
    navigationBarTitleText: '标题'
  }
  constructor (props: EditAddrProps) {
    super(props)
    this.state = {}
  }

  componentDidMount () {

  }

  render () {
    return (
      <View className='fx-editAddr-wrap'>

      </View>
    )
  }
}

export default EditAddr
