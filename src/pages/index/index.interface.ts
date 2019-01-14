import {ArticleInterface} from '../common/ts/index'
/**
 * index.state 参数类型
 *
 * @export
 * @interface IndexState
 */


export interface UserInfoInterface {
  userName?: string
}

export interface BannerInterface {
  bannerType: string,
  businessId: number,
  dateAdd: string,
  dateUpdate: string,
  id: number,
  linkUrl: string,
  paixu: number,
  picUrl: string,
  // imageurl:string ,
  remark: string,
  status: number,
  statusStr: string,
  title: string,
  userId: number
}

export interface IndexState {
  month: number,
  day: number,
  dummy: string,

  token: string,
  // 当前选择的分类
  currentCategoryTabId: number,
  //
  pageindex: number,
  pagelen: number
}
export interface ArticleCategoryInterface {
  categorycn: string,
  categoryen: string,
  id: number,
  // 当前选择的分类
  imageurl: string,
  //
  sortorder: number,
  // 仅用于在首页显示页签
  title?: string,

}
export interface DataInterface {
  day: number,
  des: string,
  lunar: string,
  month: number,
  pic: string,
  title: string,
  year: number,
  _id?: string,
  userInfo?: UserInfoInterface
}

/**
 * index.props 参数类型
 *
 * @export
 * @interface IndexProps
 */
export interface IndexProps {
  dispatch?: any,
  data?: Array<DataInterface>,
  banner?: Array<BannerInterface>,

  articleCategoryList: Array<ArticleCategoryInterface>,
  // 文章清单
  articleList: Array<ArticleInterface>,
  articleTotal?: number,
  shareToken: string,
  //
  active?: boolean,

  // 维护分类字典，是为了快速获得中文分类名称
  cityName?: string,
  keyword?: string,
  keywordHistory?: Array<string>,
  // 首页冒泡式的通知信息
  notify?: string,
  // 首页滚动显示的通知消息
  noticeList?: Array<string>
}
