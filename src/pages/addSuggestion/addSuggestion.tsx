import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { AddSuggestionProps, AddSuggestionState } from './addSuggestion.interface'
import './addSuggestion.scss'
// import {  } from '../../components'

// @connect(({ addSuggestion }) => ({
//     ...addSuggestion,
// }))

class AddSuggestion extends Component<AddSuggestionProps, AddSuggestionState > {
  config:Config = {
    navigationBarTitleText: '标题'
  }
  constructor (props: AddSuggestionProps) {
    super(props)
    this.state = {}
  }

  componentDidMount () {

  }

  render () {
    return (
      <View className='fx-addSuggestion-wrap'>

      </View>
    )
  }
}

export default AddSuggestion
