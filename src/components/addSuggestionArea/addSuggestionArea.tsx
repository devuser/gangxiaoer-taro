import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AddSuggestionAreaProps, AddSuggestionAreaState } from './addSuggestionArea.interface'
import './addSuggestionArea.scss'

class AddSuggestionArea extends Component<AddSuggestionAreaProps, AddSuggestionAreaState > {
  constructor (props: AddSuggestionAreaProps) {
    super(props)
    this.state = {}
  }
  static options = {
    addGlobalClass: true
  }
  static defaultProps:AddSuggestionAreaProps = {}

  render () {
    return (
      <View className='fx-addSuggestionArea-wrap'>

      </View>
    )
  }
}

export default AddSuggestionArea
