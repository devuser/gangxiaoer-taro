import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { LoginProps, LoginState } from './login.interface'
import './login.scss'
// import {  } from '../../components'

// @connect(({ login }) => ({
//     ...login,
// }))

class Login extends Component<LoginProps, LoginState > {
  config:Config = {
    navigationBarTitleText: '标题'
  }
  constructor (props: LoginProps) {
    super(props)
    this.state = {}
  }

  componentDidMount () {

  }

  render () {
    return (
      <View className='fx-login-wrap'>

      </View>
    )
  }
}

export default Login
