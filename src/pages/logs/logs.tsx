import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { LogsProps, LogsState } from './logs.interface'
import './logs.scss'
// import {  } from '../../components'

// @connect(({ logs }) => ({
//     ...logs,
// }))

class Logs extends Component<LogsProps, LogsState > {
  config:Config = {
    navigationBarTitleText: '标题'
  }
  constructor (props: LogsProps) {
    super(props)
    this.state = {}
  }

  componentDidMount () {

  }

  render () {
    return (
      <View className='fx-logs-wrap'>

      </View>
    )
  }
}

export default Logs
