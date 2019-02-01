import Taro, {Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import {AtIcon} from 'taro-ui';
import './index.less';

class Test extends Component {
  static defaultProps = {
    onClick: () => {},
    visible: false,
  };

  constructor (props) {
    super (props);
  }

  handleClick () {
    const {onClick} = this.props;
    if (onClick) {
      onClick ();
      return;
    }
  }

  render () {
    const {visible} = this.props;
    if (visible) {
      return (
        <View className='button' onClick={this.handleClick}>
          <AtIcon value='chevron-up' size='30' color='#fff' />
        </View>
      );
    }
    return null;
  }
}

export default Test;
