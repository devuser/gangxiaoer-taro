import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { MyProps, MyState } from './my.interface'
import './my.scss'
// import {  } from '../../components'

// @connect(({ my }) => ({
//     ...my,
// }))

class My extends Component<MyProps, MyState > {
  config:Config = {
    navigationBarTitleText: '标题'
  }
  constructor (props: MyProps) {
    super(props)
    this.state = {}
  }

  componentDidMount () {

  }

  render () {
    return (
      <View className='fx-my-wrap'>

      </View>
    )
  }
}

export default My
