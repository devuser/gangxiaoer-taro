import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { DashboardProps, DashboardState } from './dashboard.interface'
import './dashboard.scss'
// import {  } from '../../components'

// @connect(({ dashboard }) => ({
//     ...dashboard,
// }))

class Dashboard extends Component<DashboardProps, DashboardState > {
  config:Config = {
    navigationBarTitleText: '标题'
  }
  constructor (props: DashboardProps) {
    super(props)
    this.state = {}
  }

  componentDidMount () {

  }

  render () {
    return (
      <View className='fx-dashboard-wrap'>

      </View>
    )
  }
}

export default Dashboard
