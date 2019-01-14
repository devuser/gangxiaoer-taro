import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { NoticeAreaProps, NoticeAreaState } from './noticeArea.interface'
import './noticeArea.scss'

class NoticeArea extends Component<NoticeAreaProps, NoticeAreaState > {
  constructor (props: NoticeAreaProps) {
    super(props)
    this.state = {}
  }
  static options = {
    addGlobalClass: true
  }
  static defaultProps:NoticeAreaProps = {}

  render () {
    return (
      <View className='fx-noticeArea-wrap'>

      </View>
    )
  }
}

export default NoticeArea
