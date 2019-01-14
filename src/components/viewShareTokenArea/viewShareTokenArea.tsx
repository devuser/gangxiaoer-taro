import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ViewShareTokenAreaProps, ViewShareTokenAreaState } from './ViewShareTokenArea.interface'
import './ViewShareTokenArea.scss'
// import {ArticleDetailInterface} from '../../pages/common/ts/common.interface';

class ViewShareTokenArea extends Component < ViewShareTokenAreaProps,
ViewShareTokenAreaState > {
  constructor (props : ViewShareTokenAreaProps) {
    super(props)
    this.state = {
      //
    }
  }
  static options = {
    addGlobalClass: true
  }
  static defaultProps : ViewShareTokenAreaProps = {
    shareToken: '', dummy: ''
  }

  render () {
    const { shareToken, dummy } = this.props
    return (
      <View className='fx-viewShareTokenArea-wrap'>
        <View className='at-row' >
          <View className='at-col at-col-3'>{shareToken}</View>
          <View className='at-col at-col-6' > {dummy} </View>
        </View>
      </View>
    )
  }
}

export default ViewShareTokenArea
