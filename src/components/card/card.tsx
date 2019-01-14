import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { CardProps, CardState } from './card.interface'
import './card.scss'

class Card extends Component<CardProps, CardState > {
  constructor (props: CardProps) {
    super(props)
    this.state = {}
  }
  static options = {
    addGlobalClass: true
  }
  static defaultProps:CardProps = {}

  render () {
    return (
      <View className='fx-card-wrap'>

      </View>
    )
  }
}

export default Card
