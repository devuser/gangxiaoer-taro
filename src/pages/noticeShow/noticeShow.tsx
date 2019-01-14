import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { NoticeShowProps, NoticeShowState } from './noticeShow.interface'
import './noticeShow.scss'
// import {  } from '../../components'

// @connect(({ noticeShow }) => ({
//     ...noticeShow,
// }))

class NoticeShow extends Component<NoticeShowProps, NoticeShowState > {
  config:Config = {
    navigationBarTitleText: '标题'
  }
  constructor (props: NoticeShowProps) {
    super(props)
    this.state = {}
  }

  componentDidMount () {

  }

  render () {
    return (
      <View className='fx-noticeShow-wrap'>

      </View>
    )
  }
}

export default NoticeShow
