import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {ViewArticleFooterProps, ViewArticleFooterState} from './ViewArticleFooter.interface'
import './ViewArticleFooter.scss'
// import {ArticleDetailInterface} from
// '../../pages/common/ts/common.interface';

class ViewArticleFooter extends Component < ViewArticleFooterProps,
ViewArticleFooterState > {
  constructor(props : ViewArticleFooterProps) {
    super(props)
    this.state = {
      //
    }
  }
  static options = {
    addGlobalClass: true
  }
  // static defaultProps : ViewArticleFooterProps = {   articleDetail:
  // <ArticleDetailInterface>{} }

  render() {
    const {articleDetail} = this.props
    return (
      <View className='at-row'>
        <View className='at-col at-col-4'>
          大拇指 : &nbsp; {articleDetail.handupcount
}
        </View>
        <View className='at-col at-col-4'>
          小拇指 : &nbsp; {articleDetail.handdowncount
}
        </View>
        < View className='at-col at-col-4'>
          收藏 : &nbsp; {articleDetail.favcount
}
        </View>
      </View>
    )
  }
}

export default ViewArticleFooter
